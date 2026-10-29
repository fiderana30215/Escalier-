import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Check, X } from "lucide-react";
import { assets, pageHead } from "@/lib/site-assets";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/nos-creations")({
  head: () =>
    pageHead(
      "Nos Créations - Galerie de réalisations Hénault Escalier",
      "Découvrez plus de 90 ans de savoir-faire en images : escaliers sur mesure posés, usinage en atelier à Binas, aménagements sous escalier et verrières.",
      assets.stairs.hero1,
    ),
  component: Gallery,
});

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: "all" | "escalier" | "atelier" | "mobilier" | "verriere";
  badge: string;
  desc: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: assets.stairs.hero1,
    title: "Escalier contemporain double quart tournant",
    category: "escalier",
    badge: "Escalier posé",
    desc: "Chêne massif de pays, limon central et rampe acier thermolaqué noir.",
  },
  {
    id: 2,
    src: assets.stairs.quartTournant,
    title: "Escalier quart tournant en bois traditionnel",
    category: "escalier",
    badge: "Escalier posé",
    desc: "Finitions naturelles soignées et intégration fluide dans l'habitat.",
  },
  {
    id: 3,
    src: assets.stairs.helicoidal,
    title: "Escalier limon central avec rétroéclairage LED",
    category: "escalier",
    badge: "Escalier posé",
    desc: "Design contemporain avec éclairage intégré sous les marches.",
  },
  {
    id: 4,
    src: assets.stairs.suspendu,
    title: "Escalier suspendu sans contremarche",
    category: "escalier",
    badge: "Escalier posé",
    desc: "Structure légère laissant passer la lumière naturelle.",
  },
  {
    id: 5,
    src: assets.stairs.bois,
    title: "Escalier en bois massif sur mesure",
    category: "escalier",
    badge: "Escalier posé",
    desc: "Savoir-faire artisanal Hénault et teintes chaleureuses.",
  },
  {
    id: 6,
    src: assets.stairs.metal,
    title: "Escalier contemporain bois et métal",
    category: "escalier",
    badge: "Escalier posé",
    desc: "Alliance moderne de marches en chêne et garde-corps vitré avec main courante acier.",
  },
  {
    id: 7,
    src: assets.stairs.verre,
    title: "Escalier avec garde-corps en verre securit",
    category: "escalier",
    badge: "Escalier posé",
    desc: "Transparence et sécurité maximale pour un volume ouvert.",
  },
  {
    id: 8,
    src: assets.stairs.renovation,
    title: "Rénovation d'escalier bois et vernis noir",
    category: "escalier",
    badge: "Rénovation",
    desc: "Modernisation complète d'un escalier ancien sans dépose de cloison.",
  },
  {
    id: 9,
    src: assets.stairs.grandeMarche,
    title: "Escalier pour salon en contrebas avec marche élargie",
    category: "escalier",
    badge: "Escalier posé",
    desc: "Transition fluide entre niveaux avec marches d'accueil spacieuses.",
  },
  {
    id: 10,
    src: assets.stairs.deuxQuartTournant,
    title: "Escalier deux quarts tournants avec palier",
    category: "escalier",
    badge: "Escalier posé",
    desc: "Confort de montée optimal pour cage d'escalier haute.",
  },
  {
    id: 11,
    src: assets.atelier.fabrication,
    title: "Façonnage artisanal en atelier à Binas",
    category: "atelier",
    badge: "En atelier",
    desc: "Ajustement minutieux de l'enmarchement avant départ en chantier.",
  },
  {
    id: 12,
    src: assets.atelier.decoupe,
    title: "Découpe et usinage de précision des limons",
    category: "atelier",
    badge: "En atelier",
    desc: "Machines à bois performantes garantissant un tracé d'épure au millimètre.",
  },
  {
    id: 13,
    src: assets.atelier.chene,
    title: "Sélection des pièces de chêne brut",
    category: "atelier",
    badge: "En atelier",
    desc: "Tri rigoureux du fil du bois et séchage maîtrisé.",
  },
  {
    id: 14,
    src: assets.atelier.enmarchement,
    title: "Usinage des crémaillères et entailles",
    category: "atelier",
    badge: "En atelier",
    desc: "Garantie d'absence totale de grincement dans le temps.",
  },
  {
    id: 15,
    src: assets.complementary.sousEscalier,
    title: "Aménagement sous escalier sur mesure bois & noir",
    category: "mobilier",
    badge: "Sous escalier",
    desc: "Placards, tiroirs coulissants et niches personnalisées.",
  },
  {
    id: 16,
    src: assets.complementary.bibliotheque,
    title: "Bibliothèque et claustra intégrés à l'escalier",
    category: "mobilier",
    badge: "Sous escalier",
    desc: "Agencement sur mesure valorisant chaque espace sous les marches.",
  },
  {
    id: 17,
    src: assets.complementary.claustra,
    title: "Claustra vertical en chêne massif",
    category: "mobilier",
    badge: "Sous escalier",
    desc: "Séparation esthétique et chaleureuse entre escalier et séjour.",
  },
  {
    id: 18,
    src: assets.complementary.verriereBois,
    title: "Verrière d'atelier en bois massif",
    category: "verriere",
    badge: "Verrière d'atelier",
    desc: "Cloison vitrée artisanale laissant circuler la lumière du jour.",
  },
  {
    id: 19,
    src: assets.complementary.verriereBlanche,
    title: "Verrière laquée blanche avec vitrage sécurit",
    category: "verriere",
    badge: "Verrière d'atelier",
    desc: "Style épuré pour entrée ou cuisine ouverte.",
  },
  {
    id: 20,
    src: assets.stairs.hero2,
    title: "Escalier d'architecte contemporain",
    category: "escalier",
    badge: "Escalier posé",
    desc: "Réalisation d'envergure posée par nos propres compagnons menuisiers.",
  },
];

