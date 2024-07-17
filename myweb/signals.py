from django.dispatch import Signal, receiver
from django.core.mail import send_mail
from django.db.models.signals import post_save
from .models import Message
from django.conf import settings


# feedback_received = Signal()

@receiver(post_save, sender=Message)
def send_feedback(instance, created, **kwargs):
    """Send site owner message as soon as feedback is sent from site visitors"""
    if created:
        site_visitor_email = instance.email
        site_visitor_name = instance.name
        site_visitor_message = instance.message
        site_visitor_phone_no = instance.phone_no
        message = '{} with phone number, {} just sent the following feedback: \n {}'\
            .format(site_visitor_name, site_visitor_phone_no, site_visitor_message)
        send_mail(
            subject="Feedback confirmation from portfolio site",
            message=message,
            from_email=site_visitor_email,
            recipient_list=[settings.PORTFOLIO_SITE_OWNER_EMAIL]
        )
