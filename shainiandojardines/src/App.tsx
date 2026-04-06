import { useState, useEffect } from 'react';
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
  Facebook, 
  Menu, 
  X,
  ArrowRight,
  Calendar,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Inicio', href: '#home' },
  { name: 'Nosotros', href: '#about' },
  { name: 'Servicios', href: '#services' },
  { name: 'Planes', href: '#plans' },
  { name: 'Galería', href: '#gallery' },
  { name: 'Contacto', href: '#contact' },
];

const services = [
  {
    title: 'Chapeado de Jardines',
    description: 'Eliminación profesional de maleza y limpieza profunda para que su jardín luzca impecable.',
    icon: <Scissors className="w-8 h-8 text-brand-600" />,
    image: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Limpieza de Lotes',
    description: 'Mantenimiento y limpieza de lotes baldíos, eliminando vegetación no deseada y escombros.',
    icon: <TreeDeciduous className="w-8 h-8 text-brand-600" />,
    image: 'https://images.unsplash.com/photo-1557429287-b2e26467fc2b?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Corte de Zacate',
    description: 'Corte uniforme y detallado para mantener la salud y estética de su césped.',
    icon: <Leaf className="w-8 h-8 text-brand-600" />,
    image: 'https://images.unsplash.com/photo-1591930486161-3d2983248241?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Áreas Verdes',
    description: 'Mantenimiento integral de parques, jardines residenciales y áreas comunes.',
    icon: <Sparkles className="w-8 h-8 text-brand-600" />,
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800'
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

const gallery = [
  { before: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=800', after: 'https://images.unsplash.com/photo-1558904541-efa8c1965f1e?auto=format&fit=crop&q=80&w=800', label: 'Residencial' },
  { before: 'https://images.unsplash.com/photo-1557429287-b2e26467fc2b?auto=format&fit=crop&q=80&w=800', after: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=800', label: 'Lote Baldío' }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`glass-nav transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-brand-600 p-2 rounded-lg">
              <Leaf className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-brand-900">Shainiando<span className="text-brand-600">Jardines</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-600 hover:text-brand-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="btn-primary py-2 px-6 text-sm">
              Cotizar Ahora
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
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
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-slate-700"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558904541-efa8c1965f1e?auto=format&fit=crop&q=80&w=1920" 
            alt="Jardín perfecto" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <span className="inline-block py-1 px-4 rounded-full bg-brand-600/20 border border-brand-400/30 text-brand-300 font-semibold text-sm mb-6 backdrop-blur-sm">
              Expertos en Mantenimiento de Áreas Verdes
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Tu jardín, <span className="text-brand-400">nuestra pasión.</span>
            </h1>
            <p className="text-xl text-slate-200 mb-10 leading-relaxed">
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
          </motion.div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=1000" 
                alt="Trabajo de jardinería" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-brand-600 text-white p-8 rounded-2xl hidden lg:block shadow-xl">
                <p className="text-4xl font-bold mb-1">100%</p>
                <p className="text-brand-100 font-medium">Compromiso Local</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
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

      {/* Services */}
      <section id="services" className="section-padding">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-4">Nuestros Servicios</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Soluciones integrales para tu jardín</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Ofrecemos una amplia gama de servicios especializados para mantener tus áreas verdes en óptimas condiciones durante todo el año.
            </p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card group"
            >
              <div className="mb-6 overflow-hidden rounded-xl h-48 -mx-8 -mt-8">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="bg-brand-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{service.title}</h4>
              <p className="text-slate-600 mb-6">{service.description}</p>
              <a href="#contact" className="text-brand-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Saber más <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits */}
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
                    <div className="bg-brand-700/50 p-3 rounded-xl h-fit text-brand-300">
                      {benefit.icon}
                    </div>
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

      {/* Plans */}
      <section id="plans" className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-4">Planes y Modalidades</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">Opciones flexibles para cada necesidad</h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ya sea un mantenimiento puntual o un cuidado constante, tenemos el plan perfecto para ti.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <motion.div 
              key={plan.name}
              whileHover={{ y: -10 }}
              className={`p-10 rounded-3xl border ${plan.highlight ? 'bg-white border-brand-500 shadow-2xl relative' : 'bg-white border-slate-200 shadow-sm'}`}
            >
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Más Popular
                </span>
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
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.highlight ? 'bg-brand-600 text-white hover:bg-brand-700' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                Seleccionar Plan
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="section-padding">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-4">Nuestra Galería</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">Resultados que hablan por sí solos</h3>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {gallery.map((item, idx) => (
            <div key={idx} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative group">
                  <img src={item.before} alt="Antes" className="rounded-2xl h-64 w-full object-cover" referrerPolicy="no-referrer" />
                  <span className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-lg text-xs font-bold backdrop-blur-sm">ANTES</span>
                </div>
                <div className="relative group">
                  <img src={item.after} alt="Después" className="rounded-2xl h-64 w-full object-cover border-4 border-brand-500" referrerPolicy="no-referrer" />
                  <span className="absolute top-4 left-4 bg-brand-600 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-lg">DESPUÉS</span>
                </div>
              </div>
              <p className="text-center font-bold text-slate-700 text-lg">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-brand-400 font-bold tracking-wider uppercase text-sm mb-4">Contacto</h2>
              <h3 className="text-4xl font-bold mb-8">¿Listo para transformar tu jardín?</h3>
              <p className="text-slate-400 text-lg mb-12">
                Estamos en Costa Rica, listos para atenderte. Contáctanos por cualquiera de nuestros medios y solicita tu cotización sin compromiso.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="bg-brand-600/20 p-4 rounded-2xl text-brand-400">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Llámanos</p>
                    <p className="text-xl font-bold">+506 8888-8888</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="bg-brand-600/20 p-4 rounded-2xl text-brand-400">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">WhatsApp</p>
                    <p className="text-xl font-bold">+506 7777-7777</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="bg-brand-600/20 p-4 rounded-2xl text-brand-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Ubicación</p>
                    <p className="text-xl font-bold">Costa Rica (Cobertura Local)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl text-slate-900">
              <h4 className="text-2xl font-bold mb-8">Envíanos un mensaje</h4>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Nombre Completo</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Teléfono</label>
                    <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500 transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Servicio de Interés</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500 transition-colors">
                    <option>Chapeado de Jardines</option>
                    <option>Limpieza de Lotes</option>
                    <option>Mantenimiento General</option>
                    <option>Corte de Zacate</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Mensaje</label>
                  <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-500 transition-colors"></textarea>
                </div>
                <button className="btn-primary w-full py-4">Solicitar Cotización</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
              <a href="#" className="bg-slate-900 p-3 rounded-full hover:bg-brand-600 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="bg-slate-900 p-3 rounded-full hover:bg-brand-600 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="bg-slate-900 p-3 rounded-full hover:bg-brand-600 transition-colors"><Mail className="w-5 h-5" /></a>
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

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/50677777777" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all z-50 flex items-center justify-center"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute -top-2 -left-2 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
        </span>
      </a>
    </div>
  );
}
