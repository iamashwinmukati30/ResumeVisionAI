from django.db import models
from django.conf import settings

User = settings.AUTH_USER_MODEL


class Resume(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)

    resume_file = models.FileField(upload_to="resumes/")

    extracted_text = models.TextField()

    score = models.IntegerField()

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user} Resume"
