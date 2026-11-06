import { profile } from "../data/portfolio";

export function renderHome(): string {
  return `
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">PORTFOLIO · DÉVELOPPEMENT WEB</p>
        <h1>Bonjour, je suis <span>${profile.name}</span>.</h1>
        <p class="hero-role">${profile.role}</p>
        <p class="lead">J'ai créé ce portfolio pour mettre tout ce que je ne pouvais pas mettre dans le CV, et parler de moi en détails.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="/projects" data-link>Voir mes projets</a>
          <a class="button button-secondary" href="https://jrlapierre.github.io/CV/" target="_blank">Consulter mon CV</a>
        </div>
      </div>
      <div class="hero-portrait" aria-label="Portrait de Jean-Rémi Lapierre">
        <img src="${profile.photo}" alt="Portrait de ${profile.name}"
             onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';" />
        <span class="portrait-fallback">JL</span>
      </div>
    </section>

    <div class="page-intro">
      <p class="eyebrow">PROFIL</p>

      <h2>À propos</h2>

      <p class="lead">
        Développeur full stack, avec une formation en informatique
        et des expériences en développement d'applications web.
      </p>
    </div>

    <section class="about-grid">
      <article class="content-card about-main">
        <h2>Mon profil</h2>

        <p>
          Je suis ${profile.name},
          ${profile.role.toLowerCase()}.
          Mon parcours m'a permis de travailler sur des applications web,
          des outils internes et des projets e-commerce,
          en autonomie comme en équipe.
        </p>

        <p>
          J'interviens sur les différentes couches d'une application :
          interfaces, logique métier, API et bases de données.
        </p>
      </article>

      <article class="content-card">
        <h2>Informations</h2>

        <ul class="contact-list">
          <li>${profile.location}</li>
          <li>${profile.languages.join(" · ")}</li>
          <li>${profile.drivingLicence}</li>
        </ul>
      </article>
    </section>
  `;
}
