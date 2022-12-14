import { AntDesign } from '@expo/vector-icons'
import { Pressable, Text, View } from 'react-native'

type QuantityPickerProps = {
	quantity: number
	onIncrease: () => void
	onDecrease: () => void
}

export const QuantityPicker = ({
	quantity,
	onIncrease,
	onDecrease,
}: QuantityPickerProps) => {
	return (
		<View className='flex flex-row items-center bg-gray-400'>
			<Pressable className='bg-gray-600 py-1 px-2 mr-2' onPress={onDecrease}>
				<AntDesign name='minus' size={16} color='white' />
			</Pressable>
			<Text className='font-titilium-bold text-lg'>{quantity}</Text>
			<Pressable className='bg-gray-600 py-1 px-2 ml-2' onPress={onIncrease}>
				<AntDesign name='plus' size={16} color='white' />
			</Pressable>
		</View>
	)
}
