from .models import Banco
from rest_framework import serializers

class Myserializer(serializers.ModelSerializer):  # Use ModelSerializer
    class Meta:  # Corrigir a classe Meta
        model = Banco  # Associar ao modelo Banco
        fields = '__all__'  # Certifique-se de usar "fields" com todos os campos
