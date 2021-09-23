from rest_framework import serializers, viewsets
from rest_framework.generics import ListAPIView

from backend.apps.publication.models import Article, Book, Audio, Video, Praycard, Fatawi
from backend.apps.publication.api.serializers import ArticleSerializer, BookSerializer, AudioSerializer, VideoSerializer, PraycardSerializer, FatawiSerializer

class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer


class AudioViewSet(viewsets.ModelViewSet):
    queryset = Audio.objects.all()
    serializer_class = AudioSerializer


class VideoViewSet(viewsets.ModelViewSet):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer


class PraycardViewSet(viewsets.ModelViewSet):
    queryset = Praycard.objects.all()
    serializer_class = PraycardSerializer


class FatawiViewSet(viewsets.ModelViewSet):
    queryset = Fatawi.objects.all()
    serializer_class = FatawiSerializer

