"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "txuz_popup_seen";

export default function FirstVisitPopup() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;
    const timer = setTimeout(() => setVisible(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      localStorage.setItem(STORAGE_KEY, "1");
    }, 400);
  }

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center px-4 ${closing ? "popup-backdrop-out" : "popup-backdrop-in"}`}
      onClick={dismiss}
      style={{ backgroundColor: "rgba(0,0,0,0.5)", backdropFilter: "blur(6px)" }}
    >
      <div
        className={`relative w-full max-w-md overflow-hidden rounded-2xl shadow-2xl ${closing ? "popup-card-out" : "popup-card-in"}`}
        onClick={(e) => e.stopPropagation()}
        style={{ backgroundColor: "#fff" }}
      >
        {/* ── Purple gradient header ── */}
        <div
          className="relative px-8 pt-10 pb-14"
          style={{
            background: "linear-gradient(135deg, #a882f3 0%, #8b5cf6 50%, #7c3aed 100%)",
          }}
        >
          {/* Decorative circles */}
          <div
            className="absolute -top-10 -right-10 h-40 w-40 rounded-full"
            style={{ background: "rgba(255,255,255,0.08)" }}
          />
          <div
            className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full"
            style={{ background: "rgba(255,255,255,0.06)" }}
          />
          <div
            className="absolute top-6 right-20 h-3 w-3 rounded-full"
            style={{ background: "rgba(255,255,255,0.2)" }}
          />
          <div
            className="absolute bottom-10 right-12 h-2 w-2 rounded-full"
            style={{ background: "rgba(255,255,255,0.15)" }}
          />

          {/* Close button */}
          <button
            onClick={dismiss}
            className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full transition-all hover:scale-110"
            style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
            aria-label="Fermer"
          >
            <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* txuz badge */}
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider text-white uppercase"
            style={{ backgroundColor: "rgba(255,255,255,0.15)", backdropFilter: "blur(4px)" }}
          >
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ backgroundColor: "#cdbaf5", boxShadow: "0 0 6px #cdbaf5" }}
            />
            txuz.one
          </div>

          <h2 className="text-2xl font-bold leading-tight text-white">
            Vous aimez ce site ?
          </h2>
          <p className="mt-2 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
            On l&apos;a con&ccedil;u et d&eacute;velopp&eacute; de A &agrave; Z.
          </p>
        </div>

        {/* ── Body ── */}
        <div className="relative px-8 pt-8 pb-8">
          {/* Overlap accent */}
          <div
            className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-xl shadow-lg"
            style={{ background: "linear-gradient(135deg, #a882f3, #7c3aed)" }}
          >
            <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </div>

          <p className="mt-4 text-sm leading-relaxed" style={{ color: "#64748b" }}>
            Un projet web en t&ecirc;te ? Site vitrine, refonte, identit&eacute; visuelle &mdash; on s&apos;occupe de tout, avec soin.
          </p>

          {/* Email CTA */}
          <a
            href="mailto:jix.poylo@txuz.one"
            className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl px-6 py-4 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, #a882f3 0%, #7c3aed 100%)",
              boxShadow: "0 4px 20px rgba(168,130,243,0.35)",
            }}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            Nous contacter
          </a>

          <p className="mt-3 text-center text-xs" style={{ color: "#94a3b8" }}>
            jix.poylo@txuz.one
          </p>

          {/* Dismiss link */}
          <button
            onClick={dismiss}
            className="mt-4 w-full text-center text-xs font-medium transition-colors hover:underline"
            style={{ color: "#a882f3" }}
          >
            Non merci, continuer la navigation
          </button>
        </div>
      </div>
    </div>
  );
}
