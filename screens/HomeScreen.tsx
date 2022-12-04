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
		<SafeAreaView>
			<StatusBar backgroundColor='#fff' />

			{/* <ScrollView showsVerticalScrollIndicator={false}> */}
			<View className='pt-4 pb-6'>
				{/* <Text className='text-3xl font-titilium-bold text-gray-900 mx-4 lowercase'>
						Find the best modern design furniture in the field
					</Text> */}
				<Text className='text-2xl font-titilium-black text-gray-900 mx-4'>
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
