import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import {
	Dimensions,
	Image,
	Pressable,
	Text,
	ToastAndroid,
	View,
} from 'react-native'
import Swiper from 'react-native-deck-swiper'
import { NavigationProps } from '../models/navigators'
import { ProductType } from '../models/products'
import { useProductStore } from '../store/cartStore'

const { height } = Dimensions.get('screen')

type ProductProps = {
	categoryProducts: ProductType[]
}

export const Product = ({ categoryProducts }: ProductProps) => {
	const navigation = useNavigation<NavigationProps>()
	const addToCart = useProductStore(state => state.addToCart)
	// const products = [
	// 	{
	// 		id: 1,
	// 		name: 'Timber Gray Sofa',
	// 		maker: 'Jason Bourne',
	// 		price: 550,
	// 	},
	// 	{
	// 		id: 2,
	// 		name: 'Timber Gray Sofa',
	// 		maker: 'Jason Bourne',
	// 		price: 600,
	// 	},
	// 	{
	// 		id: 3,
	// 		name: 'Timber Gray Sofa',
	// 		maker: 'Jason Bourne',
	// 		price: 200,
	// 	},
	// 	{
	// 		id: 4,
	// 		name: 'Timber Gray Sofa',
	// 		maker: 'Jason Bourne',
	// 		price: 1199,
	// 	},
	// 	{
	// 		id: 5,
	// 		name: 'Timber Gray Sofa',
	// 		maker: 'Jason Bourne',
	// 		price: 999,
	// 	},
	// ]

	return (
		<View className='pt-6 mt-6' style={{ flex: 1, height: height - 350 }}>
			<Swiper
				cardStyle={{
					flex: 1,
					backgroundColor: 'transparent',
					paddingHorizontal: 20,
				}}
				cards={categoryProducts}
				renderCard={product => (
					<Pressable
						onPress={() =>
							navigation.navigate('ProductDetail', {
								product: product,
							})
						}
						className='bg-gray-200 rounded-3xl px-6 pt-3 pb-10 flex flex-col items-center justify-center'>
						<Image source={product?.image} className='w-72 h-72' />

						<View className='self-start flex items-center justify-between flex-row w-full pt-1'>
							<View>
								<View>
									<Text className='text-2xl font-titilium-bold'>
										{product?.name}
									</Text>
									<Text className='font-titilium-regular leading-4'>
										{product?.brand}
									</Text>
								</View>
								<Text className='font-titilium-semibold text-gray-700 text-lg'>
									${product?.price}
								</Text>
							</View>

							<Pressable
								onPress={() => {
									addToCart(product)
									ToastAndroid.show(
										`${product?.name} added to cart`,
										ToastAndroid.SHORT
									)
								}}
								className='w-12 h-12 flex flex-col items-center justify-center rounded-xl bg-gray-900'>
								<Ionicons name='ios-cart-sharp' size={24} color='#fafafa' />
							</Pressable>
						</View>
					</Pressable>
				)}
				verticalSwipe={false}
				onSwiped={cardIndex => {
					console.log(cardIndex)
				}}
				onSwipedAll={() => {
					console.log('onSwipedAll')
				}}
				// onTapCard=
				cardVerticalMargin={0}
				cardHorizontalMargin={0}
				cardIndex={0}
				stackSize={1}
				goBackToPreviousCardOnSwipeLeft={true}
				backgroundColor={'transparent'}
			/>
		</View>
	)
}
