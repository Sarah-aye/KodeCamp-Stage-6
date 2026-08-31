# E-Commerce Web App

A responsive e-commerce web application built with React, featuring product browsing, wishlist management, authentication with Firebase, product details, and a persistent shopping cart.

## 👤 Author

## Sarah Malwil

Built as a React e-commerce project to practice component architecture, routing, Firebase authentication, Redux state management, reusable hooks, and responsive UI development.

## ✨ Features

- 🛍️ Browse and view products
- ❤️ Add and manage wishlist items
- 🛒 Add products to the cart
- ➕➖ Increase and decrease cart quantities
- 🗑️ Remove products from the cart
- 💾 Persist cart data across page reloads
- 📦 View product details using dynamic routes
- 🔐 User registration and login with Firebase Authentication
- 🛡️ Protected routes for authenticated users
- 🔄 Reusable cart functionality through a custom `useCart` hook
- 🎛️ Render-prop `ToggleComponent` for reusable UI state
- 🚫 Custom 404 page for invalid routes
- 📱 Responsive design for different screen sizes

## 🛠️ Tech Stack

- **React** — UI development
- **React Router DOM** — Routing and navigation
- **Redux Toolkit** — Global cart state management
- **React Redux** — Connecting Redux to React
- **Firebase Authentication** — User signup and login
- **Tailwind CSS** — Styling and responsive design
- **Vite** — Development server and build tool
- **JavaScript (JSX)** — Application logic

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate into the project:

```bash
cd <project-folder>
```

Install dependencies:

```bash
npm install
```

### Firebase Configuration

Create a Firebase project and enable **Email/Password Authentication**.

Create a `.env` file in the root of the project and add your Firebase configuration:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

Make sure `.env` is included in `.gitignore` and is not committed to the repository.

### Start the Development Server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## 📖 Usage

1. Create an account using the signup page.
2. Log in using your registered credentials.
3. Browse the available products.
4. Add products to your wishlist or cart.
5. Open the cart to view and manage added products.
6. Increase or decrease product quantities.
7. Remove products from the cart when needed.
8. Select a product to view its details.
9. Log out when finished.
10. Invalid URLs automatically display the 404 page.

## 📦 Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
