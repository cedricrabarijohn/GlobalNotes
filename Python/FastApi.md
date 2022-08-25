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
