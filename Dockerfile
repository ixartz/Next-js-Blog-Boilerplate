FROM node:16

# Create a directory inside the container for the app
RUN mkdir -p /usr/src/app

# Set the working directory to the app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the app directory
COPY package*.json ./

# Install project dependencies using npm ci
RUN npm ci

# Copy the entire project to the app directory
COPY . .

# Build the Next.js project
RUN npm run build

# Expose port 3000 for the application
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "start"]
