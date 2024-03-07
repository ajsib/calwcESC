# CALWC ESC Digital Tools App - Developer Guide

## Introduction
Welcome to the `./front` subdirectory of the CALWC ESC Digital Tools App. This section of our repository contains a Next.js project, set up to serve as the front-end portion of our application. This README is tailored specifically for developers looking to get up and running with the project locally.

## Prerequisites
Before proceeding, ensure you have the following installed on your system:
- Node.js (LTS version recommended)
- npm (comes with Node.js)

## Setup
After cloning the main repository, navigate to the `./front` subdirectory to begin setting up the Next.js app.

```bash
cd path/to/repository/front
```

### Install Dependencies

First, install the project dependencies with npm
```bash
npm install
```

### Development Server

To start the development server, run the following command:
```bash
npm run dev
```

This will host the app locally at http://localhost:6738. Visit this URL in your browser to view the app. The development server features hot reloading, meaning any changes you make to the code will automatically refresh the page.

### Other Scripts

- `npm run build`: Compiles the application for production deployment.
- `npm start` Starts a Node.js server for serving the built application. Use after running npm `run build`

### Making Changes 

The primary entry point for the app resides in `./pages/index.tsx`. All additional pages will be organized within the `pages` directory. Introducing a new directory and `index.tsx` page will establish a new route for the app. These modifications will be rendered in the DOM.

Furthermore, a `./components` directory will be implemented for reusable components, categorized based on their use case.

### Deployments

Deployment Instructions will be provided at a later time contingent on the project's progression, and the decision to host the app on a specific platform.
Currently this next.js APP is hosted on Vercel for preview purposes.

### Support

For any questions or concerns, please reach out to the project maintainers.

- Cpl Aidan Sibley 
- Jess Daves

### License

Unauthorized copying of this file, via any medium is strictly prohibited


### Contact

Written by [Cpl Sibley](mailto:aidan.sibley@enc.forces.gc.ca), 7 March 2024.

