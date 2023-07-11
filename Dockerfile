# Build app
FROM node:17.4.0

# Create and set working directory
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app

# Copy over dependencies
COPY package*.json ./
COPY src ./src
COPY public ./public

# As node user, install packages and set permissions
USER node
RUN rm package-lock.json
RUN npm install
COPY --chown=node:node . .

# Build and add files to working directory
RUN npm run build

# Run app
EXPOSE 3000
CMD ["npm", "run", "start"]
