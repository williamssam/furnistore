import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const Cart = (props: SvgProps) => (
	<Svg width={24} height={24} {...props}>
		<Path fill='none' d='M0 0h24v24H0z' />
		<Path
			d='M6 9h13.938l.5-2H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1V4H2V2h3a1 1 0 0 1 1 1v6zm0 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z'
			fill='#1d1d1f'
		/>
	</Svg>
)

export default Cart
