import { navigation } from "./components/navigation";
import { footer } from "./components/footer";
import { renderHome } from "./pages/home";
import { renderProjects } from "./pages/projects";
import { renderCourses } from "./pages/courses";
import { renderSkillsPage } from "./pages/skills";
import { renderContact } from "./pages/contact";

type Page = {
  title: string;
  render: () => string;
};

const routes: Record<string, Page> = {
  "/": { title: "Accueil", render: renderHome },
  "/projects": { title: "Projets", render: renderProjects },
  "/courses": { title: "Formations", render: renderCourses },
  "/skills": { title: "Compétences", render: renderSkillsPage },
  "/contact": { title: "Contact", render: renderContact }
};

function normalizePath(path: string): string {
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path;
}

export function renderApp(app: HTMLElement): void {
  const path = normalizePath(window.location.pathname);
  const page = routes[path] ?? {
    title: "Page introuvable",
    render: () => `
      <section class="not-found">
        <p class="eyebrow">ERREUR 404</p>
        <h1>Cette page n’existe pas.</h1>
        <a class="button button-primary" href="/" data-link>Retour à l’accueil</a>
      </section>
    `
  };

  document.title = `${page.title} — Jean-Rémi Lapierre`;
  app.innerHTML = `
    <div class="site-shell">
      ${navigation(path)}
      <main class="site-main">${page.render()}</main>
      ${footer()}
    </div>
  `;

  app.querySelectorAll<HTMLAnchorElement>("a[data-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) return;

      event.preventDefault();
      const destination = link.getAttribute("href");
      if (!destination) return;

      const destinationUrl = new URL(destination, window.location.href);
      if (destinationUrl.origin !== window.location.origin) return;

      window.history.pushState({}, "", destinationUrl);
      renderApp(app);
      if (!destinationUrl.hash) {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    });
  });

  if (window.location.hash) {
    const targetId = decodeURIComponent(window.location.hash.slice(1));
    document.getElementById(targetId)?.scrollIntoView();
  }
}
