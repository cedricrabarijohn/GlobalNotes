# Playing with the api
## Invoke the python shell
```
$ python manage.py shell
```

> We're using this instead of simply typing "python" because **manage.py** sets the **DJANGO_SETTINGS_MODULE** environment variable, which gives Django the Python import path to your **your_project/settings.py** file.

## Explore the database API
### Import models
```py
>>> from polls.models import Choice, Question
```
### Create a new question
```py
>>> q = Question(question_text="What's new ?")
```
### Save it to the database
```py
>>> q.save()
```
### Get the id of the created question
```py
>>> q.id
```
### Query all Questions
```py
>>> q = Question.objects.all()
```

### Filter query
```py
>>> q = Question.objects.filter(id=1)
```

### Get query (Same as filter but returns only one row)
```py
>>> q = Question.objects.get(id=1)
```
### Display choices from the related object set
```py
>>> q.choice_set.all()
```
### Create three choices
```py
>>> q.choice_set.create(choice_text='Not much', votes=0)
>>> q.choice_set.create(choice_text='The sky', votes=0)
>>> c = q.choice_set.create(choice_text='Just hacking again', votes=0)
```

### Get the related Question objects from the choice_set that have been created
```py
>>> c.question
```

### Count choice_set from the question
```py
>>> q.choice_set.count()
```
### 