import { hobbyItems } from "../data/portfolio";
import { escapeHtml } from "../utils/html";
import type { HobbyContentBlock } from "../types";

function renderHobbyContent(block: HobbyContentBlock): string {
  if (block.type === "text") {
    return `<p>${escapeHtml(block.text)}</p>`;
  }

  if (block.type === "link") {
    return `<p><a class="text-link" href="${escapeHtml(block.url)}" target="_blank" rel="noreferrer">${escapeHtml(block.label)} ↗</a></p>`;
  }

  return `
    <figure>
      <img src="${escapeHtml(block.src)}" alt="${escapeHtml(block.alt)}" loading="lazy">
      ${block.caption ? `<figcaption>${escapeHtml(block.caption)}</figcaption>` : ""}
    </figure>
  `;
}

export function renderHobbies(): string {
  return `
    <div class="page-intro">
      <p class="eyebrow">EN DEHORS DE L'ÉCOLE</p>
      <h1>Loisirs</h1>
      <p class="lead">Je vais vous présenter mes loisirs principaux, ceux qui reviennent souvent. Parfois je n'y touche pas pendant des mois, parfois je dédie tout mon temps libre à un de ces loisirs.</p>
    </div>
    <section class="hobby-grid" aria-label="Liste des loisirs">
      ${hobbyItems.map(hobby => `
        <details class="hobby-card">
          <summary>
            <img class="hobby-icon" src="${escapeHtml(hobby.icon)}" alt="" aria-hidden="true">
            <span class="hobby-title">${escapeHtml(hobby.label)}</span>
            <span class="hobby-toggle hobby-toggle-open">Développer</span>
            <span class="hobby-toggle hobby-toggle-close">Réduire</span>
          </summary>
          <div class="hobby-content">
            ${hobby.content.map(renderHobbyContent).join("")}
          </div>
        </details>
      `).join("")}
    </section>
  `;
}
