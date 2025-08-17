# Git Workflow Rules

## Overview
This document outlines the standard Git workflow for the Masterpet landing page project, ensuring consistent and proper version control practices.

## Branch Strategy
- **main**: Production-ready code
- **develop**: Development branch for active work
- **feature/***: Feature branches for specific features
- **hotfix/***: Hotfix branches for urgent production fixes

## Complete Workflow Process

### 1. Pre-Commit Checklist
Before committing, ensure:
- [ ] All changes are working as expected
- [ ] No console errors or warnings
- [ ] Code follows project conventions
- [ ] No sensitive data is being committed
- [ ] All necessary files are staged
- [ ] Project builds successfully without errors

### 2. Build Check
Before staging changes, ensure the project builds successfully:
```bash
# Run build to check for errors
npm run build

# Or if using bun
bun run build

# Check for any build errors and fix them before proceeding
```

### 3. Staging Changes
```bash
# Stage all changes
git add .

# Or stage specific files
git add <filename>

# Check what's staged
git status
```

### 4. Committing Changes

#### Commit Message Format
Follow the conventional commit format:
```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

#### Commit Types
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, etc.)
- **refactor**: Code refactoring
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

#### Examples
```bash
# Feature commit
git commit -m "feat(hero): add new hero section with animated mascot"

# Bug fix commit
git commit -m "fix(navigation): resolve mobile menu toggle issue"

# Documentation commit
git commit -m "docs(readme): update installation instructions"

# Style commit
git commit -m "style(components): format code with prettier"

# Refactor commit
git commit -m "refactor(api): restructure booking endpoint for better performance"
```

#### Best Practices for Commit Messages
- Use present tense ("add" not "added")
- Use imperative mood ("move" not "moves")
- Keep the first line under 50 characters
- Capitalize the first letter
- Don't end with a period
- Be descriptive but concise

### 5. Pushing Changes
```bash
# Push to current branch
git push

# Push to specific branch
git push origin <branch-name>

# Push with upstream tracking (first time)
git push -u origin <branch-name>
```

### 6. Merging with Main

#### Option A: Pull Request (Recommended)
1. **Create Pull Request**
   ```bash
   # Ensure you're on develop branch
   git checkout develop
   
   # Push latest changes
   git push origin develop
   ```

2. **Create PR on GitHub/GitLab**
   - Go to repository on GitHub/GitLab
   - Click "New Pull Request"
   - Set base branch as `main`
   - Set compare branch as `develop`
   - Add description of changes
   - Request review if needed

3. **Merge via Web Interface**
   - Review the PR
   - Resolve any conflicts
   - Click "Merge pull request"
   - Delete the branch if prompted

#### Option B: Direct Merge (Use with caution)
```bash
# Switch to main branch
git checkout main

# Pull latest changes
git pull origin main

# Merge develop into main and give comment if needed
git merge develop

# Push to main
git push origin main
```

### 7. Switching Back to Develop
```bash
# Switch to develop branch
git checkout develop

# Pull latest changes (if others have pushed)
git pull origin develop

# Verify you're on develop
git branch
```

## Complete Workflow Example

```bash
# 1. Build check
npm run build

# 2. Stage all changes
git add .

# 3. Commit with proper message
git commit -m "feat(grooming): add new grooming form with image upload"

# 4. Push to develop
git push origin develop

# 5. Switch to main
git checkout main

# 6. Pull latest main
git pull origin main

# 7. Merge develop into main and give a comment if needed
git merge develop

# 8. Push to main
git push origin main

# 9. Switch back to develop
git checkout develop

# 10. Pull latest develop (if others have pushed)
git pull origin develop
```

## Conflict Resolution

### If Merge Conflicts Occur
1. **Identify conflicts**
   ```bash
   git status
   ```

2. **Open conflicted files** and resolve manually
   - Look for `<<<<<<<`, `=======`, `>>>>>>>` markers
   - Choose which changes to keep
   - Remove conflict markers

3. **Stage resolved files**
   ```bash
   git add <resolved-file>
   ```

4. **Complete the merge**
   ```bash
   git commit -m "merge: resolve conflicts in <filename>"
   ```

## Emergency Procedures

### Undo Last Commit (Before Push)
```bash
git reset --soft HEAD~1
```

### Undo Last Commit (After Push)
```bash
git revert HEAD
git push origin <branch-name>
```

### Abort Merge
```bash
git merge --abort
```

## Branch Management

### Create New Feature Branch
```bash
git checkout develop
git pull origin develop
git checkout -b feature/new-feature-name
```

### Delete Feature Branch
```bash
# After merging to main
git branch -d feature/branch-name
git push origin --delete feature/branch-name
```

## Best Practices

### General
- Always pull before pushing
- Use meaningful commit messages
- Keep commits atomic (one logical change per commit)
- Test before committing
- Review your changes with `git diff`

### Branch Management
- Never commit directly to main
- Keep develop branch stable
- Delete feature branches after merging
- Use descriptive branch names

### Code Quality
- Run build check before committing (`npm run build` or `bun run build`)
- Run linting before committing
- Ensure all tests pass
- Follow the project's coding standards
- Document significant changes

## Troubleshooting

### Common Issues

#### "Your branch is behind"
```bash
git pull origin <branch-name>
```

#### "Permission denied"
- Check if you have write access to the repository
- Ensure your SSH keys are properly configured

#### "Merge conflict"
- Follow the conflict resolution steps above
- When in doubt, ask for help

#### "Detached HEAD"
```bash
git checkout develop
```

## Tools and Aliases

### Useful Git Aliases
Add these to your `.gitconfig`:
```bash
[alias]
    st = status
    co = checkout
    br = branch
    ci = commit
    unstage = reset HEAD --
    last = log -1 HEAD
    visual = !gitk
```

### Git Hooks
Consider setting up pre-commit hooks for:
- Build check (`npm run build`)
- Linting
- Testing
- Commit message validation
- File size checks

## Review Checklist

Before completing the workflow, ensure:
- [ ] Project builds successfully without errors
- [ ] All changes are committed with proper messages
- [ ] Code has been tested
- [ ] No sensitive data is included
- [ ] Documentation is updated if needed
- [ ] Changes are pushed to the correct branch
- [ ] Merge conflicts are resolved
- [ ] You're back on the develop branch

---

**Remember**: This workflow ensures code quality, proper version control, and team collaboration. Always follow these rules to maintain a clean and organized repository.
