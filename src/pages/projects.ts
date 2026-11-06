import { projects, internships, academicProjects, competitions, skills } from "../data/portfolio";
import { bullets, skillTags, slugify } from "../utils/html";
import type { Project } from "../types";

type ProjectCardData = Pick<Project, "title" | "date" | "technologies" | "link"> & {
  description: string[];
};

function renderProjectCards(items: ProjectCardData[]): string {
  return `
    <div class="project-list">
      ${items.map(project => `
        <article class="project-card" id="${slugify(project.title)}">
          <div class="project-content">
            <div class="timeline-title"><h3>${project.title}</h3><span>${project.date}</span></div>
            ${bullets(project.description)}
            ${skillTags(project.technologies, skills)}
            ${project.link ? `<a class="text-link" href="${project.link.url}" target="_blank" rel="noreferrer">Consulter le dépôt GitHub ↗</a>` : ""}
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

export function renderProjects(): string {
  const internshipProjects: ProjectCardData[] = internships.map(internship => ({
    title: internship.title,
    date: internship.date,
    description: internship.details,
    technologies: internship.technologies
  }));

  return `
    <div class="page-intro">
      <p class="eyebrow">RÉALISATIONS</p>
      <h1>Projets</h1>
      <p class="lead">Projets personnels et réalisations menées pendant mes expériences professionnelles.</p>
    </div>
    <section class="section-block">
      <h2>Projets personnels</h2>
      ${renderProjectCards(projects)}
    </section>
    <section class="section-block">
      <h2>Projets académiques</h2>
      ${renderProjectCards(academicProjects)}
    </section>
    <section class="section-block">
      <h2>Compétitions</h2>
      ${renderProjectCards(competitions)}
    </section>
    <section class="section-block">
      <h2>Réalisations en stage</h2>
      ${renderProjectCards(internshipProjects)}
    </section>
  `;
}
