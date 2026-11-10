import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Hammer, HeartHandshake, ShieldCheck, Trophy } from "lucide-react";
import { assets, pageHead } from "@/lib/site-assets";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/qui-sommes-nous")({
  head: () =>
    pageHead(
      "Qui sommes-nous ? - Hénault Escalier fabricant depuis 1931 à Romorantin",
      "Découvrez l'histoire de Hénault Escalier, fabricant artisanal d'escaliers sur mesure à Romorantin (Loir-et-Cher) depuis 1931. Atelier sur place et pose sans sous-traitance.",
      assets.atelier.fabrication,
    ),
  component: About,
});

function About() {
  return (
    <main>
      {/* Intro hero band */}
      <section className="about-band">
        <div className="about-inner">
          <div className="about-copy">
            <p className="eyebrow">Entreprise familiale depuis 1931</p>
            <h1>Qui sommes-nous ?</h1>
            <span className="rule" />
            <div className="copy-text">
              <p>
                Depuis 1931, les générations se succèdent dans les ateliers de l'entreprise{" "}
                <strong>Hénault Escalier</strong> et perpétuent l'art noble de travailler le bois{" "}
                <strong>à Romorantin, dans le Loir-et-Cher.</strong>
              </p>
              <p>
                De la tradition artisanale aux techniques contemporaines d'usinage, le sur mesure
                intégral reste notre vocation absolue. Chaque pièce est pensée, dessinée et façonnée
                dans nos ateliers pour s'adapter rigoureusement aux contraintes de votre volume.
              </p>
            </div>
            <div className="cta-row" style={{ justifyContent: "flex-start", marginTop: "24px" }}>
              <Button asChild className="site-cta">
                <Link to="/contact">
                  Nous parler de votre projet <ArrowRight size={15} />
                </Link>
              </Button>
            </div>
          </div>
          <img
            src={assets.atelier.fabrication}
            alt="Artisan menuisier au travail dans l'atelier Hénault Escalier à Romorantin"
          />
        </div>
      </section>

      {/* Atelier & Savoir-faire */}
      <section className="about-band secondary-band">
        <div className="about-inner">
          <img
            src={assets.atelier.chene}
            alt="Sélection de chêne brut massif dans notre parc à bois à Romorantin"
            loading="lazy"
          />
          <div className="about-copy">
            <p className="eyebrow">Amour du bois & Haute technicité</p>
            <h2>Notre atelier de menuiserie traditionnel</h2>
            <span className="rule" />
            <div className="copy-text">
              <p>
                Dans notre atelier de Romorantin, le travail est réalisé selon les méthodes de la menuiserie
                traditionnelle, avec le tour de main éprouvé de compagnons expérimentés. Nous travaillons
                principalement le chêne français, le hêtre et l'hévéa, ainsi que le métal thermolaqué et
                le verre securit.
              </p>
              <p>
                Ici, aucun escalier n'est standard ni préfabriqué à la chaîne. Chaque limon, marche,
                balustre ou garde-corps fait l'objet d'un tracé d'épure précis et d'un montage à blanc
                en atelier pour garantir un ajustement millimétrique le jour de la pose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Les 4 piliers Hénault */}
      <section style={{ padding: "80px max(32px, calc((100% - 1040px) / 2)) 90px", background: "var(--background)" }}>
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 50px" }}>
          <p className="eyebrow">Nos engagements</p>
          <h2 style={{ fontSize: "32px", margin: "0 0 16px" }}>Ce qui fait la différence Hénault</h2>
          <p style={{ fontFamily: "Georgia, serif", color: "var(--muted-foreground)", margin: 0 }}>
            Des choix clairs et sans compromis au service de la pérennité de votre ouvrage.
          </p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "24px" }}>
          <div style={{ flex: "0 1 calc((100% - 48px) / 3)", minWidth: "230px", background: "var(--secondary)", padding: "30px 24px", borderTop: "3px solid var(--accent)" }}>
            <Trophy size={28} style={{ color: "var(--primary)", marginBottom: "16px" }} />
            <h3 style={{ fontSize: "18px", margin: "0 0 10px" }}>Depuis 1931</h3>
            <p style={{ fontFamily: "Georgia, serif", fontSize: "13px", color: "var(--muted-foreground)", margin: 0 }}>
              Plus de 90 ans d'histoire et de transmissions familiales ininterrompues dans le Loir-et-Cher.
            </p>
          </div>

          <div style={{ flex: "0 1 calc((100% - 48px) / 3)", minWidth: "230px", background: "var(--secondary)", padding: "30px 24px", borderTop: "3px solid var(--accent)" }}>
            <Hammer size={28} style={{ color: "var(--primary)", marginBottom: "16px" }} />
            <h3 style={{ fontSize: "18px", margin: "0 0 10px" }}>100% Atelier local</h3>
            <p style={{ fontFamily: "Georgia, serif", fontSize: "13px", color: "var(--muted-foreground)", margin: 0 }}>
              De la découpe des grumes à la finition finale, toute la fabrication est réalisée sur place à Romorantin.
            </p>
          </div>

          <div style={{ flex: "0 1 calc((100% - 48px) / 3)", minWidth: "230px", background: "var(--secondary)", padding: "30px 24px", borderTop: "3px solid var(--accent)" }}>
            <HeartHandshake size={28} style={{ color: "var(--primary)", marginBottom: "16px" }} />
            <h3 style={{ fontSize: "18px", margin: "0 0 10px" }}>Zéro sous-traitance</h3>
            <p style={{ fontFamily: "Georgia, serif", fontSize: "13px", color: "var(--muted-foreground)", margin: 0 }}>
              La livraison et la pose sont assurées exclusivement par nos propres compagnons salariés.
            </p>
          </div>

          <div style={{ flex: "0 1 calc((100% - 48px) / 3)", minWidth: "230px", background: "var(--secondary)", padding: "30px 24px", borderTop: "3px solid var(--accent)" }}>
            <ShieldCheck size={28} style={{ color: "var(--primary)", marginBottom: "16px" }} />
            <h3 style={{ fontSize: "18px", margin: "0 0 10px" }}>Garantie décennale</h3>
            <p style={{ fontFamily: "Georgia, serif", fontSize: "13px", color: "var(--muted-foreground)", margin: 0 }}>
              Chaque escalier est conçu dans le respect strict des normes de sécurité et de confort de passage.
            </p>
          </div>

          <div style={{ flex: "0 1 calc((100% - 48px) / 3)", minWidth: "230px", background: "var(--secondary)", padding: "30px 24px", borderTop: "3px solid var(--accent)" }}>
            <Trophy size={28} style={{ color: "var(--primary)", marginBottom: "16px" }} />
            <h3 style={{ fontSize: "18px", margin: "0 0 10px" }}>Une centaine par an</h3>
            <p style={{ fontFamily: "Georgia, serif", fontSize: "13px", color: "var(--muted-foreground)", margin: 0 }}>
              Nous fabriquons et posons environ une centaine d'escaliers chaque année.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 max(32px, calc((100% - 1040px) / 2)) 90px", background: "var(--background)" }}>
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 40px" }}>
          <h2 style={{ fontSize: "32px", margin: 0 }}>Notre équipe</h2>
          <p style={{ marginTop: "16px", lineHeight: 1.7 }}>
            Des artisans passionnés, formés à la menuiserie traditionnelle, qui fabriquent et posent chaque escalier à Romorantin.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", justifyItems: "center", maxWidth: "1040px", margin: "0 auto", gap: "40px 20px" }}>
          {[
            {
              src: "https://cdn.builder.io/api/v1/image/assets%2F54c21d6833f344b988996012f4cdc772%2Fe74bc01a6e574b97a244b450b3199b8f?format=webp&width=800&height=1200",
              name: "Christian Tessier",
              role: "Gérant",
            },
            { src: assets.team[0], name: "David", role: "Chef d'atelier" },
            { src: assets.team[1], name: "Cyprien", role: "Menuisier" },
            { src: assets.team[2], name: "Nathan", role: "Apprenti menuisier-fabricant" },
          ].map((member) => (
            <div key={member.name} style={{ width: "220px", textAlign: "center" }}>
              <img
                src={member.src}
                alt={`${member.name}, ${member.role} chez Hénault Escalier`}
                loading="lazy"
                style={{ width: "220px", height: "220px", borderRadius: "50%", objectFit: "cover", boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}
              />
              <p style={{ margin: "16px 0 0", fontWeight: 700 }}>{member.name}</p>
              <p style={{ margin: "4px 0 0", color: "var(--muted-foreground, #666)" }}>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Galerie Atelier & Chantier */}
      <section className="about-band" style={{ paddingTop: "0" }}>
        <div style={{ maxWidth: "1040px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            <img
              src={assets.atelier.decoupe}
              alt="Découpe du bois dans l'atelier de menuiserie"
              style={{ width: "100%", height: "240px", objectFit: "cover" }}
              loading="lazy"
            />
            <img
              src={assets.atelier.enmarchement}
              alt="Usinage des marches et enmarchement"
              style={{ width: "100%", height: "240px", objectFit: "cover" }}
              loading="lazy"
            />
            <img
              src={assets.stairs.hero1}
              alt="Projet achevé chez le client après installation complète"
              style={{ width: "100%", height: "240px", objectFit: "cover" }}
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
