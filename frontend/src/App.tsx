import { ArrowRight, Check, ChevronDown, Command, Download, Menu, Play, Search, Sparkles, Users, X } from "lucide-react";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DashboardLayout from "./components/layout/DashboardLayout";
import Clients from "./pages/Clients";
import Leads from "./pages/Leads";
import Emails from "./pages/Emails";
import Calls from "./pages/Calls";
import Ai from "./pages/Ai";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<DashboardLayout />}>
          <Route path="/clients" element={<Clients />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/emails" element={<Emails />} />
          <Route path="/calls" element={<Calls />} />
          <Route path="/ai" element={<Ai />} />
          {/* leads, emails, calls, chat routes go here as we build them */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="site-shell">
      <nav className="top-nav">
        <Link className="brand" to="/"><span className="brand-mark">T</span><span>table</span></Link>
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          <a href="#features">Features</a><a href="#company">Company</a><a href="#pricing">Pricing</a><a href="#journal">Blog</a><a href="#changelog">Changelog</a>
          <div className="nav-divider" /><a href="#login">Log in</a>
          <button className="nav-cta" onClick={() => setMenuOpen(false)}>Get Started <ArrowRight size={15} /></button>
        </div>
        <button className="mobile-menu" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
      </nav>

      <section className="hero section-pad">
        <div className="hero-copy reveal"><p className="eyebrow"><span className="eyebrow-dot" /> Your network, remembered</p><h1>Never lose track of the<br /><em>people who matter most</em></h1><p className="hero-description">Manage, grow, and stay on top of your entire network. table is your central place for nurturing relationships. Because your network is your net worth.</p><div className="hero-actions"><button className="button button-primary"><Download size={17} /> Download for Mac</button><button className="button button-quiet">Request Demo <ArrowRight size={16} /></button></div><p className="version-line">v1.00.3 <span /> Web &amp; macOS <span /> <b>+5000</b> on waitlist</p></div>
        <div className="logo-row"><span>Used by people from:</span><b>slack</b><b>amazon</b><b>al&apos;z</b><b>runway</b></div><ProductWindow />
      </section>

      <section className="trusted-strip"><p>One place for every relationship</p><div className="trusted-icons"><span>in</span><span>G</span><span>✉</span><span>◎</span><span>f</span><span>✦</span></div></section>

      <section className="feature-intro section-pad" id="features"><p className="eyebrow">A second brain for your network</p><h2>Connect to all platforms.<br /><span>Keep the important stuff.</span></h2><p className="section-lede">Stop switching between apps to keep up with your network. Everyone you ever met, automatically synced into table, your single source of truth.</p><a className="text-link" href="#integrations">View all integrations <ArrowRight size={16} /></a><div className="integration-card"><div className="integration-orbit orbit-one" /><div className="integration-orbit orbit-two" /><div className="integration-center"><span className="brand-mark">T</span><b>table</b><small>your people, in one place</small></div><div className="orbit-node node-one">in</div><div className="orbit-node node-two">G</div><div className="orbit-node node-three">✉</div><div className="orbit-node node-four">◎</div></div></section>

      <section className="ai-section section-pad"><div className="split-copy"><p className="eyebrow">Intelligence, quietly working</p><h2>AI that does<br /><span>the work for you.</span></h2><p className="section-lede">Do everything with table AI. Get quick access to people and context across your network, without digging through old notes.</p><button className="button button-primary">Try out table AI <Sparkles size={16} /></button></div><div className="ai-card"><div className="ai-topline"><span><Sparkles size={14} /> Ask table</span><span>⌘ K</span></div><p>What should I follow up on this week?</p><div className="ai-result"><div className="result-icon"><Users size={16} /></div><div><b>3 people to reconnect with</b><small>Based on your recent conversations</small></div><ArrowRight size={17} /></div><div className="ai-result faded"><div className="result-icon violet"><Check size={16} /></div><div><b>Sarah mentioned her new role</b><small>Meeting notes · 2 days ago</small></div></div></div></section>

      <section className="bento-section section-pad" id="company"><p className="eyebrow">Designed for the way you work</p><h2>Your network is<br /><span>your net worth.</span></h2><div className="bento-grid"><BentoCard icon={<Users size={18} />} title="Groups & Tags" text="Better organize and cluster your network" className="bento-large"><div className="tag-cloud"><span>Investors</span><span>Founders</span><span>Close friends</span><span>Clients</span></div></BentoCard><BentoCard icon={<Sparkles size={18} />} title="Data enrichment" text="Your contacts, always up to date"><div className="profile-stack"><div className="mini-profile"><span className="avatar avatar-green">JM</span><div><b>Jamie Miller</b><small>Founder at Loom</small></div><Check size={14} /></div><div className="mini-profile"><span className="avatar avatar-orange">AK</span><div><b>Alex Kim</b><small>Product at Notion</small></div><Check size={14} /></div></div></BentoCard><BentoCard icon={<Play size={17} />} title="History of touch points" text="Every interaction at a single glance" className="bento-wide"><div className="activity-lines"><span /><span /><span /><span /></div></BentoCard></div></section>

      <section className="testimonial-section section-pad"><div className="testimonial-heading"><p className="eyebrow">Loved by professionals globally</p><h2>Relationships are<br /><span>everything.</span></h2><div className="testimonial-controls"><button aria-label="Previous testimonial">←</button><button aria-label="Next testimonial">→</button></div></div><div className="quote-card"><div className="quote-mark">“</div><blockquote>This CRM feels like a secret weapon for managing relationships. It picks up on the little things I&apos;d normally miss and helps me stay thoughtful without the mental overhead.</blockquote><div className="quote-person"><span className="avatar avatar-purple">CW</span><div><b>Courtney Werner</b><small>Founder, Gift N&apos; Stick</small></div></div></div></section>

      <section className="shortcut-section section-pad" id="pricing"><p className="eyebrow">Keyboard-first by design</p><h2>Take the<br /><span>shortcut.</span></h2><p className="section-lede">Powerful tools should feel effortless. Move through your network with a few simple keystrokes.</p><div className="shortcut-grid"><Shortcut icon={<Command size={19} />} keyName="K" label="Open table AI" /><Shortcut icon={<Search size={19} />} keyName="G C" label="Go to contacts" /><Shortcut icon={<Check size={19} />} keyName="⌥ Y" label="Approve contacts" /></div></section>

      <section className="faq-section section-pad" id="journal"><p className="eyebrow">Questions, answered</p><h2>Frequently<br /><span>asked questions.</span></h2><div className="faq-list"><Faq question="Is my data private and secure?" /><Faq question="Why did we build table?" /><Faq question="When will table be available?" /><Faq question="Will there be a free version of table?" /></div></section>

      <footer className="site-footer"><div className="footer-top"><div><Link className="brand" to="/"><span className="brand-mark">T</span><span>table</span></Link><p>Never lose track of the<br />people who matter most.</p><button className="button button-primary">Download for Mac <Download size={16} /></button></div><div className="footer-column"><b>Features</b><a href="#features">All features</a><a href="#features">Integration</a><a href="#features">Ask table</a><a href="#features">Note taking</a></div><div className="footer-column"><b>Product</b><a href="#pricing">Pricing</a><a href="#changelog">Changelog</a><a href="#journal">Help center</a><a href="#company">About</a></div><div className="footer-column"><b>Connect</b><a href="#login">LinkedIn</a><a href="#login">X / Twitter</a><a href="#login">Community</a><a href="mailto:hello@usetable.ai">Contact</a></div></div><div className="footer-bottom"><span>© 2026 Table AI Inc.</span><span>Privacy&nbsp;&nbsp;&nbsp; Terms&nbsp;&nbsp;&nbsp; DPA</span><span>Web &amp; macOS</span></div></footer>
    </main>
  );
}

