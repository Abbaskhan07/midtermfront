# Daily Cup — Coffee Shop Website

[![Group: IT-2501](https://img.shields.io/badge/Group-IT--2501-blue.svg)](#team-and-contributions)
[![HTML5](https://img.shields.io/badge/HTML5-Semantic-orange.svg)](#technologies-used)
[![CSS3](https://img.shields.io/badge/CSS3-Flexbox%20%7C%20Grid-blue.svg)](#technologies-used)
[![Bootstrap 5](https://img.shields.io/badge/Bootstrap-5.3.8-purple.svg)](#technologies-used)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow.svg)](#technologies-used)

**Website:** [https://arabdrakh.github.io/midtermfront/](https://arabdrakh.github.io/midtermfront/)  
**Topic:** Coffee Shop Website — Daily Cup  
**Course:** Web Technologies (Midterm Project)  
**Group:** IT-2501  
**Team:** Nikita Zuy, Aruzhan Abdrakhmanova, Abbaskhan Ibraimov  

---

## ☕ Description

**Daily Cup** is a modern, responsive website for a fictional specialty coffee shop in Astana, Kazakhstan. Visitors can learn about the shop's history and philosophy, explore a detailed menu with transparent pricing, view a curated photo gallery, and interact with a client-side contact form.

---

## 👥 Team and Contributions

The project was completed collaboratively by three students. Each team member was responsible for specific pages, architectural components, and technical requirements:

| Member | GitHub Username | Email | Key Contributions |
| :--- | :--- | :--- | :--- |
| **Aruzhan Abdrakhmanova** | [`arabdrakh`](https://github.com/arabdrakh) | `nurasyloran@gmail.com` | • Developed **Menu** (`menu.html`) and **Gallery** (`gallery.html`) pages.<br>• Designed the pricing table with alternating row colors using `:nth-child(even)`.<br>• Implemented responsive CSS Grid layout for the photo gallery.<br>• Curated imagery and authored comprehensive project documentation (`README.md`). |
| **Abbaskhan Ibraimov** | [`Abbaskhan07`](https://github.com/Abbaskhan07) | `255007@astanait.edu.kz` | • Developed **Contact** page (`contact.html`) and interactive form validation.<br>• Integrated Bootstrap 5.3.8 grid system, spacing utilities, and responsive breakpoints.<br>• Authored JavaScript form handler (`js/script.js`) with input validation feedback.<br>• Configured mobile-first media queries (`576px`, `992px`) and deployment setup. |
| **Nikita Zuy** | [`V01demort`](https://github.com/V01demort) | `251265@astanait.edu.kz` | • Developed **Home** (`index.html`) and **About** (`about.html`) pages.<br>• Built shared layout architecture: text logo, semantic header, footer, and Flexbox navigation.<br>• Configured locally hosted custom font (`Lato` via `@font-face`) and CSS variables.<br>• Implemented accessible focus/hover states and semantic HTML5 hierarchy. |

All members participated in testing, code review, and preparation for the individual oral defense and live coding task.

---

## ✨ Features

- **Five Connected Pages:** Home, About, Menu, Gallery, and Contact.
- **Shared Navigation & Layout:** Standardized `<header>` with text logo and Flexbox navigation bar; consistent `<footer>` with contact details, student project notice, and social links.
- **Active Page Highlighting:** Accessible navigation state using `aria-current="page"`.
- **Semantic HTML5:** Proper use of `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<figcaption>`, `<table>`, `<form>`, and `<footer>`.
- **Menu Table:** Semantic `<table>` with `<caption>`, `<thead>`, `<tbody>`, `<th>`, and `<td>`, styled with alternating row background colors (`:nth-child(even)`).
- **Responsive Photo Gallery:** CSS Grid layout displaying coffee and cafe photographs with captions.
- **Interactive Contact Form:** Built with HTML5 required fields, email format validation, and client-side JavaScript status feedback (`event.preventDefault()`).
- **Bootstrap 5 Integration:** Utilizes Bootstrap 5.3.8 grid containers (`container`, `row`, `col-*`) and helper utilities (`g-4`, `text-center`, `mb-*`).
- **Responsive Mobile-First Design:** Fluid adaptation across mobile (`< 576px`), tablet (`≥ 576px`), and desktop (`≥ 992px`) viewports.
- **CSS Custom Properties (Variables):** Standardized color palette defined in `:root` (`--brown`, `--cream`, `--text`, `--light`).
- **Local Assets & Performance:** Custom `Lato` font and all photographs are hosted locally; secondary images use `loading="lazy"` and `object-fit: cover`.

---

## 🛠️ Technologies

- **HTML5:** Semantic document structure and accessible forms.
- **CSS3:** Custom styles, Flexbox layout, CSS Grid, `@font-face`, CSS variables, media queries.
- **Bootstrap 5.3.8:** Responsive layout and grid classes (included locally in `css/bootstrap.min.css`).
- **JavaScript (ES6):** Client-side form submission handler (in `js/script.js`).
- **Lato Font:** SIL Open Font License typography (in `fonts/Lato-Regular.ttf`).

---

## 📁 Project Structure

```text
midtermfront/
├── css/
│   ├── bootstrap.min.css      # Bootstrap 5.3.8 stylesheet
│   └── style.css              # Custom styling, CSS variables & media queries
├── fonts/
│   └── Lato-Regular.ttf       # Locally hosted Lato font
├── images/
│   ├── cafe.jpg               # Coffee shop interior
│   ├── coffee.jpg             # Latte art photo
│   └── pastries.jpg           # Fresh croissants photo
├── js/
│   └── script.js              # Client-side form validation handler
├── licenses/
│   ├── bootstrap-LICENSE.txt  # Bootstrap MIT license
│   └── Lato-OFL.txt           # SIL Open Font License
├── about.html                 # About Us page
├── contact.html               # Contact & Form page
├── gallery.html               # Photo gallery page
├── index.html                 # Homepage (Root entry point)
├── menu.html                  # Menu & pricing page
└── README.md                  # Comprehensive project documentation
```

---

## 🚀 How to Run Locally

No package managers or build tools are required. The project runs directly in the browser:

1. Clone or download the repository:
   ```bash
   git clone https://github.com/arabdrakh/midtermfront.git
   ```
2. Navigate to the project directory:
   ```bash
   cd midtermfront
   ```
3. Open `index.html` in your web browser:
   - On Windows: double-click `index.html` or run `start index.html` in PowerShell.
   - Alternatively, open the folder in **VS Code** and use the **Live Server** extension.

---

## 🌐 GitHub Pages Deployment

The website is ready for GitHub Pages hosting:
1. Ensure all files (`index.html`, etc.) are located in the repository root.
2. In the GitHub repository, open **Settings** → **Pages**.
3. Under **Build and deployment**, select **Source:** `Deploy from a branch`.
4. Choose the `main` branch and `/(root)` directory, then click **Save**.
5. Once published, the website will be available at:  
   `https://arabdrakh.github.io/midtermfront/`

---

## 📚 Criteria & Defense Guide

| Criterion | Implementation & Location |
| :--- | :--- |
| **5 connected pages** | `index.html`, `about.html`, `menu.html`, `gallery.html`, `contact.html` |
| **Consistent navigation & logo** | Shared `<header>` with `.logo` ("Daily Cup.") and `<nav>` on every page |
| **Flexbox layout** | `.header-content` and `<nav>` in `css/style.css` |
| **CSS Grid layout** | `.gallery` in `css/style.css` (`grid-template-columns`, `gap`) |
| **CSS Variables** | `:root` defines `--brown`, `--cream`, `--text`, `--light` |
| **Table with styling** | `menu.html` contains `table`, `caption`, `thead`, `tbody`; `:nth-child(even)` in `css/style.css` |
| **Form with validation** | `contact.html` has `input[type="email"]`, `required` attributes, and `js/script.js` |
| **Positioning** | `.hero-photo` has `position: relative`, `.photo-label` has `position: absolute` |
| **Hover & focus states** | `a:hover`, `a:focus`, `button:focus`, `.btn-coffee:hover` in `css/style.css` |
| **Media queries** | `@media (min-width: 576px)` and `@media (min-width: 992px)` |
| **Bootstrap grid & utilities** | `container`, `row`, `col-lg-6`, `col-md-4`, `g-4`, `text-center`, `fw-bold` |
| **Custom typography** | Locally hosted `Lato-Regular.ttf` loaded via `@font-face` |
| **Performance** | Secondary images have `loading="lazy"` and `object-fit: cover` |

---

## ☕ Demo Details

Daily Cup is a student project. The cafe, menu prices, opening hours, and email address are fictional examples. The contact form validates input locally and does not transmit data over the network. External social media links point to Instagram and Facebook main pages.

---

## 📜 Licenses and Attribution

- **Bootstrap 5.3.8:** Licensed under the [MIT License](licenses/bootstrap-LICENSE.txt).
- **Lato Font:** Licensed under the [SIL Open Font License 1.1](licenses/Lato-OFL.txt).
- **Stock Photography:** Sourced from [Unsplash](https://unsplash.com/license):
  - [Coffee with latte art](https://images.unsplash.com/photo-1509042239860-f550ce710b93)
  - [Cafe interior](https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb)
  - [Fresh pastries](https://images.unsplash.com/photo-1555507036-ab1f4038808a)
