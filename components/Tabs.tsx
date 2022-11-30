import { FlatList, Image, Text, View } from 'react-native'
import { categories } from '../data/categories'

export const Tabs = () => {
	const renderItem = ({ item }) => (
		<View className='px-5 py-3 rounded-lg mr-4 bg-gray-300 flex flex-row items-center'>
			<Image
				source={require('../assets/products/couch1.png')}
				className='w-6 h-6 mr-3'
			/>
			<Text className='font-titilium-semibold text-base lowercase'>Sofas</Text>
		</View>
	)

	return (
		<View className='ml-4 pt-6 flex flex-row items-center'>
			<FlatList
				data={categories}
				keyExtractor={item => item.id}
				horizontal
				showsHorizontalScrollIndicator={false}
				renderItem={renderItem}
			/>
		</View>
	)
}
