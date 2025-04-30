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
```
nextjs-chess-store
├─ .swc
│  └─ plugins
│     └─ v7_windows_x86_64_9.0.0
├─ cypress
│  └─ e2e
│     ├─ cart.cy.js
│     ├─ checkout.cy.js
│     ├─ product.cy.js
│     └─ wishlist.cy.js
├─ cypress.config.ts
├─ eslint.config.mjs
├─ jest.config.mjs
├─ jest.setup.mjs
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ public
│  ├─ file.svg
│  ├─ fonts
│  │  └─ americana-serif-regular.woff2
│  ├─ globe.svg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ src
│  ├─ app
│  │  ├─ checkout
│  │  │  ├─ checkout.module.css
│  │  │  └─ page.tsx
│  │  ├─ fonts.ts
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  └─ products
│  │     ├─ page.tsx
│  │     ├─ productsPage.module.css
│  │     └─ [slug]
│  │        ├─ page.tsx
│  │        └─ productPage.module.css
│  ├─ components
│  │  ├─ cart
│  │  │  ├─ AddToCartButton
│  │  │  │  ├─ AddToCartButton.module.css
│  │  │  │  └─ AddToCartButton.tsx
│  │  │  ├─ CartItem
│  │  │  │  ├─ CartItem.module.css
│  │  │  │  ├─ CartItem.tsx
│  │  │  │  └─ QuantitySelector
│  │  │  │     ├─ QuantitySelector.module.css
│  │  │  │     └─ QuantitySelector.tsx
│  │  │  └─ CartSideBar
│  │  │     ├─ CartSideBar.module.css
│  │  │     └─ CartSideBar.tsx
│  │  ├─ checkout
│  │  │  ├─ CheckoutContainer
│  │  │  │  ├─ CheckoutContainer.module.css
│  │  │  │  └─ CheckoutContainer.tsx
│  │  │  ├─ CheckoutProgress
│  │  │  │  ├─ CheckoutProgress.module.css
│  │  │  │  └─ CheckoutProgress.tsx
│  │  │  ├─ OrderSummary
│  │  │  │  ├─ OrderSummary.module.css
│  │  │  │  └─ OrderSummary.tsx
│  │  │  └─ Steps
│  │  │     ├─ ConfirmationStep
│  │  │     │  ├─ ConfirmationStep.module.css
│  │  │     │  └─ ConfirmationStep.tsx
│  │  │     ├─ PaymentStep
│  │  │     │  ├─ PaymentStep.module.css
│  │  │     │  └─ PaymentStep.tsx
│  │  │     └─ ShippingStep
│  │  │        ├─ ShippingStep.module.css
│  │  │        └─ ShippingStep.tsx
│  │  ├─ product
│  │  │  ├─ MobileFilter
│  │  │  │  ├─ MobileFilter.module.css
│  │  │  │  └─ MobileFilter.tsx
│  │  │  ├─ ProductCard
│  │  │  │  ├─ ProductCard.module.css
│  │  │  │  └─ ProductCard.tsx
│  │  │  ├─ ProductCarousel
│  │  │  │  ├─ CarouselButtons.module.css
│  │  │  │  ├─ EmblaCarouselArrowButtons.tsx
│  │  │  │  ├─ EmblaCarouselDotButton.tsx
│  │  │  │  ├─ ProductCarousel.module.css
│  │  │  │  └─ ProductCarousel.tsx
│  │  │  ├─ ProductDetails
│  │  │  │  ├─ MobileActions.module.css
│  │  │  │  ├─ MobileActions.tsx
│  │  │  │  ├─ ProductDetails.module.css
│  │  │  │  ├─ ProductDetails.tsx
│  │  │  │  ├─ ProductGallery.module.css
│  │  │  │  ├─ ProductGallery.tsx
│  │  │  │  ├─ ProductInfo
│  │  │  │  │  ├─ ProductInfo.module.css
│  │  │  │  │  └─ ProductInfo.tsx
│  │  │  │  └─ ProductSpecs
│  │  │  │     ├─ ProductSpecs.module.css
│  │  │  │     └─ ProductSpecs.tsx
│  │  │  ├─ ProductFilters
│  │  │  │  ├─ ProductFilters.module.css
│  │  │  │  └─ ProductFilters.tsx
│  │  │  └─ ProductGrid
│  │  │     ├─ ProductGrid.module.css
│  │  │     └─ ProductGrid.tsx
│  │  ├─ ui
│  │  │  ├─ atoms
│  │  │  │  ├─ Button
│  │  │  │  │  ├─ Button.module.css
│  │  │  │  │  └─ Button.tsx
│  │  │  │  ├─ Icon
│  │  │  │  │  ├─ CartIcon.tsx
│  │  │  │  │  ├─ CloseIcon.tsx
│  │  │  │  │  ├─ FavoriteIcon.tsx
│  │  │  │  │  └─ KingIcon.tsx
│  │  │  │  ├─ IconButton
│  │  │  │  │  ├─ IconButton.module.css
│  │  │  │  │  └─ IconButton.tsx
│  │  │  │  ├─ Input
│  │  │  │  │  ├─ Input.module.css
│  │  │  │  │  └─ Input.tsx
│  │  │  │  ├─ Loading
│  │  │  │  │  ├─ LoadingSpinner.module.css
│  │  │  │  │  └─ LoadingSpinner.tsx
│  │  │  │  ├─ NotificationCount
│  │  │  │  │  ├─ NotificationCount.module.css
│  │  │  │  │  └─ NotificationCount.tsx
│  │  │  │  └─ Overlay
│  │  │  │     ├─ Overlay.module.css
│  │  │  │     └─ Overlay.tsx
│  │  │  ├─ layout
│  │  │  │  ├─ Footer
│  │  │  │  │  ├─ Footer.module.css
│  │  │  │  │  └─ Footer.tsx
│  │  │  │  ├─ Navbar
│  │  │  │  │  ├─ Navbar.module.css
│  │  │  │  │  └─ Navbar.tsx
│  │  │  │  └─ PageLayout.module.css
│  │  │  ├─ molecules
│  │  │  └─ organism
│  │  │     └─ HeroBanner
│  │  │        ├─ HeroBanner.module.css
│  │  │        └─ HeroBanner.tsx
│  │  ├─ wishlist
│  │  │  ├─ AddToWishlistButton
│  │  │  │  └─ AddToWishlistButton.tsx
│  │  │  ├─ WishlistItem
│  │  │  │  ├─ WishlistItem.module.css
│  │  │  │  └─ WishlistItem.tsx
│  │  │  └─ WishlistSiderBar
│  │  │     ├─ WishlistSideBar.module.css
│  │  │     └─ WishlistSideBar.tsx
│  │  └─ __tests__
│  │     ├─ integration
│  │     │  ├─ AddToCartButton.test.tsx
│  │     │  └─ Button.test.tsx
│  │     └─ unit
│  │        ├─ AddToCartButton.test.tsx
│  │        └─ Button.test.tsx
│  ├─ global.d.ts
│  ├─ hooks
│  │  ├─ useCart.ts
│  │  ├─ useCheckout.tsx
│  │  └─ useWishlist.ts
│  ├─ mocks
│  │  └─ productMock.ts
│  ├─ services
│  │  └─ vtex
│  │     ├─ api-client.ts
│  │     └─ catalog.service.ts
│  ├─ store
│  │  ├─ provider.tsx
│  │  ├─ slices
│  │  │  ├─ cartSlice.ts
│  │  │  ├─ checkoutSlice.ts
│  │  │  └─ wishlistSlice.ts
│  │  ├─ storage.ts
│  │  └─ store.ts
│  ├─ styles
│  ├─ tests
│  │  └─ tests.ts
│  ├─ types
│  │  ├─ product.type.ts
│  │  └─ vtex
│  │     ├─ catalog.type.ts
│  │     └─ common.type.ts
│  └─ utils
│     └─ reponsiveMedia.css
└─ tsconfig.json

```
```
nextjs-chess-store
├─ .swc
│  └─ plugins
│     └─ v7_windows_x86_64_9.0.0
├─ cypress
│  ├─ e2e
│  │  ├─ cart.cy.js
│  │  ├─ checkout.cy.js
│  │  ├─ product.cy.js
│  │  └─ wishlist.cy.js
│  └─ support
│     └─ e2e.ts
├─ cypress.config.ts
├─ eslint.config.mjs
├─ jest.config.mjs
├─ jest.setup.mjs
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ public
│  ├─ file.svg
│  ├─ fonts
│  │  └─ americana-serif-regular.woff2
│  ├─ globe.svg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ src
│  ├─ app
│  │  ├─ checkout
│  │  │  ├─ checkout.module.css
│  │  │  └─ page.tsx
│  │  ├─ fonts.ts
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  └─ products
│  │     ├─ page.tsx
│  │     ├─ productsPage.module.css
│  │     └─ [slug]
│  │        ├─ page.tsx
│  │        └─ productPage.module.css
│  ├─ components
│  │  ├─ cart
│  │  │  ├─ AddToCartButton
│  │  │  │  ├─ AddToCartButton.module.css
│  │  │  │  └─ AddToCartButton.tsx
│  │  │  ├─ CartItem
│  │  │  │  ├─ CartItem.module.css
│  │  │  │  ├─ CartItem.tsx
│  │  │  │  └─ QuantitySelector
│  │  │  │     ├─ QuantitySelector.module.css
│  │  │  │     └─ QuantitySelector.tsx
│  │  │  └─ CartSideBar
│  │  │     ├─ CartSideBar.module.css
│  │  │     └─ CartSideBar.tsx
│  │  ├─ checkout
│  │  │  ├─ CheckoutContainer
│  │  │  │  ├─ CheckoutContainer.module.css
│  │  │  │  └─ CheckoutContainer.tsx
│  │  │  ├─ CheckoutProgress
│  │  │  │  ├─ CheckoutProgress.module.css
│  │  │  │  └─ CheckoutProgress.tsx
│  │  │  ├─ OrderSummary
│  │  │  │  ├─ OrderSummary.module.css
│  │  │  │  └─ OrderSummary.tsx
│  │  │  └─ Steps
│  │  │     ├─ ConfirmationStep
│  │  │     │  ├─ ConfirmationStep.module.css
│  │  │     │  └─ ConfirmationStep.tsx
│  │  │     ├─ PaymentStep
│  │  │     │  ├─ PaymentStep.module.css
│  │  │     │  └─ PaymentStep.tsx
│  │  │     └─ ShippingStep
│  │  │        ├─ ShippingStep.module.css
│  │  │        └─ ShippingStep.tsx
│  │  ├─ product
│  │  │  ├─ MobileFilter
│  │  │  │  ├─ MobileFilter.module.css
│  │  │  │  └─ MobileFilter.tsx
│  │  │  ├─ ProductCard
│  │  │  │  ├─ ProductCard.module.css
│  │  │  │  └─ ProductCard.tsx
│  │  │  ├─ ProductCarousel
│  │  │  │  ├─ CarouselButtons.module.css
│  │  │  │  ├─ EmblaCarouselArrowButtons.tsx
│  │  │  │  ├─ EmblaCarouselDotButton.tsx
│  │  │  │  ├─ ProductCarousel.module.css
│  │  │  │  └─ ProductCarousel.tsx
│  │  │  ├─ ProductDetails
│  │  │  │  ├─ MobileActions.module.css
│  │  │  │  ├─ MobileActions.tsx
│  │  │  │  ├─ ProductDetails.module.css
│  │  │  │  ├─ ProductDetails.tsx
│  │  │  │  ├─ ProductGallery.module.css
│  │  │  │  ├─ ProductGallery.tsx
│  │  │  │  ├─ ProductInfo
│  │  │  │  │  ├─ ProductInfo.module.css
│  │  │  │  │  └─ ProductInfo.tsx
│  │  │  │  └─ ProductSpecs
│  │  │  │     ├─ ProductSpecs.module.css
│  │  │  │     └─ ProductSpecs.tsx
│  │  │  ├─ ProductFilters
│  │  │  │  ├─ ProductFilters.module.css
│  │  │  │  └─ ProductFilters.tsx
│  │  │  └─ ProductGrid
│  │  │     ├─ ProductGrid.module.css
│  │  │     └─ ProductGrid.tsx
│  │  ├─ ui
│  │  │  ├─ atoms
│  │  │  │  ├─ Button
│  │  │  │  │  ├─ Button.module.css
│  │  │  │  │  └─ Button.tsx
│  │  │  │  ├─ Icon
│  │  │  │  │  ├─ CartIcon.tsx
│  │  │  │  │  ├─ CloseIcon.tsx
│  │  │  │  │  ├─ FavoriteIcon.tsx
│  │  │  │  │  └─ KingIcon.tsx
│  │  │  │  ├─ IconButton
│  │  │  │  │  ├─ IconButton.module.css
│  │  │  │  │  └─ IconButton.tsx
│  │  │  │  ├─ Input
│  │  │  │  │  ├─ Input.module.css
│  │  │  │  │  └─ Input.tsx
│  │  │  │  ├─ Loading
│  │  │  │  │  ├─ LoadingSpinner.module.css
│  │  │  │  │  └─ LoadingSpinner.tsx
│  │  │  │  ├─ NotificationCount
│  │  │  │  │  ├─ NotificationCount.module.css
│  │  │  │  │  └─ NotificationCount.tsx
│  │  │  │  └─ Overlay
│  │  │  │     ├─ Overlay.module.css
│  │  │  │     └─ Overlay.tsx
│  │  │  ├─ layout
│  │  │  │  ├─ Footer
│  │  │  │  │  ├─ Footer.module.css
│  │  │  │  │  └─ Footer.tsx
│  │  │  │  ├─ Navbar
│  │  │  │  │  ├─ Navbar.module.css
│  │  │  │  │  └─ Navbar.tsx
│  │  │  │  └─ PageLayout.module.css
│  │  │  ├─ molecules
│  │  │  └─ organism
│  │  │     └─ HeroBanner
│  │  │        ├─ HeroBanner.module.css
│  │  │        └─ HeroBanner.tsx
│  │  ├─ wishlist
│  │  │  ├─ AddToWishlistButton
│  │  │  │  └─ AddToWishlistButton.tsx
│  │  │  ├─ WishlistItem
│  │  │  │  ├─ WishlistItem.module.css
│  │  │  │  └─ WishlistItem.tsx
│  │  │  └─ WishlistSiderBar
│  │  │     ├─ WishlistSideBar.module.css
│  │  │     └─ WishlistSideBar.tsx
│  │  └─ __tests__
│  │     ├─ integration
│  │     │  ├─ AddToCartButton.test.tsx
│  │     │  └─ Button.test.tsx
│  │     └─ unit
│  │        ├─ AddToCartButton.test.tsx
│  │        └─ Button.test.tsx
│  ├─ global.d.ts
│  ├─ hooks
│  │  ├─ useCart.ts
│  │  ├─ useCheckout.tsx
│  │  └─ useWishlist.ts
│  ├─ mocks
│  │  └─ productMock.ts
│  ├─ services
│  │  └─ vtex
│  │     ├─ api-client.ts
│  │     └─ catalog.service.ts
│  ├─ store
│  │  ├─ provider.tsx
│  │  ├─ slices
│  │  │  ├─ cartSlice.ts
│  │  │  ├─ checkoutSlice.ts
│  │  │  └─ wishlistSlice.ts
│  │  ├─ storage.ts
│  │  └─ store.ts
│  ├─ styles
│  ├─ tests
│  │  └─ tests.ts
│  ├─ types
│  │  ├─ product.type.ts
│  │  └─ vtex
│  │     ├─ catalog.type.ts
│  │     └─ common.type.ts
│  └─ utils
│     └─ reponsiveMedia.css
└─ tsconfig.json

```