FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install -g eslint prettier

RUN eslint . --fix && prettier . --write

EXPOSE 3000

RUN npm run build

CMD ["npm", "start"]
