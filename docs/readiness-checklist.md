# FingerprintJS Major-Version Readiness Checklist

This checklist helps application teams prepare for future major-version changes in browser-identification code.

## Inventory

- Identify every location that initializes FingerprintJS.
- Identify every backend endpoint that receives a visitor identifier.
- Identify every database table or analytics store that persists the identifier.
- Identify business logic that compares, blocks, deduplicates, or scores visitors.
- Identify dashboards, alerts, and support workflows that depend on identifier behavior.

## Adapter Boundary

- Create one application adapter for browser-identification calls.
- Keep direct package calls out of feature code.
- Normalize the result shape returned by the adapter.
- Include package/version metadata in the normalized result.
- Add contract tests for every field the application consumes.

## Server Rollout

- Accept version-aware identifier fields.
- Plan a dual-write window for any major-version change.
- Match on old and new identifiers during a controlled transition.
- Store the new identifier when present.
- Keep cleanup criteria visible before removing old matching behavior.

## Validation

- Compare identifier coverage across browsers used by your audience.
- Verify private/incognito behavior separately.
- Verify server-side matching does not create duplicate records for known users.
- Confirm dashboards and alerts use version-aware fields.
- Keep rollback instructions that return the app to the previous package version.

## Cleanup

- Remove obsolete package imports after the transition window.
- Remove legacy request fields only after downstream consumers are migrated.
- Archive migration metrics and decisions.
- Update runbooks with the new identifier semantics.
