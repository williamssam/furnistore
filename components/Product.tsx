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
import { NumericFormat } from 'react-number-format'
import Cart from '../assets/icons/Cart'
import { NavigationProps } from '../models/navigators'
import { ProductType } from '../models/products'
import { useProductStore } from '../store/productStore'

const { height } = Dimensions.get('screen')

type ProductProps = {
	categoryProducts: ProductType[]
}

export const Product = ({ categoryProducts }: ProductProps) => {
	const navigation = useNavigation<NavigationProps>()
	const addToCart = useProductStore(state => state.addToCart)

	return (
		<View className='mt-5' style={{ flex: 1, height: height - 350 }}>
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
						className='bg-secondary rounded-3xl px-6 pb-6 flex flex-col items-center justify-center'>
						<Image source={product?.image} className='w-72 h-72' />

						<View className='self-start flex items-center justify-between flex-row w-full pt-1'>
							<View>
								<Text className='text-2xl w-56 text-neutral font-titilium-bold'>
									{product?.name}
								</Text>
								<NumericFormat
									value={product?.price}
									thousandSeparator=','
									displayType='text'
									prefix='$'
									renderText={value => (
										<Text className='font-titilium-bold text-lg text-gray-400'>
											{value}
										</Text>
									)}
								/>
							</View>

							<Pressable
								onPress={() => {
									addToCart(product)
									ToastAndroid.show(
										`${product?.name} added to your cart 🎉`,
										ToastAndroid.SHORT
									)
								}}
								className='w-12 h-12 flex flex-col ml-6 items-center justify-center rounded-xl bg-neutral'>
								<Cart />
							</Pressable>
						</View>
					</Pressable>
				)}
				verticalSwipe={false}
				// onSwiped={cardIndex => {
				// 	console.log(cardIndex)
				// }}
				// onSwipedAll={() => {
				// 	console.log('onSwipedAll')
				// }}
				// onTapCard=
				cardVerticalMargin={0}
				cardHorizontalMargin={0}
				cardIndex={0}
				showSecondCard
				stackSize={2}
				goBackToPreviousCardOnSwipeLeft={true}
				infinite
				backgroundColor={'transparent'}
			/>
		</View>
	)
}
