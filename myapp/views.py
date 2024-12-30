from django.shortcuts import render
from .models import Banco
from .serializers import Myserializer
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(["GET", "POST"])
def Viewer(request):
    if request.method == "POST":
        nome = request.data.get("nome", "Valdvia")
        sobrenome = request.data.get("sobrenome", "vasco")
        
        # Salvar os dados no banco de dados
        novo_registro = Banco(nome=nome, sobrenome=sobrenome)  # Substitua pelos campos do seu modelo
        novo_registro.save()

        return Response({"Mensagem": f"Dados salvos: {nome} {sobrenome}"})

    # Para requisições GET
    banco_dados = Banco.objects.all()
    serializer = Myserializer(banco_dados, many=True)
    return Response(serializer.data)
