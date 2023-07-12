# Build app
FROM node:18.13.0

# Create and set working directory
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app

# Copy over dependencies
COPY * ./

# As node user, install packages and set permissions
USER node
RUN yarn install
COPY --chown=node:node . .

# Build and add files to working directory
RUN yarn run build

# Run app
EXPOSE 3000
CMD ["yarn", "run", "start"]
