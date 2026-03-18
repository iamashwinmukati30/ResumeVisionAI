from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from django.contrib.auth.hashers import check_password

from django.contrib.auth import authenticate

User = get_user_model()


@api_view(["POST"])
def register_user(request):

    username = request.data.get("username")
    email = request.data.get("email")
    password = request.data.get("password")

    if User.objects.filter(username=username).exists():
        return Response({"error": "User already exists"})

    user = User.objects.create(
        username=username, email=email, password=make_password(password)
    )

    return Response({"message": "User registered successfully"})


# login api
@api_view(["POST"])
def login_user(request):

    email = request.data.get("email", "").strip().lower()
    password = request.data.get("password")


    user = User.objects.filter(email__iexact=email).first()

    if not user:
        return Response({"error": "User not found"})

    if user.check_password(password):
        return Response(
            {
                "message": "Login successful",
                "user_id": user.id,
                "username": user.username,
            }
        )

    return Response({"error": "Invalid password"})