function ProductWindow() { return <div className="product-window"><div className="window-bar"><span /><span /><span /><label>table / contacts</label><Search size={14} /></div><div className="window-body"><aside><b className="side-logo">T</b><div className="side-nav active"><Users size={15} /> Contacts</div><div className="side-nav"><Sparkles size={15} /> AI</div><div className="side-nav"><Play size={15} /> Activity</div><div className="side-nav"><span className="side-calendar">□</span> Meetings</div><div className="side-nav"><span className="side-calendar">◷</span> Scheduling</div></aside><div className="contacts-panel"><div className="contacts-heading"><div><small>All contacts</small><h3>Your network</h3></div><button className="new-contact">+ Add contact</button></div><div className="contact-search"><Search size={14} /> Search contacts <span>⌘ K</span></div><div className="contact-list"><Contact initials="JM" name="Jamie Miller" role="Founder at Loom" color="green" /><Contact initials="AK" name="Alex Kim" role="Product at Notion" color="orange" /><Contact initials="SR" name="Sarah Roberts" role="Investor · New York" color="purple" /><Contact initials="DH" name="David Huang" role="Design lead at Linear" color="blue" /></div></div><div className="profile-panel"><div className="profile-avatar">JM</div><h3>Jamie Miller</h3><small>Founder at Loom</small><div className="profile-chips"><span>Founder</span><span>Investor</span></div><div className="profile-detail"><b>Next follow-up</b><p>Ask about the product launch</p><small>Tomorrow · 10:30 AM</small></div></div></div></div> }
function Contact({ initials, name, role, color }: { initials: string; name: string; role: string; color: string }) { return <div className="contact-row"><span className={`avatar avatar-${color}`}>{initials}</span><div><b>{name}</b><small>{role}</small></div><span className="contact-time">2d</span></div> }
function BentoCard({ icon, title, text, children, className = "" }: { icon: React.ReactNode; title: string; text: string; children: React.ReactNode; className?: string }) { return <article className={`bento-card ${className}`}><div className="bento-label">{icon}<b>{title}</b></div><p>{text}</p>{children}</article> }
function Shortcut({ icon, keyName, label }: { icon: React.ReactNode; keyName: string; label: string }) { return <div className="shortcut-card">{icon}<div><b>{label}</b><small>Press <kbd>{keyName}</kbd></small></div><ArrowRight size={15} /></div> }
function Faq({ question }: { question: string }) { return <button className="faq-item"><span>{question}</span><ChevronDown size={18} /></button> }