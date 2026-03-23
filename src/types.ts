import { ReactNode } from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  demo?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  contractor?: string;
  period: string;
  description: string[];
  tech: string[];
}

export interface Education {
  id: number;
  degree: string;
  school: string;
  period: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  skills: string[];
}

export interface Skill {
  name: string;
  icon: ReactNode;
  items: string[];
  description?: string;
  size?: 'small' | 'medium' | 'large';
}

export interface Social {
  name: string;
  icon: ReactNode;
  url: string;
}

export interface DomainExpertise {
  subject: string;
  A: number;
  fullMark: number;
}
