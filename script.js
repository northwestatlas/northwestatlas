// Объект с данными для модальных окон
const expertiseData = {
    ai: {
        title: 'Искусственный интеллект и машинное обучение',
        content: `
            <p>Используем передовые алгоритмы AI и ML для автоматизированного анализа больших объемов данных, выявления ESG-факторов и построения прогнозных моделей.</p>
            <h4>Ключевые технологии:</h4>
            <ul>
                <li><strong>GenAI:</strong> Использование BERT, FinBERT, ELECTRA, DeBERTa для обработки финансовых и нефинансовых данных.</li>
                <li><strong>NLP:</strong> Интеллектуальный анализ годовых отчетов, новостных публикаций и ESG-отчетов.</li>
            </ul>
        `,
    },
    "big-data": {
        title: 'Анализ больших данных',
        content: `
            <p>Сбор и анализ больших объемов данных позволяет нам принимать более взвешенные решения.</p>
            <h4>Наши компетенции:</h4>
            <ul>
                <li><strong>Data Mining:</strong> Выявление скрытых трендов и аномалий.</li>
                <li><strong>Big Data Analytics:</strong> Построение прогнозных моделей на основе структурированных и неструктурированных данных.</li>
            </ul>
        `,
    },
    risks: {
        title: 'Оценка рисков',
        content: `
            <p>Мы применяем технологии машинного обучения и анализ больших данных для точной оценки финансовых, операционных и ESG-рисков.</p>
            <h4>Наши подходы:</h4>
            <ul>
                <li><strong>Финансовые риски:</strong> Анализ рыночных колебаний и ликвидности.</li>
                <li><strong>ESG-риски:</strong> Оценка экологических, социальных и управленческих факторов.</li>
            </ul>
        `,
    },
    scaling: {
        title: 'Масштабирование бизнеса',
        content: `
            <p>Стратегическое планирование и реализация программ масштабирования бизнеса с фокусом на устойчивый рост и долгосрочную ценность.</p>
            <h4>Наши компетенции:</h4>
            <ul>
                <li><strong>Разработка стратегий:</strong> Постановка целей и определение ключевых показателей.</li>
                <li><strong>Оптимизация процессов:</strong> Улучшение операционной эффективности.</li>
            </ul>
        `,
    },
    legal: {
        title: 'Юридическое сопровождение',
        content: `
            <p>Обеспечиваем комплексную правовую защиту активов, договоров и инвестиционных решений на всех этапах взаимодействия.</p>
            <h4>Наши компетенции:</h4>
            <ul>
                <li><strong>Договорное право:</strong> Разработка и правовая экспертиза инвестиционных соглашений.</li>
                <li><strong>Интеллектуальная собственность:</strong> Защита авторских прав и патентов.</li>
            </ul>
        `,
    },
    patents: {
        title: 'Патентование',
        content: `
            <p>Гарантия уникальности ваших технологий через комплексное патентное обеспечение и проверку правовой чистоты.</p>
            <h4>Наши услуги:</h4>
            <ul>
                <li><strong>Подготовка заявок:</strong> Составление патентных формуляров.</li>
                <li><strong>Защита интеллектуальной собственности:</strong> Регистрация патентов и торговых марок.</li>
            </ul>
        `,
    },
};

// Открытие модального окна
function openPopup(expertise) {
    const popup = document.getElementById('popup-modal');
    const title = document.getElementById('popup-title');
    const details = document.getElementById('popup-details');
    if (!popup || !title || !details) return;

    // Заполняем данные из объекта
    const data = expertiseData[expertise];
    if (!data) return;

    title.textContent = data.title;
    details.innerHTML = data.content;

    // Показываем модальное окно с анимацией
    popup.style.display = 'flex';
    setTimeout(() => {
        popup.classList.add('active');
    }, 10);
}

// Закрытие модального окна
function closePopup() {
    const popup = document.getElementById('popup-modal');
    if (!popup) return;

    popup.classList.remove('active');
    setTimeout(() => {
        popup.style.display = 'none';
    }, 300); // Время завершения анимации
}

