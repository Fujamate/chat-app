# Chat App

## Objective

The objective of this project is to build a chat app for mobile devices using React Native, providing users with a chat interface and options to share images and their location.

## Context

With the increasing reliance on mobile devices for various daily tasks, the demand for native mobile applications has risen. React Native offers a solution by allowing developers to build Android and iOS apps with a single codebase, reducing development time and costs. This project utilizes React Native, Expo, and Google Firestore Database to create a chat app, demonstrating proficiency in JavaScript mobile development.

## 5 Ws

1. **Who**: Users of the mobile chat app, including friends, family, and course participants. Other developers will also use the codebase.
2. **What**: A native chat app built with React Native, along with relevant documentation.
3. **When**: Users can communicate with each other at any time.
4. **Where**: The app is optimized for Android and iOS devices, developed using Expo, and chat messages are stored in Google Firestore.
5. **Why**: Building a chat app is a valuable skill, considering the widespread use and demand for such applications. Additionally, it showcases React Native development skills.

## Features and Requirements

### User Stories

- New users can easily enter a chat room to start conversing.
- Users can send messages, images, and share their location.
- Messages are stored offline for later access.
- Accessibility features are incorporated for users with visual impairments.

### Key Features

- User authentication with customizable chat screen background.
- Conversation display with input field and submit button.
- Additional features include sending images and location data.
- Data storage both online and offline.

### Technical Requirements

- Developed in React Native with Expo.
- Styled according to given screen design.
- Chat conversations stored in Google Firestore Database.
- Users authenticated anonymously via Google Firebase.
- Local storage for chat conversations.
- Integration with device's image library and camera app.
- Images stored in Firebase Cloud Storage.
- Ability to send and view location data.
- Utilization of Gifted Chat library for chat interface.
- Codebase includes comments for clarity.

## Installation and Usage

To run this app locally, you'll need to follow these steps:

1. Clone this repository.
2. **Set up Expo in your development environment:**
   - Install Expo and Expo CLI, as this is the platform you’ll use to build your app:
     ```
     npm install -g expo-cli
     ```
   - Install Expo Go app on your mobile device, so that you can test your app on your own mobile device:
     - Search for the Expo Go app in the relevant app store for your device (iOS or Android).
   - Create an Expo account.

### Start the App

Use the Expo Go App on your mobile device to check the UI

Initialize the app in your terminal:

npx expo start / npm start
