# syntax=docker/dockerfile:1

FROM node:alpine

COPY . .

RUN npm install

RUN npm run build

RUN npm install -g serve
CMD serve -s dist
EXPOSE 3000
