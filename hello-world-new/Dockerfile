# Use an official Node.js image as the base image
FROM node:20
# Install rsync
RUN apt-get update && apt-get install -y rsync

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application's code
COPY . .

# Compile TypeScript to JavaScript
RUN npx tsc

# Build the application
RUN npm run build

# Start the application
CMD ["node", "dist/index.js"]