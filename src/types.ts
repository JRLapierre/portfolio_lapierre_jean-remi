export type SkillCategory =
  | "Langages"
  | "Développement web"
  | "Frameworks & bibliothèques"
  | "Bases de données & Data"
  | "API & architecture"
  | "Outils & DevOps"
  | "CMS & e-commerce";

export type SkillContextType =
  | "professional"
  | "academic_project"
  | "course"
  | "personal"
  | "competition";

export interface SkillContext {
  type: SkillContextType;
  label: string;
  description?: string;
  url?: string;
}

export interface Skill {
  name: string;
  category: SkillCategory;
  icon?: string;
  contexts: SkillContext[];
}

export interface Experience {
  title: string;
  date: string;
  details: string[];
  technologies: string[];
  link?: {
    label: string;
    url: string;
  };
}

export interface Project {
  title: string;
  date: string;
  description: string[];
  technologies: string[];
  link?: {
    label: string;
    url: string;
  };
}

export interface Course {
  title: string;
  semester: string;
  date: string;
  projects: CourseProject[];
  technologies: string[];
}

export interface CourseProject {
  title: string;
  academicProjectTitle?: string;
}