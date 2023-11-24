FROM node:15.3-alpine

COPY package.json .
COPY package-lock.json .
RUN npm install
RUN npm ci
COPY . .
CMD ["npm", "run", "start"]