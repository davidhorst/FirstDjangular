from django.conf.urls import include, url
from django.contrib import admin
from django.views.generic import TemplateView

from server.config.routers.apiRouter import router

urlpatterns = [
    url(r'^$', TemplateView.as_view(template_name='index.html')),
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include(router.urls)),
]
