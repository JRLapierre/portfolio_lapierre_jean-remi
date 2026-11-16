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
    detail: "Approfondissement des compétences en informatique à travers des enseignements spécialisés et des projets.",
    url: "https://www.cril.univ-artois.fr/masterinfo/"
  },
  {
    title: "Licence 3 informatique",
    date: "2025 – 2026",
    detail: "Troisième année de licence permettant de consolider les fondamentaux de l’informatique et de les mobiliser dans des projets.",
    url: "https://www.sciences.univ-artois.fr/licence-informatique"
  },
  {
    title: "BUT informatique Parcours développement d’applications",
    date: "2021 – 2024",
    detail: "Le BUT Informatique forme en trois ans les informaticiens qui participent à la conception, la réalisation et la mise en œuvre de solutions informatiques répondant aux besoins de transformation numérique des organisations.",
    url: "https://www.iut-lens.univ-artois.fr/formations/but-informatique/"
  }
];

export const internships: Experience[] = [
  {
    title: "Stage L3 — Prestarocket",
    date: "23 mars – 24 juillet 2026",
    details: [
      "Participation au développement et à la maintenance de solutions e-commerce pour PrestaShop et Shopify au sein de l’agence Prestarocket, spécialisée dans le commerce en ligne.",
      "Développement de modules PrestaShop et d’outils Symfony facilitant la gestion de boutiques Shopify, en exploitant l’API GraphQL pour manipuler leurs données et automatiser certaines opérations.",
      "Rédaction de la documentation technique d’un module PrestaShop inachevé afin de faciliter sa reprise par un autre développeur.",
      "Découverte de Docker et approfondissement des compétences en PHP et en développement d’applications web."
    ],
    mainDifficulty: "Travailler durant les 5 vagues de chaleur",
    technologies: ["Symfony", "PHP", "JavaScript", "Bootstrap", "GraphQL", "Shopify", "PrestaShop", "Docker", "Git"]
  },
  {
    title: "Stage BUT 3 — Elosi",
    date: "18 mars – 28 juin 2024",
    details: [
      "Contribution à l’évolution et à la maintenance de Skillosi, application SIRH interne dédiée à la gestion de carrière des collaborateurs.",
      "Intervention au sein d’une équipe sur le back-end Java avec Spring Boot, le front-end Vue.js et la base de données PostgreSQL.",
      "Participation à la mise en place d’un historique des contrats ainsi qu’à l’évolution de la gestion des données et des droits d’accès.",
      "Expérience sur une application existante et sur plusieurs couches, de la base de données à l’interface."
    ],
    mainDifficulty: "Faire le rapport de stage en parralèle du travail",
    technologies: ["Spring", "Vue.js", "Java", "JavaScript", "HTML", "SQL", "DBeaver", "Git"]
  },
  {
    title: "Stage BUT 2 — Mairie de Montigny-en-Gohelle",
    date: "17 avril – 9 juin 2023",
    details: [
      "Développement largement autonome d’une application web interne de gestion de courriers pour les services techniques et les ressources humaines.",
      "Conception de la base de données et réalisation des fonctionnalités de gestion des courriers, de suivi, de pièces jointes et des droits d’accès.",
      "Ajout de la génération de documents Word à partir de modèles et des données enregistrées.",
      "Mise en pratique du développement d’une application web complète et renforcement de l’autonomie dans la conduite d’un projet."
    ],
    mainDifficulty: "Savoir quoi faire, en raison du manque de communication",
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
      {
        title: "SAÉ 1.01 — Jeu des multiples et diviseurs",
        description: "Développement en Python d’un jeu à deux joueurs où chaque coup est choisi parmi les multiples ou diviseurs du nombre précédent."
      },
      {
        title: "SAÉ 1.02 — Comparaison d’algorithmes de tri",
        description: "Implémentation de tris par insertion, sélection, bulles, fusion et rapide, puis comparaison de leurs temps d’exécution."
      },
      {
        title: "SAÉ 1.03 — Installation d’un poste de développement",
        description: "Installation et configuration d’un environnement Linux pour le développement, avec automatisation de certaines opérations par scripts."
      },
      {
        title: "SAÉ 1.04 — Base de données des marchés publics",
        description: "Conception d’un schéma relationnel PostgreSQL pour gérer les marchés, les entités d’achat, les attributaires et les tranches budgétaires."
      },
      {
        title: "SAÉ 1.05 — Recueil des besoins d’un événement",
        description: "Définition d’un concept d’entreprise événementielle, analyse de ses clients et création d’un site statique présentant ses prestations."
      },
      {
        title: "SAÉ 1.06 — Étude du positionnement de l’entreprise",
        description: "Étude de la concurrence et de l’impact écologique du site, puis synthèse des résultats et présentation du projet."
      }
    ],
    technologies: ["Java", "Python", "HTML", "CSS", "SQL", "Bash"]
  },
  {
    title: "BUT informatique",
    semester: "S2",
    date: "Janvier – Juin 2022",
    projects: [
      {
        title: "SAÉ 2.01–2.02 — Gestion des ventes",
        description: "Développement en Java d’une application de gestion des articles, des stocks, des clients et des commandes."
      },
      {
        title: "SAÉ 2.03 — Configuration d’un réseau",
        description: "Configuration de l’adressage IPv4/IPv6 et du routage entre plusieurs entreprises et réseaux distants."
      },
      {
        title: "SAÉ 2.04 — Conception d’une base de données",
        description: "Modélisation et mise en œuvre d’une base relationnelle, avec création des tables et requêtes SQL à partir d’un jeu de données."
      },
      {
        title: "SAÉ 2.05–2.06 — Projet d’entreprise et gestion de projet",
        description: "Analyse d’une entreprise et de son marché, cadrage du projet, répartition des tâches, définition des jalons et suivi du planning."
      }
    ],
    technologies: ["Java", "Python", "HTML", "CSS", "JavaScript", "SQL", "Bash", "Git"]
  },
  {
    title: "BUT informatique",
    semester: "S3",
    date: "Septembre – Décembre 2022",
    projects: [{
      title: "SAÉ 3.A.01 — Autour des fractales",
      description: "Conception en Java d’une application générant des fractales, dont Mandelbrot et Julia, à partir de suites complexes et de transformations géométriques."
    }],
    technologies: ["Java", "Python", "PHP", "Laravel", "HTML", "CSS", "JavaScript", "SQL", "Bash", "Git"]
  },
  {
    title: "BUT informatique",
    semester: "S4",
    date: "Janvier – Avril 2023",
    projects: [{
      title: "Défis algorithmiques des 24 h des IUT",
      description: "Développement en Java de solutions pour plusieurs jeux et problèmes algorithmiques, notamment le jeu de Nim, la recherche dans un graphe et la sélection d’objets sous contrainte."
    },
    {
      title: "Marathon du web",
      description: "Développement d'un site web en 24h (nuit incluse) en collaboration avec une équipe de MMI",
      academicProjectTitle: "Marathon du web"
    }],
    technologies: ["Java", "Python", "PHP", "Laravel", "HTML", "Kotlin", "XML", "Git", "Apache Spark", "Neo4j", "Cassandra", "MongoDB"]
  },
  {
    title: "BUT informatique",
    semester: "S5",
    date: "Septembre – Décembre 2023",
    projects: [{
      title: "Plateforme de mise en relation pour le covoiturage",
      academicProjectTitle: "SAÉ 5.01 — Plateforme de covoiturage"
    }],
    technologies: ["Java", "Python", "JavaScript", "TypeScript", "HTML", "CSS", "SQL", "MongoDB", "React", "Next.js", "Spring", "Git"]
  },
  {
    title: "BUT informatique",
    semester: "S6",
    date: "Janvier – Mars 2024",
    projects: [{
      title: "Gestionnaire de planning et de temps de projet",
      description: "Développement d’une application web pour organiser les projets, tâches et équipes, planifier le travail et suivre le temps passé."
    }],
    technologies: ["PHP", "Java", "Python", "JavaScript", "TypeScript", "HTML", "CSS", "React", "Next.js", "Symfony", "Git"]
  },
  {
    title: "L3 informatique",
    semester: "S1",
    date: "Septembre – Décembre 2025",
    projects: [
      {
        title: "SAÉ — Gestion d’une bibliothèque en shell",
        description: "Création en Bash d’un outil de gestion de bibliothèque à partir de fichiers texte, avec suivi des emprunts et retours, statistiques et sauvegardes."
      },
      {
        title: "Space Invaders",
        academicProjectTitle: "Space Invaders — Jeu en C"
      }
    ],
    technologies: ["C", "SDL3", "PHP", "HTML", "CSS", "JavaScript", "Bash", "Flex", "Git"]
  },
  {
    title: "L3 informatique",
    semester: "S2",
    date: "Janvier – Mars 2026",
    projects: [{
      title: "Projet URNE — Méthodes de scrutin en Rust",
      description: "Développement d’un programme Rust qui lit des scrutins depuis des fichiers et calcule les résultats selon dix méthodes, dont la Pluralité, TRS, IRV, Borda, Bucklin, Baldwin, Copeland, Schulze et leurs variantes."
    }],
    technologies: ["Java", "Python", "Haskell", "PHP", "HTML", "CSS", "JavaScript", "SQL", "Rust", "C", "Assembleur", "Git"]
  },
  {
    title: "M1 informatique",
    semester: "S1",
    date: "Septembre – Décembre 2026",
    projects: [
      {
        title: "SAÉ Système et réseaux — Client-serveur SSH",
        description: "Projet en cours : les consignes demandent de concevoir un client et un serveur pour ouvrir une session distante, authentifier un utilisateur et transmettre commandes, entrées/sorties et signaux. Le chiffrement est un bonus."
      },
      {
        title: "ArtoisNet — Réseau virtuel superposé",
        description: "Projet réseau en cours, basé sur les consignes : concevoir des nœuds autonomes communiquant par UDP, avec adressage logique, routage via des relais et transfert fiable de fichiers avec contrôle d’intégrité."
      }
    ],
    technologies: ["Python", "Java", "C", "Git"]
  }
];

