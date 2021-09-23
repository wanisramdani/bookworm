from rest_framework import serializers, viewsets
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from backend.apps.publication.models import Article, Book, Audio, Video, Praycard, Fatawi
from backend.apps.publication.api.serializers import ArticleSerializer, BookSerializer, AudioSerializer, VideoSerializer, PraycardSerializer, FatawiSerializer

class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


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


