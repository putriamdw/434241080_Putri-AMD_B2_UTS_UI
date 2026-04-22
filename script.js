const hamburger = document.getElementById('hamburger');
const mobileDrawer = document.getElementById('mobileDrawer');

if (hamburger && mobileDrawer) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileDrawer.classList.toggle('open');
  });

  mobileDrawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileDrawer.classList.remove('open');
    });
  });
}

document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !mobileDrawer.contains(e.target)) {
    hamburger.classList.remove('open');
    mobileDrawer.classList.remove('open');
  }
});