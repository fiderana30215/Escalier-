import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Check, Star } from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { assets, pageHead } from "@/lib/site-assets";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Escalier sur mesure à Binas depuis 1931 | Hénault & Cie",
      "Hénault & Cie fabrique et pose vos escaliers sur mesure en bois, métal ou verre à Binas, Blois, Orléans, Tours, Chartres, Dreux et Versailles.",
      assets.hero,
    ),
  component: Index,
});

const stairTypes = [
  {
    name: "Escalier droit",
    image: assets.gallery[0],
    description: "Une ligne simple et intemporelle, pensée pour votre intérieur.",
  },
  {
    name: "Escalier quart tournant",
    image: assets.gallery[1],
    description: "Le confort d’un changement de direction qui optimise l’espace.",
  },
  {
    name: "Escalier hélicoïdal",
    image: assets.gallery[2],
    description: "Une forme sculpturale pour gagner de la place avec élégance.",
  },
  {
    name: "Escalier suspendu",
    image: assets.gallery[3],
    description: "Des marches qui flottent et laissent entrer la lumière.",
  },
  {
    name: "Escalier en bois",
    image: assets.gallery[4],
    description: "La chaleur du bois, avec les finitions qui vous ressemblent.",
  },
  {
    name: "Escalier métal",
    image: assets.gallery[5],
    description: "Une structure fine et contemporaine, fabriquée sur mesure.",
  },
  {
    name: "Escalier verre",
    image: assets.gallery[6],
    description: "Une transparence qui agrandit visuellement les volumes.",
  },
  {
    name: "Escalier en rénovation",
    image: assets.gallery[7],
    description: "Un projet adapté à l’existant, du relevé à la pose.",
  },
];

const reviews = [
  {
    quote:
      "Une équipe professionnelle, de bons conseils et un escalier magnifique. La pose a été réalisée avec beaucoup de soin.",
    author: "Client vérifié",
  },
  {
    quote:
      "Du premier rendez-vous à la fin du chantier, nous avons apprécié le sérieux et la qualité du travail.",
    author: "Client vérifié",
  },
  {
    quote: "Un vrai savoir-faire artisanal et une réalisation parfaitement adaptée à notre maison.",
    author: "Client vérifié",
  },
];

