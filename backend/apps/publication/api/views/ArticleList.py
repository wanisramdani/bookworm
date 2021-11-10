from rest_framework import generics
from backend.apps.publication import models
from backend.apps.publication.api import serializers

class ArticleList(generics.ListCreateAPIView):
    serializer_class = serializers.ArticleSerializer
    
    def get_queryset(self):
        author = self.kwargs['author']
        return models.Article.objects.filter(author=author)