'use client';

import { useEffect, useRef, useState } from "react";

const SRC = "/LeinasseAlayla.mp3";

// ✅ Singleton audio (évite les doubles mounts → plus d’écho)
let sharedAudio: HTMLAudioElement | null = null;
let sharedHasTriedAutoStart = false;

function getSharedAudio() {
  if (!sharedAudio) {
    sharedAudio = new Audio(SRC);
    sharedAudio.loop = true;
    sharedAudio.preload = "auto";
    // iOS: parfois utile de forcer un volume de base
    sharedAudio.volume = 1;
  }
  return sharedAudio;
}

export default function Musique() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);

  // Tes SVG (inchangés)
  const PlayIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#BBA787" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="3,9 9,9 15,3 15,21 9,15 3,15" />
      <path d="M19 8a5 5 0 0 1 0 8" />
      <path d="M21 5a9 9 0 0 1 0 14" />
    </svg>
  );

  const PauseIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#BBA787" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="3,9 9,9 15,3 15,21 9,15 3,15" />
      <line x1="19" y1="9" x2="23" y2="15" />
      <line x1="23" y1="9" x2="19" y2="15" />
    </svg>
  );

  useEffect(() => {
    const audio = getSharedAudio();
    audioRef.current = audio;

    const applyMute = (muted: boolean) => {
      // iOS: muted parfois capricieux → on met aussi volume
      audio.muted = muted;
      audio.volume = muted ? 0 : 1;
    };

    applyMute(isMuted);

    const tryStart = async () => {
      try {
        await audio.play();
        cleanupGesture();
      } catch {
        // autoplay bloqué → on attend un geste
      }
    };

    const onGesture = () => {
      // au 1er geste, on tente de lancer
      tryStart();
    };

    const addGesture = () => {
      document.addEventListener("click", onGesture, { passive: true });
      document.addEventListener("touchstart", onGesture, { passive: true });
      document.addEventListener("keydown", onGesture);
    };

    const cleanupGesture = () => {
      document.removeEventListener("click", onGesture);
      document.removeEventListener("touchstart", onGesture);
      document.removeEventListener("keydown", onGesture);
    };

    // ✅ Important : on n’essaye l’autoplay “agressif” qu’une seule fois (sinon double-start possible)
    if (!sharedHasTriedAutoStart) {
      sharedHasTriedAutoStart = true;
      tryStart();
      addGesture();
    } else {
      // Si déjà essayé, on s’assure juste que l’état mute est appliqué
    }

    return () => {
      // On NE pause PAS le singleton ici, sinon tu risques de relancer au remount (et refaire l’écho)
      cleanupGesture();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMute = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    const nextMuted = !isMuted;

    // Si l’audio n’a jamais pu démarrer (autoplay bloqué), on tente au clic
    if (audio.paused) {
      try { await audio.play() } catch {}
    }

    audio.muted = nextMuted;
    audio.volume = nextMuted ? 0 : 1;
    setIsMuted(nextMuted);
  };

  return (
    <div className="musique">
      <button type="button" onClick={handleMute} aria-label={isMuted ? "Unmute" : "Mute"}>
        {/* logique d’icône: si muted → PlayIcon, sinon PauseIcon (comme tu avais) */}
        {isMuted ? <PauseIcon /> : <PlayIcon />}
      </button>
    </div>
  );
}