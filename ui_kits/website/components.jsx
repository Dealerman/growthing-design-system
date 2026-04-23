/* global React */
const { useState } = React;

// ============ HEADER ============
function Header({ onNav }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="gw-header">
      <div className="gw-container gw-header__inner">
        <a className="gw-header__logo" href="#top" onClick={(e)=>{e.preventDefault();onNav&&onNav('top');}}>
          <img src="../../assets/logo-primary-black.png" alt="Growthing" />
        </a>
        <nav className="gw-header__nav">
          <a href="#servicios" onClick={(e)=>{e.preventDefault();onNav&&onNav('servicios');}}>Servicios</a>
          <a href="#metodologia" onClick={(e)=>{e.preventDefault();onNav&&onNav('metodologia');}}>Metodología</a>
          <a href="#equipo" onClick={(e)=>{e.preventDefault();onNav&&onNav('equipo');}}>Equipo</a>
          <a href="#propuesta" onClick={(e)=>{e.preventDefault();onNav&&onNav('propuesta');}}>Propuesta</a>
          <a href="#contacto" className="gw-btn gw-btn--primary" onClick={(e)=>{e.preventDefault();onNav&&onNav('contacto');}}>Contactanos</a>
        </nav>
      </div>
    </header>
  );
}

// ============ HERO ============
function Hero() {
  return (
    <section className="gw-hero" id="top">
      <img className="gw-hero__wedge" src="../../assets/graphic-triangle-pink.png" alt="" aria-hidden="true" />
      <div className="gw-container gw-hero__inner">
        <div className="gw-eyebrow" style={{color:'#FF0084', marginBottom:28}}>Growth Marketing · Argentina</div>
        <h1 className="gw-hero__title">
          Desarrollo Global<br/>del <span style={{color:'#FF0084'}}>Ecosistema</span><br/>Digital.
        </h1>
        <p className="gw-hero__lead">
          Enfocamos nuestras estrategias <b>360°</b> para el crecimiento económico de nuestros clientes, basándonos en datos, inteligencia artificial y técnicas de <b>Growth Marketing</b>.
        </p>
        <div style={{display:'flex', gap:14, marginTop:40}}>
          <a href="#contacto" className="gw-btn gw-btn--primary gw-btn--lg">Agendar llamada</a>
          <a href="#servicios" className="gw-btn gw-btn--outline gw-btn--lg">Ver servicios</a>
        </div>
      </div>
    </section>
  );
}

// ============ SERVICES GRID ============
const SERVICES = [
  { name: 'Consultoría\nMarketing', icon: 'M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z' },
  { name: 'Desarrollo\nWEB', svg: <><rect width="18" height="14" x="3" y="3"/><path d="M3 9h18"/><path d="m10 14 2 2 4-4"/></> },
  { name: 'Redes\nSociales', svg: <><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></> },
  { name: 'Diseño', svg: <><circle cx="13" cy="6" r="3"/><path d="m9 17 4-4 4 4-4 5z"/></> },
  { name: 'Datos y\nAnalítica', svg: <><path d="M3 3v18h18"/><path d="m7 14 4-4 4 4 5-5"/></> },
  { name: 'Estudios de\nMercado', svg: <><path d="M3 3h18v4H3z"/><path d="M3 7v14h18V7"/><path d="M9 13h6"/></> },
  { name: 'Campañas\nDigitales', svg: <><path d="m3 11 18-8v18l-18-8v-2z"/><path d="M11 11v5a2 2 0 0 1-4 0v-3"/></> },
  { name: 'SEO', svg: <><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></> },
  { name: 'Automatiza-\nciones', svg: <><path d="M3 12a9 9 0 0 1 15-6.7"/><path d="M21 12a9 9 0 0 1-15 6.7"/><path d="M18 3v5h-5"/><path d="M6 21v-5h5"/></> },
  { name: 'Implementa-\nción de IA', svg: <><path d="M8 12a4 4 0 1 1 8 0v8H8z"/><path d="M12 4v4"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="6" r="2"/></> },
];

