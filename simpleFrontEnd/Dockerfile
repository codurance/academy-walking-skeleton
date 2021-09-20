FROM node:16.9-slim AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginxinc/nginx-unprivileged:1.21

COPY --from=builder /app/build /usr/share/nginx/html

USER 1001
