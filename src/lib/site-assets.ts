import logo from '@/assets/henault-cie-logo-full.svg';
import whiteLogo from '@/assets/henault-cie-logo-wh.svg';
import agency from '@/assets/kiwik-logo-bc.svg';
import hero from '@/assets/hero-home-banner.jpg';
import tradition from '@/assets/escalier-tradition-henault-et-cie.jpg';
import metal from '@/assets/escalier-metal-lisse-peint-25.jpg';
import about from '@/assets/pose-escalier-particulier-et-professionnels.jpg';
import quality from '@/assets/escalier-sur-mesure-personnalisable.jpg';
import insta1 from '@/assets/275353130_1077555282804984_6839497903847973230_n.webplow.jpg';
import insta2 from '@/assets/274563305_2750273705279714_1555854750053080353_n.webplow.jpg';
import insta3 from '@/assets/271520987_889648415057869_4903450884706547128_nfull.jpg';
import g1 from '@/assets/01-escalier-lisse-peint.jpg';
import g2 from '@/assets/02-escalier-tradition.jpg';
import g3 from '@/assets/03-escalier-lisse-metal-peint.jpg';
import g4 from '@/assets/04-escalier-lisse-metal-peint.jpg';
import g5 from '@/assets/05-escalier-double-cremaillere.jpg';
import g6 from '@/assets/06-escalier-simple-cremaillere.jpg';
import g7 from '@/assets/07-escalier-bois-metal.jpg';
import g8 from '@/assets/08-escalier-metal-lisse-peint.jpg';
import galleryHero from '@/assets/hero-home-banner.jpg';
import galleryTradition from '@/assets/escalier-tradition-henault-et-cie.jpg';
import galleryMetal from '@/assets/escalier-metal-lisse-peint-25.jpg';
import galleryAbout from '@/assets/pose-escalier-particulier-et-professionnels.jpg';
import galleryQuality from '@/assets/escalier-sur-mesure-personnalisable.jpg';
import galleryInsta1 from '@/assets/275353130_1077555282804984_6839497903847973230_n.webplow.jpg';
import galleryInsta2 from '@/assets/274563305_2750273705279714_1555854750053080353_n.webplow.jpg';
import galleryInsta3 from '@/assets/271520987_889648415057869_4903450884706547128_nfull.jpg';
export const assets = {
  logo,
  whiteLogo,
  agency,
  hero,
  tradition,
  metal,
  about,
  quality,
  instagram: [insta1, insta2, insta3],
  gallery: [
    g1,
    g2,
    g3,
    g4,
    g5,
    g6,
    g7,
    g8,
    galleryHero,
    galleryTradition,
    galleryMetal,
    galleryAbout,
    galleryQuality,
    galleryInsta1,
    galleryInsta2,
    galleryInsta3,
  ],
};
export const facebookUrl = 'https://www.facebook.com/henaultcie/';
export const instagramUrl = 'https://www.instagram.com/menuiseriehenault/';
export function pageHead(title:string,description:string,image?:string){return {meta:[{title},{name:'description',content:description},{property:'og:title',content:title},{property:'og:description',content:description},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'},...(image?.startsWith("https://")?[{property:'og:image',content:image},{name:'twitter:image',content:image}]:[])]};}
