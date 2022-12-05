// https://jaka-tertinek.medium.com/custom-bottom-tab-navigator-react-native-cda675172dac
import { Ionicons } from '@expo/vector-icons'
import { Dimensions, Pressable, StyleSheet, View } from 'react-native'

const { width } = Dimensions.get('window')

export const TabBar = ({ state, descriptors, navigation }: any) => {
	return (
		<View className='absolute bottom-1 bg-secondary rounded-xl mx-4 flex flex-row py-2'>
			{state.routes.map((route: any, index: number) => {
				const { options } = descriptors[route.key]
				const label =
					options.tabBarLabel !== undefined
						? options.tabBarLabel
						: options.title !== undefined
						? options.title
						: route.name

				const isFocused = state.index === index

				const onPress = () => {
					const event = navigation.emit({
						type: 'tabPress',
						target: route.key,
					})

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name)
					}
				}

				return (
					<View
						key={index}
						style={[
							styles.mainItemContainer,
							{ borderRightWidth: label == 'notes' ? 3 : 0 },
						]}>
						<Pressable
							onPress={onPress}
							style={{
								// color: isFocused ? '#fff' : '#182028',
								borderRadius: 20,
							}}>
							<Ionicons name='ios-cart-sharp' size={24} color='#fff' />

							{/* <NavigationIcon route={label} isFocused={isFocused} /> */}
						</Pressable>
					</View>
				)
			})}
		</View>
	)
}

const styles = StyleSheet.create({
	mainItemContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 10,
		borderRadius: 1,
		borderColor: '#333B42',
	},
})
