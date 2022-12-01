import { AntDesign, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useAtom } from 'jotai'
import {
	Dimensions,
	FlatList,
	Image,
	Pressable,
	Text,
	ToastAndroid,
	View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ProductType } from '../models/products'
import { countAtom } from '../store/atoms'
import { useProductStore } from '../store/cartStore'

const { width } = Dimensions.get('screen')

export const CartScreen = () => {
	const navigation = useNavigation()
	const [count] = useAtom(countAtom)
	const cart = useProductStore(state => state.cart)
	const removeFromCart = useProductStore(state => state.removeFromCart)

	console.log('cart', cart)

	const renderItem = ({
		item,
		index,
	}: {
		item: ProductType
		index: number
	}) => (
		<View className='flex items-center flex-row bg-white py-4 px-4 rounded-xl mb-4 mx-4'>
			<View className='bg-gray-300 rounded-lg py-2 px-2'>
				<Image source={item?.image} className='w-20 h-20' />
			</View>

			<View className='ml-5'>
				<Text className='font-titilium-bold text-xl text-gray-800'>
					{item?.name}
				</Text>
				<Text className='font-titilium-regular text-gray-500 leading-4'>
					{item?.brand}
				</Text>

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

				<View className='flex flex-row items-center justify-between pt-2'>
					<Text className='font-titilium-bold text-xl text-gray-600'>
						${item?.price}
					</Text>

					<View className='flex flex-row items-center bg-gray-200 ml-20'>
						<Pressable className='bg-gray-500 py-1 px-2 rounded mr-2'>
							<AntDesign name='plus' size={16} color='white' />
						</Pressable>
						<Text className='font-titilium-bold text-lg'>{count}</Text>
						<Pressable className='bg-gray-500 py-1 px-2 rounded ml-2'>
							<AntDesign name='minus' size={16} color='white' />
						</Pressable>
					</View>
				</View>
			</View>
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
					<View className='mx-4 mt-3 bg-white py-7 px-5 rounded-xl'>
						<Text className='font-titilium-bold text-2xl text-gray-600 text-center'>
							Your cart is empty.
						</Text>
						<Text className='font-titilium-semibold text-sm text-gray-600 text-center leading-5'>
							Please a few items.
						</Text>
					</View>
				)}
				ListHeaderComponent={() => (
					<View className='mx-4 mb-4'>
						<Pressable
							className='mt-4 mb-1'
							onPress={() => navigation.goBack()}>
							<AntDesign name='arrowleft' size={24} color='black' />
						</Pressable>
						<Text className='font-titilium-black text-3xl pt-2'>
							Your Shopping Cart
						</Text>
					</View>
				)}
				ListFooterComponent={() => {
					if (cart.length > 0) {
						return (
							<View className='p-6 mt-3 bg-white rounded-tr-3xl rounded-tl-3xl shadow-2xl'>
								<View>
									<Text className='text-xl text-gray-700 font-titilium-bold'>
										Order Information
									</Text>

									<View className='flex flex-row mt-2 items-center justify-between'>
										<Text className='font-titilium-semibold text-sm text-gray-600'>
											Subtotal
										</Text>
										<Text className='font-titilium-bold text-base text-gray-800'>
											$146.94
										</Text>
									</View>
									<View className='flex flex-row mt-2 items-center justify-between'>
										<Text className='font-titilium-semibold text-sm text-gray-600'>
											Shipping cost
										</Text>
										<Text className='font-titilium-bold text-base text-gray-800'>
											$146.94
										</Text>
									</View>
									<View className='flex flex-row mt-2 pt-3 items-center justify-between border-t border-dashed border-t-gray-400'>
										<Text className='font-titilium-bold text-base text-gray-700'>
											Total
										</Text>
										<Text className='font-titilium-bold text-lg text-gray-800'>
											$146.94
										</Text>
									</View>
								</View>

								{/* checkout button */}
								<Pressable className='mt-5 px-8 py-4 bg-black rounded-xl flex flex-row justify-between items-center'>
									<Text className='text-white font-titilium-bold text-lg'>
										Procced to checkout
									</Text>
									<View className='bg-gray-200 rounded-lg py-1 px-3'>
										<Ionicons
											name='arrow-forward-outline'
											size={24}
											color='black'
										/>
									</View>
								</Pressable>
							</View>
						)
					}
				}}
			/>
		</SafeAreaView>
	)
}
