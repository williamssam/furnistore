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
		<View className='p-6 mt-5 bg-secondary rounded-tr-3xl rounded-tl-3xl shadow-2xl'>
			<View>
				<Text className='text-xl text-gray-100 font-titilium-bold'>
					Order Information
				</Text>

				<View className='flex flex-row mt-2 items-center justify-between'>
					<Text className='font-titilium-semibold text-base text-gray-300'>
						Subtotal
					</Text>
					<NumericFormat
						value={subtotal}
						thousandSeparator=','
						displayType='text'
						prefix='$'
						renderText={value => (
							<Text className='font-titilium-bold text-base text-neutral'>
								{value}
							</Text>
						)}
					/>
				</View>
				<View className='flex flex-row mt-2 items-center justify-between'>
					<Text className='font-titilium-semibold text-base text-gray-300'>
						Shipping cost
					</Text>
					<Text className='font-titilium-bold text-base text-neutral'>{0}</Text>
				</View>
				<View className='flex flex-row mt-2 pt-2 items-center justify-between border-t border-dashed border-t-gray-400'>
					<Text className='font-titilium-bold text-base text-gray-300'>
						Total
					</Text>
					<NumericFormat
						value={total}
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
			</View>

			{/* checkout button */}
			<Pressable className='mt-7 px-8 py-4 bg-neutral rounded-xl flex flex-row justify-between items-center'>
				<Text className='text-secondary font-titilium-bold text-lg'>
					Procced to checkout
				</Text>
				<View className='bg-secondary rounded-lg py-1 px-4'>
					<Ionicons name='arrow-forward-outline' size={24} color='#fafafa' />
				</View>
			</Pressable>
		</View>
	)
}
