FROM node:latest
WORKDIR /usr/src/api
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4000
CMD ["npm", "start"]
