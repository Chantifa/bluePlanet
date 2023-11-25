FROM node:20.10.0
# Copy package files to the working directory
COPY package.json .
COPY package-lock.json .
RUN npm cache clean --force
RUN rm -rf node_modules
RUN npm install
RUN npm ci
COPY . .
CMD ["npm", "start"]
# Copy the rest of the application code to the working directory

# Generate the build of the application
RUN npm run build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:alpine

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/sample-angular-app /usr/share/nginx/html

# Expose port 80
EXPOSE 8080
