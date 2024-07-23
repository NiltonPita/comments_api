# build environment 
FROM node:18.17.1-buster-slim as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
RUN yarn install
RUN apt update && apt install apt-transport-https ca-certificates -y
COPY . ./
EXPOSE 5000
CMD ["yarn", "start"]