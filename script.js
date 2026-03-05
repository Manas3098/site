// Мобильное меню
const navToggle = document.getElementById('navToggle');
const navList = document.querySelector('.nav__list');

navToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Плавная прокрутка для якорей
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Закрываем меню после клика (для мобильных)
            navList.classList.remove('active');
        }
    });
});