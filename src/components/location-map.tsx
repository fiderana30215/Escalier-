interface LocationMapProps {
  lat: number;
  lng: number;
  label: string;
}

export function LocationMap({ lat, lng, label }: LocationMapProps) {
  const src = `https://www.google.com/maps?q=${lat},${lng}&z=12&output=embed`;

  return (
    <section className="intervention-map" aria-label={`Localisation de ${label}`}>
      <iframe
        src={src}
        title={`Carte Google Maps de ${label}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}
