# AI Chat Application

## Overview

ChatBot-AI implements a user-friendly application where users can interact with an AI model in a chat interface. The application allows users to provide feedback at each stage of the conversation, including immediate reactions to AI responses and an overall rating at the end of each chat.Designed with usability in mind, the interface provides a seamless experience for chatting, rating, and reviewing feedback.

## Features
1. **Real-time Feedback on Responses:**<br>
 - Users can like or dislike each AI response using thumbs up/thumbs down buttons.<br>
 - These buttons are hidden until the user hovers over the AI’s response, making the interface clean and engaging.

2. **End-of-Conversation Feedback**:<br>
 - After completing a conversation, users can provide an overall rating, selecting from a 5-point Likert scale or 5-star rating.<br>
 - Users can also leave additional subjective feedback to capture more nuanced opinions.

3. **Conversation Management**:<br>
 - Users can engage in multiple conversations, each saved and accessible from a side/top bar panel.<br>
 - Conversations can be revisited, showing both the chat history and associated feedback.<br>

4. **Comprehensive Feedback Overview**:<br>
 - A dedicated view allows users to see feedback across all conversations.<br>
 - Feedback can be filtered and sorted by rating, providing an easy-to-navigate summary.

5. **Light/Dark Mode Toggle**: 
 - Users can switch between light and dark themes for improved readability and comfort.

## Tech Stack

- **Frontend**: ReactJS
- **UI Library**: Material-UI
- **Routing**: React Router
- **State Management**: React State / Context API

## Getting Started
### Prerequisites
- **Node.js:** Ensure Node.js and npm are installed on your system.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Khushboo0820/ChatBotAI.git
   cd ChatBotAI
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. **Starting a Conversation**: Click "Start New Conversation" on the main screen.<br>
2. **Interacting with the AI:** Type a question and submit; a simulated AI response will appear from the JSON file.<br>
3. **Providing Feedback:**
   - **Thumbs up/down:** Hover over the AI response to access and click thumbs up/down.<br>
   - **Rating and Feedback:** At the end of the conversation, provide a rating and subjective feedback.<br>
5. **Viewing Past Conversations:** Access past conversations from the sidebar to review responses and feedback.<br>
6. **Feedback Summary:** Go to the "Feedback Summary" tab to view, filter, and sort all feedback.<br>

## Future Enhancements

1. **Real AI Integration:** Replace the mock JSON data with a live API connection to an AI service.<br>
2. **User Authentication:** Add user accounts for saving conversation history across sessions.<br>
3. **Export Feedback:** Allow users to export feedback data to CSV or PDF for analysis.<br>
4. **Enhanced Filtering:** Enable filtering by specific keywords or feedback sentiment (e.g., positive, negative).

## Contributing
If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes.
