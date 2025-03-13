// Get DOM elements
const themeToggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');
const icon = themeToggle.querySelector('i');

// Update copyright year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Initialize theme
const theme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', theme);
updateIcon(theme);

// Initialize language
const currentLang = localStorage.getItem('lang') || 'pt-BR';
document.documentElement.setAttribute('lang', currentLang);
updateLanguage(currentLang);

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
});

// Language toggle event listener
langToggle.addEventListener('click', () => {
    const currentLang = document.documentElement.getAttribute('lang');
    const newLang = currentLang === 'pt-BR' ? 'en' : 'pt-BR';
    
    document.documentElement.setAttribute('lang', newLang);
    localStorage.setItem('lang', newLang);
    updateLanguage(newLang);
    updateLangToggleText(newLang);
});

function updateIcon(theme) {
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

function updateLangToggleText(lang) {
    langToggle.textContent = lang === 'pt-BR' ? 'EN' : 'PT';
}

function updateLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    updateLangToggleText(lang);
}
