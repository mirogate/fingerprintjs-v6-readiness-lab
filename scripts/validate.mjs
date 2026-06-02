import { readFile } from 'node:fs/promises'

const files = [
  'docs/readiness-checklist.md',
  'docs/upstream-notes.md',
  'examples/major-version-contract.html',
]

const contents = new Map()
for (const file of files) {
  contents.set(file, await readFile(new URL(`../${file}`, import.meta.url), 'utf8'))
}

const checklist = contents.get('docs/readiness-checklist.md')
const example = contents.get('examples/major-version-contract.html')

const requiredChecklistTerms = ['Inventory', 'Adapter Boundary', 'Server Rollout', 'Validation', 'Cleanup']
for (const term of requiredChecklistTerms) {
  if (!checklist.includes(term)) {
    throw new Error(`Missing checklist section: ${term}`)
  }
}

for (const term of ['normalizeFingerprintResult', 'assertContract', 'packageVersion', 'visitorId']) {
  if (!example.includes(term)) {
    throw new Error(`Example is missing contract term: ${term}`)
  }
}

console.log('fingerprintjs-v6-readiness-lab validation passed')
