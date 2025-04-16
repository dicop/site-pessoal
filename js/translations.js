const translations = {
    'pt-BR': {
        // Navbar
        'nav-home': 'Home',
        'nav-about': 'Sobre',
        'nav-skills': 'Tecnologias',
        'nav-projects': 'Projetos',
        'nav-opensource': 'Código Livre',
        'nav-contact': 'Contato',
        
        // Hero Section
        'hero-subtitle': 'Desenvolvedor Java e Mobile',
        'hero-title-1': 'Olá, eu sou',
        'hero-title-2': 'Diogo Copat',
        'hero-description': '14+ anos criando soluções digitais inovadoras',
        'hero-btn-projects': 'Ver Projetos',
        'hero-btn-contact': 'Contato',
        
        // Career Section
        'career-title': 'Sobre',
        'career-description': 'Olá! Sou um desenvolvedor <strong>apaixonado por inovação</strong> e eternamente curioso por novas tecnologias. Quando não estou codando, você me encontra explorando as últimas novidades em <strong>IA</strong> (sim, sou daqueles que conversa com ChatGPT nas horas vagas 🤖), mergulhando no universo das <strong>criptomoedas</strong> ou acompanhando o mercado financeiro como um verdadeiro entusiasta. Para equilibrar tantas horas na frente do computador, mantenho minha energia alta com <strong>musculação e corrida</strong> - afinal, desenvolvedor fit também existe! 🏃‍♂️ Em casa, sou o orgulhoso pai de <strong>três filhas de quatro patas</strong> que são minhas companheiras de código e café. ☕🐕',
        'career-description-2': 'Logo abaixo você encontrará mais detalhes sobre minha <strong>trajetória profissional</strong> e as tecnologias que fazem parte do meu dia a dia como desenvolvedor. Prepare-se para conhecer um pouco mais sobre minhas aventuras no mundo do desenvolvimento de software! 💻',
        'career-stats-1': 'Anos atuando na área de TI',
        'career-stats-2': 'Anos desenvolvendo sistemas',
        'career-stats-3': 'Formação em Sistemas de Informação',
        'career-stats-4': 'Certificações Oracle / Java',
        
        // Career Highlights
        'career-web-title': 'Desenvolvimento Web',
        'career-web-desc': 'Especializado em desenvolvimento Java com ampla experiência em frameworks como Spring, Struts, JSF e tecnologias como JSP, JDBC e Servlets. Proficiente em desenvolvimento frontend com HTML, CSS e JavaScript.',
        'career-mobile-title': 'Desenvolvimento Mobile',
        'career-mobile-desc': 'Experiência em desenvolvimento de aplicativos Android nativos com Java e aplicações multiplataforma com Flutter',
        'career-db-title': 'Banco de Dados & Backend',
        'career-db-desc': 'Profundo conhecimento em Oracle Database, JPA, EJB e integração com diversos sistemas através de webservices SOAP/REST. Experiência com ferramentas de relatórios como iReport.',
        'career-devops-title': 'DevOps & Ferramentas',
        'career-devops-desc': 'Larga experiência com servidor de aplicação Weblogic, Oracle HTTP Server, integração contínua com Jenkins e controle de versão usando GIT.',
        
        // Career Timeline
        'career-timeline-title': 'Trajetória Profissional',
        'career-timeline-1-date': '2008 - Presente',
        'career-timeline-1-title': 'Desenvolvedor - Transportes Bertolini',
        'career-timeline-1-desc': 'Desenvolvimento e manutenção de sistemas corporativos, aplicativos mobile e integrações com órgãos fiscais.',
        'career-timeline-2-date': '2006 - 2008',
        'career-timeline-2-title': 'Suporte Técnico - Transportes Bertolini',
        'career-timeline-2-desc': 'Suporte aos usuários e sistemas da empresa, contribuindo para a eficiência operacional.',
        'career-timeline-3-date': 'Formação',
        'career-timeline-3-title': 'Sistemas de Informação',
        'career-timeline-3-desc': 'Graduação completa com foco em desenvolvimento de software e sistemas empresariais.',
        
        // Skills Section
        'skills-title': 'Tecnologias',
        'skills-description': 'Com mais de <strong>14 anos de experiência</strong> em desenvolvimento, domino um amplo conjunto de tecnologias e ferramentas. Minha expertise abrange desde <strong>desenvolvimento backend</strong> com Java e seus frameworks até <strong>desenvolvimento mobile</strong> com Android e Flutter, passando por <strong>bancos de dados</strong>, <strong>DevOps</strong> e <strong>integrações</strong>. Este conjunto diversificado de habilidades me permite criar soluções completas e robustas.',
        
        // Projects Section
        'projects-title': 'Projetos',
        'projects-description': 'Durante minha trajetória de <strong>14+ anos como desenvolvedor</strong>, tive a oportunidade de liderar e contribuir com diversos projetos significativos. Aqui estão alguns dos mais relevantes, demonstrando minha experiência em criar soluções inovadoras e impactantes.',
        
        // Open Source Section
        'opensource-title': 'Código livre',
        'opensource-description': 'Esta seção apresenta uma seleção dos meus <strong>projetos de código aberto</strong>, permitindo uma análise mais profunda do meu trabalho como desenvolvedor. Aqui você pode explorar o código fonte, avaliar as <strong>práticas de programação</strong> e as tecnologias utilizadas em cada projeto, demonstrando meu compromisso com a <strong>qualidade</strong> e a <strong>inovação</strong> no desenvolvimento de software.',
        
        // Open Source Projects
        'opensource-project-1-title': 'Biblioteca de Componentes',
        'opensource-project-1-desc': 'Conjunto de componentes reutilizáveis para desenvolvimento web com foco em acessibilidade e performance.',
        'opensource-view-source': 'Ver código fonte',
        'opensource-project-2-title': 'CLI para DevOps',
        'opensource-project-2-desc': 'Ferramenta de linha de comando para automatizar tarefas comuns de DevOps e deploy de aplicações.',
        'opensource-project-3-title': 'Framework MVC',
        'opensource-project-3-desc': 'Framework MVC leve e modular para desenvolvimento rápido de aplicações web em Java.',
        'opensource-project-4-title': 'Plugin VSCode',
        'opensource-project-4-desc': 'Extensão para VSCode que adiciona suporte a preview em tempo real para documentação técnica.',
        'opensource-project-5-title': 'Gerador de API',
        'opensource-project-5-desc': 'Ferramenta que gera código boilerplate para APIs RESTful baseado em especificações OpenAPI.',
        'opensource-project-6-title': 'Widget Flutter',
        'opensource-project-6-desc': 'Biblioteca de widgets personalizados para Flutter com temas dinâmicos e animações fluidas.',
        'opensource-project-7-title': 'ORM Java',
        'opensource-project-7-desc': 'ORM leve e flexível para Java com suporte a múltiplos bancos de dados e cache em memória.',
        'opensource-project-8-title': 'Template Android',
        'opensource-project-8-desc': 'Template para projetos Android com arquitetura MVVM, injeção de dependência e testes automatizados.',
        'opensource-project-9-title': 'Logger Distribuído',
        'opensource-project-9-desc': 'Sistema de logging distribuído com agregação em tempo real e dashboard de monitoramento.',
        
        // Contact Section
        'contact-title': 'Contato',
        'contact-description': 'Interessado em discutir um projeto ou saber mais sobre meu trabalho? Você pode entrar em contato através do <strong>formulário abaixo</strong> ou me encontrar nas <strong>redes sociais</strong> indicadas no rodapé.',
        'contact-name': 'Nome',
        'contact-email': 'Email',
        'contact-message': 'Mensagem',
        'contact-btn-send': 'Enviar',
        
        // Footer
        'footer-rights': 'Todos os direitos reservados',
        
        // Project Cards
        'project-1-title': 'Sistema Empresarial',
        'project-1-desc': 'Sistema completo de gestão empresarial e logística, atendendo diferentes setores do negócio. Arquitetura robusta e própria, para permitir o crescimento do sistema de forma sustentável e flexível.',
        'project-2-title': 'App Gestão Logística',
        'project-2-desc': 'Aplicativo Android para gerenciar as coletas e entregas realizadas por empresa de transportes. Funcionando de forma offline, permitindo o seu funcionamento mesmo em locais onde não tem conectividade.',
        'project-3-title': 'CT-e',
        'project-3-desc': 'Sistema de emissão de Conhecimento de Transporte Eletrônico (CT-e), documento digital obrigatório no Brasil para registrar e acompanhar o transporte de mercadorias por empresas. Sua principal finalidade é garantir a rastreabilidade, segurança e legalidade das operações logísticas, substituindo documentos físicos.',
        'project-4-title': 'MDF-e',
        'project-4-desc': 'Sistema de emissão de Manifesto de Transporte Eletrônico (MDF-e), documento fiscal digital obrigatório para operações de transporte de cargas no Brasil. O MDF-e tem como objetivo principal rastrear e documentar a movimentação de mercadorias em operações logísticas, garantindo a legalidade e a transparência fiscal.',
        'project-5-title': 'NF-e',
        'project-5-desc': 'Sistema de emissão de Nota Fiscal Eletrônica (NF-e), documento fiscal digital obrigatório para operações comerciais no Brasil. A NF-e substitui a nota fiscal em papel, garantindo maior segurança, agilidade e redução de custos para empresas e governo.',
        'project-6-title': 'Gerador Relatórios',
        'project-6-desc': 'Sistema web intuitivo que permite ao usuário criar relatórios personalizados, em poucos minutos, a partir de consultas SQL, sem necessidade de programação. O foco é a produtividade, flexibilidade, simplicidade e integração com múltiplos formatos de exportação.',
        'project-7-title': 'BI',
        'project-7-desc': 'Sistema web intuitivo que permite ao usuário, mesmo sem habilidades avançadas em SQL, construir indicadores de desempenho personalizados em minutos, combinando flexibilidade técnica e simplicidade operacional. Apresentando dados em formato tabular e gráficos dinâmicos.',
        'project-8-title': 'BI',
        'project-8-desc': 'Aplicativo para monitoramento de saúde com integração a dispositivos wearables e recomendações personalizadas.',
        'project-9-title': 'App Conferência',
        'project-9-desc': 'Aplicativo Android para conferência de mercadorias, utilizado em operações logísticas, através da leitura de código de barras dos volumes, visando garantir que toda mercadoria transportada seja de fato entregue ao destinatário.',
        
        // Technology Cards
        'tech-java-desc': 'Desenvolvimento backend e Android',
        'tech-spring-desc': 'Framework web e microsserviços',
        'tech-jsp-desc': 'Templates web Java',
        'tech-jdbc-desc': 'Conexão com banco de dados',
        'tech-servlet-desc': 'Aplicações web Java',
        'tech-html-desc': 'Estruturação de páginas web',
        'tech-css-desc': 'Estilização e layouts responsivos',
        'tech-js-desc': 'Interatividade frontend',
        'tech-struts-desc': 'Framework MVC Java',
        'tech-jpa-desc': 'Persistência de dados Java',
        'tech-ejb-desc': 'Componentes empresariais Java',
        'tech-jsf-desc': 'Framework web Java',
        'tech-jaxrs-desc': 'APIs REST em Java',
        'tech-jaxws-desc': 'Web Services SOAP',
        'tech-ireport-desc': 'Geração de relatórios',
        'tech-oracle-desc': 'Banco de dados empresarial',
        'tech-weblogic-desc': 'Servidor de aplicação Java',
        'tech-jenkins-desc': 'Integração contínua',
        'tech-git-desc': 'Controle de versão',
        'tech-android-desc': 'Desenvolvimento mobile nativo',
        'tech-flutter-desc': 'Apps multiplataforma'
    },
    'en': {
        // Navbar
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-skills': 'Technologies',
        'nav-projects': 'Projects',
        'nav-opensource': 'Open Source',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-subtitle': 'Java and Mobile Developer',
        'hero-title-1': 'Hi, I am',
        'hero-title-2': 'Diogo Copat',
        'hero-description': '14+ years creating innovative digital solutions',
        'hero-btn-projects': 'View Projects',
        'hero-btn-contact': 'Contact',
        
        // Career Section
        'career-title': 'About',
        'career-description': 'Hello! I am a developer <strong>passionate about innovation</strong> and eternally curious about new technologies. When I\'m not coding, you can find me exploring the latest developments in <strong>AI</strong> (yes, I\'m one of those who chats with ChatGPT in my free time 🤖), diving into the world of <strong>cryptocurrencies</strong>, or following the financial market as a true enthusiast. To balance so many hours in front of the computer, I keep my energy high with <strong>weight training and running</strong> - after all, fit developers exist too! 🏃‍♂️ At home, I\'m the proud father of <strong>three four-legged daughters</strong> who are my code and coffee companions. ☕🐕',
        'career-description-2': 'Below you will find more details about my <strong>professional journey</strong> and the technologies that are part of my daily life as a developer. Get ready to learn a bit more about my adventures in the world of software development! 💻',
        'career-stats-1': 'Years in IT',
        'career-stats-2': 'Years developing systems',
        'career-stats-3': 'Information Systems Degree',
        'career-stats-4': 'Oracle / Java Certifications',
        
        // Career Highlights
        'career-web-title': 'Web Development',
        'career-web-desc': 'Specialized in Java development with extensive experience in frameworks like Spring, Struts, JSF and technologies like JSP, JDBC and Servlets. Proficient in frontend development with HTML, CSS and JavaScript.',
        'career-mobile-title': 'Mobile Development',
        'career-mobile-desc': 'Experience in native Android app development with Java and cross-platform applications with Flutter',
        'career-db-title': 'Database & Backend',
        'career-db-desc': 'Deep knowledge in Oracle Database, JPA, EJB and integration with various systems through SOAP/REST webservices. Experience with reporting tools like iReport.',
        'career-devops-title': 'DevOps & Tools',
        'career-devops-desc': 'Extensive experience with Weblogic application server, Oracle HTTP Server, continuous integration with Jenkins and version control using GIT.',
        
        // Career Timeline
        'career-timeline-title': 'Professional Journey',
        'career-timeline-1-date': '2008 - Present',
        'career-timeline-1-title': 'Developer - Transportes Bertolini',
        'career-timeline-1-desc': 'Development and maintenance of corporate systems, mobile applications and integrations with tax authorities.',
        'career-timeline-2-date': '2006 - 2008',
        'career-timeline-2-title': 'Technical Support - Transportes Bertolini',
        'career-timeline-2-desc': 'Support for users and company systems, contributing to operational efficiency.',
        'career-timeline-3-date': 'Education',
        'career-timeline-3-title': 'Information Systems',
        'career-timeline-3-desc': 'Complete graduation focused on software development and enterprise systems.',
        
        // Skills Section
        'skills-title': 'Technologies',
        'skills-description': 'With over <strong>14 years of experience</strong> in development, I master a wide range of technologies and tools. My expertise ranges from <strong>backend development</strong> with Java and its frameworks to <strong>mobile development</strong> with Android and Flutter, through <strong>databases</strong>, <strong>DevOps</strong> and <strong>integrations</strong>. This diverse set of skills allows me to create complete and robust solutions.',
        
        // Projects Section
        'projects-title': 'Projects',
        'projects-description': 'During my <strong>14+ years as a developer</strong>, I had the opportunity to lead and contribute to several significant projects. Here are some of the most relevant ones, demonstrating my experience in creating innovative and impactful solutions.',
        
        // Open Source Section
        'opensource-title': 'Open Source',
        'opensource-description': 'This section presents a selection of my <strong>open source projects</strong>, allowing a deeper analysis of my work as a developer. Here you can explore the source code, evaluate the <strong>programming practices</strong> and technologies used in each project, demonstrating my commitment to <strong>quality</strong> and <strong>innovation</strong> in software development.',
        
        // Open Source Projects
        'opensource-project-1-title': 'Component Library',
        'opensource-project-1-desc': 'Set of reusable components for web development with focus on accessibility and performance.',
        'opensource-view-source': 'View source code',
        'opensource-project-2-title': 'DevOps CLI',
        'opensource-project-2-desc': 'Command line tool to automate common DevOps tasks and application deployment.',
        'opensource-project-3-title': 'MVC Framework',
        'opensource-project-3-desc': 'Light and modular MVC framework for rapid development of web applications in Java.',
        'opensource-project-4-title': 'VSCode Plugin',
        'opensource-project-4-desc': 'VSCode extension that adds real-time preview support for technical documentation.',
        'opensource-project-5-title': 'API Generator',
        'opensource-project-5-desc': 'Tool that generates boilerplate code for RESTful APIs based on OpenAPI specifications.',
        'opensource-project-6-title': 'Flutter Widget',
        'opensource-project-6-desc': 'Library of custom widgets for Flutter with dynamic themes and fluid animations.',
        'opensource-project-7-title': 'Java ORM',
        'opensource-project-7-desc': 'Light and flexible ORM for Java with support for multiple databases and in-memory cache.',
        'opensource-project-8-title': 'Android Template',
        'opensource-project-8-desc': 'Template for Android projects with MVVM architecture, dependency injection and automated tests.',
        'opensource-project-9-title': 'Distributed Logger',
        'opensource-project-9-desc': 'Distributed logging system with real-time aggregation and monitoring dashboard.',
        
        // Contact Section
        'contact-title': 'Contact',
        'contact-description': 'Interested in discussing a project or learning more about my work? You can get in touch through the <strong>form below</strong> or find me on the <strong>social networks</strong> indicated in the footer.',
        'contact-name': 'Name',
        'contact-email': 'Email',
        'contact-message': 'Message',
        'contact-btn-send': 'Send',
        
        // Footer
        'footer-rights': 'All rights reserved',
        
        // Project Cards
        'project-1-title': 'Enterprise System',
        'project-1-desc': 'Complete enterprise management and logistics system, serving different business sectors. Robust and proprietary architecture to enable sustainable and flexible system growth.',
        'project-2-title': 'Logistics Management App',
        'project-2-desc': 'Android application to manage pickups and deliveries performed by a transport company. Working offline, allowing its operation even in places without connectivity.',
        'project-3-title': 'CT-e',
        'project-3-desc': 'System for issuing Electronic Bill of Lading (CT-e), a mandatory digital document in Brazil for recording and tracking the transport of goods by companies. Its main purpose is to ensure traceability, security, and legality of logistics operations, replacing physical documents.',
        'project-4-title': 'MDF-e',
        'project-4-desc': 'System for issuing Electronic Transport Manifest (MDF-e), a mandatory digital tax document for cargo transport operations in Brazil. The MDF-e\'s main objective is to track and document the movement of goods in logistics operations, ensuring legality and fiscal transparency.',
        'project-5-title': 'NF-e',
        'project-5-desc': 'System for issuing Electronic Invoice (NF-e), a mandatory digital tax document for commercial operations in Brazil. The NF-e replaces paper invoices, ensuring greater security, agility, and cost reduction for companies and government.',
        'project-6-title': 'Report Generator',
        'project-6-desc': 'Intuitive web system that allows users to create custom reports in minutes from SQL queries, without requiring programming. The focus is on productivity, flexibility, simplicity, and integration with multiple export formats.',
        'project-7-title': 'BI',
        'project-7-desc': 'Intuitive web system that allows users, even without advanced SQL skills, to build custom performance indicators in minutes, combining technical flexibility and operational simplicity. Presenting data in tabular format and dynamic graphs.',
        'project-8-title': 'Health App',
        'project-8-desc': 'Application for health monitoring with integration to wearable devices and personalized recommendations.',
        'project-9-title': 'Conference App',
        'project-9-desc': 'Android application for merchandise verification, used in logistics operations, through barcode scanning of packages, aiming to ensure that all transported goods are actually delivered to the recipient.',
        
        // Technology Cards
        'tech-java-desc': 'Backend and Android development',
        'tech-spring-desc': 'Web framework and microservices',
        'tech-jsp-desc': 'Java web templates',
        'tech-jdbc-desc': 'Database connection',
        'tech-servlet-desc': 'Java web applications',
        'tech-html-desc': 'Web page structure',
        'tech-css-desc': 'Styling and responsive layouts',
        'tech-js-desc': 'Frontend interactivity',
        'tech-struts-desc': 'Java MVC framework',
        'tech-jpa-desc': 'Java data persistence',
        'tech-ejb-desc': 'Java enterprise components',
        'tech-jsf-desc': 'Java web framework',
        'tech-jaxrs-desc': 'REST APIs in Java',
        'tech-jaxws-desc': 'SOAP Web Services',
        'tech-ireport-desc': 'Report generation',
        'tech-oracle-desc': 'Enterprise database',
        'tech-weblogic-desc': 'Java application server',
        'tech-jenkins-desc': 'Continuous integration',
        'tech-git-desc': 'Version control',
        'tech-android-desc': 'Native mobile development',
        'tech-flutter-desc': 'Cross-platform apps'
    }
}; 