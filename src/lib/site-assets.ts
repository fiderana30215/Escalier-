import logoColor from "@/assets/brand/brand-logo-color.png";
import logoWhite from "@/assets/brand/brand-logo-white.png";
import logoBlue from "@/assets/brand/brand-logo-blue.png";
import logoSvg from "@/assets/brand/brand-logo.svg";
import pictoColor from "@/assets/brand/brand-picto-color.png";
import agency from "@/assets/kiwik-logo-bc.svg";

// Real staircase photos from Hénault's atelier and completed client jobs
import hero1 from "@/assets/photos/stairs/hero-escalier.jpg";
import hero2 from "@/assets/photos/stairs/hero-escalier-2.jpg";
import stairDroit from "@/assets/photos/stairs/droit.jpg";
import stairQuart from "@/assets/photos/stairs/quart-tournant.jpg";
import stairDeuxQuart from "@/assets/photos/stairs/deux-quart-tournant.jpg";
import stairHelicoidal from "@/assets/photos/stairs/helicoidal-limon.jpg";
import stairLimonNoir from "@/assets/photos/stairs/limon-central-noir.jpg";
import stairSuspendu from "@/assets/photos/stairs/suspendu.jpg";
import stairBois from "@/assets/photos/stairs/bois-massif.jpg";
import stairMetal from "@/assets/photos/stairs/metal-bois.jpg";
import stairVerre from "@/assets/photos/stairs/verre.jpg";
import stairRenovation from "@/assets/photos/stairs/renovation.jpg";
import stairGrandeMarche from "@/assets/photos/stairs/grande-marche.jpg";
import stairDescente from "@/assets/photos/stairs/descente.jpg";
import stairBalustre from "@/assets/photos/stairs/balustre-metal.jpg";

// Real atelier photos
import atelierChene from "@/assets/photos/atelier/chene-brut.jpg";
import atelierDecoupe from "@/assets/photos/atelier/decoupe.jpg";
import atelierEnmarchement from "@/assets/photos/atelier/enmarchement.jpg";
import atelierFabrication from "@/assets/photos/atelier/fabrication.jpg";
import atelierAssemblage from "@/assets/photos/atelier/assemblage.jpg";
import atelierMarche from "@/assets/photos/atelier/marche.jpg";

// Real custom furniture and verrières photos
import mobilierSousEscalier from "@/assets/photos/mobilier/sous-escalier.jpg";
import mobilierBibliotheque from "@/assets/photos/mobilier/bibliotheque.jpg";
import mobilierClaustra from "@/assets/photos/mobilier/claustra.jpg";
import verriereBois from "@/assets/photos/verriere/verriere-bois.jpg";
import verriereBlanche from "@/assets/photos/verriere/verriere-blanche.jpg";

// Client requested photos from Google Drive
import heroSlide1 from "@/assets/photos/client/hero-slide-1.jpg";
import heroSlide2 from "@/assets/photos/client/hero-slide-2.jpg";
import block1BoisContremarche from "@/assets/photos/client/block1-bois-contremarche.jpg";
import block2FabricationContremarche from "@/assets/photos/client/block2-fabrication-contremarche.jpg";
import block3SansContremarche from "@/assets/photos/client/block3-sans-contremarche.jpg";
import block4Escalier2 from "@/assets/photos/client/block4-escalier-2.jpg";

// Legacy assets fallback
import legacyHero from "@/assets/hero-home-banner.jpg";
import legacyTradition from "@/assets/escalier-tradition-henault-et-cie.jpg";

export const assets = {
  logo: logoColor,
  whiteLogo: logoWhite,
  blueLogo: logoBlue,
  logoSvg,
  picto: pictoColor,
  agency,
  client: {
    heroSlide1,
    heroSlide2,
    block1: block1BoisContremarche,
    block2: block2FabricationContremarche,
    block3: block3SansContremarche,
    block4: block4Escalier2,
  },
  hero: hero1,
  heroSecondary: hero2,
  tradition: stairDeuxQuart,
  metal: stairMetal,
  about: atelierFabrication,
  quality: stairBois,
  stairs: {
    hero1,
    hero2,
    droit: stairDroit,
    quartTournant: stairQuart,
    deuxQuartTournant: stairDeuxQuart,
    helicoidal: stairHelicoidal,
    limonNoir: stairLimonNoir,
    suspendu: stairSuspendu,
    bois: stairBois,
    metal: stairMetal,
    verre: stairVerre,
    renovation: stairRenovation,
    grandeMarche: stairGrandeMarche,
    descente: stairDescente,
    balustre: stairBalustre,
  },
  atelier: {
    chene: atelierChene,
    decoupe: atelierDecoupe,
    enmarchement: atelierEnmarchement,
    fabrication: atelierFabrication,
    assemblage: atelierAssemblage,
    marche: atelierMarche,
  },
  complementary: {
    sousEscalier: mobilierSousEscalier,
    bibliotheque: mobilierBibliotheque,
    claustra: mobilierClaustra,
    verriereBois,
    verriereBlanche,
  },
  gallery: [
    stairDroit,
    stairQuart,
    stairHelicoidal,
    stairSuspendu,
    stairBois,
    stairMetal,
    stairVerre,
    stairRenovation,
    stairGrandeMarche,
    stairDeuxQuart,
    stairLimonNoir,
    stairDescente,
    atelierFabrication,
    atelierDecoupe,
    mobilierSousEscalier,
    mobilierBibliotheque,
    verriereBois,
    verriereBlanche,
    legacyHero,
    legacyTradition,
  ],
};

export const facebookUrl = "https://www.facebook.com/henaultcie/";
export const instagramUrl = "https://www.instagram.com/menuiseriehenault/";

export function pageHead(title: string, description: string, image?: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      ...(image?.startsWith("https://")
        ? [
            { property: "og:image", content: image },
            { name: "twitter:image", content: image },
          ]
        : []),
    ],
  };
}
