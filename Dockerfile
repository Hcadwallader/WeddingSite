
# build image - creates the bundle.js
FROM node as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json /app/
RUN npm install
COPY . /app/
COPY public/* /app/
RUN npm run build



# production image - actually runs it
FROM node
WORKDIR /app
RUN npm install express

# Copy bundle.js from build image, copy static content from local
COPY --from=build   /app/dist/     /app/dist/
COPY                /src/server.js /app/
COPY                /public/       /app/

RUN ls -ltra /app/
RUN ls -ltra /app/dist
RUN ls -ltra /app/public

# Expose the port (#TODO: may not need anymore) and enter the command to actually run it
## TODO: switch this too port 80 once AWS is updated
EXPOSE 3000
CMD [ "node", "server.js"]
