# 🚀 Cine Vault - Professional Task Manager

A premium, high-performance Todo application built with **React** and **Tailwind CSS**. This project was designed with a focus on **Separation of Concerns (SoC)** and a "Lux" (Luxury) UI/UX experience.

## 📋 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Architecture (SoC)](#architecture-soc)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)

---

## 🌟 Overview

**Cine Vault** is more than just a list; it's a task management tool that uses modern React patterns to ensure scalability. By separating the business logic into **Custom Hooks** and managing global state via **Context API**, the code remains clean, maintainable, and ready for future backend integration.

## ✨ Key Features

- **Luxury Design:** Modern glassmorphism UI with custom gradients and smooth transitions.
- **Category System:** Tag tasks as _Work_, _Personal_, or _Other_ with dynamic color coding.
- **Smart Progress Bar:** Real-time visual tracking of completed tasks percentage.
- **Global Sync:** Uses Context API to keep the header statistics in sync with the task list.
- **Fully Responsive:** Optimized for both Desktop and Mobile devices.

## 🏗️ Architecture (SoC)

The project is built using the **Separation of Concerns** principle:

1. **Logic Layer:** All state management and functions (`addTask`, `toggleTask`, `deleteTask`) are extracted into a Custom Hook (`useTodos.jsx`).
2. **Presentation Layer:** Components like `Maintodolist.jsx` and `Header.jsx` handle only the UI and Tailwind styling.
3. **Global State:** `CountContext.jsx` manages cross-component data sharing.

## 🛠️ Tech Stack

- **Framework:** [React.js](https://reactjs.org/) (Vite)
- **Styling:** [Tailwind CSS v3](https://tailwindcss.com/)
- **State Management:** Context API & Custom Hooks
- **Icons:** SVG-based modern icons

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
2. Install Dependencies
Bash
npm install
3. Run Development Server
Bash
npm run dev
📂 Folder Structure
Plaintext
src/
├── components/      # UI Components (Header, List, etc.)
├── hooks/           # Custom Hooks (Business Logic)
├── assets/          # Images and static files
├── App.jsx          # Main Entry & Context Provider
└── index.css        # Tailwind directives
👤 Author
Oussema

Frontend Developer

Current Track: Science and Industry Technologies (STI)

This project is part of my journey to becoming a Full-Stack Developer.


### How to use it:
1.  Go to your project folder.
2.  Create a file named `README.md`.
3.  Paste the code above and save it.
4.  When you push to **GitHub**, this will automatically become your "Home Page" for the project.

**Do you want me to explain how to add a real screenshot of your app to this file
```
