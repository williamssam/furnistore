import { products } from '../data/products'

export const filterCategoryProducts = (id: number) => {
	const product = products.filter(product => product?.categories.includes(id))
	return product
}
