"use client";

import { useState } from "react";

const SLIDES = [
  { src: "/terrasse-riviere.jpg", alt: "Terrasse au bord de la Nivelle", caption: "Au bord de la Nivelle", sub: "Notre terrasse d'été" },
  { src: "/cote-de-boeuf.jpg", alt: "Côte de bœuf grillée au feu de bois", caption: "Côte de Bœuf", sub: "Grillée au feu de bois" },
  { src: "/salle-tonneau.jpg", alt: "Salle intérieure du restaurant", caption: "Notre Salle", sub: "Tradition & modernité" },
  { src: "/fruits-de-mer.jpg", alt: "Plateau de fruits de mer", caption: "Fruits de Mer", sub: "Fraîcheur de l'océan" },
  { src: "/terrasse-guirlandes.jpg", alt: "Terrasse sous les platanes", caption: "Sous les Platanes", sub: "Guirlandes & rivière" },
  { src: "/tapas.jpg", alt: "Tapas et planches à partager", caption: "Tapas", sub: "À partager entre amis" },
  { src: "/ambiance-conviviale.jpg", alt: "Convives en salle", caption: "L\u2019Esprit Convivial", sub: "Comme à la maison" },
  { src: "/desserts.jpg", alt: "Desserts maison", caption: "Desserts Maison", sub: "La touche finale" },
  { src: "/facade.jpg", alt: "Façade du restaurant Zuzulua", caption: "Bienvenue", sub: "Lieu-dit Cherchebruit" },
  { src: "/danse-basque.jpg", alt: "Danse basque au restaurant", caption: "Soirées Basques", sub: "Culture & festivités" },
  { src: "/terrasse-transat.jpg", alt: "Transats au bord de la rivière", caption: "Détente", sub: "Les pieds dans l'herbe" },
];

export default function ImageCarousel() {
  const [paused, setPaused] = useState(false);

  // Triple the slides so even ultra-wide screens don't show repeats in view
  const allSlides = [...SLIDES, ...SLIDES, ...SLIDES];

  return (
    <div
      className="overflow-hidden py-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex gap-5 animate-marquee-cards"
        style={{ animationPlayState: paused ? "paused" : "running" }}
      >
        {allSlides.map((slide, i) => (
          <div
            key={`${slide.src}-${i}`}
            className="group relative h-52 w-72 flex-shrink-0 overflow-hidden md:h-64 md:w-[340px]"
          >
            {/* Photo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.src}
              alt={slide.alt}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading={i < 6 ? "eager" : "lazy"}
            />

            {/* Vignette overlay */}
            <div
              className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-80"
              style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.05) 100%)" }}
            />

            {/* Postcard corner accents */}
            <div className="absolute top-3 left-3 h-5 w-5 border-t border-l border-gold/40 transition-all duration-500 group-hover:h-7 group-hover:w-7 group-hover:border-gold/70" />
            <div className="absolute top-3 right-3 h-5 w-5 border-t border-r border-gold/40 transition-all duration-500 group-hover:h-7 group-hover:w-7 group-hover:border-gold/70" />

            {/* Caption — postcard style */}
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="font-serif text-base font-semibold tracking-wide text-white md:text-lg">
                {slide.caption}
              </p>
              <div className="mt-1.5 flex items-center gap-2">
                <div className="h-px w-4 bg-gold" />
                <p className="text-[10px] font-semibold tracking-[0.2em] text-gold/80 uppercase">
                  {slide.sub}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
