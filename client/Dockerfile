FROM node:14

WORKDIR /client
COPY package.json . 

# install app dependencies
COPY package*.json ./

RUN npm install

# add app
COPY . ./
ENV NODE_ENV development
EXPOSE 5000

# start app
CMD ["npm", "start"] 
