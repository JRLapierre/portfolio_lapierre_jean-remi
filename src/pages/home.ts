import { profile, projects, skills } from "../data/portfolio";
import { renderSkills, tags } from "../utils/html";

export function renderHome(): string {
  const featured = projects.slice(0, 2);
  return `
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">PORTFOLIO · DÉVELOPPEMENT WEB</p>
        <h1>Bonjour, je suis <span>${profile.name}</span>.</h1>
        <p class="hero-role">${profile.role}</p>
        <p class="lead">J'ai créé ce portfolio pour mettre tout ce que je ne pouvais pas mettre dans le CV, et parler de moi en détails.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="/projects" data-link>Voir mes projets</a>
          <a class="button button-secondary" href="/cv" data-link>Consulter mon CV</a>
        </div>
      </div>
      <div class="hero-portrait" aria-label="Portrait de Jean-Rémi Lapierre">
        <img src="${profile.photo}" alt="Portrait de ${profile.name}"
             onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';" />
        <span class="portrait-fallback">JL</span>
      </div>
    </section>

    <section class="section-block">
      <div class="section-heading">
        <div><p class="eyebrow">SÉLECTION</p><h2>Projets récents</h2></div>
        <a class="text-link" href="/projects" data-link>Tout voir ↗</a>
      </div>
      <div class="card-grid">
        ${featured.map((project) => `
          <article class="content-card">
            <p class="card-date">${project.date}</p>
            <h3>${project.title}</h3>
            <p>${project.description[0]}</p>
            ${tags(project.technologies)}
            ${project.link ? `<a class="text-link" href="${project.link.url}" target="_blank" rel="noreferrer">Voir le code ↗</a>` : ""}
          </article>
        `).join("")}
      </div>
    </section>

    <section class="section-block soft-panel">
      <div class="section-heading">
        <div><p class="eyebrow">ENVIRONNEMENT TECHNIQUE</p><h2>Compétences</h2></div>
        <a class="text-link" href="/about" data-link>En savoir plus ↗</a>
      </div>
      <div class="skill-overview">
        ${renderSkills(skills, { showContexts: false })}
      </div>
    </section>
  `;
}
