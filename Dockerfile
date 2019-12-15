## base image
#FROM node:12.2.0-alpine
#
## set working directory
#WORKDIR /app
#
## add `/app/node_modules/.bin` to $PATH
##ENV PATH /app/node_modules/.bin:$PATH
#COPY . ./
#
## install and cache app dependencies
##COPY package.json /app/package.json
#RUN npm install
#RUN npm build
##RUN npm install react-scripts@3.0.1 -g
#
## start app
#CMD ["npm", "start"]


FROM node

ENV WRKDIR /app

# Create app directory
WORKDIR $WRKDIR

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json $WRKDIR/

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . $WRKDIR/

EXPOSE 3000

CMD [ "npm", "start"]