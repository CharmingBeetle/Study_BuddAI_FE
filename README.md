# Study BuddAI - Frontend

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
- State management: [describe your setup]
- Docker context must point to sibling `study-buddai-deploy` repo

