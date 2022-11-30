import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { FlatList, Image, Pressable, Text, View } from 'react-native'
import { NavigationProps } from '../models/navigators'

export const Product = () => {
	const navigation = useNavigation<NavigationProps>()
	const products = [
		{
			id: 1,
			name: 'Timber Gray Sofa',
			maker: 'Jason Bourne',
			price: 550,
		},
		{
			id: 2,
			name: 'Timber Gray Sofa',
			maker: 'Jason Bourne',
			price: 600,
		},
		{
			id: 3,
			name: 'Timber Gray Sofa',
			maker: 'Jason Bourne',
			price: 200,
		},
		{
			id: 4,
			name: 'Timber Gray Sofa',
			maker: 'Jason Bourne',
			price: 1199,
		},
		{
			id: 5,
			name: 'Timber Gray Sofa',
			maker: 'Jason Bourne',
			price: 999,
		},
	]

	const renderItem = ({ index, item }) => {
		return (
			<Pressable
				onPress={() => navigation.navigate('ProductDetail')}
				className='bg-gray-300 rounded-xl p-3 w-48 mr-4'>
				<View className='bg-gray-200 rounded-lg px-1 py-3 flex flex-col items-center shadow-2xl'>
					<Image
						source={require('../assets/products/chair1.png')}
						className='w-36 h-36'
					/>
				</View>

				<View className='pt-4'>
					<Text className='font-titilium-bold text-lg text-gray-900'>
						Timber Gray Sofa
					</Text>
					<Text className='text-gray-700'>Jason Bourne</Text>

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
		<FlatList
			data={products}
			renderItem={renderItem}
			keyExtractor={item => item.id}
			horizontal
			showsHorizontalScrollIndicator={false}
		/>
	)
}
