// Language selector functionality
document.addEventListener('DOMContentLoaded', function() {
    const languageSelector = document.getElementById('languageSelector');
    if (!languageSelector) {
        console.error('Language selector not found');
        return;
    }

    const currentLang = localStorage.getItem('selectedLanguage') || 'pt-BR';
    
    // Set initial language
    setLanguage(currentLang);
    
    // Add event listener for language changes
    languageSelector.addEventListener('change', function(e) {
        const newLang = e.target.value;
        setLanguage(newLang);
        localStorage.setItem('selectedLanguage', newLang);
    });
});

function setLanguage(lang) {
    if (!window.translations || !window.translations[lang]) {
        console.error('Translation not found for language:', lang);
        return;
    }

    const translation = window.translations[lang];
    
    try {
        // Update header
        const headerTitle = document.querySelector('header h1');
        const headerP = document.querySelector('header p');
        if (headerTitle) headerTitle.textContent = translation.title;
        if (headerP) headerP.innerHTML = `<strong>${translation.appName}</strong><br>${translation.lastUpdate}`;

        // Update sections
        const sections = document.querySelectorAll('section');
        if (sections.length >= 6) {
            // Section 1 - Data Collection
            sections[0].querySelector('h2').textContent = translation.sections.dataCollection.title;
            sections[0].querySelector('p').textContent = translation.sections.dataCollection.mainText;
            const dataCollectionList = sections[0].querySelector('ul');
            if (dataCollectionList) {
                dataCollectionList.innerHTML = translation.sections.dataCollection.points
                    .map(point => `<li>${point}</li>`).join('');
            }

            // Section 2 - Local Storage
            sections[1].querySelector('h2').textContent = translation.sections.localStorage.title;
            const localStorageList = sections[1].querySelector('ul');
            if (localStorageList) {
                localStorageList.innerHTML = translation.sections.localStorage.points
                    .map(point => `<li>${point}</li>`).join('');
            }

            // Section 3 - Data Usage
            sections[2].querySelector('h2').textContent = translation.sections.dataUsage.title;
            const dataUsageList = sections[2].querySelector('ul');
            if (dataUsageList) {
                dataUsageList.innerHTML = translation.sections.dataUsage.points
                    .map(point => `<li>${point}</li>`).join('');
            }

            // Section 4 - User Responsibility
            sections[3].querySelector('h2').textContent = translation.sections.userResponsibility.title;
            const userResponsibilityList = sections[3].querySelector('ul');
            if (userResponsibilityList) {
                userResponsibilityList.innerHTML = translation.sections.userResponsibility.points
                    .map(point => `<li>${point}</li>`).join('');
            }

            // Section 5 - Updates
            sections[4].querySelector('h2').textContent = translation.sections.updates.title;
            sections[4].querySelector('p').textContent = translation.sections.updates.text;

            // Section 6 - Contact
            sections[5].querySelector('h2').textContent = translation.sections.contact.title;
            sections[5].querySelector('p').innerHTML = 
                `${translation.sections.contact.text}<a href="mailto:contato@dicop.com.br">contato@dicop.com.br</a>`;
        }

        // Update notes section
        const highlight = document.querySelector('.highlight');
        if (highlight) {
            const highlightTitle = highlight.querySelector('h3');
            const highlightList = highlight.querySelector('ul');
            if (highlightTitle) highlightTitle.textContent = translation.sections.notes.title;
            if (highlightList) {
                highlightList.innerHTML = translation.sections.notes.points
                    .map(point => `<li>${point}</li>`).join('');
            }
        }

        // Update footer
        const footer = document.querySelector('footer p');
        if (footer) {
            footer.innerHTML = `${translation.sections.footer}<br>${translation.appName}`;
        }

        // Update document direction for RTL languages
        document.documentElement.dir = ['ar-SA'].includes(lang) ? 'rtl' : 'ltr';
    } catch (error) {
        console.error('Error updating translations:', error);
    }
} 