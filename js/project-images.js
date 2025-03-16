document.addEventListener('DOMContentLoaded', function() {
    // Substitua pela sua chave de API da Pexels
    const API_KEY = '2YrzeQ2t0V4BH0gLyvmnIscrttsa2ghgJ327xA2UOLcGrssOyqDp7uh1';
    
    // Configurar a imagem de perfil local
    setProfileImageLocal();
    
    // Mapeamento de projetos para termos de pesquisa na Pexels
    const projectImageQueries = {
        // Projetos principais
        'project-1-title': 'enterprise system management',
        'project-2-title': 'delivery app mobile',
        'project-3-title': 'ecommerce website',
        'project-4-title': 'business intelligence dashboard',
        'project-5-title': 'finance app mobile',
        'project-6-title': 'crm system',
        'project-7-title': 'learning platform education',
        'project-8-title': 'health app fitness',
        'project-9-title': 'industrial iot system',
        
        // Projetos open source
        'opensource-project-1-title': 'component library code',
        'opensource-project-2-title': 'command line interface terminal',
        'opensource-project-3-title': 'mvc framework architecture',
        'opensource-project-4-title': 'vscode plugin extension',
        'opensource-project-5-title': 'api generator code',
        'opensource-project-6-title': 'flutter widgets mobile',
        'opensource-project-7-title': 'orm database java',
        'opensource-project-8-title': 'android template mobile',
        'opensource-project-9-title': 'distributed logging system'
    };
    
    // Função para configurar a imagem de perfil local
    function setProfileImageLocal() {
        const profileImage = document.querySelector('.profile-image');
        if (profileImage) {
            // Definir a imagem local
            profileImage.src = 'img/foto.jpg';
            
            // Adicionar evento para tratar erros de carregamento
            profileImage.onerror = function() {
                this.src = `https://via.placeholder.com/400x400?text=Profile`;
                console.error('Erro ao carregar a imagem de perfil local. Usando placeholder.');
            };
            
            // Adicionar evento para remover a animação de carregamento quando a imagem estiver carregada
            profileImage.onload = function() {
                const container = this.closest('.profile-image-container');
                if (container) {
                    container.style.animation = 'none';
                    container.style.background = 'none';
                }
            };
        }
    }
    
    // Função para buscar imagem da Pexels
    async function fetchPexelsImage(query, dataI18nKey) {
        try {
            // Se não tiver API_KEY válida, use imagens de placeholder
            if (!API_KEY || API_KEY === 'YOUR_PEXELS_API_KEY') {
                console.warn('Chave de API da Pexels não configurada. Usando imagens de placeholder.');
                setProjectImage(dataI18nKey, `https://via.placeholder.com/800x450?text=${encodeURIComponent(query)}`);
                return;
            }
            
            const response = await fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1`, {
                headers: {
                    'Authorization': API_KEY
                }
            });
            
            if (!response.ok) {
                throw new Error('Falha ao buscar imagem da Pexels');
            }
            
            const data = await response.json();
            
            if (data.photos && data.photos.length > 0) {
                const photo = data.photos[0];
                // Usar a versão medium para carregamento mais rápido
                const imageUrl = photo.src.medium;
                const highResUrl = photo.src.large;
                
                // Carregar a imagem de baixa resolução primeiro, depois a de alta resolução
                setProjectImage(dataI18nKey, imageUrl, highResUrl);
            } else {
                console.warn(`Nenhuma imagem encontrada para o projeto ${dataI18nKey}`);
                // Usar uma imagem de fallback
                setProjectImage(dataI18nKey, `https://via.placeholder.com/800x450?text=${encodeURIComponent(query)}`);
            }
        } catch (error) {
            console.error('Erro ao buscar imagem da Pexels:', error);
            // Usar uma imagem de fallback em caso de erro
            setProjectImage(dataI18nKey, `https://via.placeholder.com/800x450?text=${encodeURIComponent(query)}`);
        }
    }
    
    // Função para definir a imagem do projeto
    function setProjectImage(dataI18nKey, imageUrl, highResUrl = null) {
        const titleElement = document.querySelector(`[data-i18n="${dataI18nKey}"]`);
        
        if (titleElement) {
            const projectCard = titleElement.closest('.project-card');
            if (projectCard) {
                const imageElement = projectCard.querySelector('.project-image');
                if (imageElement) {
                    // Definir a imagem de baixa resolução
                    imageElement.src = imageUrl;
                    imageElement.alt = titleElement.textContent;
                    
                    // Se houver uma versão de alta resolução, carregá-la depois
                    if (highResUrl) {
                        const highResImage = new Image();
                        highResImage.onload = function() {
                            imageElement.src = highResUrl;
                        };
                        highResImage.src = highResUrl;
                    }
                    
                    // Adicionar evento para tratar erros de carregamento
                    imageElement.onerror = function() {
                        this.src = `https://via.placeholder.com/800x450?text=${encodeURIComponent(titleElement.textContent)}`;
                    };
                    
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
    
    // Iniciar o carregamento das imagens com um pequeno atraso entre cada uma para não sobrecarregar a API
    let delay = 0;
    const delayIncrement = 200; // 200ms entre cada requisição
    
    for (const [dataI18nKey, query] of Object.entries(projectImageQueries)) {
        setTimeout(() => {
            fetchPexelsImage(query, dataI18nKey);
        }, delay);
        delay += delayIncrement;
    }
}); 