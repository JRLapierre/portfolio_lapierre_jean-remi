import {
  skills,
  softSkills
} from "../data/portfolio";

import {
  tags,
  renderSkills
} from "../utils/html";

export function renderSkillsPage(): string {
  return `
    <section class="section-block">
      <div class="section-heading">
        <div>
          <p class="eyebrow">ENVIRONNEMENT TECHNIQUE</p>
          <h1>Compétences</h1>
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

      <a class="text-link" href="/hobbies" data-link>Découvrir mes loisirs</a>
    </section>
  `;
}