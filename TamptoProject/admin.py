from django.contrib import admin
from .models import michango, sajili

# Register your models here.
class wachangiaji(admin.ModelAdmin):
    list_display = [
        'fname', 'lname', 'email', 'phone_no', 'amount' 
    ]
    ordering = ['-id']  # newest first
    list_filter = ['is_seen']
    actions = ['mark_as_seen']

    @admin.action(description="Mark selected users as seen")
    def mark_as_seen(self, request, queryset):
        queryset.update(is_seen=True)

admin.site.register(michango, wachangiaji)

class waliojisajili(admin.ModelAdmin):
    list_display = [
        'fname', 'lname', 'email', 'phone_no', 'tshirt', 'tickets_child', 'tickets_adult' 
    ]
    ordering = ['-id']  # newest first
    list_filter = ['is_seen']
    actions = ['mark_as_seen']

    @admin.action(description="Mark selected users as seen")
    def mark_as_seen(self, request, queryset):
        queryset.update(is_seen=True)

admin.site.register(sajili, waliojisajili)