## Setup

### Using Docker for local development (optional)

The library includes a basic container for local development.

**Setup step 01: Build the image**

```
docker build --no-cache -t exa-image .
```

**Setup step 02: Create the container**

```
CONTAINER=exa; PORT=3000; docker run -it -d --name=$CONTAINER -p $PORT:3000 -v $(pwd):/www/ exa-image;
```

**Start the container and attach to it**

```
docker start exa && docker attach exa
```
