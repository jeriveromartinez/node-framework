FROM node:8.11.4

RUN mkdir -p /opt/web
WORKDIR /opt/web

RUN npm i -g npm

COPY . /opt/web
RUN npm i
COPY . /opt/web
EXPOSE 8080