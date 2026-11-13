import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { getStairTypePhotos, pageHead } from "@/lib/site-assets";

interface StairTypePage {
  name: string;
  eyebrow: string;
  intro: string;
  paragraphs: [string, string];
  benefits: string[];
  photoFolders: string[];
}

const stairTypePages: Record<string, StairTypePage> = {
  droit: {
    name: "Escalier droit",
    eyebrow: "Ligne pure · Confort au quotidien",
    intro: "Un tracé simple et intemporel, pensé pour s’intégrer naturellement à votre intérieur.",
    paragraphs: [
      "L’escalier droit relie deux niveaux dans un seul mouvement. Sa géométrie lisible facilite la circulation et met en valeur les matériaux, les marches et la lumière de votre pièce.",
      "Chaque projet est étudié selon la hauteur à franchir, la longueur disponible et l’usage de la maison. Nous adaptons l’essence de bois, les finitions et le garde-corps pour créer un escalier à la fois confortable et harmonieux.",
    ],
    benefits: [
      "Une circulation fluide et intuitive",
      "Un dessin sobre qui traverse les styles",
      "Des finitions et garde-corps personnalisables",
    ],
    photoFolders: ["escalierDroit"],
  },
  "quart-tournant": {
    name: "Escalier quart tournant",
    eyebrow: "Optimisation de l’espace · Plan sur mesure",
    intro:
      "Un changement de direction qui épouse la configuration de votre maison et libère de l’espace.",
    paragraphs: [
      "Le quart tournant permet de modifier l’orientation de l’escalier tout en conservant une montée confortable. Le virage peut être placé en bas, en haut ou au milieu, selon la circulation et l’agencement des pièces.",
      "Nous dessinons le tournant et ses marches en fonction de votre trémie et de vos habitudes. Bois, métal, contremarches ouvertes ou pleines : chaque détail est choisi pour trouver le bon équilibre entre usage et caractère.",
    ],
    benefits: [
      "S’adapte aux cages d’escalier compactes",
      "Position du virage définie avec vous",
      "Choix des matériaux et du style de rampe",
    ],
    photoFolders: ["quartTournant"],
  },
  "limon-central": {
    name: "Escalier à limon central",
    eyebrow: "Structure graphique · Esprit contemporain",
    intro:
      "Une ligne centrale porte les marches et donne à l’escalier une silhouette légère et sculpturale.",
    paragraphs: [
      "Le limon central souligne la forme de l’escalier sans alourdir le volume. Il met en scène les marches et laisse circuler la lumière, pour une présence architecturale affirmée dans une entrée ou une pièce de vie.",
      "La structure est conçue pour répondre aux contraintes de portée et d’ancrage de votre maison. Nous harmonisons la teinte du limon, le choix du bois et le garde-corps afin que l’ensemble reste cohérent avec votre décoration.",
    ],
    benefits: [
      "Une structure visuellement aérienne",
      "Un dessin qui valorise les marches",
      "Des associations bois et métal sur mesure",
    ],
    photoFolders: ["limon central"],
  },
  "double-quart-tournant": {
    name: "Escalier double quart tournant",
    eyebrow: "Deux changements de direction · Confort",
    intro:
      "Deux virages organisent la montée et s’adaptent aux espaces qui demandent un parcours compact.",
    paragraphs: [
      "Avec ses deux changements de direction, cet escalier accompagne naturellement les plans en angle et les trémies plus resserrées. Les paliers ou marches balancées sont étudiés pour assurer une progression régulière entre les niveaux.",
      "La conception tient compte de la hauteur, du reculement et de la largeur de passage. Nous travaillons les proportions, les matériaux et la rampe pour obtenir une réalisation confortable, solide et parfaitement intégrée.",
    ],
    benefits: [
      "Convient aux plans avec espace limité",
      "Parcours ajusté à la trémie existante",
      "Paliers et marches étudiés pour le confort",
    ],
    photoFolders: ["2quarttournant", "2quarttournant2.0"],
  },
  "garde-corps-metal": {
    name: "Escalier avec garde-corps métal",
    eyebrow: "Détails métalliques · Finition sur mesure",
    intro:
      "Un garde-corps métallique apporte une ligne graphique et une protection élégante à votre escalier.",
    paragraphs: [
      "Barreaux fins, lignes droites ou dessin plus marqué : le métal permet de personnaliser le garde-corps et de donner du caractère à l’escalier. Associé à une main courante en bois, il crée un contraste chaleureux et contemporain.",
      "La forme, la teinte et les fixations sont étudiées avec l’escalier et l’aménagement de la pièce. Nous veillons à obtenir un ensemble harmonieux, confortable à l’usage et adapté à votre intérieur.",
    ],
    benefits: [
      "Barreaux et lignes personnalisés",
      "Finitions métalliques au choix",
      "Association possible avec une main courante en bois",
    ],
    photoFolders: ["quartTournant", "2quarttournant", "escalierDroit"],
  },
  metal: {
    name: "Escalier métal",
    eyebrow: "Caractère contemporain · Structure maîtrisée",
    intro: "Le métal dessine une structure affirmée, associé au bois pour un contraste chaleureux.",
    paragraphs: [
      "L’acier permet des lignes fines et des formes variées, du limon discret à la structure plus graphique. Associé à des marches en bois, il crée un contraste équilibré qui s’intègre aussi bien dans une rénovation que dans une maison contemporaine.",
      "La conception est adaptée à la configuration de votre espace et aux points d’appui disponibles. Couleur de la structure, forme de la main courante et matériaux des marches sont définis ensemble pour un résultat cohérent et durable.",
    ],
    benefits: [
      "Structure dessinée pour votre espace",
      "Finitions et teintes personnalisables",
      "Association possible avec marches en bois",
    ],
    photoFolders: ["debillardé", "2quarttournant2.0"],
  },
  "garde-corps-verre": {
    name: "Escalier avec garde-corps verre",
    eyebrow: "Transparence · Lumière préservée",
    intro:
      "Le garde-corps en verre sécurit ouvre les perspectives et laisse la lumière circuler entre les niveaux.",
    paragraphs: [
      "Un garde-corps vitré apporte une sensation d’espace sans masquer l’escalier ni la pièce. Il accompagne une structure en bois ou en métal et permet de conserver une vue dégagée dans les intérieurs où la lumière compte.",
      "Nous étudions les dimensions, les fixations et les finitions avec attention pour associer transparence et sécurité. La main courante et le support sont choisis selon le style recherché et les contraintes de votre habitation.",
    ],
    benefits: [
      "Laisse passer la lumière naturelle",
      "Préserve les vues et les volumes",
      "Verre sécurit et fixations adaptés au projet",
    ],
    photoFolders: ["escalierBoisAvecGardeCorpEnVer"],
  },
  renovation: {
    name: "Rénovation d’escalier",
    eyebrow: "Seconde vie · Respect de l’existant",
    intro:
      "Modernisez votre escalier et ses finitions en tenant compte de la structure déjà en place.",
    paragraphs: [
      "Un escalier existant peut retrouver sa place dans votre intérieur grâce à une rénovation adaptée. Selon son état et vos attentes, nous étudions les possibilités d’habillage, de remplacement de marches, de mise à jour du garde-corps ou de reprise des finitions.",
      "Chaque intervention commence par l’observation de l’ouvrage et de son environnement. Cette étape permet de définir une solution réaliste, de préserver les éléments qui peuvent l’être et d’intégrer le nouvel aspect à votre décoration.",
    ],
    benefits: [
      "Étude de l’état et de la configuration existante",
      "Solutions adaptées à l’ouvrage en place",
      "Finitions coordonnées à votre intérieur",
    ],
    photoFolders: ["quartTournant", "quarttournant2.0"],
  },
};

