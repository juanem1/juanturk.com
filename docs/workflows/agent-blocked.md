# Agent Blocked

## Purpose

This workflow defines how an agent must report an external dependency or decision that prevents progress.

## Required Steps

1. Post a new issue comment that explains the blocker with enough detail for a maintainer to understand its impact.
2. Include a concrete suggestion for resolving the blocker or state the decision that is needed.
3. Replace the current `agent:` state label with `agent:blocked`.
4. Do not continue implementation until the blocker is resolved and a maintainer marks the issue `agent:ready`.

## Sensitive Information

Do not expose sensitive information in the blocker report. This includes credentials, API keys, tokens, environment-variable values, private URLs, and other secrets. Describe the blocker safely and point maintainers to an approved secure channel when necessary.
