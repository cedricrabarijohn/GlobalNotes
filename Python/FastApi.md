<h1 align="center" style="font-weight:bolder">🔥 FAST API 🔥</h1>
<p align="center">Cedric Rabarijohn 2022, all right reserved.</p>

# Installation
```
> pip install fastapi
```

# Import
```py
from fastapi import FastAPI
```
# Example of simple hello world web service

## Create a file named main.py
```py
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message":"Hello world"}
```

## To run the program
!! You should make sure you have uvicorn installed
- If you don't have uvicorn yet
```
> pip install uvicorn
```
- Once you have it
```
> uvicorn main:app --reload
```
### then
```
Go to localhost:8000 (this is the default port)
```

# Requests
## Get the request body
### Import BaseModel from pydantic
```py
from pydantic import BaseModel
```
### Create your data model
```py
from pydantic import BaseModel

class TranslationModel(BaseModel):
    text: str
    to_language: str
```

### To add it to your path operation, declare it the same way you declared path and query parameters:
```py
@app.post("/translate")
async def root(translation: TranslationModel):
    return translation
```

# Deploy on heroku
## Create a virtual environment for python
```
> python -m venv env
```
## Activate the virtual environment
```
> env\Scripts\activate
```
## Upgrade pip
```
> python -m pip install --upgrade pip
```
## Install packages
```
> pip install fastapi
> pip install translators
> pip install uvicorn
> pip install gunicorn (This one is needed for the deployment on heroku)
```
## Save all project dependencies to a file
```
> pip freeze > requirements.txt
```
## To install the dependencies mentioned in requirements.txt
```
> pip install -r requirements.txt
```

## Create a Procfile file (no extension)
```
> mkdir Procfile
```
- Procfile
```
web: gunicorn -w 4 -k uvicorn.workers.UvicornWorker main:app
```
- web : is specific to Procfile command convention that will help identify the Heroku deployment process to start a web application with the command next to it.
- gunicorn is the WSGI server to which we are configuring our application to run on, with the following configuration.
- -w 4 indicates that we need our application to run on gunicorn with 4 worker processes.
- -k uvicorn.workers.UvicornWorker tells the gunicorn to run the application using uvicorn.workers.UvicornWorker worker class.
main:app is our module main where our FastAPI() app is initialized.

## Push the repository to github