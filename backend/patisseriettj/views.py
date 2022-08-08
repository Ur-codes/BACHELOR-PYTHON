from django.shortcuts import render
from rest_framework import viewsets

from .serializers import PatisserieSerializer
from .models import Patisserie

from .serializers import ViennoiserieSerializer
from .models import Viennoiserie

from .serializers import SucrerieSerializer
from .models import Sucrerie

from .serializers import ClientSerializer
from .models import Client

# Create your views here.

class PatisserieView(viewsets.ModelViewSet):
    serializer_class = PatisserieSerializer
    queryset = Patisserie.objects.all()
class ViennoiserieView(viewsets.ModelViewSet):
    serializer_class = ViennoiserieSerializer
    queryset = Viennoiserie.objects.all()
class SucrerieView(viewsets.ModelViewSet):
    serializer_class = SucrerieSerializer
    queryset = Sucrerie.objects.all()
class ClientView(viewsets.ModelViewSet):
    serializer_class = ClientSerializer
    queryset = Client.objects.all()


