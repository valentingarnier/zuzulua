"use client";

export default function StickyBanner() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9998]">
      <div
        className="flex items-center justify-center gap-3 px-4 py-2.5 text-center sm:gap-4 sm:px-8"
        style={{
          background: "linear-gradient(135deg, #a882f3 0%, #7c3aed 100%)",
          boxShadow: "0 -4px 20px rgba(124,58,237,0.25)",
        }}
      >
        {/* Pulsing dot */}
        <span className="relative hidden h-2 w-2 shrink-0 sm:flex">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ backgroundColor: "#cdbaf5" }} />
          <span className="relative inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: "#cdbaf5" }} />
        </span>

        <p className="text-[11px] font-medium text-white sm:text-xs">
          Ce site n&apos;est pas un site officiel &mdash; maquette r&eacute;alis&eacute;e par{" "}
          <a
            href="https://txuz.one"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline decoration-white/40 underline-offset-2 transition-all hover:decoration-white"
          >
            txuz.one
          </a>
        </p>
      </div>
    </div>
  );
}
