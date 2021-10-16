import React, { useState } from 'react'
import RadioInput from './RadioInput'

const Storage = () => {
	const [storageValue, setStorageValue] = useState('')
	console.log(storageValue)

	return (
		<form className=' flex flex-col space-y-5'>
			<h3>StorageValue</h3>
			<RadioInput
				label='32GB'
				value='32GB'
				checked={storageValue}
				setter={setStorageValue}
			/>
			<RadioInput
				label='64GB'
				value='64GB'
				checked={storageValue}
				setter={setStorageValue}
			/>
			<RadioInput
				label='128GB'
				value='128GB'
				checked={storageValue}
				setter={setStorageValue}
			/>
			<RadioInput
				label='256GB'
				value='256GB'
				checked={storageValue}
				setter={setStorageValue}
			/>
		</form>
	)
}

export default Storage
