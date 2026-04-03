<br />
<div align="center">
  <h1 align="center">IdeaGen</h1>
  <p align="center">
    <strong>The ultimate catalyst to break you out of tutorial hell.</strong>
    <br />
    <br />
    <a href="#features">Features</a>
    ·
    <a href="#installation">Installation</a>
    ·
    <a href="#usage">Usage</a>
    ·
    <a href="#contributing">Contributing</a>
  </p>
</div>

<hr />

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=flat&logo=vite&logoColor=FFD62E)
![CSS](https://img.shields.io/badge/Vanilla_CSS-1572B6?style=flat&logo=css3&logoColor=white)

## ✨ About IdeaGen

**IdeaGen** is a gorgeously designed, Apple-inspired web application that generates 10-step, highly-detailed engineering roadmaps to help developers actually build things. Instead of staring at an empty editor wondering what to code, users can input their interests, time limits, and experience levels to instantly receive an actionable project blueprint.

Backed by an enormous array of over **600 procedural project permutations**, IdeaGen eliminates "blank canvas syndrome" once and for all.

### 🎨 Apple-Inspired Aesthetic
IdeaGen was built from the ground up without heavy component libraries. It leverages pure Vanilla CSS to deliver:
- System typography (`SF Pro`, `-apple-system`)
- Silky smooth, spring-like non-linear animations
- Glassmorphism overlays and soft, layered drop-shadows

## 🚀 Features

- **Massive Idea Engine:** Over 625 highly-detailed unique project outcomes.
- **Dynamic 10-Step Roadmaps:** Every generated project comes with a detailed, 10-part checklist bridging everything from initial diagramming to final deployment.
- **Expandable Implementation Hints:** Stuck on a step? Expand real-time hints to guide you through without spoiling the complete solution.
- **25 Specialized Tech Domains:** Whether you are doing Web Crypto, Quantum Computing, iOS ARKit, or Kubernetes orchestration, IdeaGen knows what you should build.
- **Blazing Fast:** Powered by Vite + React for near-instant rendering.

## 💻 Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Vanilla CSS (CSS Variables, Flexbox/Grid, Backdrop-filters)
- **Data:** Node.js procedural dataset generator

## 📦 Installation

To run IdeaGen locally and generate your own projects, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/ideagen.git
   cd ideagen
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` to see the application running.

## 🛠 Usage & Data Generation

The project dataset is dynamically generated to keep the repository tiny and manageable. 

If you want to modify the domains, times, or project generation logic:
1. Open up `generate_projects.cjs`.
2. Edit the arrays (e.g. `domains`, `techPools`, or `actions`).
3. Run the generator script in your terminal to overwrite `src/data/projects.js` with your fresh ideas:
   ```bash
   node generate_projects.cjs
   ```
4. Vite will hot-reload your new dataset instantly!

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---
<div align="center">
  <sub>Built with ❤️ by passionate developers.</sub>
</div>
