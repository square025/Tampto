from django.db import models

# Create your models here.
class sajili(models.Model):
    fname = models.CharField(max_length=15)
    lname = models.CharField(max_length=15)
    email = models.EmailField(unique=True)
    phone_no = models.CharField(max_length=17)
    gender = models.CharField(max_length=6)
    tshirt = models.CharField(max_length=2)
    tickets_child = models.CharField(max_length=8, blank=True, null=True)
    tickets_adult = models.CharField(max_length=8, blank=True, null=True)
    is_seen = models.BooleanField(default=False)
    profile_image = models.ImageField(upload_to='profile_images/', blank=True, null=True)

class michango(models.Model):
    fname = models.CharField(max_length=15)
    lname = models.CharField(max_length=15)
    email = models.EmailField(unique=True)
    phone_no = models.CharField(max_length=17)
    region = models.CharField(max_length=23)
    amount = models.DecimalField( max_digits=12, decimal_places=2)
    regions = models.CharField(max_length=30)
    payment = models.CharField( max_length=10)
    is_seen = models.BooleanField(default=False)
