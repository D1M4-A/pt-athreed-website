"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";

const iconPaths: Record<string, string> = {
  arrow: "M5 12h14m-7-7 7 7-7 7",
  arrowUp: "M7 17 17 7M7 7h10v10",
  bars: "M4 6h16M4 12h16M4 18h16",
  box: "m12 3 9 5-9 5-9-5 9-5Zm-9 5v8l9 5 9-5V8m-9 5v8",
  briefcase: "M3 7h18v13H3zM8 7V4h8v3m-13 5h18m-11 0v2h4v-2",
  building: "M4 21V5l8-3 8 3v16m-16 0h16M8 9h1m6 0h1m-8 4h1m6 0h1m-6 8v-4h4v4",
  chart: "M4 19V5m0 14h17M8 15l4-4 3 2 6-7",
  check: "m5 12 4 4L19 6",
  chevron: "m9 18 6-6-6-6",
  clock: "M12 8v4l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  compass: "m16.2 7.8-2.8 5.6-5.6 2.8 2.8-5.6 5.6-2.8ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  cursor: "m5 3 14 9-7 1-3 7L5 3Z",
  envelope: "M4 6h16v12H4zM4 7l8 6 8-6",
  gear: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0-5v2m0 14v2m9-9h-2M5 12H3m15.36-6.36-1.42 1.42M7.06 16.94l-1.42 1.42m12.72 0-1.42-1.42M7.06 7.06 5.64 5.64",
  globe: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm-10-10h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z",
  layers: "m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5m-18 5 9 5 9-5",
  link: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71m-1.75 5.82a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
  lock: "M5 11h14v10H5zM8 11V7a4 4 0 1 1 8 0v4",
  menu: "M4 7h16M4 12h16M4 17h16",
  people: "M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m6-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm10 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  play: "m8 5 12 7-12 7V5Z",
  shield: "M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Zm-3-11 2 2 4-4",
  spark: "m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Zm7 12 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z",
  stack: "M3 7 12 2l9 5-9 5-9-5Zm0 5 9 5 9-5m-18 5 9 5 9-5",
};

function Icon({
  name,
  size = 20,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={iconPaths[name] ?? iconPaths.spark} />
    </svg>
  );
}

const modules = [
  { name: "CRM", detail: "Know every lead, conversation, and opportunity.", icon: "people", color: "lavender" },
  { name: "Sales", detail: "From quotation to order, keep every deal moving.", icon: "chart", color: "blue" },
  { name: "Inventory", detail: "See stock clearly across locations and teams.", icon: "box", color: "orange" },
  { name: "Purchase", detail: "Make procurement more controlled and predictable.", icon: "briefcase", color: "green" },
  { name: "Accounting", detail: "Bring financial activity into one clear picture.", icon: "chart", color: "pink" },
  { name: "Point of Sale", detail: "Connect in-store transactions to your operations.", icon: "cursor", color: "yellow" },
  { name: "People", detail: "Support your team through the entire employee journey.", icon: "people", color: "teal" },
  { name: "Projects", detail: "Plan work, track time, and deliver with confidence.", icon: "layers", color: "violet" },
  { name: "Manufacturing", detail: "Coordinate materials, production, and quality.", icon: "gear", color: "blue" },
  { name: "Helpdesk", detail: "Turn customer requests into helpful outcomes.", icon: "shield", color: "orange" },
  { name: "Marketing", detail: "Create connected journeys from first touch to sale.", icon: "spark", color: "green" },
];

const services = [
  ["Odoo Implementation", "From discovery and configuration to migration, testing, training, and go-live.", "layers"],
  ["Odoo Customization", "Purpose-built workflows, modules, reports, and features for the way you work.", "gear"],
  ["System Integration", "Connect Odoo with payment providers, marketplaces, POS, banks, and more.", "link"],
  ["Support & Maintenance", "A responsive partner for functional questions, technical care, and continuous improvement.", "shield"],
  ["ERP Migration", "Move forward from legacy systems and older ERP environments with confidence.", "arrow"],
  ["Odoo Training", "Practical, role-based learning for your operations, finance, and admin teams.", "people"],
  ["Business Process Consulting", "Understand what is happening today, then design a better way forward.", "compass"],
  ["Dashboard & Analytics", "Make operational and financial performance easier to see and act on.", "chart"],
];

