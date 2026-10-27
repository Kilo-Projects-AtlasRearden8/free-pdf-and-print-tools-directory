const toolsGrid = document.getElementById('tools-grid');
const searchInput = document.getElementById('search');
const chipsContainer = document.getElementById('category-chips');
const countEl = document.getElementById('count');

let tools = [];
let activeCategory = null;

fetch('tools.json')
  .then((response) => {
    if (!response.ok) throw new Error('Unable to load tools.json');
    return response.json();
  })
  .then((data) => {
    document.title = data.site.title;
    tools = data.tools;
    renderCategories(data.categories);
    render();
  })
  .catch((error) => {
    toolsGrid.innerHTML = `<p class="empty">Unable to load tool directory: ${error.message}</p>`;
  });

function renderCategories(categories) {
  const allChip = document.createElement('button');
  allChip.type = 'button';
  allChip.className = 'chip active';
  allChip.textContent = 'All categories';
  allChip.addEventListener('click', () => setCategory(null));
  chipsContainer.appendChild(allChip);

  categories.forEach((category) => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'chip';
    chip.textContent = category.label;
    chip.dataset.category = category.key;
    chip.addEventListener('click', () => setCategory(category.key));
    chipsContainer.appendChild(chip);
  });
}

function setCategory(key) {
  activeCategory = key;
  [...chipsContainer.querySelectorAll('.chip')].forEach((chip) => {
    chip.classList.toggle('active', chip.dataset.category === key || (key === null && !chip.dataset.category));
  });
  render();
}

function matchesSearch(tool, term) {
  const blob = [
    tool.name,
    tool.category,
    tool.cost,
    tool.platform,
    tool.steps.join(' '),
    tool.about
  ].join(' ').toLowerCase();
  return blob.includes(term);
}

function render() {
  const term = searchInput.value.toLowerCase();
  const filtered = tools.filter((tool) => {
    if (activeCategory && tool.category !== activeCategory) return false;
    return matchesSearch(tool, term);
  });

  countEl.textContent = `${filtered.length} tool${filtered.length !== 1 ? 's' : ''}`;

  if (filtered.length === 0) {
    toolsGrid.innerHTML = '<p class="empty">No tools match your search or filter.</p>';
    return;
  }

  toolsGrid.innerHTML = filtered.map((tool) => cardHtml(tool)).join('');
}

function cardHtml(tool) {
  const stepsHtml = tool.steps.map((step) => `<li>${step}</li>`).join('');
  return `
<article class="card">
  <span class="cat-tag">${tool.category}</span>
  <h2>${escapeHtml(tool.name)}</h2>
  <p class="cost">${escapeHtml(tool.cost)}</p>
  <p class="platform">${escapeHtml(tool.platform)}</p>
  <ol class="steps">${stepsHtml}</ol>
  <p class="about">${escapeHtml(tool.about)}</p>
  <div class="link-wrap">
    <a class="btn" href="${escapeHtml(tool.officialLink)}" target="_blank" rel="noopener noreferrer">Official site</a>
  </div>
</article>
`;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

searchInput.addEventListener('input', render);
