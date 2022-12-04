import { AntDesign, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import {
	FlatList,
	Image,
	Pressable,
	Text,
	ToastAndroid,
	View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationProps } from '../models/navigators'
import { useFavouriteStore } from '../store/favouriteStore'
import { useProductStore } from '../store/productStore'

export const FavouritesScreen = () => {
	const navigation = useNavigation<NavigationProps>()
	const { favourites, removeFavouriteItem } = useFavouriteStore(state => state)
	const addToCart = useProductStore(state => state.addToCart)

	const renderItem = ({ index, item }) => {
		return (
			<Pressable
				onPress={() =>
					navigation.navigate('ProductDetail', {
						product: item,
					})
				}
				className='bg-gray-300 rounded-xl p-3 w-[183px] mt-1'>
				<View className='bg-gray-200 rounded-lg px-1 py-3 flex flex-col items-center shadow-2xl'>
					<Image source={item?.image} className='w-36 h-36' />
					<Pressable
						onPress={() => removeFavouriteItem(item?.id)}
						className='absolute -top-2 -right-2 p-1 bg-red-100 rounded-xl'>
						<Ionicons name='heart' size={24} color='red' />
					</Pressable>
				</View>

				<Text className='font-titilium-bold text-lg text-gray-900 pt-4'>
					{item?.name}
				</Text>

				<View className='flex flex-row justify-between items-center pt-3 mt-auto'>
					<Text className='font-titilium-bold text-gray-900 text-lg'>
						${item?.price}
					</Text>

					<Pressable
						onPress={() => {
							addToCart(item)
							ToastAndroid.show(
								`${item?.name} added to cart`,
								ToastAndroid.SHORT
							)
						}}
						className='w-9 h-9 flex flex-col items-center justify-center rounded-xl bg-gray-100'>
						<Ionicons name='ios-cart-sharp' size={18} color='#000' />
					</Pressable>
				</View>
			</Pressable>
		)
	}

	return (
		<SafeAreaView>
			<FlatList
				data={favourites}
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
							Please add a few items.
						</Text>
					</View>
				)}
			/>
		</SafeAreaView>
	)
}
