// --- Animacje wejścia kart + interakcje ceny ---
const cards = Array.from(document.querySelectorAll('.category-card'));

cards.forEach((card, index) => {
  // wejście "po kolei"
  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  setTimeout(() => {
    card.style.transition = "all 0.6s ease";
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, index * 250);

  // kliknięcie = lekkie "odbicie"
  card.addEventListener('click', () => {
    card.style.transform = "scale(0.97)";
    setTimeout(() => { card.style.transform = "scale(1)"; }, 140);
  });

  // podświetlenie ceny
  const price = card.querySelector('.category-price');
  price.addEventListener('mouseenter', () => {
    price.style.transition = "color .25s ease, text-shadow .25s ease";
    price.style.color = "#ffffff";
    price.style.textShadow = "0 0 10px #76c7c0";
  });
  price.addEventListener('mouseleave', () => {
    price.style.color = "#76c7c0";
    price.style.textShadow = "none";
  });
});

// --- Filtrowanie / sortowanie / wyszukiwarka ---
const $ = (sel) => document.querySelector(sel);
const qInput = $('#q');
const flavorSel = $('#flavor');
const typeSel = $('#type');
const nicSel = $('#nic');
const sortSel = $('#sort');
const clearBtn = $('#clear');
const list = $('#list');

function applyFilters() {
  const q = (qInput.value || '').trim().toLowerCase();
  const f = flavorSel.value;
  const t = typeSel.value;
  const n = nicSel.value;

  cards.forEach(card => {
    const name = card.querySelector('.category-name').textContent.toLowerCase();
    const desc = card.querySelector('.category-desc').textContent.toLowerCase();
    const flavor = card.dataset.flavor;
    const type = card.dataset.type;
    const nic = card.dataset.nic;

    const matchQ = !q || name.includes(q) || desc.includes(q);
    const matchF = !f || flavor === f;
    const matchT = !t || type === t;
    const matchN = !n || nic === n;

    const visible = matchQ && matchF && matchT && matchN;
    card.style.display = visible ? '' : 'none';
  });
}

function applySort() {
  const mode = sortSel.value;
  if (!mode) return;

  const items = Array.from(list.children).filter(el => el.classList.contains('category-card'));
  items.sort((a, b) => {
    const pa = parseFloat(a.dataset.price);
    const pb = parseFloat(b.dataset.price);
    if (mode === 'price-asc') return pa - pb;
    if (mode === 'price-desc') return pb - pa;
    return 0;
  });
  items.forEach(el => list.appendChild(el));
}

function clearAll() {
  qInput.value = '';
  flavorSel.value = '';
  typeSel.value = '';
  nicSel.value = '';
  sortSel.value = '';
  applyFilters();
}

[qInput, flavorSel, typeSel, nicSel].forEach(el => el.addEventListener('input', () => {
  applyFilters();
}));

sortSel.addEventListener('change', () => {
  applySort();
});

clearBtn.addEventListener('click', () => {
  clearAll();
});

// początkowe zastosowanie
applyFilters();
