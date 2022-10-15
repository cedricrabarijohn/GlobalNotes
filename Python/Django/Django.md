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
(myprojectenv) $ pip install django psycopg2
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

```
<!-- 
    - Migrate necessary database tables according to the database settings in your mysite/settings.py

    - The migrate command will only run migrations for apps in INSTALLED_APPS
-->

(myprojectenv) $ python3 manage.py migrate
```

# CREATING MODELS
```py
# polls/models.py

from django.db import models

class Question(model.Model):
    question_text = models.CharField(max_length)

class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)
```
# ACTIVATING MODELS
- Django will :
    - Create a database schema (CREATE TABLE statements) for this app.
    - Create a Python database-access API for accessing Question and Choice objects.
## Tell our project that the polls app is installed
- Go to **your_project/settings** then modify **INSTALLED_APPS** array. For example the **PollsConfig** class is in **polls/apps.py** file, it's dotted path would be '**polls.app.PollsConfig**'. Add this doted path
```python
INSTALLED_APPS = [
    'polls.app.PollsConfig',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]
```

## Make migrations
```
$ python manage.py makemigrations polls
```
> By running **makemigrations**, you're telling Django that you've made some changes to your models, and that you'd like the changes to be stored as a migration.

> **Migrations** are how Django stores changes to your model, they are stored inside **your_app/migrations/0001.initial.py**

## Print SQL that will be executed 
```
$ python manage.py sqlmigrate your_app 0001
```

## Check for any problems before migrating
```
$ python manage.py check
```
## Migrate (will create models tables in the database)
```
$ python manage.py migrate
```

> Migrations are very powerful and let you change your models over time as you develop your project, without the need to delete your database or tables and make new ones.

## Resume
- Change your models (in **models.py**)
- Run **python manage.py makemigrations** to create migrations for those changes
- Run **python manage.py migrate** to apply those changes to the database

