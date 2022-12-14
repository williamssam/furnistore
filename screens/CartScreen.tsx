import { Ionicons } from '@expo/vector-icons'
import {
	FlatList,
	GestureResponderEvent,
	Image,
	Pressable,
	Text,
	ToastAndroid,
	View,
} from 'react-native'
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NumericFormat } from 'react-number-format'
import { EmptyComponent } from '../components/EmptyComponent'
import { Header } from '../components/Header'
import { OrderInformation } from '../components/OrderInformation'
import { QuantityPicker } from '../components/QuantityPicker'
import { CartType } from '../models/stores'
import { useProductStore } from '../store/productStore'

export const CartScreen = () => {
	const cart = useProductStore(state => state.cart)
	const removeFromCart = useProductStore(state => state.removeFromCart)
	const increaseQuantity = useProductStore(state => state.increaseQuantity)
	const decreaseQuantity = useProductStore(state => state.decreaseQuantity)

	let row: Array<any> = []
	let prevOpenedRow: { close: () => void }
	let shippingCost = 0
	const subtotal = cart.reduce(
		(acc, curr) => curr.price * curr.quantity + acc,
		0
	)
	const total = subtotal + shippingCost

	// render component for swipe right
	const renderRightActions = (
		onClick: ((event: GestureResponderEvent) => void) | null | undefined
	) => {
		return (
			<View className='bg-red-200 py-4 w-16 rounded-xl flex items-center justify-center'>
				<Pressable onPress={onClick} className=''>
					<Ionicons name='trash' size={24} color='red' />
				</Pressable>
			</View>
		)
	}

	const renderItem = (
		{ item, index }: { item: CartType; index: number },
		onClick: () => void
	) => {
		const closeRow = (index: number) => {
			// if previous opened item index is not equal to current opened item index, close the previous.
			if (prevOpenedRow && prevOpenedRow !== row[index]) {
				prevOpenedRow.close()
			}
			prevOpenedRow = row[index]
		}

		return (
			<GestureHandlerRootView>
				<Swipeable
					containerStyle={{
						marginBottom: 20,
					}}
					renderRightActions={() => renderRightActions(onClick)}
					onSwipeableOpen={() => closeRow(index)}
					ref={ref => (row[index] = ref)}>
					<View className='flex items-center flex-row bg-secondary p-4 rounded-xl mx-4'>
						<View className='bg-gray-600 rounded-lg py-2 px-2'>
							<Image source={item?.image} className='w-20 h-20' />
						</View>

						<View className='ml-5'>
							<View>
								<Text className='font-titilium-bold text-lg text-gray-300'>
									{item?.name}
								</Text>
								<Text className='font-titilium-regular text-gray-400 leading-4'>
									{item?.brand}
								</Text>
							</View>

							<View className='flex flex-row items-center justify-between w-full pt-4'>
								<NumericFormat
									value={item?.price * item?.quantity}
									thousandSeparator=','
									displayType='text'
									prefix='$'
									renderText={value => (
										<Text className='font-titilium-bold text-xl text-gray-300'>
											{value}
										</Text>
									)}
								/>
								<View className='ml-auto mr-24'>
									<QuantityPicker
										quantity={item?.quantity}
										onIncrease={() => increaseQuantity(item?.id)}
										onDecrease={() => decreaseQuantity(item?.id)}
									/>
								</View>
							</View>
						</View>
					</View>
				</Swipeable>
			</GestureHandlerRootView>
		)
	}

	return (
		<SafeAreaView className='flex-1 bg-black'>
			<FlatList
				data={cart}
				keyExtractor={item => String(item.id)}
				renderItem={product =>
					renderItem(product, () => {
						removeFromCart(product?.item?.id)
						ToastAndroid.show(
							`${product?.item?.name} removed from your cart`,
							ToastAndroid.SHORT
						)
					})
				}
				ListEmptyComponent={() => (
					<EmptyComponent
						title='Your cart is empty'
						subtitle='Please add a few item'
					/>
				)}
				ListHeaderComponent={() => (
					<Header title='Your shopping cart' subtitle='Swipe to delete item' />
				)}
				ListFooterComponent={() =>
					cart.length > 0 ? (
						<OrderInformation
							subtotal={subtotal}
							total={total}
							noOfItems={cart?.length}
						/>
					) : null
				}
			/>
		</SafeAreaView>
	)
}
