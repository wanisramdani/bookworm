from rest_framework import serializers, viewsets
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django_filters.rest_framework import DjangoFilterBackend
from django_filters import FilterSet
import django_filters as filters


from backend.apps.publication.models import Article, Book, Audio, Video, Praycard, Fatawi
from backend.apps.publication.api.serializers import ArticleSerializer, BookSerializer, AudioSerializer, VideoSerializer, PraycardSerializer, FatawiSerializer

class ArticleFilter(FilterSet):
    
    class Meta:
        models: Article
        fields = [ 'category', 'series', 'klass', 'title', 'author', 'created_on']

class ArticleViewSet(viewsets.ModelViewSet):
    category = filters.CharFilter(lookup_expr='icontains')

    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = [ 'category', 'series', 'klass', 'title', 'author', 'created_on']

class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class AudioViewSet(viewsets.ModelViewSet):
    queryset = Audio.objects.all()
    serializer_class = AudioSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]



class VideoViewSet(viewsets.ModelViewSet):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class PraycardViewSet(viewsets.ModelViewSet):
    queryset = Praycard.objects.all()
    serializer_class = PraycardSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    


class FatawiViewSet(viewsets.ModelViewSet):
    queryset = Fatawi.objects.all()
    serializer_class = FatawiSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


