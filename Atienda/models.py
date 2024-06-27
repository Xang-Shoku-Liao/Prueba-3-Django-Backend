from django.db import models

# Create your models here.
class Cliente(models.Model):
    rut = models.CharField(primary_key=True, max_length=10)
    nombre = models.CharField(max_length=20)
    apellidos = models.CharField(max_length=100)
    correo = models.EmailField(unique=True, max_length=100, blank=True, null=True)
    celular = models.CharField(max_length=45)

def __str__(self):
    return str(self.nombre)+" "+str(self.apellidos)
