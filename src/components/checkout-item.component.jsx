import {
	CheckoutItemContainer,
	ImageContainer,
	Name,
	Quantity,
	Price,
	Arrow,
	Value,
	RemoveButton,
} from '../styles/checkout-item.styles.jsx';
import { useContext } from 'react';
import { CartContext } from '../contexts/cart.context';

const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;

	const { clearItemFromCart, addItemToCart, removeItemFromCart } =
		useContext(CartContext);

	const handleRemoveItem = () => {
		clearItemFromCart(cartItem);
	};
	const addItemHandler = () => addItemToCart(cartItem);
	const removeItemHandler = () => removeItemFromCart(cartItem);
	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt={`${name}`} />
			</ImageContainer>
			<Name>{name}</Name>
			<Quantity>
				<Arrow onClick={removeItemHandler}>&#10094;</Arrow>
				<Value as='span'>{quantity}</Value>
				<Arrow onClick={addItemHandler}>&#10095;</Arrow>
			</Quantity>
			<Price>{price}</Price>
			<RemoveButton onClick={handleRemoveItem}>&#10005;</RemoveButton>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem;
