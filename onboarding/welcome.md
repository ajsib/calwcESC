# Welcome to the CALWC ESC Digital Tools Project

## Repository Overview
This repository is the core of our development for the CALWC ESC digital tools. Here you'll find all the necessary instructions to get started, contribute to the project, and collaborate with the team.

## Linux Environment

We will be using Linux as our primary development environment. If you're using MacOS or Windows, you can set up a Linux environment using WSL (Windows Subsystem for Linux) or a virtual machine. See [This Guide](./linuxenv.md) for more information.

## Getting Started with Git

Before you begin, make sure you have Git installed. If you're using a Linux environment or WSL on Windows, you should already have Git. For MacOS users, Git can be installed through the terminal or with Git clients like SourceTree.

### Cloning the Repository

To clone the repository, open your terminal in VS Code and run:

```
git clone https://github.com/ajsib/calwcESC/
```

### Setting Up Your Branch

Once cloned, navigate to your repository directory:

```
cd calwcESC
```

Then, check out to your personal branch, which should be your first name:

```
git checkout -b <your-first-name>
```

Confirm you're on the right branch:

```
git branch
```

### Making Changes

After making changes in your development environment, use the following commands to add and commit your work:

```
git add .
git commit -m "Your commit message"
```

Your commit message should be concise and reflect the changes made. For example:

```
git commit -m "Add login functionality to user interface"
```

### Pushing Changes

To push your commits to the remote repository, run:

```
git push origin <your-first-name>
```

### Collaboration and Merging

After pushing your changes, notify Cpl Sibley. He will review your work and merge it into the production branch, typically called `main`.

```
// Notify Cpl Sibley with your preferred method of communication
```

## Further Assistance

For additional guidance on setting up your Linux environment on MacOS or Windows, refer to the `./linuxenv.md` guide.

Congratulations if you're already using Linux!

---
For more information, contact Cpl Sibley or refer to the project's documentation and guidelines.
