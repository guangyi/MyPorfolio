'''
Created on Feb 11, 2014

@author: zhouguangyi2009
'''
from django.http import HttpResponse
from django.core.mail import EmailMessage
import json
from rest_framework import generics
from models import Projects

def sendEmail(request):
    #calling ajax recieves encoded json string in request body
    # need to decode it using python's json module to get python dict:
    emailEntity = json.loads(request.body)
    name = emailEntity['name']
    emailAdd = emailEntity['email']
    receivedMessage = name + '\n' + emailAdd +'\n'+ emailEntity['message'] 
    sendMessage = 'Thank you ' + name +' I have received your email and I appreciate your feedback.\n I will \
    reply to you as soon as possible. Thank you again and have a nice day \n Best regards, \n Guangyi'
    email = EmailMessage('Thank you for your email '+ name, sendMessage ,to=[emailAdd])
    email2 = EmailMessage('New message from ' + name, receivedMessage, to=['guangyi2014@gmail.com'])
    email.send()
    email2.send()
    return HttpResponse('success')

class loadProjects(generics.ListAPIView):
    model = Projects
    #serializer = projectSerializer