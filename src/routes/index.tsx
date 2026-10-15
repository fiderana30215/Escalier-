import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { assets, pageHead } from "@/lib/site-assets";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Escalier sur mesure en Loir-et-Cher | Hénault & Cie fabricant depuis 1931",
      "Fabricant d'escaliers sur mesure à Binas (Loir-et-Cher). Conception en atelier et pose sans sous-traitance à Blois, Orléans, Tours, Chartres, Dreux et Versailles.",
      assets.hero,
    ),
  component: Index,
});

interface StairTypeItem {
  id: string;
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
    name: "Escalier droit",
    badge: "ESCALIER DROIT",
    image: assets.stairs.droit,
    description: "Une ligne pure et intemporelle pour habiller les volumes linéaires avec élégance.",
    buttonLabel: "Escalier droit",
    buttonClass: "btn-coral",
  },
  {
    id: "quart-tournant",
    name: "Quart tournant",
    badge: "QUART TOURNANT",
    image: assets.stairs.quartTournant,
    description: "Le confort d'un changement d'angle optimisant les mètres carrés habitables.",
    buttonLabel: "Quart tournant",
    buttonClass: "btn-teal",
  },
  {
    id: "helicoïdal",
    name: "Escalier hélicoïdal",
    badge: "HÉLICOÏDAL",
    image: assets.stairs.helicoidal,
    description: "Une courbe sculpturale et un encombrement maîtrisé pour sublimer votre séjour.",
    buttonLabel: "Escalier hélicoïdal",
    buttonClass: "btn-wood",
  },
  {
    id: "suspendu",
    name: "Escalier suspendu",
    badge: "ESCALIER SUSPENDU",
    image: assets.stairs.suspendu,
    description: "Des marches aériennes qui flottent dans l'espace et laissent circuler la lumière.",
    buttonLabel: "Escalier suspendu",
    buttonClass: "btn-sage",
  },
  {
    id: "bois",
    name: "Escalier en bois",
    badge: "ESCALIER BOIS",
    image: assets.stairs.bois,
    description: "La noblesse du chêne, du hêtre ou du frêne massif, façonnés avec passion.",
    buttonLabel: "Escalier en bois",
    buttonClass: "btn-coral",
  },
  {
    id: "metal",
    name: "Escalier métal",
    badge: "ESCALIER MÉTAL",
    image: assets.stairs.metal,
    description: "Limon acier contemporain et marches bois pour un contraste architectural fort.",
    buttonLabel: "Escalier métal",
    buttonClass: "btn-teal",
  },
  {
    id: "verre",
    name: "Escalier verre",
    badge: "ESCALIER VERRE",
    image: assets.stairs.verre,
    description: "Garde-corps en verre securit pour une transparence maximale et des pièces agrandies.",
    buttonLabel: "Escalier verre",
    buttonClass: "btn-wood",
  },
  {
    id: "renovation",
    name: "Rénovation d'escalier",
    badge: "RÉNOVATION",
    image: assets.stairs.renovation,
    description: "Habillage ou remplacement soigné de votre ancien escalier sans dégrader vos murs.",
    buttonLabel: "Rénovation escalier",
    buttonClass: "btn-sage",
  },
];

const customerReviews = [
  {
    author: "Laurent D.",
    location: "Blois (41)",
    project: "Escalier quart tournant en chêne massif",
    quote:
      "Un travail d'artisan exceptionnel. L'escalier quart tournant en chêne est magnifique, les cotes sont respectées au millimètre. Une équipe discrète, polie et un chantier laissé impeccable.",
  },
  {
    author: "Sylvie & Marc B.",
    location: "Orléans (45)",
    project: "Escalier suspendu contemporain",
    quote:
      "Nous souhaitions un escalier suspendu très aérien pour faire entrer la lumière dans notre salon. Hénault & Cie a su relever le défi technique avec brio. Ponctualité et écoute exemplaires.",
  },
  {
    author: "Pascal R.",
    location: "Chartres (28)",
    project: "Escalier droit bois et métal",
    quote:
      "La qualité de fabrication en atelier se voit immédiatement par rapport aux modèles industriels. Aucun grincement, finitions impeccables et pose assurée par leurs propres compagnons.",
  },
];

