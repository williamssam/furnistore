import { Ionicons } from '@expo/vector-icons'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import * as React from 'react'
import {
	Image,
	Pressable,
	ScrollView,
	Text,
	ToastAndroid,
	View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NumericFormat } from 'react-number-format'
import ArrowLeft from '../assets/icons/ArrowLeft'
import ShoppingBag from '../assets/icons/ShoppingBag'
import { QuantityPicker } from '../components/QuantityPicker'
import { categories } from '../data/categories'
import { NavigationProps, RootStackParamList } from '../models/navigators'
import { Action, InitalStateType } from '../models/products'
import { useProductStore } from '../store/productStore'

const initalState: InitalStateType = {
	tags: [],
	moreDesc: false,
	productQuantity: 1,
}

const productReducer = (state: InitalStateType, action: Action) => {
	switch (action.type) {
		case 'INCREASE-QUANTITY':
			return {
				...state,
				productQuantity: (state.productQuantity += 1),
			}
		case 'DECREASE-QUANTITY':
			return {
				...state,
				productQuantity:
					state.productQuantity === 1 ? 1 : (state.productQuantity -= 1),
			}
		case 'SHOW-MORE-DESC':
			return {
				...state,
				moreDesc: !state.moreDesc,
			}
		case 'CREATE-PRODUCT-TAGS':
			return {
				...state,
				tags: action.payload,
			}
		default:
			return state
	}
}

export const ProductDetailScreen = () => {
	const navigation = useNavigation<NavigationProps>()
	const [{ productQuantity, moreDesc, tags }, dispatch] = React.useReducer(
		productReducer,
		initalState
	)
	const addToCart = useProductStore(state => state.addToCart)
	const cart = useProductStore(state => state.cart)
	const { favouriteItem, favourites, removeFavouriteItem } = useProductStore(
		state => state
	)

	const { params } = useRoute<RouteProp<RootStackParamList, 'ProductDetail'>>()
	const { product } = params

	// check if favourites contain this product
	const isProductLiked = favourites?.some(
		favourite => favourite.id === product.id
	)

	React.useEffect(() => {
		// check the cateogry id in each product then compare them with the cateories id and get the name
		const category = categories.map(category => {
			if (product?.categories.includes(category.id)) {
				return category?.name
			}
		})
		const valuesThatAreNotUndefined = category.filter(Boolean) as string[]
		// setTags(valuesThatAreNotUndefined)
		dispatch({
			type: 'CREATE-PRODUCT-TAGS',
			payload: valuesThatAreNotUndefined,
		})
	}, [])

	return (
		<SafeAreaView className='flex-1 bg-black'>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View className='flex flex-row items-center justify-between mx-2 mt-4 mb-1'>
					<Pressable className='p-2' onPress={() => navigation.goBack()}>
						<ArrowLeft />
					</Pressable>

					<Text className='font-titilium-semibold text-neutral text-xl'>
						Details
					</Text>

					<View className='flex flex-row items-center'>
						{cart.length >= 1 ? (
							<View className='flex flex-row items-center bg-gray-800 p-1 rounded ml-2'>
								<ShoppingBag />
								<Text className='text-gray-300 font-titilium-semibold ml-1'>
									{cart.length}
								</Text>
							</View>
						) : null}
						{isProductLiked ? (
							<Pressable
								className='p-2'
								onPress={() => removeFavouriteItem(product?.id)}>
								<Ionicons name='ios-heart' size={24} color='red' />
							</Pressable>
						) : (
							<Pressable className='p-2' onPress={() => favouriteItem(product)}>
								<Ionicons name='ios-heart-outline' size={24} color='#fafafa' />
							</Pressable>
						)}
					</View>
				</View>

				<View className='flex flex-col items-center justify-center bg-gray-500 py-2 px-4 rounded-xl mx-4 mt-2 shadow-2xl'>
					<Image source={product?.image} className='w-96 h-96 object-contain' />
				</View>

				<View className='mx-4 my-6 pt-3'>
					<View>
						{tags ? (
							<Text className='text-sm font-titilium-semibold text-gray-400 leading-5'>
								{/* get tag, replace any space between tag name with dash and join all tags together with two spaces */}
								{tags.map(tag => `#${tag!.replace(/\s+/g, '-')}`).join('  ')}
							</Text>
						) : null}
						<Text className='text-3xl font-titilium-black text-neutral pt-1'>
							{product?.name}
						</Text>

						<Text className='text-gray-400 font-titilium-bold lowercase leading-4'>
							<Text className='font-titilium-regular text-gray-500'>
								brand:
							</Text>{' '}
							{product?.brand}
						</Text>
					</View>

					<View className='flex flex-row items-center justify-between pt-4'>
						<View>
							<Text className='font-titilium-regular text-sm text-gray-400'>
								price
							</Text>
							<NumericFormat
								value={product?.price * productQuantity}
								thousandSeparator=','
								displayType='text'
								prefix='$'
								renderText={value => (
									<Text className='font-titilium-bold text-lg text-gray-300 leading-6'>
										{value}
									</Text>
								)}
							/>
						</View>

						<View>
							<QuantityPicker
								quantity={productQuantity}
								onIncrease={() => dispatch({ type: 'INCREASE-QUANTITY' })}
								onDecrease={() => dispatch({ type: 'DECREASE-QUANTITY' })}
							/>
						</View>
					</View>

					<Text className='text-base leading-7 font-titilium-regular pt-6 text-gray-400'>
						{moreDesc
							? product?.description
							: `${product?.description.slice(0, 200)}....`}
						{/* {product?.description} */}
						{'   '}
						<Pressable onPress={() => dispatch({ type: 'SHOW-MORE-DESC' })}>
							<Text className='text-gray-300 font-titilium-bold'>
								{moreDesc ? 'Less' : 'More'}
							</Text>
						</Pressable>
					</Text>
				</View>

				{/* add to cart btn */}
				<Pressable
					className='mt-5 px-8 py-4 mx-4 mb-5 bg-secondary rounded-xl flex flex-row justify-between items-center shadow-2xl'
					onPress={() => {
						addToCart(product, productQuantity)
						ToastAndroid.show(
							`${product?.name} added to your cart 🎉`,
							ToastAndroid.SHORT
						)
					}}>
					<Text className='text-gray-300 font-titilium-bold text-lg'>
						Add to cart
					</Text>
					<View className='bg-gray-500 rounded-lg py-1 px-6'>
						<Ionicons name='ios-cart' size={24} color='#fafafa' />
					</View>
				</Pressable>
			</ScrollView>
		</SafeAreaView>
	)
}
