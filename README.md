# LeadCollector 🚀

LeadCollector is a comprehensive tool designed to manage and streamline the lead collection and interaction process. It helps businesses track user registrations, interactions, and purchase behavior while providing insights into customer journeys. This project comprises a **frontend** for the user interface and a **backend** powered by Docker for robust service orchestration.

---

## Features ✨

- **Lead Management**: Automatically capture and manage user leads upon registration.
- **Interaction Tracking**: Monitor user interactions like course interests, purchases, and more.
- **Dockerized Backend**: Simplifies setup with pre-configured services using Docker Compose.
- **Developer-Friendly**: Modularized code for easy maintenance and expansion.

---

## Project Structure 🏗️

project-root/

├── backend/ # Backend services and APIs

├── frontend/ # React frontend for user interface

└── README.md # Project documentation

---

## Prerequisites 📋

Ensure you have the following tools installed on your system:

1. [Node.js](https://nodejs.org/) (LTS version recommended)
2. [Docker](https://www.docker.com/) & Docker Compose
3. Bash or a similar shell (for running scripts, primarily on Unix-like systems)

---

## Getting Started 🚀

### **Option 1: If `concurrently` is Installed**

For a quick start, run the following command from the project root:

```bash
npx concurrently "cd backend && npm install && cp .env.example .env && docker-compose --env-file .env up -d" "cd frontend && npm install && npm run dev"
```

### Option 2: Step-by-Step Setup

If you don't have concurrently installed, follow these steps:

#### Backend Setup:

##### Navigate to the backend folder:

`bash cd backend`

##### Install dependencies:

`bash npm install`

##### Copy the environment file:

`bash cp .env.example .env`

##### Start the backend services:

`bash docker-compose --env-file .env up -d`

#### Frontend Setup:

##### Navigate to the frontend folder:

`bash cd ../frontend`

##### Install dependencies:

npm install

##### Start the frontend development server:

`bash npm run dev`
