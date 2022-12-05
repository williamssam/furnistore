import { Ionicons } from '@expo/vector-icons'
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
import { QuantityPicker } from '../components/QuantityPicker'
import { ProductType } from '../models/products'
import { useProductStore } from '../store/productStore'

export const CartScreen = () => {
	const cart = useProductStore(state => state.cart)
	const removeFromCart = useProductStore(state => state.removeFromCart)

	let shippingCost = 0
	const subtotal = cart.reduce((acc, curr) => curr.price + acc, 0)
	const total = subtotal + shippingCost

	const renderItem = ({ item }: { item: ProductType }) => (
		<View className='flex items-center flex-row bg-secondary py-4 px-4 rounded-xl mb-5 mx-4'>
			<View className='bg-gray-600 rounded-lg py-2 px-2'>
				<Image source={item?.image} className='w-20 h-20' />
			</View>

			<View className='ml-5'>
				<Text className='font-titilium-bold text-lg text-gray-300'>
					{item?.name}
				</Text>
				<Text className='font-titilium-regular text-gray-400 leading-4'>
					{item?.brand}
				</Text>

				<View className='flex flex-row items-center justify-between pt-2'>
					<NumericFormat
						value={item?.price}
						thousandSeparator=','
						displayType='text'
						prefix='$'
						renderText={value => (
							<Text className='font-titilium-bold text-xl text-gray-300'>
								{value}
							</Text>
						)}
					/>

					<QuantityPicker />
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
				className='w-7 h-7 rounded-xl absolute left-0 top-0 bg-red-100 flex items-center justify-center'>
				<Ionicons name='trash' size={18} color='red' />
			</Pressable>
		</View>
	)

	return (
		<SafeAreaView className='flex-1 bg-black'>
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
