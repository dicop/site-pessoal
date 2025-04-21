document.addEventListener('DOMContentLoaded', function() {
    // Configurar a imagem de perfil local
    setProfileImageLocal();
    
    // Mapeamento de projetos para imagens locais
    const localProjectImages = {
        'project-1-title': 'img/projects/sistema-empresarial.jpg',
        'project-2-title': 'img/projects/app-gestao-logistica.jpg',
        'project-3-title': 'img/projects/cte.png',
        'project-4-title': 'img/projects/mdfe.png',
        'project-5-title': 'img/projects/nfe.png',
        'project-6-title': 'img/projects/gerador-relatorios.jpg',
        'project-7-title': 'img/projects/bi.jpg',
        'project-8-title': 'img/projects/app-conferencia.jpg',
        'project-9-title': 'img/projects/app-empresarial.jpg',
        'opensource-project-1-title': 'img/projects/smartwatch.jpg',
        'opensource-project-2-title': 'img/projects/bitcoin.jpg',
        'opensource-project-3-title': 'img/projects/site-pessoal.jpg'
    };
    
    // Função para configurar a imagem de perfil local
    function setProfileImageLocal() {
        const profileImage = document.querySelector('.profile-image');
        if (profileImage) {
            console.log('Elemento de imagem de perfil encontrado');
            
            // Definir a imagem local diretamente
            profileImage.src = 'img/foto.jpg';
            console.log('Caminho da imagem definido:', profileImage.src);
            
            // Adicionar evento para remover a animação de carregamento quando a imagem estiver carregada
            profileImage.onload = function() {
                console.log('Imagem de perfil carregada com sucesso');
                const container = this.closest('.profile-image-container');
                if (container) {
                    container.style.animation = 'none';
                }
            };
        } else {
            console.error('Elemento de imagem de perfil não encontrado');
        }
    }
    
    // Função para definir a imagem de um projeto
    function setProjectImage(dataI18nKey, imageUrl, altText = null) {
        const titleElement = document.querySelector(`[data-i18n="${dataI18nKey}"]`);
        
        if (titleElement) {
            const projectCard = titleElement.closest('.project-card');
            if (projectCard) {
                const imageElement = projectCard.querySelector('.project-image');
                if (imageElement) {
                    // Definir a imagem
                    imageElement.src = imageUrl;
                    imageElement.alt = altText || titleElement.textContent;
                    
                    // Adicionar evento para remover a animação de carregamento quando a imagem estiver carregada
                    imageElement.onload = function() {
                        const container = this.closest('.project-image-container');
                        if (container) {
                            container.style.animation = 'none';
                            container.style.background = 'none';
                        }
                    };
                }
            }
        }
    }
    
    // Função para carregar todas as imagens dos projetos
    function loadAllProjectImages() {
        for (const [dataI18nKey, imagePath] of Object.entries(localProjectImages)) {
            console.log(`Carregando imagem local para ${dataI18nKey}: ${imagePath}`);
            setProjectImage(dataI18nKey, imagePath);
        }
    }
    
    // Iniciar o carregamento de todas as imagens
    loadAllProjectImages();
});