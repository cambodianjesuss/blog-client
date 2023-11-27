FROM node:alpine

# Add the following lines
ENV CI=true
ENV WDS_SOCKET_PORT=0

# Start app in /app directory when container is created
WORKDIR /app

# Create cached version of modules so changes in code won't cache bust
COPY package.json /.
RUN npm install

# Now copy all files locally to /app root
COPY ./ ./

CMD [ "npm", "start" ]