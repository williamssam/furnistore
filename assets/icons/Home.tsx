import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const Home = (props: SvgProps) => (
	<Svg width={24} height={24} {...props}>
		<Path fill='none' d='M0 0h24v24H0z' />
		<Path
			d='M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20zm-10-7v6h2v-6h-2z'
			fill='#1d1d1f'
		/>
	</Svg>
)

export default Home
