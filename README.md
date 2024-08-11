# Front-End for Dynamic One-Page Website with React

This is the front-end portion of the Dynamic One-Page Website project, built with React and styled using Tailwind CSS. The front-end displays a banner with a countdown timer and provides an internal dashboard for managing the banner’s content.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Demo Video](#demo-video)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Banner with Countdown Timer**: Displays a banner with customizable content and a countdown timer that updates in real-time.
- **Internal Dashboard**: Allows for updating the banner’s description, timer, link, and visibility.
- **Responsive Design**: Uses Tailwind CSS to ensure a clean and responsive layout across different devices.

## Tech Stack
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: For making HTTP requests to the back-end server.

## Installation

### Prerequisites
- Node.js and npm installed on your machine.

### 1. Clone the Repository
```bash
git clone https://github.com/saiganesh00/takeUforward-SWE-frontend
cd takeUforward-SWE-frontend/frontend
```

### 2. Install Dependencies
Navigate to the `frontend` directory and install the required dependencies:
```bash
npm install
```

### 3. Start the Development Server
Run the following command to start the React development server:
```bash
npm start
```

The development server will run on `http://localhost:3000`.

## Project Structure
```
frontend
├── node_modules
├── public
│   └── index.html           # HTML file for React
├── src
│   ├── components
│   │   ├── Banner.js        # Banner component with countdown timer
│   │   └── Dashboard.js     # Dashboard component for updating banner
│   ├── App.js               # Main React component
│   └── index.js             # React entry point
└── package.json             # Front-end dependencies
```

## Usage

### 1. Access the Application
- Open your browser and go to `http://localhost:3000` to view the main page with the banner.

### 2. Internal Dashboard
- The dashboard is integrated into the front-end and allows you to:
  - Update the banner’s description.
  - Set the countdown timer for the banner.
  - Add or change the banner link.
  - Toggle the banner’s visibility.
  
### 3. Update Banner
- In the dashboard, fill in the form with the new banner details.
- Click "Update Banner" to save changes.
- The banner on the main page will automatically refresh to reflect the updates.


