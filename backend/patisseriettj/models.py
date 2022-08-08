from django.db import models

# Create your models here.

class Patisserie(models.Model):
    name = models.CharField(max_length=60)
    price = models.DecimalField(max_digits=4, decimal_places=2)
    quantity = models.IntegerField(null=True)
    url = models.CharField(max_length=500,null=True)
    def _str_(self):
        return self.name

class Viennoiserie(models.Model):
    name = models.CharField(max_length=60)
    price = models.DecimalField(max_digits=4, decimal_places=2)
    quantity = models.IntegerField(null=True)
    url = models.CharField(max_length=500,null=True)
    def _str_(self):
        return self.name

class Sucrerie(models.Model):
    name = models.CharField(max_length=60)
    price = models.DecimalField(max_digits=4, decimal_places=2)
    quantity = models.IntegerField(null=True)
    url = models.CharField(max_length=500,null=True)
    def _str_(self):
        return self.name

class Client(models.Model):
    username = models.CharField(max_length=60)
    password = models.CharField(max_length=60)
    address = models.CharField(max_length=120, null=True)
    email = models.CharField(max_length=120, null=True)
    nom = models.CharField(max_length=60, null=True)
    prenom = models.CharField(max_length=60, null=True)
    def _str_(self):
        return self.username
