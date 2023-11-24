FROM node:15.3-alpine
# Copy package files to the working directory
COPY . .
# Install Angular CLI
RUN rm -rf node_modules
RUN npm cache clean -f
RUN npm install -g @angular/cli
RUN npm install
RUN npm ci

# Copy the rest of the application code to the working directory


# Build the Angular app in production mode
CMD ["npm","run","build"]

FROM nginx:alpine
COPY --from=build /frontend/dist /usr/share/nginx/html
COPY --from=build /frontend/startup.sh /app/startup.sh
RUN chmod +x /app/startup.sh
RUN sed -i 's/\r//' /app/startup.sh
COPY --from=build /frontend/nginx.conf /etc/nginx/conf.d/default.conf
ENTRYPOINT ["sh", "/frontend/startup.sh"]

# Expose the port the app runs on
EXPOSE 8080

# Start the Angular app
CMD ["npm", "test"]
