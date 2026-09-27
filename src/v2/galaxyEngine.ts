import * as THREE from "three";
import { makeRocket } from "./makeRocket";
import type { GalaxyWorld } from "./worlds";

type Handlers = {
  onPlanet: (world: GalaxyWorld) => void;
  onShip: () => void;
};

export type GalaxyApi = {
  reset: () => void;
  focusPlanet: (id: string) => void;
  focusShip: () => void;
  destroy: () => void;
};

const SYSTEM_RADIUS = 11;
const HOME = new THREE.Vector3(0, 2.4, 14.2);
const MAX_ARM = 9.1;

function hash2(x: number, y: number) {
  const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return s - Math.floor(s);
}
function noise2(x: number, y: number) {
  const xi = Math.floor(x), yi = Math.floor(y);
  const xf = x - xi, yf = y - yi;
  const u = xf * xf * (3 - 2 * xf);
  const v = yf * yf * (3 - 2 * yf);
  return (
    hash2(xi, yi) * (1 - u) * (1 - v) +
    hash2(xi + 1, yi) * u * (1 - v) +
    hash2(xi, yi + 1) * (1 - u) * v +
    hash2(xi + 1, yi + 1) * u * v
  );
}
function fbm(x: number, y: number) {
  let a = 0, amp = 0.5, f = 1;
  for (let i = 0; i < 5; i++) {
    a += noise2(x * f, y * f) * amp;
    f *= 2;
    amp *= 0.52;
  }
  return a;
}

function planetMaps(src: string, tint: number) {
  const w = 1024, h = 512;
  const color = document.createElement("canvas");
  const emit = document.createElement("canvas");
  const rough = document.createElement("canvas");
  color.width = emit.width = rough.width = w;
  color.height = emit.height = rough.height = h;
  const c = color.getContext("2d")!;
  const e = emit.getContext("2d")!;
  const r = rough.getContext("2d")!;
  const ocean = new THREE.Color(tint).multiplyScalar(0.35);
  const land = new THREE.Color(tint);
  c.fillStyle = `#${ocean.getHexString()}`;
  c.fillRect(0, 0, w, h);
  e.fillStyle = "#000";
  e.fillRect(0, 0, w, h);
  const imgData = c.getImageData(0, 0, w, h);
  const rData = r.createImageData(w, h);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const n = fbm(x / w * 7.2, y / h * 3.4);
      const ridge = fbm(x / w * 14, y / h * 7);
      const pole = Math.abs(y / h - 0.5) * 2;
      const i = (y * w + x) * 4;
      if (n > 0.46 || pole > 0.84) {
        const mix = Math.min(1, (n - 0.46) * 2.8 + (pole > 0.84 ? 0.45 : 0));
        const shade = 0.48 + mix * 0.52 + ridge * 0.12;
        imgData.data[i] = Math.floor(land.r * 255 * shade);
        imgData.data[i + 1] = Math.floor(land.g * 255 * shade);
        imgData.data[i + 2] = Math.floor(land.b * 255 * shade);
        if (pole > 0.84) {
          const ice = 210 + Math.floor(ridge * 35);
          imgData.data[i] = imgData.data[i + 1] = imgData.data[i + 2] = ice;
        }
        rData.data[i] = rData.data[i + 1] = rData.data[i + 2] = 150;
      } else {
        const deep = 0.72 + n * 0.4;
        imgData.data[i] = Math.floor(ocean.r * 255 * deep);
        imgData.data[i + 1] = Math.floor(ocean.g * 255 * deep);
        imgData.data[i + 2] = Math.floor(ocean.b * 255 * deep);
        rData.data[i] = rData.data[i + 1] = rData.data[i + 2] = 18;
      }
      rData.data[i + 3] = 255;
    }
  }
  c.putImageData(imgData, 0, 0);
  r.putImageData(rData, 0, 0);
  const colorTex = new THREE.CanvasTexture(color);
  const emitTex = new THREE.CanvasTexture(emit);
  const roughTex = new THREE.CanvasTexture(rough);
  colorTex.colorSpace = THREE.SRGBColorSpace;
  emitTex.colorSpace = THREE.SRGBColorSpace;
  const img = new Image();
  img.onload = () => {
    c.save();
    c.globalAlpha = 0.72;
    c.globalCompositeOperation = "overlay";
    c.drawImage(img, 0, h * 0.18, w, h * 0.64);
    c.restore();
    c.save();
    c.globalAlpha = 0.38;
    c.drawImage(img, 0, h * 0.22, w * 0.5, h * 0.56);
    c.drawImage(img, w * 0.5, h * 0.22, w * 0.5, h * 0.56);
    c.restore();
    const cap = c.createLinearGradient(0, 0, 0, h);
    cap.addColorStop(0, "rgba(245,245,255,0.55)");
    cap.addColorStop(0.12, "rgba(0,0,0,0)");
    cap.addColorStop(0.88, "rgba(0,0,0,0)");
    cap.addColorStop(1, "rgba(245,245,255,0.55)");
    c.fillStyle = cap;
    c.fillRect(0, 0, w, h);
    e.drawImage(img, 0, h * 0.2, w, h * 0.6);
    e.globalCompositeOperation = "multiply";
    e.fillStyle = "#1a1208";
    e.fillRect(0, 0, w, h);
    colorTex.needsUpdate = true;
    emitTex.needsUpdate = true;
  };
  img.src = src;
  return { colorTex, emitTex, roughTex };
}

