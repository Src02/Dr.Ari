// CONFIGURAÇÃO CENTRAL DE MANUTENÇÃO DO SITE
const CONFIG = {
    slides: [
        {
            imagem: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1470&auto=format&fit=cover",
            titulo: "CUIDADO PROFISSIONAL",
            texto: "Infraestrutura cirúrgica de ponta projetada para assegurar máxima proteção, sofisticação e resultados sob medida."
        },
        {
            imagem: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1468&auto=format&fit=cover",
            titulo: "RIGOR CIENTÍFICO",
            texto: "Procedimentos guides pelas updates médicas internacionais mais recentes, aliando tecnologia e precisão biológica."
        },
        {
            imagem: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1374&auto=format&fit=cover",
            titulo: "ACOLHIMENTO EXCLUSIVO",
            texto: "Acompanhamento médico integral em cada etapa da sua jornada, focado em bem-estar e em uma reabilitação serena."
        }
    ],

    videoApresentacao: "https://www.youtube.com/embed/Nql4yQsVpHk",

    servicos: [
        {
            imagem: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=800&auto=format&fit=cover",
            titulo: "Contorno Corporal Avançado",
            descricao: "Técnicas modernas de lipoaspiração de alta definição (LAD) e mapeamento muscular estruturado.",
            detalhado: "O Contorno Corporal Avançado une tecnologia cirúrgica de última geração à análise detalhada da anatomia muscular profunda. Através de metodologias como a Lipoaspiração de Alta Definição (LAD), é possível remover depósitos de gordura localizada com extrema exatidão, valorizando a musculatura subjacente e desenhando transições suaves e naturais, totalmente personalizadas para a estrutura corporal de cada paciente."
        },
        {
            imagem: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=cover",
            titulo: "Cirurgias de Mama",
            descricao: "Inclusão estruturada de próteses de silicone, mastopexia ou redução com foco em simetria biológica.",
            detalhado: "Nossa abordagem em cirurgias mamárias envolve o planejamento preciso focado nas proporções do tórax e no caimento harmônico dos tecidos. Realizamos a mamoplastia de aumento utilizando a técnica de sutiã interno para maior estabilidade da prótese, a mastopexia para remodelar e elevar mamas flácidas, além de cirurgias redutoras estruturadas que priorizam o alívio functional associado ao perfeito refinamento estético."
        },
        {
            imagem: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=cover",
            titulo: "Rejuvenescimento Facial",
            descricao: "Procedimentos detalhados como rinoplastia estruturada e lifting facial, mantendo a naturalidade.",
            detalhado: "O Rejuvenescimento Facial foca no reatrelamento de volumes e na reestruturação dos tecidos profundos da face, evitando estigmas de pele esticada. Unimos o Deep Plane Facelift ao tratamento das pálpebras (blefaroplastia) e à rinoplastia estruturada, restaurando a arquitetura facial de maneira elegante, discreta e devolvendo o aspecto descansado que o tempo suavizou."
        }
    ],

    biografia: {
        fotoDoutor: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=cover&crop=faces",
        fotoCertificado: "https://museudavida.org.br/images/diplomas/medicina_preventiva.jpg"
    },

    contatos: {
        whatsappNumero: "0000000000000", 
        whatsappTexto: "(XX) XXXXX-XXXX",  
        telefoneNumero: "+000000000000", 
        telefoneTexto: "(XX) XXXX-XXXX"   
    }
};

// Resolução de links do Google Drive se houver necessidade
function resolverLinkImagem(url) {
    if (url.includes('drive.google.com')) {
        let id = '';
        if (url.includes('/d/')) {
            id = url.split('/d/')[1].split('/')[0];
        } else if (url.includes('id=')) {
            id = url.split('id=')[1].split('&')[0];
        }
        return id ? `https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=https://drive.google.com/uc?id=${id}` : url;
    }
    return url;
}

