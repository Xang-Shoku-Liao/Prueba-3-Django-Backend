from django.shortcuts import render
from .models import Cliente

def index(request):
    clientes = Cliente.objects.all()  # Cambia el nombre de la variable
    context = {"clientes": clientes}  # Utiliza un nombre diferente para el contexto
    return render(request, 'Atienda/index.html', context)

def crud(request):
    clientes = Cliente.objects.all()  # Corrección: objects en lugar de objets
    context = {"clientes": clientes}  # Corrección: nombre del contexto en minúscula
    return render(request, 'Atienda/clientes_list.html', context) 

def clientesAdd(request):
    if request.method is not "POST":
        generos
