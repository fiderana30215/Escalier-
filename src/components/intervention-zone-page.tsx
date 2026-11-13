import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Hammer,
  MapPin,
  Phone,
  Ruler,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { assets } from "@/lib/site-assets";
import { interventionZones, type InterventionZone } from "@/lib/intervention-zones";

const serviceSteps = [
  {
    icon: Ruler,
    title: "Une étude à domicile",
    text: "Nous prenons les mesures et étudions la trémie, les accès et les contraintes de votre intérieur.",
  },
  {
    icon: Hammer,
    title: "Une fabrication sur mesure",
    text: "Votre escalier est conçu et fabriqué dans notre atelier de Romorantin, selon votre projet.",
  },
  {
    icon: Truck,
    title: "Une pose par nos équipes",
    text: "Nos compagnons assurent la livraison et l’installation de votre escalier, sans sous-traitance.",
  },
];

export function InterventionZonePage({ zone }: { zone: InterventionZone }) {
  const otherZones = interventionZones.filter((item) => item.slug !== zone.slug);

  return (
    <main className="intervention-page">
      <nav className="stair-breadcrumb intervention-breadcrumb" aria-label="Fil d’Ariane">
        <Link to="/">Accueil</Link>
        <ChevronRight size={15} aria-hidden="true" />
        <Link to="/zones-intervention">Zones d’intervention</Link>
        <ChevronRight size={15} aria-hidden="true" />
        <span aria-current="page">{zone.name}</span>
      </nav>

      <section className="intervention-hero" aria-labelledby="intervention-title">
        <div className="intervention-hero-copy">
          <p className="eyebrow">Proximité · Fabrication locale · Pose maîtrisée</p>
          <h1 id="intervention-title">Escalier sur mesure à {zone.name}</h1>
          <p className="intervention-lede">
            Hénault Escalier vous accompagne à {zone.name} ({zone.department}) pour concevoir,
            fabriquer et poser un escalier adapté à votre maison. Depuis notre atelier de
            Romorantin, nos équipes suivent votre projet du relevé de cotes à l’installation.
          </p>
          <div className="intervention-actions">
            <Link className="site-cta-btn" to="/simulation/$slug" params={{ slug: zone.slug }}>
              Simuler mon projet <ArrowRight size={17} aria-hidden="true" />
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
          <img
            src={assets.hero}
            alt={`Escalier sur mesure fabriqué par Hénault Escalier pour ${zone.name}`}
          />
          <figcaption>
            <MapPin size={16} aria-hidden="true" /> Intervention à {zone.name} ({zone.department})
          </figcaption>
        </figure>
      </section>

      <section className="intervention-service" aria-labelledby="service-heading">
        <div className="intervention-section-heading">
          <p className="eyebrow">Votre projet à {zone.name}</p>
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
          <p className="eyebrow">À {zone.name} et dans les environs</p>
          <h2 id="intervention-story-heading">Un escalier pensé pour votre intérieur</h2>
          <p>
            Chaque maison est différente. Lors de notre visite à {zone.name}, nous tenons compte de
            votre espace, de vos envies et des contraintes techniques pour concevoir un escalier qui
            s’intègre naturellement à votre intérieur.
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
            <h2 id="highlight-heading">Un suivi de votre projet de A à Z</h2>
            <p>
              Notre atelier est basé à Romorantin et nos propres compagnons réalisent la pose à{" "}
              {zone.name}. Vous gardez le même interlocuteur tout au long de votre projet.
            </p>
          </div>
          <Link className="site-cta-btn" to="/simulation/$slug" params={{ slug: zone.slug }}>
            Simuler mon projet <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="intervention-coverage" aria-labelledby="coverage-heading">
        <div className="intervention-coverage-copy">
          <p className="eyebrow">Centre-Val de Loire & alentours</p>
          <h2 id="coverage-heading">Autres secteurs desservis</h2>
          <p>
            Nous intervenons à {zone.name} ({zone.department}) et dans plusieurs villes de la
            région. Choisissez un secteur pour en savoir plus ou contactez-nous pour vérifier la
            faisabilité de votre projet.
          </p>
          <div className="coverage-stat">
            <MapPin size={29} aria-hidden="true" />
            <span>
              <strong>{zone.department}</strong>
              <small>département de {zone.name}</small>
            </span>
          </div>
        </div>
        <div className="intervention-coverage-panel">
          <div className="coverage-panel-heading">
            <span>
              <MapPin size={16} aria-hidden="true" /> Atelier de fabrication
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
        <ul className="intervention-city-list" aria-label="Autres villes desservies">
          {otherZones.map((item) => (
            <li key={item.slug}>
              <MapPin size={15} aria-hidden="true" />
              <div className="intervention-city-links">
                <Link to="/zones-intervention/$slug" params={{ slug: item.slug }}>
                  <strong>{item.name}</strong> · {item.department}
                </Link>
                <Link className="intervention-city-simulate" to="/simulation/$slug" params={{ slug: item.slug }}>
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
          <h2 id="final-cta-heading">Vous avez un projet à {zone.name} ?</h2>
          <p>Parlez-nous de votre maison et imaginons ensemble l’escalier qui vous ressemble.</p>
        </div>
        <Link className="site-cta-btn" to="/simulation/$slug" params={{ slug: zone.slug }}>
          Simuler mon projet <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}
