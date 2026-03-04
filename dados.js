const trailers = [
    {
        titulo: "Devoradores de Estrelas",
        idVideo: "G_bHwb-A-ts", 
        categoria: "Sci-Fi",
        dataPublicacao: "2026-03-04",
        sinopse: "Devorador de Estrelas, a nova ficção científica estrelada por Ryan Gosling. Prepare-se para uma aventura científica de tirar o fôlego!"
    },
    {
        titulo: "ONE PIECE: A Série - Temporada 2",
        idVideo: "JsfSvTvydEY", 
        categoria: "Aventura",
        dataPublicacao: "2026-03-02",
        sinopse: "Luffy e seus amigos partem para a GrandLine, o que será que os esperam?"
    },    
    {
        titulo: "Pânico 7 | Paramount Pictures Brasil",
        idVideo: "Eqcv6iNuE9I", 
        categoria: "Terror",
        dataPublicacao: "2026-02-24",
        sinopse: "Cada facada nos trouxe até aqui. 🔪 Assista ao trailer final de #Pânico7 e se prepare para gritar nos cinemas!"
    },        
    {
        titulo: "Máquina de Guerra | Netflix",
        idVideo: "mBenb7O8Hnc", 
        categoria: "Ação",
        dataPublicacao: "2026-02-23",
        sinopse: "Na última etapa da seleção para os Rangers do exército americano, um treinamento de uma tropa de elite se transforma em luta pela sobrevivência."
    },    
    {
        titulo: "O Mandaloriano e Grogu | Dublado",
        idVideo: "VM4svpk07UU", 
        categoria: "Sci-Fi",
        dataPublicacao: "2026-02-20",
        sinopse: "Juntos como deve ser. O filme chega aos cinemas em 21 de maio e em IMAX."
    },   
    {
        titulo: "Peaky Blinders: O Homem Imortal",
        idVideo: "P_-r11fcDTc", 
        categoria: "Drama",
        dataPublicacao: "2026-02-20",
        sinopse: "Tommy Shelby nunca esteve destinado a ser um simples mortal. Peaky Blinders: O Homem Imortal estreia em 20 de março de 2026 na Netflix."
    },        
    {
        titulo: "Toy Story 5 | Dublado",
        idVideo: "-YbiBclEEgo", 
        categoria: "Animação",
        dataPublicacao: "2026-02-20",
        sinopse: "Os tempos mudam, mas os amigos são para sempre."
    },
    {
        titulo: "Gladiador II",
        idVideo: "Gvu6ktSUln0", 
        categoria: "Ação",
        dataPublicacao: "2024-11-14",
        sinopse: "Anos após presenciar a morte de Maximus, Lucius é forçado a entrar no Coliseu para lutar pelo futuro de Roma."
    },
    {
        titulo: "Duna: A Profecia",
        idVideo: "HnmodGQbp1U",
        categoria: "Sci-Fi",
        dataPublicacao: "2024-11-17",
        sinopse: "Situada 10.000 anos antes de Paul Atreides, a série segue as irmãs Harkonnen enquanto combatem forças que ameaçam o futuro da humanidade."
    },
    {
        titulo: "Wicked",
        idVideo: "6COmYeLsz4c",
        categoria: "Drama",
        dataPublicacao: "2024-11-21",
        sinopse: "A história não contada das bruxas de Oz, focada na improvável amizade entre Elphaba e Glinda."
    },
    {
        titulo: "Moana 2",
        idVideo: "hDZ7y8RP5HE",
        categoria: "Animação",
        dataPublicacao: "2024-11-27",
        sinopse: "Moana e Maui reúnem-se para uma nova e vasta viagem ao lado de uma tripulação de marinheiros improváveis."
    },
    {
        titulo: "Senhor dos Anéis: A Guerra dos Rohirrim",
        idVideo: "ngcN9XogD8c",
        categoria: "Animação",
        dataPublicacao: "2024-12-12",
        sinopse: "Um filme de animação que explora a história não contada por trás do Abismo de Helm, centenas de anos antes da trilogia original."
    },
    {
        titulo: "Sonic 3: O Filme",
        idVideo: "xjbxG5VEo4M",
        categoria: "Animação",
        dataPublicacao: "2024-12-25",
        sinopse: "Sonic, Knuckles e Tails reúnem-se para enfrentar um novo e poderoso adversário: Shadow, o Ouriço."
    },
    {
        titulo: "Round 6 - 2ª Temporada",
        idVideo: "CmRR-0XAttY",
        categoria: "Drama",
        dataPublicacao: "2024-12-26",
        sinopse: "Três anos após vencer o Jogo do Lula, o Jogador 456 desiste de ir para os EUA e volta com um novo objetivo."
    },
    {
        titulo: "Mickey 17",
        idVideo: "zk9XewcSgDw",
        categoria: "Sci-Fi",
        dataPublicacao: "2025-01-31",
        sinopse: "Um funcionário descartável numa expedição humana enviada para colonizar o mundo gelado de Niflheim recusa-se a deixar que o seu substituto o substitua."
    },
    {
        titulo: "Demolidor: Renascido",
        idVideo: "9KZyUQpihsE",
        categoria: "Ação",
        dataPublicacao: "2025-03-04",
        sinopse: "Matt Murdock e Wilson Fisk tentam deixar as suas rivalidades de lado para ajudar o povo de Nova Iorque, mas o passado volta para assombrar."
    },
    {
        titulo: "Mortal Kombat 2",
        idVideo: "0HnnNgHqo7I", 
        categoria: "Ação",
        dataPublicacao: "2026-02-25",
        sinopse: "Assista ao novo trailer de #MortalKombat2 - 7 de maio nos cinemas!"
    },
    {
        titulo: "Superman",
        idVideo: "qdeLekd6vDg",
        categoria: "Ação",
        dataPublicacao: "2025-07-11",
        sinopse: "O filme explora a jornada de Superman para reconciliar a sua herança kryptoniana com a sua criação humana em Smallville."
    },
    {
        titulo: "The Boys - 5ª Temporada",
        idVideo: "XzbWryxxn0c",
        categoria: "Ação",
        dataPublicacao: "2025-08-15",
        sinopse: "A temporada final da batalha sangrenta entre os Rapazes e os Sete de Capitão Pátria."
    },
    {
        titulo: "The Last of Us - 2ª Temporada",
        idVideo: "2MYnGPQyVdg",
        categoria: "Drama",
        dataPublicacao: "2025-09-01",
        sinopse: "Cinco anos após a sua perigosa jornada através dos Estados Unidos pós-pandémicos, Ellie e Joel vivem em Jackson."
    },
    {
        titulo: "Stranger Things 5",
        idVideo: "Wb3kaP580kA",
        categoria: "Suspense",
        dataPublicacao: "2025-10-30",
        sinopse: "A batalha final por Hawkins e pelo Mundo Invertido chega à sua conclusão épica."
    },
    {
        titulo: "Fallout - 2ª Temporada",
        idVideo: "2QGZ_56-8Eg",
        categoria: "Sci-Fi",
        dataPublicacao: "2026-02-15",
        sinopse: "Lucy e o Ghoul viajam para as luzes brilhantes de New Vegas no próximo capítulo da sobrevivência na Wasteland."
    },
    {
        titulo: "Nosferatu | Trailer Oficial",
        idVideo: "nulvWqYUM8k", 
        categoria: "Terror",
        dataPublicacao: "2024-12-25",
        sinopse: "Uma história gótica de obsessão entre uma jovem atormentada e o aterrorizante vampiro que está apaixonado por ela."
    }
];