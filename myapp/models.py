from django.db import models

class Banco(models.Model):
    nome = models.TextField()
    sobrenome = models.TextField()