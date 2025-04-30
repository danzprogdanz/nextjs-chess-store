// cart.spec.cy.ts
describe('Cart Functionality', () => {
  beforeEach(() => {
    cy.visit('/');
    // Mock API responses if needed
  });

  it('should not show count when cart is empty', () => {
    cy.get('[data-testid="cart-item-count"]').should('not.exist');
  });

  it('should add product to cart', () => {
    cy.get('[data-testid="product-card"]').first().within(() => {
      cy.get('[data-testid="add-to-cart-button"]').click();
      cy.get('[data-testid="already-in-cart"]').should('be.visible');
    });
    
    // Verify cart count updates
    cy.get('[data-testid="cart-item-count"]').should('contain', '1');
  });

  it('should persist cart between sessions', () => {
    // First add to cart
    cy.get('[data-testid="add-to-cart-button"]').first().click();
    
    // Reload page
    cy.reload();
    
    // Verify cart count persists
    cy.get('[data-testid="cart-item-count"]').should('contain', '1');
  });
});