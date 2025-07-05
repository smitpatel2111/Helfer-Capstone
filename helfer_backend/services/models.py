from django.db import models

class ServiceCategory(models.Model):
    name = models.CharField(max_length=100)
    image = models.CharField(max_length=255)  # URL to image
    description = models.TextField()

    def __str__(self):
        return self.name

class ServiceProvider(models.Model):
    name = models.CharField(max_length=100)
    category = models.ForeignKey(ServiceCategory, on_delete=models.CASCADE)
    image = models.CharField(max_length=255)  # URL to image
    rating = models.DecimalField(max_digits=3, decimal_places=2)
    experience = models.IntegerField()
    hourly_rate = models.DecimalField(max_digits=6, decimal_places=2)
    availability = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name

class ServiceRequest(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('accepted', 'Accepted'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled'),
    ]
    
    customer_name = models.CharField(max_length=100)
    customer_email = models.CharField(max_length=100)
    customer_phone = models.CharField(max_length=20)
    service_date = models.DateField()
    service_time = models.TimeField()
    address = models.TextField()
    special_instructions = models.TextField(blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Service #{self.id} - {self.provider.name}"