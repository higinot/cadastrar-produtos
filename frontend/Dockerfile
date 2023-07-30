FROM node:14

WORKDIR /frontend

COPY package* ./

# Limpe o cache do NPM
RUN npm cache clean --force

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]