from django.shortcuts import render

from rest_framework import generics
from .models import ServiceCategory, ServiceProvider, ServiceRequest
from .serializers import (
    ServiceCategorySerializer,
    ServiceProviderSerializer,
    ServiceRequestSerializer
)

class ServiceCategoryList(generics.ListAPIView):
    queryset = ServiceCategory.objects.all()
    serializer_class = ServiceCategorySerializer

class ServiceProviderList(generics.ListAPIView):
    serializer_class = ServiceProviderSerializer
    
    def get_queryset(self):
        queryset = ServiceProvider.objects.all()
        category_id = self.request.query_params.get('category_id', None)
        if category_id is not None:
            queryset = queryset.filter(category_id=category_id)
        return queryset

class ServiceProviderDetail(generics.RetrieveAPIView):
    queryset = ServiceProvider.objects.all()
    serializer_class = ServiceProviderSerializer

class ServiceRequestCreate(generics.CreateAPIView):
    queryset = ServiceRequest.objects.all()
    serializer_class = ServiceRequestSerializer
