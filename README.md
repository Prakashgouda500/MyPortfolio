# Prakash Gouda | Developer

A modern, premium, highly responsive personal developer portfolio website designed by **Prakash Gouda**, a Full Stack Developer and AI Enthusiast. This website is built using **React**, **Three.js (React Three Fiber)**, **Framer Motion**, and **TailwindCSS**.

It features immersive 3D programmatic visual elements (an interactive data network in the hero section and a floating starfield network in the AI section), smooth scrolling, custom glassmorphism panels, and a polished developer-focused dark-mode theme.


---

## ⚡ Key Features
*   **Sleek Dark Modern Aesthetic:** A premium dark design built using curated zinc grays, electric cyan, and deep indigo glow filters.
*   **Programmatic 3D Canvases:**
    *   **Hero Section:** A custom rotating, interactive 3D Holographic Network sphere that scales dynamically on different screen dimensions.
    *   **Building with AI Section:** An animated 3D Starfield Neural Network storm that supports drag-to-orbit controls.
*   **Mobile-First Performance Optimizations:**
    *   WebGL canvases automatically reduce complexity or switch to high-quality flat SVG cards on mobile views and devices that prefer reduced motion.
    *   Optimized asset loading to minimize layout shifts.
*   **Dynamic Data Layering:** All project entries, certifications, experience timelines, and skill lists are separated into independent configuration data files for painless upkeep.
*   **Responsive Timelines & Cards:** Vertical work timeline (Ahana Info Tech Pvt. Ltd.) and expandible interactive project showcases with Hover-Tilt effects.
*   **Optional GitHub Profile Integration:** Integrates dynamically with the GitHub REST API to fetch live repo counts and followers, with robust local fallback.
*   **Secure Contacts & Validations:** Interactive form validation for name, email, and message entries with custom floating alert toasts. Fully configured to support secure environment variables for third-party endpoints (like EmailJS).

---

## 🛠️ Tech Stack
*   **Frontend Library:** React.js (v18)
*   **Styling Engine:** TailwindCSS (JIT mode) & Vanilla CSS
*   **3D Graphics:** Three.js, React Three Fiber (`@react-three/fiber`), React Three Drei (`@react-three/drei`)
*   **Animations:** Framer Motion
*   **Icons & Interactive Elements:** Custom Inline SVGs & React Vertical Timeline

---

## 📦 Getting Started & Installation

### Prerequisites
*   **Node.js:** v16.0.0+
*   **npm:** v9.0.0+

### Installation Steps

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/Prakashgouda500/prakash-portfolio.git
    cd prakash-portfolio
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Setup Environment Variables (Optional):**
    Create a `.env` file in the root directory and add your EmailJS keys if you wish to enable the contact form email deliveries:
    ```env
    VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
    VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
    ```

4.  **Run Development Server:**
    ```bash
    npm run dev
    ```
    Open `http://localhost:5173` in your browser.

5.  **Build for Production:**
    ```bash
    npm run build
    ```

---

## 💡 Accessibility & Motion Support
This portfolio actively honors OS-level user accessibility controls. If a visitor has **prefers-reduced-motion** enabled:
*   The 3D canvases pause rotating.
*   Framer Motion transition durations are minimized.
*   CSS scrolling animations freeze.

---

## 👨‍💻 Author
*   **Name:** Prakash Gouda
*   **Title:** Full Stack Developer | AI Enthusiast
*   **GitHub:** [@Prakashgouda500](https://github.com/Prakashgouda500)
*   **LinkedIn:** [in/prakash-gouda-227347217](https://www.linkedin.com/in/prakash-gouda-227347217)

---

## ⚖️ Credits & License
This project is licensed under the **MIT License**.
*   **Inspiration template:** This portfolio takes design, canvas, and layout structure inspiration from the open-source [Shaqdeff Portfolio Template](https://github.com/shaqdeff/Portfolio-Template).
