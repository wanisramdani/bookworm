from rest_framework import serializers, viewsets
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from backend.apps.publication.models import Category, Klass, Series
from backend.apps.publication.api.serializers import CategorySerializer, KlassSerializer, SeriesSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

class KlassViewSet(viewsets.ModelViewSet):
    queryset = Klass.objects.all()
    serializer_class = KlassSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

class SeriesViewSet(viewsets.ModelViewSet):
    queryset = Series.objects.all()
    serializer_class = SeriesSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

