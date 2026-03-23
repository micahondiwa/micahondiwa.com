import {
  Github,
  Linkedin,
  Twitter,
  LineChart,
  ExternalLink,
  FileText,
  Terminal,
  Cpu,
  Database,
  Settings
} from 'lucide-react';
import { Project, Experience, Education, Certification, Skill, Social, DomainExpertise } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "ML-Powered Stock Prediction Portal",
    description: "A Django + React web portal allowing secure JWT authentication and real-time stock trend forecasting using machine learning models.",
    tags: ["Django", "React", "ML", "JWT"],
    image: "https://picsum.photos/seed/stocks/800/600",
    github: "https://github.com/micahondiwa/stock-prediction-portal",
    demo: "https://micahondiwa.com/stock-prediction-portal"
  },
  {
    id: 2,
    title: "Learning Management System",
    description: "Comprehensive LMS platform built with Django and React, featuring specialized dashboards for both learners and instructors.",
    tags: ["Django", "React", "PostgreSQL", "Education"],
    image: "https://picsum.photos/seed/lms/800/600",
    github: "https://github.com/micahondiwa/learning-management-system"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Software Engineer | Data Centre Supervisor",
    company: "Kenya National Highways Authority (KeNHA)",
    contractor: "Via Management Contractor - Gokhan & Masterspace JV",
    period: "May 2024 – Present",
    description: [
      "Leading a cross-functional team of 10 (Data Centre Technicians, Software Engineers, Data Analysts, and Support Staff).",
      "Overseeing real-time weighbridge data monitoring and remote data relay system support & maintenance.",
      "Managing data centre server and server-room operations."
    ],
    tech: ["Django", "TypeScript", "PostgreSQL", "Docker", "REST API", "OpenCV"]
  },
  {
    id: 2,
    role: "Software Engineer Intern",
    company: "IBM Research Africa",
    period: "June 2023 – August 2023",
    description: [
      "Developed and deployed (on Red Hat's Open Shift) a Kubeflow Pipeline for comparing satellite images.",
      "Developed and deployed (on Red Hat's Open Shift) a Kubeflow pipeline for downloading satellite images and calculating the vegetation index.",
      "Developed and deployed (on Red Hat's Open Shift) a Kubeflow pipeline for estimating aboveground carbon biomass."
    ],
    tech: ["Python", "Docker", "OpenShift", "Kubeflow", "Tekton", "Travis"]
  },
  {
    id: 3,
    role: "Full Stack Developer | Technical Writer",
    company: "Fiverr (Remote)",
    period: "June 2018 – May 2023",
    description: [
      "Delivered 100+ projects with 90%+ client satisfaction.",
      "Modernized legacy applications and APIs.",
      "Organized and analyzed raw data for 100+ clients."
    ],
    tech: ["React", "Python", "API Design", "Technical Writing"]
  }
];

export const EDUCATION: Education[] = [
  {
    id: 1,
    degree: "MSc in Financial Engineering",
    school: "WorldQuant University",
    period: "2022 – 2025"
  },
  {
    id: 2,
    degree: "Software Engineering (Backend)",
    school: "Holberton School / ALX Africa",
    period: "2022 – 2024"
  },
  {
    id: 3,
    degree: "BSc in Actuarial Science",
    school: "JKUAT",
    period: "2013 – 2018"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Applied AI Lab: Deep Learning for Computer Vision",
    issuer: "WorldQuant University",
    year: "2025",
    skills: ["Deep Learning", "Facial Recognition", "PyTorch", "OpenCV", "YOLO", "Stable Diffusion"]
  },
  {
    title: "Applied Data Science Lab",
    issuer: "WorldQuant University",
    year: "2024",
    skills: ["Data Science", "Machine Learning", "SQL", "MongoDB", "Python", "API Design"]
  },
  {
    title: "Python 101 for Data Science",
    issuer: "IBM",
    year: "2019",
    skills: ["Python", "Data Science"]
  }
];

export const SKILLS: Skill[] = [
  {
    name: "Programming",
    icon: <Terminal className="w-5 h-5" />,
    items: ["Python", "JavaScript", "TypeScript", "Shell", "SQL"],
    description: "Writing clean, performant code across the stack.",
    size: 'medium'
  },
  {
    name: "ML & AI",
    icon: <Cpu className="w-5 h-5" />,
    items: ["Transformers", "LLaMA 3", "Mistral", "OpenCV", "Tesseract", "NLP"],
    description: "Building and deploying state-of-the-art models.",
    size: 'large'
  },
  {
    name: "Backend & Cloud",
    icon: <Database className="w-5 h-5" />,
    items: ["Django", "PostgreSQL", "Docker", "Kubernetes", "AWS", "OpenShift", "Kubeflow"],
    description: "Architecting scalable cloud-native solutions.",
    size: 'medium'
  },
  {
    name: "DevOps & CI/CD",
    icon: <Settings className="w-5 h-5" />,
    items: ["GitHub Actions", "Tekton", "Travis CI", "Jenkins", "Ansible", "Terraform"],
    description: "Automating delivery and infrastructure.",
    size: 'small'
  },
  {
    name: "Data & Vector DBs",
    icon: <LineChart className="w-5 h-5" />,
    items: ["Time Series", "GARCH", "ChromaDB", "Pinecone", "MongoDB", "Parquet"],
    description: "Managing high-dimensional and temporal data.",
    size: 'small'
  }
];

export const DOMAIN_EXPERTISE: DomainExpertise[] = [
  { subject: 'Backend', A: 95, fullMark: 100 },
  { subject: 'ML/AI', A: 90, fullMark: 100 },
  { subject: 'DevOps', A: 85, fullMark: 100 },
  { subject: 'Data Science', A: 92, fullMark: 100 },
  { subject: 'Actuarial', A: 88, fullMark: 100 },
  { subject: 'FinEng', A: 90, fullMark: 100 },
];

export const SOCIALS: Social[] = [
  { name: "GitHub", icon: <Github className="w-5 h-5" />, url: "https://github.com/micahondiwa" },
  { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, url: "https://www.linkedin.com/in/micahondiwa/" },
  { name: "X", icon: <Twitter className="w-5 h-5" />, url: "https://x.com/micahondiwa" },
  { name: "StackOverflow", icon: <LineChart className="w-5 h-5" />, url: "https://stackoverflow.com/users/15467774/micahondiwa" },
  { name: "Hashnode", icon: <ExternalLink className="w-5 h-5" />, url: "https://micahondiwa.hashnode.dev/" },
  { name: "CV", icon: <FileText className="w-5 h-5" />, url: "https://drive.google.com/file/d/1an05YwLN722VkufkexqFyLyyV4lLWBbf/view?usp=sharing" }
];
