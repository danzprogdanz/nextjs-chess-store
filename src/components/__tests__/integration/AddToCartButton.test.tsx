import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import AddToCartButton from "@/components/cart/AddToCartButton/AddToCartButton";
import { addToCart } from "@/store/slices/cartSlice";
import { Product } from "@/types/product.type";

const mockStore = configureStore([]);

describe("AddToCartButton Integration Tests", () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore({
      cart: { items: [] },
    });
  });

  test("adds product to cart when clicked", () => {
    const product = {
      id: "chess_001",
      sku: "STAUN-ROSE",
      title: "Classic Staunton Rosewood Chess Set",
      slug: "classic-staunton-rosewood-chess-set",
      price: {
        amount: 299.99,
        currency: "USD",
        formatted: "$299.99",
        originalAmount: 349.99,
        discountPercentage: 14,
      },
      images: [
        {
          url: "https://cdn.prod.website-files.com/61814bf39b15bff782136dd5/621411fc3d8105c34c94ab3e_ZiziD_purlingProductImages_1-p-500.png",
          altText: "Modern obsidian Staunton chess set",
          type: "gallery",
          width: 1200,
          height: 800,
        },
      ],
      description:
        "Official FIDE tournament-approved Staunton design in premium rosewood and ebony",
      technicalInfo: {
        specifications: [
          {
            category: "Materials",
            properties: [
              { name: "Pieces Material", value: "Rosewood & Ebony" },
              { name: "Board Material", value: "Walnut & Maple" },
              { name: "King Height", value: "3.75", unit: "inches" },
            ],
          },
          {
            category: "Certification",
            properties: [
              { name: "FIDE Approved", value: "Yes" },
              { name: "Tournament Size", value: '3.75" King' },
            ],
          },
        ],
        features: [
          {
            title: "Professional Tournament Set",
            description: "Official World Chess Federation specifications",
            icon: "trophy",
          },
        ],
      },
      inventory: {
        stock: 15,
        lowStockThreshold: 3,
        available: true,
        skus: [
          { code: "STAUN-ROSE-BAS", size: '3.75"', stock: 10 },
          { code: "STAUN-ROSE-PRE", size: '4.25"', stock: 5 },
        ],
      },
      shipping: {
        freeShipping: true,
        estimatedDelivery: "5-7 business days",
        shipsFrom: "London, UK",
        returnPolicy: {
          days: 30,
          details: "Free returns for unused sets",
        },
      },
      category: [
        {
          id: "cat_classic",
          name: "Classic Chess Sets",
          path: "games/chess/classic",
        },
      ],
      brand: {
        id: "brand_regal",
        name: "Regal Chess Co.",
        logo: "/logos/regal-chess.png",
      },
      createdAt: new Date("2023-11-01"),
      updatedAt: new Date("2024-03-15"),
      tags: ["tournament", "wooden", "fide-approved"],
    } as Product;

    render(
      <Provider store={store}>
        <AddToCartButton product={product} />
      </Provider>
    );

    fireEvent.click(screen.getByTestId("add-to-cart-button"));

    const actions = store.getActions();
    expect(actions[0]).toEqual(
      addToCart({
        product: {
          id: product.id,
          title: product.title,
          price: product.price,
          images: product.images.map((img) => ({
            url: img.url,
            altText: img.altText,
          })),
          createdAt: product.createdAt.toISOString(),
        },
        sku: "SKU123",
      })
    );
  });
});
