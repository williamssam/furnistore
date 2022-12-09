import { Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import * as React from 'react'
import { Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Product } from '../components/Product'
import { Tabs } from '../components/Tabs'
import { products } from '../data/products'
import { ProductType } from '../models/products'

export const HomeScreen = () => {
	// const [selectedIndex, setSelectedIndex] = React.useState<string>(
	// 	categories[0].name
	// )
	const [selectedIndex, setSelectedIndex] = React.useState(1)
	const [categoryProducts, setCategoryProducts] = React.useState<ProductType[]>(
		[]
	)

	React.useEffect(() => {
		const product = products.filter(product =>
			product?.categories.includes(selectedIndex)
		)
		setCategoryProducts(product)
	}, [selectedIndex])

	return (
		<SafeAreaView className='flex-1 bg-black'>
			<StatusBar style='light' />

			{/* <ScrollView showsVerticalScrollIndicator={false}> */}
			<View className='pt-4 pb-6'>
				<View className='mx-4'>
					<Text className='text-2xl font-titilium-regular text-gray-300'>
						Find the best modern
					</Text>
					<Text className='text-4xl font-titilium-black text-neutral'>
						Furniture! 🛋️
					</Text>
				</View>

				<View className='mt-3 bg-secondary rounded-xl mx-4 flex flex-row items-center py-4 px-5'>
					<Ionicons name='search-outline' size={24} color='#a1a0a3' />
					<TextInput
						placeholder='Search furniture'
						className='text-lg ml-4 font-titilium-regular text-neutral lowercase'
						placeholderTextColor='#a1a0a3'
					/>
				</View>

				{/* tabs */}
				<Tabs
					selectedIndex={selectedIndex}
					setSelectedIndex={setSelectedIndex}
				/>

				<Product categoryProducts={categoryProducts} />
			</View>
			{/* </ScrollView> */}
		</SafeAreaView>
	)
}
