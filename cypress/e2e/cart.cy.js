describe('Cart Functionality', () => {
  beforeEach(() => {
    cy.visit('/products');
    // Add test product to cart
  });

  it('should update item quantity', () => {
    cy.get('[data-testid="quantity-increase"]').click();
    cy.get('[data-testid="quantity-value"]').should('contain', '2');
  });

  it('should remove item from cart', () => {
    cy.get('[data-testid="remove-item"]').click();
    cy.contains('Your cart is empty').should('be.visible');
  });

  it('should persist cart between sessions', () => {
    // Test localStorage persistence
    cy.reload();
    cy.get('[data-testid="cart-item-count"]').should('contain', '1');
  });
});