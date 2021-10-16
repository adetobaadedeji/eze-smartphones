import React from 'react'
import Categories from './Categories'
import PriceFilter from './PriceFilter'
import Storage from './Storage'

const Sidebar = () => {
	return (
		<div className='w-1/6 bg-card-bg flex flex-col font-Roboto text-card-text h-screen py-2 px-4 space-y-10'>
			<Categories />
			<PriceFilter />
			<Storage />
		</div>
	)
}

export default Sidebar
