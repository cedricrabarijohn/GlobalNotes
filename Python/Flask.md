# FLASK

## Create a virtual environment for python

```
> python -m venv env
```

## Activate the virtual environment

```
> env\Scripts\activate
```

## Packages

```
> pip install flask
```

## Save all project dependencies to a file

```
> pip freeze > requirements.txt
```

## To install the dependencies mentioned in requirements.txt

```
> pip install -r requirements.txt
```

## Create main.py

```py
from flask import Flask, request

app = Flask(__name__)

@app.route("/")
def root():
    return "hello world"

if __name__ == "__main__":
    app.run(debug=True)
```

## Setting the env variable

```
> $env:FLASK_APP = "main.py"
```

## Run the app

```
> flask run --reload
```

# Deploy to pythonanywhere
## Create env 
```
> mkvirtualenv env
```