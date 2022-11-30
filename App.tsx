import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AppNavigator } from './navigators/AppNavigator'

SplashScreen.preventAutoHideAsync()

export default function App() {
	const [fontsLoaded] = useFonts({
		'titilium-regular': require('./assets/fonts/TitilliumWeb-Regular.ttf'),
		'titilium-semibold': require('./assets/fonts/TitilliumWeb-SemiBold.ttf'),
		'titilium-bold': require('./assets/fonts/TitilliumWeb-Bold.ttf'),
		'titilium-black': require('./assets/fonts/TitilliumWeb-Black.ttf'),
	})

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync()
		}
	}, [fontsLoaded])

	if (!fontsLoaded) {
		return null
	}

	return (
		<SafeAreaProvider onLayout={onLayoutRootView}>
			<NavigationContainer>
				<AppNavigator />
			</NavigationContainer>
		</SafeAreaProvider>
	)
}
