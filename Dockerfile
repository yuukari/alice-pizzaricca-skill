FROM node:16

WORKDIR /alice-pizzaricca/app

COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3009

CMD [ "npm", "run", "start" ]