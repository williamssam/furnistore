// https://jaka-tertinek.medium.com/custom-bottom-tab-navigator-react-native-cda675172dac
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { Pressable, Text, View } from 'react-native'
import * as Animatable from 'react-native-animatable'
import Cart from '../assets/icons/Cart'
import Heart from '../assets/icons/Heart'
import Home from '../assets/icons/Home'
import Settings from '../assets/icons/Settings'

const icons = {
	Home: <Home />,
	Cart: <Cart />,
	Favourites: <Heart />,
	Settings: <Settings />,
}

export const TabBar = ({
	state,
	descriptors,
	navigation,
}: BottomTabBarProps) => {
	return (
		<View className='absolute bottom-2 bg-neutral rounded-3xl mx-4 flex flex-row px-3 py-[6px] shadow-2xl'>
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
							<Animatable.View
								animation={isFocused ? 'zoomIn' : 'zoomOut'}
								duration={500}
								className='flex flex-col items-center justify-center'>
								<View className='w-2 h-2 bg-blue-800 rounded-full' />
								<Text className='font-titilium-bold text-secondary uppercase tracking-wider text-sm leading-5 mt-[2px]'>
									{route.name}
								</Text>
							</Animatable.View>
						) : (
							<Animatable.View
								animation={isFocused ? 'zoomOut' : 'zoomIn'}
								duration={500}>
								<Pressable onPress={onPress}>
									{icons[route.name as keyof typeof icons]}
								</Pressable>
							</Animatable.View>
						)}
						{/* <NavigationIcon r oute={label} isFocused={isFocused} /> */}
					</View>
				)
			})}
		</View>
	)
}
