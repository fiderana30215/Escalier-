export interface InterventionZone {
  slug: string;
  name: string;
  department: string;
  note?: string;
  lat: number;
  lng: number;
}

export const interventionZones: InterventionZone[] = [
  { slug: "romorantin", name: "Romorantin-Lanthenay", department: "41", note: "Atelier", lat: 47.3564, lng: 1.7339 },
  { slug: "blois", name: "Blois", department: "41", lat: 47.5861, lng: 1.3359 },
  { slug: "vendome", name: "Vendôme", department: "41", lat: 47.7914, lng: 1.069 },
  { slug: "orleans", name: "Orléans", department: "45", lat: 47.9029, lng: 1.9093 },
  { slug: "beaugency", name: "Beaugency", department: "45", lat: 47.7833, lng: 1.6333 },
  { slug: "tours", name: "Tours", department: "37", lat: 47.3941, lng: 0.6848 },
  { slug: "chartres", name: "Chartres", department: "28", lat: 48.4469, lng: 1.4892 },
  { slug: "chateaudun", name: "Châteaudun", department: "28", lat: 48.0736, lng: 1.3347 },
  { slug: "dreux", name: "Dreux", department: "28", lat: 48.7372, lng: 1.37 },
  { slug: "versailles", name: "Versailles", department: "78", lat: 48.8014, lng: 2.1301 },
];

export const atelierZone = interventionZones[0];

export function getInterventionZone(slug: string) {
  return interventionZones.find((zone) => zone.slug === slug);
}
