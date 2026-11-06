// Lavender digital-camera portfolio interactions
const EMAIL_ADDRESS = 'YOUR_EMAIL@example.com'; // Replace with your email before using the contact form.

document.addEventListener('DOMContentLoaded', () => {
  // Footer year
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

  // Typing effect on the homepage
  const typing = document.querySelector('[data-typing]');
  if (typing) {
    const phrases = ['Computer Engineering Student', 'Aspiring Developer', 'Creative Problem Solver'];
    let phrase = 0, letter = phrases[0].length, deleting = true;
    const type = () => {
      const current = phrases[phrase];
      if (deleting) {
        letter--;
        if (letter <= 0) { deleting = false; phrase = (phrase + 1) % phrases.length; }
      } else {
        letter++;
        if (letter >= phrases[phrase].length) { deleting = true; setTimeout(type, 1400); return; }
      }
      typing.textContent = phrases[phrase].slice(0, Math.max(0, letter));
      setTimeout(type, deleting ? 45 : 85);
    };
    setTimeout(type, 1700);
  }

  // Reveal elements when they enter the screen
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else revealItems.forEach(item => item.classList.add('visible'));

  // Project gallery category filters
  const filterButtons = document.querySelectorAll('[data-filter]');
  const projectCards = document.querySelectorAll('.project-card[data-category]');
  filterButtons.forEach(button => button.addEventListener('click', () => {
    const category = button.dataset.filter;
    filterButtons.forEach(item => item.classList.toggle('active', item === button));
    projectCards.forEach(card => {
      card.hidden = category !== 'all' && card.dataset.category !== category;
    });
  }));

  // Project detail buttons
  let toast = document.querySelector('.toast');
  if (!toast) { toast = document.createElement('div'); toast.className = 'toast'; toast.setAttribute('role', 'status'); toast.setAttribute('aria-live', 'polite'); document.body.appendChild(toast); }
  let toastTimer;
  document.querySelectorAll('[data-details]').forEach(button => button.addEventListener('click', () => {
    const card = button.closest('.project-card');
    const title = card?.querySelector('h3')?.textContent || 'Project';
    const description = card?.querySelector('[data-description]')?.textContent || card?.querySelector('p')?.textContent || 'Explore this project using its project links.';
    toast.textContent = `${title}: ${description}`;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
  }));

  // Animate skill bars when visible
  const skillBars = document.querySelectorAll('[data-level]');
  const fillBars = () => skillBars.forEach(bar => { bar.style.width = `${Math.min(100, Math.max(0, Number(bar.dataset.level) || 0))}%`; });
  if (skillBars.length && 'IntersectionObserver' in window) {
    const skillObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { fillBars(); skillObserver.disconnect(); }
    }), { threshold: 0.2 });
    skillObserver.observe(skillBars[0].closest('[data-skills]') || skillBars[0]);
  } else fillBars();

  // Camera shutter flash
  document.querySelectorAll('[data-shutter]').forEach(button => button.addEventListener('click', () => {
    const flash = document.querySelector('.flash');
    if (flash) { flash.classList.remove('fire'); void flash.offsetWidth; flash.classList.add('fire'); }
    if (toast) {
      toast.textContent = '✦ Snapshot captured! Keep creating.';
      toast.classList.add('show'); clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove('show'), 1800);
    }
  }));

  // Contact form opens the user's email app (no backend is connected)
  const form = document.querySelector('#contact-form');
  if (form) form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    if (EMAIL_ADDRESS === 'YOUR_EMAIL@example.com') {
      toast.textContent = 'Please add your email address in script.js first.';
      toast.classList.add('show'); clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
      return;
    }
    const data = new FormData(form);
    const subject = encodeURIComponent(`Portfolio message from ${data.get('name')}`);
    const body = encodeURIComponent(`From: ${data.get('name')} (${data.get('email')})\n\n${data.get('message')}`);
    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;
  });
});
