from django.db import models
from rest_framework import serializers
from backend.apps.publication import models

# TODO: move it to its own file
#========Category===========
class CategorySerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    class Meta:
        model = models.Category
        fields = '__all__'


class KlassSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    class Meta:
        model = models.Klass
        fields = '__all__'


class SeriesSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    class Meta:
        model = models.Series
        fields = '__all__'

#========Articles=============

class ArticleSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    klass = KlassSerializer(many=True, read_only=True)
    series = SeriesSerializer(many=True, read_only=True)
    category = CategorySerializer(read_only=True)
    class Meta:
        model = models.Article
        fields = '__all__'
        extra_kwargs = {

        }

# BOOK , VIDEO, AUDIO, PRAYCARD, FATAWI
class BookSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    klass = KlassSerializer(many=True, read_only=True)
    series = SeriesSerializer(many=True, read_only=True)
    category = CategorySerializer(read_only=True)
    class Meta:
        model = models.Book
        fields = '__all__'


class VideoSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.IntegerField(read_only=True)
    klass = KlassSerializer(many=True, read_only=True)
    series = SeriesSerializer(many=True, read_only=True)
    category = CategorySerializer(read_only=True)
    class Meta:
        model = models.Video
        fields = '__all__'


class AudioSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.IntegerField(read_only=True)    
    klass = KlassSerializer(many=True, read_only=True)
    series = SeriesSerializer(many=True, read_only=True)
    class Meta:
        model = models.Audio
        fields = '__all__'


class PraycardSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.IntegerField(read_only=True)
    klass = KlassSerializer(many=True, read_only=True)
    series = SeriesSerializer(many=True, read_only=True)
    category = CategorySerializer(read_only=True)
    class Meta:
        model = models.Praycard
        fields = '__all__'


class FatawiSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.IntegerField(read_only=True)
    klass = KlassSerializer(many=True, read_only=True)
    series = SeriesSerializer(many=True, read_only=True)
    category = CategorySerializer(read_only=True)
    class Meta:
        model = models.Fatawi
        fields = '__all__'
