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
			screenOptions={{ headerShown: false }}>
			<Tab.Screen name='Home' component={HomeScreen} />
			<Tab.Screen name='Cart' component={CartScreen} />
			<Tab.Screen name='Favourites' component={FavouritesScreen} />
			<Tab.Screen name='Settings' component={SettingsScreen} />
		</Tab.Navigator>
	)
}
