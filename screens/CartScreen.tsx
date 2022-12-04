import { AntDesign, Ionicons } from '@expo/vector-icons'
import {
	FlatList,
	Image,
	Pressable,
	Text,
	ToastAndroid,
	View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NumericFormat } from 'react-number-format'
import { EmptyComponent } from '../components/EmptyComponent'
import { Header } from '../components/Header'
import { OrderInformation } from '../components/OrderInformation'
import { ProductType } from '../models/products'
import { useProductStore } from '../store/productStore'

export const CartScreen = () => {
	const cart = useProductStore(state => state.cart)
	const removeFromCart = useProductStore(state => state.removeFromCart)

	let shippingCost = 0
	const subtotal = cart.reduce((acc, curr) => curr.price + acc, 0)
	const total = subtotal + shippingCost

	const renderItem = ({ item }: { item: ProductType }) => (
		<View className='flex items-center flex-row bg-white py-4 px-4 rounded-xl mb-4 mx-4'>
			<View className='bg-gray-300 rounded-lg py-2 px-2'>
				<Image source={item?.image} className='w-20 h-20' />
			</View>

			<View className='ml-5'>
				<Text className='font-titilium-bold text-lg text-gray-800'>
					{item?.name}
				</Text>
				<Text className='font-titilium-regular text-gray-500 leading-4'>
					{item?.brand}
				</Text>

				<View className='flex flex-row items-center justify-between pt-2'>
					<NumericFormat
						value={item?.price}
						thousandSeparator=','
						displayType='text'
						prefix='$'
						renderText={value => (
							<Text className='font-titilium-bold text-xl text-gray-600'>
								{value}
							</Text>
						)}
					/>

					<View className='flex flex-row items-center bg-gray-200 ml-16'>
						<Pressable className='bg-gray-500 py-1 px-2 rounded mr-2'>
							<AntDesign name='plus' size={16} color='white' />
						</Pressable>
						<Text className='font-titilium-bold text-lg'>2</Text>
						<Pressable className='bg-gray-500 py-1 px-2 rounded ml-2'>
							<AntDesign name='minus' size={16} color='white' />
						</Pressable>
					</View>
				</View>
			</View>

			<Pressable
				onPress={() => {
					removeFromCart(item?.id)
					ToastAndroid.show(
						`${item?.name} remove from cart`,
						ToastAndroid.SHORT
					)
				}}
				className='w-7 h-7 rounded-xl absolute right-0 top-0 bg-red-300 flex items-center justify-center'>
				<Ionicons name='trash' size={15} color='#991B1B' />
			</Pressable>
		</View>
	)

	return (
		<SafeAreaView>
			{/* <StatusBar style={'auto'} /> */}
			<FlatList
				data={cart}
				keyExtractor={item => String(item.id)}
				renderItem={renderItem}
				ListEmptyComponent={() => (
					<EmptyComponent
						title='Your cart is empty'
						subtitle='Please add a few item'
					/>
				)}
				ListHeaderComponent={() => <Header title='Your shopping cart' />}
				ListFooterComponent={() =>
					cart.length > 0 ? (
						<OrderInformation subtotal={subtotal} total={total} />
					) : null
				}
			/>
		</SafeAreaView>
	)
}
