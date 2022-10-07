# Data volumes

## Mounting a data volume

image used : **busybox**

```
$ docker run -it -v /data --name container1 busybox
```

## List folder and files in interactive shell
```
/ # ls
```

## Notice that a volume named data is visible now
```
/ # ls

bin   data  dev   etc   home  proc  root  sys   tmp   usr   var
```
## Go inside the data directory and create a file named file1.txt
```
/ # cd data

/data # touch file1.txt

/data # ls

file1.txt 
```
## Exit
```
/data # exit
$
```
## Notice that the container is now exited
```
$ docker ps -a
```

## Inspect the container
```
$ docker inspect container1
```
## Output of the docker inspect (Mounts attribute) 
```
"Mounts": [{
    "Type": "volume",
    "Name": "568258a7940182c5ac52f0637c60c1d1f81e9ec77f3e4694647b4879c2ff003c",
    "Source": "/var/lib/docker/volumes/568258a7940182c5ac52f0637c60c1d1f81e9ec77f3e4694647b4879c2ff003c/_data",
    "Destination": "/data",
    "Driver": "local",
    "Mode": "",
    "RW": true,
    "Propagation": ""
}],
```

## Restart the container and attach it
```
$ docker restart container1

$ docker attach container1

/ #
```
## Check if the file is still here
```
/ # ls
bin   data  dev   etc   home  proc  root  sys   tmp   usr   var
/ # cd data
/data # ls
file1.txt
/data #
```

## Exit the container and remove it
```
/data # exit

$ docker rm container1
container1
```

## List volumes
```
$ docker volume ls
```
## Run busybox with the volume
```
$ docker run -it -v volumename:/data busybox
```

# Work by creacting a volume with docker create volume

## Create a volume 
```
$ docker volume create my-vol
```

## Start busybox with the created volume
```
$ docker run -it -v my-vol:/a/folder/name --name devtest busybox
```
## Verify that the volume was created and mounted correctly (Look for the Mounts section)
```
$ docker inspect devtest
```
```
"Mounts": [
    {
        "Type": "volume",
        "Name": "myvol",
        "Source": "/var/lib/docker/volumes/myvol2/_data",
        "Destination": "/app",
        "Driver": "local",
        "Mode": "",
        "RW": true,
        "Propagation": ""
    }
],
```


