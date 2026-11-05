import { profile } from "../data/portfolio";

export function renderContact(): string {
  return `
    <div class="page-intro">
      <p class="eyebrow">ÉCHANGEONS</p>
      <h1>Contact</h1>
      <p class="lead">Pour discuter d’un projet, d’une opportunité ou simplement prendre contact.</p>
    </div>
    <section class="contact-panel">
      <div>
        <p class="eyebrow">EMAIL</p>
        <h2><a href="mailto:${profile.email}">${profile.email}</a></h2>
      </div>
      <div>
        <p class="eyebrow">TÉLÉPHONE</p>
        <h2><a href="tel:${profile.phone.replaceAll(" ", "")}">${profile.phone}</a></h2>
      </div>
      <div>
        <p class="eyebrow">GITHUB</p>
        <h2><a href="${profile.github}" target="_blank" rel="noreferrer">${profile.githubLabel} ↗</a></h2>
      </div>
      <div>
        <p class="eyebrow">LOCALISATION</p>
        <h2>${profile.location}</h2>
      </div>
    </section>
  `;
}
