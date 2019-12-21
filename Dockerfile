
# build environment
FROM node as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json /app/
RUN npm install
COPY . /app/
COPY public/* /app/
RUN npm run build



# production environment
FROM node
WORKDIR /app
RUN npm install express

COPY --from=build   /app/dist/     /app/dist/
COPY                /src/server.js /app/
COPY                /public/       /app/public/

EXPOSE 80
CMD [ "node", "server.js"]
