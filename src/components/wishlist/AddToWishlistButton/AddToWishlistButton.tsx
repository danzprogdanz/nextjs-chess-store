import { useWishlist } from '@/hooks/useWishlist';
import { Product } from '@/mocks/productMock';
import Button from '@/components/ui/atoms/Button/Button';
import FavoriteIcon from '@/components/ui/atoms/Icon/FavoriteIcon';
import { useAppSelector } from '@/store/store';

interface AddToWishlistButtonProps {
  product: Product;
}

export const AddToWishlistButton = ({ product }: AddToWishlistButtonProps) => {
  const wishListItems = useAppSelector((state) => state.wishlist.items);
  const { addItem, removeItem } = useWishlist();

  const isInWishlist = wishListItems.some(item => item.productId === product.id);

  const handleClick = () => {
    if (isInWishlist) {
      // If product is in wishlist, remove it
      removeItem(product.id);
    } else {
      // If product is not in wishlist, add it
      addItem(product);
    }
  };

  return (
    <Button
      className={``}
      onClick={handleClick}
      aria-label={isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
    >
      <FavoriteIcon 
        fill={isInWishlist ? `#f7f7f7` : 'none'} 
        stroke='#f7f7f7'
      />
    </Button>
  );
};