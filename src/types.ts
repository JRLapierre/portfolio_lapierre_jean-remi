export type SkillCategory =
  | "technical"
  | "soft"
  | "Back-end"
  | "Front-end"
  | "DevOps"
  | "Bases de données"
  | "CMS"
  | "Outils";

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
  description: string[];
  technologies: string[];
}