import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Hammer,
  MapPin,
  MapPinned,
  Phone,
  Ruler,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { assets, pageHead } from "@/lib/site-assets";
import { interventionZones } from "@/lib/intervention-zones";

const serviceSteps = [
  {
    icon: Ruler,
    title: "Un relevé chez vous",
    text: "Nous étudions les dimensions, la trémie et les contraintes de votre maison avant de dessiner votre escalier.",
  },
  {
    icon: Hammer,
    title: "Une fabrication dans notre atelier",
    text: "Votre projet est fabriqué sur mesure à Romorantin, avec le soin d’un savoir-faire transmis depuis 1931.",
  },
  {
    icon: Truck,
    title: "Une pose par nos équipes",
    text: "Nos compagnons assurent la livraison et la pose de votre escalier, sans sous-traitance.",
  },
];

export const Route = createFileRoute("/zones-intervention")({
  head: () =>
    pageHead(
      "Zones d’intervention | Hénault Escalier",
      "Hénault Escalier conçoit, fabrique et pose vos escaliers sur mesure depuis Romorantin, à Blois, Orléans, Tours, Chartres et dans les villes voisines.",
      assets.hero,
    ),
  component: ZonesIntervention,
});

function ZonesIntervention() {
  return (
    <main className="intervention-page">
      <nav className="stair-breadcrumb intervention-breadcrumb" aria-label="Fil d’Ariane">
        <Link to="/">Accueil</Link>
        <ChevronRight size={15} aria-hidden="true" />
        <span aria-current="page">Zones d’intervention</span>
      </nav>

      <section className="intervention-hero" aria-labelledby="intervention-title">
        <div className="intervention-hero-copy">
          <p className="eyebrow">Proximité · Fabrication locale · Pose maîtrisée</p>
          <h1 id="intervention-title">Votre escalier sur mesure, près de chez vous</h1>
          <p className="intervention-lede">
            Depuis notre atelier de Romorantin, nous accompagnons vos projets d’escalier dans le
            Loir-et-Cher, le Loiret, l’Indre-et-Loire, l’Eure-et-Loir et jusqu’aux Yvelines.
          </p>
          <div className="intervention-actions">
            <Link className="site-cta-btn" to="/contact">
              Parlons de votre projet <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <a className="hero-tel-btn" href="tel:+33254824489">
              <Phone size={16} aria-hidden="true" /> 02 54 82 44 89
            </a>
          </div>
          <div className="intervention-proof" aria-label="Les engagements Hénault Escalier">
            <span>
              <Check size={16} aria-hidden="true" /> Atelier à Romorantin
            </span>
            <span>
              <Check size={16} aria-hidden="true" /> Pose sans sous-traitance
            </span>
          </div>
        </div>
        <figure className="intervention-hero-photo">
          <img src={assets.hero} alt="Escalier sur mesure fabriqué par Hénault Escalier" />
          <figcaption>
            <MapPin size={16} aria-hidden="true" /> Au départ de Romorantin (41)
          </figcaption>
        </figure>
      </section>

      <section className="intervention-service" aria-labelledby="service-heading">
        <div className="intervention-section-heading">
          <p className="eyebrow">Un accompagnement de proximité</p>
          <h2 id="service-heading">Du premier rendez-vous à la pose, nous sommes à vos côtés</h2>
        </div>
        <div className="intervention-service-layout">
          <figure className="intervention-video-card">
            <img
              src={assets.client.block2}
              alt="Fabrication d’un escalier sur mesure dans l’atelier Hénault"
            />
            <figcaption>
              <span className="intervention-play-mark">
                <Hammer size={22} aria-hidden="true" />
              </span>
              <span>Un savoir-faire artisanal, de l’atelier à votre maison</span>
            </figcaption>
          </figure>
          <div className="intervention-step-list">
            {serviceSteps.map(({ icon: Icon, title, text }) => (
              <article className="intervention-step" key={title}>
                <span className="intervention-step-icon">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="intervention-story" aria-labelledby="intervention-story-heading">
        <img
          className="intervention-story-photo"
          src={assets.atelier.fabrication}
          alt="Travail du bois dans l’atelier de fabrication Hénault Escalier"
        />
        <div className="intervention-story-copy">
          <p className="eyebrow">Un interlocuteur unique</p>
          <h2 id="intervention-story-heading">Un projet bien pensé, jusque dans les détails</h2>
          <p>
            Chaque maison est différente. Nos déplacements nous permettent de prendre en compte
            votre espace, vos envies et les contraintes techniques avant de concevoir un escalier
            qui s’intègre naturellement à votre intérieur.
          </p>
          <ul>
            <li>
              <Check size={17} aria-hidden="true" /> Étude et prise de cotes à domicile
            </li>
            <li>
              <Check size={17} aria-hidden="true" /> Fabrication sur mesure dans notre atelier
            </li>
            <li>
              <Check size={17} aria-hidden="true" /> Livraison et installation par nos équipes
            </li>
          </ul>
          <Link className="text-link" to="/qui-sommes-nous">
            Découvrez notre entreprise <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="intervention-highlight" aria-labelledby="highlight-heading">
        <div className="intervention-highlight-inner">
          <span className="intervention-highlight-icon">
            <ShieldCheck size={30} aria-hidden="true" />
          </span>
          <div>
            <p className="eyebrow">Le même niveau d’exigence, partout</p>
            <h2 id="highlight-heading">Une équipe locale, un suivi de votre projet de A à Z</h2>
            <p>
              Notre atelier est basé à Romorantin et nos propres compagnons réalisent la pose. Vous
              gardez le même interlocuteur tout au long de votre projet.
            </p>
          </div>
          <Link className="site-cta-btn" to="/contact">
            Demander un devis <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="intervention-coverage" aria-labelledby="coverage-heading">
        <div className="intervention-coverage-copy">
          <p className="eyebrow">Centre-Val de Loire & alentours</p>
          <h2 id="coverage-heading">Nos secteurs d’intervention</h2>
          <p>
            Nous nous déplaçons pour étudier, livrer et poser votre escalier dans dix secteurs
            autour de notre atelier. Vous ne voyez pas votre commune ? Contactez-nous, nous
            étudierons votre demande.
          </p>
          <div className="coverage-stat">
            <MapPinned size={29} aria-hidden="true" />
            <span>
              <strong>10</strong>
              <small>secteurs desservis</small>
            </span>
          </div>
        </div>
        <div className="intervention-coverage-panel">
          <div className="coverage-panel-heading">
            <span>
              <MapPin size={16} aria-hidden="true" /> Zone d’intervention
            </span>
            <strong>Romorantin-Lanthenay</strong>
          </div>
          <div className="coverage-radar" aria-hidden="true">
            <span className="coverage-ring coverage-ring-one" />
            <span className="coverage-ring coverage-ring-two" />
            <span className="coverage-ring coverage-ring-three" />
            <span className="coverage-hub">
              <MapPin size={20} />
            </span>
            <span className="coverage-dot coverage-dot-one" />
            <span className="coverage-dot coverage-dot-two" />
            <span className="coverage-dot coverage-dot-three" />
            <span className="coverage-dot coverage-dot-four" />
            <span className="coverage-dot coverage-dot-five" />
          </div>
          <p className="coverage-caption">Repère de proximité — schéma indicatif</p>
        </div>
        <ul className="intervention-city-list" aria-label="Villes desservies">
          {interventionZones.map(({ name, department, note, slug }) => (
            <li key={slug}>
              <MapPin size={15} aria-hidden="true" />
              <div className="intervention-city-links">
                <Link to="/zones-intervention/$slug" params={{ slug }}>
                  <strong>{name}</strong>
                  {note ? ` · ${note}` : ` · ${department}`}
                </Link>
                <Link className="intervention-city-simulate" to="/simulation/$slug" params={{ slug }}>
                  Simuler
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="intervention-final-cta" aria-labelledby="final-cta-heading">
        <div>
          <p className="eyebrow">Votre projet commence ici</p>
          <h2 id="final-cta-heading">Vous habitez dans notre secteur ?</h2>
          <p>Parlez-nous de votre maison et imaginons ensemble l’escalier qui vous ressemble.</p>
        </div>
        <Link className="site-cta-btn" to="/contact">
          Contactez notre équipe <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}
