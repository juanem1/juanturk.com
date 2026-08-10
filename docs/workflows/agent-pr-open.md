# Agent Pull Request Open

## Purpose

This workflow defines the required issue update after an agent opens a pull request for an issue.

## Required Steps

1. Confirm that the pull request is associated with the issue.
2. Post a new, brief issue comment containing the pull request link.
3. Replace `agent:in-progress` with `agent:pr-open`.
4. Do not begin a second implementation task for the issue while the pull request remains open.

## Sensitive Information

Do not expose sensitive information in the issue comment or pull request. This includes credentials, API keys, tokens, environment-variable values, private URLs, and other secrets.
