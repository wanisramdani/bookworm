from django.db import models
from django.urls import reverse
from tinymce.models import HTMLField

import datetime
import os

from .category import *

'''
    we expecting a large amount of files to be uploaded
    we store them according to date(year/month/day), this will help the system to speed the search 
'''
# For pictures
def get_image_upload_path(instance, filename):
    return os.path.join('media/pictures/', datetime.datetime.now().date().strftime("%Y/%m/%d"), filename)

def get_pdf_upload_path(instance, filename):
    return os.path.join('media/pdf/', datetime.datetime.now().date().strftime("%Y/%m/%d"), filename) 


# TODO: add help_text
# title, author, upload-date, category, klass, series, type, status
class Article(models.Model):
    # TODO max length for arabic title/names
    title = models.CharField(max_length=500)
    slug = models.SlugField(unique=True)
    author = models.CharField(max_length=500)
    klass = models.ManyToManyField(Klass, blank=False, related_name='klass')
    series = models.ManyToManyField(Series, blank=True, null=True, related_name='series')
    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    # meta description

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("Article", kwargs={"slug": self.slug })

    def snippet(self):
        return self.body[:100] + '...'

    def get_cat_list(self):
        cate = self.category
        breadcrumb = []
        while cate is not None:
            breadcrumb.append(cate.slug)
            cate = cate.parent
        for i in range(len(breadcrumb)):
            breadcrumb[i] = '/'.join(breadcrumb[-1:i-1:-1])
            print(breadcrumb[i])
        return breadcrumb[-1:0:-1]


class Audio(Article):
    audio_title = models.CharField(max_length=500)
    audio_author = models.CharField(max_length=300)
    album = models.CharField(max_length=300, blank=True, null=True)
    picture = models.ImageField(default='default.png', upload_to=get_image_upload_path, blank=True)
    audio_file = models.FileField(blank=True, null=True)
    duration = models.CharField(max_length=20)

    def save(self):
        self.duration = '1.2mb' # calcualte file duartion

    def __str__(self):
        return self.title 


# Book( book-type, cover, pdfs, audio )
class Book(Article):
    # ImageField
    # Book-type : should be sub-category
    book_pdf = models.FileField()
    cover = models.ImageField(default="default.png", upload_to=get_image_upload_path, blank=True)
    book_audio = models.OneToOneField(Audio, blank=True, null=True, on_delete=models.CASCADE)


#Video( youtube-link )
class Video(Article):
    youtube_link = models.CharField(max_length=250)


# fatawi( picture, content, pdf )
class Fatawi(Article):
    picture = models.ImageField(default='default.png', upload_to=get_image_upload_path, blank=True)
    fatawi_pdf = models.FileField(upload_to=get_pdf_upload_path)
    content = HTMLField(default=1)
    #darft = models.BooleanField(default=False)
    #status = models.CharField(choices=STATUS, max_length=200)
    

#Pray-cards( card-type, picture )
class Praycard(Article):
    picture = models.ImageField(default='default.png', upload_to=get_image_upload_path, blank=True)
