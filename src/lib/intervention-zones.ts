export interface InterventionZone {
  slug: string;
  name: string;
  department: string;
  note?: string;
}

export const interventionZones: InterventionZone[] = [
  { slug: "romorantin", name: "Romorantin-Lanthenay", department: "41", note: "Atelier" },
  { slug: "blois", name: "Blois", department: "41" },
  { slug: "vendome", name: "Vendôme", department: "41" },
  { slug: "orleans", name: "Orléans", department: "45" },
  { slug: "beaugency", name: "Beaugency", department: "45" },
  { slug: "tours", name: "Tours", department: "37" },
  { slug: "chartres", name: "Chartres", department: "28" },
  { slug: "chateaudun", name: "Châteaudun", department: "28" },
  { slug: "dreux", name: "Dreux", department: "28" },
  { slug: "versailles", name: "Versailles", department: "78" },
];

export function getInterventionZone(slug: string) {
  return interventionZones.find((zone) => zone.slug === slug);
}
