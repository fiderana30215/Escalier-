import { createFileRoute, notFound } from "@tanstack/react-router";
import { ZoneSimulationPage } from "@/components/zone-simulation-page";
import { getInterventionZone } from "@/lib/intervention-zones";
import { assets, pageHead } from "@/lib/site-assets";

export const Route = createFileRoute("/simulation/$slug")({
  loader: ({ params }) => {
    const zone = getInterventionZone(params.slug);
    if (!zone) throw notFound();
    return { zone };
  },
  head: ({ params }) => {
    const zone = getInterventionZone(params.slug);
    return pageHead(
      zone
        ? `Simulation de devis escalier à ${zone.name} | Hénault Escalier`
        : "Simulation de devis escalier | Hénault Escalier",
      zone
        ? `Décrivez votre projet d’escalier à ${zone.name} (${zone.department}) et recevez une étude personnalisée de Hénault Escalier.`
        : "Décrivez votre projet d’escalier pour recevoir une étude personnalisée.",
      assets.hero,
    );
  },
  component: ZoneSimulationRoute,
});

function ZoneSimulationRoute() {
  const { zone } = Route.useLoaderData();
  return <ZoneSimulationPage zone={zone} />;
}