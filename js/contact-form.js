document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    const formMessage = document.createElement('div');
    formMessage.className = 'form-message';
    contactForm.insertBefore(formMessage, contactForm.firstChild);

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get current language
        const currentLang = document.documentElement.lang;

        // Get form data
        const formData = new FormData();
        formData.append('name', document.getElementById('name').value);
        formData.append('email', document.getElementById('email').value);
        formData.append('message', document.getElementById('message').value);
        formData.append('lang', currentLang);

        // Clear previous message classes
        formMessage.className = 'form-message';

        // Send AJAX request
        fetch('send-contact.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            // First add the base class
            formMessage.className = 'form-message';
            // Then add the success/error class
            formMessage.classList.add(data.success ? 'success' : 'error');
            formMessage.textContent = data.message;
            
            if (data.success) {
                // Clear form
                contactForm.reset();
            }
        })
        .catch(error => {
            formMessage.className = 'form-message error';
            formMessage.textContent = currentLang === 'pt-BR' 
                ? 'Erro ao enviar mensagem, por favor tente novamente.'
                : 'Error sending message, please try again.';
        });
    });
}); 