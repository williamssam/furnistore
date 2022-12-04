import AsyncStorage from '@react-native-async-storage/async-storage'
import create from 'zustand'
import { persist } from 'zustand/middleware'
import { ProductType } from '../models/products'

type ProductState = {
	cart: ProductType[]
	addToCart: (product: ProductType) => void
	removeFromCart: (id: number) => void
	_hasHydrated: boolean
	setHasHydrated: (_hasHydrated: boolean) => void
}

export const useProductStore = create<ProductState>()(
	persist(
		set => ({
			cart: [],
			count: 1,
			_hasHydrated: false,
			addToCart: product =>
				set(state => ({
					// if state counts the product, do not add the product again instead increase the count
					cart: state.cart.some(prod => prod.id === product.id)
						? state.cart
						: [...state.cart, { ...product }],
				})),
			removeFromCart: id =>
				set(state => ({ cart: state.cart.filter(pro => pro.id !== id) })),
			setHasHydrated: state => {
				set({
					_hasHydrated: state,
				})
			},
		}),
		{
			name: 'product-storage',
			getStorage: () => AsyncStorage,
			onRehydrateStorage: () => state => {
				state.setHasHydrated(true)
			},
		}
	)
)