function ServicesGrid() {
  return (
    <section className="gw-section" id="servicios">
      <div className="gw-container">
        <div className="gw-eyebrow">Nuestros servicios</div>
        <h2 className="gw-section__title">Un ecosistema <span style={{color:'#FF0084'}}>completo</span>.</h2>
        <p className="gw-section__lead">Diez disciplinas trabajando en conjunto para el crecimiento económico de tu negocio.</p>
        <div className="gw-services-grid">
          {SERVICES.map((s, i) => (
            <div key={i} className="gw-service-tile">
              <div className="gw-service-tile__bubble">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {s.svg}
                </svg>
              </div>
              <div className="gw-service-tile__name">{s.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ METHODOLOGY FLOWCHART ============
const STEPS = [
  { n: '01', t: 'Onboarding', d: 'Análisis integral de todo el sistema corporativo.' },
  { n: '02', t: 'Desarrollo Web y Analítica', d: 'Estrategia IT de mercado y segmento.' },
  { n: '03', t: 'Gestión de Redes Sociales', d: 'Engagement con usuarios objetivo.' },
  { n: '04', t: 'Campañas de Alta Performance', d: 'Disparo en Meta, Google, LinkedIn.' },
  { n: '05', t: 'Análisis de Resultados', d: 'Métricas de tráfico y conversión.' },
  { n: '06', t: 'Diseño de Hipótesis', d: 'Trabajo global de inteligencia digital.' },
  { n: '07', t: 'Test A/B', d: 'Comprender la versión más efectiva.' },
  { n: '08', t: 'Reingeniería', d: 'Landing, redes y canales de conversión.' },
  { n: '09', t: 'Mejora de Ratio de Conversión', d: 'Optimización continua.' },
];

function Flowchart() {
  return (
    <section className="gw-section gw-section--alt" id="metodologia">
      <div className="gw-container">
        <div className="gw-eyebrow">Flujograma de Procesos</div>
        <h2 className="gw-section__title">Metodología de trabajo.</h2>
        <div className="gw-steps">
          {STEPS.map((s) => (
            <div key={s.n} className="gw-step">
              <div className="gw-step__n">{s.n}</div>
              <div className="gw-step__t">{s.t}</div>
              <div className="gw-step__d">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ TEAM BLOCK ============
const TEAM = [
  ['1', 'Head of Growth'], ['1', 'Consultor'], ['1', 'Diseñadora UX/UI'],
  ['1', 'QA'], ['1', 'Desarrollador Web'], ['2', 'Especialistas SEO'],
  ['2', 'Paid Managers'], ['1', 'Diseñadora Gráfica'], ['2', 'Community Managers'],
  ['1', 'Email Marketing'], ['1', 'IA & Automation']
];

function TeamBlock() {
  return (
    <section className="gw-section gw-section--dark" id="equipo">
      <div className="gw-container gw-team">
        <div>
          <div className="gw-eyebrow" style={{color:'#FF0084'}}>Equipo involucrado</div>
          <h2 className="gw-section__title" style={{color:'#fff'}}><span style={{color:'#FF0084'}}>14</span> personas<br/>por cliente.</h2>
          <p className="gw-section__lead" style={{color:'#A8A8A8'}}>
            Un equipo multidisciplinario dedicado al crecimiento de tu negocio: estrategia, diseño, desarrollo, paid, SEO, IA y comunicación.
          </p>
        </div>
        <ul className="gw-team__list">
          {TEAM.map(([n, role], i) => (
            <li key={i}>
              <span className="gw-team__dot" />
              <b>{n}</b> {role}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ============ PRICING CARD ============
function PricingCard() {
  return (
    <section className="gw-section" id="propuesta">
      <div className="gw-container gw-pricing">
        <div>
          <div className="gw-eyebrow">Presupuesto de auditoría</div>
          <h2 className="gw-section__title">Propuesta Growthing.</h2>
          <p className="gw-section__lead">Un proceso integral de 300 días para transformar tu ecosistema digital.</p>
          <ul className="gw-bullets">
            <li>Onboarding: 25hs durante las primeras 3 semanas.</li>
            <li>Desarrollo web y analítica con dashboards en tiempo real.</li>
            <li>Diseño UX/UI y reingeniería de canales de conversión.</li>
            <li>Campañas paid, SEO, IA y automation.</li>
            <li>Community management y email marketing.</li>
          </ul>
        </div>
        <div className="gw-pricing__card">
          <div className="gw-pricing__accent" />
          <div className="gw-eyebrow" style={{color:'#FF0084'}}>Total</div>
          <div className="gw-pricing__big">10<span style={{color:'#FF0084'}}>×</span></div>
          <div className="gw-pricing__amount">USD 2.000 <span className="gw-pricing__iva">+ IVA</span></div>
          <hr />
          <p className="gw-pricing__fine">
            Proceso total: <b>25hs onboarding</b>, <b>168hs front-end</b> y <b>508hs back-end</b> durante <b>300 días</b>.
          </p>
          <a href="#contacto" className="gw-btn gw-btn--primary gw-btn--block">Aceptar propuesta</a>
        </div>
      </div>
    </section>
  );
}

// ============ CONTACT SECTION ============
function ContactSection() {
  const [state, setState] = useState({ nombre:'', empresa:'', email:'', mensaje:'' });
  const [sent, setSent] = useState(false);
  const submit = (e) => { e.preventDefault(); setSent(true); };
  return (
    <section className="gw-section gw-section--dark" id="contacto">
      <img className="gw-contact__chevron" src="../../assets/graphic-chevron-pink.png" alt="" aria-hidden="true" />
      <div className="gw-container gw-contact">
        <div>
          <div className="gw-eyebrow" style={{color:'#FF0084'}}>Contacto</div>
          <h2 className="gw-section__title" style={{color:'#fff'}}>Hablemos de tu<br/>próximo paso.</h2>
          <div className="gw-contact__pills">
            <a className="gw-pill" href="https://www.growthing.info" target="_blank" rel="noreferrer"><span className="gw-pill__dot"/> www.growthing.info</a>
            <a className="gw-pill" href="mailto:matias@growthing.info"><span className="gw-pill__dot"/> matias@growthing.info</a>
            <a className="gw-pill" href="tel:+5491136995144"><span className="gw-pill__dot"/> +54 9 11 3699-5144</a>
          </div>
        </div>
        <form className="gw-form" onSubmit={submit}>
          {sent ? (
            <div className="gw-form__sent">
              <div className="gw-eyebrow" style={{color:'#FF0084', marginBottom:12}}>Mensaje enviado</div>
              <div style={{fontSize:28,fontWeight:800,color:'#fff'}}>Te contactamos en 24hs.</div>
            </div>
          ) : (
            <>
              <label><span>Nombre</span><input value={state.nombre} onChange={(e)=>setState({...state, nombre:e.target.value})} required/></label>
              <label><span>Empresa</span><input value={state.empresa} onChange={(e)=>setState({...state, empresa:e.target.value})} /></label>
              <label><span>Email</span><input type="email" value={state.email} onChange={(e)=>setState({...state, email:e.target.value})} required/></label>
              <label><span>Mensaje</span><textarea rows="4" value={state.mensaje} onChange={(e)=>setState({...state, mensaje:e.target.value})}/></label>
              <button className="gw-btn gw-btn--primary gw-btn--block" type="submit">Enviar</button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

// ============ FOOTER ============
function Footer() {
  return (
    <footer className="gw-footer">
      <div className="gw-container gw-footer__inner">
        <img src="../../assets/logo-on-dark.png" style={{height:42}} alt="Growthing"/>
        <div className="gw-footer__meta">© 2026 Growthing · Marketing Consultancy · Buenos Aires</div>
      </div>
    </footer>
  );
}

Object.assign(window, { Header, Hero, ServicesGrid, Flowchart, TeamBlock, PricingCard, ContactSection, Footer });
