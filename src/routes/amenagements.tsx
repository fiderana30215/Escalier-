import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight } from "lucide-react";
import { assets, pageHead } from "@/lib/site-assets";

export const Route = createFileRoute("/amenagements")({
  head: () =>
    pageHead(
      "Aménagements sous escalier et verrières d’atelier | Hénault Escalier",
      "Rangements sur mesure sous escalier, claustras et bibliothèques, verrières d’atelier en bois : fabriqués dans notre atelier de Binas.",
      assets.complementary.sousEscalier,
    ),
  component: Amenagements,
});

const amenagements = [
  {
    image: assets.complementary.sousEscalier,
    alt: "Aménagement sous escalier sur mesure en bois et noir",
    title: "Rangements & Placards sous escalier",
    text: "Tiroirs coulissants sur mesure, dressings intégrés, vestiaires et niches optimisant chaque centimètre sous vos marches.",
    cta: "Demander une étude sous escalier",
  },
  {
    image: assets.complementary.bibliotheque,
    alt: "Bibliothèque et claustra en bois sur mesure intégrés à l'escalier",
    title: "Bibliothèques & Claustras sur mesure",
    text: "Claustras ajourés en bois massif, étagères et bibliothèques architecturales faisant le lien entre vos pièces de vie.",
    cta: "Imaginer votre claustra",
  },
  {
    image: assets.complementary.verriereBois,
    alt: "Verrière d'atelier en bois massif sur mesure",
    title: "Verrières d'atelier en bois",
    text: "Cloisonnements vitrés laissant circuler la lumière tout en délimitant votre entrée, séjour ou cage d'escalier avec élégance.",
    cta: "Parler de votre verrière",
  },
];

function Amenagements() {
  return (
    <main>
      <nav className="stair-breadcrumb" aria-label="Fil d’Ariane">
        <Link to="/">Accueil</Link>
        <ChevronRight size={15} aria-hidden="true" />
        <span aria-current="page">Aménagements & verrières</span>
      </nav>

      <section className="home-complementary" aria-labelledby="amenagements-title">
        <div className="section-intro">
          <p className="eyebrow">Agencements & Verrières d'atelier</p>
          <h1 id="amenagements-title">Aménagements sous escalier et verrières d'atelier</h1>
          <p>
            Prolongez l'harmonie de votre intérieur avec des rangements sur mesure intégrés sous vos
            marches ou une verrière artisanale en métal et bois conçue dans nos ateliers.
          </p>
        </div>

        <div className="complementary-grid">
          {amenagements.map((item) => (
            <article key={item.title} className="complementary-card">
              <img src={item.image} alt={item.alt} loading="lazy" />
              <div className="complementary-card-body">
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <Link to="/contact" className="text-link">
                  {item.cta} <ArrowRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
