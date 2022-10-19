from django.db import models

class Question(models.Model):
    question_text = models.CharField(max_length=255)
    likes = models.IntegerField(default=0)
    def __str__(self):
        return self.question_text

class Choice(models.Model):
    question_id = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=50)
    votes = models.IntegerField()
    def __str__(self):
        return self.choice_text