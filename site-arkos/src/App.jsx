import React, { useState, useMemo } from 'react';
import {
  Zap,
  ShieldCheck,
  Award,
  Clock,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Menu,
  X,
  ChevronRight,
  Star,
  FileText,
  Lightbulb,
  Cpu,
  Layers,
  Building2,
  Home,
  Activity,
  Sun,
  Send,
  ExternalLink,
  Eye,
  Settings,
  UserCheck,
  ThumbsUp,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Check,
  HelpCircle
} from 'lucide-react';

// ==========================================
// ARKOS SVG LOGO COMPONENT
// Faithful rendering of ARKOS logo with stylized R lightning bolt
// ==========================================
const ArkosLogo = ({ className = "h-10", variant = "light" }) => {
  // variant: 'light' (white subtitle text for dark bg), 'dark' (navy subtitle text for light bg)
  const subtitleColor = variant === "dark" ? "#003B6A" : "#FFFFFF";

  return (
    <div className={`flex flex-col justify-center select-none ${className}`}>
      <svg viewBox="0 0 450 115" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* ARKOS RED TEXT WITH BOLT VAZADO ON R */}
        <g id="ARKOS-BRAND">
          {/* 'A' */}
          <path d="M12 90 L42 12 H62 L92 90 H72 L64 68 H40 L32 90 H12 Z M46 51 H58 L52 32 Z" fill="#E20015" />
          
          {/* 'R' with Lightning Bolt Knockout */}
          <g>
            <path d="M102 12 H142 C162 12 174 22 174 37 C174 48 165 57 150 60 L176 90 H152 L128 62 H122 V90 H102 V12 Z M122 28 V46 H140 C149 46 154 42 154 37 C154 32 149 28 140 28 H122 Z" fill="#E20015" />
            {/* White/Transparent Lightning Bolt overlay crossing the R */}
            <path d="M120 8 L155 42 L138 45 L158 85 L125 48 L140 45 Z" fill="#FFFFFF" />
          </g>

          {/* 'K' */}
          <path d="M184 12 H205 V44 L235 12 H262 L225 50 L264 90 H237 L205 56 V90 H184 V12 Z" fill="#E20015" />

          {/* 'O' */}
          <path d="M307 10 C333 10 350 27 350 51 C350 75 333 92 307 92 C281 92 264 75 264 51 C264 27 281 10 307 10 Z M307 28 C294 28 286 37 286 51 C286 65 294 74 307 74 C320 74 328 65 328 51 C328 37 320 28 307 28 Z" fill="#E20015" />

          {/* 'S' */}
          <path d="M394 10 C416 10 430 22 430 38 H408 C408 30 402 26 394 26 C386 26 380 30 380 35 C380 40 384 43 397 46 L407 48 C424 52 433 60 433 74 C433 90 417 92 393 92 C369 92 355 80 355 64 H377 C377 72 384 76 393 76 C402 76 410 72 410 66 C410 60 404 57 392 54 L382 52 C367 48 358 41 358 28 C358 13 373 10 394 10 Z" fill="#E20015" />
        </g>

        {/* SUBTITLE: SOLUÇÕES ELÉTRICAS */}
        <text
          x="225"
          y="112"
          textAnchor="middle"
          fill={subtitleColor}
          fontSize="18"
          fontWeight="900"
          letterSpacing="5"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          SOLUÇÕES ELÉTRICAS
        </text>
      </svg>
    </div>
  );
};

