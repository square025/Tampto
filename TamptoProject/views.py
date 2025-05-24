from django.shortcuts import render, redirect
from datetime import datetime
from .models import michango ,sajili

# Create your views here.

def index(request):
    # Set your event date and time
    event_date = datetime(2025, 6, 22, 00, 00, 00)
    now = datetime.now()
    delta = event_date - now
    
    days = delta.days
    hours = delta.seconds // 3600
    minutes = (delta.seconds % 3600) // 60
    seconds = delta.seconds % 60

    context = {
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
        'event_date_iso': event_date.isoformat(),  # For JS live countdown
    }
    return render(request, 'index.html', context)

def register(request):
    return render(request, 'register.html')

def contribution(request):
    if request.method == "POST":
        fname = request.POST.get('fname')
        lname = request.POST.get('lname')
        email = request.POST.get('email')
        phone_no = request.POST.get('phone_no')
        region = request.POST.get('region')
        regions = request.POST.getlist('regions')
        amount = request.POST.get('amount')
        payment_method = request.POST.get('payment')

        michango.objects.create(
            fname=fname,
            lname=lname,
            email=email,
            phone_no=phone_no,
            region=region,
            regions=regions,
            amount=amount,
            payment=payment_method,
        )
        return redirect('index')
    return render(request, 'contribution.html')

def registration(request):
    if request.method == "POST":
        fname = request.POST.get('fname')
        lname = request.POST.get('lname')
        email = request.POST.get('email')
        phone_no = request.POST.get('phone_no')
        gender = request.POST.get('gender')
        size = request.POST.get('tshirt')
        category = request.POST.get('category')

        # Define ticket counts or values as needed
        tickets_child = 1  # or set based on your logic/request
        tickets_adult = 1  # or set based on your logic/request

        sajili.objects.create(
            fname=fname,
            lname=lname,
            email=email,
            phone_no=phone_no,
            gender=gender,
            tshirt=size,
            tickets_child=tickets_child if category == 'child' else None,
            tickets_adult=tickets_adult if category == 'adult' else None,
        )
        return redirect('index')
    return render(request, 'register.html')


