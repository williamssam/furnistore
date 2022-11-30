import { Ionicons } from '@expo/vector-icons'
import { Dimensions, Image, Pressable, Text, View } from 'react-native'
import Swiper from 'react-native-deck-swiper'

const { height } = Dimensions.get('screen')

export const Furniture = () => {
	const products = [
		{
			id: 1,
			name: 'Timber Gray Sofa',
			maker: 'Jason Bourne',
			price: 550,
		},
		{
			id: 2,
			name: 'Timber Gray Sofa',
			maker: 'Jason Bourne',
			price: 600,
		},
		{
			id: 3,
			name: 'Timber Gray Sofa',
			maker: 'Jason Bourne',
			price: 200,
		},
		{
			id: 4,
			name: 'Timber Gray Sofa',
			maker: 'Jason Bourne',
			price: 1199,
		},
		{
			id: 5,
			name: 'Timber Gray Sofa',
			maker: 'Jason Bourne',
			price: 999,
		},
	]
	return (
		<View className='pt-6 mt-6' style={{ flex: 1, height: height - 350 }}>
			<Swiper
				cardStyle={{
					flex: 1,
					backgroundColor: 'transparent',
					paddingHorizontal: 20,
				}}
				cards={products}
				renderCard={product => (
					<View className='bg-gray-200 rounded-3xl px-6 pt-3 pb-10 flex flex-col items-center justify-center'>
						<Image
							source={require('../assets/products/chair1.png')}
							className='w-72 h-72'
						/>

						<View className='self-start flex items-center justify-between flex-row w-full pt-1'>
							<View>
								<View>
									<Text className='text-2xl font-titilium-bold lowercase'>
										{product.name}
									</Text>
									<Text className='font-titilium-regular leading-4'>
										jasom bourne
									</Text>
								</View>
								<Text className='font-titilium-semibold text-gray-700 text-lg'>
									${product.price}
								</Text>
							</View>

							<Pressable className='w-12 h-12 flex flex-col items-center justify-center rounded-xl bg-gray-900'>
								<Ionicons name='ios-cart-sharp' size={24} color='#fafafa' />
							</Pressable>
						</View>
					</View>
				)}
				verticalSwipe={false}
				onSwiped={cardIndex => {
					console.log(cardIndex)
				}}
				onSwipedAll={() => {
					console.log('onSwipedAll')
				}}
				cardVerticalMargin={0}
				cardHorizontalMargin={0}
				cardIndex={0}
				stackSize={2}
				goBackToPreviousCardOnSwipeLeft={true}
				backgroundColor={'transparent'}
			/>
		</View>
	)
}
