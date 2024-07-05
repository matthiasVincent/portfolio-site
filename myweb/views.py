from django.shortcuts import render, redirect
from django.contrib.auth import get_user_model, authenticate
from django.contrib.auth import login, logout
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .models import Message
from django.http import HttpResponse
#User = get_user_model()
# Create your views here.

def index(request):
    return render(request, 'home.html')

def signup(request):
    if request.method == "POST":
        username=request.POST["username"]
        email = request.POST["email"]
        password = request.POST["password"]
        password2 = request.POST["password2"]

        if password == password2:
            if User.objects.filter(username=username).exists():
                messages.info(request, 'username taken')
                return render(request, 'signup.html')
            elif User.objects.filter(email=email).exists():
                messages.info(request, 'email already taken')
                return render(request, 'signup.html')
            else:
                user = User.objects.create_user(username=username, email=email,password=password)
                user.save()
                return redirect('signin')
        else:
            messages.info(request, "Password does not match")
            return render(request, 'signup.html')
    return render(request, 'signup.html')

def signin(request):
    if request.method == "POST":
        email=request.POST['email']
        password=request.POST['password']
        print(password, email)
        t=User.objects.get(email=email)
        print(t.username)
        user = authenticate(username=t.username, email=email, password=password)
        if user is not None:
            login(request, user)
            return redirect('/')
        else:
            messages.info(request, "Invalid credentials: email or password not correct")
            return render(request, 'login.html' )


    return render(request, 'login.html')


def signout(request):
    logout(request)
    return redirect('/')

def feedback(request):
    user=request.user
    if request.method == "POST":
        name=request.POST["name"]
        phone_no = request.POST["phone_no"]
        email = request.POST["email"]
        message = request.POST["message"]
        
        new_feed = Message.objects.create(name=name,phone_no=phone_no,email=email,message=message)
        new_feed.save()
        msg = "Message Sent successfully, Many thanks for reaching out, {}".format(name)
        return HttpResponse(msg)
def inbox(request):
    All_msg = Message.objects.all()
    return render(request, 'inbox.html', {'All_msg':All_msg})

def admin_login(request):
    if request.method == "POST":
        email=request.POST['email']
        password=request.POST['password']
        t = User.objects.get(email=email)
        print(t)
        if email!="sundayoduhmatthias@gmail.com":
            messages.info(request, "Wrong Email")
            return render(request, 'admin_login.html')
        elif password!=t.password:
            messages.info(request, "Wrong Password")
            return render(request, 'admin_login.html')
        else:
            return redirect('inbox')
    return render(request, "admin_login.html")
