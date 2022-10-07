# Data volume containers
## Steps
- Create a **Data volume container**
- Create another container and mount the volume from the container created in step 1.

## Create a container (container1) and mount a volume inside of that
```
$ docker run -it --name container1 -v /data busybox
```

## Go to /data and create some files
```
/ # cd /data
/data # ls
/data # touch file1.txt file2.txt
/data #
```
## Launch another terminal and execute container1 then ls /data

```
$ docker exec container1 ls /data
```

## Launch another container (container2) and mount from container1 volume
```
$ docker run -it --volumes-from container1 --name container2 busybox 
```
## See that we have datas from the volume used in container1 in container2
```
/ # cd /data
/data # ls
```