import { Text, View } from 'react-native'

type EmptyComponentProps = {
	title: string
	subtitle: string
}

export const EmptyComponent = ({ title, subtitle }: EmptyComponentProps) => {
	return (
		<View className='mx-4 mt-3 bg-white py-7 px-5 rounded-xl'>
			<Text className='font-titilium-bold text-2xl text-gray-700 text-center'>
				{title}
			</Text>
			<Text className='font-titilium-semibold text-sm text-gray-600 text-center leading-5'>
				{subtitle}
			</Text>
		</View>
	)
}
