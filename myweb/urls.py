from django.urls import path
from .import views

urlpatterns = [
        path('', views.index, name="index"),
        path('signup/', views.signup, name="signup"),
        path('signin/', views.signin, name="signin"),
        path('signout/', views.signout, name="signout"),
        path('feedback/',views.feedback, name="feedback"),
        path('inbox/', views.inbox, name="inbox"),
        path('admin_login/', views.admin_login, name="admin_login"),
        ]
