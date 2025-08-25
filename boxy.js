const boxCards = document.querySelectorAll('.category-card');

// Animacja pojawiania się
boxCards.forEach((card, index) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  setTimeout(() => {
    card.style.transition = "all 0.6s ease";
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, index * 300);
});

// Miganie ceny
const boxPrices = document.querySelectorAll('.category-price');
boxPrices.forEach(price => {
  price.addEventListener('mouseenter', () => {
    price.style.transition = "color 0.3s ease";
    price.style.color = "#fff";
    price.style.textShadow = "0 0 8px #76c7c0";
