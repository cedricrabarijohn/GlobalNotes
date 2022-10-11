# Introduction

> Docker Compose is a tool that allows you run multi-container applications based on definitions set in a YAML file.

# Installation
> https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04
# Setting up a **docker-compose.yml** file
```yml
services:
    web:
        build: path/to/Dockerfile/for/web (if you are going to use docker-compose build)
        image: image-container/name|new_name:tag
        container_name: your_container_name
        ports:
            - "host-port:container-exposed-port"
        volumes: (optionnal)
            - path/to/the/web/app
```
# Build from docker-compose.yml
```
$ docker-compose build
```
> ### In our case, this command is the equivalent of
```
$ docker build -t <image> <build>
```
> ### Where **image** is what's specified in the image section of the docker-compose.yml file, and **build** in the build section of the docker-compose.yml file.

# Run docker-compose.yml
```
$ docker-compose up [service-name]
```
> ### In our case, this command is the equivalent of
```
$ docker run -p <ports> --name <container_name> -v <volumes> <image:tag>
```
> ### Where **ports**, **container_name**, **volumes** and **image** are specified inside the docker-compose.yml file