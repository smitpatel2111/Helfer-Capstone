from django.urls import path
from . import views

urlpatterns = [
    path('categories/', views.ServiceCategoryList.as_view(), name='category-list'),
    path('providers/', views.ServiceProviderList.as_view(), name='provider-list'),
    path('providers/<int:pk>/', views.ServiceProviderDetail.as_view(), name='provider-detail'),
    path('requests/', views.ServiceRequestCreate.as_view(), name='request-create'),
]