export const academicProjects: Project[] = [
  {
    title: "Space Invaders — Jeu en C",
    date: "Licence 3 informatique — S1",
    description: [
      "Réalisation d’un jeu d’arcade en C structuré selon le modèle MVC, séparant la logique du jeu, les contrôles et l’affichage.",
      "Deux modes d’affichage sont proposés : terminal avec ncurses et interface graphique avec SDL3. Le jeu gère notamment le vaisseau, les aliens, les tirs, les boucliers et les collisions."
    ],
    technologies: ["C", "SDL3", "ncurses", "Make", "Git"],
    link: {
      label: "github.com/JRLapierre/space-invader",
      url: "https://github.com/JRLapierre/space-invader"
    }
  },
  {
    title: "SAÉ 5.01 — Plateforme de covoiturage",
    date: "BUT informatique — S5",
    description: [
      "Conception d’une application web qui met en relation des personnes pour le covoiturage et recommande des groupes selon les trajets, horaires, budgets et préférences.",
      "Développement d’une interface React, d’API Spring et Flask, d’un moteur de recommandation et d’un chat de groupe, avec persistance des données dans MongoDB."
    ],
    technologies: ["Java", "Spring", "React", "Python", "Flask", "MongoDB", "Docker", "Git"]
  },
  {
    title: "Marathon du web",
    date: "BUT informatique — S4",
    description: [
      "Développement d'un site web en 24h (nuit incluse) en collaboration avec une équipe de MMI",
      "Le travail des élèves infos consistait à développer le back en laravel et de gérer l'hébergement gitlab pendant que les MMI faisait le front."
    ],
    technologies: ["PHP", "Laravel", "Git"]
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
