import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

pdf_path = "public/resume.pdf"
doc = SimpleDocTemplate(
    pdf_path,
    pagesize=letter,
    rightMargin=40,
    leftMargin=40,
    topMargin=40,
    bottomMargin=40
)

styles = getSampleStyleSheet()

# Custom styles
name_style = ParagraphStyle(
    'NameStyle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=22,
    leading=26,
    alignment=1, # Center
    textColor=colors.HexColor("#1A202C")
)

title_style = ParagraphStyle(
    'TitleStyle',
    parent=styles['Normal'],
    fontName='Helvetica-Oblique',
    fontSize=12,
    leading=15,
    alignment=1,
    textColor=colors.HexColor("#4A5568")
)

contact_style = ParagraphStyle(
    'ContactStyle',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=9.5,
    leading=13,
    alignment=1,
    textColor=colors.HexColor("#2D3748")
)

section_heading = ParagraphStyle(
    'SectionHeading',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=11,
    leading=14,
    textColor=colors.HexColor("#1A202C"),
    spaceAfter=4,
    spaceBefore=8
)

body_style = ParagraphStyle(
    'BodyStyle',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=9.5,
    leading=13.5,
    textColor=colors.HexColor("#2D3748")
)

bullet_style = ParagraphStyle(
    'BulletStyle',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=9,
    leading=13,
    leftIndent=15,
    firstLineIndent=-10,
    textColor=colors.HexColor("#2D3748")
)

bold_label = ParagraphStyle(
    'BoldLabel',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=9.5,
    leading=13.5,
    textColor=colors.HexColor("#1A202C")
)

story = []

# Header
story.append(Paragraph("PRAKASH GOUDA", name_style))
story.append(Spacer(1, 2))
story.append(Paragraph("Full-Stack Software Developer", title_style))
story.append(Spacer(1, 4))
story.append(Paragraph("Siddapura, Karnataka | 9353981311 | prakashgouda5002@gmail.com | LinkedIn | GitHub", contact_style))
story.append(Spacer(1, 8))

def add_divider():
    story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor("#CBD5E0"), spaceBefore=4, spaceAfter=6))

# SUMMARY
story.append(Paragraph("SUMMARY", section_heading))
add_divider()
summary_text = (
    "Junior software developer with hands-on experience in Java and Python programming, and front-end and back-end web "
    "development using JavaScript, React.js, Node.js, and Express.js. Solid grounding in HTML, CSS, and database fundamentals "
    "across SQL and MongoDB, with skills in version control (Git, GitHub) and UI/UX design principles. Comfortable working across "
    "the software development lifecycle (SDLC) from design to implementation, with strong problem-solving skills and a focus on "
    "writing clean, maintainable code. Completed a BCA in Computer Science; eager to contribute to a full-stack software development "
    "role and grow technical expertise."
)
story.append(Paragraph(summary_text, body_style))
story.append(Spacer(1, 6))

# EXPERIENCE
story.append(Paragraph("EXPERIENCE", section_heading))
add_divider()
exp_header = "<b>Full-Stack Software Developer Intern</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Jan 2026 – Mar 2026"
story.append(Paragraph(exp_header, body_style))
story.append(Paragraph("<i>Ahana Info Tech, Sagara, India</i>", body_style))
story.append(Spacer(1, 4))
bullets = [
    "Designed and developed a responsive personal portfolio website using HTML and CSS, applying UI/UX best practices.",
    "Built clean, intuitive UI layouts and structured content sections for projects, skills, and information pages.",
    "Implemented responsive design across mobile, tablet, and desktop breakpoints to ensure cross-device compatibility.",
    "Optimized layout, typography, and visual hierarchy to improve accessibility and overall user experience."
]
for b in bullets:
    story.append(Paragraph(f"• &nbsp; {b}", bullet_style))
story.append(Spacer(1, 6))

# SKILLS
story.append(Paragraph("SKILLS", section_heading))
add_divider()
skills_text = (
    "• <b>Languages:</b> Java, Python, JavaScript<br/>"
    "• <b>Frontend & Design:</b> React.js, HTML5 / CSS3, UI/UX Design, Responsive Web Design, Wireframing (Figma, Adobe XD)<br/>"
    "• <b>Backend & Databases:</b> Node.js, Express.js, SQL / MongoDB, Database Optimization, OOP & Data Structures, SDLC & Debugging<br/>"
    "• <b>Tools:</b> Git / GitHub"
)
story.append(Paragraph(skills_text, body_style))
story.append(Spacer(1, 6))

# EDUCATION
story.append(Paragraph("EDUCATION", section_heading))
add_divider()
story.append(Paragraph("<b>Bachelor of Computer Applications (BCA)</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Aug 2023 – Jun 2026", body_style))
story.append(Paragraph("GFGC Kuvempu University, Sagara, Karnataka • Computer Science • CGPA: 8.28, India", body_style))
story.append(Spacer(1, 4))
story.append(Paragraph("<b>Pre-University Course (PUC)</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Mar 2021 – Mar 2023", body_style))
story.append(Paragraph("SMGPUC, Sirsi, Karnataka • Percentage: 76.77%, India", body_style))
story.append(Paragraph("<i>Relevant Coursework: Java & Python Programming, OOP, Data Structures, DBMS (SQL), Web Development</i>", body_style))
story.append(Spacer(1, 6))

# PROJECTS
story.append(Paragraph("PROJECTS", section_heading))
add_divider()
story.append(Paragraph("<b>E-Commerce Website</b> <i>(HTML, CSS, UI/UX)</i>", body_style))
story.append(Paragraph("• &nbsp; Developed the front-end structure and styling for an e-commerce website concept, focused on usability and consistency.", bullet_style))
story.append(Spacer(1, 4))
story.append(Paragraph("<b>Landing Page Design</b> <i>(HTML, CSS, UI/UX)</i>", body_style))
story.append(Paragraph("• &nbsp; Developed a modern, responsive landing page using wireframes and UI layouts created with design tools.", bullet_style))
story.append(Paragraph("• &nbsp; Applied effective color schemes, typography, and spacing to create a cohesive visual design.", bullet_style))
story.append(Paragraph("• &nbsp; Added clear call-to-action sections to improve user interaction and conversion.", bullet_style))
story.append(Spacer(1, 6))

# CERTIFICATIONS
story.append(Paragraph("CERTIFICATIONS", section_heading))
add_divider()
certs = [
    "HTML and CSS Web Development",
    "UI/UX Design Fundamentals",
    "Walmart Global Tech Advanced Software Engineering Job Simulation Certificate",
    "AWS Commercial Project Manager Job Simulation Certificate"
]
for c in certs:
    story.append(Paragraph(f"• &nbsp; {c}", bullet_style))

doc.build(story)
print("PDF compiled successfully at public/resume.pdf")
