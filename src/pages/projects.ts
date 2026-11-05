import { projects, internships } from "../data/portfolio";
import { bullets, tags } from "../utils/html";

export function renderProjects(): string {
  return `
    <div class="page-intro">
      <p class="eyebrow">RÉALISATIONS</p>
      <h1>Projets</h1>
      <p class="lead">Projets personnels et réalisations menées pendant mes expériences professionnelles.</p>
    </div>
    <section class="section-block">
      <h2>Projets personnels</h2>
      <div class="project-list">
        ${projects.map((project, index) => `
          <article class="project-card">
            <div class="project-number">0${index + 1}</div>
            <div class="project-content">
              <div class="timeline-title"><h3>${project.title}</h3><span>${project.date}</span></div>
              ${bullets(project.description)}
              ${tags(project.technologies)}
              ${project.link ? `<a class="text-link" href="${project.link.url}" target="_blank" rel="noreferrer">Consulter le dépôt GitHub ↗</a>` : ""}
            </div>
          </article>
        `).join("")}
      </div>
    </section>
    <section class="section-block soft-panel">
      <h2>Réalisations en stage</h2>
      <div class="card-grid">
        ${internships.map((item) => `
          <article class="content-card">
            <p class="card-date">${item.date}</p>
            <h3>${item.title}</h3>
            ${bullets(item.details)}
            ${tags(item.technologies)}
          </article>
        `).join("")}
      </div>
    </section>
  `;
}
