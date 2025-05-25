from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path('register/', views.register, name='register'),
    path('contribution/', views.contribution, name='contribution'),
    path('registration/', views.registration, name='registration'),
    path('tampro/', views.tampro, name='tampro'),
    path('get-db/', views.get_db, name='get_db'),
]
