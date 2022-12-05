import { ProductType } from './products'

export type FavouriteState = {
	favourites: ProductType[]
	favouriteItem: (item: ProductType) => void
	removeFavouriteItem: (id: number) => void
}

export type CartState = {
	cart: ProductType[]
	addToCart: (product: ProductType) => void
	removeFromCart: (id: number) => void
}
