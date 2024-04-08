from django.shortcuts import render


# Create your views here.
def about(request):
    return render(request,'about.html')

def post(request):
    return render(request,'post.html')

def home(request):
    return render(request,'index.html')

def feedback(request):
    return render(request,'feedback.html')

def complaints(request):
    return render(request,'complaints.html')

def login(request):
    return render(request,'login.html')

def description(request):
    return render(request,'description.html')