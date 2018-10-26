FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . /usr/src/app/

# npm install
RUN apt-get update && npm install
# Run npm install --global grpc --unsafe-perm

EXPOSE 3000 9220

CMD [ "npm", "run", "debug" ]