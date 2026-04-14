import { useState, useEffect, type FormEvent } from 'react';
import {
  Leaf,
  CheckCircle2,
  Phone,
  MessageCircle,
  Clock,
  ShieldCheck,
  UserCheck,
  TreeDeciduous,
  Scissors,
  MapPin,
  Mail,
  Instagram,
  Menu,
  X,
  ArrowRight,
  Calendar,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import heroPrincipal from '../fotos/Hero principal.png';
import entradaAcogedora from '../fotos/Entrada acogedora.png';
import clientesFelices from '../fotos/Clientes felices.png';
import equipoDeTrabajo from '../fotos/Equipo de trabajo.png';
import fachadaLocal from '../fotos/Fachadalocal.png';
import herramientasOrganizadas from '../fotos/Herramientas organizadas.png';
import jardineroTrabajandoUno from '../fotos/Jardineros trabajando (1 de 2).png';
import jardineroTrabajandoDos from '../fotos/Jardineros trabajando (2 de 2).png';
import antesYDespues from '../fotos/Antes y después.png';
import galeriaMinimalista from '../fotos/Galería Jardín minimalista.png';
import galeriaTropical from '../fotos/Galería Jardín tropical.png';
import galeriaZen from '../fotos/Galería Jardín zen japonés.png';

const navLinks = [
  { name: 'Inicio', href: '#home' },
  { name: 'Nosotros', href: '#about' },
  { name: 'Servicios', href: '#services' },
  { name: 'Planes', href: '#plans' },
  { name: 'Galería', href: '#gallery' },
  { name: 'Contacto', href: '#contact' }
];

const services = [
  {
    title: 'Chapeado de Jardines',
    description: 'Eliminación profesional de maleza y limpieza profunda para que su jardín luzca impecable.',
    icon: <Scissors className="w-8 h-8 text-brand-600" />,
    image: jardineroTrabajandoUno,
    details: [
      'Chapeado manual o con motoguadaña según el terreno.',
      'Limpieza de bordes, aceras y zonas cercanas a muros.',
      'Recolección de residuos vegetales en sacos.'
    ]
  },
  {
    title: 'Limpieza de Lotes',
    description: 'Mantenimiento y limpieza de lotes baldíos, eliminando vegetación no deseada y escombros.',
    icon: <TreeDeciduous className="w-8 h-8 text-brand-600" />,
    image: heroPrincipal,
    details: [
      'Despeje de maleza alta y vegetación invasiva.',
      'Retiro de ramas secas, hojas y residuos livianos.',
      'Reducción de riesgo por plagas y apariencia de abandono.'
    ]
  },
  {
    title: 'Corte de Zacate',
    description: 'Corte uniforme y detallado para mantener la salud y estética de su césped.',
    icon: <Leaf className="w-8 h-8 text-brand-600" />,
    image: jardineroTrabajandoDos,
    details: [
      'Corte parejo por niveles para proteger la raíz del zacate.',
      'Perfilado de bordes para acabado más limpio.',
      'Recomendaciones de frecuencia según estación.'
    ]
  },
  {
    title: 'Áreas Verdes',
    description: 'Mantenimiento integral de parques, jardines residenciales y áreas comunes.',
    icon: <Sparkles className="w-8 h-8 text-brand-600" />,
    image: fachadaLocal,
    details: [
      'Rondas periódicas de mantenimiento preventivo.',
      'Control visual de zonas de riego y crecimiento irregular.',
      'Presentación continua para condominios y comercios.'
    ]
  }
];

const benefits = [
  { title: 'Puntualidad', description: 'Respetamos su tiempo con horarios estrictos.', icon: <Clock /> },
  { title: 'Responsabilidad', description: 'Cuidamos cada detalle de su propiedad.', icon: <ShieldCheck /> },
  { title: 'Atención Personalizada', description: 'Soluciones a la medida de su jardín.', icon: <UserCheck /> },
  { title: 'Eco-Amigable', description: 'Comprometidos con el medio ambiente.', icon: <Leaf /> }
];

const plans = [
  {
    name: 'Servicio Ocasional',
    price: 'Desde ₡15,000',
    description: 'Ideal para limpiezas puntuales o eventos especiales.',
    features: ['Chapeado completo', 'Recolección de desechos', 'Limpieza de bordes'],
    highlight: false
  },
  {
    name: 'Plan Mensual',
    price: 'Desde ₡45,000',
    description: 'Mantenimiento constante para un jardín siempre verde.',
    features: ['2 visitas al mes', 'Control de maleza', 'Precios preferenciales', 'Asesoría básica'],
    highlight: true
  },
  {
    name: 'Plan Trimestral',
    price: 'Desde ₡120,000',
    description: 'Ahorro máximo para mantenimiento a largo plazo.',
    features: ['6 visitas programadas', 'Limpieza profunda', 'Tratamiento de suelo', 'Soporte prioritario'],
    highlight: false
  }
];

const planBasePriceMap: Record<string, number> = {
  'Servicio Ocasional': 15000,
  'Plan Mensual': 45000,
  'Plan Trimestral': 120000
};

const gallery = [
  {
    image: galeriaMinimalista,
    label: 'Jardín Minimalista',
    description: 'Composición limpia, ordenada y elegante para espacios contemporáneos.'
  },
  {
    image: galeriaTropical,
    label: 'Jardín Tropical',
    description: 'Vegetación abundante, color vibrante y sensación de frescura natural.'
  },
  {
    image: galeriaZen,
    label: 'Jardín Zen',
    description: 'Ambiente sereno y balanceado para proyectos que buscan calma visual.'
  }
];

const heroCollageImages = [
  heroPrincipal,
  entradaAcogedora,
  jardineroTrabajandoUno,
  jardineroTrabajandoDos,
  clientesFelices,
  equipoDeTrabajo
];

export default function App() {
  const contact = {
    phoneDisplay: '+506 6126-8302',
    phoneRaw: '50661268302',
    whatsappUrl: 'https://wa.me/50661268302',
    email: 'reyshawn.lawrence@unadeca.net',
    instagramHandle: 'iam.shawwn',
    instagramUrl: 'https://www.instagram.com/iam.shawwn/'
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [selectedPlanName, setSelectedPlanName] = useState<string>(plans[1].name);
  const [propertySize, setPropertySize] = useState<'pequeno' | 'mediano' | 'grande'>('mediano');
  const [urgency, setUrgency] = useState<'normal' | 'prioritaria'>('normal');
  const [showSavedPulse, setShowSavedPulse] = useState(false);
  const [isPrefsReady, setIsPrefsReady] = useState(false);
  const [contactForm, setContactForm] = useState({
    fullName: '',
    phone: '',
    service: 'Chapeado de Jardines',
    message: ''
  });
  const [contactErrors, setContactErrors] = useState<{
    fullName?: string;
    phone?: string;
    message?: string;
  }>({});

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const savedPlan = window.localStorage.getItem('selectedPlanName');
    const savedSize = window.localStorage.getItem('propertySize');
    const savedUrgency = window.localStorage.getItem('urgency');

    if (savedPlan && plans.some((plan) => plan.name === savedPlan)) {
      setSelectedPlanName(savedPlan);
    }
    if (savedSize === 'pequeno' || savedSize === 'mediano' || savedSize === 'grande') {
      setPropertySize(savedSize);
    }
    if (savedUrgency === 'normal' || savedUrgency === 'prioritaria') {
      setUrgency(savedUrgency);
    }
    setIsPrefsReady(true);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('selectedPlanName', selectedPlanName);
  }, [selectedPlanName]);

  useEffect(() => {
    window.localStorage.setItem('propertySize', propertySize);
  }, [propertySize]);

  useEffect(() => {
    window.localStorage.setItem('urgency', urgency);
  }, [urgency]);

  useEffect(() => {
    if (!isPrefsReady) {
      return;
    }

    setShowSavedPulse(true);
    const timeoutId = window.setTimeout(() => setShowSavedPulse(false), 900);

    return () => window.clearTimeout(timeoutId);
  }, [selectedPlanName, propertySize, urgency, isPrefsReady]);

  const selectedPlan = plans.find((plan) => plan.name === selectedPlanName) || plans[0];
  const selectedPlanBasePrice = planBasePriceMap[selectedPlan.name] || 0;

  const sizeMultiplier = {
    pequeno: 1,
    mediano: 1.25,
    grande: 1.6
  }[propertySize];

  const urgencyMultiplier = urgency === 'prioritaria' ? 1.15 : 1;
  const estimatedTotal = Math.round(selectedPlanBasePrice * sizeMultiplier * urgencyMultiplier);

  const formatCRC = (value: number) => {
    return new Intl.NumberFormat('es-CR', {
      style: 'currency',
      currency: 'CRC',
      maximumFractionDigits: 0
    }).format(value);
  };

  const buildGeneralQuoteMessage = () => {
    return [
      'Hola, quiero solicitar una cotización para mi jardín.',
      `Nombre: ${contactForm.fullName || 'No indicado'}`,
      `Teléfono: ${contactForm.phone || 'No indicado'}`,
      `Servicio de interés: ${contactForm.service}`,
      `Mensaje: ${contactForm.message || 'Sin mensaje adicional'}`
    ].join('\n');
  };

  const validateFullName = (value: string) => {
    if (value.trim().length < 3) {
      return 'Escribe tu nombre completo (mínimo 3 caracteres).';
    }
    return undefined;
  };

  const validatePhone = (value: string) => {
    const onlyDigitsPhone = value.replace(/\D/g, '');
    if (onlyDigitsPhone.length < 8 || onlyDigitsPhone.length > 12) {
      return 'Escribe un teléfono válido (8 a 12 dígitos).';
    }
    return undefined;
  };

  const validateMessage = (value: string) => {
    if (value.trim().length < 10) {
      return 'Cuéntanos un poco más (mínimo 10 caracteres).';
    }
    return undefined;
  };

  const validateContactForm = () => {
    const errors: {
      fullName?: string;
      phone?: string;
      message?: string;
    } = {};

    const fullNameError = validateFullName(contactForm.fullName);
    const phoneError = validatePhone(contactForm.phone);
    const messageError = validateMessage(contactForm.message);

    if (fullNameError) {
      errors.fullName = fullNameError;
    }
    if (phoneError) {
      errors.phone = phoneError;
    }
    if (messageError) {
      errors.message = messageError;
    }

    setContactErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isContactFormValid = !validateFullName(contactForm.fullName)
    && !validatePhone(contactForm.phone)
    && !validateMessage(contactForm.message);

  const handleContactFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateContactForm()) {
      return;
    }
    const encodedMessage = encodeURIComponent(buildGeneralQuoteMessage());
    window.open(`${contact.whatsappUrl}?text=${encodedMessage}`, '_blank', 'noopener,noreferrer');
  };

  const handleContactFormEmail = () => {
    if (!validateContactForm()) {
      return;
    }
    const subject = encodeURIComponent('Solicitud de cotización - ShainiandoJardines');
    const body = encodeURIComponent(buildGeneralQuoteMessage());
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  const buildPlanQuoteMessage = () => {
    return [
      `Hola, quiero cotizar el ${selectedPlan.name}.`,
      `Precio de referencia: ${selectedPlan.price}`,
      `Tamaño del terreno: ${propertySize}`,
      `Urgencia: ${urgency}`,
      `Total estimado: ${formatCRC(estimatedTotal)}`,
      `Incluye: ${selectedPlan.features.join(', ')}.`,
      '¿Me pueden confirmar disponibilidad y próximos pasos?'
    ].join('\n');
  };

  const openPlanQuoteWhatsApp = () => {
    const encodedMessage = encodeURIComponent(buildPlanQuoteMessage());
    window.open(`${contact.whatsappUrl}?text=${encodedMessage}`, '_blank', 'noopener,noreferrer');
  };

  const openPlanQuoteEmail = () => {
    const subject = encodeURIComponent(`Cotización ${selectedPlan.name} - ShainiandoJardines`);
    const body = encodeURIComponent(buildPlanQuoteMessage());
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen">
      <nav className={`glass-nav transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-brand-600 p-2 rounded-lg">
              <Leaf className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-brand-900">Shainiando<span className="text-brand-600">Jardines</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-slate-600 hover:text-brand-600 font-medium transition-colors">
                {link.name}
              </a>
            ))}
            <a href="#contact" className="btn-primary py-2 px-6 text-sm">
              Cotizar Ahora
            </a>
          </div>

          <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-700">
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0d2615]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(134,239,172,0.25),transparent_35%),linear-gradient(120deg,#0d2615,#102f1b_45%,#1a3e23)]" />
          <div className="absolute inset-0 opacity-25 bg-[linear-gradient(125deg,transparent_0%,transparent_35%,rgba(255,255,255,0.07)_35%,rgba(255,255,255,0.07)_38%,transparent_38%,transparent_100%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl text-white">
              <div className="inline-flex items-start gap-3 p-4 rounded-2xl bg-white/10 border border-white/20 mb-6 backdrop-blur-sm">
                <Calendar className="w-6 h-6 text-brand-300 mt-0.5" />
                <div>
                  <p className="text-sm uppercase tracking-widest text-brand-200/80">Atención Rápida</p>
                  <p className="font-semibold text-brand-100">Cotizaciones en menos de 24 horas y visitas coordinadas por zona</p>
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                Tu jardín, <span className="text-brand-300">nuestra pasión.</span>
              </h1>
              <p className="text-xl text-slate-100 mb-10 leading-relaxed">
                Brindamos servicios profesionales de chapeado y mantenimiento para que tus espacios exteriores luzcan impecables, saludables y llenos de vida.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-primary">
                  <Phone className="w-5 h-5" /> Solicitar Cotización
                </a>
                <a href="#services" className="btn-secondary !bg-white/10 !border-white/20 !text-white hover:!bg-white/20">
                  Ver Servicios
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 text-sm">
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">Cobertura local en Costa Rica</span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">Atención por WhatsApp y correo</span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">Planes mensuales y trimestrales</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} className="hero-collage">
              <div className="hero-collage-track">
                {heroCollageImages.map((image, index) => (
                  <div key={image} className="hero-collage-item" style={{ transform: `rotate(${index * 60}deg) translateY(-220px)` }}>
                    <img src={image} alt="Trabajo de jardinería" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-brand-900/75 border border-brand-200/30 backdrop-blur-md rounded-full w-40 h-40 flex flex-col items-center justify-center text-center px-4 shadow-2xl">
                  <Leaf className="w-8 h-8 text-brand-300 mb-2" />
                  <p className="text-brand-100 font-bold text-sm leading-tight">Mantenimiento Profesional</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
              <img
                src={entradaAcogedora}
                alt="Entrada acogedora del jardín"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-10 -right-10 bg-brand-600 text-white p-8 rounded-2xl hidden lg:block shadow-xl">
                <p className="text-4xl font-bold mb-1">100%</p>
                <p className="text-brand-100 font-medium">Compromiso Local</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-4">Sobre Nosotros</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-6">Dedicación y Excelencia en cada rincón verde</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                En ShainiandoJardines, entendemos que un jardín bien cuidado es el reflejo de un hogar u oficina saludable. Somos un equipo costarricense apasionado por la naturaleza y el orden.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-brand-100 p-3 rounded-xl h-fit">
                    <CheckCircle2 className="text-brand-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Misión</h4>
                    <p className="text-slate-600">Brindar servicio de chapeado y mantenimiento de jardines con calidad, responsabilidad y puntualidad.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-brand-100 p-3 rounded-xl h-fit">
                    <CheckCircle2 className="text-brand-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Visión</h4>
                    <p className="text-slate-600">Ser una empresa reconocida a nivel local por su excelencia, confianza y compromiso ambiental.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services" className="section-padding">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-4">Nuestros Servicios</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Soluciones integrales para tu jardín</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Ofrecemos una amplia gama de servicios especializados para mantener tus áreas verdes en óptimas condiciones durante todo el año.
            </p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const isExpanded = expandedService === service.title;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group"
              >
                <div className="mb-6 overflow-hidden rounded-xl h-48 -mx-8 -mt-8">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="bg-brand-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">{service.icon}</div>
                <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <button type="button" onClick={() => setExpandedService(isExpanded ? null : service.title)} className="text-brand-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  {isExpanded ? 'Ver menos' : 'Saber más'} <ArrowRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                </button>
                {isExpanded && (
                  <div className="mt-5 pt-5 border-t border-slate-200 space-y-2 text-slate-600 text-sm">
                    {service.details.map((detail) => (
                      <p key={detail} className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" /> {detail}</p>
                    ))}
                    <a href="#contact" className="inline-flex mt-2 text-brand-700 font-semibold">Quiero este servicio</a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="bg-brand-900 text-white section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-800/20 skew-x-12 translate-x-20" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-brand-400 font-bold tracking-wider uppercase text-sm mb-4">¿Por qué elegirnos?</h2>
              <h3 className="text-4xl font-bold mb-8">Diferenciadores que marcan la diferencia</h3>
              <div className="grid sm:grid-cols-2 gap-8">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="bg-brand-700/50 p-3 rounded-xl h-fit text-brand-300">{benefit.icon}</div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{benefit.title}</h4>
                      <p className="text-brand-100/70 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10">
              <h4 className="text-2xl font-bold mb-6 text-center">Solicita tu presupuesto gratuito</h4>
              <form className="space-y-4">
                <input type="text" placeholder="Tu Nombre" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-400 transition-colors placeholder:text-white/40" />
                <input type="email" placeholder="Correo Electrónico" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-400 transition-colors placeholder:text-white/40" />
                <textarea placeholder="¿En qué podemos ayudarte?" rows={4} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-400 transition-colors placeholder:text-white/40"></textarea>
                <button className="btn-primary w-full !shadow-none">Enviar Mensaje</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="plans" className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-4">Planes y Modalidades</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">Opciones flexibles para cada necesidad</h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Ya sea un mantenimiento puntual o un cuidado constante, tenemos el plan perfecto para ti.</p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <motion.div key={plan.name} whileHover={{ y: -10 }} className={`p-10 rounded-3xl border ${plan.highlight ? 'bg-white border-brand-500 shadow-2xl relative' : 'bg-white border-slate-200 shadow-sm'}`}>
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-sm font-bold">Más Popular</span>
              )}
              <h4 className="text-2xl font-bold mb-2">{plan.name}</h4>
              <p className="text-slate-500 mb-6">{plan.description}</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-brand-900">{plan.price}</span>
              </div>
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 className="text-brand-500 w-5 h-5" /> {feature}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => setSelectedPlanName(plan.name)}
                className={`w-full py-4 rounded-xl font-bold transition-all ${selectedPlanName === plan.name ? 'bg-brand-900 text-white' : plan.highlight ? 'bg-brand-600 text-white hover:bg-brand-700' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}
              >
                {selectedPlanName === plan.name ? 'Plan Seleccionado' : 'Seleccionar Plan'}
              </button>
            </motion.div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedPlan.name}
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.28 }}
            className="max-w-4xl mx-auto mt-8 rounded-2xl border border-brand-300 bg-brand-50 px-5 py-4"
          >
            <p className="text-brand-800 font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Seleccionaste: {selectedPlan.name} ({selectedPlan.price})
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="max-w-4xl mx-auto mt-12 bg-white border border-brand-200 shadow-lg rounded-3xl p-8">
          <p className="text-sm font-bold text-brand-700 uppercase tracking-wider mb-2">Plan elegido</p>
          <h4 className="text-2xl font-bold text-slate-900 mb-2">{selectedPlan.name}</h4>
          <p className="text-slate-600 mb-6">{selectedPlan.description}</p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="text-xs font-semibold uppercase text-slate-500">Tamaño del terreno</label>
              <select
                value={propertySize}
                onChange={(event) => setPropertySize(event.target.value as 'pequeno' | 'mediano' | 'grande')}
                className="w-full mt-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:border-brand-500"
              >
                <option value="pequeno">Pequeño</option>
                <option value="mediano">Mediano</option>
                <option value="grande">Grande</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase text-slate-500">Urgencia</label>
              <select
                value={urgency}
                onChange={(event) => setUrgency(event.target.value as 'normal' | 'prioritaria')}
                className="w-full mt-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:border-brand-500"
              >
                <option value="normal">Normal</option>
                <option value="prioritaria">Prioritaria</option>
              </select>
            </div>
            <div className="bg-brand-50 border border-brand-200 rounded-xl px-4 py-3">
              <p className="text-xs font-semibold uppercase text-brand-700">Total estimado</p>
              <p className="text-xl font-bold text-brand-900 mt-1">{formatCRC(estimatedTotal)}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button type="button" onClick={openPlanQuoteWhatsApp} className="btn-primary flex-1">
              <MessageCircle className="w-5 h-5" /> Confirmar y Cotizar por WhatsApp
            </button>
            <button type="button" onClick={openPlanQuoteEmail} className="btn-secondary flex-1">
              <Mail className="w-5 h-5" /> Confirmar y Cotizar por Correo
            </button>
          </div>
          <p className="text-slate-500 text-sm mt-4">Se abrirá un mensaje automático con el plan seleccionado para que solo tengas que enviarlo.</p>
        </div>
      </section>

      <section id="gallery" className="section-padding">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-4">Nuestra Galería</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">Resultados que hablan por sí solos</h3>
        </div>

        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-8 items-center rounded-[2rem] border border-slate-200 bg-slate-50 p-6 md:p-8">
            <div className="relative overflow-hidden rounded-[1.75rem] shadow-xl">
              <img src={antesYDespues} alt="Comparación antes y después de un jardín" className="h-full min-h-[320px] w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-6 text-white">
                <p className="text-xs font-bold tracking-[0.3em] text-brand-200 uppercase mb-2">Transformación</p>
                <h4 className="text-2xl md:text-3xl font-bold">Antes y después del mantenimiento</h4>
              </div>
            </div>
            <div className="space-y-4">
              <span className="inline-flex rounded-full bg-brand-100 px-3 py-1 text-sm font-semibold text-brand-700">Cambio visible</span>
              <h4 className="text-3xl font-bold text-slate-900">Resultados reales que elevan el espacio</h4>
              <p className="text-slate-600 leading-relaxed">
                Esta sección muestra el tipo de transformación que buscamos en cada visita: limpieza, estructura y una mejor presencia visual para el jardín.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm text-slate-600">
                <div className="rounded-2xl bg-white p-4 border border-slate-200">Mejor definición de bordes</div>
                <div className="rounded-2xl bg-white p-4 border border-slate-200">Presentación más limpia</div>
                <div className="rounded-2xl bg-white p-4 border border-slate-200">Mayor sensación de orden</div>
                <div className="rounded-2xl bg-white p-4 border border-slate-200">Impacto visual inmediato</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {gallery.map((item) => (
              <div key={item.label} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <img src={item.image} alt={item.label} className="h-72 w-full object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{item.label}</h4>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-padding bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-brand-400 font-bold tracking-wider uppercase text-sm mb-4">Contacto</h2>
              <h3 className="text-4xl font-bold mb-8">¿Listo para transformar tu jardín?</h3>
              <p className="text-slate-400 text-lg mb-6">
                Estamos en Costa Rica, listos para atenderte. Contáctanos por cualquiera de nuestros medios y solicita tu cotización sin compromiso.
              </p>
              <div className="grid sm:grid-cols-3 gap-3 mb-12 text-sm">
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">Respuesta: menos de 24h</div>
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">Horario: Lun - Sáb</div>
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">Cobertura local</div>
              </div>

              <div className="space-y-8">
                <a href={`tel:+${contact.phoneRaw}`} className="flex items-center gap-6 rounded-2xl p-2 -m-2 hover:bg-white/5 transition-colors" aria-label={`Llamar al ${contact.phoneDisplay}`}>
                  <div className="bg-brand-600/20 p-4 rounded-2xl text-brand-400">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Llámanos</p>
                    <p className="text-xl font-bold">{contact.phoneDisplay}</p>
                  </div>
                </a>
                <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 rounded-2xl p-2 -m-2 hover:bg-white/5 transition-colors" aria-label={`Escribir por WhatsApp al ${contact.phoneDisplay}`}>
                  <div className="bg-brand-600/20 p-4 rounded-2xl text-brand-400">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">WhatsApp</p>
                    <p className="text-xl font-bold">{contact.phoneDisplay}</p>
                  </div>
                </a>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-6 rounded-2xl p-2 -m-2 hover:bg-white/5 transition-colors" aria-label={`Enviar correo a ${contact.email}`}>
                  <div className="bg-brand-600/20 p-4 rounded-2xl text-brand-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Correo</p>
                    <p className="text-xl font-bold break-all">{contact.email}</p>
                  </div>
                </a>
                <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 rounded-2xl p-2 -m-2 hover:bg-white/5 transition-colors" aria-label={`Abrir Instagram ${contact.instagramHandle}`}>
                  <div className="bg-brand-600/20 p-4 rounded-2xl text-brand-400">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Instagram</p>
                    <p className="text-xl font-bold">@{contact.instagramHandle}</p>
                  </div>
                </a>
                <div className="flex items-center gap-6 rounded-2xl p-2">
                  <div className="bg-brand-600/20 p-4 rounded-2xl text-brand-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Ubicación</p>
                    <p className="text-xl font-bold">Costa Rica (Cobertura Local)</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                  <img src={clientesFelices} alt="Clientes felices en un jardín" className="h-48 w-full object-cover" />
                  <div className="p-4">
                    <p className="font-semibold text-white">Experiencia cercana</p>
                    <p className="text-sm text-slate-400 mt-1">Queremos que el resultado se sienta limpio, útil y agradable desde la primera visita.</p>
                  </div>
                </div>
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                  <img src={herramientasOrganizadas} alt="Herramientas de jardinería organizadas" className="h-48 w-full object-cover" />
                  <div className="p-4">
                    <p className="font-semibold text-white">Orden en cada servicio</p>
                    <p className="text-sm text-slate-400 mt-1">Trabajamos con equipo listo y procesos claros para ejecutar cada mantenimiento con eficiencia.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl text-slate-900">
              <h4 className="text-2xl font-bold mb-8">Envíanos un mensaje</h4>
              <form className="space-y-6" onSubmit={handleContactFormSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Nombre Completo</label>
                    <input
                      type="text"
                      value={contactForm.fullName}
                      onChange={(event) => {
                        setContactForm((prev) => ({ ...prev, fullName: event.target.value }));
                        setContactErrors((prev) => ({ ...prev, fullName: validateFullName(event.target.value) }));
                      }}
                      aria-invalid={Boolean(contactErrors.fullName)}
                      className={`w-full bg-slate-50 border rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500 transition-colors ${contactErrors.fullName ? 'border-red-400' : 'border-slate-200'}`}
                    />
                    {contactErrors.fullName && <p className="text-xs text-red-600">{contactErrors.fullName}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Teléfono</label>
                    <input
                      type="tel"
                      inputMode="numeric"
                      value={contactForm.phone}
                      onChange={(event) => {
                        setContactForm((prev) => ({ ...prev, phone: event.target.value }));
                        setContactErrors((prev) => ({ ...prev, phone: validatePhone(event.target.value) }));
                      }}
                      aria-invalid={Boolean(contactErrors.phone)}
                      className={`w-full bg-slate-50 border rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500 transition-colors ${contactErrors.phone ? 'border-red-400' : 'border-slate-200'}`}
                    />
                    {contactErrors.phone && <p className="text-xs text-red-600">{contactErrors.phone}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Servicio de Interés</label>
                  <select
                    value={contactForm.service}
                    onChange={(event) => setContactForm((prev) => ({ ...prev, service: event.target.value }))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500 transition-colors"
                  >
                    <option>Chapeado de Jardines</option>
                    <option>Limpieza de Lotes</option>
                    <option>Mantenimiento General</option>
                    <option>Corte de Zacate</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Mensaje</label>
                  <textarea
                    rows={4}
                    value={contactForm.message}
                    onChange={(event) => {
                      setContactForm((prev) => ({ ...prev, message: event.target.value }));
                      setContactErrors((prev) => ({ ...prev, message: validateMessage(event.target.value) }));
                    }}
                    aria-invalid={Boolean(contactErrors.message)}
                    className={`w-full bg-slate-50 border rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500 transition-colors ${contactErrors.message ? 'border-red-400' : 'border-slate-200'}`}
                  ></textarea>
                  {contactErrors.message && <p className="text-xs text-red-600">{contactErrors.message}</p>}
                </div>
                <p className={`text-sm font-medium ${isContactFormValid ? 'text-emerald-600' : 'text-amber-600'}`}>
                  {isContactFormValid ? 'Formulario listo para enviar.' : 'Completa nombre, teléfono y mensaje para enviar.'}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <button type="submit" disabled={!isContactFormValid} className="btn-primary w-full py-4 disabled:opacity-60 disabled:cursor-not-allowed">Solicitar por WhatsApp</button>
                  <button type="button" disabled={!isContactFormValid} onClick={handleContactFormEmail} className="btn-secondary w-full py-4 disabled:opacity-60 disabled:cursor-not-allowed">Solicitar por Correo</button>
                </div>
              </form>
              <p className="mt-4 text-sm text-slate-500">Al enviar, se abrirá WhatsApp o correo con el mensaje listo para confirmar.</p>
              <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
                <img src={equipoDeTrabajo} alt="Equipo de trabajo de jardinería" className="h-52 w-full object-cover" />
                <div className="p-5">
                  <p className="text-sm font-bold uppercase tracking-wider text-brand-700">Equipo local</p>
                  <p className="mt-2 text-slate-600">Un equipo comprometido con jardines residenciales, lotes y áreas verdes en cobertura local.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-slate-800 pb-12">
            <div className="flex items-center gap-2">
              <div className="bg-brand-600 p-2 rounded-lg">
                <Leaf className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Shainiando<span className="text-brand-600">Jardines</span></span>
            </div>

            <div className="flex gap-6">
              <a href={`tel:+${contact.phoneRaw}`} className="bg-slate-900 p-3 rounded-full hover:bg-brand-600 transition-colors" aria-label="Llamar por teléfono">
                <Phone className="w-5 h-5" />
              </a>
              <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="bg-slate-900 p-3 rounded-full hover:bg-brand-600 transition-colors" aria-label="Abrir Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={`mailto:${contact.email}`} className="bg-slate-900 p-3 rounded-full hover:bg-brand-600 transition-colors" aria-label="Enviar correo">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} ShainiandoJardines. Todos los derechos reservados.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos</a>
            </div>
          </div>
        </div>
      </footer>

      <a
        href={contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir chat de WhatsApp"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all z-50 flex items-center justify-center"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute -top-2 -left-2 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
        </span>
      </a>

      <AnimatePresence>
        {showSavedPulse && (
          <motion.div
            initial={{ opacity: 0, y: -14, x: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            exit={{ opacity: 0, y: -14, x: 14, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className="fixed top-6 right-6 z-[60] px-4 py-3 rounded-xl border border-emerald-300 bg-emerald-50/95 backdrop-blur-sm text-emerald-800 text-sm font-semibold shadow-xl"
          >
            Preferencias guardadas
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