function Gallery() {
  const [filter, setFilter] = useState<"all" | "escalier" | "atelier" | "mobilier" | "verriere">(
    "all",
  );
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (!selectedItem) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedItem(null);
    };
    document.addEventListener("keydown", close);
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", close);
      document.body.style.overflow = old;
    };
  }, [selectedItem]);

  const filteredItems =
    filter === "all" ? galleryItems : galleryItems.filter((item) => item.category === filter);

  return (
    <main>
      <div className="gallery-heading">
        <p className="eyebrow">Atelier & Chantiers</p>
        <h1>Nos Réalisations sur mesure</h1>
        <span className="rule" />
        <p
          style={{
            fontFamily: "Georgia, serif",
            color: "var(--muted-foreground)",
            maxWidth: "680px",
            fontSize: "15px",
          }}
        >
          Découvrez une sélection de nos escaliers dessinés, usinés dans notre atelier de Binas et
          posés sans aucune sous-traitance dans le Centre-Val de Loire et en Île-de-France.
        </p>

        {/* Filter buttons */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginTop: "30px",
            marginBottom: "20px",
          }}
        >
          <button
            type="button"
            onClick={() => setFilter("all")}
            style={{
              padding: "9px 18px",
              border: filter === "all" ? "1px solid var(--primary)" : "1px solid var(--border)",
              background: filter === "all" ? "var(--primary)" : "var(--background)",
              color: filter === "all" ? "var(--primary-foreground)" : "var(--foreground)",
              fontFamily: "Georgia, serif",
              fontSize: "13px",
              fontWeight: 700,
              cursor: "pointer",
              transition: "all .2s ease",
            }}
          >
            Toutes les créations ({galleryItems.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter("escalier")}
            style={{
              padding: "9px 18px",
              border: filter === "escalier" ? "1px solid var(--primary)" : "1px solid var(--border)",
              background: filter === "escalier" ? "var(--primary)" : "var(--background)",
              color: filter === "escalier" ? "var(--primary-foreground)" : "var(--foreground)",
              fontFamily: "Georgia, serif",
              fontSize: "13px",
              fontWeight: 700,
              cursor: "pointer",
              transition: "all .2s ease",
            }}
          >
            Escaliers posés
          </button>
          <button
            type="button"
            onClick={() => setFilter("atelier")}
            style={{
              padding: "9px 18px",
              border: filter === "atelier" ? "1px solid var(--primary)" : "1px solid var(--border)",
              background: filter === "atelier" ? "var(--primary)" : "var(--background)",
              color: filter === "atelier" ? "var(--primary-foreground)" : "var(--foreground)",
              fontFamily: "Georgia, serif",
              fontSize: "13px",
              fontWeight: 700,
              cursor: "pointer",
              transition: "all .2s ease",
            }}
          >
            Fabrication en atelier
          </button>
          <button
            type="button"
            onClick={() => setFilter("mobilier")}
            style={{
              padding: "9px 18px",
              border: filter === "mobilier" ? "1px solid var(--primary)" : "1px solid var(--border)",
              background: filter === "mobilier" ? "var(--primary)" : "var(--background)",
              color: filter === "mobilier" ? "var(--primary-foreground)" : "var(--foreground)",
              fontFamily: "Georgia, serif",
              fontSize: "13px",
              fontWeight: 700,
              cursor: "pointer",
              transition: "all .2s ease",
            }}
          >
            Rangements sous escalier
          </button>
          <button
            type="button"
            onClick={() => setFilter("verriere")}
            style={{
              padding: "9px 18px",
              border: filter === "verriere" ? "1px solid var(--primary)" : "1px solid var(--border)",
              background: filter === "verriere" ? "var(--primary)" : "var(--background)",
              color: filter === "verriere" ? "var(--primary-foreground)" : "var(--foreground)",
              fontFamily: "Georgia, serif",
              fontSize: "13px",
              fontWeight: 700,
              cursor: "pointer",
              transition: "all .2s ease",
            }}
          >
            Verrières d'atelier
          </button>
        </div>
      </div>

      {/* Grid of photos */}
      <section style={{ maxWidth: "1040px", margin: "0 auto 80px", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              style={{
                background: "var(--secondary)",
                cursor: "pointer",
                overflow: "hidden",
                border: "1px solid var(--border)",
                display: "flex",
                flexDirection: "column",
                transition: "transform .25s ease, box-shadow .25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 28px rgba(37,46,96,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ position: "relative", height: "230px", overflow: "hidden" }}>
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform .4s ease",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    background: "rgba(37,46,96,0.9)",
                    color: "#ffffff",
                    fontSize: "11px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: ".04em",
                    padding: "4px 8px",
                  }}
                >
                  {item.badge}
                </span>
              </div>
              <div style={{ padding: "20px 18px", flex: 1, display: "flex", flexDirection: "column" }}>
                <h3 style={{ fontSize: "16px", margin: "0 0 8px", color: "var(--primary)" }}>
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "13px",
                    lineHeight: 1.5,
                    color: "var(--muted-foreground)",
                    margin: "0 0 14px",
                    flex: 1,
                  }}
                >
                  {item.desc}
                </p>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "var(--accent)",
                  }}
                >
                  Agrandir <ArrowRight size={13} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA section */}
      <section
        style={{
          background: "var(--primary)",
          color: "var(--primary-foreground)",
          padding: "70px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <p className="eyebrow" style={{ color: "var(--accent)" }}>
            Un projet similaire ?
          </p>
          <h2 style={{ fontSize: "32px", color: "#ffffff", margin: "0 0 16px" }}>
            Donnons vie à votre escalier sur mesure.
          </h2>
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "15px",
              color: "var(--footer-foreground)",
              lineHeight: 1.7,
              marginBottom: "28px",
            }}
          >
            Nos compagnons se déplacent à votre domicile pour relever vos cotes et vous conseiller sur
            l'implantation idéale.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}>
            <Button asChild className="site-cta" style={{ background: "var(--accent)", color: "var(--primary)" }}>
              <Link to="/contact">
                Demander un devis gratuit <ArrowRight size={15} />
              </Link>
            </Button>
            <Button asChild variant="outline" style={{ borderColor: "#ffffff", color: "#ffffff" }}>
              <a href="tel:+33254824489">02 54 82 44 89</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="photo-modal"
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
          onClick={() => setSelectedItem(null)}
        >
          <Button
            variant="ghost"
            size="icon"
            className="close-photo"
            aria-label="Fermer la photo"
            autoFocus
            onClick={() => setSelectedItem(null)}
          >
            <X />
          </Button>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "92vw",
              maxHeight: "90vh",
              display: "flex",
              flexDirection: "column",
              background: "#ffffff",
              padding: "16px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            }}
          >
            <img
              src={selectedItem.src}
              alt={selectedItem.title}
              style={{
                maxHeight: "70vh",
                maxWidth: "100%",
                objectFit: "contain",
                display: "block",
              }}
            />
            <div style={{ marginTop: "14px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
              <div>
                <strong style={{ fontSize: "16px", color: "var(--primary)", display: "block" }}>
                  {selectedItem.title}
                </strong>
                <span style={{ fontFamily: "Georgia, serif", fontSize: "13px", color: "var(--muted-foreground)" }}>
                  {selectedItem.desc}
                </span>
              </div>
              <Button asChild className="site-cta" size="sm">
                <Link to="/contact">
                  Devis pour ce modèle <ArrowRight size={14} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
