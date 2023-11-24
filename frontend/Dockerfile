FROM node:15.3-alpine

# Set the working directory to /app
WORKDIR /frontend

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Angular CLI
RUN npm install -g @angular/cli

# Install app dependencies
RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

# Build the Angular app
RUN ng build --prod

# Use a smaller base image for the final image
FROM nginx:alpine

# Copy the Angular app build from the 'builder' stage to the nginx server
COPY --from=builder /app/dist/ /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]