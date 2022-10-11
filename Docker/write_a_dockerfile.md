# Write a dockerfile

## Definition of a dockerfile

> A text file that has a series of instructions on how to build your image.

## Create a folder named images

```
~$ mkdir images
```

## Go inside the images folder

```
~$ cd images
~/images
```

## Create a Dockerfile and write these instructions inside

```Dockerfile
FROM busybox:latest
LABEL maintainer Romin Irani (email@domain.com)
```

> **FROM** : Sets the base image for the rest of the instructions.

> **LABEL** : Label of the dockerfile

### Save the file and come back to prompt

## Execute the following in the /images folder

```
$ docker build -t myimage:latest .
```

> **-t** : The docker image tag.

> **.** : Specifies the location of the Dockerfile that we created.

## List images using docker images command and notice that we created a new image named **myimage** with the tag **latest**

```
$ docker images

REPOSITORY TAG    IMAGE ID     CREATED       VIRTUAL SIZE
myimage    latest 3bc3545a1f64 3 minutes ago 2.433 MB
```

## Launch the new image

```
$ docker run -it myimage:latest
/ #
```

## Exit and modify the Dockerfile

```Dockerfile
FROM busybox:latest
CMD ["date"]
```

## Build the image again with the same name and tag then run it

```
$ docker build -t myimage:latest .

$ docker run -it myimage
Thu Dec 14 11:14:42 UTC 2017
```

## CMD format

```dockerfile
CMD ["executable","param1","param2"]
```

> # Note :
>
> While launching the container, you can override the default CMD by providing it at the command line as shown below.

        $ docker run -it myimage /bin/sh
        / #

## Modify the Dockerfile using **ENTRYPOINT** and **CMD** together

```Dockerfile
FROM busybox
ENTRYPOINT ["/bin/cat"]
CMD ["/etc/passwd"]
```

# Another example of Dockerfile (Nginx)

## Dockerfile

```Dockerfile
FROM ubuntu
RUN apt-get update
RUN apt-get install -y nginx
ENTRYPOINT ["/usr/sbin/nginx","-g","daemon off;"]
EXPOSE 80
```

> # Notes
>
> ### **RUN** : Used to execute any commands. (executed during the creation of a container from the image)
>
> ### **EXPOSE** : Informs what port the container will be listening on.

## Build the image and run the container

```
$ docker build -t myimage:latest .

$ docker run -d -p 80:80 --name webserver myimage
```

## Go to this link in your browser

```
https://localhost
```

# Add your own pages into the nginx server instead of the default page

## Create an **index.html** file with simple text

```html
<h1>Hello docker</h1>
```
## Update the **Dockerfile**
```Dockerfile
FROM ubuntu
RUN apt-get update
RUN apt-get install -y nginx
COPY index.html /usr/share/nginx/html
ENTRYPOINT ["/usr/sbin/nginx","-g","daemon off;"]
EXPOSE 80
```
