from backend.apps.publication.models.article import Audio
from django.contrib import admin
from .models import Article, Category, Book, Audio, Video, Fatawi, Praycard

# Register your models here.
admin.site.register(Article)
admin.site.register(Category)
admin.site.register(Book)
admin.site.register(Audio)
admin.site.register(Video)
admin.site.register(Fatawi)
admin.site.register(Praycard)