const industries = [
  { name: "Food & Beverage", tag: "F&B", copy: "Connect point of sale, purchasing, recipe costing, inventory, and multi-branch operations.", icon: "spark", modules: ["POS", "Inventory", "Recipe / BOM", "Accounting"] },
  { name: "Hospitality", tag: "Hospitality", copy: "Bring reservations, procurement, assets, finance, and property-level performance together.", icon: "building", modules: ["Reservations", "Procurement", "Finance", "Dashboards"] },
  { name: "Retail", tag: "Retail", copy: "Create a connected experience across storefronts, stockrooms, customer loyalty, and finance.", icon: "box", modules: ["POS", "Multi-location", "Loyalty", "Accounting"] },
  { name: "Distribution", tag: "Distribution", copy: "Improve control from supplier purchase through warehouse, delivery, and customer invoice.", icon: "stack", modules: ["Sales", "Warehouse", "Logistics", "Accounting"] },
  { name: "Manufacturing", tag: "Manufacturing", copy: "Plan materials, production, and quality with a clearer view of capacity and cost.", icon: "gear", modules: ["MRP", "BOM", "Planning", "Quality"] },
  { name: "Professional Services", tag: "Services", copy: "Link the client relationship to project delivery, team time, and timely billing.", icon: "briefcase", modules: ["CRM", "Projects", "Timesheets", "Billing"] },
];

const steps = [
  ["01", "Discover", "Understand your business, day-to-day workflows, challenges, and goals."],
  ["02", "Design", "Map the processes and shape an architecture that fits your priorities."],
  ["03", "Build", "Configure and develop a practical solution with your team in the loop."],
  ["04", "Test", "Validate real business scenarios together before anything goes live."],
  ["05", "Deploy", "Prepare your data and people for a confident, supported go-live."],
  ["06", "Improve", "Keep learning, optimizing, and building as your business evolves."],
];

const benefits = [
  ["Business first", "We start with your operating reality and outcomes—not a software demo.", "compass"],
  ["Flexible by design", "A solution shaped around your priorities, pace, and available resources.", "layers"],
  ["Connected ecosystem", "Bring your ERP and existing business tools into the same conversation.", "link"],
  ["Practical solutions", "Keep complexity in check and focus on tools people can use every day.", "cursor"],
  ["Long-term partner", "Support your teams beyond launch with room to refine and improve.", "people"],
  ["Ready to scale", "Build a foundation that can grow alongside the company you are becoming.", "chart"],
];

const cases = [
  ["Hospitality", "Multiple-location revenue reconciliation", "Connect sales, payment reconciliation, accounting, and an executive dashboard."],
  ["Distribution", "Limited visibility from order to delivery", "Unify sales, purchasing, warehouse operations, and logistics in one workflow."],
  ["Retail", "Disconnected stores and inventory records", "Create a shared view of point of sale, stock, and financial performance."],
];

const before = ["Spreadsheets everywhere", "Disconnected POS", "Manual inventory checks", "Reconciliation by hand", "Approvals in chat", "Reports that arrive late"];
const after = ["Integrated ERP", "Connected sales channels", "Centralized stock data", "Automated workflows", "Clear financial controls", "Live management insight"];
const integrations = [
  ["Banking", "building"], ["Payment", "chart"], ["Marketplace", "globe"], ["Point of Sale", "cursor"],
  ["Website", "globe"], ["Messaging", "people"], ["Attendance", "clock"], ["CRM", "briefcase"],
  ["Analytics", "chart"], ["Open API", "link"],
];

