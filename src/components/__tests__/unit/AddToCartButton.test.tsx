import { render, screen, fireEvent } from '@testing-library/react';
import AddToCartButton from '@/components/cart/AddToCartButton/AddToCartButton';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { addToCart } from '@/store/slices/cartSlice';
import { mockProducts } from '@/mocks/productMock';

// Mock Redux hooks and product data
jest.mock('@/store/store', () => ({
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn(),
}));

jest.mock('@/mocks/productMock', () => ({
  mockProducts: [
    {
      id: 'test-product-id',
      title: 'Test Product',
      price: { amount: 100, currency: 'USD' },
      images: [{ url: 'test.jpg', altText: 'Test' }],
      inventory: { skus: [{ code: 'SKU123' }] },
      createdAt: new Date('2024-01-01'),
    },
  ],
}));

const mockDispatch = jest.fn();

describe('AddToCartButton Unit Tests', () => {
  beforeEach(() => {
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
    (useAppSelector as jest.Mock).mockImplementation((callback) => callback({
      cart: { items: [] },
    }));
    mockDispatch.mockClear();
  });

  test('renders Add to Cart button when product is not in cart', () => {
    const product = mockProducts[0];
    render(<AddToCartButton product={product} />);
    expect(screen.getByTestId('add-to-cart-button')).toBeInTheDocument();
  });

  test('shows "Already in cart" when product is in cart', () => {
    (useAppSelector as jest.Mock).mockImplementation((callback) => callback({
      cart: { items: [{ productId: 'test-product-id' }] },
    }));
    render(<AddToCartButton product={mockProducts[0]} />);
    expect(screen.getByTestId('already-in-cart')).toBeInTheDocument();
  });

  test('does not render when product is not found', () => {
    const { container } = render(<AddToCartButton productId="invalid-id" />);
    expect(container).toBeEmptyDOMElement();
  });

  test('dispatches addToCart action with correct payload', () => {
    const product = mockProducts[0];
    render(<AddToCartButton product={product} />);
    fireEvent.click(screen.getByTestId('add-to-cart-button'));
    
    expect(mockDispatch).toHaveBeenCalledWith(addToCart({
      product: {
        id: product.id,
        title: product.title,
        price: product.price,
        images: product.images.map(img => ({
          url: img.url,
          altText: img.altText,
        })),
        createdAt: product.createdAt.toISOString(),
      },
      sku: 'SKU123',
    }));
  });

  test('resolves product using productId from mockProducts', () => {
    render(<AddToCartButton productId="test-product-id" />);
    fireEvent.click(screen.getByTestId('add-to-cart-button'));
    expect(mockDispatch).toHaveBeenCalledWith(expect.any(Function));
  });
});