import AsyncStorage from '@react-native-async-storage/async-storage'
import create from 'zustand'
import { persist } from 'zustand/middleware'
import { CartState, FavouriteState } from '../models/stores'
import { createCartSlice } from './cartSlice'
import { createFavouriteSlice } from './favouriteSlice'

interface ProductType extends FavouriteState, CartState {
	hasHydrated: boolean
	setHasHydrated: (state: boolean) => void
}

export const useProductStore = create<ProductType>()(
	persist(
		(set, get, api) => ({
			...createFavouriteSlice(set, get, api),
			...createCartSlice(set, get, api),
			hasHydrated: false,
			setHasHydrated: state => {
				set({
					hasHydrated: state,
				})
			},
		}),
		{
			name: 'product-store',
			getStorage: () => AsyncStorage,
			onRehydrateStorage: () => state => {
				state.setHasHydrated(true)
			},
		}
	)
)
