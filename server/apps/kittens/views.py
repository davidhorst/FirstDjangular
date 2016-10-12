from rest_framework.viewsets import ModelViewSet

from .models import Kitten
from .serializers import KittenSerializer

class KittenViewSet(ModelViewSet):
    queryset = Kitten.objects.all()
    serializer_class = KittenSerializer
