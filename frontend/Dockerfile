FROM node:latest
# Copy package files to the working directory
COPY package.json .
COPY package-lock.json .
#RUN npm cache clean --force
#RUN rm -rf node_modules
RUN npm install
RUN npm ci
COPY . .
CMD ["npm", "start"]
# Copy the rest of the application code to the working directory
