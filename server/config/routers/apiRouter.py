from rest_framework import routers

from server.apps.kittens.views import KittenViewSet

router = routers.SimpleRouter()
router.register(r'kittens', KittenViewSet)
