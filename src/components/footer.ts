import { profile } from "../data/portfolio";

export function footer(): string {
  return `
    <footer class="site-footer">
      <span>© ${new Date().getFullYear()} ${profile.name}</span>
      <a href="${profile.github}" target="_blank" rel="noreferrer">GitHub ↗</a>
    </footer>
  `;
}
