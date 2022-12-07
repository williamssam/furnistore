import { NavigatorScreenParams } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ProductType } from './products'

export type RootStackParamList = {
	Tab: undefined
	ProductDetail: {
		product: ProductType
	}
	Checkout: undefined
}

export type BottomTabStackParamList = {
	Home: NavigatorScreenParams<RootStackParamList>
	Cart: undefined
	Favourites: undefined
	Settings: undefined
}

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>
