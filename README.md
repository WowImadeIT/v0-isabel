# Isabel's Dictionary & Thesaurus

This repository contains the source code for "Isabel's Dictionary & Thesaurus," a web application designed to provide dictionary definitions and thesaurus entries. The application utilizes React for the frontend and integrates with the Google Gemini Large Language Model (LLM) via its API to fetch and display word information.

The project features a clean user interface with support for both light and dark themes, aiming to offer a straightforward and efficient user experience.
![Screenshot 2025-05-09 103227](https://github.com/user-attachments/assets/5df6d911-400f-499a-9c6b-9b01651ee15c)

![Screenshot 2025-05-09 102820](https://github.com/user-attachments/assets/a16d9c5c-19ea-40d1-94be-ef37bf8fa775)


## Core Features

*   **Dictionary Lookup:** Enables users to search for words and retrieve concise definitions.
*   **Thesaurus Functionality:** Provides a list of relevant synonyms for queried terms.
*   **AI-Powered Content:** Leverages the Google Gemini API for generating definitions and synonyms.
*   **Theme Customization:** Offers user-selectable light and dark modes for visual comfort.
*   **React-Based Architecture:** Built using the React JavaScript library for a component-based UI.

## Technology Stack

*   **Frontend Library:** React.js
*   **LLM Integration:** Google Gemini API 
*   **Initial UI Prototyping (Conceptual):** User interface elements were initially explored using v0.dev
*   **Development Environment (Assisted):** Code development was assisted by Cursor
*   **Styling:** Standard CSS

## Local Development Setup

To run this application locally, please follow these steps:

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/YOUR_USERNAME/isabels-dictionary-thesaurus.git
    cd isabels-dictionary-thesaurus
    ```
    *(Ensure you replace `YOUR_USERNAME` with your GitHub username.)*

2.  **Install Dependencies:**
    Requires Node.js and npm (or yarn) to be installed on your system.
    ```bash
    npm install
    # Alternatively, using yarn:
    # yarn install
    ```

3.  **Configure Environment Variables:**
    The application requires a Google Gemini API key to interact with the LLM.
    *   Create a file named `.env` in the root directory of the project.
    *   Add your API key to this file in the following format:
        ```env
        REACT_APP_GEMINI_API_KEY=YOUR_GEMINI_API_KEY
        ```
    *   API keys can be obtained from [Google AI Studio](https://aistudio.google.com/).
    *   **Security Advisory:** The `.env` file is included in the project's `.gitignore` file by default (standard for Create React App). This prevents accidental commits of sensitive credentials. **Under no circumstances should API keys or other secrets be committed to version control.**

4.  **Start the Development Server:**
    ```bash
    npm start
    # Alternatively, using yarn:
    # yarn start
    ```
    The application will typically be accessible at `http://localhost:3000` in your web browser.

## Project Purpose

This application was developed as a personal project primarily for educational and demonstrative purposes, showcasing the integration of a modern LLM into a web application. While it was created with a specific user in mind, the codebase can serve as a learning resource for those interested in similar React and AI API integrations.

