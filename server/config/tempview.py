from django.http import HttpResponse
def index(request):
    print request.body
    return HttpResponse('test')
