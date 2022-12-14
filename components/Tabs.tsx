import * as React from 'react'
import { FlatList, Image, Pressable, Text, View } from 'react-native'
import { categories } from '../data/categories'
import { CategoryType } from '../models/products'

type TabsProps = {
	selectedIndex: number
	setSelectedIndex: React.Dispatch<React.SetStateAction<number>>
}

type renderItemsProps = {
	item: CategoryType
	index: number
}

export const Tabs = ({ selectedIndex, setSelectedIndex }: TabsProps) => {
	const renderItem = ({ item, index }: renderItemsProps) => (
		<Pressable
			onPress={() => setSelectedIndex(item.id)}
			className={`px-5 py-3 rounded-xl mr-4 flex flex-row items-center ${
				selectedIndex === item.id ? 'bg-blue-800' : 'bg-secondary'
			} ${index === 0 ? 'ml-4' : 'ml-0'}`}>
			{selectedIndex === item.id ? (
				<Image source={item.image} className='w-6 h-6 mr-3' />
			) : null}
			<Text className='font-titilium-semibold text-base capitalize text-neutral'>
				{item.name}
			</Text>
		</Pressable>
	)

	return (
		<View className='pt-5 flex flex-row items-center'>
			<FlatList
				data={categories}
				keyExtractor={item => String(item.id)}
				horizontal
				showsHorizontalScrollIndicator={false}
				renderItem={renderItem}
			/>
		</View>
	)
}
