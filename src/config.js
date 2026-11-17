// Conteúdo editorial sujeito à revisão da profissional antes da publicação.
// Campos vazios nunca geram credenciais, contatos ou relatos fictícios.
export const profile = {
  name: 'Wanessa Freire de Oliveira',
  whatsapp: '', // DDI + DDD + número, somente dígitos.
  instagram: '', // URL https://www.instagram.com/...
  email: '',
  crn: 'CRN-5 9387',
  portrait: '/foto3.jpeg', // Foto autorizada em public, por exemplo: /wanessa.jpg.
  privacyUrl: '', // URL de uma pol?tica real, quando aplic?vel.
  siteUrl: '', // URL definitiva para canonical e compartilhamento.
};
export const content = {
  values: ['Ciência e sensibilidade','Respeito à sua individualidade','Equilíbrio no dia a dia','Uma vida com mais sabor'],
  steps: [['01','Primeiro contato','Conte o que você procura e tire suas dúvidas sobre o atendimento.'],['02','Um olhar individual','Compartilhe sua rotina, suas preferências e seus objetivos na consulta.'],['03','Construção em conjunto','Converse sobre os próximos passos e o acompanhamento adequado para você.']],
  care: [['leaf','01','Alimentação com equilíbrio','Abrir espaço para variedade, prazer e escolhas conscientes, respeitando as necessidades de cada pessoa.'],['heart','02','Uma relação mais leve','Conversar sobre alimentação com acolhimento, sem julgamentos e com respeito à sua trajetória.'],['sprout','03','Hábitos possíveis','Olhar para o cotidiano e pensar em caminhos que considerem sua rotina, suas preferências e seu contexto.']],
  // Original JPEGs remain untouched. Responsive WebP files preserve full framing.
  photos: {
    hero: {
      src: '/foto3.jpeg',
      srcSet: '/images/foto3-480.webp 480w, /images/foto3-800.webp 800w, /images/foto3-1179.webp 1179w',
      width: 1179, height: 1432,
      position: '54% 0%', mobilePosition: '54% 0%',
      alt: 'Wanessa Freire, nutricionista, em retrato profissional de estúdio.',
    },
    about: {
      src: '/foto1.jpeg',
      srcSet: '/images/foto1-480.webp 480w, /images/foto1-800.webp 800w, /images/foto1-1179.webp 1179w',
      width: 1179, height: 1317,
      position: '52% 24%', mobilePosition: '52% 20%',
      alt: 'Wanessa Freire de jaleco branco, em pé junto a uma janela.',
    },
    contact: {
      src: '/foto2.jpeg',
      srcSet: '/images/foto2-480.webp 480w, /images/foto2-800.webp 800w, /images/foto2-1179.webp 1179w',
      width: 1179, height: 1311,
      position: '76% 20%', mobilePosition: '76% 18%',
      alt: 'Wanessa Freire sorrindo, de jaleco branco, ao lado de uma janela.',
    },
  },
  about: [
  "Sou Wanessa Freire de Oliveira, nutricionista formada pela Universidade Tiradentes (UNIT), em 2016, com trajetória profissional dedicada à promoção da saúde, à ciência da Nutrição e ao cuidado integral das pessoas.",
  "Ao longo da minha caminhada, construí experiências em diferentes áreas da Nutrição, incluindo atendimento clínico, alimentação escolar, vigilância sanitária, qualidade dos alimentos e educação em saúde. Essa vivência multidisciplinar ampliou minha visão sobre o papel da alimentação na prevenção de doenças, na qualidade de vida e na promoção da saúde individual e coletiva.",
  "Sou especialista em Nutrição com ênfase em Obesidade e Emagrecimento e em Vigilância Sanitária e Qualidade dos Alimentos. Também tenho experiência na docência, tutoria e preceptoria de estudantes de Nutrição, atividades que fortaleceram minha identificação com o ensino, a pesquisa e a formação de novos profissionais.",
  "Minha atuação é orientada por uma visão humanizada, individualizada e baseada em evidências científicas. Acredito que a Nutrição não deve se limitar a números na balança ou a dietas restritivas, mas considerar a história, a rotina, as necessidades e a individualidade de cada pessoa.",
  "Tenho especial interesse pela saúde da mulher, saúde intestinal, microbiota, doenças crônicas e estratégias nutricionais voltadas à prevenção e ao tratamento de condições que impactam a qualidade de vida.",
  "Acredito na Nutrição como uma ferramenta de transformação: uma ciência que acolhe, orienta, previne e promove saúde."
],
  purpose: 'Meu propósito é transformar conhecimento científico em cuidado, tornando a alimentação uma aliada na construção de uma vida mais saudável, consciente e equilibrada.',
  aboutTagline: 'Nutrição baseada em ciência. Cuidado que respeita a sua individualidade.',
  qualifications: [
  {
    "title": "Graduação em Nutrição",
    "detail": "Universidade Tiradentes (UNIT) · 2016",
    "status": "Concluída"
  },
  {
    "title": "Nutrição com ênfase em Obesidade e Emagrecimento",
    "detail": "",
    "status": "Especialização"
  },
  {
    "title": "Vigilância Sanitária e Qualidade dos Alimentos",
    "detail": "",
    "status": "Especialização"
  },
  {
    "title": "Docência, tutoria e preceptoria",
    "detail": "Experiência na formação de estudantes de Nutrição",
    "status": "Ensino"
  }
],
  professionalAxes: [
  {
    "title": "Nutrição Clínica",
    "description": "Cuidado individualizado, saúde da mulher, saúde intestinal e doenças crônicas."
  },
  {
    "title": "Ciência e Educação",
    "description": "Formação acadêmica, docência, pesquisa e atualização científica."
  },
  {
    "title": "Saúde Coletiva e Alimentação",
    "description": "Experiência em alimentação escolar, segurança alimentar e qualidade dos alimentos."
  }
],
  // Inclua somente áreas de atendimento confirmadas. Não representam títulos de especialista.
  // Exemplo de formato: { title: 'Área confirmada', description: 'Como funciona este cuidado.' }
  areas: [],
  // Somente relatos reais com autorização de publicação.
  // Formato: { name: 'Nome autorizado', quote: 'Relato original autorizado' }
  testimonials: [],
  benefits: [
    { title: 'Mais clareza nas escolhas', description: 'Um espaço para entender suas necessidades e conversar sobre suas dúvidas alimentares.' },
    { title: 'Um cuidado individual', description: 'Sua rotina, suas preferências e suas possibilidades fazem parte da conversa.' },
    { title: 'Autonomia no dia a dia', description: 'Orientação para construir escolhas possíveis, um passo de cada vez.' },
  ],
  faqs: [
    ['Como me preparar para o primeiro atendimento?', 'Ao combinar o atendimento, confirme com Wanessa Freire quais informações e documentos levar. Anote suas dúvidas, seus objetivos e os pontos da sua rotina que gostaria de conversar.'],
    ['Como funciona a primeira consulta?', 'A primeira conversa é um espaço para conhecer sua rotina, sua relação com a alimentação e seus objetivos. Os detalhes do atendimento devem ser combinados diretamente com a nutricionista.'],
    ['Preciso mudar toda a minha alimentação?', 'Cada pessoa tem uma história e uma rotina. As mudanças alimentares devem ser avaliadas individualmente e construídas com orientação profissional.'],
    ['Como posso agendar um atendimento?', 'Use a seção de contato para consultar os canais disponíveis e combinar horários, valores e modalidade de atendimento.'],
    ['O atendimento é online ou presencial?', 'Consulte diretamente a Wanessa Freire para confirmar as modalidades disponíveis, a localização e os horários.'],
    ['Como funciona o acompanhamento?', 'A frequência e os próximos passos devem ser definidos na consulta, conforme as necessidades individuais.'],
  ],
};
