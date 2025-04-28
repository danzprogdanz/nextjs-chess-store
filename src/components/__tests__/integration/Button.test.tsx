import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '@/components/ui/atoms/Button/Button';
import FavoriteIcon from '@/components/ui/atoms/Icon/FavoriteIcon';

describe('Button Integration Tests', () => {
  it('renders correctly with left icon', () => {
    render(
      <Button 
        icon={{
          component: <FavoriteIcon />,
          position: 'left'
        }}
      >
        Add to favorites
      </Button>
    );

    const button = screen.getByRole('button', { name: /add to favorites/i });
    const icon = button.querySelector('svg'); 
    
    expect(button).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  it('renders correctly with right icon', () => {
    render(
      <Button 
        icon={{
          component: <FavoriteIcon />,
          position: 'right'
        }}
      >
        Add to favorites
      </Button>
    );

    const button = screen.getByRole('button', { name: /add to favorites/i });
    const icon = button.querySelector('svg');
    
    expect(icon).toBeInTheDocument();
  });

  it('shows loading state and disables button when isLoading is true', () => {
    render(
      <Button isLoading>
        Loading...
      </Button>
    );

    const button = screen.getByRole('button', { name: /loading/i });
    const loader = button.querySelector('.loader'); // Assuming your CSS module has this class
    
    expect(button).toBeDisabled();
    expect(loader).toBeInTheDocument();
    expect(button).toHaveClass('loading'); // Assuming your CSS module has this class
  });

  it('integrates correctly with click handler in a realistic scenario', async () => {
    const handleAddToCart = jest.fn();
    render(
      <Button 
        onClick={handleAddToCart}
        variant="primary"
        size="large"
      >
        Add to Cart
      </Button>
    );

    const button = screen.getByRole('button', { name: /add to cart/i });
    await userEvent.click(button);
    
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
    expect(button).toHaveClass('variant-primary');
    expect(button).toHaveClass('size-large');
  });

  it('disables correctly when disabled prop is true', () => {
    render(
      <Button disabled>
        Disabled Button
      </Button>
    );

    const button = screen.getByRole('button', { name: /disabled button/i });
    expect(button).toBeDisabled();
  });
});