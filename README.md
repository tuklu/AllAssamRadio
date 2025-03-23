# 📻 All Assam Radio

## Overview

All Assam Radio is a modern, multi-platform radio streaming application that blends the aesthetics of a vintage record player with cutting-edge digital features. The project is designed for web, mobile, and smart assistants like Alexa, ensuring seamless access across devices.

## Features

- **Live Radio Streaming** – Listen to real-time radio broadcasts.
- **Cross-Platform Support** – Available on Web, Mobile, and Alexa-enabled devices.
- **Interactive Live Chat** – Engage with other listeners in real-time.
- **Media Controls** – Play, pause, and switch between stations effortlessly.
- **Station Navigation** – Browse through different stations with ease.
- **Alexa Integration** – Voice-controlled access to stations.

## System Architecture

The system is designed to be modular and scalable, allowing seamless integration of multiple platforms:

- **Frontend (Web & Mobile)**: Built with React for a responsive UI.
- **Backend**: A JS & Python based backend handles streaming, chat, and Alexa Skill API interactions.
- **Alexa Skill**: Developed in Python using AWS Lambda for voice command processing.
- **Database**: NoSQL storage for chat messages and user interactions.
- **Hosting**: Deployed on a cloud server with CDN support for fast streaming.

## Tech Stack

### Web & Mobile App

- **Frontend**: React
- **State Management**: Redux
- **Styling**: Tailwind CSS
- **Chat Integration**: WebSockets
- **Authentication**: OAuth 2.0

### Backend

- **Framework**: FastAPI (Python)
- **Database**: MongoDB
- **Streaming Service**: Icecast
- **Hosting**: OwnServer

### Alexa Skill

- **Language**: Python
- **Framework**: AWS Lambda + Alexa Skills Kit (ASK)
- **Deployment**: AWS Lambda with API Gateway

## Future Enhancements

- **Personalized Station Recommendations**
- **Podcast & On-Demand Content**
- **AI-powered Voice Commands**
- **Dark/Light Mode Toggle**

## Contributing

We welcome contributions! Please follow the standard PR guidelines and submit your features or bug fixes.

## License

MIT License

