import { courses, education, skills } from "../data/portfolio";
import { bullets, skillTags, slugify } from "../utils/html";

const educationTitleByCourseTitle: Record<string, string> = {
  "BUT informatique": "BUT informatique",
  "L3 informatique": "Licence 3 informatique",
  "M1 informatique": "Master 1 informatique"
};

export function renderCourses(): string {
  const courseTitles = [...new Set(courses.map(course => course.title))];

  return `
    <div class="page-intro">
      <p class="eyebrow">PARCOURS ACADÉMIQUE</p>
      <h1>Formations</h1>
      <p class="lead">Historique des enseignements suivis, organisé par diplôme et semestre.</p>
    </div>
    ${courseTitles.map(courseTitle => {
      const degree = education.find(
        item => item.title === educationTitleByCourseTitle[courseTitle]
      );
      const semesterCourses = courses.filter(course => course.title === courseTitle);

      return `
        <section class="section-block">
          <div class="section-heading">
            <div>
              <h2>${courseTitle}</h2>
              ${degree ? `<p class="card-date">${degree.date}</p>` : ""}
            </div>
          </div>
          <div class="project-list">
            ${semesterCourses.map(course => `
              <article class="project-card" id="${slugify(`${course.title} ${course.semester}`)}">
                <div class="project-content">
                  <div class="timeline-title"><h3>${course.semester}</h3><span>${course.date}</span></div>
                  ${bullets(course.description)}
                  ${skillTags(course.technologies, skills)}
                </div>
              </article>
            `).join("")}
          </div>
        </section>
      `;
    }).join("")}
  `;
}