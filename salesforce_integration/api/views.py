from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Data
from .serializers import DataSerializer

class DataView(APIView):
  def get(self, request):
    data = Data.objects.all()
    serializer = DataSerializer(data, many=True)
    return Response(serializer.data)
