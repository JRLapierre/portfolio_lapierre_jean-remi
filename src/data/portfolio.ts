import type { Course, Experience, Project, Skill, SkillContext, SkillContextType } from "../types";

export const profile = {
  name: "Jean-Rémi Lapierre",
  role: "Développeur full stack",
  email: "jeanremi.lapierre@gmail.com",
  phone: "06 80 18 92 87",
  location: "Hénin-Beaumont",
  age: "23 ans",
  languages: ["Français", "Anglais"],
  drivingLicence: "Permis voiture",
  github: "https://github.com/JRLapierre",
  githubLabel: "github.com/JRLapierre",
  photo: "/images/photo.png"
};

const skillDefinitions: Omit<Skill, "contexts">[] = [
  // =====================================
  // BACK-END
  // =====================================

  {
    name: "PHP",
    category: "Back-end",
    icon: "/images/icons/languages/back/php.png"
  },
  {
    name: "Java",
    category: "Back-end",
    icon: "/images/icons/languages/back/java.png"
  },
  {
    name: "Python",
    category: "Back-end",
    icon: "/images/icons/languages/back/python.png"
  },
  {
    name: "Laravel",
    category: "Back-end",
    icon: "/images/icons/framework/laravel.png"
  },
  {
    name: "Symfony",
    category: "Back-end",
    icon: "/images/icons/framework/symfony.png"
  },
  {
    name: "Spring",
    category: "Back-end",
    icon: "/images/icons/framework/spring.png"
  },
  {
    name: "GraphQL",
    category: "Back-end",
    icon: "/images/icons/languages/back/graphql.png"
  },

  // =====================================
  // FRONT-END
  // =====================================

  {
    name: "HTML",
    category: "Front-end",
    icon: "/images/icons/languages/front/html.png"
  },
  {
    name: "CSS",
    category: "Front-end",
    icon: "/images/icons/languages/front/css.png"
  },
  {
    name: "JavaScript",
    category: "Front-end",
    icon: "/images/icons/languages/front/js.png"
  },
  {
    name: "TypeScript",
    category: "Front-end",
    icon: "/images/icons/languages/front/ts.png"
  },
  {
    name: "Bootstrap",
    category: "Front-end",
    icon: "/images/icons/framework/bootstrap.png"
  },
  {
    name: "React",
    category: "Front-end",
    icon: "/images/icons/framework/react.png"
  },
  {
    name: "Vue.js",
    category: "Front-end",
    icon: "/images/icons/framework/vue.png"
  },

  // =====================================
  // DEVOPS
  // =====================================

  {
    name: "Git",
    category: "DevOps",
    icon: "/images/icons/tools/git.png"
  },
  {
    name: "Bash",
    category: "DevOps",
    icon: "/images/icons/languages/back/bash.png"
  },
  {
    name: "Docker",
    category: "DevOps",
    icon: "/images/icons/tools/docker.png"
  },

  // =====================================
  // BASES DE DONNÉES
  // =====================================

  {
    name: "SQL",
    category: "Bases de données",
    icon: "/images/icons/db/sql.png"
  },
  {
    name: "MongoDB",
    category: "Bases de données",
    icon: "/images/icons/db/mongodb.png"
  },

  // =====================================
  // CMS
  // =====================================

  {
    name: "PrestaShop",
    category: "CMS",
    icon: "/images/icons/framework/prestashop.png"
  },
  {
    name: "Shopify",
    category: "CMS",
    icon: "/images/icons/framework/shopify.png"
  },

  // =====================================
  // OUTILS
  // =====================================

  {
    name: "DBeaver",
    category: "Outils",
    icon: "/images/icons/tools/dbeaver.png"
  },
  {
    name: "WampServer",
    category: "Outils",
    icon: "/images/icons/tools/wampserver.png"
  }
];

export const softSkills = ["👥 Esprit d’équipe", "🎨 Créativité", "🔎 Esprit critique"];

export const hobbies = [
  "Vélo",
  "Marche",
  "Musique",
  "Lecture",
  "Écriture",
  "Programmation"
];

export const hobbyItems = [
  {
    label: "Vélo",
    icon: "/images/icons/hobbies/bike.png"
  },
  {
    label: "Marche",
    icon: "/images/icons/hobbies/walk.png"
  },
  {
    label: "Musique",
    icon: "/images/icons/hobbies/music.png"
  },
  {
    label: "Lecture",
    icon: "/images/icons/hobbies/reading.png"
  },
  {
    label: "Écriture",
    icon: "/images/icons/hobbies/writing.png"
  },
  {
    label: "Programmation",
    icon: "/images/icons/hobbies/programming.png"
  }
];

export const education = [
  {
    title: "Master 1 informatique",
    date: "2026 – Aujourd’hui",
    detail: ""
  },
  {
    title: "Licence 3 informatique",
    date: "2025 – 2026",
    detail: ""
  },
  {
    title: "BUT informatique",
    date: "2021 – 2024",
    detail: "Parcours développement d’applications"
  }
];

