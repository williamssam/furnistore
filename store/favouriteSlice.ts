import { StateCreator } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { FavouriteState } from '../models/stores'

export const createFavouriteSlice: StateCreator<
	FavouriteState,
	[],
	[['zustand/immer', never]],
	FavouriteState
> = immer(set => ({
	favourites: [],
	favouriteItem: product =>
		set(state => {
			state.favourites.push(product)
		}),
	removeFavouriteItem: id =>
		set(state => ({
			favourites: state.favourites.filter(pro => pro.id !== id),
		})),
}))
