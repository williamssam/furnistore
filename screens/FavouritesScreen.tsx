import { AntDesign, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { FlatList, Image, Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationProps } from '../models/navigators'

export const FavouritesScreen = () => {
	const navigation = useNavigation<NavigationProps>()
	const products = []

	const renderItem = ({ index, item }) => {
		return (
			<Pressable
				onPress={() => navigation.navigate('ProductDetail')}
				className='bg-gray-300 rounded-xl p-3 w-[183px] mt-1'>
				<View className='bg-gray-200 rounded-lg px-1 py-3 flex flex-col items-center shadow-2xl'>
					<Image
						source={require('../assets/products/chair1.png')}
						className='w-36 h-36'
					/>
					<Pressable className='absolute top-2 right-2 p-1 bg-red-200 rounded-xl'>
						<Ionicons name='heart' size={24} color='red' />
					</Pressable>
				</View>

				<View className='pt-4'>
					<Text className='font-titilium-bold text-lg text-gray-900'>
						Timber Gray Sofa
					</Text>

					<View className='flex flex-row justify-between items-center pt-3'>
						<Text className='font-titilium-bold text-gray-900 text-lg'>
							$550
						</Text>

						<Pressable className='w-9 h-9 flex flex-col items-center justify-center rounded-xl bg-gray-100'>
							<Ionicons name='ios-cart-sharp' size={18} color='#000' />
						</Pressable>
					</View>
				</View>
			</Pressable>
		)
	}

	return (
		<SafeAreaView>
			<FlatList
				data={products}
				columnWrapperStyle={{
					justifyContent: 'space-between',
					paddingHorizontal: 8,
					paddingBottom: 15,
				}}
				bounces={false}
				renderItem={renderItem}
				keyExtractor={item => item.id}
				numColumns={2}
				showsHorizontalScrollIndicator={false}
				ListHeaderComponent={() => (
					<View className='mx-4 mb-4'>
						<Pressable
							className='mt-4 mb-1'
							onPress={() => navigation.goBack()}>
							<AntDesign name='arrowleft' size={24} color='black' />
						</Pressable>
						<Text className='font-titilium-black text-3xl pt-2 dark:bg-red-600'>
							Favourites
						</Text>
					</View>
				)}
				ListEmptyComponent={() => (
					<View className='mx-4 mt-3 bg-white py-7 px-5 rounded-xl'>
						<Text className='font-titilium-bold text-2xl text-gray-600 text-center'>
							No favourite item.
						</Text>
						<Text className='font-titilium-semibold text-sm text-gray-600 text-center leading-5'>
							Please a few items.
						</Text>
					</View>
				)}
			/>
		</SafeAreaView>
	)
}
