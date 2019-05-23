FROM node:8

WORKDIR /api

COPY ./package-lock.json .
COPY ./package.json .
COPY ./server ./server

# RUN apt-get update && apt-get -y install build-essential

# Build
RUN npm install --prefix /api
RUN npm run server:build

EXPOSE 3000
