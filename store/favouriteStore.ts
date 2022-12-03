import AsyncStorage from '@react-native-async-storage/async-storage'
import create from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { ProductType } from '../models/products'

interface FavouriteState {
	favourites: ProductType[]
	favouriteItem: (item: ProductType) => void
	removeFavouriteItem: (item: number) => void
}

export const useFavouriteStore = create<FavouriteState>()(
	immer(
		persist(
			set => ({
				favourites: [],
				favouriteItem: product =>
					set(state => {
						state.favourites.push(product)
					}),
				removeFavouriteItem: id =>
					set(state => ({
						favourites: state.favourites.filter(pro => pro.id !== id),
					})),
			}),
			{
				name: 'favourite-storage',
				getStorage: () => AsyncStorage,
			}
		)
	)
)

// export const createFavouriteSlice = persist(
// 	set => ({
// 		favourites: [],
// 		favouriteItem: product =>
// 			set(state => {
// 				state.favourites.push(product)
// 			}),
// 		removeFavouriteItem: id =>
// 			set(state => ({
// 				favourites: state.favourites.filter(pro => pro.id !== id),
// 			})),
// 	}),
// 	{
// 		name: 'favourite-storage',
// 		getStorage: () => AsyncStorage,
// 	}
// )
