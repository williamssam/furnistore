import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const ArrowLeft = (props: SvgProps) => (
	<Svg width={24} height={24} fill='none' {...props}>
		<Path
			d='m5.83 11 2.58-2.59L7 7l-5 5 5 5 1.41-1.41L5.83 13H22v-2H5.83Z'
			fill='#fafafa'
		/>
	</Svg>
)

export default ArrowLeft
