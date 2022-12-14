import { Ionicons } from '@expo/vector-icons'
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
import { NumericFormat } from 'react-number-format'
import { EmptyComponent } from '../components/EmptyComponent'
import { Header } from '../components/Header'
import { NavigationProps } from '../models/navigators'
import { ProductType } from '../models/products'
import { useProductStore } from '../store/productStore'

export const FavouritesScreen = () => {
	const navigation = useNavigation<NavigationProps>()
	const favourites = useProductStore(state => state.favourites)
	const removeFavouriteItem = useProductStore(
		state => state.removeFavouriteItem
	)
	const addToCart = useProductStore(state => state.addToCart)

	const renderItem = ({ item }: { item: ProductType }) => {
		return (
			<Pressable
				onPress={() =>
					navigation.navigate('ProductDetail', {
						product: item,
					})
				}
				className='bg-secondary rounded-xl p-3 w-[181px] mt-1 mb-5'>
				<View className='bg-gray-600 rounded-lg px-1 py-1 flex flex-col items-center shadow-2xl'>
					<Image source={item?.image} className='w-36 h-36' />
					<Pressable
						onPress={() => removeFavouriteItem(item?.id)}
						className='absolute -top-2 -right-2 p-1 bg-red-100 rounded-xl'>
						<Ionicons name='heart' size={24} color='red' />
					</Pressable>
				</View>

				<Text className='font-titilium-bold text-lg text-gray-300 pt-3'>
					{item?.name}
				</Text>

				<View className='flex flex-row justify-between items-center pt-2 mt-auto'>
					<NumericFormat
						value={item?.price}
						thousandSeparator=','
						displayType='text'
						prefix='$'
						renderText={value => (
							<Text className='font-titilium-bold text-gray-400 text-lg'>
								{value}
							</Text>
						)}
					/>
					<Pressable
						onPress={() => {
							addToCart(item)
							ToastAndroid.show(
								`${item?.name} added to your cart 🎉`,
								ToastAndroid.SHORT
							)
						}}
						className='w-8 h-8 flex flex-col items-center justify-center rounded-xl bg-gray-300'>
						<Ionicons name='ios-cart-sharp' size={18} color='#000' />
					</Pressable>
				</View>
			</Pressable>
		)
	}

	return (
		<SafeAreaView className='flex-1 bg-black'>
			<FlatList
				data={favourites}
				contentContainerStyle={{
					paddingBottom: 70,
				}}
				columnWrapperStyle={{
					justifyContent: 'space-between',
					paddingHorizontal: 8,
				}}
				bounces={false}
				renderItem={renderItem}
				keyExtractor={item => String(item?.id)}
				numColumns={2}
				showsHorizontalScrollIndicator={false}
				ListHeaderComponent={() => <Header title='Your favourites' />}
				ListEmptyComponent={() => (
					<EmptyComponent
						title='No favourites'
						subtitle='Please add a few item'
					/>
				)}
			/>
		</SafeAreaView>
	)
}
