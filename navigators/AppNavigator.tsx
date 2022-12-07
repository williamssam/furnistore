import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from '../models/navigators'
import { CheckoutScreen } from '../screens/CheckoutScreen'
import { ProductDetailScreen } from '../screens/ProductDetailScreen'
import { BottomTabNavigator } from './BottomTabNavigator'

const Stack = createNativeStackNavigator<RootStackParamList>()

export const AppNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='Tab' component={BottomTabNavigator} />
			<Stack.Screen name='ProductDetail' component={ProductDetailScreen} />
			<Stack.Screen name='Checkout' component={CheckoutScreen} />
		</Stack.Navigator>
	)
}
