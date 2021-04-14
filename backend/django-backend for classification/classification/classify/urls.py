from django.urls import path

from classify import views

urlpatterns = [
    path('classify/', views.index),
]
