# Agent Needs Context

## Purpose

This workflow defines how an agent must request missing information or resolve ambiguity before it can proceed.

## Required Steps

1. Identify the exact ambiguity or missing information that prevents progress.
2. Post a new issue comment with concise, actionable questions. Never edit an existing issue comment.
3. Replace the current `agent:` state label with `agent:needs-context`.
4. Do not create a specification or pull request until a maintainer provides the required context.
5. When the issue is later marked `agent:ready`, read all comments again and use any answers provided since the previous review.

## Sensitive Information

Do not request, repeat, or expose sensitive information in issue comments. This includes credentials, API keys, tokens, environment-variable values, private URLs, and other secrets. Ask for a safe reference or an approved alternative when such information is required.
