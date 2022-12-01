import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import * as React from 'react'
import { Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const SettingsScreen = () => {
	const navigation = useNavigation()

	return (
		<SafeAreaView>
			<View className='px-4  h-full dark:bg-black'>
				<Pressable className='mt-4 mb-1' onPress={() => navigation.goBack()}>
					<AntDesign name='arrowleft' size={24} color='black' />
				</Pressable>
				<Text className='font-titilium-black text-3xl pt-2 dark:text-gray-200'>
					Settings
				</Text>

				{/* <View className='flex items-center justify-between flex-row mt-10 bg-white px-6 py-2 rounded-xl dark:bg-gray-100'>
					<Text className='font-titilium-semibold text-gray-700'>
						Toggle dark mode
					</Text>
					<Switch
						trackColor={{ false: '#767577', true: '#81b0ff' }}
						thumbColor={colorScheme === 'dark' ? '#f5dd4b' : '#f4f3f4'}
						ios_backgroundColor='#3e3e3e'
						onValueChange={toggleColorScheme}
						value={!!colorScheme}
					/>
				</View> */}
			</View>

			{/* <Pressable onPress={toggleColorScheme} className='p-4 dark:bg-slate-800'>
				<Text className='dark:text-white'>{`Try clicking me! ${
					colorScheme === 'dark' ? '🌙' : '🌞'
				}`}</Text>
			</Pressable> */}
		</SafeAreaView>
	)
}
