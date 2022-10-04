# Installation

## Update the package list
```
> sudo apt update
```

## Install django
```
> sudo apt install python3-django
```

## Verify the install
```
> django-admin --version
```

# Creating a project
```
> django-admin startproject mysite
```

# The development server
## Run the server
```
> python3 manage.py runserver
```

Expected output
```
Performing system checks...

System check identified no issues (0 silenced).

You have unapplied migrations; your app may not work properly until they are applied.
Run 'python manage.py migrate' to apply them.

October 03, 2022 - 15:50:53
Django version 4.1, using settings 'mysite.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
```

# Creating the Polls app

## Projects vs apps
```
- App : A web application that does something, for example a blog system, a database of public records or a small poll app.

- Project : Collection of configuration and apps for a particular website.

A project can contain multiple apps and an app can be in multiple projects.
```

## Creation of the poll
**To create your app, make sure you’re in the same directory as manage.py**

```
> python3 manage.py startapp polls
```
## Write your first view
### Create the view
```py
# polls/views.py

from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello world")
```

### Call the view
```py
# polls/urls.py

from django.urls import path

from . import views

urlpatterns = [
    path('',views.index, name='index'),
]
```

```py
# mysite/urls.py

from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('polls/', include('polls.urls')),
    path('admin/', admin.site.urls)
]
```

### Test it
```
- Run the server : python3 manage.py runserver
- Go to localhost:8000/polls
```
# Database setup

## Postgresql

### Install the components from the ubuntu repositories

```
> sudo apt update
> sudo apt install python3-pip python3-dev libpq-dev postgresql postgresql-contrib
```

### Creating a database and a database User
```
<!-- Connect to the psql as postgres -->

> sudo -u postgres psql
```

```
<!-- Creating the database and a user -->

postgres=# CREATE DATABASE <myproject>;
postgres=# CREATE USER <myprojectuser> WITH PASSWORD '<password>';
```
```
<!-- Adding roles to the recently created user -->

postgres=# ALTER ROLE <myprojectuser> SET client_encoding TO 'utf8';
postgres=# ALTER ROLE <myprojectuser> SET default_transaction_isolation TO 'read commited';
postgres=# ALTER ROLE <myprojectuser> SET timezone TO 'UTC';
```

```
<!-- Giving all privileges to a database to the created user -->

postgres=# GRANT ALL PRIVILEGES ON DATABASE <myproject> TO <myprojectuser>;
```

```
<!-- Quit the postgres session -->

postgres=# \q
```

### Configure the django app
**Make sure you have a venv configured for the django app**
```
(myprojectenv) $ pip install Django psycopg2
```
### Configure the django database settings (myproject/myproject/settings.py)
```py
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'myproject',
        'USER': 'myprojectuser',
        'PASSWORD': 'password',
        'HOST': 'localhost',
        'PORT': '',
    }
}
```
