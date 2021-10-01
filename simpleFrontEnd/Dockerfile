FROM node:16-alpine3.14 AS deps

WORKDIR /srv
COPY package*.json .
RUN npm ci --only=production

FROM node:16-slim AS release

WORKDIR /srv
COPY --from=deps /srv/node_modules ./node_modules
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
