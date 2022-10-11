FROM node:16

# Create app directory
RUN rm -r /usr/src/app; exit 0
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm install

COPY . /usr/src/app

EXPOSE 3000
CMD ["node","server.js"]