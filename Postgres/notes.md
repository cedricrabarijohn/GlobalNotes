# Connect to postgresql cli (local)
- psql -U postgres
# Postgresql cli commands
- \l : list the databases
- \c <database_name> : connect to a database
- \dt : list all the tables inside the database

# Connect to a remote postgresql server
```
-psql --host = the_host_url --port = 5432 --username=username_here --password --dbname = dbname_here
```
## Example
```
psql --host=ec2-63-32-248-14.eu-west-1.compute.amazonaws.com --port=5432 --username=mgrpewuvokkczq --password --dbname=d57qidrm564qei
```