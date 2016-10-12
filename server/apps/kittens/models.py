from django.db import models

class Kitten(models.Model):
    name = models.CharField(max_length=15)
    color = models.CharField(max_length=15)
    age = models.PositiveIntegerField()