// INICIALIZAÇÃO DINÂMICA
document.addEventListener("DOMContentLoaded", function() {
    // Aplicando Imagens Perfil e Certificados
    document.getElementById('doctorImg').src = resolverLinkImagem(CONFIG.biografia.fotoDoutor);
    document.getElementById('certificateImg').src = resolverLinkImagem(CONFIG.biografia.fotoCertificado);
    
    // Aplicando Link do Vídeo Principal
    document.getElementById('mainVideo').src = CONFIG.videoApresentacao;

    // Renderização do Carrossel Hero
    const containerSlides = document.getElementById('carouselSlides');
    const containerDots = document.getElementById('carouselDots');
    
    if (containerSlides && containerDots) {
        containerSlides.innerHTML = "";
        containerDots.innerHTML = "";

        CONFIG.slides.forEach((slide, index) => {
            const statusClasse = index === 0 ? 'active' : '';
            containerSlides.insertAdjacentHTML('beforeend', `
                <div class="slide ${statusClasse}">
                    <img src="${resolverLinkImagem(slide.imagem)}" alt="${slide.titulo}">
                    <div class="slide-content">
                        <h2>${slide.titulo}</h2>
                        <p>${slide.texto}</p>
                    </div>
                </div>
            `);
            containerDots.insertAdjacentHTML('beforeend', `
                <span class="dot ${statusClasse}" data-index="${index}"></span>
            `);
        });

        // Configurando eventos dos cliques nos dots do carrossel
        document.querySelectorAll('.dot').forEach(dot => {
            dot.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                currentSlide(index);
            });
        });
    }

    // Renderização das Áreas de Atuação
    const containerServicos = document.getElementById('servicesGrid');
    if (containerServicos) {
        containerServicos.innerHTML = "";
        CONFIG.servicos.forEach((servico, index) => {
            containerServicos.insertAdjacentHTML('beforeend', `
                <div class="service-card" data-index="${index}">
                    <div class="service-img-container">
                        <img src="${resolverLinkImagem(servico.imagem)}" alt="${servico.titulo}">
                    </div>
                    <div class="service-meta">
                        <h3>${servico.titulo}</h3>
                        <p>${servico.descricao}</p>
                    </div>
                </div>
            `);
        });

        // Configurando eventos de cliques nos blocos de serviços
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                abrirModal(index);
            });
        });
    }

    // Configuração dos Contatos Principais
    const msgWhats = encodeURIComponent("Olá! Gostaria de solicitar informações sobre agendamento de consultas com o Dr. Alexander Vadim.");
    document.getElementById('btnWhatsapp').href = `https://wa.me/${CONFIG.contatos.whatsappNumero}?text=${msgWhats}`;
    document.getElementById('textoWhatsapp').innerText = CONFIG.contatos.whatsappTexto;
    document.getElementById('linkTelefone').href = `tel:${CONFIG.contatos.telefoneNumero}`;
    document.getElementById('textoTelefone').innerText = CONFIG.contatos.telefoneTexto;

    // Proteção de Imagem com clique direito
    document.addEventListener('contextmenu', function(e) {
        if (e.target.tagName === 'IMG') e.preventDefault();
    }, false);
});

// LÓGICA DO CARROSSEL AUTOPLAY
let slideIndex = 0;

function updateCarousel() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    if(slides.length === 0) return;
    
    slides.forEach((s, i) => s.classList.toggle('active', i === slideIndex));
    dots.forEach((d, i) => d.classList.toggle('active', i === slideIndex));
}

function nextSlide() { 
    const slides = document.querySelectorAll('.slide');
    if(slides.length > 0) {
        slideIndex = (slideIndex + 1) % slides.length; 
        updateCarousel(); 
    }
}

function currentSlide(i) { 
    slideIndex = i; 
    updateCarousel(); 
    clearInterval(carouselInterval); 
    carouselInterval = setInterval(nextSlide, 5000); 
}

let carouselInterval = setInterval(nextSlide, 5000);

// CONTROLE DA JANELA MODAL POPUP
function abrirModal(index) {
    const servico = CONFIG.servicos[index];
    document.getElementById('modalImg').src = resolverLinkImagem(servico.imagem);
    document.getElementById('modalTitle').innerText = servico.titulo;
    document.getElementById('modalDescription').innerText = servico.detalhado;
    
    const msgCustomizada = encodeURIComponent(`Olá! Gostaria de mais informações detalhadas sobre o procedimento de: ${servico.titulo}.`);
    document.getElementById('modalActionLink').href = `https://wa.me/${CONFIG.contatos.whatsappNumero}?text=${msgCustomizada}`;
    
    document.getElementById('serviceModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function fecharModal(event) {
    document.getElementById('serviceModal').classList.remove('active');
    document.body.style.overflow = '';
}
