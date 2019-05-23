FROM node:8

ARG API_DB_HOST
ARG API_DB_USER
ARG API_DB
ARG API_DB_PWD
ARG API_DB_PORT

ENV API_DB_HOST=$API_DB_HOST
ENV API_DB_USER=$API_DB_USER
ENV API_DB=$API_DB
ENV API_DB_PWD=$API_DB_PWD
ENV API_DB_PORT=$API_DB_PORT

WORKDIR /api

COPY ./package-lock.json .
COPY ./package.json .
COPY ./server ./server

# RUN apt-get update && apt-get -y install build-essential

# Build
RUN npm install --prefix /api
RUN npm run server:build

EXPOSE 3000
