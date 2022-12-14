import { ProductType } from './products'

export type FavouriteState = {
	favourites: ProductType[]
	favouriteItem: (item: ProductType) => void
	removeFavouriteItem: (id: number) => void
}

export interface CartType extends ProductType {
	quantity: number
}

export type CartState = {
	cart: CartType[]
	addToCart: (product: ProductType, quantity?: number) => void
	removeFromCart: (id: number) => void
	increaseQuantity: (id: number) => void
	decreaseQuantity: (id: number) => void
	clearCart: () => void
}
