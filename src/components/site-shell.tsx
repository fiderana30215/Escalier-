import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Instagram, Facebook, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { assets, facebookUrl, instagramUrl } from "@/lib/site-assets";
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <Link to="/" className="brand" aria-label="Hénault Escalier - Accueil">
        <img src={assets.logo} alt="HÉNAULT ESCALIER" />
      </Link>
      <Button
        variant="ghost"
        size="icon"
        className="menu-toggle"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </Button>
      <nav className={`site-nav ${open ? "open" : ""}`} aria-label="Navigation principale">
        <Link to="/" className={pathname === "/" ? "active" : ""}>
          Accueil
        </Link>
        <Link
          to="/qui-sommes-nous"
          className={pathname.startsWith("/qui-sommes-nous") ? "active" : ""}
        >
          Qui sommes-nous
        </Link>
        <Link
          to="/nos-creations"
          className={pathname.startsWith("/nos-creations") ? "active" : ""}
        >
          Nos réalisations
        </Link>
        <a href="/#nos-escaliers">
          Nos escaliers
        </a>
        <a href="/#zones">
          Zones d'intervention
        </a>
        <a href="/#devis-rdv" className="site-cta-small">
          Demander un devis
        </a>
        <a href="/#devis-rdv" className="site-cta-outline">
          Prendre rendez-vous
        </a>
        <Link
          to="/contact"
          className={pathname.startsWith("/contact") ? "active" : ""}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
export function SiteFooter() {
  return (
    <>
      <aside className="social-float" aria-label="Réseaux sociaux">
        <a href={facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook">
          <Facebook fill="currentColor" size={22} />
        </a>
        <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram">
          <Instagram size={24} />
        </a>
      </aside>
      <footer className="site-footer">
        <div className="footer-inner">
          <Link to="/" className="brand" aria-label="Hénault Escalier">
            <img src={assets.whiteLogo} alt="HÉNAULT ESCALIER" />
          </Link>
          <div>
            <strong>Hénault Escalier</strong>
            <br />
            9 bis rue du Bout de la ville - 41240 Binas
            <br />
            Tél. : <a href="tel:+33254824489">02 54 82 44 89</a>
            <br />
            Mail : <a href="mailto:contact@henault-cie.com">contact@henault-cie.com</a>
            <br />
            <small style={{ display: "block", marginTop: "6px", opacity: 0.85 }}>
              Atelier ouvert du lundi au vendredi : 9h00 à 12h30 et 13h30 à 18h00
            </small>
          </div>
          <div>
            <div className="footer-social">
              <a href={facebookUrl} aria-label="Facebook" target="_blank" rel="noreferrer">
                <Facebook size={17} />
              </a>
              <a href={instagramUrl} aria-label="Instagram" target="_blank" rel="noreferrer">
                <Instagram size={17} />
              </a>
            </div>
            <p style={{ margin: "0 0 8px", fontSize: "11px", opacity: 0.85 }}>
              Intervention : Blois, Orléans, Tours, Chartres, Dreux, Versailles, Vendôme, Châteaudun, Beaugency
            </p>
            <a
              href="https://escalier-henault.fr/politique-de-confidentialite/"
              target="_blank"
              rel="noreferrer"
            >
              Politique de confidentialité
            </a>
            <br />
            <a
              href="https://escalier-henault.fr/mentions-legales/"
              target="_blank"
              rel="noreferrer"
            >
              Mentions légales
            </a>
            <a href="https://www.kiwik.com/" target="_blank" rel="noreferrer">
              <img className="mx-auto mt-3 w-10" src={assets.agency} alt="KIWIK" />
            </a>
          </div>
        </div>
      </footer>
      <Button
        className="back-top"
        size="icon"
        aria-label="Retour en haut"
        title="Retour en haut"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ChevronUp />
      </Button>
    </>
  );
}
