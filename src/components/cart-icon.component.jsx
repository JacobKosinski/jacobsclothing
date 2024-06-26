import {
	CartIconContainer,
	ShoppingIconStyle,
	ItemCount,
} from '../styles/cart-icon.styles.jsx';
import { useContext } from 'react';
import { CartContext } from '../contexts/cart.context';
const CartIcon = () => {
	const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
	const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
	return (
		<CartIconContainer onClick={toggleIsCartOpen}>
			<ShoppingIconStyle />
			<ItemCount as='span'>{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
