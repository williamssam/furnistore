import { AntDesign, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import {
	Dimensions,
	Image,
	Pressable,
	ScrollView,
	Text,
	View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const { width } = Dimensions.get('window')

export const ProductDetailScreen = () => {
	const navigation = useNavigation()
	return (
		<SafeAreaView>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View className='flex flex-row items-center justify-between mx-2 my-4'>
					<Pressable className='p-2' onPress={() => navigation.goBack()}>
						<AntDesign name='arrowleft' size={24} color='black' />
					</Pressable>

					<Text className='font-titilium-semibold text-xl'>Details</Text>

					<Pressable className='p-2'>
						<Ionicons name='ios-heart-outline' size={24} color='black' />
					</Pressable>
				</View>

				<View className='flex flex-col items-center justify-center bg-slate-200 py-6 px-4 rounded-xl mx-4 '>
					<Image
						source={require('../assets/products/chair1.png')}
						className='w-96 h-96'
					/>
				</View>

				<View className='mx-4 mt-6 pb-24'>
					<View className='flex flex-row items-center justify-between'>
						<View>
							<Text className='text-3xl font-titilium-black'>
								Timber Gray Sofa
							</Text>
							<Text className='text-gray-700 font-titilium-bold lowercase'>
								<Text className='font-titilium-regular text-gray-600'>
									brand:
								</Text>{' '}
								Justin Monroe
							</Text>
						</View>

						{/* ratings */}
						<View className='bg-gray-300 py-1 px-2 rounded-lg flex flex-row items-center'>
							<Ionicons name='ios-star' size={16} color='black' />
							<Text className='font-titilium-bold text-sm pl-2'>3.5</Text>
						</View>
					</View>
					<Text className='text-base font-titilium-regular pt-4'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
						quibusdam aliquam placeat fugit facere voluptates officia veritatis
						totam, mollitia cum voluptate eum debitis molestiae molestias
						consectetur nemo cumque similique ipsam architecto eligendi?
						Quisquam quod laborum, nesciunt iste quasi ex fuga. Natus beatae
						nesciunt debitis officia adipisci. Minus, tenetur. Porro,
						consequuntur!
					</Text>
				</View>
			</ScrollView>
			<View className='absolute bottom-0 bg-gray-100 w-full py-4 px-6'>
				<Pressable className='flex flex-row p-4 items-center justify-center rounded-xl bg-gray-900'>
					<Text className='text-lg font-titilium-bold text-gray-100'>
						Add to cart
					</Text>
				</Pressable>
			</View>
		</SafeAreaView>
	)
}
