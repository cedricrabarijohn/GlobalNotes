# Step 1 : Installing docker Ubuntu 20.4

## Update list of packages

```
$ sudo apt update
```

## Install prerequisite packages

```
$ sudo apt install apt-transport-https ca-certificates curl software-properties-common
```

## Add the GPG key for the official Docker repository to the system

```
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

## Add the Docker repository to APT sources

```
$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
```

## Make sure you are about to install from the Docker repo instead of the default Ubuntu repo

```
$ apt-cache policy docker-ce

<!-- Excpected output -->
docker-ce:
  Installed: (none)
  Candidate: 5:19.03.9~3-0~ubuntu-focal
  Version table:
     5:19.03.9~3-0~ubuntu-focal 500
        500 https://download.docker.com/linux/ubuntu focal/stable amd64 Packages
```

## Finally install docker

```
$ sudo apt install docker-ce
```

## Check that it's running

```
$ sudo systemctl status docker
```

## Expected output

```
Output
● docker.service - Docker Application Container Engine
     Loaded: loaded (/lib/systemd/system/docker.service; enabled; vendor preset: enabled)
     Active: active (running) since Tue 2020-05-19 17:00:41 UTC; 17s ago
TriggeredBy: ● docker.socket
       Docs: https://docs.docker.com
   Main PID: 24321 (dockerd)
      Tasks: 8
     Memory: 46.4M
     CGroup: /system.slice/docker.service
             └─24321 /usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock
```

# Step 2 : Executing the Docker Command without using Sudo

## Add your username to the docker group

```
$ sudo usermod -aG docker ${USER}
```

## Apply the new membership

```
$ su - ${USER}
```

## Confirm that your user is now added to the docker group

```
$ groups
```

## Add explicitly username

```
$ sudo usermod -aG docker <username>
```

# Step 3 : Using the Docker Command

## Syntax

```
$ docker [option] [command] [arguments]
```

## View all available subcommands

```
$ docker
```

## View the options available to a specific command

```
$ docker docker-subcommand --help
```

## View the system-wide information about Docker

```
$ docker info
```

# Step 4 : Working with Docker Images

## Check if you can access and download images from Docker Hub

```
$ docker run hello-world
```

```
<!-- Expected output -->

Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
0e03bdcc26d7: Pull complete
Digest: sha256:6a65f928fb91fcfbc963f7aa6d57c8eeb426ad9a20c7ee045538ef34847f44f1
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.
...
```

## Search an image

```
$ docker search ubuntu
```

```
<!-- Example of expected output -->

NAME                                                      DESCRIPTION                                     STARS               OFFICIAL            AUTOMATED
ubuntu                                                    Ubuntu is a Debian-based Linux operating sys…   10908               [OK]
dorowu/ubuntu-desktop-lxde-vnc                            Docker image to provide HTML5 VNC interface …   428                                     [OK]
rastasheep/ubuntu-sshd                                    Dockerized SSH service, built on top of offi…   244                                     [OK]
consol/ubuntu-xfce-vnc                                    Ubuntu container with "headless" VNC session…   218                                     [OK]
ubuntu-upstart                                            Upstart is an event-based replacement for th…   108                 [OK]
ansible/ubuntu14.04-ansible                               Ubuntu 14.04 LTS with
...
```

In the **OFFICIAL** column, **OK** indicates and image built and supported by the company behind the project. Once you've identified the image that you would like to use, you can download it to your computer using the **pull** subcommand.

## Download the official ubuntu image to your computer

```
$ docker pull ubuntu
```

```
<!-- Expected output -->

Using default tag: latest
latest: Pulling from library/ubuntu
d51af753c3d3: Pull complete
fc878cd0a91c: Pull complete
6154df8ff988: Pull complete
fee5db0ff82f: Pull complete
Digest: sha256:747d2dbbaaee995098c9792d99bd333c6783ce56150d1b11e333bbceed5c54d7
Status: Downloaded newer image for ubuntu:latest
docker.io/library/ubuntu:latest
```

## See the images that have been downloaded to your computer

```
$ docker images
```

```
<!-- Expected output -->

Output
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
ubuntu              latest              1d622ef86b13        3 weeks ago         73.9MB
hello-world         latest              bf756fb1ae65        4 months ago        13.3kB
```

# Step 5 : Running a Docker Container

## Run a container using the latest image of ubuntu.

- Combination of -i and -t switches : Gives you interactive shell access into the container

```
$ docker run -it ubuntu
```

```
<!-- Expected command prompt -->
<!-- Nb : The container id is needed later if you want to remove the container -->

