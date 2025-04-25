# ♟️ Next.js Chess Store

*A premium e-commerce experience for chess enthusiasts*

## 🏁 Overview

Next.js Chess Store is a modern, performant e-commerce platform dedicated to chess equipment. Browse beautifully crafted chess pieces, boards, and accessories with a seamless shopping experience built on Next.js and React.

## ✨ Features

- **Modern UI/UX**: Clean, responsive design with elegant typography
- **Interactive Product Showcase**: Product carousels and detailed cards
- **Shopping Cart**: Persistent cart functionality with quantity controls
- **Wishlist**: Save favorite items for later
- **Performance Optimized**: Built with Next.js for fast page loads
- **State Management**: Redux Toolkit for predictable state
- **Type Safety**: Full TypeScript support

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: CSS Modules
- **State Management**: Redux Toolkit + Redux Persist
- **Type Checking**: TypeScript
- **Linting**: ESLint
- **Testing**: (Coming soon)

## 🏗️ Project Structure

```
nextjs-chess-store/
├── app/               # Next.js app router
├── components/        # Reusable UI components (atomic design)
├── hooks/             # Custom React hooks
├── mocks/             # Mock data
├── services/          # API services
├── store/             # Redux store configuration
├── types/             # TypeScript type definitions
├── public/            # Static assets
└── utils/             # Utility functions
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm (v9+ recommended)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/danzprogdanz/nextjs-chess-store.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

### Available Scripts
- `npm run dev`: Starts the development server
- `npm run build`: Creates a production build
- `npm start`: Starts the production server
- `npm run lint`: Runs ESLint

## 🧩 Component Architecture

The project follows Atomic Design principles:

- **Atoms**: Basic UI elements (Buttons, Icons, Inputs)
- **Molecules**: Simple component groups
- **Organisms**: Complex UI sections (HeroBanner)
- **Templates**: Page layouts
- **Pages**: Complete views

## 📦 State Management

Redux Toolkit powers the shopping cart and wishlist functionality with:
- Cart slice for managing items
- Persistence via redux-persist
- Custom hooks (useCart) for easy consumption

## 🎨 Design System

Key design elements:
- Custom chess-themed icons (King, Pawn, etc.)
- Responsive layouts with CSS Modules
- Elegant typography with custom font (Americana Serif)

## 🤝 Contributing

Contributions are welcome! Please open an issue first to discuss proposed changes.

---

♚ Checkmate your shopping experience with Next.js Chess Store ♛
