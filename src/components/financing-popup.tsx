import { useEffect, useState } from "react";
import { X, CheckCircle2, Percent, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FinancingPopupProps {
  onSelectFinancing?: () => void;
}

export function FinancingPopup({ onSelectFinancing }: FinancingPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFloatingVisible, setIsFloatingVisible] = useState(false);

  useEffect(() => {
    // Check if the user already dismissed it during this session
    const dismissed = sessionStorage.getItem("henault_taux_zero_dismissed");
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
    sessionStorage.setItem("henault_taux_zero_dismissed", "true");
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
      {/* Floating pill to reopen modal if closed */}
      {isFloatingVisible && !isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="taux-zero-pill"
          aria-label="Ouvrir l'offre de financement à taux 0"
        >
          <span className="taux-zero-pill-badge">
            <Percent size={13} strokeWidth={2.5} />
          </span>
          <span className="taux-zero-pill-text">Financement Taux 0%</span>
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
          <div
            className="taux-zero-modal"
            onClick={(e) => e.stopPropagation()}
          >
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
              <span>OFFRE SPÉCIALE HÉNAULT ESCALIER</span>
            </div>

            {/* Title & subtitle */}
            <h2 id="taux-zero-title" className="taux-zero-title">
              Financez votre projet avec un{" "}
              <span className="taux-zero-highlight">taux 0%</span>
            </h2>

            <p className="taux-zero-intro">
              Concrétisez votre projet d'escalier sur mesure en toute sérénité.
              Profitez d'un paiement échelonné en plusieurs fois, sans aucuns frais
              ni intérêts bancaires.
            </p>

            {/* Benefits list */}
            <div className="taux-zero-benefits">
              <div className="taux-zero-benefit-item">
                <div className="taux-zero-benefit-icon">
                  <Percent size={18} />
                </div>
                <div>
                  <strong>0% d'intérêts et 0€ de frais de dossier</strong>
                  <p>Aucun surcoût sur votre chiffrage artisanal : vous payez uniquement le prix réel de votre escalier.</p>
                </div>
              </div>

              <div className="taux-zero-benefit-item">
                <div className="taux-zero-benefit-icon">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <strong>Mensualités souples & adaptées</strong>
                  <p>Échelonnez sereinement votre investissement sans déséquilibrer votre budget travaux.</p>
                </div>
              </div>

              <div className="taux-zero-benefit-item">
                <div className="taux-zero-benefit-icon">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <strong>Valable sur l'ensemble de notre gamme</strong>
                  <p>Bois massif, suspendu, limon central, métal contemporain ou rénovation complète de votre escalier existant.</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="taux-zero-actions">
              <Button
                type="button"
                className="taux-zero-cta-btn"
                onClick={handleCtaClick}
              >
                <span>Profiter de l'offre à taux 0</span>
                <ArrowRight size={17} />
              </Button>

              <button
                type="button"
                className="taux-zero-dismiss-btn"
                onClick={handleClose}
              >
                Continuer la visite sans financement
              </button>
            </div>

            {/* Footnote */}
            <p className="taux-zero-legal">
              * Offre réservée aux particuliers pour tout projet d'escalier sur mesure posé par nos compagnons.
              Sous réserve d'acceptation du dossier. Simulation et conditions remises lors de votre étude gratuite.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

