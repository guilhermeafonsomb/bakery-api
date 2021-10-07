FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3000

CMD ["npm", "run", "typeorm", "migration:run"]

CMD ["npm", "run", "dev"]