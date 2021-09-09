from django.urls import path, re_path
from .views import DemoListView
from .views import data

app_name = "demo"

urlpatterns = [
    path( 'demo', DemoListView.as_view() ),
]