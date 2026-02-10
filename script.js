// Hug button click: show promise card
const hugBtn = document.getElementById('hug-btn');
const promiseCard = document.getElementById('promise-card');
if (hugBtn) {
  hugBtn.addEventListener('click', function() {
    const reasonsCard = document.getElementById('reasons-card');
    reasonsCard.style.display = 'none';
    promiseCard.style.display = 'block';
    setTimeout(() => {
      promiseCard.classList.remove('entrance');
    }, 900);
  });
}
// script.js
// Valentine’s Day Interactive Card

const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const mainCard = document.getElementById('main-card');
const resultCard = document.getElementById('result-card');
const heartsContainer = document.getElementById('hearts');

// Helper: Get random position for No button
function getRandomPosition() {
  const card = mainCard;
  const btn = noBtn;
  const cardRect = card.getBoundingClientRect();
  const btnRect = btn.getBoundingClientRect();
  const padding = 10;
  // Card relative positions
  const minX = padding;
  const minY = cardRect.height * 0.55; // below text
  const maxX = cardRect.width - btnRect.width - padding;
  const maxY = cardRect.height - btnRect.height - padding;
  const x = Math.random() * (maxX - minX) + minX;
  const y = Math.random() * (maxY - minY) + minY;
  return { x, y };
}

// Move No button to random position
function moveNoButton() {
  const { x, y } = getRandomPosition();
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// Prevent click on No button
noBtn.addEventListener('mouseenter', moveNoButton);
noBtn.addEventListener('touchstart', function(e) {
  moveNoButton();
  e.preventDefault();
}, { passive: false });
noBtn.addEventListener('click', function(e) {
  moveNoButton();
  e.preventDefault();
});

// Yes button click
yesBtn.addEventListener('click', function() {
  mainCard.style.display = 'none';
  resultCard.style.display = 'block';
  setTimeout(() => {
    resultCard.classList.remove('entrance');
  }, 900);
  startHearts();
});

// Next button click: show reasons card
const nextBtn = document.getElementById('next-btn');
const reasonsCard = document.getElementById('reasons-card');
if (nextBtn) {
  nextBtn.addEventListener('click', function() {
    resultCard.style.display = 'none';
    reasonsCard.style.display = 'block';
    setTimeout(() => {
      reasonsCard.classList.remove('entrance');
    }, 900);
  });
}

// Floating hearts animation
function startHearts() {
  let count = 0;
  const interval = setInterval(() => {
    createHeart();
    count++;
    if (count > 18) clearInterval(interval);
  }, 180);
}

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 80 + 10 + '%';
  heart.style.bottom = '10px';
  heart.innerHTML = `
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 25 Q4 16 7 10 Q10 4 14 8 Q18 4 21 10 Q24 16 14 25 Z" fill="#FF6F91"/>
    </svg>
  `;
  heartsContainer.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 2200);
}

// Entrance animation reset (for replay, if needed)
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    mainCard.classList.remove('entrance');
  }, 900);
});

// Responsive: Reset No button position on resize
window.addEventListener('resize', () => {
  noBtn.style.left = '50%';
  noBtn.style.top = '100%';
  noBtn.style.transform = 'translate(-50%, 0)';
});

// Initial No button position
noBtn.style.left = '50%';
noBtn.style.top = '100%';
noBtn.style.transform = 'translate(-50%, 0)';

// 3D Carousel functionality
const finalBtn = document.getElementById('final-btn');
const surpriseCard = document.getElementById('surprise-card');
const carousel = document.getElementById('carousel');
const prevCarouselBtn = document.getElementById('prev-btn');
const nextCarouselBtn = document.getElementById('next-btn-carousel');

let carouselIndex = 0;
const totalItems = 6;
let autoRotateInterval;

function updateCarousel() {
  const items = carousel.querySelectorAll('.carousel-item');
  items.forEach((item, index) => {
    item.classList.remove('active');
    if (index === carouselIndex) {
      item.classList.add('active');
    }
  });
}

function startAutoRotate() {
  autoRotateInterval = setInterval(() => {
    carouselIndex = (carouselIndex + 1) % totalItems;
    updateCarousel();
  }, 3500);
}

function stopAutoRotate() {
  clearInterval(autoRotateInterval);
}

if (finalBtn) {
  finalBtn.addEventListener('click', function() {
    const promiseCard = document.getElementById('promise-card');
    promiseCard.style.display = 'none';
    surpriseCard.style.display = 'block';
    setTimeout(() => {
      surpriseCard.classList.remove('entrance');
      updateCarousel();
      startAutoRotate();
    }, 900);
  });
}

// Initialize carousel
if (carousel) {
  updateCarousel();
}
