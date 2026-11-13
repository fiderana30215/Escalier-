import { createFileRoute, notFound } from "@tanstack/react-router";
import { InterventionZonePage } from "@/components/intervention-zone-page";
import { getInterventionZone } from "@/lib/intervention-zones";
import { assets, pageHead } from "@/lib/site-assets";

export const Route = createFileRoute("/zones-intervention/$slug")({
  loader: ({ params }) => {
    const zone = getInterventionZone(params.slug);
    if (!zone) throw notFound();
    return { zone };
  },
  head: ({ params }) => {
    const zone = getInterventionZone(params.slug);
    return pageHead(
      zone
        ? `Escalier sur mesure à ${zone.name} (${zone.department}) | Hénault Escalier`
        : "Zone d’intervention | Hénault Escalier",
      zone
        ? `Conception, fabrication et pose d’escaliers sur mesure à ${zone.name} (${zone.department}). Étude à domicile et installation par les équipes Hénault Escalier.`
        : "Découvrez les secteurs d’intervention de Hénault Escalier.",
      assets.hero,
    );
  },
  component: InterventionZoneRoute,
});

function InterventionZoneRoute() {
  const { zone } = Route.useLoaderData();
  return <InterventionZonePage zone={zone} />;
}
