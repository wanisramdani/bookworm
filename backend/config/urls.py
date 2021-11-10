from django.contrib import admin
from django.conf import settings
from django.conf.urls import url
from django.conf.urls.static import static
from django.urls import path, include
from django.views.generic import TemplateView

from rest_framework import routers, permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from backend.apps.publication.api import views as pub_views


schema_view = get_schema_view(
    openapi.Info(
        title="Snippets API",
        default_version='v0.0.1',
        description='Sa7i7ine public api',
        terms_of_service="",
        contact=openapi.Contact(email='wanisramdani00@gmail.com'),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

router = routers.DefaultRouter()
# Aritcle router
router.register('article', pub_views.ArticleViewSet)
router.register('book', pub_views.BookViewSet)
router.register('audio', pub_views.AudioViewSet)
router.register('video', pub_views.VideoViewSet)
router.register('praycard', pub_views.PraycardViewSet)
router.register('fatawi', pub_views.FatawiViewSet)
# Category router
router.register('category', pub_views.CategoryViewSet)
router.register('klass', pub_views.KlassViewSet)
router.register('series', pub_views.SeriesViewSet)


catchall = TemplateView.as_view(template_name='index.html')
urlpatterns = [
    # Api & api documentations swagger
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls')),
    url(r'^swagger(.P<format>\.json|.yaml)$', schema_view.without_ui(cache_timeout=0), name="schema-json"),
    url(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name="swagger-swagger-ui"),
  
    path('', catchall),
    path('admin/', admin.site.urls),
    path('tinymce/', include('tinymce.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) 
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

