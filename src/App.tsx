import { useState } from 'react';
import { 
  Home, 
  Users, 
  BookOpen, 
  FileText, 
  Heart, 
  ShieldCheck, 
  UserPlus, 
  CreditCard,
  Menu,
  X,
  ChevronRight,
  Trophy,
  Dumbbell,
  Target,
  Zap,
  Search,
  Bell,
  MessageSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import type { SectionId, Section } from './types.ts';

const SECTIONS: Section[] = [
  { id: 'selection', title: 'Selección', description: 'Preselección y Selección', icon: 'Search', color: 'brand-gold' },
  { id: 'training', title: 'Capacitación', description: 'Entrenamiento técnico', icon: 'Zap', color: 'brand-red' },
  { id: 'manual', title: 'Estructura', description: 'Manual de Funciones', icon: 'FileText', color: 'brand-white' },
  { id: 'wellbeing', title: 'Social', description: 'Bienestar Laboral', icon: 'Trophy', color: 'brand-gold' },
  { id: 'sst', title: 'Seguridad', description: 'SST y Prevención', icon: 'ShieldCheck', color: 'brand-red' },
  { id: 'induction', title: 'Inicio', description: 'Inducción corporativa', icon: 'UserPlus', color: 'brand-white' },
  { id: 'payroll', title: 'Legal', description: 'Vinculación y Nómina', icon: 'CreditCard', color: 'brand-gold' },
  { id: 'dashboard', title: 'Pagos', description: 'Financiero/Nómina', icon: 'CreditCard', color: 'brand-red' },
];

const ICON_MAP: Record<string, any> = {
  Home, Users, BookOpen, FileText, Heart, ShieldCheck, UserPlus, CreditCard, Trophy, Dumbbell, Target, Zap, Search, Bell, MessageSquare
};

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('dashboard');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-black text-white font-sans flex flex-col overflow-x-hidden">
      {/* Header Section */}
      <header className="w-full border-b border-brand-gold/30 bg-black/40 backdrop-blur-md py-4 px-4 md:px-8 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setActiveSection('dashboard')}
            className="flex items-center space-x-4 group"
          >
            <div className="w-10 h-10 bg-brand-red border-2 border-brand-gold flex items-center justify-center font-display font-black italic text-xl transform skew-x-[-10deg] shadow-[0_0_15px_rgba(139,0,0,0.5)] group-hover:scale-110 transition-transform">
              DS
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-black italic tracking-tighter uppercase leading-none">
                Duke <span className="text-brand-gold">Sport</span>
              </h1>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 leading-none mt-1 hidden sm:block">
                Portal de Alto Rendimiento
              </p>
            </div>
          </button>
        </div>
        
        <div className="flex items-center space-x-4 md:space-x-6">
          <div className="hidden md:block text-right border-r border-white/10 pr-4">
            <p className="text-xs font-bold uppercase tracking-tight">Carlos Guerrero</p>
            <p className="text-[10px] text-brand-gold uppercase tracking-wider font-semibold">Líder de Producción</p>
          </div>
          <div className="w-10 h-10 rounded-full border border-brand-gold bg-zinc-800 flex items-center justify-center overflow-hidden hover:scale-105 transition-transform cursor-pointer">
             <Users className="text-brand-gold" size={20} />
          </div>
          <button 
            className="md:hidden text-brand-gold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden relative">
        <AnimatePresence mode="wait">
          {activeSection === 'dashboard' ? (
            <motion.main 
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col md:flex-row"
            >
              {/* Left Branding / Motivational Panel */}
              <aside className="w-full md:w-[320px] sidebar-gradient p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-brand-gold/10">
                <div className="space-y-6">
                  <motion.h2 
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="text-6xl font-black italic leading-[0.85] tracking-tighter uppercase"
                  >
                    Disciplina <br/> <span className="text-brand-gold">Energía</span> <br/> Éxito
                  </motion.h2>
                  <div className="h-1 w-20 bg-brand-gold block" />
                  <p className="text-sm text-zinc-300 leading-relaxed font-medium">
                    Bienvenido al centro de conocimiento Duke Sport. Aquí transformamos el esfuerzo en resultados medibles y productos de élite.
                  </p>
                </div>
                
                <div className="bg-black/40 p-6 border border-brand-gold/20 rounded-lg mt-10 md:mt-0">
                  <p className="text-[10px] uppercase tracking-widest text-brand-gold mb-2 font-black">Cifra del Día</p>
                  <p className="text-4xl font-black leading-none mb-1 tracking-tighter">98.4%</p>
                  <p className="text-[10px] text-zinc-400 uppercase font-bold">Cumplimiento en Calidad Textil</p>
                </div>
              </aside>

              {/* Dashboard Grid Area */}
              <section className="flex-1 p-4 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-4 grid-dot-pattern bg-repeat overflow-y-auto">
                
                {/* Blog Empresarial Main Item */}
                <div 
                  className="col-span-2 md:col-span-4 bg-zinc-900/50 border border-zinc-800 p-4 md:p-8 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6 hover:border-brand-gold/30 transition-all group overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <div className="flex items-center space-x-6 relative z-10 w-full md:w-auto">
                    <span className="text-4xl filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">📰</span>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-black uppercase tracking-tight leading-tight">
                        Blog Empresarial: <span className="text-brand-gold italic">Novedades Duke</span>
                      </h3>
                      <p className="text-xs text-zinc-400 mt-1 max-w-md">Lanzamiento de línea 'Endurance 2024'. Consulta los detalles de producción y marketing.</p>
                    </div>
                  </div>
                  <button className="w-full md:w-auto bg-white text-brand-black px-8 py-3 text-xs font-black uppercase tracking-widest hover:bg-brand-gold shadow-[4px_4px_0_rgba(139,0,0,0.5)] transition-all relative z-10 active:translate-y-1">
                    Leer Blog
                  </button>
                </div>

                {/* Internal App Navigation Items */}
                {SECTIONS.filter(s => s.id !== 'dashboard').map((section, idx) => (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => setActiveSection(section.id)}
                    className={`group bg-zinc-900 border-l-4 p-5 flex flex-col justify-between hover:bg-zinc-800 transition-all cursor-pointer h-40 relative overflow-hidden ${
                      section.color === 'brand-gold' ? 'border-brand-gold' : 
                      section.color === 'brand-red' ? 'border-brand-red' : 'border-white'
                    }`}
                  >
                    <div className="absolute top-0 right-0 p-2 opacity-5 scale-150 group-hover:opacity-10 transition-opacity">
                      {ICON_MAP[section.icon] && <section.icon size={64} style={{ color: section.color === 'brand-gold' ? '#C5A022' : '#7f1d1d'}} />}
                    </div>
                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">
                      {String(idx + 1).padStart(2, '0')}. {section.title}
                    </p>
                    <div className="my-2 text-3xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all origin-left">
                       {ICON_MAP[section.icon] && <section.icon size={32} className={section.id === 'training' ? 'text-brand-gold' : ''} />}
                    </div>
                    <h4 className="text-sm font-black uppercase tracking-tight group-hover:text-brand-gold transition-colors">{section.description}</h4>
                  </motion.div>
                ))}

                {/* Bottom Alert Section */}
                <div className="col-span-2 md:col-span-4 flex flex-col md:flex-row items-center bg-brand-red/10 border border-brand-red/30 p-4 rounded-sm gap-4 mt-4">
                  <div className="skew-badge bg-brand-red text-white whitespace-nowrap">ALERTA SST</div>
                  <p className="text-xs text-zinc-300 italic text-center md:text-left">
                    "Recuerda el uso obligatorio de elementos de protección personal en el área de corte. Tu seguridad es nuestro compromiso de alto rendimiento."
                  </p>
                </div>
              </section>
            </motion.main>
          ) : (
            <motion.main 
              key="content"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1 p-4 md:p-10 relative overflow-y-auto"
            >
              <SectionContent 
                section={SECTIONS.find(s => s.id === activeSection)!} 
                onBack={() => setActiveSection('dashboard')} 
              />
            </motion.main>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Nav */}
      <footer className="bg-brand-black border-t border-zinc-800 py-4 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center text-[9px] md:text-[10px] text-zinc-500 font-bold gap-4">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <a href="#" className="hover:text-brand-gold transition-colors uppercase tracking-[0.2em]">Reglamento Interno</a>
          <a href="#" className="hover:text-brand-gold transition-colors uppercase tracking-[0.2em]">Ética Corporativa</a>
          <a href="#" className="hover:text-brand-gold transition-colors uppercase tracking-[0.2em]">Soporte IT</a>
        </div>
        <div className="uppercase tracking-[0.3em] text-brand-red text-center">
          Duke Sport &copy; 2024 — Rendimiento Sin Límites
        </div>
      </footer>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 z-[60] bg-brand-black/90 backdrop-blur-md md:hidden p-8 flex flex-col items-center justify-center space-y-8"
          >
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-brand-red border-2 border-brand-gold mx-auto flex items-center justify-center font-display font-black italic text-3xl transform skew-x-[-10deg]">
                DS
              </div>
              <h2 className="text-2xl italic tracking-tighter">DUKE SPORT</h2>
            </div>
            
            <nav className="w-full flex flex-col items-center space-y-4">
              <button 
                onClick={() => { setActiveSection('dashboard'); setIsMenuOpen(false); }}
                className="text-lg font-black uppercase italic tracking-widest hover:text-brand-gold"
              >
                Dashboard
              </button>
              {SECTIONS.filter(s => s.id !== 'dashboard').map(s => (
                <button 
                  key={s.id}
                  onClick={() => { setActiveSection(s.id); setIsMenuOpen(false); }}
                  className="text-lg font-black uppercase italic tracking-widest hover:text-brand-gold"
                >
                  {s.title}
                </button>
              ))}
            </nav>
            
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-3 rounded-full border border-white/20"
            >
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SectionContent({ section, onBack }: { section: Section, onBack: () => void }) {
  const Icon = ICON_MAP[section.icon] || Zap;
  
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-8">
        <div className="space-y-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-brand-gold text-[10px] font-black uppercase tracking-widest hover:gap-4 transition-all"
          >
            <ChevronRight className="rotate-180" size={14} /> Regresar al Inicio
          </button>
          <div className="flex items-center gap-5">
            <div className="p-4 bg-brand-red/10 border border-brand-red/30 rounded-sm skew-x-[-10deg] text-brand-gold">
              <Icon size={40} />
            </div>
            <div>
              <h2 className="text-4xl md:text-6xl leading-none">{section.title}</h2>
              <p className="text-brand-gold text-sm md:text-base uppercase tracking-[0.2em] font-bold mt-2">{section.description}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="px-8 py-3 gold-gradient text-brand-black font-black text-xs uppercase tracking-widest shadow-[0_0_15px_rgba(197,160,34,0.3)] hover:scale-105 transition-transform">
            Descargar Normativa
          </button>
          <button className="px-8 py-3 bg-zinc-900 text-white font-black text-xs uppercase tracking-widest border border-white/10 hover:bg-zinc-800 transition-all">
            Contactar Área
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {getContentForSection(section.id).map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-sm relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rotate-45 transform translate-x-12 -translate-y-12 transition-transform group-hover:scale-150" />
            <div className="text-brand-gold font-display font-black text-5xl opacity-10 mb-4 group-hover:opacity-20 transition-opacity">{(i + 1).toString().padStart(2, '0')}</div>
            <h4 className="text-xl mb-4 italic tracking-tight">{item.title}</h4>
            <p className="text-sm text-zinc-400 leading-relaxed mb-8">{item.text}</p>
            <button className="flex items-center gap-2 text-[10px] text-brand-gold font-black uppercase tracking-widest hover:gap-4 transition-all">
              Ver Detalle <ChevronRight size={14} />
            </button>
          </motion.div>
        ))}
      </div>

      <div className="relative h-64 rounded-sm overflow-hidden border border-white/5 flex items-center justify-center p-8 group">
         <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/duke/1200/600')] bg-cover bg-center grayscale opacity-20" />
         <div className="absolute inset-0 sidebar-gradient opacity-60" />
         <div className="relative text-center space-y-6">
           <Trophy size={48} className="text-brand-gold mx-auto animate-bounce" />
           <h3 className="text-3xl md:text-5xl max-w-2xl italic leading-tight">"En Duke Sport, la excelencia es la única opción."</h3>
           <div className="flex items-center justify-center gap-4">
             <div className="h-[1px] w-12 bg-brand-gold" />
             <span className="text-brand-gold text-xs tracking-[0.5em] font-black uppercase">Compromiso Élite</span>
             <div className="h-[1px] w-12 bg-brand-gold" />
           </div>
         </div>
      </div>
    </div>
  );
}

