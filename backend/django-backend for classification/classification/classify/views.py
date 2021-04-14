from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt

from classification import classify_email, multinomial_naive_bayesian

# from manage import clf, vectorizer

clf, vectorizer, categories = multinomial_naive_bayesian()


@csrf_exempt
def index(request):
    file = request.body
    pred = classify_email(str(file), clf, vectorizer)
    resp = {
        'label': categories[pred]
    }

    return JsonResponse(resp)
