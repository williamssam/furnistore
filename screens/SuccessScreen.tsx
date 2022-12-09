import { useNavigation } from '@react-navigation/native'
import { Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationProps } from '../models/navigators'
import { useProductStore } from '../store/productStore'

export const SuccessScreen = () => {
	const navigation = useNavigation<NavigationProps>()
	const clearCart = useProductStore(state => state.clearCart)

	return (
		<SafeAreaView className='flex-1 bg-black'>
			<View className='flex flex-col justify-between h-full mx-4 py-6'>
				<Text className='text-gray-300 text-center font-titilium-regular text-xl uppercase'>
					Success
				</Text>

				<View className='flex flex-col items-center mt-40'>
					{/* <Ionicons
						name='ios-checkmark-circle-sharp'
						size={120}
						color='#fafafa'
					/> */}
					<Text className='text-9xl text-center'>🎉</Text>
					<View className='pt-3'>
						<Text className='text-neutral font-titilium-black text-[42px] text-center'>
							Payment Success
						</Text>
						<Text className='text-gray-400 text-center text-base px-3'>
							Yout item will arrive at your address within three (3) working
							days.
						</Text>
					</View>
				</View>

				<Pressable
					onPress={() => {
						clearCart()
						navigation.navigate('Tab')
					}}
					className='mt-auto bg-secondary py-4 px-3 rounded-xl'>
					<Text className='text-neutral text-lg text-center'>Back to shop</Text>
				</Pressable>
			</View>
		</SafeAreaView>
	)
}
