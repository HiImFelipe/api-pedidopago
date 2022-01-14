FROM node:stretch-slim

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8090

RUN npm run build
CMD ["node", "start"]