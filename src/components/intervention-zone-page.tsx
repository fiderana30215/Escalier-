import { useRouter } from "@tanstack/react-router";
import { ArrowLeft, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";
import type { InterventionZone } from "@/lib/intervention-zones";
import { LocationMap } from "@/components/location-map";

export function InterventionZonePage({ zone }: { zone: InterventionZone }) {
  const router = useRouter();
  const mapFrameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mapFrameRef.current?.scrollIntoView({ block: "start" });
  }, [zone.slug]);

  function goBack() {
    if (window.history.length > 1) {
      router.history.back();
    } else {
      void router.navigate({ to: "/zones-intervention" });
    }
  }

  return (
    <main className="intervention-map-page">
      <div className="intervention-map-header">
        <button type="button" className="intervention-back-btn" onClick={goBack}>
          <ArrowLeft size={16} aria-hidden="true" /> Retour
        </button>
        <h1>
          <MapPin size={24} aria-hidden="true" /> Escaliers sur mesure à {zone.name}
        </h1>
      </div>
      <div ref={mapFrameRef} className="intervention-map-frame">
        <LocationMap lat={zone.lat} lng={zone.lng} label={zone.name} />
      </div>
    </main>
  );
}
