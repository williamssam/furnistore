import { useNavigation } from '@react-navigation/native'
import * as React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '../components/Header'

export const SettingsScreen = () => {
	const navigation = useNavigation()

	return (
		<SafeAreaView>
			<Header title='Settings' />

			{/* <Pressable onPress={toggleColorScheme} className='p-4 dark:bg-slate-800'>
				<Text className='dark:text-white'>{`Try clicking me! ${
					colorScheme === 'dark' ? '🌙' : '🌞'
				}`}</Text>
			</Pressable> */}
		</SafeAreaView>
	)
}
