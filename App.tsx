import { NavigationContainer } from '@react-navigation/native'
import { loadAsync } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import * as React from 'react'
import { useCallback } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AppNavigator } from './navigators/AppNavigator'
import { useProductStore } from './store/productStore'

SplashScreen.preventAutoHideAsync()

export default function App() {
	const [appIsReady, setAppIsReady] = React.useState(false)
	const hasHydrated = useProductStore(state => state.hasHydrated)

	React.useEffect(() => {
		async function prepare() {
			try {
				await loadAsync({
					'titilium-regular': require('./assets/fonts/TitilliumWeb-Regular.ttf'),
					'titilium-semibold': require('./assets/fonts/TitilliumWeb-SemiBold.ttf'),
					'titilium-bold': require('./assets/fonts/TitilliumWeb-Bold.ttf'),
					'titilium-black': require('./assets/fonts/TitilliumWeb-Black.ttf'),
				})
			} catch (e) {
				console.warn(e)
			} finally {
				setAppIsReady(true)
			}
		}
		prepare()
	}, [])

	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) {
			await SplashScreen.hideAsync()
		}
	}, [appIsReady])

	if (!appIsReady) {
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
