import { useEffect, useState } from "react";
import { X, CheckCircle2, HandCoins, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FinancingPopupProps {
  onSelectFinancing?: () => void;
}

export function FinancingPopup({ onSelectFinancing }: FinancingPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFloatingVisible, setIsFloatingVisible] = useState(false);

  useEffect(() => {
    // Check if the user already dismissed it during this session
    const dismissed = sessionStorage.getItem("henault_financing_dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 700);
      return () => clearTimeout(timer);
    } else {
      setIsFloatingVisible(true);
    }
  }, []);

  function handleClose() {
    setIsOpen(false);
    sessionStorage.setItem("henault_financing_dismissed", "true");
    setIsFloatingVisible(true);
  }

  function handleCtaClick() {
    handleClose();
    if (onSelectFinancing) {
      onSelectFinancing();
    }
    // Smooth scroll to quote section
    const target = document.getElementById("devis-rdv");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      {isFloatingVisible && !isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="taux-zero-pill"
          aria-label="Ouvrir les solutions de financement avec ARKEA"
        >
          <span className="taux-zero-pill-badge">
            <HandCoins size={13} strokeWidth={2.5} />
          </span>
          <span className="taux-zero-pill-text">Financement avec ARKEA</span>
        </button>
      )}

      {/* Main Popup Modal */}
      {isOpen && (
        <div
          className="taux-zero-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="taux-zero-title"
          onClick={handleClose}
        >
          <div className="taux-zero-modal" onClick={(e) => e.stopPropagation()}>
            {/* Close icon */}
            <button
              type="button"
              className="taux-zero-close"
              onClick={handleClose}
              aria-label="Fermer la fenêtre"
            >
              <X size={20} />
            </button>

            {/* Header badge */}
            <div className="taux-zero-tag">
              <Sparkles size={14} className="taux-zero-tag-icon" />
              <span>SOLUTIONS DE FINANCEMENT</span>
            </div>

            {/* Title & subtitle */}
            <h2 id="taux-zero-title" className="taux-zero-title">
              Financez votre escalier avec notre{" "}
              <span className="taux-zero-highlight">partenaire ARKEA</span>
            </h2>

            <p className="taux-zero-intro">
              Concrétisez votre projet d'escalier sur mesure en toute sérénité grâce aux solutions
              de financement proposées avec notre partenaire ARKEA.
            </p>

            {/* Benefits list */}
            <div className="taux-zero-benefits">
              <div className="taux-zero-benefit-item">
                <div className="taux-zero-benefit-icon">
                  <HandCoins size={18} />
                </div>
                <div>
                  <strong>Une solution adaptée à votre projet</strong>
                  <p>
                    Étudiez les modalités de financement qui correspondent à votre projet
                    d'escalier.
                  </p>
                </div>
              </div>

              <div className="taux-zero-benefit-item">
                <div className="taux-zero-benefit-icon">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <strong>Un accompagnement personnalisé</strong>
                  <p>
                    Notre équipe vous présente les solutions disponibles avec ARKEA lors de votre
                    étude.
                  </p>
                </div>
              </div>

              <div className="taux-zero-benefit-item">
                <div className="taux-zero-benefit-icon">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <strong>Pour tous vos projets d'escalier</strong>
                  <p>Bois massif, suspendu, limon central, métal contemporain ou rénovation.</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="taux-zero-actions">
              <Button type="button" className="taux-zero-cta-btn" onClick={handleCtaClick}>
                <span>Découvrir les solutions ARKEA</span>
                <ArrowRight size={17} />
              </Button>

              <button type="button" className="taux-zero-dismiss-btn" onClick={handleClose}>
                Continuer la visite
              </button>
            </div>

            {/* Footnote */}
            <p className="taux-zero-legal">
              * Solutions proposées sous réserve d'acceptation du dossier. Simulation et conditions
              remises lors de votre étude gratuite.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
