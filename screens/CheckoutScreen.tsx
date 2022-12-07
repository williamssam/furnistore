import { Ionicons } from '@expo/vector-icons'
import * as React from 'react'
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NumericFormat } from 'react-number-format'
import { Header } from '../components/Header'
import { useProductStore } from '../store/productStore'

export const CheckoutScreen = () => {
	const [text, onChangeText] = React.useState('')
	const products = useProductStore(state => state.cart)
	const removeFromCart = useProductStore(state => state.removeFromCart)

	return (
		<SafeAreaView className='flex-1 bg-black'>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Header title='Checkout' />

				{/* summary of order */}
				<View className='mx-4 p-5 bg-secondary rounded-xl -mt-2'>
					<Text className='text-gray-300 font-titilium-bold text-base uppercase tracking-wider'>
						Order summary
					</Text>

					<View className='mt-2'>
						{products?.map(product => (
							<View
								key={product?.id}
								className='flex flex-row items-start justify-between mt-2'>
								<View>
									<Text className='text-neutral font-titilium-semibold text-base'>
										{product?.name}
									</Text>
									<Text className='text-gray-300 font-titilium-regular text-sm'>
										Quantity: {product?.quantity}
									</Text>
								</View>

								<View className='flex flex-row items-center'>
									<NumericFormat
										value={product?.price * product?.quantity}
										thousandSeparator=','
										displayType='text'
										prefix='$'
										renderText={value => (
											<Text className='text-gray-300 font-titilium-semibold text-base'>
												{value}
											</Text>
										)}
									/>

									<Pressable
										onPress={() => removeFromCart(product?.id)}
										className='ml-3'>
										<Ionicons name='trash' size={16} color='red' />
									</Pressable>
								</View>
								{/* <Text className=''>$110</Text> */}
							</View>
						))}
					</View>

					<View className='mt-4 border-t border-dashed border-t-gray-400 flex flex-row items-center justify-between pt-2'>
						<Text className='text-gray-300 font-titilium-semibold text-base'>
							Total
						</Text>
						<NumericFormat
							value={100}
							thousandSeparator=','
							displayType='text'
							prefix='$'
							renderText={value => (
								<Text className='font-titilium-bold text-xl text-neutral'>
									{value}
								</Text>
							)}
						/>
					</View>

					{/* saving alert */}
					<View className='flex flex-row items-center justify-between p-3 border-2 border-green-400 bg-green-200 rounded-lg my-3'>
						<Text className='font-titilium-semibold text-sm text-green-800'>
							Your total saving on this order is
						</Text>
						<Text className='font-titilium-semibold text-base text-green-800'>
							$200
						</Text>
					</View>

					{/* coupon section */}
					<View className='flex flex-row item-center mt-2'>
						<TextInput
							onChangeText={onChangeText}
							value={text}
							placeholder='Coupon code'
							className='text-base px-4 py-3 font-titilium-regular text-black bg-neutral rounded-lg flex-1'
							placeholderTextColor='rgb(107,114,128)'
						/>

						<Pressable className='bg-gray-300 p-4 rounded-lg ml-3'>
							<Text className='font-titilium-bold text-center text-secondary text-sm uppercase'>
								Apply
							</Text>
						</Pressable>
					</View>
				</View>

				{/* address form */}
				<View className='mx-4 mt-5 p-5 bg-secondary rounded-xl'>
					<Text className='text-gray-300 font-titilium-bold text-base uppercase tracking-wider'>
						Shipping Address
					</Text>
					<TextInput
						onChangeText={onChangeText}
						value={text}
						placeholder='Where you want the goods delivered to'
						className='text-base p-4 mt-2 font-titilium-regular text-black bg-neutral rounded-lg'
						placeholderTextColor='rgb(107,114,128)'
					/>
				</View>

				{/* card form */}
				<View className='mx-4 mt-5 p-5 bg-secondary rounded-xl'>
					<Text className='text-gray-300 font-titilium-bold text-base uppercase tracking-wider'>
						Payment information
					</Text>

					<View className='mt-3'>
						<View>
							<Text className='text-gray-300 text-sm'>Name on card</Text>
							<TextInput
								onChangeText={onChangeText}
								value={text}
								placeholder='Card Name'
								className='text-base p-4 mt-1 font-titilium-regular text-black bg-neutral rounded-lg'
								placeholderTextColor='rgb(107,114,128)'
							/>
						</View>
						<View className='mt-3'>
							<Text className='text-gray-300 text-sm'>Card numer</Text>
							<TextInput
								onChangeText={onChangeText}
								value={text}
								placeholder='Where you want the goods delivered to'
								className='text-base p-4 mt-1 font-titilium-regular text-black bg-neutral rounded-lg'
								placeholderTextColor='rgb(107,114,128)'
							/>
						</View>

						<View className='flex flex-row items-center mt-3'>
							<View className='flex-1'>
								<Text className='text-gray-300 text-sm'>Expiry</Text>
								<TextInput
									onChangeText={onChangeText}
									value={text}
									placeholder='MM/YY'
									className='text-base p-4 mt-1 font-titilium-regular text-black bg-neutral rounded-lg'
									placeholderTextColor='rgb(107,114,128)'
								/>
							</View>
							<View className='flex-1 ml-5'>
								<Text className='text-gray-300 text-sm'>CCV</Text>
								<TextInput
									onChangeText={onChangeText}
									value={text}
									placeholder='Three number at the back of your card'
									className='text-base p-4 mt-1 font-titilium-regular text-black bg-neutral rounded-lg'
									placeholderTextColor='rgb(107,114,128)'
								/>
							</View>
						</View>
					</View>
				</View>

				<Pressable className='p-4 bg-neutral rounded-xl mx-4 mt-8 shadow-xl'>
					<Text className='text-secondary text-center font-titilium-semibold text-lg'>
						Confirm payment - $100
					</Text>
				</Pressable>

				<Text className='text-neutral text-center px-5 text-sm mt-1 mb-5 font-titilium-semibold'>
					All goods are delivered within three (3) working days. Thanks for your
					business 😊!
				</Text>
			</ScrollView>
		</SafeAreaView>
	)
}
