# Study BuddAI - Frontend

## Demo
[![Canva Video](https://img.shields.io/badge/▶-Watch%20Demo-blue)](https://www.canva.com/design/DAGk-OYPdDw/WaVbKaRpJ0vBj3ri2hu7AA/watch?utm_content=DAGk-OYPdDw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf649f59812)


## Hosted App 
[Try out the app!](https://main.d2kavmrnv3biu0.amplifyapp.com/)

## Screenshots
![Screenshot 1](./src/assets/Screenshot%20from%202025-04-30%2019-31-03.png)
![Screenshot 2](./src/assets/Screenshot%20from%202025-04-30%2019-31-19.png)
![Screenshot 3](./src/assets/Screenshot%20from%202025-04-30%2019-31-34.png)
![Screenshot 4](./src/assets/Screenshot%20from%202025-04-30%2019-31-42.png  )
![Screenshot 5](./src/assets/Screenshot%20from%202025-04-30%2019-31-44.png)
![Screenshot 6](./src/assets/Screenshot%20from%202025-04-30%2019-32-34.png)
![Screenshot 7](./src/assets/Screenshot%20from%202025-04-30%2019-32-38.png)
![Screenshot 8](./src/assets/Screenshot%20from%202025-04-30%2019-32-43.png)
![Screenshot 9](./src/assets/Screenshot%20from%202025-04-30%2019-32-50.png)
![Screenshot 10](./src/assets/Screenshot%20from%202025-04-30%2019-33-00.png)

## 🚀 Quick Start
```bash
# Development (hot-reload)
npm run dev

# Production build
npm run build
```

## 🔧 Docker Setup
```bash
# Build image (from project root)
docker build -t studybuddai-fe .

# Run container
docker run -p 5173:80 studybuddai-fe
```

## 🌐 Deployment Notes
- **Ports**: 
  - Dev: `5173` (Vite default)
  - Prod: `80` (Nginx inside container)
- **Environment Variables**:  
  Add to `.env`:
  ```env
  VITE_API_URL=http://localhost:8080
  ```

## 🧠 Critical Knowledge
- Uses **Clerk v5** for auth (`fallbackRedirectUrl` not `redirectUrl`)
- Docker context must point to sibling `study-buddai-deploy` repo