// Инициализация активного пункта меню при скролле
function initScrollSpy() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    if (sections.length === 0 || navLinks.length === 0) return;

    window.addEventListener('scroll', function () {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Переключение мобильного меню
function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// Показ/скрытие контактов
function toggleContacts() {
    const contacts = document.getElementById('contacts');
    const button = document.getElementById('show-contacts-btn');
    if (!contacts || !button) return;

    if (contacts.style.display === 'none' || contacts.style.display === '') {
        contacts.style.display = 'block';
        contacts.style.opacity = '0';
        contacts.style.transition = 'opacity 0.5s ease-in-out';
        setTimeout(() => {
            contacts.style.opacity = '1';
        }, 10);
        button.textContent = 'Скрыть';
    } else {
        contacts.style.opacity = '0';
        setTimeout(() => {
            contacts.style.display = 'none';
        }, 500); // Время завершения анимации
        button.textContent = 'Показать';
    }
}

// Генерация рейтингов и рекомендаций
function loadRatings() {
    const companySelect = document.getElementById('company');
    const resultDiv = document.getElementById('result');
    const recommendationsDiv = document.getElementById('expert-recommendations');
    if (!companySelect || !resultDiv || !recommendationsDiv) return;

    const company = companySelect.value;
    if (!window.ratingsData[company]) {
        alert('Данные для выбранной компании недоступны.');
        return;
    }

    const ratings = window.ratingsData[company].ratings;
    const recommendations = window.ratingsData[company].recommendations;

    // Очистка предыдущих данных
    resultDiv.innerHTML = '';
    recommendationsDiv.innerHTML = '';

    // Генерация таблицы рейтингов
    const table = document.createElement('table');
    table.classList.add('ratings-table');
    table.innerHTML = `
        <thead>
            <tr>
                <th>Показатель</th>
                <th>Значение</th>
            </tr>
        </thead>
        <tbody>
            ${ratings
                .map(
                    ([label, value]) => `
                <tr>
                    <td>${label}</td>
                    <td>${value}</td>
                </tr>
            `
                )
                .join('')}
        </tbody>
    `;
    resultDiv.appendChild(table);

    // Генерация рекомендаций
    recommendations.forEach(({ title, text }) => {
        const recommendation = document.createElement('div');
        recommendation.classList.add('recommendation-item');
        recommendation.innerHTML = `
            <h4 class="text-gold">${title}</h4>
            <p>${text}</p>
        `;
        recommendationsDiv.appendChild(recommendation);
    });
}

// Инициализация подсказки для калькулятора
function initCalculatorTooltip() {
    const calculatorContainer = document.querySelector('.calculator-container');
    if (!calculatorContainer) return;

    const infoIcon = document.createElement('div');
    infoIcon.className = 'info-icon';
    infoIcon.innerHTML = '<i class="fas fa-info-circle"></i>';
    infoIcon.style.position = 'absolute';
    infoIcon.style.top = '10px';
    infoIcon.style.right = '10px';
    infoIcon.style.color = '#D4AF37';
    infoIcon.style.fontSize = '1.2rem';
    infoIcon.style.cursor = 'help';

    calculatorContainer.style.position = 'relative';
    calculatorContainer.appendChild(infoIcon);

    infoIcon.addEventListener('click', function () {
        alert('Наш калькулятор использует передовые технологии NLP и машинное обучение для анализа текстовых данных и выявления ключевых ESG-факторов.');
    });
}

// Инициализация анимации частиц
function initParticles() {
    const canvas = document.getElementById('particles');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];

    // Создаем частицы
    for (let i = 0; i < 150; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 0.5,
            speedX: Math.random() * 0.5 - 0.25,
            speedY: Math.random() * 0.5 - 0.25,
            opacity: Math.random() * 0.5 + 0.3,
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle) => {
            ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();

            particle.x += particle.speedX;
            particle.y += particle.speedY;

            // Возвращаем частицы в пределы экрана
            if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
        });

        requestAnimationFrame(animate);
    }

    animate();

    // Обновляем размеры холста при изменении окна
    window.addEventListener('resize', function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Инициализация раздела "О нас"
function initAboutSection() {
    const aboutCards = document.querySelectorAll('.about-card');
    const aboutDetails = document.querySelectorAll('.about-detail');
    if (aboutCards.length === 0 || aboutDetails.length === 0) return;

    // Показываем первый раздел по умолчанию
    const missionDetail = document.getElementById('mission-detail');
    if (missionDetail) {
        missionDetail.classList.add('active');
    }

    aboutCards.forEach(card => {
        card.addEventListener('click', function () {
            const section = this.dataset.section;
            const detail = document.getElementById(`${section}-detail`);

            if (!detail) return;

            // Скрываем все детальные описания
            aboutDetails.forEach(item => item.classList.remove('active'));

            // Показываем выбранное описание
            detail.classList.add('active');
        });
    });
}

// Инициализация текущего года в футере
document.addEventListener('DOMContentLoaded', function () {
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Инициализация анимации частиц
    initParticles();

    // Инициализация активного раздела "О нас"
    initAboutSection();

    // Инициализация активного пункта меню при скролле
    initScrollSpy();

    // Инициализация подсказки для калькулятора
    initCalculatorTooltip();

    // Инициализация AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: false,
        });
    }
});
