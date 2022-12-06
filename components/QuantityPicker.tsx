import { AntDesign } from '@expo/vector-icons'
import { Pressable, Text, View } from 'react-native'
import { useProductStore } from '../store/productStore'

type QuantityPickerProps = {
	quantity: number
	id: number
}

export const QuantityPicker = ({ quantity, id }: QuantityPickerProps) => {
	const increaseQuantity = useProductStore(state => state.increaseQuantity)
	const decreaseQuantity = useProductStore(state => state.decreaseQuantity)

	return (
		<View className='flex flex-row items-center bg-gray-400 ml-12'>
			<Pressable
				className='bg-gray-600 py-1 px-2 mr-2'
				onPress={() => increaseQuantity(id)}>
				<AntDesign name='plus' size={16} color='white' />
			</Pressable>
			<Text className='font-titilium-bold text-lg'>{quantity}</Text>
			<Pressable
				className='bg-gray-600 py-1 px-2 ml-2'
				onPress={() => decreaseQuantity(id)}>
				<AntDesign name='minus' size={16} color='white' />
			</Pressable>
		</View>
	)
}
