from rest_framework.serializers import ModelSerializer

from .models import Kitten

class KittenSerializer(ModelSerializer):
    class Meta:
        model = Kitten
