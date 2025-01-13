FROM node:18

WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies using npm
RUN npm install

# Copy the rest of the application files
COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev"]
