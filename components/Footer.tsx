import * as Linking from 'expo-linking'
import { Pressable, Text, View } from 'react-native'

export const Footer = () => {
	return (
		<View className='pb-3 flex flex-row items-center justify-center'>
			<Text className='text-white text-center text-xs font-titilium-regular'>
				Designed and built by{' '}
			</Text>
			<Pressable
				onPress={() => Linking.openURL('https://williamssam.netlify.app/')}
				className='bg-white px-2 ml-2'>
				<Text className='text-gray-700 text-xs'>Williams Samuel</Text>
			</Pressable>
		</View>
	)
}
