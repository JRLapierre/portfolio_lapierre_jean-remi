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

      <h2 class="subheading">Loisirs</h2>

      ${renderIconItems(hobbyItems)}
    </section>
  `;
}