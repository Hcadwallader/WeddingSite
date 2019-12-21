
##Script to build the docker image, then run it locally

TAG="local"

# Build it
docker build -t $TAG .

echo "docker image $TAG build"

# Run it
#docker run -p 80:80 $TAG
docker run -p 80:3000 $TAG

## command to ssh onto the container
# docker exec -it <container name> /bin/bash