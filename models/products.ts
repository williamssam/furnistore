import { categories } from '../data/categories'
import { products } from '../data/products'

export type CategoryType = typeof categories[number]
export type ProductType = typeof products[number]

export type InitalStateType = {
	tags: string[]
	moreDesc: boolean
	productQuantity: number
}

export type Action =
	| {
			type: 'DECREASE-QUANTITY'
	  }
	| {
			type: 'INCREASE-QUANTITY'
	  }
	| {
			type: 'SHOW-MORE-DESC'
	  }
	| {
			type: 'CREATE-PRODUCT-TAGS'
			payload: string[]
	  }
