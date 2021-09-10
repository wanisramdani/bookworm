from django.db import models
from rest_framework import serializers
from backend.apps.publication import models

class ArticleSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Article
        fields = '__all__'


class BookSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Book
        fields = '__all__'


# BOOK , VIDEO, AUDIO, PRAYCARD, FATAWI
class VideoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Video
        fields = '__all__'


class AudioSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Audio
        fields = '__all__'


class PraycardSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Praycard
        fields = '__all__'


class FatawiSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Fatawi
        fields = '__all__'


# TODO: move it to its own file
#========Category===========
class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Category
        fields = '__all__'


class KlassSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Klass
        fields = '__all__'


class SeriesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Series
        fields = '__all__'
