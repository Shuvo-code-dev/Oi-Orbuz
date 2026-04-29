<div align="center">

<br/>

<!-- ANIMATED HEADER VIA SVG -->
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=13&duration=2000&pause=800&color=7C3AED&center=true&vCenter=true&multiline=true&repeat=true&width=600&height=60&lines=import+%7B+BlurText+%7D+from+%22%40oi-orbuz%2FBlurText-TS-TW%22;%3CBlurText+text%3D%22Ship+faster.%22+delay%3D%7B150%7D+%2F%3E" alt="Typing animation" />

<br/>
<br/>

<picture>
  <source media="(prefers-color-scheme: light)" srcset="src/assets/logos/oi-orbuz-black.svg">
  <source media="(prefers-color-scheme: dark)"  srcset="src/assets/logos/oi-orbuz-white.svg">
  <img src="src/assets/logos/oi-orbuz-black.svg" alt="Oi Orbuz" width="460">
</picture>

<br/>
<br/>

<p><em>The animation library that gets out of your way.</em></p>

<br/>

<!-- SKILL ICONS STYLE BADGES -->
<a href="https://oi-orbuz.vercel.app/get-started/installation">
  <img src="https://img.shields.io/badge/GET_STARTED-%E2%9A%A1-7c3aed?style=for-the-badge&labelColor=0d0b1e&color=7c3aed" />
</a>
&nbsp;
<a href="https://oi-orbuz.vercel.app/">
  <img src="https://img.shields.io/badge/DOCS-%F0%9F%93%96-5b21b6?style=for-the-badge&labelColor=0d0b1e&color=5b21b6" />
</a>
&nbsp;
<a href="https://oi-orbuz.vercel.app/tools">
  <img src="https://img.shields.io/badge/TOOLS-%F0%9F%9B%A0%EF%B8%8F-4c1d95?style=for-the-badge&labelColor=0d0b1e&color=4c1d95" />
</a>

<br/>
<br/>

