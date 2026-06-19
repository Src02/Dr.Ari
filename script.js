// CONFIGURAÇÃO CENTRAL DE MANUTENÇÃO DO SITE
const CONFIG = {
    slides: [
        { imagem: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1468&auto=format&fit=cover" },
        { imagem: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1470&auto=format&fit=cover" },
        { imagem: "https://images.unsplash.com/photo-1584515933487-78021db49905?q=80&w=1470&auto=format&fit=cover" }
    ],

    videoApresentacao: "https://www.youtube.com/embed/Nql4yQsVpHk",

    // Categorias estruturadas em ordem alfabética com textos revisados para máxima clareza
    categoriasProcedimentos: [
        {
            nomeCategoria: "Cirurgia Facial",
            itens: [
                {
                    titulo: "Blefaroplastia",
                    detalhado: "Cirurgia indicada para o rejuvenescimento da região orbital. O procedimento remove com precisão o excesso de pele flácida e as bolsas de gordura das pálpebras superiores e inferiores, suavizando o aspecto de olhar cansado ou envelhecido e restabelecendo o contorno natural dos olhos."
                },
                {
                    titulo: "Cirurgia do Xantelasma",
                    detalhado: "Procedimento cirúrgico ambulatorial dedicado à remoção de depósitos amarelados de colesterol (xantelasmas) localizados nas pálpebras. Realizado sob anestesia local, foca na excisão delicada da lesão e no fechamento com suturas finas para preservar a estética da região periocular."
                },
                {
                    titulo: "Excisão e Sutura Simples",
                    detalhado: "Intervenção cirúrgica de pequeno porte realizada em ambiente ambulatorial para a retirada de pequenas lesões cutâneas, sinais, pintas ou irregularidades na pele. A técnica prioriza o fechamento meticuloso das bordas para assegurar uma cicatrização discreta."
                },
                {
                    titulo: "Exerese de Cisto Dermoide",
                    detalhado: "Remoção cirúrgica completa e segura de nódulos subcutâneos benignos (cistos dermoides). O procedimento é planejado por meio de incisões estratégicas posicionadas ao longo das linhas de força da pele, visando minimizar a visibilidade de cicatrizes futuras."
                },
                {
                    titulo: "Lifting Facial (Ritidoplastia)",
                    detalhado: "Cirurgia de alta complexidade desenhada para tratar de forma global o envelhecimento da face e do pescoço. Através do reposicionamento profundo dos tecidos musculares e da remoção do excesso de pele flácida, redefine o contorno da mandíbula e atenua sulcos profundos com elegância e naturalidade."
                },
                {
                    titulo: "Otoplastia",
                    detalhado: "Cirurgia plástica estruturada para corrigir alterações estéticas ou anatômicas na orelha externa, com destaque para a correção das chamadas 'orelhas de abano'. O procedimento remodela a cartilagem local, conferindo um posicionamento mais simétrico e proporcional à face."
                },
                {
                    titulo: "Rinoplastia",
                    detalhado: "Procedimento cirúrgico altamente personalizado voltado para a remodelação da estrutura nasal. Visa harmonizar o formato, a projeção e a ponta do nariz em relação ao restante do rosto, mantendo ou aprimorando rigorosamente a função respiratória do paciente."
                },
                {
                    titulo: "Septoplastia",
                    detalhado: "Cirurgia funcional corretiva que tem como objetivo alinhar o septo nasal quando este apresenta desvios que obstruem as vias aéreas. Ao centralizar o septo, elimina-se o bloqueio mecânico ao fluxo de ar, trazendo alívio para dificuldades respiratórias e roncos."
                },
                {
                    titulo: "Turbinectomia",
                    detalhado: "Intervenção cirúrgica direcionada à redução volumétrica das conchas nasais (cornetos hipertróficos), popularmente conhecidas como 'carne esponjosa'. É indicada para o tratamento da obstrução nasal crônica que não respondeu adequadamente aos tratamentos clínicos."
                }
            ]
        },
        {
            nomeCategoria: "Cirurgia Corporal e Mamária",
            itens: [
                {
                    titulo: "Abdominoplastia",
                    detalhado: "Cirurgia plástica indicada para a restauração do contorno abdominal. O procedimento remove o excesso de pele e o tecido adiposo localizado abaixo do umbigo, além de realizar a plicatura (reaproximação e sutura) dos músculos retos abdominais para corrigir a diástase."
                },
                {
                    titulo: "Cirurgia de Ginecomastia",
                    detalhado: "Procedimento focado na correção do aumento benigno e excessivo das mamas em pacientes do sexo masculino. Combina a remoção cirúrgica direta do tecido glandular hipertrófico com a lipoaspiração da gordura adjacente, restabelecendo um contorno peitoral plano e natural."
                },
                {
                    titulo: "Lipoaspiração",
                    detalhado: "Técnica cirúrgica desenhada para a remoção precisa de depósitos de gordura localizada que persistem mesmo com hábitos saudáveis, dieta e exercícios. É indicada para harmonizar e esculpir o contorno corporal em áreas como abdômen, flancos, coxas e braços."
                },
                {
                    titulo: "Mamoplastia de Aumento",
                    detalhado: "Cirurgia voltada para o incremento do volume, projeção e simetria das mamas por meio do uso de implantes de silicone de última geração. O plano de colocação e o perfil da prótese são discutidos e escolhidos individualmente, adequando-se ao biotipo da paciente."
                },
                {
                    titulo: "Mamoplastia Redutora",
                    detalhado: "Procedimento indicado para diminuir o tamanho e o peso das mamas quando o excesso de tecido causa dores na coluna, desconforto nos ombros ou desproporção estética. A cirurgia remove gordura, glândula e pele, reestruturando a mama em uma posição mais alta."
                },
                {
                    titulo: "Mastopexia",
                    detalhado: "Também conhecida como 'lifting de mamas', reposiciona e remodela mamas que apresentam queda (ptose mamária) devido à amamentação, oscilações de peso ou envelhecimento. O tecido é suspenso, o excesso de pele é retirado e a aréola é elevada para um formato firme."
                },
                {
                    titulo: "Prótese de Mama",
                    detalhado: "Inclusão especializada de implantes mamários de gel de silicone altamente coeso. O procedimento atende pacientes que buscam reestabelecer o volume e o colo mamário perdidos com o tempo ou obter ganho de volume, priorizando a segurança e a biocompatibilidade."
                }
            ]
        },
        {
            nomeCategoria: "Procedimentos Estéticos e Injetáveis",
            itens: [
                {
                    titulo: "Ácido Poliláctico (Sculptra)",
                    detalhado: "Tratamento injetável moderno com foco no estímulo biológico de colágeno. Atua nas camadas profundas da pele reestruturando os tecidos, combatendo de forma progressiva a flacidez e melhorando visivelmente a firmeza e a espessura cutânea facial ou corporal."
                },
                {
                    titulo: "Aplicação de Toxina Botulínica",
                    detalhado: "Procedimento minimamente invasivo consagrado para o tratamento e prevenção de rugas dinâmicas (linhas formadas pela mímica facial, como na testa e pés de galinha). Age relaxando temporariamente os músculos aplicados, conferindo um aspecto descansado."
                },
                {
                    titulo: "Microagulhamento",
                    detalhado: "Procedimento estético que utiliza um dispositivo com microagulhas estéreis para criar canais microscópicos controlados na derme. Esse estímulo induz a produção natural de colágeno e elastina, sendo ideal para suavizar cicatrizes, poros abertos e estrias."
                },
                {
                    titulo: "Peeling Químico",
                    detalhado: "Aplicação orientada de soluções químicas sobre a pele para promover uma descamação controlada e acelerar a renovação celular. Indicado para melhorar a textura epidérmica global, atenuar manchas superficiais, melasma e sequelas de acne."
                },
                {
                    titulo: "Preenchimento Cutâneo",
                    detalhado: "Técnica focada na atenuação direta de rugas estáticas e sulcos profundos (como o sulco nasogeniano, conhecido como 'bigode chinês'). Proporciona um efeito de sustentação e nivelamento imediato através da aplicação nas camadas específicas da pele."
                },
                {
                    titulo: "Preenchimento Facial",
                    detalhado: "Uso estratégico de preenchedores biocompatíveis (como o ácido hialurônico) para repor os volumes perdidos com o processo de envelhecimento. Utilizado para redefinir contornos anatômicos essenciais da face, como maçãs do rosto, mandíbula e queixo."
                },
                {
                    titulo: "Rejuvenescimento Facial",
                    detalhado: "Abordagem terapêutica integrada que combina diferentes técnicas estéticas personalizadas para amenizar os sinais do tempo na face. Une tratamentos que combatem a perda de volume, manchas e linhas de expressão, devolvendo vitalidade global ao rosto."
                },
                {
                    titulo: "Tratamento para Flacidez de Pele",
                    detalhado: "Protocolos clínicos avançados baseados em tecnologias e bioestimuladores de ponta que visam reverter o afrouxamento dos tecidos cutâneos. Estimulam as células estruturais da derme a produzirem novas fibras de sustentação corporais e faciais."
                }
            ]
        }
    ],

    contatos: {
        whatsappNumero: "5511999999999", 
        whatsappTexto: "(11) 99999-9999",  
        telefoneNumero: "+551133333333", 
        telefoneTexto: "(11) 3333-3333"   
    }
};

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

// Inicializador Principal do DOM
document.addEventListener("DOMContentLoaded", function() {
    const mainVideo = document.getElementById('mainVideo');
    if (mainVideo) {
        mainVideo.src = CONFIG.videoApresentacao;
    }

    // Renderizador do Carrossel Hero
    const containerSlides = document.getElementById('carouselSlides');
    const containerDots = document.getElementById('carouselDots');
    
    if (containerSlides && containerDots) {
        containerSlides.innerHTML = "";
        containerDots.innerHTML = "";

        CONFIG.slides.forEach((slide, index) => {
            const statusClasse = index === 0 ? 'active' : '';
            containerSlides.insertAdjacentHTML('beforeend', `
                <div class="slide ${statusClasse}">
                    <img src="${resolverLinkImagem(slide.imagem)}" alt="Consultório Dr. Ari Gonçalves">
                </div>
            `);
            containerDots.insertAdjacentHTML('beforeend', `
                <span class="dot ${statusClasse}" data-index="${index}"></span>
            `);
        });

        document.querySelectorAll('.dot').forEach(dot => {
            dot.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                currentSlide(index);
            });
        });
    }

    // Novo Renderizador com Categorias e Organização Tipográfica (Sem Ícones)
    const containerServicos = document.getElementById('servicesGrid');
    if (containerServicos) {
        containerServicos.innerHTML = "";
        
        CONFIG.categoriasProcedimentos.forEach((categoria, catIndex) => {
            // Cria a estrutura do bloco de categoria
            let htmlCategoria = `
                <div class="category-block">
                    <h3 class="category-title">${categoria.nomeCategoria}</h3>
                    <div class="category-grid-items">
            `;
            
            categoria.itens.forEach((item, itemIndex) => {
                htmlCategoria += `
                    <div class="service-text-card" data-cat="${catIndex}" data-item="${itemIndex}">
                        <h4>${item.titulo}</h4>
                        <span class="card-action">Saber mais</span>
                    </div>
                `;
            });
            
            htmlCategoria += `
                    </div>
                </div>
            `;
            
            containerServicos.insertAdjacentHTML('beforeend', htmlCategoria);
        });

        // Configuração do gatilho de clique para abrir o Modal informativo
        document.querySelectorAll('.service-text-card').forEach(card => {
            card.addEventListener('click', function() {
                const catIndex = parseInt(this.getAttribute('data-cat'));
                const itemIndex = parseInt(this.getAttribute('data-item'));
                abrirModal(catIndex, itemIndex);
            });
        });
    }

    // Configurações de links de contato
    const msgWhats = encodeURIComponent("Olá! Gostaria de agendar uma avaliação com o cirurgião Dr. Ari Gonçalves.");
    
    const btnWhats = document.getElementById('btnWhatsapp');
    if (btnWhats) btnWhats.href = `https://wa.me/${CONFIG.contatos.whatsappNumero}?text=${msgWhats}`;
    
    const txtWhats = document.getElementById('textoWhatsapp');
    if (txtWhats) txtWhats.innerText = CONFIG.contatos.whatsappTexto;
    
    const lnkTel = document.getElementById('linkTelefone');
    if (lnkTel) lnkTel.href = `tel:${CONFIG.contatos.telefoneNumero}`;
    
    const txtTel = document.getElementById('textoTelefone');
    if (txtTel) txtTel.innerText = CONFIG.contatos.telefoneTexto;

    // Trava de clique direito sobre imagens de segurança do carrossel/logo
    document.addEventListener('contextmenu', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
        }
    }, false);
});

// Lógica de Transição do Carrossel
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

// Funções de Controle do Modal (Tipografia pura e sem suporte a ícones)
function abrirModal(catIndex, itemIndex) {
    const servico = CONFIG.categoriasProcedimentos[catIndex].itens[itemIndex];
    
    const modalTitle = document.getElementById('modalTitle');
    if (modalTitle) {
        modalTitle.innerHTML = `<span>${servico.titulo}</span>`;
    }
    
    const modalDescription = document.getElementById('modalDescription');
    if (modalDescription) {
        modalDescription.innerText = servico.detalhado;
    }
    
    const serviceModal = document.getElementById('serviceModal');
    if (serviceModal) {
        serviceModal.classList.add('active');
    }
    document.body.style.overflow = 'hidden';
}

function fecharModal(event) {
    const serviceModal = document.getElementById('serviceModal');
    if (serviceModal) {
        serviceModal.classList.remove('active');
    }
    document.body.style.overflow = '';
}
