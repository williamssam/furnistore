import AsyncStorage from '@react-native-async-storage/async-storage'
import create from 'zustand'
import { persist } from 'zustand/middleware'
import { ProductType } from '../models/products'

interface ProductState {
	cart: ProductType[]
	// count: number
	addToCart: (product: ProductType) => void
	removeFromCart: (id: number) => void
	// increaseCount:() => void
	// categories: CategoryType[]
}

export const useProductStore = create<ProductState>()(
	persist(
		set => ({
			cart: [],
			// count: 5,
			addToCart: product => set(state => ({ cart: [...state.cart, product] })),
			removeFromCart: id =>
				set(state => ({ cart: state.cart.filter(pro => pro.id !== id) })),
			// increaseCount: () => set(state => ({ count: }))
		}),
		{
			name: 'cart-storage',
			getStorage: () => AsyncStorage,
		}
	)
)
