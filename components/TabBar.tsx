// https://jaka-tertinek.medium.com/custom-bottom-tab-navigator-react-native-cda675172dac
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { Pressable, Text, View } from 'react-native'
import Cart from '../assets/icons/Cart'
import Heart from '../assets/icons/Heart'
import Home from '../assets/icons/Home'
import Settings from '../assets/icons/Settings'

// const { width } = Dimensions.get('window')

const icons = {
	Home: <Home />,
	Cart: <Cart />,
	Favourites: <Heart />,
	Settings: <Settings />,
}

// type IconsType = typeof icons

export const TabBar = ({
	state,
	descriptors,
	navigation,
}: BottomTabBarProps) => {
	return (
		<View className='absolute bottom-2 bg-neutral rounded-2xl mx-4 flex flex-row px-3 py-[6px] shadow-2xl'>
			{state.routes.map((route, index) => {
				// const { options } = descriptors[route.key]
				// const label =
				// 	options.tabBarLabel !== undefined
				// 		? options.tabBarLabel
				// 		: options.title !== undefined
				// 		? options.title
				// 		: route.name

				const isFocused = state.index === index

				const onPress = () => {
					const event = navigation.emit({
						type: 'tabPress',
						target: route.key,
						canPreventDefault: true,
					})

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name)
					}
				}

				return (
					<View
						key={index}
						className='flex-1 justify-center items-center flex flex-row my-2'>
						{isFocused ? (
							<View className='flex flex-col items-center justify-center'>
								<View className='w-2 h-2 bg-blue-800 rounded-full'></View>
								<Text className='font-titilium-bold text-secondary uppercase tracking-wider text-sm leading-5 mt-[2px]'>
									{route.name}
								</Text>
							</View>
						) : (
							<Pressable onPress={onPress}>
								{icons[route.name as keyof typeof icons]}
							</Pressable>
						)}
						{/* <NavigationIcon route={label} isFocused={isFocused} /> */}
					</View>
				)
			})}
		</View>
	)
}
