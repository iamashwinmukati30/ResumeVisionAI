from django.urls import path
from .views import upload_resume, user_resumes, resume_result

urlpatterns = [
    path("upload/", upload_resume),
    path("history/<int:user_id>/", user_resumes),
    path("result/<int:resume_id>/", resume_result),
]
