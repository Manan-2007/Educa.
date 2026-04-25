# 🎓 Educa — Online Learning Platform

<div align="center">

![Educa Banner](https://img.shields.io/badge/Educa-Online%20Learning%20Platform-8e44ad?style=for-the-badge)

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Font Awesome](https://img.shields.io/badge/Font%20Awesome-528DD7?style=flat-square&logo=fontawesome&logoColor=white)](https://fontawesome.com/)

> *A modern, responsive e-learning platform to discover, watch, and learn from expert-led video courses.*

</div>

---

## 📸 Overview

**Educa** is a fully responsive front-end web application for an online education platform. It features a clean, purple-accented UI with dark mode support, a collapsible sidebar, and a complete set of pages covering everything from course browsing to user profiles.

---

## ✨ Features

- 🌙 **Dark / Light Mode** — Toggle between themes; preference is saved to `localStorage`
- 📱 **Fully Responsive** — Optimized for desktop, tablet, and mobile screens
- 🔍 **Search Bar** — Slide-in search form accessible from any page
- 👤 **User Profile Dropdown** — Quick access to profile info from the header
- 🗂️ **Sidebar Navigation** — Smooth slide-in sidebar with close button on mobile
- 🎬 **Video Player** — Native HTML5 video with poster image support
- 💜 **Like System UI** — Like button integrated into the video watch page
- 📋 **Playlist Management** — Save & browse video playlists
- ⭐ **Student Reviews** — Star-rated testimonials section on the About page
- 📬 **Contact Form** — Get-in-touch form with phone, email & address info

---

## 🗂️ Project Structure

```
educa/
│
├── 📄 home.html          # Dashboard with quick options & featured courses
├── 📄 about.html         # About page with stats & student reviews
├── 📄 courses.html       # Full course catalogue
├── 📄 playlist.html      # Playlist detail & video list
├── 📄 watch-video.html   # Video player page with likes & description
├── 📄 profile.html       # Student profile with saved/liked/commented stats
├── 📄 login.html         # Login form
├── 📄 register.html      # Registration form
├── 📄 contact.html       # Contact form & info
│
├── 🎨 css/
│   └── style.css         # All styles (responsive, dark mode, components)
│
├── ⚙️ js/
│   └── script.js         # Dark mode, sidebar, search & scroll interactions
│
└── 🖼️ images/            # Thumbnails, avatars, SVGs & video assets
```

---

## 🚀 Getting Started

No build tools or dependencies required — just open and go!

```bash
# 1. Clone the repository
git clone https://github.com/your-username/educa.git

# 2. Navigate into the project
cd educa

# 3. Open in your browser
open home.html
```

> Or simply drag `home.html` into any modern browser.

---

## 📄 Pages at a Glance

| Page | Description |
|------|-------------|
| `home.html` | Landing dashboard with quick links, categories & course highlights |
| `courses.html` | Browse the full catalogue of 9+ courses |
| `playlist.html` | View playlist details and individual video thumbnails |
| `watch-video.html` | Watch a lesson with likes, tutor info & description |
| `about.html` | Platform stats (+10k courses, +40k students) & reviews |
| `profile.html` | Personal dashboard: saved playlists, liked videos, comments |
| `login.html` | Secure login form |
| `register.html` | New user registration |
| `contact.html` | Reach out via form, phone, email or address |

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--main-color` | `#8e44ad` | Buttons, icons, accents |
| `--orange` | `#f39c12` | Option buttons, star ratings |
| `--red` | `#e74c3c` | Delete actions, close button |
| `--black` | `#2c3e50` | Headings, body text |
| `--light-color` | `#888` | Muted / secondary text |
| `--light-bg` | `#eee` | Card backgrounds, inputs |

**Font:** [Nunito](https://fonts.google.com/specimen/Nunito) (weights 200–700) via Google Fonts  
**Icons:** [Font Awesome 6](https://fontawesome.com/)

---

## 📱 Responsive Breakpoints

| Breakpoint | Behaviour |
|---|---|
| `> 1200px` | Sidebar always visible, full layout |
| `≤ 1200px` | Sidebar hidden by default, toggled via hamburger |
| `≤ 991px` | Font size scaled down to 55% |
| `≤ 768px` | Search bar collapses behind icon |
| `≤ 450px` | Single-column grid, stacked buttons |

---

## ⚙️ JavaScript Functionality

All interactivity lives in `js/script.js`:

- **Dark Mode** — Toggles `.dark` on `<body>` and flips sun/moon icon; state persisted in `localStorage`
- **Sidebar** — Opens/closes via `#menu-btn` and `#close-btn`; auto-closes on scroll at `< 1200px`
- **Profile Dropdown** — Toggled by `#user-btn`; closes when search opens (and vice versa)
- **Search Form** — Toggled by `#search-btn`; closes when profile opens
- **Scroll Listener** — Hides all dropdowns on page scroll

---

## 📊 Platform Stats (Demo Data)

| Metric | Value |
|--------|-------|
| 🎓 Online Courses | 10,000+ |
| 🧑‍🎓 Students | 40,000+ |
| 🧑‍🏫 Expert Tutors | 2,000+ |
| 💼 Job Placement | 100% |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📃 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

Made with ❤️ by **Manan Kochhar, Shrishti Jain, Bhavika Bakshi**  
Copyright &copy; 2026 **Educa.** | All rights reserved

</div>

</div>
