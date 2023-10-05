FROM node:18-alpine

WORKDIR /user/src/app

COPY package*.json ./

RUN npm install

RUN npm i -g @nestjs/cli

COPY . .

EXPOSE 3001

CMD ["npm", "run", "start"]


