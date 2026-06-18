function $(selector) {
  return document.querySelector(selector);
}

function linkList(links = []) {
  return links
    .filter(link => link && link.url && link.url !== '#')
    .map(link => `<a class="pill-link" href="${link.url}" ${link.url.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}>${link.label}</a>`)
    .join('');
}

function safeImage(src, alt) {
  return `<img src="${src}" alt="${alt}" loading="lazy" onerror="this.closest('.image-wrap')?.classList.add('image-missing'); this.style.display='none';">`;
}

function renderNews(limit) {
  const root = $('#news-list');
  if (!root) return;
  const items = limit ? NEWS.slice(0, limit) : NEWS;
  root.innerHTML = items.map(item => `
    <li>
      <span class="news-date">${item.date}</span>
      <span>${item.text}</span>
    </li>
  `).join('');
}

function publicationCard(pub) {
  const areaLabel = {
    geometry: 'Geometric Modeling',
    medical: 'Dental & Medical AI',
    graphics: 'Graphics, Vision & Generation'
  }[pub.area] || pub.area;
  return `
    <article class="pub-card" data-area="${pub.area}" data-year="${pub.year}">
      <div class="image-wrap pub-image">
        ${safeImage(pub.image, pub.title)}
      </div>
      <div class="pub-body">
        <div class="pub-meta"><span>${areaLabel}</span><span>${pub.year}</span></div>
        <h3>${pub.title}</h3>
        <p class="authors">${pub.authors.replace(/Guangshun Wei/g, '<strong>Guangshun Wei</strong>')}</p>
        <p class="venue">${pub.venue}</p>
        <div class="link-row">${linkList(pub.links)}</div>
      </div>
    </article>
  `;
}

function renderPublications() {
  const root = $('#publication-list');
  if (!root) return;
  const params = new URLSearchParams(window.location.search);
  let currentFilter = params.get('filter') || 'all';

  const buttons = document.querySelectorAll('[data-filter]');
  function apply(filter) {
    currentFilter = filter;
    buttons.forEach(btn => btn.classList.toggle('active', btn.dataset.filter === filter));
    const pubs = PUBLICATIONS
      .filter(pub => filter === 'all' || pub.area === filter)
      .sort((a, b) => b.year - a.year || Number(b.highlight) - Number(a.highlight));
    root.innerHTML = pubs.map(publicationCard).join('');
    const count = $('#publication-count');
    if (count) count.textContent = `${pubs.length} publications`;
  }

  buttons.forEach(btn => btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    const url = new URL(window.location);
    if (filter === 'all') url.searchParams.delete('filter');
    else url.searchParams.set('filter', filter);
    window.history.replaceState({}, '', url);
    apply(filter);
  }));

  apply(currentFilter);
}

function renderFeaturedPublications() {
  const root = $('#featured-publications');
  if (!root) return;
  const pubs = PUBLICATIONS.filter(pub => pub.highlight).slice(0, 6);
  root.innerHTML = pubs.map(publicationCard).join('');
}

function renderResearchDirections() {
  const root = $('#research-grid');
  if (!root) return;
  root.innerHTML = RESEARCH_DIRECTIONS.map(item => `
    <article class="research-card">
      <div class="image-wrap research-image">${safeImage(item.image, item.title)}</div>
      <div class="research-content">
        <p class="eyebrow">${item.subtitle}</p>
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
        <div class="tag-row">${item.keywords.map(k => `<span>${k}</span>`).join('')}</div>
        ${item.papers ? `<div class="paper-hints"><strong>Representative works:</strong> ${item.papers.join(' · ')}</div>` : ''}
      </div>
    </article>
  `).join('');
}

function renderProjects() {
  const root = $('#project-grid');
  if (!root) return;
  root.innerHTML = PROJECTS.map(project => `
    <article class="project-card">
      <div class="image-wrap project-image">${safeImage(project.image, project.title)}</div>
      <div class="project-content">
        <span class="project-tag">${project.tag}</span>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="link-row">${linkList(project.links)}</div>
      </div>
    </article>
  `).join('');
}

function renderFundedProjects() {
  const root = $('#funded-project-grid');
  if (!root || typeof FUNDED_PROJECTS === 'undefined') return;
  root.innerHTML = FUNDED_PROJECTS.map(project => `
    <article class="info-card funded-card">
      <span class="project-tag">${project.period}</span>
      <h3>${project.title}</h3>
      <p><strong>${project.source}</strong></p>
      <p>${project.description}</p>
      <p class="role-line">Role: ${project.role}</p>
    </article>
  `).join('');
}

function renderStats() {
  const pubCount = $('#stat-publications');
  if (pubCount) pubCount.textContent = `${PUBLICATIONS.length}+`;
  const recentCount = $('#stat-recent');
  if (recentCount) recentCount.textContent = `${PUBLICATIONS.filter(p => p.year >= 2024).length}`;
}

function initMobileNav() {
  const button = $('.nav-toggle');
  const nav = $('.site-nav');
  if (!button || !nav) return;
  button.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderNews($('#news-list')?.dataset.limit ? Number($('#news-list').dataset.limit) : undefined);
  renderPublications();
  renderFeaturedPublications();
  renderResearchDirections();
  renderProjects();
  renderFundedProjects();
  renderStats();
  initMobileNav();
});
