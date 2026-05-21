 // Mobile menu toggle

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Auto close when clicking menu item
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});
 

 
  // feature dropdown toggle

  const featureBtn = document.getElementById('feature-btn');
const featureMenu = document.getElementById('feature-menu');

featureBtn.addEventListener('click', () => {
  featureMenu.classList.toggle('hidden');
});