import { categories } from '../data/categories'
import { products } from '../data/products'

export type CategoryType = typeof categories[number]
export type ProductType = typeof products[number]