export const Route = createFileRoute("/escaliers/$slug")({
  beforeLoad: ({ params }) => {
    if (!stairTypePages[params.slug]) throw notFound();
  },
  head: ({ params }) => {
    const page = stairTypePages[params.slug];
    return pageHead(
      `${page?.name ?? "Escalier sur mesure"} | Hénault Escalier`,
      page?.intro ??
        "Découvrez nos escaliers sur mesure fabriqués dans notre atelier à Romorantin.",
      getStairTypePhotos(page?.photoFolders ?? [""])[0],
    );
  },
  component: StairTypeDetail,
});

function StairTypeDetail() {
  const { slug } = Route.useParams();
  const page = stairTypePages[slug];
  const photos = getStairTypePhotos(page.photoFolders);

  return (
    <main className="stair-type-page">
      <nav className="stair-breadcrumb" aria-label="Fil d’Ariane">
        <Link to="/">Accueil</Link>
        <ChevronRight size={15} aria-hidden="true" />
        <a href="/#nos-escaliers">Nos escaliers</a>
        <ChevronRight size={15} aria-hidden="true" />
        <span aria-current="page">{page.name}</span>
      </nav>

      <section className="stair-type-hero">
        <div className="stair-type-copy">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.name} sur mesure</h1>
          <p className="stair-type-lede">{page.intro}</p>
          <div className="stair-type-actions">
            <Link className="site-cta" to="/contact">
              Parlons de votre projet <ArrowRight size={16} />
            </Link>
            <Link className="text-link" to="/nos-creations">
              Voir nos réalisations
            </Link>
          </div>
        </div>
        <figure className="stair-type-hero-photo">
          <img src={photos[0]} alt={`${page.name} réalisé par Hénault Escalier`} />
          <figcaption>Une réalisation sur mesure, pensée pour votre intérieur.</figcaption>
        </figure>
      </section>

      <section className="stair-type-story" aria-labelledby="stair-type-story-heading">
        <div className="stair-type-story-heading">
          <p className="eyebrow">Conception & fabrication</p>
          <h2 id="stair-type-story-heading">Un escalier conçu autour de votre maison</h2>
        </div>
        <div className="stair-type-story-copy">
          <p>{page.paragraphs[0]}</p>
          <p>{page.paragraphs[1]}</p>
        </div>
      </section>

      <section className="stair-type-benefits" aria-label={`Les atouts : ${page.name}`}>
        {page.benefits.map((benefit) => (
          <div className="stair-type-benefit" key={benefit}>
            <Check size={18} aria-hidden="true" />
            <p>{benefit}</p>
          </div>
        ))}
      </section>

      <section className="stair-type-gallery" aria-labelledby="stair-gallery-heading">
        <div className="stair-type-gallery-heading">
          <div>
            <p className="eyebrow">Galerie photo</p>
            <h2 id="stair-gallery-heading">Nos {page.name.toLowerCase()} en images</h2>
          </div>
          <p>Quelques exemples de réalisations et de détails issus de nos projets.</p>
        </div>
        <div className="stair-type-photo-grid">
          {photos.map((photo, index) => (
            <figure className="stair-type-photo" key={photo}>
              <img
                src={photo}
                alt={`${page.name} sur mesure – photo ${index + 1}`}
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </section>

      <section className="stair-type-contact">
        <div>
          <p className="eyebrow">Votre projet, notre savoir-faire</p>
          <h2>Imaginons votre {page.name.toLowerCase()} ensemble.</h2>
          <p>Échangeons sur votre espace, vos envies et les solutions adaptées à votre maison.</p>
        </div>
        <Link className="site-cta" to="/contact">
          Demander un devis <ArrowRight size={16} />
        </Link>
      </section>
    </main>
  );
}
