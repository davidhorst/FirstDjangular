from django.conf.urls import include, url
from django.contrib import admin
from django.views.generic import TemplateView

from server.config.routers.apiRouter import router
from rest_framework_jwt.views import obtain_jwt_token, verify_jwt_token
from . import tempview

urlpatterns = [
    url(r'^$', TemplateView.as_view(template_name='index.html')),
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include(router.urls)),
    url(r'^api-token-auth/', obtain_jwt_token),
    url(r'^api-token-verify/', verify_jwt_token),
    # url(r'^auth/google', tempview.index),
]
