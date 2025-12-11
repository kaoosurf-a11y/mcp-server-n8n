# 1. Use a stable Long-Term Support (LTS) Node.js version
FROM node:20-alpine

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy only the package files first for dependency caching
COPY package.json package-lock.json ./

# 4. Install all dependencies
RUN npm install

# 5. Copy the rest of the application code
COPY . .

# 6. Expose the container port that the server listens on
EXPOSE 3000

# 7. Start the application using the script defined in package.json
CMD ["npm", "start"]
