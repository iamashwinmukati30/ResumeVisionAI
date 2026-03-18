import pdfplumber
import spacy
import docx
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Resume
from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404

from analyzer.ai_logic import (
    extract_skills,
    calculate_ats_score,
    job_match_percentage,
    generate_suggestions,
    improvement_tips,
)

User = get_user_model()

nlp = spacy.load("en_core_web_sm")


@api_view(["POST"])
def upload_resume(request):
    try:
        user_id = request.data.get("user_id")
        file = request.FILES.get("resume")

        if not user_id:
            return Response({"error": "user_id is required"})

        if not file:
            return Response({"error": "resume file is required"})

        try:
            user = User.objects.get(id=user_id)
        except User.DoesNotExist:
            return Response({"error": "User not found"})

        text = ""
        file_name = file.name.lower()

        # ---------- PDF ----------
        if file_name.endswith(".pdf"):
            with pdfplumber.open(file) as pdf:
                for page in pdf.pages:
                    page_text = page.extract_text()
                    if page_text:
                        text += page_text

        # ---------- DOCX ----------
        elif file_name.endswith(".docx"):
            doc = docx.Document(file)
            for para in doc.paragraphs:
                text += para.text + "\n"

        else:
            return Response({"error": "Only PDF or DOCX files allowed"})

        if not text.strip():
            return Response({"error": "Could not extract text from resume"})

        # AI analysis
        skills = extract_skills(text)
        score = calculate_ats_score(text, skills)
        suggestions = generate_suggestions(score, skills)
        improvements = improvement_tips(text)

        resume = Resume.objects.create(
            user=user, resume_file=file, extracted_text=text, score=score
        )

        return Response(
            {
                "resume_id": resume.id,
                "score": score,
                "skills": skills,
                "suggestions": suggestions,
                "improvements": improvements,
            }
        )

    except Exception as e:
        return Response({"error": "Server error", "details": str(e)})


@api_view(["GET"])
def user_resumes(request, user_id):

    resumes = Resume.objects.filter(user_id=user_id)

    data = []

    for r in resumes:
        data.append({"id": r.id, "score": r.score, "date": r.created_at})

    return Response(data)


# result api
@api_view(["GET"])
def resume_result(request, resume_id):

    resume = get_object_or_404(Resume, id=resume_id)

    text = resume.extracted_text

    skills = extract_skills(text)

    suggestions = generate_suggestions(resume.score, skills)

    improvements = improvement_tips(text)

    return Response(
        {
            "score": resume.score,
            "skills": skills,
            "suggestions": suggestions,
            "improvements": improvements,
        }
    )
