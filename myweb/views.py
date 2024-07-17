from django.shortcuts import render
from .models import Message
from django.http import HttpResponse
# from .signals import feedback_received
#User = get_user_model()
# Create your views here.

def index(request):
    """Renders portfolio home page"""
    return render(request, 'home_new.html')


def feedback(request):
    """Get feedback from site visitor"""
    if request.method == "POST":
        name=request.POST["name"]
        phone_no = request.POST["phone_no"]
        email = request.POST["email"]
        message = request.POST["message"]
        
        new_feed = Message.objects.create(name=name,phone_no=phone_no,email=email,message=message)
        new_feed.save()
        # feedback_received.send(sender=Message, instance=new_feed, created=True)
        msg = "Message Sent successfully, Many thanks for reaching out, {}".format(name)
        return HttpResponse(msg)
    
def inbox(request):
    """inbox for messages sent to portfolio site owner"""
    All_msg = Message.objects.all().order_by('-created_at')
    return render(request, 'inbox.html', {'All_msg':All_msg})