export const internships: Experience[] = [
  {
    title: "Stage L3 — Prestarocket",
    date: "23 mars – 24 juillet 2026",
    details: [
      "Stage de 4 mois.",
      "Chez Prestarocket, agence e-commerce PrestaShop et Shopify à Lille.",
      "Développement d’applications et de modules pour Shopify et PrestaShop, avec utilisation d’une API GraphQL."
    ],
    technologies: ["Symfony", "PHP", "JavaScript", "Bootstrap", "GraphQL", "Shopify", "PrestaShop", "Docker", "Git"]
  },
  {
    title: "Stage BUT 3 — Elosi",
    date: "18 mars – 28 juin 2024",
    details: [
      "Stage de 15 semaines.",
      "Chez Elosi, une ESN à Villeneuve-d’Ascq.",
      "Travail sur une application SIRH interne, utilisée par les RH, les managers et les collaborateurs afin de faciliter la gestion de carrière des collaborateurs.",
      "Travail en équipe."
    ],
    technologies: ["Spring", "Vue.js", "Java", "JavaScript", "HTML", "SQL", "DBeaver", "Git"]
  },
  {
    title: "Stage BUT 2 — Mairie de Montigny-en-Gohelle",
    date: "17 avril – 9 juin 2023",
    details: [
      "Stage de 8 semaines.",
      "À la mairie de Montigny-en-Gohelle.",
      "Développement d’une application de gestion de courrier pour les services techniques et RH.",
      "Travail autonome."
    ],
    technologies: ["PHP", "JavaScript", "HTML", "SQL", "WampServer", "Git"]
  }
];

export const projects: Project[] = [
  {
    title: "Site avancer-avec.fr",
    date: "Été 2025",
    description: [
      "Création d’un site professionnel pour une coach de vie.",
      "Mises à jour occasionnelles.",
      "Travail indépendant."
    ],
    technologies: ["React", "PHP", "JavaScript", "HTML", "SQL", "Git"],
    link: {
      label: "github.com/JRLapierre/avancer-avec.fr",
      url: "https://github.com/JRLapierre/avancer-avec.fr"
    }
  },
  {
    title: "Projet Evolution2",
    date: "Août 2023 – mars 2024",
    description: [
      "Version plus structurée et optimisée de « Evolution1 », avec des fonctionnalités supplémentaires.",
      "Projet personnel."
    ],
    technologies: ["Java", "Git", "Gradle"],
    link: {
      label: "github.com/JRLapierre/Evolution2",
      url: "https://github.com/JRLapierre/Evolution2"
    }
  },
  {
    title: "Projet Evolution1",
    date: "Novembre 2022 – avril 2023",
    description: [
      "Modélisation de réseaux de neurones et implémentation d’algorithmes de sélection en recréant des outils de base.",
      "Projet personnel."
    ],
    technologies: ["Java", "Git"],
    link: {
      label: "github.com/JRLapierre/Evolution1",
      url: "https://github.com/JRLapierre/Evolution1"
    }
  }
];

export const courses: Course[] = [
  { title: "BUT informatique", semester: "S1", date: "TODO", description: ["TODO"], technologies: ["Python"] },
  { title: "BUT informatique", semester: "S2", date: "TODO", description: ["TODO"], technologies: ["Python"] },
  { title: "BUT informatique", semester: "S3", date: "TODO", description: ["TODO"], technologies: ["Python"] },
  { title: "BUT informatique", semester: "S4", date: "TODO", description: ["TODO"], technologies: ["Python"] },
  { title: "BUT informatique", semester: "S5", date: "TODO", description: ["TODO"], technologies: ["Python"] },
  { title: "BUT informatique", semester: "S6", date: "TODO", description: ["TODO"], technologies: ["Python"] },
  { title: "L3 informatique", semester: "S1", date: "TODO", description: ["TODO"], technologies: ["Python"] },
  { title: "L3 informatique", semester: "S2", date: "TODO", description: ["TODO"], technologies: ["Python"] },
  { title: "M1 informatique", semester: "S1", date: "TODO", description: ["TODO"], technologies: ["Python"] }
];

export const academicProjects: Project[] = [
  { title: "Projet académique 1", date: "TODO", description: ["TODO"], technologies: ["TODO"] },
  { title: "Projet académique 2", date: "TODO", description: ["TODO"], technologies: ["TODO"] },
  { title: "Projet académique 3", date: "TODO", description: ["TODO"], technologies: ["TODO"] }
];

export const competitions: Project[] = [
  { 
    title: "Préparation au SWERC", 
    date: "Septembre - Décembre 2026", 
    description: [
      "Entrainements algorithmiques en vue du SWERC", 
      "Le swerc est une compétition internationale de programmation par équipe, organisée cette année à Lyon. Le but est de résoudre le plus de problèmes algorithmiques en un temps limité.",
      "Pour s'entrainer à cette compétion, des séances d'entrainement sont organisés le Jeudi après-midi."
    ], 
    technologies: ["Python"] 
  }
];

type SkillContextSource = {
  type: SkillContextType;
  label: string;
  technologies: string[];
};

const skillContextSources: SkillContextSource[] = [
  ...internships.map(item => ({
    type: "professional" as const,
    label: item.title,
    technologies: item.technologies
  })),
  ...projects.map(item => ({
    type: "personal" as const,
    label: item.title,
    technologies: item.technologies
  })),
  ...academicProjects.map(item => ({
    type: "academic_project" as const,
    label: item.title,
    technologies: item.technologies
  })),
  ...courses.map(item => ({
    type: "course" as const,
    label: `${item.title} ${item.semester}`,
    technologies: item.technologies
  })),
  ...competitions.map(item => ({
    type: "competition" as const,
    label: item.title,
    technologies: item.technologies
  }))
];

function generateSkillContexts(skillName: string): SkillContext[] {
  return skillContextSources
    .filter(source => source.technologies.some(
      technology => technology.toLowerCase() === skillName.toLowerCase()
    ))
    .map(({ type, label }) => ({ type, label }));
}

export const skills: Skill[] = skillDefinitions.map(skill => ({
  ...skill,
  contexts: generateSkillContexts(skill.name)
}));
