from django.contrib import admin
from .models import Banco

@admin.register(Banco)
class BancoAdmin(admin.ModelAdmin):
    list_display = ('nome', 'sobrenome')  # Mostra os campos no admin
