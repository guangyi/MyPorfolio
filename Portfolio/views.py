'''
Created on Feb 11, 2014

@author: zhouguangyi2009
'''
from django.http import HttpResponse
from django.core.mail import EmailMessage
from django.middleware.csrf import get_token
from django.shortcuts import render
from django.views.decorators.csrf import ensure_csrf_cookie
import json
#from rest_framework import generics
#from models import Projects

#@ensure_csrf_cookie
def home(request):
    csrf_token = get_token(request)
    response = HttpResponse()
    response = render(request, 'index.html')
    response.set_cookie(key='csrftoken', value=csrf_token)
    print response.cookies
    #return render(request,"index.html")
    return response

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
    email2 = EmailMessage('New message from ' + name, receivedMessage, to=['mail@guangyi.me'])
    email.send()
    email2.send()
    return HttpResponse('success')

#class loadProjects(generics.ListAPIView):
#    model = Projects
    #serializer = projectSerializer