# Use an official Node.js runtime as a parent image with Node.js version 18.17.0
FROM node:18.17.0

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the app source code to the container
COPY . .

# Compile TypeScript
RUN npm run build  

# Change directory to the frontend folder
WORKDIR /usr/src/app/frontend

# Copy frontend app dependencies
COPY frontend/package*.json ./

# Install frontend app dependencies
RUN npm install

# Build the frontend app
RUN npm run build   # Adjust this command based on your frontend build setup

# Move back to the root project directory
WORKDIR /usr/src/app

# Expose a port (e.g., 3000) that your app will listen on
EXPOSE 8080

# Define the command to run your app
CMD ["node", "dist/index.js"]  # Update the path to your compiled JavaScript file
