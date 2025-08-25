const batCards = document.querySelectorAll('.category-card');

// Animacja pojawiania się
batCards.forEach((card, index) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  setTimeout(() => {
    card.style.transition = "all 0.6s ease";
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, index * 300);
});

// Miganie ceny
const batPrices = document.querySelectorAll('.category-price');
batPrices.forEach(price => {
  price.addEventListener('mouseenter', () => {
    price.style.transition = "color 0.3s ease";
    price.style.color = "#fff";
    price.style.textShadow = "0 0 8px #4dff88";
  });
  price.addEventListener('mouseleave', () => {
    price.style.color = "#4dff88";
    price.style.textShadow = "none";
  });
});

// Odbicie po kliknięciu
batCards.forEach(card => {
  card.addEventListener('click', () => {
    card.style.transform = "scale(0.95)";
    setTimeout(() => {
      card.style.transform = "scale(1)";
    }, 150);
  });
});
