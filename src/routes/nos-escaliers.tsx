import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { assets, pageHead } from "@/lib/site-assets";

export const Route = createFileRoute("/nos-escaliers")({
  head: () =>
    pageHead(
      "Nos escaliers sur mesure - Hénault Escalier à Binas",
      "Découvrez nos types d'escaliers sur mesure fabriqués dans notre atelier de Binas : encloisonnés, quart tournant, limon central, garde-corps métal ou vitré et modernisation.",
      assets.hero,
    ),
  component: NosEscaliers,
});

interface StairTypeItem {
  id: string;
  slug: string;
  name: string;
  badge: string;
  image: string;
  description: string;
  buttonLabel: string;
  buttonClass: string;
}

const stairTypes: StairTypeItem[] = [
  {
    id: "droit",
    slug: "droit",
    name: "Escalier encloisonné",
    badge: "ESCALIER ENCLOISONNÉ",
    image: assets.stairCards.droit,
    description:
      "Une ligne pure et intemporelle pour habiller les volumes linéaires avec élégance.",
    buttonLabel: "Escalier encloisonné",
    buttonClass: "btn-coral",
  },
  {
    id: "quart-tournant",
    slug: "quart-tournant",
    name: "Quart tournant",
    badge: "QUART TOURNANT",
    image: assets.stairCards.quartTournant,
    description: "Le confort d'un changement d'angle optimisant les mètres carrés habitables.",
    buttonLabel: "Quart tournant",
    buttonClass: "btn-teal",
  },
  {
    id: "limon-central",
    slug: "limon-central",
    name: "Escalier Limon Centrale",
    badge: "LIMON CENTRALE",
    image: assets.stairs.helicoidal,
    description: "Une courbe sculpturale et un encombrement maîtrisé pour sublimer votre séjour.",
    buttonLabel: "Escalier Limon Centrale",
    buttonClass: "btn-wood",
  },
  {
    id: "garde-corps-metal",
    slug: "garde-corps-metal",
    name: "Escalier avec garde-corps métal",
    badge: "GARDE-CORPS MÉTAL",
    image: assets.stairCards.gardeCorpsMetal,
    description: "Une rampe et des balustres métalliques pour souligner le caractère de votre escalier.",
    buttonLabel: "Garde-corps métal",
    buttonClass: "btn-coral",
  },
  {
    id: "double-quart-tournant",
    slug: "double-quart-tournant",
    name: "Deux quarts tournant",
    badge: "DEUX QUARTS TOURNANT",
    image: assets.stairs.deuxQuartTournant,
    description: "Deux changements de direction pour un escalier compact et élégant.",
    buttonLabel: "Deux quarts tournant",
    buttonClass: "btn-sage",
  },
  {
    id: "garde-corps-verre",
    slug: "garde-corps-verre",
    name: "Escalier avec garde-corps vitré",
    badge: "GARDE-CORPS VITRÉ",
    image: assets.stairs.verre,
    description: "Un garde-corps vitré qui laisse circuler la lumière et préserve les perspectives.",
    buttonLabel: "Garde-corps vitré",
    buttonClass: "btn-wood",
  },
  {
    id: "renovation",
    slug: "renovation",
    name: "Modernisation d'escalier",
    badge: "MODERNISATION",
    image: assets.stairs.renovation,
    description: "Habillage ou remplacement soigné de votre ancien escalier sans dégrader vos murs.",
    buttonLabel: "Modernisation escalier",
    buttonClass: "btn-sage",
  },
];

function NosEscaliers() {
  return (
    <main>
      <section className="tilo-section" aria-labelledby="stair-types-heading">
        <div className="tilo-section-header">
          <div>
            <p className="eyebrow">Catalogue & Savoir-faire</p>
            <h1 id="stair-types-heading">Nos 7 types d'escaliers sur mesure</h1>
            <p className="lede">
              Inspirés du style architectural contemporain : chaque modèle est façonné sur mesure
              dans nos ateliers de Binas. Cliquez sur un modèle pour configurer votre devis.
            </p>
          </div>
          <Link className="text-link" to="/nos-creations">
            Toutes les réalisations en images <ArrowRight size={15} />
          </Link>
        </div>

        <div className="tilo-grid">
          {stairTypes.map((item) => (
            <Link key={item.id} to={`/escaliers/${item.slug}`} className="tilo-card">
              <img
                src={item.image}
                alt={`${item.name} sur mesure Hénault Escalier`}
                className="tilo-card-img"
                loading="lazy"
              />
              <div className="tilo-card-overlay" />
              <div className="tilo-card-content">
                <h2 className="tilo-card-title">{item.badge}</h2>
                <p className="tilo-card-desc">{item.description}</p>
                <span className={`tilo-card-btn ${item.buttonClass}`}>
                  {item.buttonLabel}
                  <ArrowRight size={14} aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
