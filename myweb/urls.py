from django.urls import path
from .import views

urlpatterns = [
        path('', views.index, name="index"),
        path('feedback/',views.feedback, name="feedback"),
        path('inbox/', views.inbox, name="inbox"),
        ]