function Index() {
  const pageRef = useRef<HTMLElement>(null);

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
      { threshold: 0.12, rootMargin: "0px 0px -40px" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main ref={pageRef}>
      <section className="home-hero">
        <div className="home-hero-image">
          <img src={assets.hero} alt="Escalier sur mesure en bois réalisé par Hénault & Cie" />
        </div>
        <div className="home-hero-content">
          <p className="eyebrow">Fabricant d’escaliers sur mesure depuis 1931</p>
          <h1>Votre escalier donne le ton à toute la maison.</h1>
          <p className="hero-lede">
            Nous dessinons, fabriquons et posons des escaliers uniques dans notre atelier de Binas,
            dans le Loir-et-Cher.
          </p>
          <div className="cta-row">
            <Button asChild className="site-cta">
              <Link to="/contact">
                Parler de votre projet <ArrowRight size={16} />
              </Link>
            </Button>
            <Button asChild variant="outline" className="hero-secondary">
              <a href="tel:+33254824489">02 54 82 44 89</a>
            </Button>
          </div>
          <div className="hero-proof">
            <span>
              <Check size={16} /> Fabrication locale
            </span>
            <span>
              <Check size={16} /> Pose par nos équipes
            </span>
          </div>
        </div>
      </section>

      <section className="home-story scroll-reveal" aria-labelledby="story-title">
        <div className="section-intro">
          <p className="eyebrow">Le sur mesure, sans compromis</p>
          <h2 id="story-title">Un escalier pensé pour votre espace</h2>
          <p>
            Chaque projet commence par une écoute attentive et une visite de mesure. Nous prenons le
            temps de comprendre votre maison, vos usages et vos envies avant de concevoir un
            escalier qui s’intègre naturellement à votre intérieur.
          </p>
        </div>
        <div className="story-grid">
          <article className="story-card story-card-wide">
            <img
              src={assets.tradition}
              alt="Escalier à palier en bois fabriqué à Binas"
              loading="lazy"
            />
            <div>
              <p className="eyebrow">01</p>
              <h3>Escalier à palier sur mesure en Loir-et-Cher</h3>
              <p className="story-kicker">Un escalier qui se remarque.</p>
              <p>
                Escalier en U avec palier, balancé ou en L : il relie vos niveaux avec élégance et
                s’adapte à votre volume. Chaque escalier est dessiné sur mesure et fabriqué dans nos
                ateliers à Binas, puis posé chez vous.
              </p>
              <Link className="text-link" to="/contact">
                Demander un devis <ArrowRight size={15} />
              </Link>
            </div>
          </article>
          <article className="story-card">
            <div>
              <p className="eyebrow">02</p>
              <h3>Fabricant d’escaliers sur mesure depuis 1931</h3>
              <p className="story-kicker">À vos côtés depuis 1931.</p>
              <p>
                Les générations se succèdent dans les ateliers Hénault & Cie. Même exigence, même
                amour du bois, de la tradition à l’innovation.
              </p>
              <Link className="text-link" to="/qui-sommes-nous">
                Découvrir notre histoire <ArrowRight size={15} />
              </Link>
            </div>
          </article>
          <article className="story-card story-card-image">
            <img
              src={assets.metal}
              alt="Escalier suspendu en bois et métal dans un intérieur contemporain"
              loading="lazy"
            />
            <div>
              <p className="eyebrow">03</p>
              <h3>Escalier suspendu en bois, fabricant à Binas</h3>
              <p className="story-kicker">La légèreté en marche.</p>
              <p>
                Des marches qui semblent flotter, ajustées au millimètre pour laisser passer la
                lumière.
              </p>
              <Link className="text-link" to="/nos-creations">
                Voir nos réalisations <ArrowRight size={15} />
              </Link>
            </div>
          </article>
          <article className="story-card story-card-accent">
            <div>
              <p className="eyebrow">04</p>
              <h3>Escalier pour salon en contrebas, sur mesure</h3>
              <p className="story-kicker">Relier les niveaux, sans rupture.</p>
              <p>
                En neuf comme en rénovation, nous concevons une transition qui s’accorde à votre sol
                et à votre intérieur.
              </p>
              <Link className="text-link" to="/contact">
                Parler de votre projet <ArrowRight size={15} />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="types-section scroll-reveal" aria-labelledby="types-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Nos savoir-faire</p>
            <h2 id="types-title">Quel escalier imaginez-vous ?</h2>
          </div>
          <Link className="text-link" to="/nos-creations">
            Toutes nos réalisations <ArrowRight size={15} />
          </Link>
        </div>
        <div className="types-grid">
          {stairTypes.map((type) => (
            <Link to="/contact" className="type-card" key={type.name}>
              <img src={type.image} alt={`${type.name} sur mesure Hénault & Cie`} loading="lazy" />
              <div>
                <h3>{type.name}</h3>
                <p>{type.description}</p>
                <ArrowRight size={18} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="reviews-section scroll-reveal" aria-labelledby="reviews-title">
        <div className="reviews-heading">
          <p className="eyebrow">Ils nous font confiance</p>
          <h2 id="reviews-title">Des projets qui durent, des clients satisfaits</h2>
          <div className="review-score">
            <span className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={17} fill="currentColor" />
              ))}
            </span>
            <strong>4,8 / 5</strong>
            <span>49 avis Google</span>
          </div>
        </div>
        <div className="reviews-grid">
          {reviews.map((review) => (
            <blockquote key={review.quote}>
              <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={14} fill="currentColor" />
                ))}
              </div>
              <p>“{review.quote}”</p>
              <cite>{review.author}</cite>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="home-contact-cta scroll-reveal">
        <div>
          <p className="eyebrow">Un projet en tête ?</p>
          <h2>Parlons de votre futur escalier.</h2>
          <p>
            Décrivez-nous votre projet. Après un premier échange, nous organiserons une visite de
            mesure dans les meilleures conditions.
          </p>
        </div>
        <div className="cta-row">
          <Button asChild className="site-cta">
            <Link to="/contact">
              Demander un devis <ArrowRight size={16} />
            </Link>
          </Button>
          <Button asChild variant="outline" className="cta-outline">
            <Link to="/contact">
              <CalendarDays size={16} /> Prendre rendez-vous
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
