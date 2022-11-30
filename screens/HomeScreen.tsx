import { Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Furniture } from '../components/Furniture'
import { Tabs } from '../components/Tabs'

export const HomeScreen = () => {
	return (
		<SafeAreaView>
			<StatusBar backgroundColor='#fff' />

			{/* <ScrollView showsVerticalScrollIndicator={false}> */}
			<View className='pt-4 pb-6'>
				{/* <Text className='text-3xl font-titilium-bold text-gray-900 mx-4 lowercase'>
						Find the best modern design furniture in the field
					</Text> */}
				<Text className='text-2xl font-titilium-bold text-gray-900 mx-4'>
					Find modern furniture design
				</Text>

				<View className='mt-3 bg-gray-200 rounded-xl mx-4 flex flex-row items-center py-4 pl-3 pr-4'>
					<Ionicons name='search-outline' size={24} color='black' />
					<TextInput
						placeholder='Search furniture'
						className='text-lg ml-4 font-titilium-regular text-gray-800 lowercase'
					/>
				</View>

				{/* tabs */}
				<Tabs />

				{/* products */}

				{/* <Text className='font-titilium-bold text-2xl text-gray-800 px-4'>
						New arrivals ✨
					</Text>

					<View className='mt-4 ml-4'>
						<Product />
					</View> */}
				{/* <View className='mt-8'>
				</View>

					<View className='mt-10'>
						<Text className='font-titilium-bold text-2xl text-gray-800 px-4'>
							Products for you 😍
						</Text>

						<View className='mt-4 ml-4'>
							<Product />
						</View>
					</View> */}
				<Furniture />
			</View>
			{/* </ScrollView> */}
		</SafeAreaView>
	)
}
