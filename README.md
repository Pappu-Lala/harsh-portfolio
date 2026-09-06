# Harsh Yadav - Personal Portfolio

A modern, responsive, developer-focused personal portfolio website built with **React**, **Vite**, and **Tailwind CSS**.

---

## 🚀 Quick Start (Running Locally)

To run and preview your website on your computer:

### 1. Open your terminal in this directory
If you are in VS Code, press `` Ctrl + ` `` to open the integrated terminal.

### 2. Start the development server
Run:
```bash
npm run dev
```
*(On Windows PowerShell, if `npm` gives a script execution policy error, run `npm.cmd run dev`)*

Your browser will automatically open, or you can visit:
👉 **[http://localhost:5173](http://localhost:5173)**

To stop the server at any time, press `Ctrl + C` in the terminal.

---

## 🛠️ Other Useful Commands

- **Build for production:**
  ```bash
  npm run build
  ```
  *(Creates an optimized `dist/` folder ready for hosting on GitHub Pages, Vercel, or Netlify)*

- **Preview the production build:**
  ```bash
  npm run preview
  ```

---

## 📁 Project Structure

```
Harsh-portfolio/
├── index.html                  # HTML entry point, fonts, and meta tags
├── package.json                # Project dependencies and npm scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS theme customization
├── postcss.config.js           # PostCSS setup
├── src/
│   ├── main.jsx                # React app mount
│   ├── App.jsx                 # Page layout assembling all sections
│   ├── index.css               # Tailwind directives and custom ambient styles
│   ├── data/
│   │   └── portfolioData.js    # Central data file (Skills, Projects, Education, Contact)
│   └── components/
│       ├── Navbar.jsx          # Sticky glassmorphism header & mobile navigation
│       ├── Hero.jsx            # Hero section with headline, intro, and code terminal
│       ├── About.jsx           # About me section with education and focus
│       ├── Skills.jsx          # C++, Python, C, Git, GitHub, VS Code cards
│       ├── Projects.jsx        # Smart Aquarium & Home Services Web App cards
│       ├── Certificates.jsx    # Infosys Springboard & HackerRank credentials
│       ├── Education.jsx       # LPU (8.14 CGPA) & Schooling timeline
│       ├── Contact.jsx         # 1-click email copy, direct links, and message form
│       └── Footer.jsx          # Footer with back-to-top button
```

---

## ✏️ How to Update Your Information Later

All content is managed cleanly in one place:
👉 **`src/data/portfolioData.js`**

- **To update Project Links**: Replace the placeholder GitHub URLs with your specific repository or live demo links.
- **To add new certificates or skills**: Just add a new entry to `skillsData` or `certificatesData`.
- **To change contact details**: Update `personalInfo.email`, `personalInfo.linkedin`, or `personalInfo.github`.
