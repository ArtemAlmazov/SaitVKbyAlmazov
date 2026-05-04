const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn?.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});
mobileMenu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobileMenu.classList.remove('open');menuBtn?.setAttribute('aria-expanded','false');}));

// Текущая дата в шапке
const dateEl = document.getElementById('currentDate');
if (dateEl) {
  const now = new Date();
  dateEl.textContent = now.toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' });
}

// Подсветка активной страницы
const path = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('[data-nav]').forEach(link => {
  const href = link.getAttribute('href');
  if (href === path) link.classList.add('active');
});

// Калькулятор баллов (points.html)
const calcBtn = document.getElementById('calcBtn');
calcBtn?.addEventListener('click', () => {
  let total = 0;
  document.querySelectorAll('[data-points]').forEach(input => {
    const count = Number(input.value || 0);
    const points = Number(input.getAttribute('data-points'));
    total += count * points;
  });
  document.getElementById('calcResult').textContent = `Итого баллов: ${total}`;
});

// Копирование шаблона рапорта (reports.html)
const copyBtn = document.getElementById('copyReportTemplate');
copyBtn?.addEventListener('click', async () => {
  const text = document.getElementById('reportTemplate')?.innerText || '';
  try {
    await navigator.clipboard.writeText(text);
    copyBtn.textContent = 'Шаблон скопирован';
    setTimeout(() => (copyBtn.textContent = 'Копировать шаблон'), 1800);
  } catch {
    copyBtn.textContent = 'Не удалось скопировать';
  }
});

const toTopBtn = document.getElementById('toTopBtn');
window.addEventListener('scroll',()=>toTopBtn?.classList.toggle('show', window.scrollY>280));
toTopBtn?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
