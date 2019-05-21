FROM node:8

ENV API_DB_HOST=db
ENV API_DB_USER=postgres
ENV API_DB=tastehealthy
ENV API_DB_PWD=tastehealthy
ENV API_DB_PORT=5432

WORKDIR /api

COPY ./package-lock.json .
COPY ./package.json .
COPY ./server ./server

# RUN apt-get update && apt-get -y install build-essential

# Build
RUN npm install --prefix /api
RUN npm run server:build

EXPOSE 3000