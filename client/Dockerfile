FROM node:14

WORKDIR /client

# install app dependencies
COPY package*.json ./

RUN npm install

# add app
COPY . ./
ENV NODE_ENV development
EXPOSE 3000

# start app
CMD ["npm", "start"] 