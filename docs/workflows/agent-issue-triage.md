# Agent Issue Triage

## Purpose

This workflow controls how agents select and handle open GitHub issues in this repository. It prevents duplicate work, makes the next action visible, and keeps human decisions explicit.

## Labels

Every issue managed by this workflow must have exactly one `agent:` state label.

| Label | Meaning |
| --- | --- |
| `agent:ready` | The issue has enough context and is ready for an agent to start work. Follow [Agent Ready Execution](agent-ready-execution.md). |
| `agent:in-progress` | An agent is actively working on the issue. |
| `agent:pr-open` | The issue has an associated open pull request. Follow [Agent Pull Request Open](agent-pr-open.md). |
| `agent:needs-context` | The agent needs an answer or more context before it can continue. Follow [Agent Needs Context](agent-needs-context.md). |
| `agent:blocked` | The issue cannot move forward because of an external dependency or decision. Follow [Agent Blocked](agent-blocked.md). |

## State Transitions

1. A maintainer marks an issue `agent:ready` when it is ready to be worked on.
2. Before starting work, the agent replaces `agent:ready` with `agent:in-progress`.
3. When the agent opens or associates a pull request, it replaces `agent:in-progress` with `agent:pr-open`.
4. When the agent needs a response, it asks its questions in an issue comment and replaces the current state with `agent:needs-context`.
5. After the questions are answered, a maintainer replaces `agent:needs-context` with `agent:ready`.
6. When an external dependency or decision prevents progress, the agent explains the blocker in an issue comment and applies `agent:blocked`.
7. When the pull request is merged and the issue is resolved, close the issue instead of adding a completed-state label.

## Scheduled Triage Rules

The scheduled agent must evaluate open issues by their `agent:` state.

- Before starting work on any issue, check whether it has an associated open pull request. An open pull request always takes precedence over the issue label.
- If an issue has an associated open pull request, do not start a new task, create a specification, or open another pull request for it. If the issue is not labeled `agent:pr-open`, report the label mismatch for maintainer resolution.
- For `agent:ready` without an associated open pull request, start work only after changing the label to `agent:in-progress`.
- For `agent:in-progress`, do not start a second task for the same issue.
- For `agent:pr-open`, do not start implementation work. Report the linked pull request when relevant.
- For `agent:needs-context` and `agent:blocked`, do not start work. Report the issue only when a maintainer needs to act.
- For issues without an `agent:` state label, do not start work. Report them as requiring triage.

## Label Integrity

- An issue must never have more than one `agent:` state label.
- State labels describe the current condition, not the issue history.
- Do not remove or change unrelated issue labels.
- If an issue has conflicting `agent:` state labels, do not act on it. Report the conflict for maintainer resolution.
