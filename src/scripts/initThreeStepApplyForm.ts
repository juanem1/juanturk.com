type ApplyFormStep = "contact" | "qualification" | "diagnostic";
type ApplyFormTerminalStep = "qualified";
type ApplyFormState = ApplyFormStep | ApplyFormTerminalStep;
type ApplyFormField = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
type AnalyticsEventParams = Record<string, string | number>;
type GtagFunction = (
  command: "event",
  eventName: string,
  eventParams: AnalyticsEventParams,
) => void;

interface AnalyticsWindow extends Window {
  readonly gtag?: GtagFunction;
}

interface ElementConstructor<T extends Element> {
  new (): T;
}

export interface ThreeStepApplyFormConfig<TPayload extends Record<string, string>> {
  readonly createPayload: (formData: FormData) => TPayload;
  readonly eventPrefix: string;
  readonly formName: string;
  readonly missingElementContext: string;
  readonly rootSelector: string;
  readonly sentDatasetKey: string;
  readonly skipSubmitForTesting: string | undefined;
  readonly sourcePath: string;
  readonly submissionFailureLabel: string;
  readonly userFacingSubmitErrorMessage: string;
  readonly webhookUrl: string;
}

export class FormSubmissionError extends Error {
  readonly responseBody: string;
  readonly statusCode: number;

  constructor(message: string, statusCode: number, responseBody: string) {
    super(message);
    this.name = "FormSubmissionError";
    this.responseBody = responseBody;
    this.statusCode = statusCode;
  }
}

const isApplyFormField = (element: Element): element is ApplyFormField => {
  return (
    element instanceof HTMLInputElement ||
    element instanceof HTMLSelectElement ||
    element instanceof HTMLTextAreaElement
  );
};

const getRequiredElement = <T extends Element>(
  parent: ParentNode,
  selector: string,
  elementType: ElementConstructor<T>,
  missingElementContext: string,
): T => {
  const element = parent.querySelector(selector);

  if (!(element instanceof elementType)) {
    throw new Error(`${missingElementContext} is missing required element: ${selector}`);
  }

  return element;
};

const getRequiredElements = <T extends Element>(
  parent: ParentNode,
  selector: string,
  elementType: ElementConstructor<T>,
  missingElementContext: string,
): readonly T[] => {
  const elements = Array.from(parent.querySelectorAll(selector)).filter((element): element is T => {
    return element instanceof elementType;
  });

  if (elements.length === 0) {
    throw new Error(`${missingElementContext} is missing required elements: ${selector}`);
  }

  return elements;
};

const shouldSubmit = (skipSubmitForTesting: string | undefined): boolean => {
  return skipSubmitForTesting !== "true";
};

const clearMessage = (messageElement: HTMLDivElement): void => {
  messageElement.hidden = true;
  messageElement.textContent = "";
  messageElement.dataset.state = "";
};

const showErrorMessage = (messageElement: HTMLDivElement, message: string): void => {
  messageElement.hidden = false;
  messageElement.textContent = message;
  messageElement.dataset.state = "error";
};

const scrollFormToTop = (root: HTMLDivElement): void => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  requestAnimationFrame(() => {
    root.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  });
};

const createActionableErrorMessage = (
  error: unknown,
  userFacingSubmitErrorMessage: string,
): string => {
  if (error instanceof FormSubmissionError) {
    return userFacingSubmitErrorMessage;
  }

  if (error instanceof Error) {
    return userFacingSubmitErrorMessage;
  }

  return userFacingSubmitErrorMessage;
};