[![Stars](https://img.shields.io/github/stars/Shuvo-code-dev/Oi-Orbuz?style=flat-square&color=a78bfa&labelColor=0d0b1e&label=★%20stars)](https://github.com/Shuvo-code-dev/Oi-Orbuz/stargazers)
[![License](https://img.shields.io/badge/GPL--3.0-6d28d9?style=flat-square&labelColor=0d0b1e)](LICENSE)
[![Components](https://img.shields.io/badge/110%2B_components-7c3aed?style=flat-square&labelColor=0d0b1e)](https://oi-orbuz.vercel.app/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-a78bfa?style=flat-square&labelColor=0d0b1e)](https://github.com/Shuvo-code-dev/Oi-Orbuz/pulls)
[![Made with React](https://img.shields.io/badge/React-18%2B-61dafb?style=flat-square&labelColor=0d0b1e)](https://react.dev/)

<br/>
<br/>

<img src="src/assets/common/readme-showcase.png" width="960" alt="Oi Orbuz showcase">

</div>

<br/>

---

<br/>

## The problem

```tsx
// ❌ before — every project, every time
const ref = useRef(null);
const [visible, setVisible] = useState(false);
const [animated, setAnimated] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting && !animated) {
      setVisible(true);
      setAnimated(true);
    }
  });
  if (ref.current) observer.observe(ref.current);
  return () => observer.disconnect();
  // ... 40 more lines of keyframe misery
}, [animated]);
```

```tsx
// ✅ with Oi Orbuz — drop it in, move on
import { BlurText } from "@oi-orbuz/BlurText-TS-TW";

<BlurText text="Ship faster." delay={150} />
```

<br/>

---

<br/>

## What's inside

<br/>

> **110+ components** across 4 categories. Every one production-tested, documented, and ready to own.

<br/>

<div align="center">

| | Category | What you get |
|:---:|:---|:---|
| 💬 | **Text Motion** | Blur, split, wave, typewriter, scramble, and 30+ more. Each a drop-in. |
| 🌀 | **Dynamic FX** | Particle fields, magnetic hover, gravity pulls, ripple clicks. Real physics. |
| 🧩 | **Smart UI** | Animated buttons, cards, modals, loaders. Alive out of the box. |
| 🖼️ | **Backgrounds** | Aurora, mesh gradient, noise canvas, grid pulse. Set it and forget it. |

</div>

<br/>

---

<br/>

## Every component ships in 4 variants

<br/>

<div align="center">

```
╔══════════════════════════════════════════════════════════╗
║                                                          ║
║    JS  ──────────────────────────────────  TS            ║
║    │                                        │            ║
║    ├── JS-CSS   ←  plain CSS                │            ║
║    └── JS-TW    ←  tailwind                 │            ║
║                                             ├── TS-CSS   ║
║                                             └── TS-TW    ║
║                                                          ║
║    Pick your stack. Every component. No compromises.     ║
╚══════════════════════════════════════════════════════════╝
```

</div>

<br/>

---

<br/>

## Installation

<br/>

Works with **[shadcn](https://ui.shadcn.com/)** and **[jsrepo](https://jsrepo.dev/)**. One command per component.

```bash
# pick a component, pick a variant
npx shadcn@latest add @oi-orbuz/Antigravity-TS-TW
npx shadcn@latest add @oi-orbuz/BlurText-JS-CSS
npx shadcn@latest add @oi-orbuz/MagneticButton-TS-TW
```

> Prefer copy-paste? Every component has a **Copy Source** button on the [docs](https://oi-orbuz.vercel.app/). No install needed.

<br/>

---

<br/>

## Pro Tools

<br/>

> Stop building one-off solutions. Use ours.

<br/>

<img src="src/assets/common/tools-readme.webp" alt="Oi Orbuz Tools" width="960">

<br/>
<br/>

<div align="center">

| Tool | What it does |
|:---|:---|
| 🎨 **Background Studio** | Visual editor for animated backgrounds. Tweak physics, export as React component or video. |
| ✦ **Shape Magic** | Organic SVG shape generator with inner rounded corners. Drag sliders, copy the path. |
| 🔬 **Texture Lab** | Noise, Dithering, and ASCII filters on any image. Instant aesthetic, zero Figma. |

</div>

<br/>

**[→ Open the tools](https://oi-orbuz.vercel.app/tools)**

<br/>

---

<br/>

## By the numbers

<br/>

<div align="center">

![110+ Components](https://img.shields.io/badge/110%2B-COMPONENTS-7c3aed?style=for-the-badge&labelColor=0d0b1e)
![4 Variants](https://img.shields.io/badge/4×-VARIANTS_EACH-5b21b6?style=for-the-badge&labelColor=0d0b1e)
![3 Pro Tools](https://img.shields.io/badge/3-PRO_TOOLS-4c1d95?style=for-the-badge&labelColor=0d0b1e)
![60fps](https://img.shields.io/badge/60-FPS_SMOOTH-3b0764?style=for-the-badge&labelColor=0d0b1e)

</div>

<br/>

---

<br/>

## Contributing

<br/>

This is open source. The whole thing. If you see something that could be better — it probably can be.

```bash
git clone https://github.com/Shuvo-code-dev/Oi-Orbuz.git
cd Oi-Orbuz && npm install && npm run dev
```

- 🐛 **Bug?** → [Open an issue](https://github.com/Shuvo-code-dev/Oi-Orbuz/issues)
- 💡 **Idea?** → [Start a discussion](https://github.com/Shuvo-code-dev/Oi-Orbuz/issues)
- 🔧 **New component?** → Read `CONTRIBUTING.md`, then open a PR

<br/>

---

<br/>

## People building with it

<br/>

<a href="https://github.com/Shuvo-code-dev/Oi-Orbuz/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Shuvo-code-dev/Oi-Orbuz" />
</a>

<br/>

---

<br/>

## Repo analytics

<br/>

![Analytics](https://repobeats.axiom.co/api/embed/c418eb9e87e7270ff6771656b987cae76bf89029.svg "Repobeats analytics image")

<br/>

---

<br/>

<div align="center">

<picture>
  <source media="(prefers-color-scheme: light)" srcset="src/assets/logos/oi-orbuz-black.svg">
  <source media="(prefers-color-scheme: dark)"  srcset="src/assets/logos/oi-orbuz-white.svg">
  <img src="src/assets/logos/oi-orbuz-black.svg" alt="Oi Orbuz" width="100">
</picture>

<br/>
<br/>

<!-- WAVE FOOTER -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=7c3aed&height=80&section=footer&fontSize=0" width="100%"/>

<br/>

<sub>
  Built by <a href="https://github.com/Shuvo-code-dev">Shuvo</a>
  &nbsp;·&nbsp;
  GPL-3.0
  &nbsp;·&nbsp;
  <a href="https://oi-orbuz.vercel.app/">oi-orbuz.vercel.app</a>
</sub>

<br/>
<br/>

<sub>If this saved you time — <a href="https://github.com/Shuvo-code-dev/Oi-Orbuz">drop a ★</a></sub>

</div>
