from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.home, name = 'home'),
    path('about/',views.about, name = 'about'),
    path('post/',views.post, name = 'post'),
    path('complaints/',views.complaints, name = 'complaints'),
    path('feedback/',views.feedback, name = 'feedback'),
    path('login/',views.login, name = 'login'),
    path('description/',views.description, name = 'description')
    
]
