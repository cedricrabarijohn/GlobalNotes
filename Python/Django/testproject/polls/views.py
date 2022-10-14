from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def index(request):
    return HttpResponse("Hello from index")

def index2(request):
    return HttpResponse('Hello from index2')