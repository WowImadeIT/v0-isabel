Isabel's Dictionary & Thesaurus
This repository contains the source code for Isabel's Dictionary & Thesaurus — a web application designed to deliver dictionary definitions and thesaurus entries. The app is built using React for the front end and integrates with the Google Gemini Large Language Model (LLM) via its API to retrieve and display word information.

The project features a clean and intuitive interface with both light and dark theme options, offering users a straightforward and comfortable experience.

![Screenshot 2025-05-09 103227](https://github.com/user-attachments/assets/cefc5ddb-22e9-46d6-880a-bd4283a2ed41)
![Screenshot 2025-05-09 102820](https://github.com/user-attachments/assets/57e343da-23f8-4b02-9491-dfd4ae137f00)



Key Features
Dictionary Lookup: Search for words and receive clear, concise definitions.

Thesaurus Integration: View relevant synonyms for queried terms.

AI-Powered Results: Utilises the Google Gemini API to generate definitions and synonym suggestions.

Theme Support: Toggle between light and dark modes to suit your visual preference.

React Architecture: Built with React.js for a modular and responsive user interface.

Technology Stack
Frontend Library: React.js

LLM Integration: Google Gemini API

Initial UI Prototyping: Concepts explored via v0.dev

Development Environment: Coding assisted using Cursor

Styling: Standard CSS

Local Development Setup
To run the application locally, follow these steps:

Clone the Repository

bash
Copy
Edit
git clone https://github.com/YOUR_USERNAME/isabels-dictionary-thesaurus.git
cd isabels-dictionary-thesaurus
(Replace YOUR_USERNAME with your GitHub username.)

Install Dependencies
Ensure Node.js and npm (or Yarn) are installed on your system.

bash
Copy
Edit
npm install
# Or, if using Yarn:
# yarn install
Configure Environment Variables
The app requires a valid Google Gemini API key:

Create a .env file in the root directory.

Add your key in the following format:

env
Copy
Edit
REACT_APP_GEMINI_API_KEY=YOUR_GEMINI_API_KEY
API keys can be obtained via Google AI Studio.

Important: The .env file is listed in .gitignore by default to prevent sensitive data being committed to version control. Never commit your API keys.

Start the Development Server

bash
Copy
Edit
npm start
# Or, if using Yarn:
# yarn start
Once running, the application will be accessible at http://localhost:3000 in your browser.

Project Purpose
This project was created as a personal and educational exercise, primarily to demonstrate how a modern LLM can be integrated into a React-based web application. Although developed with a specific individual in mind, the codebase may serve as a useful learning resource for anyone interested in React and AI API development.
