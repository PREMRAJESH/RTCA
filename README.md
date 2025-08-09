# 📱 College Chat App

<div align="center">

[![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)](https://firebase.google.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://choosealicense.com/licenses/mit/)

<img src="assets/logo.png" alt="College Chat App Logo" width="200"/>

A modern, feature-rich chat application built with React Native and Firebase, designed specifically for college students to communicate and share resources efficiently.

[✨ Features](#features) • [🚀 Installation](#installation) • [📱 Screenshots](#screenshots) • [🛠️ Tech Stack](#technical-stack)

---

</div>

## ✨ Features

### 🗄️ Cloud Storage Integration

- 📤 Seamless file sharing through Firebase Cloud Storage
- 💾 Direct file uploads similar to Google Drive functionality
- 📁 Support for multiple file types (documents, images, videos)
- 🔒 Secure file storage and retrieval

### 💬 Chat Features

- ⚡ Real-time messaging using Firebase Realtime Database
- 👥 Individual and group chat capabilities
- ✓✓ Message status indicators (sent, delivered, read)
- 📦 Archived chats section
- ⭐ Starred messages for quick access
- 🖼️ Media gallery for shared photos and videos
- 👀 File preview functionality

### 🔐 Authentication & Security

- 🔑 Secure user authentication via Firebase Auth
- 🔄 Password recovery functionality
- 👤 User profile management
- 🔒 End-to-end encryption for messages

### ⚙️ Profile & Settings

- 🎨 Customizable user profiles
- 📸 Profile picture upload
- 🔔 Notification preferences
- 🌓 App appearance settings
- 😊 Sticker and GIF support

## 📱 Screenshots

<div align="center">
<table>
  <tr>
    <td><strong>Login Screen</strong></td>
    <td><strong>Chat List</strong></td>
    <td><strong>Chat Room</strong></td>
  </tr>
  <tr>
    <td><em>Coming soon</em></td>
    <td><em>Coming soon</em></td>
    <td><em>Coming soon</em></td>
  </tr>
</table>
</div>

## 🎥 Demo

▶️ [Watch Demo Video](https://youtube.com) (Coming soon)

## 🛠️ Technical Stack

<table>
  <tr>
    <td><strong>🎨 Frontend</strong></td>
    <td>
      <a href="https://reactnative.dev/">
        <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Native"/>
      </a>
    </td>
  </tr>
  <tr>
    <td><strong>⚙️ Backend</strong></td>
    <td>
      <a href="https://firebase.google.com/">
        <img src="https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white" alt="Firebase"/>
      </a>
    </td>
  </tr>
  <tr>
    <td><strong>🔧 Development</strong></td>
    <td>
      <a href="https://www.typescriptlang.org/">
        <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
      </a>
    </td>
  </tr>
</table>

### 📚 Key Libraries

- 🔐 Firebase Authentication
- 🗄️ Firebase Cloud Storage
- 📦 Firestore Database
- ⚡ Cloud Functions
- 🎨 React Native Vector Icons
- 📱 React Native Gesture Handler
- 🧭 React Navigation Stack
- 📸 React Native Image Picker

# Getting Started

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Prerequisites

- Node.js (LTS version)
- Java Development Kit (JDK) 17 (required)
- Android Studio & Android SDK
- iOS development tools (for Mac users)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/PREMRAJESH/RTCA.git
```

2. Install dependencies:

```bash
cd CollegeChatApp
npm install
```

3. Start Metro bundler:

```bash
npm start
```

4. Run the application:

### For Android

```bash
npm run android
```

### For iOS

```bash
cd ios
pod install
cd ..
npm run ios
```

## Project Structure

```
CollegeChatApp/
├── screens/
│   ├── auth/           # Authentication screens
│   ├── chat/           # Chat-related screens
│   ├── profile/        # User profile screens
│   └── settings/       # App settings screens
├── contexts/           # React Context providers
├── config/            # Configuration files
├── types/             # TypeScript type definitions
└── assets/            # Images and other static assets
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Firebase team for the excellent backend services
- React Native community for the comprehensive component libraries
- All contributors who have helped shape this project

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
