import * as React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '../components/Header'

export const SettingsScreen = () => {
	return (
		<SafeAreaView className='flex-1 bg-black'>
			<Header title='Settings' />

			{/* <View className='mx-4'>
				<Text className='text-gray-300 font-titilium-regular text-base'>
					Change theme
				</Text>
			</View> */}
		</SafeAreaView>
	)
}
