from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from django.views.generic import TemplateView

from rest_framework import routers, permissions

from backend.apps.demo.api import views as vs

router = routers.DefaultRouter()
router.register('demo', vs.DemoListView)

catchall = TemplateView.as_view(template_name='index.html')

urlpatterns = [
    path('', catchall),
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls')),
    path('tinymce/', include('tinymce.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) 
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

