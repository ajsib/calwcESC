# Git Workflow

This document provides an overview of the Git workflow for the CALWC ESC Digital Tools project, guiding you through the process of making changes, committing, and pushing your work.

## Getting Started

Ensure you have Git installed in your development environment. Refer to the [Environment Setup](./environment.md) guide for instructions on setting up your environment and cloning the repository.

## Making Changes

After setting up your branch and working on your tasks, follow these steps to commit and push your changes:

1. **Stage Changes**: Add your changes to the staging area.

```
git add .
```

2. **Commit Changes**: Commit your staged changes with a concise, descriptive message.

```
git commit -m "Describe the changes you made"
```

Examples of commit messages:

- `git commit -m "Add login functionality"`
- `git commit -m "Fix header layout in mobile view"`

## Pushing Changes

Push your commits to the remote repository under your branch:

```
git push origin <your-first-name>
```

## Collaboration and Merging

Once you`ve pushed your changes, notify the team lead for review. After review, your changes will be merged into the main branch.

- Notify the team lead of your completed work through your preferred communication method.

## Best Practices

- Commit often with relevant messages.
- Push regularly to avoid conflicts.
- Communicate with the team about your progress and any issues you encounter.

For further assistance with Git, refer to the Git documentation or contact a project lead.