const interventionZones = [
  { name: "Binas", dpt: "41 (Siège et atelier)" },
  { name: "Blois", dpt: "41" },
  { name: "Vendôme", dpt: "41" },
  { name: "Orléans", dpt: "45" },
  { name: "Beaugency", dpt: "45" },
  { name: "Tours", dpt: "37" },
  { name: "Chartres", dpt: "28" },
  { name: "Châteaudun", dpt: "28" },
  { name: "Dreux", dpt: "28" },
  { name: "Versailles", dpt: "78" },
];

const heroSlides = [
  {
    id: "01",
    image: assets.client.heroSlide1,
    alt: "Escalier contemporain sur mesure en bois et métal Hénault & Cie",
    title: "Escalier contemporain",
  },
  {
    id: "02",
    image: assets.client.heroSlide2,
    alt: "Escalier limon central avec lumière intégrée Hénault & Cie",
    title: "Limon central avec lumière",
  },
];

function Index() {
  const pageRef = useRef<HTMLElement>(null);
  const quoteSectionRef = useRef<HTMLElement>(null);

  const [activeTab, setActiveTab] = useState<"devis" | "rdv">("devis");
  const [selectedStairType, setSelectedStairType] = useState<string>("Escalier droit");
  const [devisSubmitted, setDevisSubmitted] = useState(false);
  const [rdvSubmitted, setRdvSubmitted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSliderPaused, setIsSliderPaused] = useState(false);

  useEffect(() => {
    if (isSliderPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isSliderPaused]);

  useEffect(() => {
    const handleHash = () => {
      if (typeof window !== "undefined" && window.location.hash === "#rdv") {
        setActiveTab("rdv");
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;
    const elements = page.querySelectorAll<HTMLElement>(".scroll-reveal");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.1, rootMargin: "0px 0px -30px" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  function handleSelectType(typeName: string) {
    setSelectedStairType(typeName);
    setActiveTab("devis");
    if (quoteSectionRef.current) {
      quoteSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function handleOpenRdv() {
    setActiveTab("rdv");
    if (quoteSectionRef.current) {
      quoteSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function handleQuoteSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const type = formData.get("stairType") || selectedStairType;
    const material = formData.get("material") || "";
    const project = formData.get("projectNature") || "";
    const delay = formData.get("delay") || "";
    const dimensions = formData.get("dimensions") || "";
    const fullName = formData.get("fullName") || "";
    const phone = formData.get("phone") || "";
    const email = formData.get("email") || "";
    const city = formData.get("city") || "";

    const mailSubject = `Demande de devis escalier sur mesure - ${fullName} (${city})`;
    const mailBody = `DEMANDE DE DEVIS ESCALIER SUR MESURE\n\n` +
      `Type d'escalier : ${type}\n` +
      `Matériau souhaité : ${material}\n` +
      `Nature du projet : ${project}\n` +
      `Délai souhaité : ${delay}\n` +
      `Dimensions ou remarques : ${dimensions}\n\n` +
      `COORDONNÉES CLIENT :\n` +
      `Nom et Prénom : ${fullName}\n` +
      `Téléphone : ${phone}\n` +
      `E-mail : ${email}\n` +
      `Ville ou Code Postal : ${city}\n\n` +
      `Fabricant : Hénault & Cie - 9 bis rue du Bout de la ville, 41240 Binas`;

    window.location.href = `mailto:contact@henault-cie.com?subject=${encodeURIComponent(
      mailSubject,
    )}&body=${encodeURIComponent(mailBody)}`;
    setDevisSubmitted(true);
  }

  function handleRdvSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const sector = formData.get("sector") || "";
    const slot = formData.get("slot") || "";
    const date = formData.get("date") || "";
    const fullName = formData.get("fullName") || "";
    const phone = formData.get("phone") || "";
    const email = formData.get("email") || "";
    const address = formData.get("address") || "";
    const notes = formData.get("notes") || "";

    const mailSubject = `Demande de rendez-vous visite de mesure - ${fullName} (${sector})`;
    const mailBody = `DEMANDE DE VISITE DE MESURE EN LIGNE\n\n` +
      `Secteur d'intervention : ${sector}\n` +
      `Date souhaitée : ${date}\n` +
      `Créneau horaire : ${slot}\n` +
      `Adresse complète : ${address}\n` +
      `Remarques / Accès : ${notes}\n\n` +
      `COORDONNÉES CLIENT :\n` +
      `Nom et Prénom : ${fullName}\n` +
      `Téléphone : ${phone}\n` +
      `E-mail : ${email}\n\n` +
      `Horaires atelier : Lundi au vendredi, 9h00-12h30 et 13h30-18h00\n` +
      `Hénault & Cie - 9 bis rue du Bout de la ville, 41240 Binas`;

    window.location.href = `mailto:contact@henault-cie.com?subject=${encodeURIComponent(
      mailSubject,
    )}&body=${encodeURIComponent(mailBody)}`;
    setRdvSubmitted(true);
  }

  return (
    <main ref={pageRef}>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            name: "Hénault & Cie",
            description:
              "Fabricant d'escaliers sur mesure en bois, métal et verre à Binas depuis 1931. Conception en atelier et pose sans sous-traitance.",
            url: "https://escalier-henault.fr",
            telephone: "+33254824489",
            email: "contact@henault-cie.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "9 bis rue du Bout de la ville",
              addressLocality: "Binas",
              postalCode: "41240",
              addressCountry: "FR",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "12:30",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "13:30",
                closes: "18:00",
              },
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "49",
              bestRating: "5",
            },
            areaServed: [
              "Binas",
              "Blois",
              "Vendôme",
              "Orléans",
              "Beaugency",
              "Tours",
              "Chartres",
              "Châteaudun",
              "Dreux",
              "Versailles",
            ],
          }),
        }}
      />

      {/* Hero section (Tilo style with 2-photo sliding carousel) */}
      <section className="tilo-hero">
        <div className="tilo-hero-content">
          <p className="eyebrow">Fabricant d'escaliers sur mesure depuis 1931</p>
          <h1 className="tilo-hero-title">
            Votre escalier <span className="highlight-band">donne le ton</span> à toute votre maison.
          </h1>
          <p className="hero-lede">
            Menuiserie d'art et tradition familiale : nous concevons, fabriquons dans nos ateliers
            de Binas et posons vos escaliers sur mesure en bois, métal ou verre, sans aucune
            sous-traitance, dans le Loir-et-Cher, la région Centre-Val de Loire et en Île-de-France.
          </p>

          <div className="cta-row">
            <button
              type="button"
              onClick={() => handleSelectType("Escalier droit")}
              className="site-cta-btn"
            >
              Demander un devis gratuit <ArrowRight size={16} />
            </button>
            <button type="button" onClick={handleOpenRdv} className="hero-tel-btn">
              <CalendarDays size={16} /> Visite de mesure
            </button>
            <a href="tel:+33254824489" className="hero-tel-btn">
              <Phone size={15} /> 02 54 82 44 89
            </a>
          </div>

          <div className="hero-proof">
            <span>
              <Check size={16} /> Fabrication 100% atelier à Binas (41)
            </span>
            <span>
              <Check size={16} /> Pose par nos propres salariés
            </span>
            <span>
              <Star size={16} fill="currentColor" /> Note 4,8 / 5 (49 avis Google)
            </span>
          </div>
        </div>

        <div
          className="tilo-hero-slider"
          onMouseEnter={() => setIsSliderPaused(true)}
          onMouseLeave={() => setIsSliderPaused(false)}
          aria-label="Carrousel de réalisations d'escaliers Hénault & Cie"
        >
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`tilo-slide ${index === currentSlide ? "is-active" : ""}`}
              aria-hidden={index !== currentSlide}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="tilo-slide-img"
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="tilo-slide-overlay" />
            </div>
          ))}

          <div
            className="tilo-hero-controls"
            role="tablist"
            aria-label="Sélectionner une photo de l'escalier"
          >
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={index === currentSlide}
                className={`tilo-hero-btn ${index === currentSlide ? "is-active" : ""}`}
                onClick={() => setCurrentSlide(index)}
              >
                <span className="slide-num">{slide.id}</span>
                <span className="slide-label">{slide.title}</span>
              </button>
            ))}
          </div>

          <div className="tilo-hero-badge">
            <strong>Atelier à Binas (41)</strong>
            Depuis 1931 - 100% sur mesure
          </div>
        </div>
      </section>

      {/* Centered Intro Section (Matching TILO "The perfect covering" layout) */}
      <section className="home-story scroll-reveal" aria-labelledby="story-title">
        <div className="section-intro-centered">
          <p className="eyebrow">Le sur mesure sans compromis</p>
          <h2 id="story-title">Un escalier pensé pour votre espace</h2>
          <div className="rule-centered" />
          <p className="intro-text">
            Chaque projet commence par une écoute attentive et une visite de mesure. Nous prenons le
            temps de comprendre votre maison, vos usages et vos volumes avant de fabriquer
            l'escalier qui s'accordera parfaitement à votre intérieur.
          </p>
        </div>

        {/* 4 Alternating Story Rows (Text / Photo alternating with client photos from Drive) */}
        <div className="story-rows">
          {/* Bloc 1 : Escalier bois avec contremarche */}
          <article className="story-row">
            <div className="story-row-content">
              <div className="story-meta-tag">
                <span className="story-tag-label">01 - Escalier à palier sur mesure</span>
              </div>
              <h3>Escalier à palier sur mesure en Loir-et-Cher</h3>
              <p className="story-kicker">Un escalier qui se remarque.</p>
              <p className="story-desc">
                Escalier en U avec palier, balancé ou en L : l'escalier à palier relie vos niveaux
                avec élégance et s'adapte à votre volume. Chaque escalier est dessiné sur mesure et
                fabriqué en bois dans nos ateliers de Binas, puis posé chez vous à Blois, Orléans,
                Tours, Chartres, Dreux ou Versailles.
              </p>
              <div>
                <button
                  type="button"
                  onClick={() => handleSelectType("Escalier à palier")}
                  className="text-link"
                >
                  Demander un devis d'escalier à palier <ArrowRight size={15} />
                </button>
              </div>
            </div>
            <div className="story-row-media">
              <img
                src={assets.client.block1}
                alt="Escalier bois avec contremarche sur mesure conçu par Hénault & Cie"
                loading="lazy"
              />
            </div>
          </article>

          <div className="story-divider" />

          {/* Bloc 2 : Fabrication en atelier (Plafond/placo recadré) */}
          <article className="story-row is-reversed">
            <div className="story-row-media">
              <img
                src={assets.client.block2}
                alt="Fabrication artisanale d'escalier avec contremarche en atelier à Binas"
                className="crop-top-ceiling"
                loading="lazy"
              />
            </div>
            <div className="story-row-content">
              <div className="story-meta-tag">
                <span className="story-tag-label">02 - Menuiserie & Atelier d'art</span>
              </div>
              <h3>Fabricant d'escaliers sur mesure depuis 1931</h3>
              <p className="story-kicker">À vos côtés depuis 1931.</p>
              <p className="story-desc">
                Depuis 1931, les générations se succèdent dans les ateliers Hénault & Cie, à Binas,
                dans le Loir-et-Cher. Même exigence, même amour du bois, de la tradition à
                l'innovation. Le sur mesure est notre spécialité, et nos machines à bois les plus
                performantes nous permettent de réaliser tous types d'escaliers.
              </p>
              <div>
                <Link className="text-link" to="/qui-sommes-nous">
                  Découvrir notre histoire & nos ateliers <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </article>

          <div className="story-divider" />

          {/* Bloc 3 : Escalier 1/4 tournant bois sans contremarche */}
          <article className="story-row">
            <div className="story-row-content">
              <div className="story-meta-tag">
                <span className="story-tag-label">03 - Lignes aériennes</span>
              </div>
              <h3>Escalier suspendu en bois, fabricant à Binas</h3>
              <p className="story-kicker">La légèreté en marche.</p>
              <p className="story-desc">
                Des marches qui semblent flotter, sans structure apparente. L'escalier suspendu
                laisse passer la lumière et ouvre l'espace, surtout dans une pièce de vie ouverte.
                Nos artisans le fabriquent sur mesure et l'ajustent au millimètre pour votre maison
                ou votre projet de rénovation.
              </p>
              <div>
                <button
                  type="button"
                  onClick={() => handleSelectType("Escalier suspendu")}
                  className="text-link"
                >
                  Découvrir nos escaliers suspendus <ArrowRight size={15} />
                </button>
              </div>
            </div>
            <div className="story-row-media">
              <img
                src={assets.client.block3}
                alt="Escalier tournant bois sans contremarche Hénault & Cie"
                loading="lazy"
              />
            </div>
          </article>

          <div className="story-divider" />

          {/* Bloc 4 : Escalier pour salon contemporain */}
          <article className="story-row is-reversed">
            <div className="story-row-media">
              <img
                src={assets.client.block4}
                alt="Escalier sur mesure pour salon contemporain Hénault & Cie"
                loading="lazy"
              />
            </div>
            <div className="story-row-content">
              <div className="story-meta-tag">
                <span className="story-tag-label">04 - Harmonie architecturale</span>
              </div>
              <h3>Escalier pour salon en contrebas, sur mesure</h3>
              <p className="story-kicker">Relier les niveaux, sans rupture.</p>
              <p className="story-desc">
                Un séjour en contrebas sépare les zones avec style, et les marches font le lien.
                Discrètes pour une transition en douceur, ou affirmées comme un élément de
                décoration : nous concevons l'escalier qui s'accorde à votre sol et à votre
                intérieur, en neuf comme en rénovation.
              </p>
              <div>
                <button
                  type="button"
                  onClick={() => handleSelectType("Escalier pour salon en contrebas")}
                  className="text-link"
                >
                  Parlez-nous de votre projet <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* 8 Types d'escaliers (Inspiré de TILO stairs : cartes avec photo pleine surface, titre majuscule bold et bouton coloré) */}
      <section id="nos-escaliers" className="tilo-section scroll-reveal" aria-labelledby="stair-types-heading">
        <div className="tilo-section-header">
          <div>
            <p className="eyebrow">Catalogue & Savoir-faire</p>
            <h2 id="stair-types-heading">Nos 8 types d'escaliers sur mesure</h2>
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
            <div
              key={item.id}
              className="tilo-card"
              role="button"
              tabIndex={0}
              onClick={() => handleSelectType(item.name)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") handleSelectType(item.name);
              }}
            >
              <img
                src={item.image}
                alt={`${item.name} sur mesure Hénault & Cie`}
                className="tilo-card-img"
                loading="lazy"
              />
              <div className="tilo-card-overlay" />
              <div className="tilo-card-content">
                <h3 className="tilo-card-title">{item.badge}</h3>
                <p className="tilo-card-desc">{item.description}</p>
                <button
                  type="button"
                  className={`tilo-card-btn ${item.buttonClass}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectType(item.name);
                  }}
                >
                  {item.buttonLabel}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Savoir-faire complémentaire : Mobilier sous escalier & Verrières */}
      <section className="home-complementary scroll-reveal" aria-labelledby="complementary-heading">
        <div className="section-intro">
          <p className="eyebrow">Agencements & Verrières d'atelier</p>
          <h2 id="complementary-heading">Aménagements sous escalier et verrières d'atelier</h2>
          <p>
            Prolongez l'harmonie de votre intérieur avec des rangements sur mesure intégrés sous vos
            marches ou une verrière artisanale en bois et métal conçue dans nos ateliers.
          </p>
        </div>

        <div className="complementary-grid">
          <article className="complementary-card">
            <img
              src={assets.complementary.sousEscalier}
              alt="Aménagement sous escalier sur mesure en bois et noir"
              loading="lazy"
            />
            <div className="complementary-card-body">
              <h3>Rangements & Placards sous escalier</h3>
              <p>
                Tiroirs coulissants sur mesure, dressings intégrés, vestiaires et niches optimisant chaque
                centimètre sous vos marches.
              </p>
              <button
                type="button"
                onClick={() => handleSelectType("Aménagement sous escalier")}
                className="text-link"
              >
                Demander une étude sous escalier <ArrowRight size={15} />
              </button>
            </div>
          </article>

          <article className="complementary-card">
            <img
              src={assets.complementary.bibliotheque}
              alt="Bibliothèque et claustra en bois sur mesure intégrés à l'escalier"
              loading="lazy"
            />
            <div className="complementary-card-body">
              <h3>Bibliothèques & Claustras sur mesure</h3>
              <p>
                Claustras ajourés en bois massif, étagères et bibliothèques architecturales faisant le
                lien entre vos pièces de vie.
              </p>
              <button
                type="button"
                onClick={() => handleSelectType("Bibliothèque / Claustra")}
                className="text-link"
              >
                Imaginer votre claustra <ArrowRight size={15} />
              </button>
            </div>
          </article>

          <article className="complementary-card">
            <img
              src={assets.complementary.verriereBois}
              alt="Verrière d'atelier en bois massif sur mesure"
              loading="lazy"
            />
            <div className="complementary-card-body">
              <h3>Verrières d'atelier en bois</h3>
              <p>
                Cloisonnements vitrés laissant circuler la lumière tout en délimitant votre entrée,
                séjour ou cage d'escalier avec élégance.
              </p>
              <button
                type="button"
                onClick={() => handleSelectType("Verrière d'atelier")}
                className="text-link"
              >
                Parler de votre verrière <ArrowRight size={15} />
              </button>
            </div>
          </article>
        </div>
      </section>

      {/* Avis clients Google (4,8 / 5, 49 avis) */}
      <section className="reviews-section scroll-reveal" aria-labelledby="reviews-title">
        <div className="reviews-heading">
          <div>
            <p className="eyebrow">Avis vérifiés Google Business Profile</p>
            <h2 id="reviews-title">Ce que nos clients disent de nos réalisations</h2>
            <p style={{ margin: 0, color: "var(--muted-foreground)", fontFamily: "Georgia, serif" }}>
              Des chantiers soignés, des délais tenus et une fabrication locale sans sous-traitance.
            </p>
          </div>

          <div className="review-score-badge">
            <span className="google-meta">Google Avis Clients</span>
            <div className="score-val">
              <strong>4,8</strong>
              <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} fill="currentColor" />
                ))}
              </div>
            </div>
            <span className="score-total">Basé sur 49 avis réels vérifiés</span>
          </div>
        </div>

        <div className="reviews-grid">
          {customerReviews.map((rev) => (
            <article className="review-card" key={rev.author}>
              <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={15} fill="currentColor" />
                ))}
              </div>
              <p>"{rev.quote}"</p>
              <div className="review-card-meta">
                <span className="review-author">{rev.author}</span>
                <span className="review-tag">
                  {rev.location} - {rev.project}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Formulaire interactif de Devis & Rendez-vous de mesure */}
      <section
        ref={quoteSectionRef}
        id="devis-rdv"
        className="home-quote-section scroll-reveal"
        aria-labelledby="form-heading"
      >
        <div className="quote-header">
          <p className="eyebrow">Votre projet commence ici</p>
          <h2 id="form-heading">Demandez votre devis gratuit ou réservez votre visite</h2>
          <p style={{ margin: 0, color: "var(--muted-foreground)", fontFamily: "Georgia, serif", fontSize: "16px" }}>
            Étude personnalisée et chiffrage clair sous 48h ouvrées. Nos techniciens se déplacent
            directement chez vous pour relever les dimensions précises de votre trémie.
          </p>
        </div>

        <div className="quote-layout">
          <div className="quote-form-card">
            <nav className="quote-tabs-nav" aria-label="Choix du formulaire">
              <button
                type="button"
                className={`quote-tab-btn ${activeTab === "devis" ? "is-active" : ""}`}
                onClick={() => setActiveTab("devis")}
              >
                1. Demander un devis détaillé
              </button>
              <button
                type="button"
                className={`quote-tab-btn ${activeTab === "rdv" ? "is-active" : ""}`}
                onClick={() => setActiveTab("rdv")}
              >
                2. Réserver une visite de mesure
              </button>
            </nav>

            {activeTab === "devis" ? (
              <form onSubmit={handleQuoteSubmit}>
                <div className="form-grid-2">
                  <div className="form-field">
                    <label htmlFor="stairType">Type d'escalier souhaité *</label>
                    <select
                      id="stairType"
                      name="stairType"
                      value={selectedStairType}
                      onChange={(e) => setSelectedStairType(e.target.value)}
                      required
                    >
                      <option value="Escalier droit">Escalier droit</option>
                      <option value="Quart tournant">Escalier quart tournant</option>
                      <option value="Escalier hélicoïdal">Escalier hélicoïdal</option>
                      <option value="Escalier suspendu">Escalier suspendu</option>
                      <option value="Escalier en bois">Escalier en bois massif</option>
                      <option value="Escalier métal">Escalier métal et bois</option>
                      <option value="Escalier verre">Escalier et garde-corps verre</option>
                      <option value="Rénovation d'escalier">Rénovation d'escalier existant</option>
                      <option value="Escalier à palier">Escalier à palier sur mesure</option>
                      <option value="Escalier pour salon en contrebas">
                        Escalier salon en contrebas
                      </option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="material">Matériau envisagé *</label>
                    <select id="material" name="material" required>
                      <option value="Chêne français massif">Chêne français massif</option>
                      <option value="Hêtre ou Frêne">Hêtre ou Frêne blanc</option>
                      <option value="Bois et structure acier peint">Bois et structure acier</option>
                      <option value="Verre securit et inox">Verre securit et inox</option>
                      <option value="À conseiller selon mon intérieur">
                        À conseiller selon mon projet
                      </option>
                    </select>
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-field">
                    <label htmlFor="projectNature">Nature du chantier</label>
                    <select id="projectNature" name="projectNature">
                      <option value="Rénovation / Remplacement d'escalier">
                        Rénovation / Remplacement
                      </option>
                      <option value="Construction neuve">Construction neuve</option>
                      <option value="Aménagement de combles / Mezzanine">
                        Aménagement de combles
                      </option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="delay">Délai souhaité</label>
                    <select id="delay" name="delay">
                      <option value="Dès que possible (1 à 2 mois)">
                        Dès que possible (1 à 2 mois)
                      </option>
                      <option value="Projet sous 3 à 6 mois">Projet sous 3 à 6 mois</option>
                      <option value="Projet à moyen terme (plus de 6 mois)">
                        Plus de 6 mois
                      </option>
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="dimensions">
                    Dimensions approximatives, hauteur ou descriptif de vos envies
                  </label>
                  <textarea
                    id="dimensions"
                    name="dimensions"
                    placeholder="Exemple : Hauteur sol à sol environ 2m75, trémie rectangulaire, souhait de contremarches fermées..."
                  />
                </div>

                <div className="form-grid-2">
                  <div className="form-field">
                    <label htmlFor="fullName">Nom et Prénom *</label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="Jean Dupont"
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="phone">Numéro de téléphone *</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="06 12 34 56 78"
                      required
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-field">
                    <label htmlFor="email">Adresse e-mail *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jean.dupont@email.fr"
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="city">Commune ou Code postal *</label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      placeholder="Ex : 41000 Blois ou 45000 Orléans"
                      required
                    />
                  </div>
                </div>

                <label className="form-consent">
                  <input type="checkbox" required />
                  <span>
                    J'accepte que Hénault & Cie utilise mes coordonnées pour me recontacter
                    conformément à la{" "}
                    <a
                      href="https://escalier-henault.fr/politique-de-confidentialite/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      politique de confidentialité
                    </a>
                    . Vos données ne sont jamais cédées à des tiers.
                  </span>
                </label>

                <div className="form-submit-row">
                  <button type="submit" className="site-cta-btn">
                    Envoyer ma demande de devis <ArrowRight size={16} />
                  </button>
                  <span style={{ fontSize: "12px", color: "var(--muted-foreground)" }}>
                    Réponse personnalisée sous 48h ouvrées
                  </span>
                </div>

                {devisSubmitted && (
                  <div className="quote-success-box" role="status">
                    <strong>Merci pour votre demande !</strong>
                    <br />
                    Votre message a été transmis directement à notre atelier de Binas. Un menuisier
                    chiffreur examinera votre dossier et vous contactera dans les plus brefs délais.
                  </div>
                )}
              </form>
            ) : (
              <form onSubmit={handleRdvSubmit}>
                <div className="form-grid-2">
                  <div className="form-field">
                    <label htmlFor="sector">Ville / Secteur d'intervention *</label>
                    <select id="sector" name="sector" required>
                      <option value="Blois (41)">Blois (41)</option>
                      <option value="Vendôme (41)">Vendôme (41)</option>
                      <option value="Binas et environs (41)">Binas et environs (41)</option>
                      <option value="Orléans (45)">Orléans (45)</option>
                      <option value="Beaugency (45)">Beaugency (45)</option>
                      <option value="Tours (37)">Tours (37)</option>
                      <option value="Chartres (28)">Chartres (28)</option>
                      <option value="Châteaudun (28)">Châteaudun (28)</option>
                      <option value="Dreux (28)">Dreux (28)</option>
                      <option value="Versailles (78)">Versailles (78)</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="slot">Créneau horaire d'ouverture souhaité *</label>
                    <select id="slot" name="slot" required>
                      <option value="Matin : 9h00 à 12h30">Matin (9h00 à 12h30)</option>
                      <option value="Après-midi : 13h30 à 18h00">
                        Après-midi (13h30 à 18h00)
                      </option>
                    </select>
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-field">
                    <label htmlFor="date">Date indicative souhaitée *</label>
                    <input id="date" name="date" type="date" required />
                  </div>

                  <div className="form-field">
                    <label htmlFor="rdvPhone">Numéro de téléphone *</label>
                    <input
                      id="rdvPhone"
                      name="phone"
                      type="tel"
                      placeholder="06 12 34 56 78"
                      required
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-field">
                    <label htmlFor="rdvName">Nom et Prénom *</label>
                    <input
                      id="rdvName"
                      name="fullName"
                      type="text"
                      placeholder="Jean Dupont"
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="rdvEmail">Adresse e-mail *</label>
                    <input
                      id="rdvEmail"
                      name="email"
                      type="email"
                      placeholder="jean.dupont@email.fr"
                      required
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="address">Adresse exacte du chantier pour la visite *</label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Ex : 12 rue de la République, 41000 Blois"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="notes">Précisions ou instructions d'accès</label>
                  <textarea
                    id="notes"
                    name="notes"
                    placeholder="Maison en cours de rénovation, code d'entrée, présence d'un escalier provisoire..."
                  />
                </div>

                <label className="form-consent">
                  <input type="checkbox" required />
                  <span>
                    J'autorise Hénault & Cie à me contacter pour confirmer la date de la visite de
                    mesure.
                  </span>
                </label>

                <div className="form-submit-row">
                  <button type="submit" className="site-cta-btn">
                    Confirmer ma demande de visite <ArrowRight size={16} />
                  </button>
                  <span style={{ fontSize: "12px", color: "var(--muted-foreground)" }}>
                    Créneaux : Lun au Ven, 9h-12h30 et 13h30-18h
                  </span>
                </div>

                {rdvSubmitted && (
                  <div className="quote-success-box" role="status">
                    <strong>Demande de rendez-vous enregistrée !</strong>
                    <br />
                    Notre équipe va valider l'itinéraire de mesure et vous recontacter par téléphone
                    pour caler l'horaire précis.
                  </div>
                )}
              </form>
            )}
          </div>

          {/* Sidebar Coordonnées & Réassurance */}
          <aside className="quote-sidebar" aria-label="Informations de contact et engagements">
            <div className="sidebar-box">
              <h3>Contact direct atelier</h3>
              <ul className="sidebar-contact-list">
                <li>
                  <Phone size={18} />
                  <div>
                    <strong>Téléphone :</strong>
                    <br />
                    <a href="tel:+33254824489">02 54 82 44 89</a>
                  </div>
                </li>
                <li>
                  <Mail size={18} />
                  <div>
                    <strong>E-mail :</strong>
                    <br />
                    <a href="mailto:contact@henault-cie.com">contact@henault-cie.com</a>
                  </div>
                </li>
                <li>
                  <MapPin size={18} />
                  <div>
                    <strong>Atelier et bureau :</strong>
                    <br />
                    9 bis rue du Bout de la ville
                    <br />
                    41240 Binas (Loir-et-Cher)
                  </div>
                </li>
                <li>
                  <Clock size={18} />
                  <div>
                    <strong>Horaires d'ouverture :</strong>
                    <br />
                    Du lundi au vendredi
                    <br />
                    9h00 à 12h30 et 13h30 à 18h00
                  </div>
                </li>
              </ul>

              <h3 style={{ marginTop: "30px" }}>Nos engagements d'artisans</h3>
              <ul className="sidebar-guarantees">
                <li>
                  <ShieldCheck size={18} />
                  <span>
                    <strong>Fabrication 100% atelier :</strong> Aucun escalier standard ou importé,
                    tout est usiné et assemblé à Binas.
                  </span>
                </li>
                <li>
                  <ShieldCheck size={18} />
                  <span>
                    <strong>Pose par nos salariés :</strong> Nos propres compagnons menuisiers
                    assurent la pose soignée chez vous, sans sous-traitance.
                  </span>
                </li>
                <li>
                  <ShieldCheck size={18} />
                  <span>
                    <strong>Garantie décennale :</strong> Matériaux de premier choix, résistance
                    mécanique et conformité aux normes de sécurité.
                  </span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* 10 Zones géographiques d'intervention (SEO Local) */}
      <section id="zones" className="zones-section" aria-labelledby="zones-heading">
        <div className="zones-inner">
          <div>
            <p className="eyebrow" style={{ color: "var(--accent)" }}>
              Proximité & Déplacement
            </p>
            <h2 id="zones-heading">Nos 10 secteurs d'intervention prioritaires</h2>
            <p>
              Nos équipes se déplacent à votre domicile pour le relevé de cotes technique, la
              livraison directe et l'installation complète de votre escalier sur mesure.
            </p>
          </div>

          <div className="zones-list">
            {interventionZones.map((z) => (
              <span className="zone-pill" key={z.name}>
                <MapPin size={13} style={{ color: "var(--accent)" }} />
                <span>
                  <strong>{z.name}</strong> ({z.dpt})
                </span>
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
