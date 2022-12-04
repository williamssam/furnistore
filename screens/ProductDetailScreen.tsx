import { AntDesign, Ionicons } from '@expo/vector-icons'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import * as React from 'react'
import {
	Dimensions,
	Image,
	Pressable,
	ScrollView,
	Text,
	ToastAndroid,
	View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { categories } from '../data/categories'
import { RootStackParamList } from '../models/navigators'
import { useFavouriteStore } from '../store/favouriteStore'
import { useProductStore } from '../store/productStore'

const { width } = Dimensions.get('window')

export const ProductDetailScreen = () => {
	const navigation = useNavigation()
	const [tags, setTags] = React.useState<string[]>([])
	const addToCart = useProductStore(state => state.addToCart)
	const { favouriteItem, favourites, removeFavouriteItem } = useFavouriteStore(
		state => state
	)

	const {
		params: { product },
	} = useRoute<RouteProp<RootStackParamList, 'ProductDetail'>>()

	// check if favourites contain this product
	const isProductLiked = favourites?.some(
		favourite => favourite.id === product.id
	)

	// check the cateogry id in each product then compare them with teh cateories id and get the name
	React.useEffect(() => {
		const category = categories.map(category => {
			if (product.categories.includes(category.id)) {
				return category.name
			}
		})
		const valuesThatAreNotUndefined = category.filter(Boolean)
		setTags(valuesThatAreNotUndefined)
	}, [])
	console.log('tags', tags)

	return (
		<SafeAreaView>
			<ScrollView showsVerticalScrollIndicator={false} className='bg-white'>
				<View className='flex flex-row items-center justify-between mx-2 mt-4 mb-1'>
					<Pressable className='p-2' onPress={() => navigation.goBack()}>
						<AntDesign name='arrowleft' size={24} color='black' />
					</Pressable>

					<Text className='font-titilium-semibold text-xl'>Details</Text>

					{isProductLiked ? (
						<Pressable
							className='p-2'
							onPress={() => removeFavouriteItem(product?.id)}>
							<Ionicons name='ios-heart' size={24} color='red' />
						</Pressable>
					) : (
						<Pressable className='p-2' onPress={() => favouriteItem(product)}>
							<Ionicons name='ios-heart-outline' size={24} color='black' />
						</Pressable>
					)}
				</View>

				<View className='flex flex-col items-center justify-center bg-slate-200 py-6 px-4 rounded-xl mx-4 '>
					<Image source={product?.image} className='w-96 h-96 object-contain' />
				</View>

				<View className='mx-4 my-6'>
					<View>
						<Text className='text-sm font-titilium-regular text-gray-500 leading-4'>
							{/* get tag, replace any space between tag with dash and join all tags with comma */}
							{tags.map(tag => `#${tag.replace(/\s+/g, '-')}`).join(', ')}
						</Text>
						<Text className='text-3xl font-titilium-black'>
							{product?.name}
						</Text>

						<Text className='text-gray-700 font-titilium-bold lowercase leading-4'>
							<Text className='font-titilium-regular text-gray-600'>
								brand:
							</Text>{' '}
							{product?.brand}
						</Text>
					</View>

					<View className='flex flex-row items-center justify-between pt-4'>
						<View>
							<Text className='font-titilium-regular text-xs text-gray-500'>
								price
							</Text>
							<Text className='font-titilium-bold text-lg text-gray-600 leading-5'>
								${product?.price}
							</Text>
						</View>

						<View className='flex flex-row items-center bg-gray-200'>
							<Pressable className='bg-gray-500 py-1 px-2 rounded mr-2'>
								<AntDesign name='plus' size={16} color='white' />
							</Pressable>
							<Text className='font-titilium-bold text-lg'>1</Text>
							<Pressable className='bg-gray-500 py-1 px-2 rounded ml-2'>
								<AntDesign name='minus' size={16} color='white' />
							</Pressable>
						</View>
					</View>

					<Text className='text-base font-titilium-regular pt-4'>
						{product?.description}
					</Text>
				</View>

				{/* <Pressable className='flex flex-row  px-6 py-4 justify-center rounded-xl bg-black'>
					<Text className='text-lg font-titilium-bold text-gray-100'>
						Add to cart
					</Text>
				</Pressable> */}

				<Pressable
					onPress={() => {
						addToCart(product)
						ToastAndroid.show(
							`${product?.name} added to cart`,
							ToastAndroid.SHORT
						)
					}}
					className='mt-5 px-8 py-4 mx-4 mb-5 bg-black rounded-xl flex flex-row justify-between items-center'>
					<Text className='text-white font-titilium-bold text-lg'>
						Add to cart
					</Text>
					<View className='bg-gray-200 rounded-lg py-1 px-3'>
						<Ionicons name='ios-cart' size={24} color='black' />
					</View>
				</Pressable>
			</ScrollView>
		</SafeAreaView>
	)
}
