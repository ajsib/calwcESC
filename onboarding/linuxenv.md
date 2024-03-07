# Setting Up Your Linux Development Environment

## For Windows Users

### Installing WSL (Windows Subsystem for Linux)

Windows Subsystem for Linux (WSL) allows you to run a GNU/Linux environment directly on Windows.

Follow Microsoft's official guide to install WSL:

```
https://docs.microsoft.com/en-us/windows/wsl/install
```

## For MacOS Users

### Setting Up a Linux Environment in VS Code

MacOS users can set up a Linux-like environment using VS Code. Here's how to get started:

1. Install Homebrew (if not already installed):
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2. Use Homebrew to install necessary packages for development:
```
brew install git
```

3. Install VS Code (if not already installed):
```
brew install --cask visual-studio-code
```

4. Within VS Code, open the terminal. It uses the zsh shell by default, which provides a Linux-like experience.

---

This setup will provide a smooth development experience consistent across Windows, MacOS, and Linux platforms. If you have any questions, please refer to the community forums or contact a team lead.
