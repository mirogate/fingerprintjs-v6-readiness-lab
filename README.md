# fingerprintjs-v6-readiness-lab

An unofficial readiness checklist and contract-test lab for application teams preparing browser-identification code for a future major FingerprintJS upgrade.

FingerprintJS itself is maintained at https://github.com/fingerprintjs/fingerprintjs. This project is not affiliated with Fingerprint and does not publish or replace an official FingerprintJS version.

## Why This Exists

Application teams often depend on browser-identification results beyond a single frontend call. Visitor identifiers can be stored, joined, scored, blocked, or used in support workflows. A future major upgrade should not be a blind cutover.

This lab focuses on readiness:

- define the exact result fields your application consumes
- wrap package calls behind a small adapter
- store version metadata next to visitor identifiers
- plan a dual-write window for major-version changes
- use contract tests to catch breaking result-shape changes before production

## Contents

- `docs/readiness-checklist.md` - readiness checklist for application teams
- `docs/upstream-notes.md` - contribution etiquette for FingerprintJS
- `examples/major-version-contract.html` - adapter and result-shape contract example
- `scripts/validate.mjs` - repository smoke test

## Test

```bash
npm test
```

## Upstream Contribution Policy

FingerprintJS asks contributors to use reviewed issues or maintainer discussion for code changes. Treat this lab as an application-team reference first. If it reveals a concrete gap in upstream docs or examples, open a focused discussion before a pull request.

## License

MIT
