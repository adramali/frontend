# Step 1: Use an official Node.js image from the Docker Hub
FROM node:16

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json (or yarn.lock) files
# This is done separately to leverage Docker's caching and avoid reinstalling dependencies on every build
COPY package*.json ./

# Step 4: Install project dependencies
RUN npm install

# Step 5: Copy the rest of the application files
COPY . .

# Step 6: Expose the port your app will run on
EXPOSE 3000

# Step 7: Run the application
CMD ["npm", "start"]
