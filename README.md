# LeadCollector 🚀

LeadCollector is a comprehensive tool designed to manage and streamline the lead collection and interaction process. It helps businesses track user registrations, interactions, and purchase behavior while providing insights into customer journeys. This project comprises a **frontend** for the user interface and a **backend** powered by Docker for robust service orchestration.

---

## Features ✨

- **Lead Management**: Automatically capture and manage user leads upon registration.
- **Interaction Tracking**: Monitor user interactions like course interests, purchases, and more.
- **Dockerized Backend**: Simplifies setup with pre-configured services using Docker Compose.
- **Developer-Friendly**: Modularized code for easy maintenance and expansion.

- **Home Page Customization:**  
  - For new users, the home page displays the **latest 3 courses**.  
  - For returning users, it shows the **top 3 courses they have shown interest in**.  
- **Analytics and User Engagement:**  
  - Whenever a user views a course, analytics are generated to track user interactions.  
  - After viewing a course, users receive a **reminder email** to buy the course:  
    - Sent after **1 minute** in the development environment.  
    - Sent after **4 hours** in the production environment.  
- **Traffic Categorization:**  
  - Traffic is categorized into **Paid**, **Referral**, or **Organic**, depending on UTM parameters in the URL.  
  - This data helps differentiate and optimize marketing efforts.  

## Traffic Source Categorization Logic  
Traffic sources are identified using the following rules:  

| Traffic Source | UTM Medium/Source Example                                    | URL Example                                                                 |
|----------------|--------------------------------------------------------------|-----------------------------------------------------------------------------|
| **Paid**       | `utm_medium=cpc`, `utm_source=google`, `utm_source=facebook` | `https://localhost:5173?utm_medium=cpc&utm_source=google&utm_campaign=promo1`  |
| **Referral**   | `utm_medium=referral`, `utm_source=referral`                 | `https://localhost:5173?utm_medium=referral&utm_source=referral&utm_campaign=promo2` |
| **Organic**    | `utm_medium=organic`, `utm_source=google`                    | `https://localhost:5173?utm_medium=organic&utm_source=google&utm_campaign=promo3` |
| **Fallback**   | Unspecified or other sources                                 | Defaults to `organic`.                                                     |  

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

```
npx concurrently "cd backend && npm install && cp .env.example .env && docker-compose --env-file .env up -d" "cd frontend && npm install && npm run dev"
```

### Option 2: Step-by-Step Setup

If you don't have concurrently installed, follow these steps:

#### Backend Setup:

##### Navigate to the backend folder:

` cd backend`

##### Install dependencies:

` npm install`

##### Copy the environment file:

` cp .env.example .env`

##### Start the backend services:

` docker-compose --env-file .env up -d`

#### Frontend Setup:

##### Navigate to the frontend folder:

`cd ../frontend`

##### Install dependencies:

npm install

##### Start the frontend development server:

` npm run dev`