root@d9b100f2f636:/#
```

## Update package database inside the container

```
root@d9b100f2f636:/# apt update
```

## Install any application in it (Example nodejs)

```
root@d9b100f2f636:/# apt install nodejs
```

## Verify that nodejs is installed

```
root@d9b100f2f636:/# node -v
```

**Any changes you make inside the container only apply to that container**

# Step 6 : Managing Docker Containers

## View active containers

```
$ docker ps
```

```
<!-- Expected ouptut -->

CONTAINER ID        IMAGE               COMMAND             CREATED
```

## View all containers

```
$ docker ps -a
```

```
<!-- Example of output -->

1c08a7a0d0e4        ubuntu              "/bin/bash"         2 minutes ago       Exited (0) 8 seconds ago                       quizzical_mcnulty
a707221a5f6c        hello-world         "/hello"            6 minutes ago       Exited (0) 6 minutes ago                       youthful_curie

```

## View the latest container you created (pass the -l switch)

```
$ docker ps -l
```

```
<!-- Example of output -->

    CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS                      PORTS               NAMES
    1c08a7a0d0e4        ubuntu              "/bin/bash"         2 minutes ago       Exited (0) 40 seconds ago                       quizzical_mcnulty


```

## Start a stopped container

```
$ docker start <container_id>

ex: $ docker start 1c08a7a0d0e4
```
## See the status

```
$ docker ps
```

## Stop a running container
```
$ docker stop <container_id OR container_name>

ex : 
   $ docker stop quizzica_mcnulty
```
## Remove a container
```
$ docker rm <container_id OR container_name>

ex:
   $ docker rm youthful_curie
```

## Start a new container and give it a name
```
Use --name switch
```

# Commiting changes in a Container to a Docker Image
## Commit the changes to a new Docker image instance
```
$ docker commit -m "What you did to the image" -a "Author name" container_id repository/new_image_name
```
## Example for user sammy with container id of d9b100f2f636

```
$ docker commit -m "added Node.js" -a "sammy" d9b100f2f636 sammy/ubuntu-nodejs
```

When you commit an image, the new image is saved locally on your computer.

## Listing the Docker images
```
$ docker images
```
```
Output
REPOSITORY               TAG                 IMAGE ID            CREATED             SIZE
sammy/ubuntu-nodejs   latest              7c1f35226ca6        7 seconds ago       179MB
...
```
In this example, **ubuntu-nodejs** is the new image, which was derived from the existing **ubuntu** image from Docker Hub. The size difference reflects the changes that were made. And in this example, the change was that Nodejs was installed. So next time you need to run a container using Ubuntu with NodeJS pre-installed, you can just use the new image.

You can also build images from a **Dockerfile**, which lets you automate the installation of software in a new image. However, that's outside the scope of this tutorial. (Out of this tutorial)

# Step 8 : Pushing Docker Images to a Docker Repository

## Log in to Docker Hub
```
$ docker login -u <docker-registry-username>
```

Note: If your Docker registry username is different from the local username you used to create the image, you will have to tag your image with your registry username. For the example given in the last step, you would type:
```
$ docker tag sammy/ubuntu-nodejs <docker-registry-username>/ubuntu-nodejs
```

## Push your own image
```
$ docker push <docker-registry-username>/<docker-image-name>
```

## Push the ubuntu-nodejs image to the sammy repository
```
$ docker push <sammy>/<ubuntu-nodejs>
```

```
<!-- Expected output -->
The push refers to a repository [docker.io/sammy/ubuntu-nodejs]
e3fbbfb44187: Pushed
5f70bf18a086: Pushed
a3b5c80a4eba: Pushed
7f18b442972b: Pushed
3ce512daaf78: Pushed
7aae4540b42d: Pushed

...

<!-- If there's an error -->
The push refers to a repository [docker.io/sammy/ubuntu-nodejs]
e3fbbfb44187: Preparing
5f70bf18a086: Preparing
a3b5c80a4eba: Preparing
7f18b442972b: Preparing
3ce512daaf78: Preparing
7aae4540b42d: Waiting
unauthorized: authentication required
```

## Pull the image to a new machine and use it to run a new container
```
$ docker pull sammy/ubuntu-nodejs
```

# Conlusion
```
- Installed Docker
- Worked with images and containers
- Pushed a modified image to Docker Hub 
```