import * as React from 'react'
import { FlatList, Image, Pressable, Text, View } from 'react-native'
import { categories } from '../data/categories'

type TabsProps = {
	selectedIndex: number
	setSelectedIndex: React.Dispatch<React.SetStateAction<number>>
}

export const Tabs = ({ selectedIndex, setSelectedIndex }: TabsProps) => {
	const renderItem = ({ item }) => (
		<Pressable
			onPress={() => setSelectedIndex(item.id)}
			className={`px-5 py-3 rounded-xl mr-4 flex flex-row items-center ${
				selectedIndex === item.id ? 'bg-blue-800' : 'bg-secondary'
			}`}>
			{selectedIndex === item.id ? (
				<Image source={item.image} className='w-6 h-6 mr-3' />
			) : null}
			<Text className='font-titilium-semibold text-base capitalize text-neutral'>
				{item.name}
			</Text>
		</Pressable>
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
