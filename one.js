// Animacja pojawiania się kart jedna po drugiej
const oneCards = document.querySelectorAll('.one-card');

oneCards.forEach((card, index) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  
  setTimeout(() => {
    card.style.transition = "all 0.6s ease";
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, index * 300);
});

// Miganie ceny przy najechaniu
const onePrices = document.querySelectorAll('.one-price');

onePrices.forEach(price => {
  price.addEventListener('mouseenter', () => {
    price.style.transition = "color 0.3s ease";
    price.style.color = "#fff";
    price.style.textShadow = "0 0 8px #76c7c0";
  });

  price.addEventListener('mouseleave', () => {
    price.style.color = "#76c7c0";
    price.style.textShadow = "none";
  });
});

// Efekt "odbicia" po kliknięciu
oneCards.forEach(card => {
  card.addEventListener('click', () => {
    card.style.transform = "scale(0.95)";
    setTimeout(() => {
      card.style.transform = "scale(1)";
    }, 150);
  });
});
