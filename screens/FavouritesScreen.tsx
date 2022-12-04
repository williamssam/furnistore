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
import { useFavouriteStore } from '../store/favouriteStore'
import { useProductStore } from '../store/productStore'

export const FavouritesScreen = () => {
	const navigation = useNavigation<NavigationProps>()
	const { favourites, removeFavouriteItem } = useFavouriteStore(state => state)
	const addToCart = useProductStore(state => state.addToCart)

	const renderItem = ({ item }: { item: ProductType }) => {
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
					<NumericFormat
						value={item?.price}
						thousandSeparator=','
						displayType='text'
						prefix='$'
						renderText={value => (
							<Text className='font-titilium-bold text-gray-900 text-lg'>
								{value}
							</Text>
						)}
					/>
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
				keyExtractor={item => String(item?.id)}
				numColumns={2}
				showsHorizontalScrollIndicator={false}
				ListHeaderComponent={() => <Header title='Your favourites item' />}
				ListEmptyComponent={() => (
					<EmptyComponent
						title='Your favourites is empty'
						subtitle='Please add a few item'
					/>
				)}
			/>
		</SafeAreaView>
	)
}
