// recuperar DOM elements
const themeToggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');
const icon = themeToggle.querySelector('i');

// atualizar ano copyright
document.getElementById('currentYear').textContent = new Date().getFullYear();

// inicializar tema
const theme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', theme);
updateIcon(theme);

// inicializar idioma
const currentLang = localStorage.getItem('lang') || 'pt-BR';
document.documentElement.setAttribute('lang', currentLang);
updateLanguage(currentLang);

// adicionando listener de troca de tema
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
});

// adicionando listener de troca de idioma
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
