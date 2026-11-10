import type { Skill } from "../types";

export function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
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

export function skillTags(items: string[], skills: Skill[]): string {
  const skillNames = new Set(skills.map(skill => skill.name));

  return `
    <div class="tag-list">
      ${items.map(item => `
        ${skillNames.has(item)
          ? `<a class="tag skill-tag-link" href="/skills#${slugify(item)}" data-link>${escapeHtml(item)}</a>`
          : `<span class="tag">${escapeHtml(item)}</span>`}
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
  const contextTypeLabels = {
    professional: "Professionnel",
    academic_project: "Projet académique",
    course: "Formation",
    personal: "Personnel",
    competition: "Concours"
  };

  return `
    <article class="skill-item" id="${slugify(skill.name)}">
      <div class="skill-item-header">
        ${skill.icon ? `
          <img
            class="skill-icon"
            src="${escapeHtml(skill.icon)}"
            alt=""
            loading="lazy"
            onerror="this.style.display='none'"
          />
        ` : ""}
        <span class="skill-name">${escapeHtml(skill.name)}</span>
      </div>

      ${
        showContexts && skill.contexts.length > 0
          ? `
            <div class="skill-contexts">
              ${skill.contexts.map(context => {
                const isProjectContext =
                  context.type === "professional" ||
                  context.type === "academic_project" ||
                  context.type === "personal" ||
                  context.type === "competition";
                const href = context.url ?? (
                  isProjectContext
                    ? `/projects#${slugify(context.label)}`
                    : context.type === "course"
                      ? `/courses#${slugify(context.label)}`
                      : undefined
                );
                const link = href
                  ? `<a href="${escapeHtml(href)}"${href.startsWith("/") ? " data-link" : ""}>${escapeHtml(context.label)}</a>`
                  : escapeHtml(context.label);

                return `
                  <span>
                    <strong>${contextTypeLabels[context.type]}</strong>
                    · ${link}
                    ${context.description ? `<small>${escapeHtml(context.description)}</small>` : ""}
                  </span>
                `;
              }).join("")}
            </div>
          `
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

    return `
      <section class="skill-category">
        <h3>${escapeHtml(category)}</h3>
        <div class="skill-grid">
          ${categorySkills.map(skill =>
            renderSkillItem(skill, options.showContexts ?? false)
          ).join("")}
        </div>
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