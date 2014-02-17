from django.conf.urls import patterns, include, url
from Portfolio.views import sendEmail, loadProjects
from django.views.generic import TemplateView

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    url(r'^$', TemplateView.as_view(template_name="index.html")),
    url(r'sendemail/$',sendEmail ),
   # url(r'loadprojects/$', loadPorjects)
    # Examples:
    # url(r'^$', 'Portfolio.views.home', name='home'),
    # url(r'^Portfolio/', include('Portfolio.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
)
