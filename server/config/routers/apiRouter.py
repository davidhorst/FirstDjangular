from rest_framework import routers

from apps.kittens.views import KittenViewSet

router = routers.SimpleRouter()
router.register(r'kittens', KittenViewSet)
