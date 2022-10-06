# Docker private registry

## Pull the registry
```
$ docker pull registry
```
## Run the local registry
```
$ docker run -d -p 5000:5000 --name localregistry registry
```

## Pull down few images and push to local registry

### Step 1 : Pull down busybox and alpine
```
$ docker pull busybox

$ docker pull alpine
```
Verify that they are present in your images list via **docker images** command.

### Step 2 : Push busybox and alpine Linux images into the local Registry
- Tag the alpine:latest image to the registry
    ```
    $ docker tag alpine:test localhost:5000/alpine:latest
    ```
- Push the tagged alpine:latest image
    ```
    $ docker push localhost:5000/alpine:latest
    ```