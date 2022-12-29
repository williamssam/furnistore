import * as React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { EmptyComponent } from '../components/EmptyComponent'
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
			<EmptyComponent
				title='Created by Williams Samuel'
				subtitle='Find more react native project on my github'
			/>
		</SafeAreaView>
	)
}
