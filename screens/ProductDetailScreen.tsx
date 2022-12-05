import { AntDesign, Ionicons } from '@expo/vector-icons'
import { Motion } from '@legendapp/motion'
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
import { NumericFormat } from 'react-number-format'
import { QuantityPicker } from '../components/QuantityPicker'
import { categories } from '../data/categories'
import { RootStackParamList } from '../models/navigators'
import { useProductStore } from '../store/productStore'

const { width } = Dimensions.get('window')

export const ProductDetailScreen = () => {
	const navigation = useNavigation()
	const [tags, setTags] = React.useState<(string | undefined)[]>([])
	const [moreDesc, setMoreDesc] = React.useState(false)
	const addToCart = useProductStore(state => state.addToCart)
	const { favouriteItem, favourites, removeFavouriteItem } = useProductStore(
		state => state
	)

	const { params } = useRoute<RouteProp<RootStackParamList, 'ProductDetail'>>()
	const { product } = params

	// check if favourites contain this product
	const isProductLiked = favourites?.some(
		favourite => favourite.id === product.id
	)

	// check the cateogry id in each product then compare them with the cateories id and get the name
	React.useEffect(() => {
		const category = categories.map(category => {
			if (product?.categories.includes(category.id)) {
				return category?.name
			}
		})
		const valuesThatAreNotUndefined = category.filter(Boolean)
		setTags(valuesThatAreNotUndefined)
	}, [])

	return (
		<SafeAreaView className='flex-1 bg-black'>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View className='flex flex-row items-center justify-between mx-2 mt-4 mb-1'>
					<Pressable className='p-2' onPress={() => navigation.goBack()}>
						<AntDesign name='arrowleft' size={24} color='#fafafa' />
					</Pressable>

					<Text className='font-titilium-semibold text-neutral text-xl'>
						Details
					</Text>

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

				<View className='flex flex-col items-center justify-center bg-gray-500 py-2 px-4 rounded-xl mx-4 mt-2'>
					<Image source={product?.image} className='w-96 h-96 object-contain' />
				</View>

				<View className='mx-4 my-6 pt-3'>
					<View>
						{tags ? (
							<Text className='text-sm font-titilium-semibold text-gray-300 leading-5'>
								{/* get tag, replace any space between tag with dash and join all tags together with space */}
								{tags.map(tag => `#${tag!.replace(/\s+/g, '-')}`).join(' ')}
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
							<Text className='font-titilium-regular text-sm text-gray-300'>
								price
							</Text>
							<NumericFormat
								value={product?.price}
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

						<QuantityPicker />
					</View>

					<Text className='text-base font-titilium-regular pt-6 text-gray-300'>
						{moreDesc
							? product?.description
							: `${product?.description.slice(0, 200)}....`}
					</Text>
					<Pressable onPress={() => setMoreDesc(!moreDesc)} className='pt-1'>
						<Text className='text-gray-300 font-titilium-bold'>
							{moreDesc ? 'Less' : 'More'}
						</Text>
					</Pressable>
				</View>

				{/* add to cart btn */}
				<Motion.Pressable
					onPress={() => {
						addToCart(product)
						ToastAndroid.show(
							`${product?.name} added to cart`,
							ToastAndroid.SHORT
						)
					}}>
					<Motion.View
						className='mt-5 px-8 py-4 mx-4 mb-5 bg-secondary rounded-xl flex flex-row justify-between items-center shadow-2xl'
						// whileHover={{ scale: 1.2 }}
						whileTap={{ y: 5, scale: 0.98 }}
						transition={{
							type: 'spring',
							// damping: 20,
							// stiffness: 300,
						}}>
						<Text className='text-gray-300 font-titilium-bold text-lg'>
							Add to cart
						</Text>
						<View className='bg-gray-500 rounded-lg py-1 px-5'>
							<Ionicons name='ios-cart' size={24} color='#fafafa' />
						</View>
					</Motion.View>
				</Motion.Pressable>
			</ScrollView>
		</SafeAreaView>
	)
}
