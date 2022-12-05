import { AntDesign } from '@expo/vector-icons'
import { Pressable, Text, View } from 'react-native'

export const QuantityPicker = () => {
	return (
		<View className='flex flex-row items-center bg-gray-400 ml-16'>
			<Pressable className='bg-gray-600 py-1 px-2 mr-2'>
				<AntDesign name='plus' size={16} color='white' />
			</Pressable>
			<Text className='font-titilium-bold text-lg'>2</Text>
			<Pressable className='bg-gray-600 py-1 px-2 ml-2'>
				<AntDesign name='minus' size={16} color='white' />
			</Pressable>
		</View>
	)
}