const navItems = [
  ["Services", "#services"], ["Solutions", "#solutions"], ["Industries", "#industries"],
  ["How we work", "#approach"], ["About", "#about"], ["Insights", "#stories"], ["Contact", "#contact"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeModule, setActiveModule] = useState("CRM");
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setFormSent(true);
    event.currentTarget.reset();
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="nav-wrap">
          <a className="brand" href="#home" aria-label="Athreed home">
            <span className="brand-mark"><span /><span /><span /><span /></span>
            <span className="brand-name">athreed<span>.</span></span>
          </a>
          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
            <a className="nav-mobile-cta" href="#contact" onClick={() => setMenuOpen(false)}>Free consultation <Icon name="arrow" size={16} /></a>
          </nav>
          <a className="button button-dark nav-cta" href="#contact">Free consultation <Icon name="arrow" size={16} /></a>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "chevron" : "menu"} size={22} />
          </button>
        </div>
      </header>

      <main id="main">
        <section className="hero-section" id="home">
          <div className="hero-grid-pattern" aria-hidden="true" />
          <div className="hero-glow hero-glow-one" aria-hidden="true" />
          <div className="hero-glow hero-glow-two" aria-hidden="true" />
          <div className="container hero-layout">
            <div className="hero-copy">
              <div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> BUSINESS TECHNOLOGY, BUILT AROUND YOU</div>
              <h1>Build smarter.<br />Operate better.<br /><span>Grow faster.</span></h1>
              <p className="hero-lede">Transform your business with ERP and digital solutions designed around the way your company actually works.</p>
              <p className="hero-description">From process discovery to implementation, integration, and continuous improvement—we help you build connected, scalable operations.</p>
              <div className="hero-actions">
                <a className="button button-blue" href="#contact">Free consultation <Icon name="arrow" size={17} /></a>
                <a className="button button-outline-light" href="#solutions"><span className="play-icon"><Icon name="play" size={12} /></span> Explore our solutions</a>
              </div>
              <div className="hero-proof"><span className="proof-mark"><Icon name="check" size={15} /></span><span>First, we understand your business.</span><span className="proof-rule" /><span>Then, we make it work better.</span></div>
            </div>
            <div className="hero-visual" aria-label="An illustration of connected business teams and processes">
              <div className="visual-topline"><span>YOUR BUSINESS, IN SYNC</span><span className="live-tag"><i /> ONE CONNECTED SYSTEM</span></div>
              <div className="ecosystem">
                <svg className="ecosystem-lines" viewBox="0 0 520 420" fill="none" aria-hidden="true">
                  <path d="M259 204 130 106M259 204 385 106M259 204 121 304M259 204 396 304M130 106 385 106M121 304 396 304M130 106 121 304M385 106 396 304" />
                  <path className="line-highlight" d="M130 106 259 204 385 106M121 304 259 204 396 304" />
                  <circle cx="130" cy="106" r="3" /><circle cx="385" cy="106" r="3" /><circle cx="121" cy="304" r="3" /><circle cx="396" cy="304" r="3" />
                </svg>
                <div className="ecosystem-node node-crm"><span className="node-icon node-purple"><Icon name="people" size={20} /></span><span><b>CRM</b><small>Every relationship</small></span><i className="node-status" /></div>
                <div className="ecosystem-node node-sales"><span className="node-icon node-blue"><Icon name="chart" size={20} /></span><span><b>Sales</b><small>Every opportunity</small></span><i className="node-status" /></div>
                <div className="ecosystem-node node-stock"><span className="node-icon node-orange"><Icon name="box" size={20} /></span><span><b>Inventory</b><small>Every product</small></span><i className="node-status" /></div>
                <div className="ecosystem-node node-purchase"><span className="node-icon node-green"><Icon name="briefcase" size={20} /></span><span><b>Purchase</b><small>Every supplier</small></span><i className="node-status" /></div>
                <div className="ecosystem-node node-finance"><span className="node-icon node-pink"><Icon name="chart" size={20} /></span><span><b>Accounting</b><small>Every number</small></span><i className="node-status" /></div>
                <div className="ecosystem-center"><div className="center-orbit orbit-one" /><div className="center-orbit orbit-two" /><span className="center-logo"><span className="brand-mark"><span /><span /><span /><span /></span></span><b>One connected<br />business</b><small>DATA, FLOWING TOGETHER</small></div>
                <div className="ecosystem-dashboard"><div className="dash-label">BUSINESS PULSE <span>LIVE VIEW</span></div><div className="dash-chart"><span style={{ height: "36%" }} /><span style={{ height: "53%" }} /><span style={{ height: "45%" }} /><span style={{ height: "72%" }} /><span style={{ height: "60%" }} /><span style={{ height: "88%" }} /><span style={{ height: "74%" }} /><span style={{ height: "100%" }} /></div><div className="dash-foot"><span>All departments</span><span>↑ In sync</span></div></div>
              </div>
              <div className="visual-caption"><span className="caption-orb"><Icon name="spark" size={14} /></span> One clear view, from the front line to the boardroom.</div>
            </div>
          </div>
          <div className="hero-footer container"><span>BUILT FOR HOW BUSINESS REALLY HAPPENS</span><div><span>ODOO ERP</span><i /><span>CONNECTED SYSTEMS</span><i /><span>BETTER OPERATIONS</span></div></div>
        </section>

        <section className="problem-section section-pad" id="about">
          <div className="container">
            <div className="section-heading heading-split">
              <div><div className="eyebrow"><span className="eyebrow-dot" /> THE CHALLENGE</div><h2>Growing business<br />shouldn’t mean growing <span className="text-blue">complexity.</span></h2></div>
              <p>As your business grows, disconnected tools and workarounds can quietly become the way work gets done. It doesn’t have to stay that way.</p>
            </div>
            <div className="problem-grid">
              {[
                ["Spreadsheet sprawl", "Critical work lives in files no one can find.", "layers"],
                ["Disconnected systems", "Teams see fragments instead of the full picture.", "link"],
                ["Manual approvals", "Small decisions get stuck waiting in a queue.", "clock"],
                ["Duplicate data entry", "The same information is entered again and again.", "cursor"],
                ["Hidden inventory", "It is hard to know what is available—or where.", "box"],
                ["Slow reporting", "By the time a report arrives, the moment has passed.", "chart"],
              ].map(([title, copy, icon], index) => (
                <article className="problem-card" key={title}>
                  <div className={`problem-icon problem-icon-${index + 1}`}><Icon name={icon} size={19} /></div><h3>{title}</h3><p>{copy}</p><span className="problem-index">0{index + 1}</span>
                </article>
              ))}
            </div>
            <div className="connected-callout"><div className="callout-graphic"><span className="callout-node"><Icon name="people" size={17} /></span><span className="callout-link" /><span className="callout-node callout-node-active"><span className="brand-mark"><span /><span /><span /><span /></span></span><span className="callout-link" /><span className="callout-node"><Icon name="chart" size={17} /></span></div><div><span className="callout-kicker">A BETTER WAY FORWARD</span><h3>One business.<br className="mobile-only" /> One connected system.</h3><p>We connect people, processes, and data into one business ecosystem—so your team can spend less time piecing things together and more time moving forward.</p></div><a className="text-link" href="#approach">See how we work <Icon name="arrow" size={17} /></a></div>
          </div>
        </section>

        <section className="odoo-section section-pad" id="solutions">
          <div className="container">
            <div className="section-heading heading-center"><div className="eyebrow"><span className="eyebrow-dot" /> ONE PLATFORM, CONNECTED BY DESIGN</div><h2>Every process has a place.<br />Every team has a <span className="text-blue">clearer view.</span></h2><p>Odoo brings the essential parts of your business into one adaptable platform—configured around your workflows, not the other way around.</p></div>
            <div className="modules-layout">
              <div className="module-grid" role="list" aria-label="Odoo business modules">
                {modules.map((module) => <button className={`module-tile ${activeModule === module.name ? "module-active" : ""}`} key={module.name} type="button" onMouseEnter={() => setActiveModule(module.name)} onFocus={() => setActiveModule(module.name)} onClick={() => setActiveModule(module.name)} aria-pressed={activeModule === module.name}><span className={`module-icon ${module.color}`}><Icon name={module.icon} size={20} /></span><span>{module.name}</span><Icon className="module-arrow" name="arrowUp" size={14} /></button>)}
              </div>
              <div className="module-detail"><div className="module-detail-orbit" /><div className="module-detail-top"><span>CONNECTED MODULE</span><span className="module-detail-status"><i /> ACTIVE</span></div><div className="module-feature-icon"><Icon name={modules.find((module) => module.name === activeModule)?.icon ?? "layers"} size={28} /></div><span className="module-detail-label">ODOO · BUSINESS APPLICATIONS</span><h3>{activeModule}</h3><p>{modules.find((module) => module.name === activeModule)?.detail}</p><div className="module-flow"><span>YOUR TEAM</span><Icon name="arrow" size={15} /><span>YOUR WORKFLOW</span><Icon name="arrow" size={15} /><span>{activeModule.toUpperCase()}</span></div></div>
            </div>
            <div className="module-note"><span className="note-line" /><p>Start with what matters today. Connect more as you grow.</p><span className="note-line" /></div>
            <div className="center-cta"><a className="button button-dark" href="#contact">Discover Odoo solutions <Icon name="arrow" size={17} /></a></div>
          </div>
        </section>

        <section className="services-section section-pad" id="services">
          <div className="container">
            <div className="section-heading heading-split"><div><div className="eyebrow"><span className="eyebrow-dot" /> WHAT WE DO</div><h2>End-to-end ERP.<br /><span className="text-blue">Human at every step.</span></h2></div><p>One trusted partner from the first process conversation through go-live and what comes next.</p></div>
            <div className="service-grid">{services.map(([title, copy, icon], index) => <article className="service-card" key={title}><div className="service-card-top"><span className="service-icon"><Icon name={icon} size={21} /></span><span className="service-number">0{index + 1}</span></div><h3>{title}</h3><p>{copy}</p><a href="#contact" className="service-link" aria-label={`Discuss ${title}`}><Icon name="arrowUp" size={16} /></a></article>)}</div>
          </div>
        </section>

        <section className="industry-section section-pad" id="industries">
          <div className="container">
            <div className="section-heading heading-split"><div><div className="eyebrow"><span className="eyebrow-dot" /> BUILT AROUND YOUR WORLD</div><h2>Solutions shaped<br />for <span className="text-blue">your industry.</span></h2></div><p>Every industry has its own rhythm. We bring the right processes together for yours.</p></div>
            <div className="industry-grid">{industries.map((industry, index) => <article className="industry-card" key={industry.name}><div className="industry-card-head"><span className={`industry-art industry-art-${index + 1}`}><Icon name={industry.icon} size={22} /></span><span className="industry-tag">{industry.tag}</span></div><h3>{industry.name}</h3><p>{industry.copy}</p><div className="industry-modules">{industry.modules.map((mod) => <span key={mod}>{mod}</span>)}</div><a href="#contact" className="industry-link">Explore this solution <Icon name="arrow" size={15} /></a></article>)}</div>
          </div>
        </section>

        <section className="approach-section section-pad" id="approach">
          <div className="container">
            <div className="section-heading heading-center"><div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> OUR APPROACH</div><h2>Technology starts<br />with <span className="text-cyan">understanding.</span></h2><p>Good implementation is not a switch you flip. It is a thoughtful journey your people can move through with confidence.</p></div>
            <div className="process-track">{steps.map(([number, title, copy], index) => <article className="process-step" key={number}><div className="step-marker"><span>{number}</span>{index < steps.length - 1 && <i />}</div><span className="step-kicker">PHASE {number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
            <div className="approach-quote"><span className="quote-mark">“</span><p>We don’t force businesses to adapt to technology.<br /><strong>We design technology around the business.</strong></p><span className="quote-line" /></div>
          </div>
          <div className="approach-orb approach-orb-one" /><div className="approach-orb approach-orb-two" />
        </section>

        <section className="benefits-section section-pad">
          <div className="container"><div className="section-heading heading-split"><div><div className="eyebrow"><span className="eyebrow-dot" /> THE ATHREED DIFFERENCE</div><h2>More than an<br /><span className="text-blue">ERP implementer.</span></h2></div><p>A good technology partner brings perspective, clarity, and a steady hand—not just another system to manage.</p></div>
            <div className="benefits-grid">{benefits.map(([title, copy, icon], index) => <article className="benefit-card" key={title}><span className="benefit-number">0{index + 1}</span><div className="benefit-icon"><Icon name={icon} size={21} /></div><h3>{title}</h3><p>{copy}</p></article>)}</div>
          </div>
        </section>

        <section className="stories-section section-pad" id="stories">
          <div className="container"><div className="section-heading heading-split"><div><div className="eyebrow"><span className="eyebrow-dot" /> A LOOK AT WHAT&apos;S POSSIBLE</div><h2>Digital transformation<br /><span className="text-blue">in action.</span></h2></div><p>Real outcomes start with real business context. These sample scenarios show the kind of challenges a connected approach can address.</p></div>
            <div className="case-grid">
              {cases.map(([industry, challenge, solution], index) => (
                <article className="case-card" key={industry}>
                  <div className={`case-visual case-visual-${index + 1}`}>
                    <div className="case-visual-grid" />
                    <div className="case-visual-content">
                      <span className="case-sample"><i /> ILLUSTRATIVE SCENARIO</span>
                      <div className="case-mini-board">
                        <div className="mini-sidebar"><i /><i /><i /><i /></div>
                        <div className="mini-content">
                          <div className="mini-head"><span /><span /></div>
                          <div className="mini-stat-row"><i /><i /><i /></div>
                          <div className="mini-graph"><i /><i /><i /><i /><i /><i /><i /></div>
                          <div className="mini-table"><i /><i /><i /><i /></div>
                        </div>
                      </div>
                    </div>
                    <span className="case-visual-stamp">
                      <span className="brand-mark"><span /><span /><span /><span /></span>
                    </span>
                  </div>
                  <div className="case-content">
                    <span className="case-industry">{industry}</span>
                    <h3>{challenge}</h3>
                    <p>{solution}</p>
                    <div className="case-impact"><span>IMPACT</span><b>Insert verified result</b></div>
                    <a href="#contact" className="text-link">View case study <Icon name="arrow" size={15} /></a>
                  </div>
                </article>
              ))}
            </div>
            <p className="case-disclaimer"><Icon name="spark" size={15} /> Illustrative scenarios only. No customer engagements or results are claimed.</p>
          </div>
        </section>

        <section className="transformation-section section-pad">
          <div className="container"><div className="section-heading heading-center"><div className="eyebrow"><span className="eyebrow-dot" /> FROM PATCHWORK TO PROGRESS</div><h2>Less stitching things together.<br /><span className="text-blue">More room to move forward.</span></h2></div>
            <div className="comparison"><div className="comparison-side before-side"><div className="comparison-head"><span className="compare-status"><i /> BEFORE</span><span className="comparison-title">Disconnected by default</span></div><div className="comparison-list">{before.map((item, index) => <div className="compare-item" key={item}><span className="compare-item-icon"><Icon name={["layers", "cursor", "box", "chart", "people", "clock"][index]} size={16} /></span><span>{item}</span><Icon className="compare-x" name="chevron" size={15} /></div>)}</div><span className="comparison-watermark">01</span></div><div className="comparison-bridge"><span className="bridge-ring"><Icon name="arrow" size={20} /></span><span>MAKE THE<br />CONNECTION</span></div><div className="comparison-side after-side"><div className="comparison-head"><span className="compare-status"><i /> WITH ATHREED</span><span className="comparison-title">Connected with intent</span></div><div className="comparison-list">{after.map((item, index) => <div className="compare-item" key={item}><span className="compare-item-icon"><Icon name={["layers", "link", "box", "gear", "shield", "chart"][index]} size={16} /></span><span>{item}</span><Icon className="compare-check" name="check" size={16} /></div>)}</div><span className="comparison-watermark">02</span></div></div>
          </div>
        </section>

        <section className="integration-section section-pad">
          <div className="container"><div className="section-heading heading-center"><div className="eyebrow"><span className="eyebrow-dot" /> BUILT TO CONNECT</div><h2>Your business already has tools.<br /><span className="text-blue">Let them work together.</span></h2><p>Bring the systems you rely on into one more connected operating picture—securely and thoughtfully.</p></div>
            <div className="integration-map"><div className="integration-orbit orbit-a" /><div className="integration-orbit orbit-b" /><svg className="integration-lines" viewBox="0 0 980 440" preserveAspectRatio="none" aria-hidden="true">{integrations.map((_, index) => {const angle = -Math.PI / 2 + (index * 2 * Math.PI) / integrations.length; const x = 490 + Math.cos(angle) * 355; const y = 215 + Math.sin(angle) * 155; return <line key={index} x1={x} y1={y} x2="490" y2="215" />;})}</svg><div className="integration-center"><div className="integration-center-ring" /><span className="integration-logo"><span className="brand-mark"><span /><span /><span /><span /></span></span><b>Odoo</b><small>YOUR BUSINESS CORE</small></div>{integrations.map(([label, icon], index) => <div className={`integration-node integration-node-${index + 1}`} key={label}><span className="integration-node-icon"><Icon name={icon} size={18} /></span><span>{label}</span></div>)}</div>
            <p className="integration-footnote"><span><Icon name="shield" size={15} /></span> Integrations are scoped to your workflows, access requirements, and existing platforms.</p>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-pattern" aria-hidden="true" /><div className="cta-glow" aria-hidden="true" />
          <div className="container cta-content"><div className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> YOUR NEXT CHAPTER STARTS HERE</div><h2>Ready to make work<br />work <span>better?</span></h2><p>Let’s talk about your processes, your challenges, and the technology that can help your business scale—with less friction and more clarity.</p><div className="cta-actions"><a className="button button-blue" href="#contact">Schedule a free consultation <Icon name="arrow" size={17} /></a><a className="button button-outline-light" href="https://wa.me/?text=Hello%20Athreed%2C%20I%27d%20like%20to%20discuss%20my%20business%20technology%20needs." target="_blank" rel="noreferrer">Talk to our team <Icon name="arrowUp" size={16} /></a></div><span className="cta-note"><Icon name="clock" size={14} /> A first conversation. No pressure, no obligation.</span></div>
          <div className="cta-side-note"><span>BUSINESS TECHNOLOGY<br />THAT MOVES YOU FORWARD</span><span className="cta-side-mark"><span className="brand-mark"><span /><span /><span /><span /></span></span></div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="container contact-layout"><div className="contact-copy"><div className="eyebrow"><span className="eyebrow-dot" /> LET’S START WITH A CONVERSATION</div><h2>Tell us where<br />you want to <span className="text-blue">go.</span></h2><p>Share a little about your business and we’ll start by listening. No pitch deck. Just a thoughtful first conversation.</p><div className="contact-promise"><span className="promise-icon"><Icon name="shield" size={19} /></span><div><b>Your business context stays yours.</b><span>We’ll only use your information to respond to your inquiry.</span></div></div><div className="contact-details"><div><span className="contact-detail-icon"><Icon name="envelope" size={17} /></span><span><small>EMAIL</small><b>Contact details coming soon</b></span></div><div><span className="contact-detail-icon"><Icon name="people" size={17} /></span><span><small>WHATSAPP</small><b>Contact details coming soon</b></span></div></div></div>
            <div className="contact-form-card"><div className="form-heading"><div><span className="form-kicker">YOUR FIRST STEP</span><h3>Let’s talk business.</h3></div><span className="form-step">01 <i /> 01</span></div>{formSent && <div className="form-success" role="status"><span><Icon name="check" size={17} /></span><div><b>Thank you for reaching out.</b><p>Your information was validated in this preview. Connect a form service to receive inquiries.</p></div><button type="button" aria-label="Dismiss confirmation" onClick={() => setFormSent(false)}>×</button></div>}
              <form className="inquiry-form" onSubmit={submitInquiry}>
                <div className="form-row"><label>Full name<input name="name" type="text" placeholder="How should we address you?" autoComplete="name" required /></label><label>Company name<input name="company" type="text" placeholder="Your organization" autoComplete="organization" required /></label></div>
                <div className="form-row"><label>Work email<input name="email" type="email" placeholder="you@company.com" autoComplete="email" required /></label><label>WhatsApp number<input name="phone" type="tel" placeholder="+62" autoComplete="tel" /></label></div>
                <div className="form-row"><label>Industry<select name="industry" defaultValue="" required><option value="" disabled>Select your industry</option>{industries.map((industry) => <option key={industry.name}>{industry.name}</option>)}<option>Other</option></select></label><label>Company size<select name="size" defaultValue="" required><option value="" disabled>Select company size</option><option>1–10 employees</option><option>11–50 employees</option><option>51–200 employees</option><option>201–500 employees</option><option>500+ employees</option></select></label></div>
                <label>What can we help with?<select name="solution" defaultValue="" required><option value="" disabled>Select a solution</option><option>Odoo Implementation</option><option>Odoo Customization</option><option>Odoo Integration</option><option>ERP Migration</option><option>Support & Maintenance</option><option>Business Process Consultation</option><option>Other</option></select></label>
                <label>Anything else we should know?<textarea name="message" rows={3} placeholder="A little about your current process or challenge…" /></label>
                <button className="button button-dark form-submit" type="submit">Start your transformation <Icon name="arrow" size={17} /></button><p className="form-footnote"><Icon name="lock" size={13} /> Your details are kept private and used only to respond to you.</p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container"><div className="footer-main"><div className="footer-brand-col"><a className="brand brand-footer" href="#home"><span className="brand-mark"><span /><span /><span /><span /></span><span className="brand-name">athreed<span>.</span></span></a><p>Business technology<br />that fits your business.</p><span className="footer-location"><Icon name="globe" size={15} /> Indonesia · Working everywhere</span></div><div className="footer-links"><div><h3>Explore</h3><a href="#about">About Athreed</a><a href="#services">Services</a><a href="#solutions">Solutions</a><a href="#industries">Industries</a><a href="#stories">Insights</a></div><div><h3>Our services</h3><a href="#services">Odoo Implementation</a><a href="#services">Odoo Customization</a><a href="#services">System Integration</a><a href="#services">Support & Maintenance</a><a href="#services">Training & Consulting</a></div><div><h3>Get in touch</h3><a href="#contact">Start a conversation <Icon name="arrowUp" size={13} /></a><a href="https://wa.me/?text=Hello%20Athreed" target="_blank" rel="noreferrer">WhatsApp <Icon name="arrowUp" size={13} /></a><span>LinkedIn · coming soon</span><span>Instagram · coming soon</span></div></div></div><div className="footer-bottom"><span>© 2026 PT Athreed. All rights reserved.</span><span>Technology that fits your business.</span><a href="#home">Back to top ↑</a></div></div>
      </footer>
    </>
  );
}
