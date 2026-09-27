"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/portfolio";
import { createGalaxy, type GalaxyApi } from "./galaxyEngine";
import { galaxyWorlds, type GalaxyWorld } from "./worlds";
import "./galaxy.css";

export default function GalaxyExperience() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const labelsRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const apiRef = useRef<GalaxyApi | null>(null);
  const [story, setStory] = useState(false);
  const [world, setWorld] = useState<GalaxyWorld | null>(null);
  const [me, setMe] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const labels = labelsRef.current;
    if (!canvas || !labels) return;
    const api = createGalaxy(canvas, labels, galaxyWorlds, {
      onPlanet: (w) => {
        setMe(false);
        setWorld(w);
      },
      onShip: () => {
        setWorld(null);
        setMe(true);
      },
    });
    apiRef.current = api;
    return () => {
      api.destroy();
      apiRef.current = null;
    };
  }, []);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    if (world?.video) {
      vid.src = world.video;
      void vid.play().catch(() => undefined);
    } else {
      vid.pause();
      vid.removeAttribute("src");
      vid.load();
    }
  }, [world]);

  const close = () => {
    videoRef.current?.pause();
    setWorld(null);
    setMe(false);
    apiRef.current?.reset();
  };

  const open = world !== null || me;

  return (
    <div className="gxy">
      <canvas ref={canvasRef} />
      <div ref={labelsRef} className="gxy-labels" />

      <nav className="gxy-nav">
        <a href="/">S<i>S</i></a>
      </nav>

      {!story && (
        <button type="button" className="gxy-know" onClick={() => setStory(true)}>
          Know about us
        </button>
      )}

      {story && !open && (
        <div className="gxy-intro">
          <p className="eyebrow">One finite system · four worlds</p>
          <h1>
            I don&apos;t build
            <br />
            for everyone.
            <br />
            <em>I build worlds.</em>
          </h1>
          <p className="hint">Click a planet for the project. Click the rocket to meet me. Close resets the view.</p>
        </div>
      )}

      {open && <div className="gxy-overlay" onClick={close} />}

      {world && (
        <article className="gxy-box" aria-modal="true">
          <div className="gxy-box-top">
            <div>
              <div className="gxy-kicker">Planet {world.num}</div>
              <h2>{world.name}</h2>
              <div className="gxy-cat">{world.cat}</div>
            </div>
            <button className="gxy-x" type="button" onClick={close} aria-label="Close">
              ×
            </button>
          </div>
          <div className="gxy-body">
            <p>{world.copy}</p>
            <div className="gxy-tech">
              {world.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <video ref={videoRef} className="gxy-vid" controls playsInline style={{ display: world.video ? "block" : "none" }} />
            {world.href && (
              <a className="gxy-link" href={world.href} target="_blank" rel="noreferrer">
                Open site →
              </a>
            )}
          </div>
        </article>
      )}

      {me && (
        <article className="gxy-box" aria-modal="true">
          <div className="gxy-box-top">
            <div>
              <div className="gxy-kicker">The rocket</div>
              <h2>{profile.name}</h2>
              <div className="gxy-cat">{profile.tagline} · {profile.location}</div>
            </div>
            <button className="gxy-x" type="button" onClick={close} aria-label="Close">
              ×
            </button>
          </div>
          <div className="gxy-body">
            <div className="gxy-me">
              <img src="/images/shivanshu.jpeg" alt={profile.name} />
              <p style={{ margin: 0 }}>{profile.bio[0]} {profile.bio[2]}</p>
            </div>
            <div className="gxy-stats">
              {profile.stats.map((s) => (
                <div key={s.label}>
                  <b>{s.value}</b>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
            <div className="gxy-tech">
              <span>Full-stack</span>
              <span>AI systems</span>
              <span>Automation</span>
              <span>AWS</span>
            </div>
            <a className="gxy-link" href={`mailto:${profile.email}`}>
              Start a conversation →
            </a>
          </div>
        </article>
      )}

      <div className="gxy-legend">
        {galaxyWorlds.map((w) => (
          <button key={w.id} type="button" onClick={() => apiRef.current?.focusPlanet(w.id)}>
            <img alt="" src={w.icon} />
            {w.name}
          </button>
        ))}
        <button type="button" onClick={() => apiRef.current?.focusShip()}>
          Rocket · About me
        </button>
      </div>
    </div>
  );
}
