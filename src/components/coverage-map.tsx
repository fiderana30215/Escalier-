import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { interventionZones } from "@/lib/intervention-zones";

export function CoverageMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let map: { remove: () => void } | undefined;
    let cancelled = false;

    void import("leaflet").then((L) => {
      if (cancelled) return;

      const instance = L.map(container, { scrollWheelZoom: false });
      map = instance;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(instance);

      for (const zone of interventionZones) {
        L.circleMarker([zone.lat, zone.lng], {
          radius: 8,
          color: "#ffffff",
          weight: 2,
          fillColor: "#dc2626",
          fillOpacity: 1,
        })
          .bindTooltip(zone.name, {
            permanent: true,
            direction: "right",
            offset: [10, 0],
            className: "coverage-map-label",
          })
          .addTo(instance);
      }

      instance.fitBounds(
        L.latLngBounds(interventionZones.map((zone) => [zone.lat, zone.lng])),
        { padding: [24, 24] },
      );
    });

    return () => {
      cancelled = true;
      map?.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="coverage-map"
      role="region"
      aria-label="Carte des 10 secteurs d’intervention"
    />
  );
}
