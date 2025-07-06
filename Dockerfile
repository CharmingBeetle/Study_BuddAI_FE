# Build stage
FROM node:20-slim AS builder
WORKDIR /app
COPY package*.json ./
COPY .env .env.local
RUN npm install
COPY . .
RUN npm run build

# Run stage
FROM nginx:1.25-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]