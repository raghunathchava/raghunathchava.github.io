# Raghunath Chava Website — Agent Instructions

**https://raghunathchava.com**  
**Version**: 1.0.0  
**Last Updated**: January 7, 2026

---

## This Repository: raghunathchava.github.io

**Purpose:** Portfolio and website for Raghunath Chava.

**Deployment:** GitHub Pages (via GitHub Actions)

---

## What This Repository Contains

```
raghunathchava.github.io/
├── src/
│   ├── App.tsx
│   ├── components/            # UI components
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   └── pages/                 # Page routes
│       ├── Home.tsx
│       ├── About.tsx
│       ├── Contact.tsx
│       └── ...
├── public/                    # Static assets
├── index.html
├── vite.config.ts
└── tailwind.config.js
```

---

## What This Repository Does NOT Contain

❌ Backend code → Not a web application  
❌ Business logic → Static website  
❌ Customer data → No data handling  

---

## Deployment

```bash
# Build
npm ci
npm run build

# Deploy (via GitHub Actions)
# Automatically deploys to GitHub Pages on merge to main
```

### URLs

| Environment | URL |
|-------------|-----|
| Production | https://raghunathchava.github.io |
| Custom Domain | (Configure if applicable) |

---

## Key Pages

| Page | Purpose |
|------|---------|
| `/` | Home page, hero section, introduction |
| `/about` | About me, background, experience |
| `/projects` | Portfolio projects and work |
| `/contact` | Contact information and form |
| `/blog` | Blog posts (if applicable) |

---

## External Links

| Link | Destination |
|------|-------------|
| "GitHub" | https://github.com/raghunathchava |
| "LinkedIn" | (Add LinkedIn profile URL) |
| "Email" | mailto: (Add email address) |

---

## Development

```bash
npm ci
npm run dev    # Local development
npm run build  # Production build
npm run lint   # Lint check
```

---

## Agent Workflow Checkpoints (MANDATORY)

**⚠️ CRITICAL: These checkpoints MUST be followed for ALL code generation tasks.**

### After Editing Each TypeScript File

```
☐ 1. Run TypeScript check on the edited file:
     npx tsc --noEmit src/{path_to_file}.tsx

☐ 2. If errors exist, FIX IMMEDIATELY before continuing
     - Do NOT proceed to next file with errors
     - Do NOT declare task complete with errors

☐ 3. Run ESLint on the edited file:
     npx eslint src/{path_to_file}.tsx --max-warnings 0
```

### Before Declaring Task Complete

```
☐ 1. Run full TypeScript build:
     npm run build
     ZERO errors required

☐ 2. Run full ESLint check:
     npm run lint
     ZERO warnings required

☐ 3. If errors exist, DO NOT declare complete
     - Fix all errors
     - Re-run checks
     - Only declare complete when ALL checks pass
```

---

## Pre-Commit Hooks & Quality Gates

**MANDATORY: All commits MUST pass pre-commit hooks before being pushed.**

### Setup Pre-Commit Hooks

```bash
# Install pre-commit (Python tool)
pip install pre-commit

# Install hooks
pre-commit install

# Run manually on all files
pre-commit run --all-files
```

### Pre-Commit Checks

The following checks are **MANDATORY** and **BLOCKING**:

| Check | Rule | Enforcement |
|-------|------|-------------|
| TypeScript | `tsc --noEmit` — ZERO errors | Block commit |
| ESLint | `npm run lint` — ZERO warnings | Block commit |
| Prettier | Format check — All files formatted | Block commit |
| File Quality | Trailing whitespace, EOF, YAML/JSON validation | Block commit |
| Security | Secret detection — No hardcoded secrets | Block commit |

**No exceptions. No bypasses. All checks must pass.**

---

## GitHub Workflows

**MANDATORY: All workflows must pass before merge.**

### Quality Guardrails Workflow

- Runs on: Push to `main` and all PRs
- Enforces: TypeScript (zero errors), ESLint (zero warnings), Prettier, Build
- **Status**: Blocking — PR cannot be merged if this fails

### CI Workflow

- Runs on: All pushes and PRs
- Includes: Quality checks, Build, Security scan
- **Status**: Blocking — PR cannot be merged if this fails

### GitHub Pages Deployment

- Runs on: Push to `main` branch
- Automatically builds and deploys to GitHub Pages
- **Status**: Non-blocking for PRs, but must succeed for deployment

---

## Phase Completion & PR Process

**CRITICAL: After successful completion of every phase, follow this process:**

### 1. Testing (MANDATORY)

Before creating a PR, **ALL tests must pass**:

```bash
# Run all quality checks
npm run typecheck     # TypeScript (must pass with zero errors)
npm run lint          # ESLint (must pass with zero warnings)
npx prettier --check "src/**/*.{ts,tsx,json,css,md}"  # Format check
npm run build         # Build must succeed
```

**If any check fails, fix the issues before proceeding.**

### 2. Pre-Commit Validation

Ensure pre-commit hooks pass:

```bash
pre-commit run --all-files
```

**All hooks must pass. No exceptions.**

### 3. Create Pull Request

Once **ALL tests pass** and **ALL pre-commit hooks pass**:

1. **Commit changes** with descriptive commit messages
2. **Push to feature branch**
3. **Create Pull Request** in GitHub targeting `main`
4. **Wait for CI/CD workflows** to complete and pass
5. **Review changes** and ensure quality
6. **Merge only after** all checks pass

**DO NOT create PRs with failing tests or pre-commit hooks.**

**DO NOT merge PRs that fail CI/CD workflows.**

---

## Quality Standards

| Standard | Requirement | Enforcement |
|----------|-------------|-------------|
| TypeScript Errors | ZERO | Pre-commit + CI |
| ESLint Warnings | ZERO | Pre-commit + CI |
| Code Formatting | Prettier compliant | Pre-commit + CI |
| Build Success | Must build without errors | CI |
| Security | No secrets, no vulnerabilities | Pre-commit + CI |

---

## Content Guidelines

When editing content:

- ** Branding**: Maintain consistent tone and style
- **Accessibility**: Ensure all content is accessible (WCAG 2.1 AA minimum)
- **SEO**: Use appropriate meta tags and semantic HTML
- **Performance**: Optimize images and assets for web
- **Mobile First**: Ensure responsive design on all devices

---

**Classification:** Website  
**Owner:** Raghunath Chava