function cloudTexture() {
  const w = 512, h = 256;
  const cnv = document.createElement("canvas");
  cnv.width = w;
  cnv.height = h;
  const ctx = cnv.getContext("2d")!;
  for (let y = 0; y < h; y += 2) {
    for (let x = 0; x < w; x += 2) {
      const n = fbm(x / 55, y / 42);
      const a = n > 0.56 ? Math.min(0.5, (n - 0.56) * 2) : 0;
      if (a > 0.02) {
        ctx.fillStyle = `rgba(255,255,255,${a})`;
        ctx.fillRect(x, y, 2, 2);
      }
    }
  }
  return new THREE.CanvasTexture(cnv);
}

function starSprite() {
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.2, "rgba(255,250,230,0.9)");
  g.addColorStop(0.45, "rgba(200,220,255,0.25)");
  g.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}

function makeStars(count: number, radius: number, size: number, color: number) {
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = radius * (0.86 + Math.random() * 0.2);
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    pos[i * 3 + 2] = r * Math.cos(phi);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  return new THREE.Points(
    geo,
    new THREE.PointsMaterial({
      color,
      size,
      map: starSprite(),
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    })
  );
}

export function createGalaxy(
  canvas: HTMLCanvasElement,
  labelsEl: HTMLElement,
  worlds: GalaxyWorld[],
  handlers: Handlers
): GalaxyApi {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x010208);
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 400);
  camera.position.copy(HOME);

  const started = performance.now();
  const pointer = new THREE.Vector2();
  const raycaster = new THREE.Raycaster();
  const targetCam = HOME.clone();
  const targetLook = new THREE.Vector3();
  const look = new THREE.Vector3();
  const upY = new THREE.Vector3(0, 1, 0);
  let selected: THREE.Object3D | null = null;
  let dragging = false;
  let moved = false;
  let lastX = 0;
  let lastY = 0;
  let yaw = 0.2;
  let pitch = 0.12;
  let raf = 0;

  const resize = () => {
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  };
  resize();

  scene.add(makeStars(9000, 110, 0.48, 0xffffff));
  scene.add(makeStars(2400, 78, 1.05, 0xfff4d2));
  scene.add(makeStars(280, 48, 1.7, 0xc8f542));
  scene.add(makeStars(90, 36, 2.4, 0xffe08a));

  const gCount = 2200;
  const gPos = new Float32Array(gCount * 3);
  const gCol = new Float32Array(gCount * 3);
  const lime = new THREE.Color(0xc8f542);
  const dust = new THREE.Color(0x8a90a0);
  for (let i = 0; i < gCount; i++) {
    const t = Math.random();
    const radius = 1.4 + t * (MAX_ARM - 1.4);
    const arm = i % 4;
    const a = radius * 0.7 + arm * (Math.PI / 2) + (Math.random() - 0.5) * 0.28;
    gPos[i * 3] = Math.cos(a) * radius;
    gPos[i * 3 + 1] = (Math.random() - 0.5) * 0.22;
    gPos[i * 3 + 2] = Math.sin(a) * radius;
    const col = lime.clone().lerp(dust, 0.35 + Math.random() * 0.5);
    gCol[i * 3] = col.r;
    gCol[i * 3 + 1] = col.g;
    gCol[i * 3 + 2] = col.b;
  }
  const gGeo = new THREE.BufferGeometry();
  gGeo.setAttribute("position", new THREE.BufferAttribute(gPos, 3));
  gGeo.setAttribute("color", new THREE.BufferAttribute(gCol, 3));
  scene.add(
    new THREE.Points(
      gGeo,
      new THREE.PointsMaterial({
        size: 0.03,
        vertexColors: true,
        transparent: true,
        opacity: 0.7,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
    )
  );

  const edge = new THREE.Mesh(
    new THREE.RingGeometry(MAX_ARM + 0.05, MAX_ARM + 0.09, 128),
    new THREE.MeshBasicMaterial({ color: 0xc8f542, transparent: true, opacity: 0.18, side: THREE.DoubleSide })
  );
  edge.rotation.x = Math.PI / 2;
  scene.add(edge);

  const sunSpriteTex = (() => {
    const c = document.createElement("canvas");
    c.width = c.height = 256;
    const ctx = c.getContext("2d")!;
    const g = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
    g.addColorStop(0, "rgba(255,248,210,1)");
    g.addColorStop(0.18, "rgba(255,196,74,0.95)");
    g.addColorStop(0.42, "rgba(255,140,30,0.35)");
    g.addColorStop(1, "rgba(255,80,0,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 256, 256);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  })();
  const sunGroup = new THREE.Group();
  sunGroup.add(
    new THREE.Mesh(new THREE.SphereGeometry(1.08, 64, 64), new THREE.MeshBasicMaterial({ color: 0xffc14a })),
    new THREE.Mesh(new THREE.SphereGeometry(0.7, 32, 32), new THREE.MeshBasicMaterial({ color: 0xfff4c4 })),
    new THREE.Mesh(new THREE.SphereGeometry(1.62, 32, 32), new THREE.MeshBasicMaterial({ color: 0xff9a1f, transparent: true, opacity: 0.18 })),
    new THREE.Mesh(new THREE.SphereGeometry(2.25, 32, 32), new THREE.MeshBasicMaterial({ color: 0xff7a00, transparent: true, opacity: 0.07 }))
  );
  const sunHalo = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: sunSpriteTex,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
  );
  sunHalo.scale.set(7.2, 7.2, 1);
  sunGroup.add(sunHalo);
  const corona = sunGroup.children[2];
  scene.add(sunGroup);
  const sunLight = new THREE.PointLight(0xffc14a, 90, 38, 1.45);
  scene.add(sunLight);
  scene.add(new THREE.AmbientLight(0x3c3a34, 0.22));
  const fill = new THREE.DirectionalLight(0xffe6b0, 0.38);
  fill.position.set(2, 3, 8);
  scene.add(fill);

  const clickables: THREE.Object3D[] = [];
  const planetMeshes: THREE.Mesh[] = [];
  const labelNodes: { el: HTMLElement; mesh: THREE.Object3D }[] = [];
  const cloudsTex = cloudTexture();

  worlds.forEach((w) => {
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(w.orbit - 0.012, w.orbit + 0.012, 140),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.1, side: THREE.DoubleSide })
    );
    ring.rotation.x = Math.PI / 2;
    scene.add(ring);

    const maps = planetMaps(w.icon, w.color);
    const mesh = new THREE.Mesh(
      new THREE.SphereGeometry(w.size, 96, 96),
      new THREE.MeshStandardMaterial({
        map: maps.colorTex,
        emissiveMap: maps.emitTex,
        emissive: 0xffcc88,
        emissiveIntensity: 0.42,
        roughnessMap: maps.roughTex,
        roughness: 0.78,
        metalness: 0.08,
      })
    );
    mesh.userData = { kind: "planet", world: w };
    const clouds = new THREE.Mesh(
      new THREE.SphereGeometry(w.size * 1.025, 48, 48),
      new THREE.MeshStandardMaterial({
        map: cloudsTex,
        transparent: true,
        opacity: 0.42,
        depthWrite: false,
        roughness: 1,
        metalness: 0,
      })
    );
    clouds.userData = { spin: 0.0018 + Math.random() * 0.001 };
    mesh.add(clouds);
    mesh.add(
      new THREE.Mesh(
        new THREE.SphereGeometry(w.size * 1.12, 48, 48),
        new THREE.MeshBasicMaterial({ color: w.color, transparent: true, opacity: 0.16, side: THREE.BackSide, depthWrite: false })
      )
    );
    scene.add(mesh);
    clickables.push(mesh);
    planetMeshes.push(mesh);

    const tag = document.createElement("div");
    tag.className = "gxy-plabel";
    tag.innerHTML = `<img alt="" src="${w.icon}" /><span>${w.name}</span>`;
    labelsEl.appendChild(tag);
    labelNodes.push({ el: tag, mesh });
  });

  const rocketRing = new THREE.Mesh(
    new THREE.RingGeometry(6.28, 6.42, 160),
    new THREE.MeshBasicMaterial({ color: 0xc8f542, transparent: true, opacity: 0.22, side: THREE.DoubleSide })
  );
  rocketRing.rotation.x = Math.PI / 2;
  scene.add(rocketRing);

  const rocket = makeRocket();
  scene.add(rocket);
  clickables.push(rocket);
  const shipTag = document.createElement("div");
  shipTag.className = "gxy-plabel";
  shipTag.innerHTML = "<span>ROCKET · About me</span>";
  labelsEl.appendChild(shipTag);

  const projectLabel = (obj: THREE.Object3D, el: HTMLElement) => {
    const v = obj.getWorldPosition(new THREE.Vector3());
    v.project(camera);
    el.style.left = `${(v.x * 0.5 + 0.5) * window.innerWidth}px`;
    el.style.top = `${(-v.y * 0.5 + 0.5) * window.innerHeight}px`;
    el.style.opacity = v.z > 1 || selected ? "0" : "1";
  };

  const reset = () => {
    selected = null;
    targetCam.copy(HOME);
    targetLook.set(0, 0, 0);
  };

  const focusPlanet = (mesh: THREE.Mesh) => {
    selected = mesh;
    const pos = mesh.getWorldPosition(new THREE.Vector3());
    const dir = pos.clone().normalize();
    targetCam.copy(pos.clone().add(dir.multiplyScalar(2.15)).add(new THREE.Vector3(1.1, 0.4, 0.8)));
    targetLook.copy(pos);
    handlers.onPlanet(mesh.userData.world as GalaxyWorld);
  };

  const focusShip = () => {
    selected = rocket;
    const pos = rocket.getWorldPosition(new THREE.Vector3());
    targetCam.copy(pos.clone().add(new THREE.Vector3(1.8, 1.4, 2.4)));
    targetLook.copy(pos);
    handlers.onShip();
  };

  const onMove = (e: PointerEvent) => {
    pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
    if (dragging) {
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      if (Math.abs(dx) + Math.abs(dy) > 4) moved = true;
      yaw -= dx * 0.005;
      pitch = Math.max(-0.4, Math.min(0.45, pitch + dy * 0.003));
      lastX = e.clientX;
      lastY = e.clientY;
    }
  };
  const onDown = (e: PointerEvent) => {
    if ((e.target as HTMLElement).closest(".gxy-box, .gxy-nav, .gxy-legend, .gxy-know")) return;
    dragging = true;
    moved = false;
    lastX = e.clientX;
    lastY = e.clientY;
  };
  const onUp = (e: PointerEvent) => {
    if (!dragging) return;
    dragging = false;
    if (moved || (e.target as HTMLElement).closest(".gxy-box, .gxy-nav, .gxy-legend, .gxy-overlay, .gxy-know")) return;
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObjects(clickables, true);
    if (!hits.length) return;
    let obj: THREE.Object3D | null = hits[0].object;
    while (obj && !obj.userData.kind) obj = obj.parent;
    if (!obj) return;
    if (obj.userData.kind === "planet") focusPlanet(obj as THREE.Mesh);
    if (obj.userData.kind === "ship") focusShip();
  };

  const animate = () => {
    raf = requestAnimationFrame(animate);
    const t = (performance.now() - started) / 1000;
    sunGroup.rotation.y = t * 0.08;
    corona.scale.setScalar(1 + Math.sin(t * 1.8) * 0.04);

    planetMeshes.forEach((mesh) => {
      const w = mesh.userData.world as GalaxyWorld;
      const a = t * w.speed + w.phase;
      mesh.position.set(Math.cos(a) * w.orbit, w.y + Math.sin(t * 0.35 + w.phase) * 0.06, Math.sin(a) * w.orbit);
      mesh.rotation.y += 0.0035;
      mesh.children.forEach((ch) => {
        if (ch.userData.spin) ch.rotation.y += ch.userData.spin;
      });
    });

    const sa = t * 0.16;
    rocket.position.set(Math.cos(sa) * 6.35, 1.55 + Math.sin(t * 0.7) * 0.18, Math.sin(sa) * 6.35);
    const tangent = new THREE.Vector3(-Math.sin(sa), 0.08, Math.cos(sa)).normalize();
    const upright = new THREE.Vector3(tangent.x * 0.42, 1, tangent.z * 0.42).normalize();
    rocket.quaternion.setFromUnitVectors(upY, upright);
    const glow = rocket.userData.glow as THREE.Sprite | undefined;
    if (glow) {
      const pulse = 1 + Math.sin(t * 18) * 0.12;
      glow.scale.set(2.4 * pulse, 3.2 * pulse, 1);
    }
    const flame = rocket.userData.flame as THREE.MeshStandardMaterial | undefined;
    if (flame) flame.emissiveIntensity = 3.2 + Math.sin(t * 22) * 0.7;

    if (!selected) {
      const rad = 14.2;
      targetCam.set(Math.sin(yaw) * rad, 2.4 + pitch * 3.2, Math.cos(yaw) * rad);
      if (targetCam.length() > SYSTEM_RADIUS + 4.2) targetCam.setLength(SYSTEM_RADIUS + 4.2);
      targetLook.set(0, 0, 0);
      yaw += 0.0004;
    }

    camera.position.lerp(targetCam, 0.06);
    look.lerp(targetLook, 0.08);
    camera.lookAt(look);
    labelNodes.forEach((n) => projectLabel(n.mesh, n.el));
    projectLabel(rocket, shipTag);
    renderer.render(scene, camera);
  };
  animate();

  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", onMove);
  window.addEventListener("pointerdown", onDown);
  window.addEventListener("pointerup", onUp);

  return {
    reset,
    focusPlanet: (id) => {
      const mesh = planetMeshes.find((m) => (m.userData.world as GalaxyWorld).id === id);
      if (mesh) focusPlanet(mesh);
    },
    focusShip,
    destroy: () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      labelsEl.replaceChildren();
      renderer.dispose();
    },
  };
}
