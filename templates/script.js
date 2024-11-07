document.addEventListener("DOMContentLoaded", function () {
    
    const cards = document.querySelectorAll('.subscription-card');
    // Показываем карточки с анимацией
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible'); // Добавляем класс для анимации
        }, index * 200); // Задержка для каждой карточки (200 мс между карточками)
    });
});