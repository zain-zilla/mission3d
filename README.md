# Mission 3D Studio 🚀

An interactive, web-based 3D asset viewer built with React, TypeScript, and Three.js. This project explores real-time WebGL rendering, custom material injection, and dynamic UI state control directly in the browser.

**Live demo:** [mission3d.vercel.app](https://mission3d.vercel.app)

<!-- Demo GIF goes here -->

## 🛠️ Tech Stack
* **Frontend:** React, TypeScript, Vite
* **3D Engine:** React Three Fiber (R3F), Drei, Three.js
* **UI & State:** Leva (Control panel integration)

## 💡 Key Technical Features
* **Dynamic Material Traversal:** Automatically traverses imported `.glb` scene graphs to inject custom `MeshStandardMaterial` shaders with emissive neon highlights.
* **Declarative Component Architecture:** Built using React Three Fiber to bridge declarative React state with imperative WebGL rendering loops.
* **Optimized UI Layering:** Implements an HTML/CSS overlay using absolute positioning and `pointer-events: none` to keep the underlying `OrbitControls` fully interactive.

## 🚀 Getting Started Locally
1. Clone the repository.
2. Navigate into the project folder: `cd 3d-portfolio`
3. Install dependencies: `npm install`
4. Run the development server: `npm run dev`

---
*Built by Zain Shaz.*
