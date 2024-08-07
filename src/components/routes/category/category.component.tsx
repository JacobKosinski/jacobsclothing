import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
	selectCategoriesMap,
	selectCategoriesIsLoading,
} from '../../../store/categories/category.selector';
import ProductCard from '../../product-card.component';
import {
	CategoryContainer,
	CategoryTitle,
} from '../../../styles/category.styles';
import Spinner from '../../spinner.component';

type CategoryRouteParams = {
	category: string;
};

const Category = () => {
	const { category } = useParams<
		keyof CategoryRouteParams
	>() as CategoryRouteParams;
	const categoriesMap = useSelector(selectCategoriesMap);
	const isLoading = useSelector(selectCategoriesIsLoading);
	const [products, setProducts] = useState(categoriesMap[category]);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	return (
		<>
			<CategoryTitle as='h2'>{category.toUpperCase()}</CategoryTitle>
			{isLoading ? (
				<Spinner />
			) : (
				<CategoryContainer>
					{products &&
						products.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
				</CategoryContainer>
			)}
		</>
	);
};

export default Category;
