export type SkillLevel = "practiced" | "studied";

export interface Skill {
  name: string;
  category: string;
  level: SkillLevel;
  icon: string;
  contexts?: string[];
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