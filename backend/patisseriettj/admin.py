from django.contrib import admin
from .models import Patisserie
from .models import Viennoiserie
from .models import Sucrerie
from .models import Client

class PatisserieAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'quantity','url')

class ViennoiserieAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'quantity','url')

class SucrerieAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'quantity','url')

class ClientAdmin(admin.ModelAdmin):
    list_display = ('username', 'password')
    
# Register your models here.

admin.site.register(Patisserie, PatisserieAdmin)
admin.site.register(Viennoiserie, ViennoiserieAdmin)
admin.site.register(Sucrerie, SucrerieAdmin)
admin.site.register(Client, ClientAdmin)
