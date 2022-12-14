import { Text, View } from 'react-native'

type EmptyComponentProps = {
	title: string
	subtitle: string
}

export const EmptyComponent = ({ title, subtitle }: EmptyComponentProps) => {
	return (
		<View className='mx-4 mt-3 bg-secondary py-7 px-5 rounded-xl shadow-2xl'>
			<Text className='text-6xl text-center pt-2'>🧐</Text>
			<Text className='font-titilium-bold text-2xl text-gray-300 text-center pt-3'>
				{title}
			</Text>
			<Text className='font-titilium-semibold text-sm text-gray-400 text-center leading-5'>
				{subtitle}
			</Text>
		</View>
	)
}
