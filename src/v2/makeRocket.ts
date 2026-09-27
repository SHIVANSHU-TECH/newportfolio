import * as THREE from "three";

function mat(opts: Record<string, unknown>) {
  return new THREE.MeshStandardMaterial(opts);
}

function panelSkin() {
  const c = document.createElement("canvas");
  c.width = 256;
  c.height = 1024;
  const ctx = c.getContext("2d")!;
  ctx.fillStyle = "#efeae0";
  ctx.fillRect(0, 0, 256, 1024);
  ctx.strokeStyle = "rgba(40,38,34,0.18)";
  ctx.lineWidth = 1;
  for (let y = 0; y < 1024; y += 42) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(256, y);
    ctx.stroke();
  }
  for (let x = 0; x < 256; x += 64) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 1024);
    ctx.stroke();
  }
  ctx.fillStyle = "#111318";
  ctx.fillRect(108, 180, 40, 520);
  ctx.fillStyle = "#c8f542";
  ctx.fillRect(118, 240, 20, 8);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

function plumeSprite() {
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, "rgba(255,245,210,1)");
  g.addColorStop(0.18, "rgba(255,170,60,0.95)");
  g.addColorStop(0.45, "rgba(255,80,10,0.45)");
  g.addColorStop(1, "rgba(255,40,0,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/** Orbital rocket — unmistakable silhouette. Nose is +Y. */
export function makeRocket() {
  const g = new THREE.Group();
  const skin = panelSkin();

  const white = mat({
    map: skin,
    color: 0xfff8ee,
    metalness: 0.18,
    roughness: 0.42,
    emissive: 0x2a261c,
    emissiveIntensity: 0.22,
  });
  const bare = mat({
    color: 0xfff6ea,
    metalness: 0.16,
    roughness: 0.38,
    emissive: 0x332c20,
    emissiveIntensity: 0.18,
  });
  const black = mat({ color: 0x12141a, metalness: 0.55, roughness: 0.36 });
  const carbon = mat({ color: 0x0a0b10, metalness: 0.78, roughness: 0.22 });
  const soot = mat({ color: 0x2a221c, metalness: 0.2, roughness: 0.78 });
  const copper = mat({ color: 0x3a2a22, metalness: 0.82, roughness: 0.28 });
  const flame = mat({
    color: 0xff8a2b,
    emissive: 0xff4a00,
    emissiveIntensity: 3.6,
    roughness: 0.18,
    metalness: 0,
  });
  const core = mat({
    color: 0xfff3c4,
    emissive: 0xffcc66,
    emissiveIntensity: 3.2,
    roughness: 0.1,
    metalness: 0,
  });

  const engines = new THREE.Group();
  const bells: [number, number][] = [[0, 0]];
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    bells.push([Math.cos(a) * 0.2, Math.sin(a) * 0.2]);
  }
  bells.forEach(([x, z], i) => {
    const scale = i === 0 ? 1.08 : 0.92;
    const bell = new THREE.Mesh(new THREE.CylinderGeometry(0.038 * scale, 0.092 * scale, 0.26, 16), copper);
    bell.position.set(x, 0.12, z);
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.09 * scale, 0.012, 8, 16), carbon);
    rim.rotation.x = Math.PI / 2;
    rim.position.set(x, 0, z);
    const cone = new THREE.Mesh(new THREE.ConeGeometry(0.068 * scale, 0.42, 14), flame);
    cone.position.set(x, -0.2, z);
    cone.rotation.x = Math.PI;
    const inner = new THREE.Mesh(new THREE.ConeGeometry(0.03 * scale, 0.26, 10), core);
    inner.position.set(x, -0.14, z);
    inner.rotation.x = Math.PI;
    engines.add(bell, rim, cone, inner);
  });

  const octaweb = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.36, 0.1, 24), carbon);
  octaweb.position.y = 0.26;

  const skirt = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.35, 0.22, 28), soot);
  skirt.position.y = 0.4;

  const stage1 = new THREE.Mesh(new THREE.CylinderGeometry(0.27, 0.3, 2.15, 32), white);
  stage1.position.y = 1.55;

  const race = new THREE.Mesh(new THREE.CylinderGeometry(0.272, 0.298, 0.32, 32), black);
  race.position.y = 0.95;

  const band = new THREE.Mesh(new THREE.CylinderGeometry(0.271, 0.286, 0.07, 32), black);
  band.position.y = 2.05;

  const inter = new THREE.Mesh(new THREE.CylinderGeometry(0.23, 0.27, 0.18, 24), black);
  inter.position.y = 2.68;

  const stage2 = new THREE.Mesh(new THREE.CylinderGeometry(0.21, 0.23, 0.62, 28), bare);
  stage2.position.y = 3.06;

  const fairing = new THREE.Mesh(new THREE.ConeGeometry(0.21, 0.92, 28), bare);
  fairing.position.y = 3.8;

  const tip = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.18, 10), black);
  tip.position.y = 4.32;

  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
    const cx = Math.cos(a);
    const sz = Math.sin(a);

    const fin = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.55, 0.38), black);
    fin.position.set(cx * 0.33, 0.58, sz * 0.33);
    fin.lookAt(0, 0.58, 0);
    fin.rotateY(Math.PI);

    const foot = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.04, 0.16), carbon);
    foot.position.set(cx * 0.5, 0.28, sz * 0.5);
    foot.lookAt(0, 0.28, 0);

    const grid = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.28, 0.035), carbon);
    grid.position.set(cx * 0.3, 2.38, sz * 0.3);
    grid.lookAt(0, 2.38, 0);
    const slit = new THREE.Mesh(
      new THREE.BoxGeometry(0.2, 0.2, 0.02),
      mat({ color: 0x1c1e24, metalness: 0.4, roughness: 0.5 })
    );
    slit.position.set(cx * 0.318, 2.38, sz * 0.318);
    slit.lookAt(0, 2.38, 0);

    g.add(fin, foot, grid, slit);
  }

  const glow = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: plumeSprite(),
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
  );
  glow.position.set(0, -0.7, 0);
  glow.scale.set(2.4, 3.2, 1);
  glow.userData.pulse = true;

  const plume = new THREE.PointLight(0xff6a12, 14, 12);
  plume.position.set(0, -0.4, 0);

  const hit = new THREE.Mesh(
    new THREE.CylinderGeometry(0.72, 0.72, 4.6, 8),
    new THREE.MeshBasicMaterial({ visible: false })
  );
  hit.position.y = 1.9;

  g.add(engines, octaweb, skirt, stage1, race, band, inter, stage2, fairing, tip, glow, plume, hit);
  const lamp = new THREE.PointLight(0xffe6b0, 6, 8);
  lamp.position.set(0.6, 2.2, 1.1);
  g.add(lamp);

  g.userData = { kind: "ship", glow, flame, core };
  g.scale.setScalar(1.9);
  return g;
}
