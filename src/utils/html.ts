import type { Skill } from "../types";

export function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function tags(items: string[]): string {
  return `
    <div class="tag-list">
      ${items.map(item => `
        <span class="tag">${escapeHtml(item)}</span>
      `).join("")}
    </div>
  `;
}

export function bullets(items: string[]): string {
  return `
    <ul class="detail-list">
      ${items.map(item => `
        <li>${escapeHtml(item)}</li>
      `).join("")}
    </ul>
  `;
}

function renderSkillItem(skill: Skill, showContexts: boolean): string {
  const contexts = skill.contexts ?? [];

  return `
    <article class="skill-item">
      <div class="skill-item-header">
        <img
          class="skill-icon"
          src="${escapeHtml(skill.icon)}"
          alt=""
          loading="lazy"
          onerror="this.style.display='none'"
        />
        <span class="skill-name">${escapeHtml(skill.name)}</span>
      </div>

      ${
        showContexts && skill.level === "practiced"
          ? contexts.length > 0
            ? `
              <div class="skill-contexts">
                ${contexts.map(context => `
                  <span>${escapeHtml(context)}</span>
                `).join("")}
              </div>
            `
            : `<span class="skill-context-pending">Contexte à compléter</span>`
          : ""
      }
    </article>
  `;
}

export function renderSkills(
  skills: Skill[],
  options: { showContexts?: boolean } = {}
): string {
  const categories = [...new Set(skills.map(skill => skill.category))];

  return categories.map(category => {
    const categorySkills = skills.filter(
      skill => skill.category === category
    );

    const practiced = categorySkills.filter(
      skill => skill.level === "practiced"
    );

    const studied = categorySkills.filter(
      skill => skill.level === "studied"
    );

    return `
      <section class="skill-category">
        <h3>${escapeHtml(category)}</h3>

        ${
          practiced.length > 0
            ? `
              <div class="skill-level">
                <h4>
                  <span class="level-indicator practiced"></span>
                  Pratiquées
                </h4>

                <div class="skill-grid">
                  ${practiced.map(skill =>
                    renderSkillItem(skill, options.showContexts ?? false)
                  ).join("")}
                </div>
              </div>
            `
            : ""
        }

        ${
          studied.length > 0
            ? `
              <div class="skill-level">
                <h4>
                  <span class="level-indicator studied"></span>
                  Étudiées en formation
                </h4>

                <div class="skill-grid">
                  ${studied.map(skill =>
                    renderSkillItem(skill, false)
                  ).join("")}
                </div>
              </div>
            `
            : ""
        }
      </section>
    `;
  }).join("");
}

export function renderIconItems(
  items: { label: string; icon: string }[]
): string {
  return `
    <div class="icon-items">
      ${items.map(item => `
        <div class="icon-item">
          <img
            src="${escapeHtml(item.icon)}"
            alt=""
            loading="lazy"
            onerror="this.style.display='none'"
          />
          <span>${escapeHtml(item.label)}</span>
        </div>
      `).join("")}
    </div>
  `;
}