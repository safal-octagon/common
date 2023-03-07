# Use an official Node.js runtime as a parent image
FROM node:alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package*.json ./

COPY .npmrc ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to /app
COPY . .

# Define the command to run the app
CMD ["npm", "start"]