function getContentForSection(id: SectionId) {
  const contentMap: Partial<Record<SectionId, any[]>> = {
    selection: [
      { title: 'Preselección Activa', text: 'Protocolos de filtrado técnico para nuevos talentos en planta.' },
      { title: 'Pruebas Esfuerzo', text: 'Evaluamos el rendimiento bajo presión de nuestros candidatos.' },
      { title: 'Fichajes Élite', text: 'Cómo identificamos a los líderes que llevarán nuestra marca al siguiente nivel.' },
    ],
    training: [
      { title: 'Tecnología Textil', text: 'Capacitación avanzada sobre el manejo de microfibras endurance.' },
      { title: 'Marketing Deportivo', text: 'Estrategias de posicionamiento para nuestra línea Pro-Elite.' },
      { title: 'Rendimiento Fabril', text: 'Optimización de tiempos de costura y acabados de alta calidad.' },
    ],
    wellbeing: [
      { title: 'Duke Fitness Academy', text: 'Acceso a rutinas y entrenamientos diseñados para colaboradores.' },
      { title: 'Premios Rendimiento', text: 'Incentivos trimestrales para los equipos más eficientes.' },
      { title: 'Salud Integral', text: 'Programas de nutrición y bienestar mental para la familia Duke.' },
    ],
    sst: [
      { title: 'Manual EPP', text: 'Guía visual del equipo obligatorio para cada área de producción.' },
      { title: 'Simulacros Acción', text: 'Protocolos de evacuación rápida para planta y puntos de venta.' },
      { title: 'Ergonomía Duke', text: 'Ajustes de puestos de trabajo para optimizar la energía física.' },
    ],
    manual: [
      { title: 'Cargos Directivos', text: 'Responsabilidades clave de los líderes de estrategia Duke.' },
      { title: 'Equipos Producción', text: 'Definición de roles en las líneas de corte y confección.' },
      { title: 'Gestión Comercial', text: 'Manual de atención al cliente de alto nivel en tiendas.' },
    ],
    payroll: [
      { title: 'Cronograma Pagos', text: 'Fechas exactas de dispersión de nómina y bonificaciones.' },
      { title: 'Prestaciones Élite', text: 'Acceso a convenios corporativos y auxilios educativos.' },
      { title: 'Trámites Legales', text: 'Portal para solicitud de certificaciones y trámites de seguridad social.' },
    ]
  };

  return contentMap[id] || [
    { title: 'Políticas Internas', text: 'Acceso rápido a los pilares que rigen nuestra cultura.' },
    { title: 'Formatos Guía', text: 'Documentos estándar para procesos administrativos.' },
    { title: 'Canal Directo', text: 'Comunícate con nuestros líderes para resolver dudas.' },
  ];
}
