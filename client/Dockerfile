
# Stage 1: Build client app

FROM node:14-alpine AS builder
RUN addgroup app && adduser -S -G app app
RUN mkdir -p /client && chown -R app /client
USER app
WORKDIR /client
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Build Nginx server

FROM nginx:alpine
RUN mkdir -p /app
COPY --from=builder /client/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
