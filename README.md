# 🌐 Personal Profile Landing Page

A clean, modern personal portfolio website built with **React**, **Tailwind CSS**, and **Vite**.  
Easily customizable for showcasing your skills, projects, and contact info.

![Screenshot](https://github.com/minproducer/personalprofile/assets/preview.jpg)

## 🚀 Demo

[🔗 Live site](https://minproducer.github.io/personalprofile/)

## 🛠️ Features

- ⚡ Fast build with Vite
- 🎨 Styled with Tailwind CSS
- 🌙 Dark mode support
- 🧑‍💼 Profile, skills, and project sections
- 📱 Responsive design for mobile & desktop
- 🔗 Social/contact links

## 📁 Folder Structure

personalprofile/
├── public/
│ └── index.html
├── src/
│ ├── components/ // Reusable UI components
│ ├── assets/ // Images & icons
│ ├── pages/ // Page-level components (Home, Contact, etc.)
│ └── App.tsx
├── package.json
└── vite.config.ts

## 📦 Installation

Clone and install dependencies:

```
git clone https://github.com/minproducer/personalprofile.git
cd personalprofile
npm install
```

▶️ Start the dev server
``` 
npm run dev
```

🔨 Build for production
```
npm run build
```

📤 Deploy to GitHub Pages
Update vite.config.ts with the correct base:
```
ts
base: '/personalprofile/'
```

Install gh-pages:
```
npm install gh-pages --save-dev
```
Add deploy script to package.json:
```
"scripts": {
  "deploy": "gh-pages -d dist"
}
```
Run:
```
npm run build
npm run deploy
```
🧑 Author
Min (a.k.a. minproducer)
📷 Photographer | 🚘 Tour Guide | 💻 Frontend Dev
📍 Based in Hội An – Đà Nẵng, Vietnam
