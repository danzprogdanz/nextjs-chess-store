# ♟️ Next.js Chess Store

*A premium e-commerce experience for chess enthusiasts*

## � Overview

Next.js Chess Store is a modern, performant e-commerce platform dedicated to chess equipment. Browse beautifully crafted chess pieces, boards, and accessories with a seamless shopping experience built on Next.js and React.

## 🚧 Project Status

This project is currently in active development. Key features are functional but may undergo significant changes. Current development focus includes:

- Enhancing test coverage
- Improving accessibility
- Optimizing performance
- Adding new product categories
- Adding new features

## ✨ Features

- **Modern UI/UX**: Clean, responsive design with elegant typography
- **Interactive Product Showcase**: Product carousels, detailed cards, and filtering
- **Shopping Cart**: Persistent cart functionality with quantity controls
- **Checkout Flow**: Multi-step checkout process (Shipping, Payment, Confirmation)
- **Wishlist**: Save favorite items for later
- **Performance Optimized**: Built with Next.js (Turbopack) for fast page loads
- **State Management**: Redux Toolkit for predictable state
- **Type Safety**: Full TypeScript support
- **Testing**: Comprehensive test suite with Jest and Cypress
- **Responsive Design**: Mobile-first approach with responsive utilities

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 15 (App Router) with Turbopack
- **Styling**: CSS Modules
- **State Management**: Redux Toolkit + Redux Persist
- **Type Checking**: TypeScript 5
- **Testing**: Jest, Testing Library, Cypress E2E
- **Linting**: ESLint
- **Carousel**: Embla Carousel
- **Mocking**: MSW (Mock Service Worker)

## 🏗️ Project Structure

```
nextjs-chess-store/
├── app/               # Next.js app router
│   ├── checkout/      # Checkout process pages
│   ├── products/      # Product listing and detail pages
│   └── ...            # Other app routes
├── components/        # Reusable UI components (atomic design)
│   ├── cart/          # Cart components
│   ├── checkout/      # Checkout components
│   ├── product/       # Product display components
│   ├── ui/            # Base UI components (atoms, molecules, organisms)
│   └── wishlist/      # Wishlist components
├── cypress/           # E2E tests
├── hooks/             # Custom React hooks
├── mocks/             # Mock data
├── services/          # API services (VTEX integration)
├── store/             # Redux store configuration
├── types/             # TypeScript type definitions
├── public/            # Static assets (fonts, images)
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
- `npm run dev`: Starts the development server with Turbopack
- `npm run build`: Creates a production build
- `npm start`: Starts the production server
- `npm run lint`: Runs ESLint
- `npm test`: Runs Jest unit tests
- `npm run test:watch`: Runs Jest in watch mode
- `npm run test:coverage`: Generates test coverage report
- `npm run cy:open`: Opens Cypress test runner
- `npm run cy:run`: Runs Cypress tests headlessly

## 🧩 Component Architecture

The project follows Atomic Design principles:

- **Atoms**: Basic UI elements (Buttons, Icons, Inputs, LoadingSpinner)
- **Molecules**: Simple component groups (QuantitySelector, ProductInfo)
- **Organisms**: Complex UI sections (HeroBanner, ProductDetails, CartSideBar)
- **Templates**: Page layouts
- **Pages**: Complete views

## 📦 State Management

Redux Toolkit powers the application state with:
- Cart slice for managing items
- Wishlist slice for saved items
- Checkout slice for order processing
- Persistence via redux-persist
- Custom hooks (useCart, useWishlist, useCheckout) for easy consumption

## 🎨 Design System

Key design elements:
- Custom chess-themed icons (King, Pawn, Cart, Favorite)
- Responsive layouts with CSS Modules
- Elegant typography with custom Americana Serif font
- Embla Carousel for product showcases
- Mobile-first responsive design

## 🧪 Testing

Comprehensive test coverage including:
- **Unit Tests**: Jest + Testing Library for components
- **Integration Tests**: Component interaction tests
- **E2E Tests**: Cypress for critical user flows
- **Mock API**: MSW for API response mocking

Current test coverage:
- Checkout flow (Cypress)
- UI components (Jest)
- Redux slices (Jest)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Open an issue to discuss proposed changes
2. Fork the repository
3. Create a feature branch
4. Write tests for new functionality
5. Submit a pull request

---

♚ Checkmate your shopping experience with Next.js Chess Store ♛
