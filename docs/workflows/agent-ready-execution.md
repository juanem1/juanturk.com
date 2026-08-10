# Agent Ready Execution

## Purpose

This workflow defines how an agent must handle an issue labeled `agent:ready`.

## Required Steps

1. Read the entire issue body and every issue comment before making a decision.
2. Treat answers in later comments as authoritative context for previously open questions, unless they conflict with newer maintainer guidance.
3. Determine whether the issue contains enough unambiguous information to create a specification.
4. If information is missing or ambiguous, follow `docs/workflows/agent-needs-context.md`. Do not create a specification or pull request.
5. If the issue is unambiguous, replace `agent:ready` with `agent:in-progress` before starting work.
6. Use the `spec` skill to create the specification.
7. Create a pull request containing the specification and follow `docs/workflows/agent-pr-open.md` after the pull request is open.

## Sensitive Information

Do not expose sensitive information in the specification, issue comments, pull request title, pull request body, commits, or logs. This includes credentials, API keys, tokens, environment-variable values, private URLs, and other secrets.
