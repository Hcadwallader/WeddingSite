
TAG="local"

# Build it
docker build -t $TAG .

echo "docker image $TAG build"

# Run it
docker run -p 80:80 $TAG



## ssh onto the container
# docker exec -it <container name> /bin/bash