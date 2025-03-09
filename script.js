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
                <li><strong>RAG:</strong> Расширенный поиск релевантной информации для формирования глубокого анализа.</li>
            </ul>
        `,
    },
    'big-data': {
        title: 'Анализ больших данных',
        content: `
            <p>Применяем высокопроизводительные вычисления для обработки миллиардов ESG-документов в режиме реального времени, обеспечивая объективную и масштабируемую аналитику.</p>
            <h4>Наши решения:</h4>
            <ul>
                <li><strong>BigBird:</strong> Глубокий анализ длинных текстов (годовые отчеты, регуляторные документы).</li>
                <li><strong>RAPIDS:</strong> Оптимизация скорости обработки данных за счет GPU-ускорения.</li>
                <li><strong>SQL:</strong> Структурирование и комплексная аналитика ESG-информации для стратегических решений.</li>
            </ul>
        `,
    },
    risks: {
        title: 'Оценка ESG-рисков',
        content: `
            <p>Разрабатываем системы автоматизированной оценки рисков, обеспечивая всесторонний анализ потенциальных угроз и возможностей.</p>
            <h4>Типы анализируемых рисков:</h4>
            <ul>
                <li><strong>Финансовые:</strong> Ликвидность, волатильность активов, кредитные рейтинги.</li>
                <li><strong>Операционные:</strong> Надежность поставщиков, устойчивость цепочек поставок.</li>
                <li><strong>Репутационные:</strong> Медийное восприятие бренда, поведенческий анализ.</li>
            </ul>
            <p>Мы применяем алгоритмы машинного обучения для предсказания потенциальных угроз и предлагаем стратегические рекомендации по их нейтрализации.</p>
        `,
    },
    scaling: {
        title: 'Масштабирование бизнеса',
        content: `
            <p>Формируем индивидуальные стратегии экспоненциального роста, опираясь на передовые аналитические инструменты и ESG-принципы.</p>
            <h4>Стратегические направления:</h4>
            <ul>
                <li><strong>Долгосрочное планирование:</strong> Разработка адаптивных бизнес-моделей.</li>
                <li><strong>Привлечение капитала:</strong> Оптимизация структуры инвестиций и ESG-финансирование.</li>
                <li><strong>Глобальная экспансия:</strong> Определение перспективных рынков и построение стратегических партнерств.</li>
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
                <li><strong>Комплаенс и регуляторика:</strong> Обеспечение соответствия требованиям международных норм (ESG, AML, GDPR).</li>
                <li><strong>Арбитраж и защита интересов:</strong> Представительство в судебных разбирательствах и досудебное урегулирование споров.</li>
            </ul>
            <p>Мы работаем с ведущими юридическими фирмами и консультируем по вопросам регуляторных рисков.</p>
        `,
    },
    patents: {
        title: 'Патентование и защита интеллектуальной собственности',
        content: `
            <p>Предоставляем юридическое сопровождение процессов патентования, регистрации торговых марок и защиты авторских прав.</p>
            <h4>Наши услуги:</h4>
            <ul>
                <li><strong>Патентные исследования:</strong> Проверка новизны и конкурентного окружения.</li>
                <li><strong>Регистрация:</strong> Оформление патентов и товарных знаков на международном уровне.</li>
                <li><strong>Судебная защита:</strong> Управление спорами, связанными с интеллектуальной собственностью.</li>
            </ul>
            <p>Работаем в сотрудничестве с ведущими патентными бюро, гарантируя надёжную правовую защиту ваших инноваций.</p>
        `,
    },
};

// Объявляем AOS и XLSX
let AOS;
let XLSX;

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Установка текущего года в футере
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
    
    // Инициализация ESG калькулятора
    initEsgCalculator();
    
    // Инициализация подсказки для калькулятора
    initCalculatorTooltip();
    
    // Инициализация AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: false
        });
    }
});

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
            opacity: Math.random() * 0.5 + 0.3
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
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
    
    window.addEventListener('resize', function() {
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
            const section = this.getAttribute('data-section');
            if (!section) return;

            // Удаляем активный класс у всех деталей
            aboutDetails.forEach(detail => detail.classList.remove('active'));

            // Добавляем активный класс выбранной детали
            const targetDetail = document.getElementById(`${section}-detail`);
            if (targetDetail) {
                targetDetail.classList.add('active');
            }

            // Обновляем стили карточек
            aboutCards.forEach(c => {
                if (c.getAttribute('data-section') === section) {
                    c.style.borderColor = 'var(--gold)';
                } else {
                    c.style.borderColor = 'rgba(var(--gold-rgb), 0.2)';
                }
            });
        });
    });
}

// Отображение информации о научных проектах
function showInnovations() {
    alert("Мы профинансировали десятки проектов, включая разработки в области экотехнологий, агротехнологий и индустриального интернета вещей. Наши эксперты обеспечивают полный цикл сопровождения: от научных исследований до коммерциализации.");
}

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
    }, 300);
}

// Инициализация активного пункта меню при скролле
function initScrollSpy() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (sections.length === 0 || navLinks.length === 0) return;
    
    window.addEventListener('scroll', function() {
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
}

// Инициализация ESG калькулятора
function initEsgCalculator() {
    // Пустая функция-заглушка, чтобы избежать ошибок
}

// Переключение отображения рейтингов
function toggleRatings() {
    const result = document.getElementById('result');
    const recommendations = document.getElementById('expert-recommendations');
    const button = document.getElementById('ratings-button');
    
    if (!result || !recommendations || !button) return;
    
    if (!result.classList.contains('active')) {
        loadRatings();
        result.classList.add('active');
        recommendations.classList.add('active');
        button.textContent = 'СКРЫТЬ РЕЙТИНГИ';
    } else {
        result.classList.remove('active');
        recommendations.classList.remove('active');
        button.textContent = 'ЗАГРУЗИТЬ РЕЙТИНГИ';
    }
}

// Данные для ESG-калькулятора
window.ratingsData = {
    solidcore: {
        ratings: [
            ["Sustainalytics", "8.5"],
            ["Refinitiv", "92"],
            ["MSCI", "AA"],
            ["RAEX Europe", "A+"],
            ["NRA ESG", "A1.esg"],
            ["Средняя согласованность рейтингов", "7.50"],
            ["Соответствие ЦУР №7", "Высокие показатели"],
            ["Соответствие ЦУР №5", "Средние показатели"],
            ["Историческая динамика RAEX Europe", "+5%"],
            ["Историческая динамика MSCI", "-3%"],
            ["ESG-профиль (E)", "Отличное управление выбросами CO2"],
            ["ESG-профиль (S)", "Программы поддержки местных сообществ"],
            ["ESG-профиль (G)", "Недостаточная прозрачность управления рисками"],
        ],
        recommendations: [
            { title: "Оригинальность", text: "Проект демонстрирует высокую степень уникальности." },
            { title: "Новизна", text: "Проект подтверждает свою патентную чистоту." },
            { title: "Проработанность", text: "Проект требует более детального описания целей." },
            { title: "Эффективность", text: "Проект обладает высокой потенциальной доходностью." },
            { title: "Ресурсное обеспечение", text: "Проект требует дополнительного анализа потребностей." },
            { title: "Коммерциализируемость", text: "Проект требует доработки бизнес-модели." }
        ]
    }
};

// Генерация рейтингов и рекомендаций
function loadRatings() {
    const companySelect = document.getElementById("company");
    const resultDiv = document.getElementById("result");
    const recommendationsDiv = document.getElementById("expert-recommendations");
    
    if (!companySelect || !resultDiv || !recommendationsDiv) return;
    
    const company = companySelect.value;

    if (!window.ratingsData[company]) {
        resultDiv.innerHTML = "<p>Данные о компании не найдены.</p>";
        recommendationsDiv.innerHTML = "";
        return;
    }

    // Генерация таблицы
    let tableHTML = `<table class="ratings-table"><thead><tr><th>Показатель</th><th>Оценка</th></tr></thead><tbody>`;
    window.ratingsData[company].ratings.forEach(row => {
        tableHTML += `<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`;
    });
    tableHTML += `</tbody></table>`;

    resultDiv.innerHTML = tableHTML;

    // Генерация рекомендаций
    let recommendationsHTML = `<h3 class="recommendation-title">Экспертные рекомендации</h3><div class="recommendation-grid">`;
    window.ratingsData[company].recommendations.forEach(rec => {
        recommendationsHTML += `<div class="recommendation-card"><h4>${rec.title}</h4><p>${rec.text}</p></div>`;
    });
    recommendationsHTML += `</div><button class="download-button" onclick="downloadExcel()"><i class="fas fa-download"></i> Скачать отчет</button>`;

    recommendationsDiv.innerHTML = recommendationsHTML;
}

// Функция скачивания отчёта в формате Excel
function downloadExcel() {
    const companySelect = document.getElementById("company");
    if (!companySelect) return;
    
    const company = companySelect.value;
    
    if (!window.ratingsData[company]) {
        alert("Данные о компании не найдены.");
        return;
    }

    if (typeof XLSX === 'undefined') {
        alert("Библиотека XLSX не загружена. Пожалуйста, проверьте подключение к интернету.");
        return;
    }

    const wb = XLSX.utils.book_new();

    // Рейтинги
    const ratingsData = [["Показатель", "Оценка"]];
    window.ratingsData[company].ratings.forEach(row => ratingsData.push(row));
    const ratingsSheet = XLSX.utils.aoa_to_sheet(ratingsData);
    XLSX.utils.book_append_sheet(wb, ratingsSheet, "Рейтинги");

    // Рекомендации
    const recommendationsData = [["Категория", "Комментарий"]];
    window.ratingsData[company].recommendations.forEach(rec => recommendationsData.push([rec.title, rec.text]));
    const recommendationsSheet = XLSX.utils.aoa_to_sheet(recommendationsData);
    XLSX.utils.book_append_sheet(wb, recommendationsSheet, "Рекомендации");

    // Генерация и скачивание файла
    XLSX.writeFile(wb, `${company}_ESG_Report.xlsx`);
}

// Обработка отправки формы
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Здесь будет код для отправки данных на сервер
            
            alert(`Спасибо, ${name}! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.`);
            contactForm.reset();
        });
    }
});
