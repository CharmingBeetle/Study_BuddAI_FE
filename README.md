# Study BuddAI - Frontend

A React/TypeScript frontend application that allows users to upload PDF documents and generate interactive quizzes using AI.

## Hosted App 
[Frontend](https://main.d2kavmrnv3biu0.amplifyapp.com/)

[Backend API](https://api.nighthawk.website)

## ✨ Features

- PDF document upload and processing
- AI-powered quiz generation
- Interactive quiz taking interface
- Results tracking and scoring
- User authentication system

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript + Vite + Clerk
- **Backend**: Node.js + Express + TypeScript
- **Database**: MySQL
- **Hosting**: AWS Amplify (Frontend) + AWS EC2 (Backend)
- **SSL**: Let's Encrypt via Certbot


## Demo

[![Canva Video](https://img.shields.io/badge/▶-Watch%20Demo-blue)](https://www.canva.com/design/DAGk-OYPdDw/WaVbKaRpJ0vBj3ri2hu7AA/watch?utm_content=DAGk-OYPdDw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf649f59812)


## Screenshots
![Screenshot 1](./src/assets/Screenshot%20from%202025-04-30%2019-31-03.png)
![Screenshot 2](./src/assets/Screenshot%20from%202025-04-30%2019-31-19.png)
![Screenshot 3](./src/assets/Screenshot%20from%202025-04-30%2019-31-34.png)
![Screenshot 4](./src/assets/Screenshot%20from%202025-04-30%2019-31-42.png)
![Screenshot 5](./src/assets/Screenshot%20from%202025-04-30%2019-31-44.png)
![Screenshot 6](./src/assets/Screenshot%20from%202025-04-30%2019-32-34.png)
![Screenshot 7](./src/assets/Screenshot%20from%202025-04-30%2019-32-38.png)
![Screenshot 8](./src/assets/Screenshot%20from%202025-04-30%2019-32-43.png)
![Screenshot 9](./src/assets/Screenshot%20from%202025-04-30%2019-32-50.png)
![Screenshot 10](./src/assets/Screenshot%20from%202025-04-30%2019-33-00.png)


## 📁 Project Structure

```bash
src/
├── components/ # React components
├── pages/ # Page components
├── api.ts # API configuration and calls
├── types/ # TypeScript type definitions
└── utils/ # Utility functions
├── assets/ # Images and assets
├── App.tsx # Main application component
├── main.tsx # Entry point
```

## 🔌 API Integration

The frontend communicates with the backend through:

- **Base URL**: `https://api.nighthawk.website`
- **Endpoints**:
  - `POST /files/upload` - Upload PDF documents
  - `POST /api/generate_quiz` - Generate quiz from uploaded file and saves to database
  - `GET /api/quizzes/:user_id` - Get user's quizzes
  - `GET /api/questions/:quiz_id` - Get quiz questions
  - `POST /api/attempt` - Save quiz attempt

## 🚀 Quick Start

1. Clone the repository:
```bash
git clone https://github.com/CharmingBeetle/Study_BuddAI_FE.git
cd Study_BuddAI_FE
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
  .env

# Add your local backend URL
VITE_API_URL=http://localhost:8080
```

4. Start development server:
```bash
npm run dev
```

## 🔧 Docker Setup (currently in progress...)
```bash
# Build image (from project root)
docker build -t studybuddai-fe .

# Run container
docker run -p 5173:80 studybuddai-fe
```

## 🌐 Deployment Notes

### Local Development

- **Ports**: 
  - Dev: `5173` (Vite default)
  - Prod: `80` (Nginx inside container)
- **Environment Variables**:  
  Add to `.env`:
  ```env
  VITE_API_URL=http://localhost:8080
  ```

### Production (AWS Amplify)

- **Frontend**: Hosted on AWS Amplify
- **Backend**: AWS EC2 with custom domain and SSL
- **Environment Variables**: Set in Amplify Console
  ```env
  VITE_API_URL=https://api.nighthawk.website
  ```
- **HTTPS Required**: Backend must use HTTPS to avoid mixed content errors


### AWS Amplify Setup

1. Connect repository to Amplify
2. Set environment variable: `VITE_API_URL=https://api.nighthawk.website`
3. Build settings: Build command `npm run build`, Publish directory `dist`
4. Auto-deploy on push to main branch


#### Backend Requirements

- Backend must be deployed with HTTPS (SSL certificate)
- CORS configured to allow requests from Amplify domain
- Environment variables properly configured


## 🐛 Troubleshooting

### Mixed Content Errors
- Ensure backend uses HTTPS in production
- Check `VITE_API_URL` is set correctly in Amplify Console


### API Connection Issues  

- Verify backend is running at https://api.nighthawk.website/
- Check browser network tab for failed requests
- Confirm CORS is configured on backend


## 🔗 Related Repositories

- **Backend**: [Study_BuddAI_BE](https://github.com/CharmingBeetle/Study_BuddAI_BE)


## 🧠 Critical Knowledge

- Uses **Clerk v5** for auth (`fallbackRedirectUrl` not `redirectUrl`)
- Docker context must point to sibling `study-buddai-deploy` repo

