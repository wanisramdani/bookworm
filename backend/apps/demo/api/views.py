from rest_framework import serializers, viewsets
from rest_framework.generics import ListAPIView

from backend.apps.demo.models import Demo
from .serializers import DemoSerializer


class DemoListView(viewsets.ModelViewSet):
    queryset = Demo.objects.all()
    serializer_class = DemoSerializer