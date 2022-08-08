from rest_framework import serializers
from .models import Patisserie
from .models import Viennoiserie
from .models import Sucrerie
from .models import Client

class PatisserieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patisserie
        fields = ('id', 'name', 'price', 'quantity','url')
class ViennoiserieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Viennoiserie
        fields = ('id', 'name', 'price', 'quantity','url')
class SucrerieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sucrerie
        fields = ('id', 'name', 'price', 'quantity','url')
class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ('id', 'username', 'password','address', 'email', 'nom','prenom')