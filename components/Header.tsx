import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Pressable, Text, View } from 'react-native'

type HeaderProps = {
	title: string
	subtitle?: string
}

export const Header = ({ title, subtitle }: HeaderProps) => {
	const navigation = useNavigation()

	return (
		<View className='mx-4 mb-8'>
			<Pressable className='mt-4 mb-1' onPress={() => navigation.goBack()}>
				<AntDesign name='arrowleft' size={24} color='#fafafa' />
			</Pressable>
			<Text className='font-titilium-black text-3xl pt-2 capitalize text-neutral'>
				{title}
			</Text>
			{subtitle ? (
				<Text className='font-titilium-regular text-gray-300 text-sm'>
					{subtitle}
				</Text>
			) : null}
		</View>
	)
}
