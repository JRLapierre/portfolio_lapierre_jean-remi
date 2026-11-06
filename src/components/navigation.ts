const links = [
  { path: "/", label: "Accueil" },
  { path: "/projects", label: "Projets" },
  { path: "/courses", label: "Formations" },
  { path: "/skills", label: "Compétences" },
  { path: "/contact", label: "Contact" }
];

export function navigation(currentPath: string): string {
  return `
    <header class="site-header">
      <a class="brand" href="/" data-link aria-label="Accueil — Jean-Rémi Lapierre">
        <span class="brand-mark">JL</span>
        <span>Jean-Rémi Lapierre</span>
      </a>
      <nav class="main-nav" aria-label="Navigation principale">
        ${links.map(({ path, label }) => `
          <a href="${path}" data-link class="${currentPath === path ? "active" : ""}"
             ${currentPath === path ? 'aria-current="page"' : ""}>${label}</a>
        `).join("")}
      </nav>
    </header>
  `;
}
