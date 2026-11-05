import "./styles.css";
import { renderApp } from "./router";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("Élément #app introuvable.");
}

renderApp(app);

window.addEventListener("popstate", () => renderApp(app));