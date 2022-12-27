import { useNavigation } from '@react-navigation/native'
import { Pressable, Text, View } from 'react-native'
import ArrowLeft from '../assets/icons/ArrowLeft'

type HeaderProps = {
	title: string
	subtitle?: string
}

export const Header = ({ title, subtitle }: HeaderProps) => {
	const navigation = useNavigation()

	return (
		<View className='mx-4 mb-8'>
			<Pressable className='mt-4 mb-1' onPress={() => navigation.goBack()}>
				<ArrowLeft />
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
