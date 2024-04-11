# CNCG


## Quickstart with Docker

Follow these steps to quickly get your application up and running with Docker:

### 1. Build the Docker Image

```sh
docker build -t cncg-website .
```

### 2. Run the Docker Container

```sh
docker run -d -p 8080:3000 cncg-website
```

This command runs the container in detached mode and maps port 3000 inside the container to port 8080 on your host machine.

### 3. Access the Application

Open your web browser and go to `http://localhost:8080` to access the application.

## Stopping the Container

When you're done, you can stop the container with:

```sh
docker stop $(docker ps -q --filter ancestor=cncg-website)
```

This command finds the container running your application and stops it.
