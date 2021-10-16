import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Slider from '@mui/material/Slider'
import { styled } from '@mui/material/styles'
import Tooltip from '@mui/material/Tooltip'
import Box from '@mui/material/Box'

const ValueLabelComponent = (props) => {
	const { children, value } = props

	return (
		<Tooltip enterTouchDelay={0} placement='top' title={value}>
			{children}
		</Tooltip>
	)
}

ValueLabelComponent.propTypes = {
	children: PropTypes.element.isRequired,
	value: PropTypes.number.isRequired,
}

const valuetext = (value) => {
	return `$${value}`
}

const PriceSlider = styled(Slider)({
	color: '#8c8e95',
	height: 3,
	'& .MuiSlider-track': {
		border: 'none',
	},
	'& .MuiSlider-thumb': {
		height: 10,
		width: 10,
		backgroundColor: '#',
		border: '2px solid currentColor',
		'&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
			boxShadow: 'inherit',
		},
		'&:before': {
			display: 'none',
		},
	},
	'& .MuiSlider-valueLabel': {
		lineHeight: 1.2,
		fontSize: 12,
		color: '#c1c3cf',
		background: 'unset',
		padding: 0,
		width: 32,
		height: 32,

		backgroundColor: '#1d232f',
	},
})

const PriceFilter = () => {
	const [value, setValue] = useState([2, 10])
	const [min, setMin] = useState('')
	const [max, setMax] = useState('')

	console.log(min, max)

	const rangeSelector = (event, newValue) => {
		setValue(newValue)
		console.log(newValue)
	}

	const handleMinChange = (e) => {
		if (e.target.value <= 0) {
			setMin('')
		} else {
			setMin(e.target.value)
		}
	}

	const handleMaxChange = (e) => {
		if (e.target.value <= min) {
			setMax(min + 1)
		} else {
			setMax(e.target.value)
		}
	}

	return (
		<div>
			<h3 className='mb-10'>Price Filter</h3>
			<Box sx={{ width: 160 }} className='pl-4'>
				<PriceSlider
					value={value}
					onChange={rangeSelector}
					valueLabelDisplay='on'
					getAriaValueText={valuetext}
					valueLabelFormat={valuetext}
					size='small'
					aria-label='Small'
				/>
			</Box>
			<div className='flex flex-col px-2 ml-4 space-y-4 mt-4'>
				<input
					type='number'
					step='1'
					placeholder='Min'
					value={value[0]}
					onChange={handleMinChange}
					className='w-3/5 text-right text-gray-3 rounded px-2 p-1 focus:outline-none'
				/>
				<input
					type='number'
					step='1'
					placeholder='Max'
					value={value[1]}
					onChange={handleMaxChange}
					className='w-3/5 text-right text-gray-3 rounded px-2 p-1 focus:outline-none'
				/>
			</div>
		</div>
	)
}

export default PriceFilter
