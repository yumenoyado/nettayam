// Small interactions for the Yume no Yado website

// 1. Mobile menu (the ☰ button on phones)
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
menuBtn.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));

// 2. "Show more reviews" button
const moreBtn = document.getElementById('moreReviews');
const reviews = document.querySelector('.reviews');
moreBtn.addEventListener('click', () => {
  const showing = reviews.classList.toggle('show-all');
  moreBtn.textContent = showing ? 'Show fewer reviews' : 'Show more reviews';
});

// 3. Photo viewer: click a photo to see it large
const lightbox = document.getElementById('lightbox');
const lbImg = lightbox.querySelector('img');
document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lightbox.hidden = false;
  });
});
lightbox.addEventListener('click', () => { lightbox.hidden = true; });
document.addEventListener('keydown', e => { if (e.key === 'Escape') lightbox.hidden = true; });

// 4. Keep the copyright year current
document.getElementById('year').textContent = new Date().getFullYear();

// 5. Attractions filter buttons (All / In the city / Beaches / ...)
document.querySelectorAll('.attr-tabs button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.attr-tabs button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('.attr-group').forEach(g => {
      g.hidden = !(f === 'all' || g.dataset.group === f);
    });
  });
});
