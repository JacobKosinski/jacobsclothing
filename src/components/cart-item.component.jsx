import {
	CartItemContainer,
	ItemDetails,
	Name,
} from '../styles/cart-item.styles.jsx';
const CartItem = ({ cartItem }) => {
	const { name, imageUrl, quantity, price } = cartItem;
	return (
		<CartItemContainer>
			<img src={imageUrl} alt={`${name}`} />
			<ItemDetails>
				<Name>{name}</Name>

				<span className='price'>
					{quantity} x ${price}
				</span>
			</ItemDetails>
		</CartItemContainer>
	);
};

export default CartItem;
