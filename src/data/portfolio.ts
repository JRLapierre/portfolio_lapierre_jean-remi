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
  // Langages
  {
    name: "PHP",
    category: "Langages",
    icon: "/images/icons/skills/languages/php.png"
  },
  {
    name: "Java",
    category: "Langages",
    icon: "/images/icons/skills/languages/java.png"
  },
  {
    name: "C",
    category: "Langages",
    icon: "/images/icons/skills/languages/c.webp"
  },
  {
    name: "Kotlin",
    category: "Langages",
    icon: "/images/icons/skills/languages/kotlin.png"
  },
  {
    name: "Python",
    category: "Langages",
    icon: "/images/icons/skills/languages/python.png"
  },
  {
    name: "Haskell",
    category: "Langages",
    icon: "/images/icons/skills/languages/haskell.png"
  },
  {
    name: "Rust",
    category: "Langages",
    icon: "/images/icons/skills/languages/rust.svg"
  },
  {
    name: "Assembleur",
    category: "Langages",
    icon: "/images/icons/skills/languages/assembly.png"
  },
  {
    name: "JavaScript",
    category: "Langages",
    icon: "/images/icons/skills/languages/javascript.png"
  },
  {
    name: "TypeScript",
    category: "Langages",
    icon: "/images/icons/skills/languages/typescript.png"
  },
  {
    name: "Bash",
    category: "Langages",
    icon: "/images/icons/skills/languages/bash.png"
  },

  // Développement web
  {
    name: "HTML",
    category: "Développement web",
    icon: "/images/icons/skills/web-development/html.png"
  },
  {
    name: "XML",
    category: "Développement web",
    icon: "/images/icons/skills/web-development/xml.svg"
  },
  {
    name: "CSS",
    category: "Développement web",
    icon: "/images/icons/skills/web-development/css.png"
  },

  // Frameworks & bibliothèques
  {
    name: "Laravel",
    category: "Frameworks & bibliothèques",
    icon: "/images/icons/skills/frameworks-libraries/laravel.png"
  },
  {
    name: "Symfony",
    category: "Frameworks & bibliothèques",
    icon: "/images/icons/skills/frameworks-libraries/symfony.png"
  },
  {
    name: "Spring",
    category: "Frameworks & bibliothèques",
    icon: "/images/icons/skills/frameworks-libraries/spring.png"
  },
  {
    name: "React",
    category: "Frameworks & bibliothèques",
    icon: "/images/icons/skills/frameworks-libraries/react.png"
  },
  {
    name: "Next.js",
    category: "Frameworks & bibliothèques",
    icon: "/images/icons/skills/frameworks-libraries/nextjs.png"
  },
  {
    name: "Vue.js",
    category: "Frameworks & bibliothèques",
    icon: "/images/icons/skills/frameworks-libraries/vue.png"
  },
  {
    name: "Bootstrap",
    category: "Frameworks & bibliothèques",
    icon: "/images/icons/skills/frameworks-libraries/bootstrap.png"
  },
  {
    name: "SDL3",
    category: "Frameworks & bibliothèques",
    icon: "/images/icons/skills/frameworks-libraries/sdl3.webp"
  },

  // Bases de données & Data
  {
    name: "SQL",
    category: "Bases de données & Data",
    icon: "/images/icons/skills/data/sql.png"
  },
  {
    name: "MongoDB",
    category: "Bases de données & Data",
    icon: "/images/icons/skills/data/mongodb.png"
  },
  {
    name: "Apache Spark",
    category: "Bases de données & Data",
    icon: "/images/icons/skills/data/apache-spark.png"
  },
  {
    name: "Neo4j",
    category: "Bases de données & Data",
    icon: "/images/icons/skills/data/neo4j.svg"
  },
  {
    name: "Cassandra",
    category: "Bases de données & Data",
    icon: "/images/icons/skills/data/cassandra.svg"
  },

  // API & architecture
  {
    name: "GraphQL",
    category: "API & architecture",
    icon: "/images/icons/skills/api-architecture/graphql.png"
  },

  // Outils & DevOps
  {
    name: "Git",
    category: "Outils & DevOps",
    icon: "/images/icons/skills/tools-devops/git.png"
  },
  {
    name: "Docker",
    category: "Outils & DevOps",
    icon: "/images/icons/skills/tools-devops/docker.png"
  },
  {
    name: "DBeaver",
    category: "Outils & DevOps",
    icon: "/images/icons/skills/tools-devops/dbeaver.png"
  },
  {
    name: "WampServer",
    category: "Outils & DevOps",
    icon: "/images/icons/skills/tools-devops/wampserver.png"
  },
  {
    name: "Flex",
    category: "Outils & DevOps"
  },

  // CMS & e-commerce
  {
    name: "PrestaShop",
    category: "CMS & e-commerce",
    icon: "/images/icons/skills/cms-ecommerce/prestashop.png"
  },
  {
    name: "Shopify",
    category: "CMS & e-commerce",
    icon: "/images/icons/skills/cms-ecommerce/shopify.png"
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
  {
    title: "BUT informatique",
    semester: "S1",
    date: "Septembre – Décembre 2021",
    projects: [
      { title: "Exercice de programmation sans fiche associée" },
      {
        title: "Projet test — Gestion de bibliothèque",
        academicProjectTitle: "Projet test — Gestion de bibliothèque"
      }
    ],
    technologies: ["Java", "Python", "HTML", "CSS", "SQL", "Bash"]
  },
  {
    title: "BUT informatique",
    semester: "S2",
    date: "Janvier – Juin 2022",
    projects: [{ title: "TODO" }],
    technologies: ["Java", "Python", "HTML", "CSS", "JavaScript", "SQL", "Bash", "Git"]
  },
  {
    title: "BUT informatique",
    semester: "S3",
    date: "Septembre – Décembre 2022",
    projects: [{ title: "TODO" }],
    technologies: ["Java", "Python", "PHP", "Laravel", "HTML", "CSS", "JavaScript", "SQL", "Bash", "Git"]
  },
  {
    title: "BUT informatique",
    semester: "S4",
    date: "Janvier – Avril 2023",
    projects: [{ title: "TODO" }],
    technologies: ["Java", "Python", "HTML", "Kotlin", "XML", "Git", "Apache Spark", "Neo4j", "Cassandra", "MongoDB"]
  },
  {
    title: "BUT informatique",
    semester: "S5",
    date: "Septembre – Décembre 2023",
    projects: [{ title: "TODO" }],
    technologies: ["Java", "Python", "JavaScript", "TypeScript", "HTML", "CSS", "SQL", "MongoDB", "React", "Next.js", "Spring", "Git"]
  },
  {
    title: "BUT informatique",
    semester: "S6",
    date: "Janvier – Mars 2024",
    projects: [{ title: "TODO" }],
    technologies: ["PHP", "Java", "Python", "JavaScript", "TypeScript", "HTML", "CSS", "React", "Next.js", "Symfony", "Git"]
  },
  {
    title: "L3 informatique",
    semester: "S1",
    date: "Septembre – Décembre 2025",
    projects: [{ title: "TODO" }],
    technologies: ["C", "SDL3", "PHP", "HTML", "CSS", "JavaScript", "Bash", "Flex", "Git"]
  },
  {
    title: "L3 informatique",
    semester: "S2",
    date: "Janvier – Mars 2026",
    projects: [{ title: "TODO" }],
    technologies: ["Java", "Python", "Haskell", "PHP", "HTML", "CSS", "JavaScript", "SQL", "Rust", "C", "Assembleur", "Git"]
  },
  {
    title: "M1 informatique",
    semester: "S1",
    date: "Septembre – Décembre 2026",
    projects: [{ title: "TODO" }],
    technologies: ["Python", "Java", "C", "Git"]
  }
];

export const academicProjects: Project[] = [
  { title: "Projet académique 1", date: "TODO", description: ["TODO"], technologies: ["TODO"] },
  { title: "Projet académique 2", date: "TODO", description: ["TODO"], technologies: ["TODO"] },
  { title: "Projet académique 3", date: "TODO", description: ["TODO"], technologies: ["TODO"] },
  {
    title: "Projet test — Gestion de bibliothèque",
    date: "BUT informatique — S1",
    description: [
      "Application fictive de gestion d'un catalogue et des emprunts.",
      "Projet de démonstration pour tester le lien depuis la formation."
    ],
    technologies: ["Python"]
  }
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
