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
	addToCart: (product, quantity) =>
		set(state => {
			// if state contains the product, do not add the product again instead increase the quantity by 1 or by quantity passed as function parameter
			state.cart.some(prod => prod.id === product.id)
				? state.cart.find(prod => {
						if (prod.id === product.id) {
							// if (!quantity) return
							prod.quantity += quantity ?? 1
						}
				  })
				: state.cart.push({ ...product, quantity: quantity ?? 1 })
		}),
	removeFromCart: id =>
		set(state => ({ cart: state.cart.filter(product => product.id !== id) })),
	increaseQuantity: id =>
		set(state =>
			state.cart.find(prod => {
				if (prod.id === id) {
					prod.quantity += 1
				}
			})
		),
	decreaseQuantity: id =>
		set(state =>
			state.cart.find(prod => {
				if (prod.id === id) {
					if (prod.quantity <= 1) return
					prod.quantity -= 1
				}
			})
		),
	clearCart: () => set(state => ({ cart: [] })),
}))
