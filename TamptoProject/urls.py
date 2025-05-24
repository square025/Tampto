from django.urls import path
from . import views


urlpatterns = [
    path("https://tampto.onrender.com", views.index, name="index"),
    path('https://tampto.onrender.com/register/', views.register, name='register'),
    path('https://tampto.onrender.com/contribution/', views.contribution, name='contribution'),
    path('https://tampto.onrender.com/registration/', views.registration, name='registration'),
]