export default function App() {
  // ==========================================
  // CONFIGURABLE COMPANY DATA STATE
  // Allows full customization on-the-fly
  // ==========================================
  const [companyInfo, setCompanyInfo] = useState({
    name: "Arkos Soluções Elétricas",
    whatsapp: "84921869853", // Atualizado
    displayWhatsapp: "(84) 92186-9853", // Atualizado
    phone: "(84) 92186-9853",
    email: "assessoria.arkos@gmail.com", // Atualizado
    address: "Natal - RN", // Atualizado
    city: "Natal - RN", // Atualizado
    instagram: "@arkoseletrica",
    instagramUrl: "https://www.instagram.com/arkoseletrica/",
    cnpj: "00.000.000/0001-99",
    regions: [
      "Natal",
      "Parnamirim",
      "São Gonçalo do Amarante",
      "Macaíba",
      "Extremoz",
      "Ceará-Mirim",
      "Nísia Floresta",
      "Grande Natal e Região Metropolitana"
    ]
  });

  // UI States
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [activePortfolioFilter, setActivePortfolioFilter] = useState('todos');
  const [lightboxImage, setLightboxImage] = useState(null);

  // Quote Form State
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    phone: '',
    service: 'Instalações Elétricas',
    city: 'Natal',
    message: ''
  });

  // Helper to format WhatsApp link with custom encoded text
  const getWhatsappUrl = (customText) => {
    const defaultText = customText || `Olá! Vim pelo site da ${companyInfo.name} e gostaria de solicitar um orçamento sem compromisso.`;
    const cleanNumber = companyInfo.whatsapp.replace(/\D/g, '');
    return `https://wa.me/55${cleanNumber}?text=${encodeURIComponent(defaultText)}`;
  };

  // Handle Form Submit (redirects directly to WhatsApp)
  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    const text = `*NOVA SOLICITAÇÃO DE ORÇAMENTO (SITE)*\n\n*Nome:* ${quoteForm.name}\n*Telefone:* ${quoteForm.phone}\n*Serviço:* ${quoteForm.service}\n*Cidade:* ${quoteForm.city}\n*Detalhes:* ${quoteForm.message || 'Não especificado'}`;
    window.open(getWhatsappUrl(text), '_blank');
  };

  // Services list
  const services = [
    {
      id: 'instalacoes',
      title: 'Instalações Elétricas',
      desc: 'Execução de instalações elétricas completas para ambientes residenciais, comerciais e prediais em conformidade estrita com a norma NBR 5410.',
      icon: PowerIcon,
      badge: 'Residencial & Comercial'
    },
    {
      id: 'manutencao',
      title: 'Manutenção Elétrica',
      desc: 'Manutenção preventiva e corretiva emergencial. Diagnóstico rápido de falhas, sobrecargas, curtos-circuitos e substituição de fiação antiga.',
      icon: WrenchIcon,
      badge: 'Atendimento Rápido'
    },
    {
      id: 'projetos',
      title: 'Projetos e Laudos Técnicos',
      desc: 'Elaboração de projetos elétricos detalhados, diagramas unifilares, laudos de ART, vistoria técnica e perícia para concessionárias.',
      icon: FileText,
      badge: 'Norma NBR 5410'
    },
    {
      id: 'iluminacao',
      title: 'Iluminação LED e Arquitetônica',
      desc: 'Projetos luminotécnicos modernos, instalação de fitas LED, perfis de alumínio, lustres, iluminação de destaque e sistemas inteligentes.',
      icon: Lightbulb,
      badge: 'Design & Economia'
    },
    {
      id: 'quadros',
      title: 'Quadros de Distribuição (QDG)',
      desc: 'Montagem, organização, etiquetagem e dimensionamento de quadros elétricos com disjuntores modernos, DPS e dispositivos DR de proteção.',
      icon: Cpu,
      badge: 'Proteção Total'
    },
    {
      id: 'tomadas',
      title: 'Tomadas, Interruptores e Circuitos',
      desc: 'Instalação de tomadas para ar-condicionado, chuveiros elétricos, cooktops de indução, ilhas gourmet e novos circuitos dedicados.',
      icon: Layers,
      badge: 'Adequação de Carga'
    },
    {
      id: 'padrao',
      title: 'Padrão de Entrada de Energia',
      desc: 'Montagem e aprovação de padrão de entrada trifásico, bifásico e monofásico junto à concessionária de energia local com projeto aprovado.',
      icon: Building2,
      badge: 'Padrão Concessionária'
    },
    {
      id: 'automacao',
      title: 'Automação Residencial Smart',
      desc: 'Transforme sua casa em uma Smart Home: controle iluminação, portões, câmeras e tomadas por comando de voz (Alexa/Google) ou aplicativo.',
      icon: Home,
      badge: 'Smart Home'
    },
    {
      id: 'eficiencia',
      title: 'Eficiência Energética & Solar',
      desc: 'Análise de consumo de energia, correção de fator de potência, eliminação de desperdícios e infraestrutura para energia fotovoltaica.',
      icon: Sun,
      badge: 'Alta Economia'
    }
  ];

  // Differentials
  const differentials = [
    {
      title: 'Profissionais Qualificados',
      desc: 'Eletricistas e engenheiros certificados com reciclagem periódica e treinamento contínuo.',
      icon: Award
    },
    {
      title: 'Segurança NR-10 e NBR 5410',
      desc: 'Rigido cumprimento de normas técnicas de segurança do trabalho e instalações elétricas.',
      icon: ShieldCheck
    },
    {
      title: 'Qualidade & Pontualidade',
      desc: 'Respeito aos prazos estabelecidos, execução limpa, organizada e materiais de ponta.',
      icon: Clock
    },
    {
      title: 'Atendimento Especializado',
      desc: 'Diagnóstico preciso desde a primeira visita técnica e orientação ao cliente.',
      icon: UserCheck
    },
    {
      title: 'Transparência & Garantia',
      desc: 'Orçamentos detalhados sem taxas escondidas e garantia formal sobre todos os serviços.',
      icon: CheckCircle2
    },
    {
      title: 'Eficiência Energética',
      desc: 'Soluções planejadas para reduzir a conta de luz e maximizar o desempenho da sua rede.',
      icon: Zap
    }
  ];

  // Portfolio projects
  const portfolioItems = [
    {
      id: 1,
      title: 'Instalação Elétrica Residencial Completa',
      category: 'residenciais',
      categoryLabel: 'Residencial',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
      desc: 'Projeto e execução elétrica de casa de alto padrão com automação e LED embutido.'
    },
    {
      id: 2,
      title: 'Montagem de Quadro de Distribuição Comercial',
      category: 'quadros',
      categoryLabel: 'Quadros & Painéis',
      image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=800&q=80',
      desc: 'Quadro trifásico organizado com disjuntores DIN, DPS contra surtos e proteção DR.'
    },
    {
      id: 3,
      title: 'Adequação Elétrica de Escritório Corporativo',
      category: 'comerciais',
      categoryLabel: 'Comercial',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      desc: 'Infraestrutura para rede lógica, tomadas de alta capacidade e iluminação corporativa.'
    },
    {
      id: 4,
      title: 'Manutenção Preventiva em Rede de Restaurante',
      category: 'manutencao',
      categoryLabel: 'Manutenção',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      desc: 'Reaperto de conexões, balanceamento de fases e eliminação de pontos de aquecimento.'
    },
    {
      id: 5,
      title: 'Iluminação Cênica e Arquitetônica em Fachada',
      category: 'residenciais',
      categoryLabel: 'Residencial',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      desc: 'Instalação de arandelas, balizadores de jardim e iluminação indireta em LED.'
    },
    {
      id: 6,
      title: 'Adequação de Padrão de Entrada de Energia',
      category: 'comerciais',
      categoryLabel: 'Comercial',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      desc: 'Montagem de caixa blindada e novo ramal de entrada aprovado na concessionária.'
    }
  ];

  const filteredPortfolio = useMemo(() => {
    if (activePortfolioFilter === 'todos') return portfolioItems;
    return portfolioItems.filter(item => item.category === activePortfolioFilter);
  }, [activePortfolioFilter]);

  // Reviews
  const reviews = [
    {
      name: 'Carlos Eduardo Santos',
      role: 'Proprietário de Imóvel',
      rating: 5,
      date: 'Há 1 semana',
      text: 'Excelente atendimento! A equipe da Arkos refez toda a fiação antiga do meu apartamento com extenção de circuito para ar-condicionado. Trabalho limpo, rápido e dentro da NBR 5410.'
    },
    {
      name: 'Mariana Medeiros',
      role: 'Gerente Comercial',
      rating: 5,
      date: 'Há 3 semanas',
      text: 'Contratamos a Arkos para a montagem dos quadros elétricos da nossa nova loja. Profissionais extremamente atenciosos, pontuais e com um acabamento impecável. Recomendamos muito!'
    },
    {
      name: 'Eng. Ricardo Bezerra',
      role: 'Síndico Profissional',
      rating: 5,
      date: 'Há 1 mês',
      text: 'Trabalho com a Arkos em várias manutenções prediais. Diagnóstico elétrico preciso, laudos técnicos impecáveis e segurança em primeiro lugar. Empresa séria de altíssimo padrão.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-red-600 selection:text-white relative">
      
      {/* ==========================================
          HEADER NAVBAR (Sticky & Responsive)
      ========================================== */}
      <header className="sticky top-0 z-40 bg-[#003B6A] shadow-lg border-b border-blue-900/40 transition-all">
        {/* Top Contact Bar */}
        <div className="hidden lg:block bg-[#002B4E] text-slate-200 text-xs py-2 border-b border-blue-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                {companyInfo.city} - {companyInfo.address}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-red-500" />
                Atendimento: Seg à Sáb - 07:30 às 18:00
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-1.5 hover:text-white transition">
                <Mail className="w-3.5 h-3.5 text-red-500" />
                {companyInfo.email}
              </a>
              <a href={getWhatsappUrl()} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white transition font-medium text-emerald-400">
                <Phone className="w-3.5 h-3.5" />
                {companyInfo.displayWhatsapp}
              </a>
              <button 
                onClick={() => setIsConfigOpen(true)}
                className="flex items-center gap-1 text-xs bg-blue-900/80 hover:bg-red-600 text-white px-2.5 py-0.5 rounded transition"
                title="Editar dados da empresa"
              >
                <Settings className="w-3 h-3" />
                Painel
              </button>
            </div>
          </div>
        </div>

        {/* Main Nav Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center group">
            <ArkosLogo className="h-10 sm:h-12 w-auto" variant="light" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-100">
            <a href="#inicio" className="hover:text-red-400 transition py-1 border-b-2 border-transparent hover:border-red-500">Início</a>
            <a href="#sobre" className="hover:text-red-400 transition py-1 border-b-2 border-transparent hover:border-red-500">Sobre Nós</a>
            <a href="#servicos" className="hover:text-red-400 transition py-1 border-b-2 border-transparent hover:border-red-500">Serviços</a>
            <a href="#portfolio" className="hover:text-red-400 transition py-1 border-b-2 border-transparent hover:border-red-500">Portfólio</a>
            <a href="#avaliacoes" className="hover:text-red-400 transition py-1 border-b-2 border-transparent hover:border-red-500">Avaliações</a>
            <a href="#atendimento" className="hover:text-red-400 transition py-1 border-b-2 border-transparent hover:border-red-500">Regiões</a>
            <a href="#contato" className="hover:text-red-400 transition py-1 border-b-2 border-transparent hover:border-red-500">Contato</a>
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={getWhatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="bg-[#E20015] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-md shadow-lg hover:shadow-red-900/40 transition transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Zap className="w-4 h-4 fill-current" />
              Solicitar Orçamento
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 rounded-lg bg-blue-900/60 hover:bg-blue-800 transition"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#002B4E] border-t border-blue-900 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 hover:text-white font-medium py-2 border-b border-blue-800/40"
            >
              Início
            </a>
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 hover:text-white font-medium py-2 border-b border-blue-800/40"
            >
              Sobre Nós
            </a>
            <a
              href="#servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 hover:text-white font-medium py-2 border-b border-blue-800/40"
            >
              Serviços
            </a>
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 hover:text-white font-medium py-2 border-b border-blue-800/40"
            >
              Portfólio
            </a>
            <a
              href="#avaliacoes"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 hover:text-white font-medium py-2 border-b border-blue-800/40"
            >
              Avaliações
            </a>
            <a
              href="#atendimento"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 hover:text-white font-medium py-2 border-b border-blue-800/40"
            >
              Regiões de Atendimento
            </a>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 hover:text-white font-medium py-2"
            >
              Contato
            </a>

            <div className="pt-2 space-y-2">
              <a
                href={getWhatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#E20015] text-white font-bold text-center py-3 rounded-md flex items-center justify-center gap-2 uppercase text-xs tracking-wider shadow"
              >
                <Zap className="w-4 h-4 fill-current" />
                Solicitar Orçamento no WhatsApp
              </a>
              <button
                onClick={() => { setMobileMenuOpen(false); setIsConfigOpen(true); }}
                className="w-full bg-slate-800 text-slate-300 font-medium text-xs text-center py-2 rounded flex items-center justify-center gap-2 border border-slate-700"
              >
                <Settings className="w-3.5 h-3.5" />
                Alterar dados da Empresa (Painel)
              </button>
            </div>
          </div>
        )}
      </header>


      {/* ==========================================
          SECTION 2 — BANNER PRINCIPAL (HERO)
      ========================================== */}
      <section id="inicio" className="relative bg-[#003B6A] text-white overflow-hidden">
        {/* Background Overlay Graphic */}
        <div 
          className="absolute inset-0 z-0 opacity-20 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002544] via-[#003B6A]/90 to-[#003B6A]/75 z-0" />

        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column - Headline & Copy */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/40 text-red-300 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-red-400" />
                Serviços Elétricos de Alto Padrão
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                Soluções elétricas com <span className="text-red-500 underline decoration-red-500/40 decoration-4">qualidade</span>, segurança e confiança.
              </h1>

              <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Atendimento técnico especializado para residências, comércios e indústrias. Executamos instalações, manutenções e projetos elétricos rígidos sob as normas da ABNT.
              </p>

              {/* Dual Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href={getWhatsappUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto bg-[#E20015] hover:bg-red-700 text-white font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded-lg shadow-xl hover:shadow-red-900/50 transition transform hover:-translate-y-1 flex items-center justify-center gap-3 group"
                >
                  <Zap className="w-5 h-5 fill-current group-hover:scale-110 transition" />
                  Solicitar Orçamento
                </a>
                <a
                  href="#servicos"
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold text-sm uppercase tracking-wider px-7 py-4 rounded-lg transition backdrop-blur-sm flex items-center justify-center gap-2"
                >
                  Conheça Nossos Serviços
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>

              {/* Quick Trust Badges */}
              <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-blue-800/60 text-slate-200 text-xs sm:text-sm">
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span>Normas NBR 5410 / NR-10</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span>Atendimento Emergencial</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start col-span-2 sm:col-span-1">
                  <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span>Garantia de Serviço</span>
                </div>
              </div>

            </div>

            {/* Right Column - Hero Visual Card / Quick Form */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-800 border-4 border-white/10 relative">
                <div className="absolute -top-3.5 right-6 bg-[#E20015] text-white text-xs font-extrabold uppercase px-3 py-1 rounded-full shadow">
                  Resposta Rápida
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-extrabold text-[#003B6A] flex items-center gap-2">
                    <Zap className="w-5 h-5 text-red-600 fill-current" />
                    Orçamento Sem Compromisso
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Preencha o formulário rápido para falar direto com nossa equipe técnica pelo WhatsApp.
                  </p>
                </div>

                <form onSubmit={handleQuoteSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Seu Nome</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: João da Silva"
                      value={quoteForm.name}
                      onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:ring-2 focus:ring-[#003B6A] focus:border-[#003B6A] outline-none text-sm transition"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Telefone / Whats</label>
                      <input
                        type="tel"
                        required
                        placeholder="(84) 99999-9999"
                        value={quoteForm.phone}
                        onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:ring-2 focus:ring-[#003B6A] outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Cidade</label>
                      <input
                        type="text"
                        required
                        placeholder="Natal"
                        value={quoteForm.city}
                        onChange={(e) => setQuoteForm({ ...quoteForm, city: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:ring-2 focus:ring-[#003B6A] outline-none text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Tipo de Serviço</label>
                    <select
                      value={quoteForm.service}
                      onChange={(e) => setQuoteForm({ ...quoteForm, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:ring-2 focus:ring-[#003B6A] outline-none text-sm bg-white"
                    >
                      {services.map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                      <option value="Outro Serviço">Outro Serviço Elétrico</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Descrição Breve (Opcional)</label>
                    <textarea
                      rows={2}
                      placeholder="Descreva brevemente o que você precisa..."
                      value={quoteForm.message}
                      onChange={(e) => setQuoteForm({ ...quoteForm, message: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-md border border-slate-300 focus:ring-2 focus:ring-[#003B6A] outline-none text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#E20015] hover:bg-red-700 text-white font-extrabold text-sm uppercase tracking-wider py-3.5 rounded-lg shadow-lg hover:shadow-red-900/40 transition flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Enviar pelo WhatsApp
                  </button>

                  <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Seus dados estão protegidos. Atendimento direto e rápido.
                  </p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ==========================================
          SECTION 3 — DIFERENCIAIS
      ========================================== */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-red-600 font-extrabold text-xs uppercase tracking-widest block mb-2">Por que escolher a Arkos?</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#003B6A]">
              Diferenciais que garantem a segurança do seu patrimônio
            </h2>
            <div className="w-20 h-1 bg-[#E20015] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentials.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-xl hover:border-blue-200 transition duration-300 group relative"
                >
                  <div className="w-12 h-12 bg-[#003B6A] text-white rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#E20015] transition duration-300 shadow">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#003B6A] mb-2 group-hover:text-red-600 transition">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ==========================================
          SECTION 4 — NOSSOS SERVIÇOS
      ========================================== */}
      <section id="servicos" className="py-20 bg-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-red-600 font-extrabold text-xs uppercase tracking-widest block mb-2">Especialidades Técnicas</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#003B6A]">
              Serviços Elétricos Completos e Certificados
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Oferecemos soluções e manutenção com padrão de excelência para residências, condomínios e estabelecimentos comerciais.
            </p>
            <div className="w-20 h-1 bg-[#E20015] mx-auto mt-4 rounded-full" />
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-2xl border border-slate-200 flex flex-col justify-between overflow-hidden transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-14 h-14 bg-blue-50 text-[#003B6A] rounded-xl flex items-center justify-center group-hover:bg-[#003B6A] group-hover:text-white transition duration-300 shadow-inner">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="bg-red-50 text-red-600 text-[11px] font-bold px-2.5 py-1 rounded-full border border-red-100">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#003B6A] mb-3 group-hover:text-red-600 transition">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {service.desc}
                    </p>
                  </div>

                  <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href={getWhatsappUrl(`Olá! Gostaria de um orçamento para o serviço de: ${service.title}`)}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold text-[#E20015] hover:text-red-700 flex items-center gap-1 uppercase tracking-wider group-hover:underline"
                    >
                      Solicitar Orçamento
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <span className="text-xs text-slate-400 font-medium">NBR 5410</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Banner bottom services */}
          <div className="mt-12 bg-[#003B6A] rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold">Não encontrou o serviço elétrico que precisa?</h4>
                <p className="text-xs text-blue-200">Realizamos diagnósticos sob medida para qualquer necessidade técnica.</p>
              </div>
            </div>
            <a
              href={getWhatsappUrl("Olá! Preciso de uma consulta técnica para um serviço elétrico personalizado.")}
              target="_blank"
              rel="noreferrer"
              className="bg-[#E20015] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow transition whitespace-nowrap"
            >
              Consultar Especialista
            </a>
          </div>
        </div>
      </section>


      {/* ==========================================
          SECTION 5 — SOBRE A EMPRESA
      ========================================== */}
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100">
                <img
                  src="https://iili.io/nDfMys2.jpg" // FOTO ATUALIZADA AQUI
                  alt="Equipe Técnica Arkos Soluções Elétricas"
                  className="w-full h-[400px] sm:h-[480px] object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-2 sm:right-6 z-20 bg-[#003B6A] text-white p-6 rounded-xl shadow-xl max-w-xs border-2 border-red-500">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-10 h-10 text-red-500" />
                  <div>
                    <h5 className="font-extrabold text-sm uppercase tracking-wider">Compromisso Técnico</h5>
                    <p className="text-xs text-slate-200">Segurança total, normas ABNT e garantia em todos os serviços.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-red-600 font-extrabold text-xs uppercase tracking-widest block">Sobre a Arkos</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#003B6A] leading-tight">
                Soluções elétrica com foco em segurança, eficiência e confiabilidade
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                A <strong>{companyInfo.name}</strong> foi constituída com o propósito de oferecer serviços elétricos de padrão corporativo para residências, condomínios, estabelecimentos comerciais e indústrias.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Nossa atuação fundamenta-se na observância rigorosa das normas técnicas vigentes (como a <strong>NBR 5410</strong> para instalações de baixa e média tensão e a <strong>NR-10</strong> para segurança do trabalho), assegurando que cada projeto executado proteja a vida e o patrimônio dos nossos clientes.
              </p>

              {/* Pillars Grid */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-red-600">
                  <h4 className="font-bold text-[#003B6A] text-sm">Missão</h4>
                  <p className="text-xs text-slate-600 mt-1">Entregar soluções elétricas seguras e eficientes, superando as expectativas técnicas do mercado.</p>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-[#003B6A]">
                  <h4 className="font-bold text-[#003B6A] text-sm">Valores</h4>
                  <p className="text-xs text-slate-600 mt-1">Ética, transparência comercial, pontualidade e atualização técnica constante.</p>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <a
                  href={getWhatsappUrl("Olá! Gostaria de conhecer mais sobre os serviços da Arkos Soluções Elétricas.")}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#003B6A] hover:bg-blue-900 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-md shadow transition flex items-center gap-2"
                >
                  Falar com o Responsável Técnico
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ==========================================
          SECTION 6 — PORTFÓLIO (GALERIA INTERATIVA)
      ========================================== */}
      <section id="portfolio" className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-red-600 font-extrabold text-xs uppercase tracking-widest block mb-2">Galeria de Trabalhos</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#003B6A]">
              Portfólio de Serviços Realizados
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Confira a qualidade técnica e o alto nível de acabamento das nossas instalações e manutenções.
            </p>
            <div className="w-20 h-1 bg-[#E20015] mx-auto mt-4 rounded-full" />
          </div>

          {/* Portfolio Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
            {[
              { id: 'todos', label: 'Todos os Trabalhos' },
              { id: 'residenciais', label: 'Residenciais' },
              { id: 'comerciais', label: 'Comerciais' },
              { id: 'manutencao', label: 'Manutenção' },
              { id: 'quadros', label: 'Quadros & Painéis' }
            ].map(btn => (
              <button
                key={btn.id}
                onClick={() => setActivePortfolioFilter(btn.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition uppercase tracking-wider ${
                  activePortfolioFilter === btn.id
                    ? 'bg-[#003B6A] text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Portfolio Items Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group cursor-pointer border border-slate-200 flex flex-col"
                onClick={() => setLightboxImage(item)}
              >
                <div className="relative overflow-hidden h-60 bg-slate-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-[#003B6A]/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-2">
                    <span className="bg-red-600 text-white p-3 rounded-full shadow-lg">
                      <Eye className="w-5 h-5" />
                    </span>
                    <span className="text-white text-xs font-bold uppercase tracking-wider">Ampliar</span>
                  </div>
                  <span className="absolute top-3 left-3 bg-[#003B6A] text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded shadow">
                    {item.categoryLabel}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-[#003B6A] text-base group-hover:text-red-600 transition mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Arkos Soluções Elétricas</span>
                    <span className="text-red-600 font-bold flex items-center gap-1">Ver Detalhes &rarr;</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setLightboxImage(null)}
        >
          <div 
            className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl border border-slate-700 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-red-600 text-white p-2 rounded-full transition"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={lightboxImage.image}
              alt={lightboxImage.title}
              className="w-full max-h-[70vh] object-cover"
            />
            <div className="p-6 bg-slate-900 text-white">
              <span className="text-red-500 text-xs font-bold uppercase tracking-wider block mb-1">
                {lightboxImage.categoryLabel}
              </span>
              <h3 className="text-xl font-bold">{lightboxImage.title}</h3>
              <p className="text-sm text-slate-300 mt-2">{lightboxImage.desc}</p>
              <div className="mt-6 flex flex-wrap gap-4 items-center justify-between">
                <span className="text-xs text-slate-400">Serviço garantido por {companyInfo.name}</span>
                <a
                  href={getWhatsappUrl(`Olá! Vi o projeto "${lightboxImage.title}" no site e gostaria de um serviço semelhante.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#E20015] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded shadow flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Orçamento Similar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}


      {/* ==========================================
          SECTION 7 — AVALIAÇÕES E DEPOIMENTOS
      ========================================== */}
      <section id="avaliacoes" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full text-xs font-bold mb-3">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>Avaliações 5.0 no Google</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#003B6A]">
              O que nossos clientes dizem
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Depoimentos reais de quem confia na segurança e excelência da Arkos Soluções Elétricas.
            </p>
            <div className="w-20 h-1 bg-[#E20015] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((rev, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between relative">
                <div>
                  {/* Google Verified Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-400">{rev.date}</span>
                  </div>

                  <p className="text-slate-700 text-sm italic mb-6 leading-relaxed">
                    "{rev.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                  <div className="w-10 h-10 bg-[#003B6A] text-white font-bold rounded-full flex items-center justify-center text-sm shadow">
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#003B6A] text-sm">{rev.name}</h4>
                    <p className="text-xs text-slate-500">{rev.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ==========================================
          SECTION 8 — CHAMADA PARA ORÇAMENTO (CTA BANNER)
      ========================================== */}
      <section className="py-16 bg-[#003B6A] text-white relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
          <Zap className="w-96 h-96 text-white" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-6">
          <span className="bg-red-600/30 text-red-300 border border-red-500/40 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest inline-block">
            Atendimento Rápido e Eficiente
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            Precisa de soluções elétricas de qualidade?
          </h2>

          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Entre em contato agora mesmo com a nossa equipe técnica e solicite seu orçamento sem compromisso.
          </p>

          <div className="pt-4 flex justify-center">
            <a
              href={getWhatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="bg-[#E20015] hover:bg-red-700 text-white font-extrabold text-base uppercase tracking-wider px-10 py-5 rounded-xl shadow-2xl hover:shadow-red-900/60 transition transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <Phone className="w-6 h-6 fill-current animate-bounce" />
              Fale Conosco pelo WhatsApp
            </a>
          </div>

          <p className="text-xs text-blue-200 pt-2">
            Resposta imediata durante o horário comercial • Resposta garantida
          </p>
        </div>
      </section>


      {/* ==========================================
          SECTION 9 — ÁREA DE ATENDIMENTO
      ========================================== */}
      <section id="atendimento" className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-red-600 font-extrabold text-xs uppercase tracking-widest block mb-2">Cobertura Geográfica</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003B6A]">
              Regiões Atendidas
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Atendemos clientes residenciais, comerciais e prediais nas seguintes localidades:
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {companyInfo.regions.map((region, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 px-5 py-3 rounded-lg shadow-sm flex items-center gap-2 text-slate-700 font-bold text-sm hover:border-[#003B6A] hover:text-[#003B6A] transition"
              >
                <MapPin className="w-4 h-4 text-red-600 flex-shrink-0" />
                <span>{region}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ==========================================
          SECTION 10 — CONTATO & FORMULÁRIO
      ========================================== */}
      <section id="contato" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-red-600 font-extrabold text-xs uppercase tracking-widest block mb-1">Canais Diretos</span>
                <h2 className="text-3xl font-extrabold text-[#003B6A]">Fale com a Arkos</h2>
                <p className="text-slate-600 text-sm mt-2">
                  Estamos prontos para tirar suas dúvidas e agendar uma visita técnica especializada.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center flex-shrink-0 border border-red-100">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#003B6A] text-sm">WhatsApp & Telefone</h4>
                    <p className="text-sm font-semibold text-slate-800 mt-0.5">{companyInfo.displayWhatsapp}</p>
                    <p className="text-xs text-slate-500">{companyInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-[#003B6A] rounded-xl flex items-center justify-center flex-shrink-0 border border-blue-100">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#003B6A] text-sm">E-mail Corporativo</h4>
                    <p className="text-sm font-semibold text-slate-800 mt-0.5">{companyInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center flex-shrink-0 border border-slate-200">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#003B6A] text-sm">Endereço Principal</h4>
                    <p className="text-sm text-slate-700 mt-0.5">{companyInfo.address}</p>
                    <p className="text-xs text-slate-500">{companyInfo.city}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-50 text-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 border border-pink-100">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#003B6A] text-sm">Redes Sociais</h4>
                    <a href={companyInfo.instagramUrl} target="_blank" rel="noreferrer" className="text-sm text-red-600 font-bold hover:underline">
                      {companyInfo.instagram}
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-500 space-y-1">
                <p><strong>Horário de Funcionamento:</strong></p>
                <p>Segunda a Sexta: 07:30 às 18:00</p>
                <p>Sábado: 08:00 às 12:00</p>
                <p>Plantão de Emergência sob consulta.</p>
              </div>
            </div>

            {/* Right Interactive Map / Form Container */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                <h3 className="text-xl font-bold text-[#003B6A] mb-2">Envie uma mensagem direta</h3>
                <p className="text-xs text-slate-500 mb-6">
                  Preencha os campos abaixo para gerar um orçamento direto na tela ou via WhatsApp.
                </p>

                <form onSubmit={handleQuoteSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Nome Completo</label>
                      <input
                        type="text"
                        required
                        placeholder="Seu nome"
                        value={quoteForm.name}
                        onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#003B6A] outline-none text-sm bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">WhatsApp / Telefone</label>
                      <input
                        type="tel"
                        required
                        placeholder="(00) 00000-0000"
                        value={quoteForm.phone}
                        onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#003B6A] outline-none text-sm bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Serviço Desejado</label>
                      <select
                        value={quoteForm.service}
                        onChange={(e) => setQuoteForm({ ...quoteForm, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#003B6A] outline-none text-sm bg-white"
                      >
                        {services.map((s) => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Cidade / Bairro</label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Natal - RN"
                        value={quoteForm.city}
                        onChange={(e) => setQuoteForm({ ...quoteForm, city: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#003B6A] outline-none text-sm bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Detalhes do Projeto / Instalação</label>
                    <textarea
                      rows={4}
                      placeholder="Descreva o local, problemas encontrados ou o que precisa ser instalado..."
                      value={quoteForm.message}
                      onChange={(e) => setQuoteForm({ ...quoteForm, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#003B6A] outline-none text-sm bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#E20015] hover:bg-red-700 text-white font-extrabold text-sm uppercase tracking-wider py-4 rounded-lg shadow-lg hover:shadow-red-900/40 transition flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Solicitar Orçamento Agora
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ==========================================
          RODAPÉ (FOOTER)
      ========================================== */}
      <footer className="bg-[#003B6A] text-white pt-16 pb-12 border-t-4 border-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-blue-900/80">
            
            {/* Col 1: Logo & Info */}
            <div className="lg:col-span-4 space-y-4">
              <ArkosLogo className="h-12 w-auto" variant="light" />
              <p className="text-xs text-slate-300 leading-relaxed">
                Empresa especializada em engenharia, instalações e manutenções elétricas residenciais, comerciais e industriais. Segurança, conformidade NBR 5410 e alto padrão de acabamento.
              </p>
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={companyInfo.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 bg-blue-950 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={getWhatsappUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 bg-blue-950 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center transition"
                  title="WhatsApp"
                >
                  <Phone className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="w-9 h-9 bg-blue-950 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition"
                  title="E-mail"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-red-500">Navegação Rápida</h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li><a href="#inicio" className="hover:text-white transition">Início</a></li>
                <li><a href="#sobre" className="hover:text-white transition">Sobre a Arkos</a></li>
                <li><a href="#servicos" className="hover:text-white transition">Nossos Serviços</a></li>
                <li><a href="#portfolio" className="hover:text-white transition">Portfólio de Obras</a></li>
                <li><a href="#avaliacoes" className="hover:text-white transition">Avaliações de Clientes</a></li>
                <li><a href="#atendimento" className="hover:text-white transition">Regiões Atendidas</a></li>
                <li><a href="#contato" className="hover:text-white transition">Contato</a></li>
              </ul>
            </div>

            {/* Col 3: Services Summary */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-red-500">Serviços</h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>Instalações Elétricas</li>
                <li>Manutenção Preventiva</li>
                <li>Projetos & Laudos ART</li>
                <li>Quadros de Distribuição</li>
                <li>Iluminação LED</li>
                <li>Padrão Concessionária</li>
              </ul>
            </div>

            {/* Col 4: Contacts */}
            <div className="lg:col-span-3 space-y-3 text-xs">
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-red-500">Contato Directo</h4>
              <p className="text-slate-300 font-medium">{companyInfo.address}</p>
              <p className="text-slate-300">{companyInfo.city}</p>
              <p className="text-emerald-400 font-bold">{companyInfo.displayWhatsapp}</p>
              <p className="text-slate-300">{companyInfo.email}</p>
              <div className="pt-2">
                <button
                  onClick={() => setIsConfigOpen(true)}
                  className="bg-blue-950 hover:bg-red-600 text-white px-3 py-1.5 rounded text-[11px] font-bold flex items-center gap-1.5 transition border border-blue-800"
                >
                  <Settings className="w-3 h-3" />
                  Personalizar Dados no Painel
                </button>
              </div>
            </div>

          </div>

          {/* Copyright Row */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
            <p>© {new Date().getFullYear()} {companyInfo.name}. Todos os direitos reservados.</p>
            <p className="flex items-center gap-1 text-[11px]">
              Desenvolvido com excelência visual e conformidade técnica NBR 5410.
            </p>
          </div>
        </div>
      </footer>


      {/* ==========================================
          FLOATING WHATSAPP BUTTON (ALWAYS VISIBLE)
      ========================================== */}
      <a
        href={getWhatsappUrl()}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl transition transform hover:scale-110 flex items-center justify-center group"
        aria-label="Falar no WhatsApp"
        title="Solicite um orçamento via WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-600 rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-600 rounded-full" />
        <Phone className="w-7 h-7 fill-current" />
        
        {/* Tooltip Hover */}
        <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded shadow whitespace-nowrap opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none">
          Solicitar Orçamento
        </span>
      </a>


      {/* ==========================================
          LIVE DATA CUSTOMIZATION MODAL PANEL
          Allows client to update contacts instantly
      ========================================== */}
      {isConfigOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl p-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsConfigOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-4">
              <Settings className="w-5 h-5 text-red-600" />
              <h3 className="text-lg font-bold text-[#003B6A]">Painel de Personalização Rápida</h3>
            </div>

            <p className="text-xs text-slate-500 mb-6">
              Altere os dados abaixo para atualizar instantaneamente todo o site, números de WhatsApp, formulários e cabeçalho sem mexer no código.
            </p>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Nome da Empresa</label>
                <input
                  type="text"
                  value={companyInfo.name}
                  onChange={(e) => setCompanyInfo({ ...companyInfo, name: e.target.value })}
                  className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-[#003B6A] outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">WhatsApp (Apenas números)</label>
                  <input
                    type="text"
                    value={companyInfo.whatsapp}
                    onChange={(e) => setCompanyInfo({ ...companyInfo, whatsapp: e.target.value })}
                    className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-[#003B6A] outline-none"
                    placeholder="84999999999"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">WhatsApp (Formatado exibição)</label>
                  <input
                    type="text"
                    value={companyInfo.displayWhatsapp}
                    onChange={(e) => setCompanyInfo({ ...companyInfo, displayWhatsapp: e.target.value })}
                    className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-[#003B6A] outline-none"
                    placeholder="(84) 99999-9999"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Telefone Fixo</label>
                  <input
                    type="text"
                    value={companyInfo.phone}
                    onChange={(e) => setCompanyInfo({ ...companyInfo, phone: e.target.value })}
                    className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-[#003B6A] outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">E-mail</label>
                  <input
                    type="email"
                    value={companyInfo.email}
                    onChange={(e) => setCompanyInfo({ ...companyInfo, email: e.target.value })}
                    className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-[#003B6A] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Endereço</label>
                <input
                  type="text"
                  value={companyInfo.address}
                  onChange={(e) => setCompanyInfo({ ...companyInfo, address: e.target.value })}
                  className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-[#003B6A] outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Cidade / Estado</label>
                  <input
                    type="text"
                    value={companyInfo.city}
                    onChange={(e) => setCompanyInfo({ ...companyInfo, city: e.target.value })}
                    className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-[#003B6A] outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Instagram (@usuario)</label>
                  <input
                    type="text"
                    value={companyInfo.instagram}
                    onChange={(e) => setCompanyInfo({ ...companyInfo, instagram: e.target.value })}
                    className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-[#003B6A] outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end gap-2">
              <button
                onClick={() => setIsConfigOpen(false)}
                className="bg-[#003B6A] text-white px-5 py-2.5 rounded font-bold text-xs uppercase tracking-wider"
              >
                Salvar e Aplicar
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

// Inline Icon Components for Services Grid
function PowerIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function WrenchIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
    </svg>
  );
}