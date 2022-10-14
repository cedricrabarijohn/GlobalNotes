from django.urls import path

from . import views

urlpatterns = [
    path('',views.index),
    path('view2/', views.index2)
]