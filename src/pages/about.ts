import {
  hobbyItems,
  profile,
  skills,
  softSkills
} from "../data/portfolio";

import {
  tags,
  renderSkills,
  renderIconItems
} from "../utils/html";

export function renderAbout(): string {
  return `
    <div class="page-intro">
      <p class="eyebrow">PROFIL</p>

      <h1>À propos</h1>

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

    <section class="section-block">
      <div class="section-heading">
        <div>
          <p class="eyebrow">ENVIRONNEMENT TECHNIQUE</p>
          <h2>Compétences</h2>
        </div>
      </div>

      <div class="skills-page">
        ${renderSkills(skills, {
          showContexts: true
        })}
      </div>
    </section>

    <section class="section-block soft-panel">
      <h2>Compétences humaines</h2>

      ${tags(softSkills)}

      <h2 class="subheading">Loisirs</h2>

      ${renderIconItems(hobbyItems)}
    </section>
  `;
}