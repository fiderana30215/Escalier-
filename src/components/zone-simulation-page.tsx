import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight, ClipboardList, Ruler } from "lucide-react";
import type { InterventionZone } from "@/lib/intervention-zones";

const quoteEmail = "secretariat.henaultescalier@gmail.com";

export function ZoneSimulationPage({ zone }: { zone: InterventionZone }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const details = [
      "DEMANDE DE SIMULATION DE DEVIS — ESCALIER SUR MESURE",
      "",
      `Secteur : ${zone.name} (${zone.department})`,
      `Type d’escalier : ${formData.get("stairType")}`,
      `Matériau : ${formData.get("material")}`,
      `Nature du projet : ${formData.get("projectNature")}`,
      `Délai souhaité : ${formData.get("delay")}`,
      `Dimensions / précisions : ${formData.get("dimensions") || "Non renseignées"}`,
      "",
      "COORDONNÉES",
      `Nom : ${formData.get("fullName")}`,
      `Téléphone : ${formData.get("phone")}`,
      `E-mail : ${formData.get("email")}`,
      `Commune / code postal : ${formData.get("city")}`,
      "",
      "Hénault Escalier — 9 bis rue du Bout de la ville, 41200 Romorantin",
    ].join("\n");
    const subject = `Simulation de devis escalier à ${zone.name} - ${formData.get("fullName")}`;

    window.location.href = `mailto:${quoteEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(details)}`;
    setSubmitted(true);
  }

  return (
    <main className="zone-simulation-page">
      <nav className="stair-breadcrumb intervention-breadcrumb" aria-label="Fil d’Ariane">
        <Link to="/">Accueil</Link>
        <ChevronRight size={15} aria-hidden="true" />
        <Link to="/zones-intervention">Zones d’intervention</Link>
        <ChevronRight size={15} aria-hidden="true" />
        <Link to="/zones-intervention/$slug" params={{ slug: zone.slug }}>
          {zone.name}
        </Link>
        <ChevronRight size={15} aria-hidden="true" />
        <span aria-current="page">Simulation de devis</span>
      </nav>

      <section className="simulation-hero" aria-labelledby="simulation-title">
        <div className="simulation-hero-copy">
          <p className="eyebrow">Votre projet à {zone.name} · Réponse personnalisée</p>
          <h1 id="simulation-title">Préparons le budget de votre escalier</h1>
          <p>
            Quelques informations nous aideront à comprendre votre projet à {zone.name} ({zone.department}).
            Notre équipe étudiera votre demande et vous recontactera pour établir un devis adapté.
          </p>
          <div className="simulation-promises">
            <span><Check size={17} aria-hidden="true" /> Étude gratuite et sans engagement</span>
            <span><Check size={17} aria-hidden="true" /> Conseils d’un fabricant depuis 1931</span>
            <span><Check size={17} aria-hidden="true" /> Prise de mesures à domicile si nécessaire</span>
          </div>
        </div>
        <aside className="simulation-info-card" aria-label="Comment fonctionne la simulation">
          <span className="simulation-info-icon"><ClipboardList size={23} aria-hidden="true" /></span>
          <p className="eyebrow">Comment ça marche ?</p>
          <h2>Une première estimation, puis un échange avec notre équipe</h2>
          <p>
            Le prix dépend des dimensions, des matériaux et de la configuration de votre maison.
            Cette demande ne calcule pas un tarif automatique : elle nous permet de préparer une
            estimation vraiment adaptée.
          </p>
          <div className="simulation-info-foot"><Ruler size={17} aria-hidden="true" /> Réponse sous 48h ouvrées</div>
        </aside>
      </section>

      <section className="simulation-form-section" aria-labelledby="simulation-form-title">
        <div className="simulation-form-heading">
          <p className="eyebrow">Simulation gratuite</p>
          <h2 id="simulation-form-title">Parlez-nous de votre escalier</h2>
          <p>Les champs marqués d’un astérisque sont nécessaires pour vous recontacter.</p>
        </div>

        <form className="simulation-form" onSubmit={handleSubmit}>
          <div className="simulation-form-group">
            <h3>Votre projet</h3>
            <div className="simulation-form-grid">
              <label className="simulation-field">
                <span>Type d’escalier souhaité *</span>
                <select name="stairType" defaultValue="Escalier droit" required>
                  <option>Escalier droit</option>
                  <option>Escalier quart tournant</option>
                  <option>Escalier double quart tournant</option>
                  <option>Escalier à limon central</option>
                  <option>Escalier hélicoïdal</option>
                  <option>Rénovation d’un escalier existant</option>
                  <option>Je ne sais pas encore</option>
                </select>
              </label>
              <label className="simulation-field">
                <span>Matériau envisagé *</span>
                <select name="material" defaultValue="À définir avec un conseiller" required>
                  <option>À définir avec un conseiller</option>
                  <option>Chêne massif</option>
                  <option>Hêtre</option>
                  <option>Bois et structure acier</option>
                  <option>Métal</option>
                  <option>Bois, métal et verre</option>
                </select>
              </label>
              <label className="simulation-field">
                <span>Nature du projet</span>
                <select name="projectNature" defaultValue="Rénovation / remplacement">
                  <option>Rénovation / remplacement</option>
                  <option>Construction neuve</option>
                  <option>Aménagement de combles / mezzanine</option>
                </select>
              </label>
              <label className="simulation-field">
                <span>Échéance envisagée</span>
                <select name="delay" defaultValue="Dans les 1 à 2 mois">
                  <option>Dans les 1 à 2 mois</option>
                  <option>Dans les 3 à 6 mois</option>
                  <option>Dans plus de 6 mois</option>
                  <option>Je me renseigne</option>
                </select>
              </label>
            </div>
            <label className="simulation-field">
              <span>Dimensions approximatives ou détails utiles</span>
              <textarea
                name="dimensions"
                rows={4}
                placeholder="Hauteur sol à sol, dimensions de la trémie, contraintes ou envies particulières…"
              />
            </label>
          </div>

          <div className="simulation-form-group">
            <h3>Vos coordonnées</h3>
            <div className="simulation-form-grid">
              <label className="simulation-field">
                <span>Nom et prénom *</span>
                <input name="fullName" type="text" autoComplete="name" required />
              </label>
              <label className="simulation-field">
                <span>Téléphone *</span>
                <input name="phone" type="tel" autoComplete="tel" required />
              </label>
              <label className="simulation-field">
                <span>Adresse e-mail *</span>
                <input name="email" type="email" autoComplete="email" required />
              </label>
              <label className="simulation-field">
                <span>Commune ou code postal *</span>
                <input name="city" type="text" defaultValue={zone.name} autoComplete="postal-code" required />
              </label>
            </div>
          </div>

          <label className="simulation-consent">
            <input type="checkbox" required />
            <span>
              J’accepte que Hénault Escalier utilise mes coordonnées pour me recontacter au sujet
              de ma demande, conformément à la{" "}
              <a href="https://escalier-henault.fr/politique-de-confidentialite/" target="_blank" rel="noreferrer">
                politique de confidentialité
              </a>.
            </span>
          </label>

          <div className="simulation-submit-row">
            <button type="submit" className="site-cta-btn">
              Recevoir mon étude personnalisée <ArrowRight size={17} aria-hidden="true" />
            </button>
            <span>Sans engagement · Les tarifs sont confirmés après étude de votre projet.</span>
          </div>
          {submitted && (
            <p className="simulation-success" role="status">
              Votre demande est prête dans votre logiciel de messagerie. Envoyez le message pour que
              notre équipe puisse vous répondre.
            </p>
          )}
        </form>
      </section>

      <div className="simulation-back-link">
        <Link to="/zones-intervention/$slug" params={{ slug: zone.slug }}>
          <ChevronRight size={16} aria-hidden="true" /> Revenir aux informations pour {zone.name}
        </Link>
      </div>
    </main>
  );
}