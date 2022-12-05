import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TabBar } from '../components/TabBar'
import { BottomTabStackParamList } from '../models/navigators'
import { CartScreen } from '../screens/CartScreen'
import { FavouritesScreen } from '../screens/FavouritesScreen'
import { HomeScreen } from '../screens/HomeScreen'
import { SettingsScreen } from '../screens/SettingsScreen'

const Tab = createBottomTabNavigator<BottomTabStackParamList>()
export const BottomTabNavigator = () => {
	return (
		<Tab.Navigator
			initialRouteName='Home'
			tabBar={props => <TabBar {...props} />}
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarIcon: ({ focused, color, size }) => {
					let iconName

					if (route.name === 'Home') {
						iconName = focused ? 'ios-home' : 'ios-home-outline'
					} else if (route.name === 'Cart') {
						iconName = focused ? 'ios-cart' : 'ios-cart-outline'
					} else if (route.name === 'Favourites') {
						iconName = focused ? 'ios-heart' : 'ios-heart-outline'
					} else if (route.name === 'Settings') {
						iconName = focused ? 'ios-settings' : 'ios-settings-outline'
					}

					return <Ionicons name={iconName} size={size} color={color} />
				},
				tabBarActiveTintColor: '#fafafa',
				tabBarInactiveTintColor: '#464c5a',
				tabBarShowLabel: false,
				tabBarStyle: {
					backgroundColor: '#1d1d1f',
					borderWidth: 0,
				},
			})}>
			<Tab.Screen name='Home' component={HomeScreen} />
			<Tab.Screen name='Cart' component={CartScreen} />
			<Tab.Screen name='Favourites' component={FavouritesScreen} />
			<Tab.Screen name='Settings' component={SettingsScreen} />
		</Tab.Navigator>
	)
}
