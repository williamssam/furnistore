import { StateCreator } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { CartState } from '../models/stores'

export const createCartSlice: StateCreator<
	CartState,
	[],
	[['zustand/immer', never]],
	CartState
> = immer(set => ({
	cart: [],
	count: 1,
	addToCart: product =>
		set(state => {
			// if state counts the product, do not add the product again instead increase the count
			state.cart.some(prod => prod.id === product.id)
				? state.cart
				: state.cart.push(product)
		}),
	removeFromCart: id =>
		set(state => ({ cart: state.cart.filter(pro => pro.id !== id) })),
}))
