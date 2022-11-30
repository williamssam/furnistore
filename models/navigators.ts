import { NavigatorScreenParams } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type RootStackParamList = {
	Tab: undefined
	ProductDetail: undefined
}

export type BottomTabStackParamList = {
	Home: NavigatorScreenParams<RootStackParamList>
	Cart: undefined
	Favourites: undefined
}

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>
