document.addEventListener('DOMContentLoaded', function() {
    // Substitua pela sua chave de API da Pexels
    const API_KEY = '2YrzeQ2t0V4BH0gLyvmnIscrttsa2ghgJ327xA2UOLcGrssOyqDp7uh1';
    
    // Configurar a imagem de perfil local
    setProfileImageLocal();
    
    // Mapeamento de projetos para termos de pesquisa na Pexels
    const projectImageQueries = {
        // Projetos principais
        'project-1-title': 'enterprise architecture diagram',
        'project-2-title': 'homem-pessoa-pessoas-carro-6169056',
        'project-3-title': 'electronic document management system',
        'project-4-title': 'cidade-meio-urbano-estrada-via-8412268',
        'project-5-title': 'finance app mobile',
        'project-6-title': 'report generator dashboard',
        'project-7-title': 'foto-de-close-up-do-laptop-cinza-577210',
        'project-8-title': 'pessoa-maos-smartphone-tirando-foto-7289717',
        'project-9-title': 'pessoa-segurando-o-iphone-prata-7-887751',
        'project-10-title': 'enterprise app',
        
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
    
    // Mapeamento de projetos para imagens locais
    const localProjectImages = {
        'project-1-title': 'img/sistema-empresarial.jpg', // Imagem local para o projeto Sistema Empresarial
        'project-3-title': 'img/cte.png', // Imagem local para o projeto CT-e
        'project-4-title': 'img/mdfe.png', // Imagem local para o projeto MDF-e
        'project-5-title': 'img/nfe.png', // Imagem local para o projeto NF-e
        'project-6-title': 'img/gerador-relatorios.jpg', // Imagem local para o projeto Gerador Relatórios
        'project-7-title': 'img/bi.jpg', // Imagem local para o projeto BI
        'project-8-title': 'img/app-conferencia.jpg', // Imagem local para o projeto App conferência
        'project-2-title': 'img/app-gestao-logistica.jpg', // Imagem local para o projeto App gestão logística
        'project-9-title': 'img/app-empresarial.jpg', // Imagem local para o projeto App empresarial
        'opensource-project-1-title': 'img/smartwatch.jpg', // Imagem local para o projeto Gerenciador Tarefas
        'opensource-project-2-title': 'img/site-pessoal.jpg', // Imagem local para o projeto Site pessoal
        'opensource-project-3-title': 'img/bitcoin.jpg', // Imagem local para o projeto Sistema Cripto
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
                }
            };
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
                    
                    // Adicionar evento para tratar erros de carregamento
                    imageElement.onerror = function() {
                        this.src = `https://via.placeholder.com/800x450?text=${encodeURIComponent(titleElement.textContent)}`;
                        console.error(`Erro ao carregar a imagem do projeto ${dataI18nKey}. Usando placeholder.`);
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
    
    // Função para extrair ID do Pexels de um termo de pesquisa
    function extractPexelsId(query) {
        // Verifica se o termo contém um ID do Pexels (números no final)
        const idMatch = query.match(/-(\d+)$/);
        if (idMatch && idMatch[1]) {
            return idMatch[1];
        }
        return null;
    }
    
    // Função para carregar todas as imagens dos projetos
    function loadAllProjectImages() {
        // Carregar as imagens da API Pexels para todos os projetos
        let delay = 0;
        const delayIncrement = 200; // 200ms entre cada requisição
        
        for (const [dataI18nKey, query] of Object.entries(projectImageQueries)) {
            // Verificar se o projeto tem uma imagem local
            if (localProjectImages[dataI18nKey]) {
                setTimeout(() => {
                    console.log(`Carregando imagem local para ${dataI18nKey}: ${localProjectImages[dataI18nKey]}`);
                    setProjectImage(dataI18nKey, localProjectImages[dataI18nKey]);
                }, delay);
            }
            // Verificar se o termo contém um ID do Pexels
            else if (extractPexelsId(query)) {
                setTimeout(() => {
                    fetchPexelsImageById(extractPexelsId(query), dataI18nKey);
                }, delay);
            } else {
                setTimeout(() => {
                    fetchPexelsImage(query, dataI18nKey);
                }, delay);
            }
            delay += delayIncrement;
        }
    }
    
    // Função para buscar imagens da API do Pexels por ID
    async function fetchPexelsImageById(photoId, dataI18nKey) {
        try {
            console.log(`Buscando imagem com ID ${photoId} para ${dataI18nKey}`);
            const response = await fetch(`https://api.pexels.com/v1/photos/${photoId}`, {
                headers: {
                    'Authorization': API_KEY
                }
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const photo = await response.json();
            
            if (photo) {
                const imageUrl = photo.src.medium;
                const highResUrl = photo.src.large2x;
                
                // Definir a imagem de baixa resolução primeiro
                setProjectImage(dataI18nKey, imageUrl);
                
                // Se houver uma versão de alta resolução, carregá-la depois
                if (highResUrl) {
                    const highResImage = new Image();
                    highResImage.onload = function() {
                        setProjectImage(dataI18nKey, highResUrl);
                    };
                    highResImage.src = highResUrl;
                }
            } else {
                console.warn(`Imagem com ID ${photoId} não encontrada.`);
            }
        } catch (error) {
            console.error(`Erro ao buscar imagem com ID ${photoId}:`, error);
        }
    }
    
    // Função para buscar imagens da API do Pexels por termo de pesquisa
    async function fetchPexelsImage(query, dataI18nKey) {
        try {
            const response = await fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1`, {
                headers: {
                    'Authorization': API_KEY
                }
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            
            if (data.photos && data.photos.length > 0) {
                const photo = data.photos[0];
                const imageUrl = photo.src.medium;
                const highResUrl = photo.src.large2x;
                
                // Definir a imagem de baixa resolução primeiro
                setProjectImage(dataI18nKey, imageUrl);
                
                // Se houver uma versão de alta resolução, carregá-la depois
                if (highResUrl) {
                    const highResImage = new Image();
                    highResImage.onload = function() {
                        setProjectImage(dataI18nKey, highResUrl);
                    };
                    highResImage.src = highResUrl;
                }
            } else {
                console.warn(`Nenhuma imagem encontrada para a consulta: ${query}`);
            }
        } catch (error) {
            console.error(`Erro ao buscar imagem para ${query}:`, error);
        }
    }
    
    // Iniciar o carregamento de todas as imagens
    loadAllProjectImages();
}); 