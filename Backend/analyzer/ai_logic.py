import spacy
import re

nlp = spacy.load("en_core_web_sm")

# predefined skill database
SKILLS_DB = [
    "python",
    "django",
    "javascript",
    "react",
    "node",
    "sql",
    "mysql",
    "postgresql",
    "html",
    "css",
    "machine learning",
    "data science",
    "tensorflow",
    "pandas",
    "numpy",
    "git",
    "docker",
    "aws",
]


def extract_skills(text):

    text = text.lower()
    skills_found = []

    for skill in SKILLS_DB:
        if skill in text:
            skills_found.append(skill)

    return list(set(skills_found))


def calculate_ats_score(text, skills):

    score = 0

    # length check
    word_count = len(text.split())

    if word_count > 300:
        score += 20

    # skills score
    score += min(len(skills) * 8, 40)

    # section detection
    sections = ["education", "experience", "projects", "skills"]

    for s in sections:
        if s in text.lower():
            score += 10

    return min(score, 100)


def job_match_percentage(resume_skills, job_description):

    job_skills = extract_skills(job_description)

    matched = set(resume_skills) & set(job_skills)

    if len(job_skills) == 0:
        return 0

    match = (len(matched) / len(job_skills)) * 100

    return round(match)


def generate_suggestions(score, skills):

    suggestions = []

    if score < 50:
        suggestions.append("Add more technical skills.")

    if len(skills) < 5:
        suggestions.append("Include more relevant skills in your resume.")

    suggestions.append("Add measurable achievements in experience section.")

    suggestions.append("Use action verbs like 'developed', 'implemented', 'designed'.")

    return suggestions


def improvement_tips(text):

    tips = []

    if "objective" not in text.lower():
        tips.append("Add a career objective section.")

    if "projects" not in text.lower():
        tips.append("Add project section to showcase work.")

    if "github" not in text.lower():
        tips.append("Include GitHub profile link.")

    if "linkedin" not in text.lower():
        tips.append("Include LinkedIn profile.")

    return tips


def analyze_resume_text(text, job_description=""):

    # extract skills
    skills = extract_skills(text)

    # calculate ATS score
    score = calculate_ats_score(text, skills)

    # generate suggestions
    suggestions = generate_suggestions(score, skills)

    # improvement tips
    tips = improvement_tips(text)

    # job match %
    job_match = 0
    if job_description:
        job_match = job_match_percentage(skills, job_description)

    return {
        "score": score,
        "skills": skills,
        "suggestions": suggestions,
        "improvements": tips,
        "job_match": job_match,
    }