const submitPayload = async <TPayload extends Record<string, string>>(
  webhookUrl: string,
  payload: TPayload,
  submissionFailureLabel: string,
): Promise<void> => {
  const response = await fetch(webhookUrl, {
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  const responseBody = await response.text();

  if (!response.ok) {
    throw new FormSubmissionError(
      `${submissionFailureLabel} failed with status ${response.status}.`,
      response.status,
      responseBody,
    );
  }
};

export const readString = (formData: FormData, fieldName: string): string => {
  const value = formData.get(fieldName);

  if (typeof value !== "string") {
    throw new Error(`Missing expected string value for ${fieldName}.`);
  }

  return value.trim();
};

export const initThreeStepApplyForm = <TPayload extends Record<string, string>>(
  config: ThreeStepApplyFormConfig<TPayload>,
): void => {
  const root = document.querySelector(config.rootSelector);

  if (!(root instanceof HTMLDivElement) || root.dataset.initialized === "true") {
    return;
  }

  const form = getRequiredElement(
    root,
    "[data-review-form]",
    HTMLFormElement,
    config.missingElementContext,
  );
  const messageElement = getRequiredElement(
    root,
    "[data-form-message]",
    HTMLDivElement,
    config.missingElementContext,
  );
  const contactPanel = getRequiredElement(
    root,
    '[data-step-panel="contact"]',
    HTMLElement,
    config.missingElementContext,
  );
  const qualificationPanel = getRequiredElement(
    root,
    '[data-step-panel="qualification"]',
    HTMLElement,
    config.missingElementContext,
  );
  const diagnosticPanel = getRequiredElement(
    root,
    '[data-step-panel="diagnostic"]',
    HTMLElement,
    config.missingElementContext,
  );
  const qualifiedPanel = getRequiredElement(
    root,
    '[data-terminal-panel="qualified"]',
    HTMLElement,
    config.missingElementContext,
  );
  const qualifiedSubmitButton = getRequiredElement(
    root,
    "[data-qualified-submit]",
    HTMLButtonElement,
    config.missingElementContext,
  );
  const nextContactButton = getRequiredElement(
    root,
    '[data-action="next-contact"]',
    HTMLButtonElement,
    config.missingElementContext,
  );
  const backContactButton = getRequiredElement(
    root,
    '[data-action="back-contact"]',
    HTMLButtonElement,
    config.missingElementContext,
  );
  const nextQualificationButton = getRequiredElement(
    root,
    '[data-action="next-qualification"]',
    HTMLButtonElement,
    config.missingElementContext,
  );
  const backQualificationButtons = getRequiredElements(
    root,
    '[data-action="back-qualification"]',
    HTMLButtonElement,
    config.missingElementContext,
  );

  root.dataset.initialized = "true";

  const panelsByStep: Record<ApplyFormStep, HTMLElement> = {
    contact: contactPanel,
    diagnostic: diagnosticPanel,
    qualification: qualificationPanel,
  };
  const stepNumbers: Record<ApplyFormState, number> = {
    contact: 1,
    qualification: 2,
    diagnostic: 3,
    qualified: 4,
  };
  const qualifiedSubmitLabel = qualifiedSubmitButton.innerHTML;
  const analyticsWindow = window as AnalyticsWindow;

  const sendGtagEvent = (eventSuffix: string, eventParams: AnalyticsEventParams): void => {
    if (typeof analyticsWindow.gtag !== "function") {
      return;
    }

    analyticsWindow.gtag("event", `${config.eventPrefix}_${eventSuffix}`, {
      form_name: config.formName,
      source_path: config.sourcePath,
      ...eventParams,
    });
  };

  const showStep = (step: ApplyFormStep): void => {
    clearMessage(messageElement);
    form.hidden = false;
    qualifiedPanel.hidden = true;

    Object.keys(panelsByStep).forEach((stepId) => {
      const typedStepId = stepId as ApplyFormStep;
      panelsByStep[typedStepId].hidden = typedStepId !== step;
    });

    sendGtagEvent("step_view", {
      page_path: window.location.pathname,
      step_name: step,
      step_number: stepNumbers[step],
    });
  };

  const showQualifiedTerminal = (): void => {
    clearMessage(messageElement);
    form.hidden = true;
    qualifiedPanel.hidden = false;
    document.documentElement.dataset[config.sentDatasetKey] = "true";

    sendGtagEvent("step_view", {
      page_path: window.location.pathname,
      step_name: "qualified",
      step_number: stepNumbers.qualified,
    });
  };

  const getPanelFields = (step: ApplyFormStep): readonly ApplyFormField[] => {
    return Array.from(
      panelsByStep[step].querySelectorAll("input, select, textarea"),
    ).filter(isApplyFormField);
  };

  const validateStep = (step: ApplyFormStep): boolean => {
    const fields = getPanelFields(step);
    const invalidField = fields.find((field) => !field.checkValidity());

    if (!invalidField) {
      return true;
    }

    sendGtagEvent("validation_error", {
      field_name: invalidField.getAttribute("name") || "",
      page_path: window.location.pathname,
      step_name: step,
      step_number: stepNumbers[step],
    });
    invalidField.reportValidity();
    invalidField.focus();
    return false;
  };

  const setButtonsDisabled = (isDisabled: boolean): void => {
    qualifiedSubmitButton.disabled = isDisabled;
  };

  const setQualifiedSubmittingState = (isSubmitting: boolean): void => {
    qualifiedSubmitButton.innerHTML = isSubmitting ? "Submitting..." : qualifiedSubmitLabel;
  };

  const moveFromContactToQualification = (): void => {
    if (!validateStep("contact")) {
      return;
    }

    sendGtagEvent("step_complete", {
      page_path: window.location.pathname,
      step_name: "contact",
      step_number: stepNumbers.contact,
    });
    showStep("qualification");
    scrollFormToTop(root);
  };

  const moveFromQualification = (): void => {
    if (!validateStep("qualification")) {
      return;
    }

    sendGtagEvent("step_complete", {
      page_path: window.location.pathname,
      step_name: "qualification",
      step_number: stepNumbers.qualification,
    });
    showStep("diagnostic");
    scrollFormToTop(root);
  };

  const submitQualifiedApplication = async (): Promise<void> => {
    if (!validateStep("diagnostic")) {
      return;
    }

    clearMessage(messageElement);
    setButtonsDisabled(true);
    setQualifiedSubmittingState(true);

    sendGtagEvent("submit_attempt", {
      page_path: window.location.pathname,
      step_name: "diagnostic",
      step_number: stepNumbers.diagnostic,
    });

    try {
      if (shouldSubmit(config.skipSubmitForTesting)) {
        const payload = config.createPayload(new FormData(form));
        await submitPayload(config.webhookUrl, payload, config.submissionFailureLabel);
      }

      sendGtagEvent("step_complete", {
        page_path: window.location.pathname,
        step_name: "diagnostic",
        step_number: stepNumbers.diagnostic,
      });
      sendGtagEvent("submit_success", {
        page_path: window.location.pathname,
      });
      showQualifiedTerminal();
    } catch (error) {
      sendGtagEvent("submit_error", {
        error_name: error instanceof Error ? error.name : "UnknownError",
        page_path: window.location.pathname,
        status_code: error instanceof FormSubmissionError ? error.statusCode : "",
      });
      showErrorMessage(
        messageElement,
        createActionableErrorMessage(error, config.userFacingSubmitErrorMessage),
      );
    } finally {
      setQualifiedSubmittingState(false);
      setButtonsDisabled(false);
    }
  };

  nextContactButton.addEventListener("click", moveFromContactToQualification);
  backContactButton.addEventListener("click", () => {
    showStep("contact");
  });
  nextQualificationButton.addEventListener("click", moveFromQualification);
  backQualificationButtons.forEach((button) => {
    button.addEventListener("click", () => {
      showStep("qualification");
    });
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    void submitQualifiedApplication();
  });

  sendGtagEvent("step_view", {
    page_path: window.location.pathname,
    step_name: "contact",
    step_number: stepNumbers.contact,
  });
};
