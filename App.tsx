import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useCallback } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AppNavigator } from './navigators/AppNavigator'
import { useProductStore } from './store/productStore'

SplashScreen.preventAutoHideAsync()

export default function App() {
	const hasHydrated = useProductStore(state => state.hasHydrated)

	const [fontsLoaded] = useFonts({
		'titilium-regular': require('./assets/fonts/TitilliumWeb-Regular.ttf'),
		'titilium-semibold': require('./assets/fonts/TitilliumWeb-SemiBold.ttf'),
		'titilium-bold': require('./assets/fonts/TitilliumWeb-Bold.ttf'),
		'titilium-black': require('./assets/fonts/TitilliumWeb-Black.ttf'),
	})

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded && hasHydrated) {
			await SplashScreen.hideAsync()
		}
	}, [fontsLoaded, hasHydrated])

	if (!fontsLoaded && !hasHydrated) {
		return null
	}

	return (
		<SafeAreaProvider onLayout={onLayoutRootView} style={{ flex: 1 }}>
			<StatusBar style='light' />
			<NavigationContainer>
				<AppNavigator />
			</NavigationContainer>
		</SafeAreaProvider>
	)
}
