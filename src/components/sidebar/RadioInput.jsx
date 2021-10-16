import React from 'react'
import PropTypes from 'prop-types'
import './RadioInput.css'

const RadioInput = ({ label, value, checked, setter }) => {
	const onValueChange = (e) => {
		setter(e.target.value)
	}

	return (
		<label className="flex items-center pl-3">
			<input
				type='radio'
				name='storage'
				value={value}
				checked={checked === value}
				onChange={onValueChange}
				// className='bg-white'
			/>
			<span className="ml-3">{label}</span>
		</label>
	)
}

RadioInput.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	checked: PropTypes.string.isRequired,
	setter: PropTypes.func.isRequired,
}

export default RadioInput
