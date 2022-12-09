import * as React from 'react'
import { Text, TextInput, View } from 'react-native'

export const PaymentInformation = () => {
	const [text, onChangeText] = React.useState('')

	return (
		<View className='mx-4 mt-5 p-5 bg-secondary rounded-xl'>
			<Text className='text-gray-300 font-titilium-bold text-base uppercase tracking-wider'>
				Payment information
			</Text>

			<View className='mt-3'>
				<View>
					<Text className='text-gray-300 text-sm'>Name on card</Text>
					<TextInput
						// onChangeText={onChangeText}
						// value={text}
						placeholder='Card Name'
						className='text-base p-4 mt-1 font-titilium-regular text-black bg-neutral rounded-lg'
						placeholderTextColor='rgb(107,114,128)'
					/>
				</View>
				<View className='mt-3'>
					<Text className='text-gray-300 text-sm'>Card numer</Text>
					<TextInput
						onChangeText={onChangeText}
						value={text}
						placeholder='Where you want the goods delivered to'
						className='text-base p-4 mt-1 font-titilium-regular text-black bg-neutral rounded-lg'
						placeholderTextColor='rgb(107,114,128)'
					/>
				</View>

				<View className='flex flex-row items-center mt-3'>
					<View className='flex-1'>
						<Text className='text-gray-300 text-sm'>Expiry</Text>
						<TextInput
							onChangeText={onChangeText}
							value={text}
							placeholder='MM/YY'
							className='text-base p-4 mt-1 font-titilium-regular text-black bg-neutral rounded-lg'
							placeholderTextColor='rgb(107,114,128)'
						/>
					</View>
					<View className='flex-1 ml-5'>
						<Text className='text-gray-300 text-sm'>CCV</Text>
						<TextInput
							onChangeText={onChangeText}
							value={text}
							placeholder='Three number at the back of your card'
							className='text-base p-4 mt-1 font-titilium-regular text-black bg-neutral rounded-lg'
							placeholderTextColor='rgb(107,114,128)'
						/>
					</View>
				</View>
			</View>
		</View>
	)
}
