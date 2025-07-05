from rest_framework import serializers
from .models import ServiceCategory, ServiceProvider, ServiceRequest

class ServiceCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceCategory
        fields = '__all__'

class ServiceProviderSerializer(serializers.ModelSerializer):
    category = ServiceCategorySerializer(read_only=True)
    
    class Meta:
        model = ServiceProvider
        fields = '__all__'

class ServiceRequestSerializer(serializers.ModelSerializer):
    provider = ServiceProviderSerializer(read_only=True)
    provider_id = serializers.PrimaryKeyRelatedField(
        queryset=ServiceProvider.objects.all(),
        source='provider',
        write_only=True
    )
    
    class Meta:
        model = ServiceRequest
        fields = '__all__'