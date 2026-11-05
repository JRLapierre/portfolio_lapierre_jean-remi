import {
  education,
  internships,
  profile,
  projects,
  skills,
  softSkills,
  hobbyItems
} from "../data/portfolio";

import {
  bullets,
  tags,
  renderSkills,
  renderIconItems
} from "../utils/html";

export function renderCv(): string {
  return `
    <div class="page-intro">
      <p class="eyebrow">PARCOURS</p>
      <h1>Curriculum vitæ</h1>
      <p class="lead">Formation, expériences et projets de développement.</p>
      <button class="button button-secondary print-button" type="button" onclick="window.print()">Imprimer / enregistrer en PDF</button>
    </div>

    <div class="cv-layout">
      <aside class="cv-sidebar">
        <div class="cv-profile">
          <div class="cv-monogram">JL</div>
          <h2>${profile.name}</h2>
          <p>${profile.role}</p>
        </div>
        <section class="cv-side-section">
          <h3>Compétences techniques</h3>

          <div class="cv-skills">
            ${renderSkills(skills)}
          </div>
        </section>
        <section class="cv-side-section">
          <h3>Soft skills</h3>
          ${bullets(softSkills)}
        </section>
        <section class="cv-side-section">
          <h3>Informations personnelles</h3>
          <ul class="contact-list">
            <li>${profile.age}</li>
            <li>${profile.languages.join(", ")}</li>
            <li>${profile.location}</li>
            <li>${profile.drivingLicence}</li>
            <li><a href="mailto:${profile.email}">${profile.email}</a></li>
            <li><a href="tel:${profile.phone.replaceAll(" ", "")}">${profile.phone}</a></li>
            <li><a href="${profile.github}" target="_blank" rel="noreferrer">${profile.githubLabel}</a></li>
          </ul>
        </section>
        <section class="cv-side-section">
          <h3>Loisirs</h3>
          ${renderIconItems(hobbyItems)}
        </section>
      </aside>

      <div class="cv-main">
        <section class="cv-section cv-section-tinted">
          <h2>Formations</h2>
          ${education.map((item) => `
            <article class="timeline-item">
              <div class="timeline-title"><h3>${item.title}</h3><span>${item.date}</span></div>
              ${item.detail ? `<p>${item.detail}</p>` : ""}
            </article>
          `).join("")}
        </section>

        <section class="cv-section">
          <h2>Stages</h2>
          ${internships.map((item) => `
            <article class="timeline-item">
              <div class="timeline-title"><h3>${item.title}</h3><span>${item.date}</span></div>
              ${bullets(item.details)}
              <p class="stack-label">Stack technique</p>
              ${tags(item.technologies)}
            </article>
          `).join("")}
        </section>

        <section class="cv-section cv-section-tinted">
          <h2>Autres projets</h2>
          ${projects.map((project) => `
            <article class="timeline-item">
              <div class="timeline-title"><h3>${project.title}</h3><span>${project.date}</span></div>
              ${bullets(project.description)}
              <p class="stack-label">Stack technique</p>
              ${tags(project.technologies)}
              ${project.link ? `<p class="project-link">Code : <a href="${project.link.url}" target="_blank" rel="noreferrer">${project.link.label}</a></p>` : ""}
            </article>
          `).join("")}
        </section>
      </div>
    </div>
  `;
}
