from django.db import models
from datetime import datetime

# Create your models here.

class Message(models.Model):
    name=models.CharField(max_length=40)
    phone_no = models.CharField(max_length=12)
    email = models.EmailField()
    message = models.CharField(max_length=1000000)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "{}".format(self.name)