import { Ionicons } from '@expo/vector-icons'
import { Pressable, Text, View } from 'react-native'
import { NumericFormat } from 'react-number-format'

type OrderInformationProps = {
	subtotal: number
	total: number
}

export const OrderInformation = ({
	subtotal,
	total,
}: OrderInformationProps) => {
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
					<NumericFormat
						value={subtotal}
						thousandSeparator=','
						displayType='text'
						prefix='$'
						renderText={value => (
							<Text className='font-titilium-bold text-base text-gray-800'>
								{value}
							</Text>
						)}
					/>
				</View>
				<View className='flex flex-row mt-2 items-center justify-between'>
					<Text className='font-titilium-semibold text-sm text-gray-600'>
						Shipping cost
					</Text>
					<Text className='font-titilium-bold text-base text-gray-800'>
						{0}
					</Text>
				</View>
				<View className='flex flex-row mt-2 pt-2 items-center justify-between border-t border-dashed border-t-gray-400'>
					<Text className='font-titilium-bold text-base text-gray-700'>
						Total
					</Text>
					<NumericFormat
						value={total}
						thousandSeparator=','
						displayType='text'
						prefix='$'
						renderText={value => (
							<Text className='font-titilium-bold text-xl text-gray-800'>
								{value}
							</Text>
						)}
					/>
				</View>
			</View>

			{/* checkout button */}
			<Pressable className='mt-7 px-8 py-4 bg-black rounded-xl flex flex-row justify-between items-center'>
				<Text className='text-white font-titilium-bold text-lg'>
					Procced to checkout
				</Text>
				<View className='bg-gray-100 rounded-lg py-1 px-4'>
					<Ionicons name='arrow-forward-outline' size={24} color='black' />
				</View>
			</Pressable>
		</View>
	)
}
