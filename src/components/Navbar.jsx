import { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="navbar-header">
      <nav className="navbar-nav" aria-label="Main Navigation">
        {NAV_ITEMS.map((item) => (
          <NavPill
            key={item.id}
            item={item}
            isActive={activeSection === item.id}
            onClick={() => handleNavClick(item.id)}
          />
        ))}
      </nav>
    </header>
  );
}

function NavPill({ item, isActive, onClick }) {
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    const btn = buttonRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * 0.22;
    const deltaY = (e.clientY - centerY) * 0.22;

    btn.style.transform = `translate3d(${deltaX}px, ${deltaY - 2.5}px, 0) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    const btn = buttonRef.current;
    if (!btn) return;
    btn.style.transform = `translate3d(0, 0px, 0) scale(1)`;
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      className={`cursor-target nav-pill ${isActive ? 'active' : ''}`}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-current={isActive ? 'page' : undefined}
      aria-label={`Navigate to ${item.label} section`}
    >
      <span className="nav-pill-text">{item.label}</span>
    </button>
  );
}
