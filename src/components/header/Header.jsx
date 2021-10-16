import React from 'react'
import { ArrowNarrowRightIcon } from '@heroicons/react/solid'

const Header = () => {
	return (
		<section className='w-full flex mb-20'>
			<div className='w-1/2 flex flex-col px-10 py-5 space-y-5'>
				<h2 className='text-left text-5xl text-header-text font-Bebas+Neue tracking-wider'>
					SHOP OUR LATEST <br /> AVAILABLE STOCK HERE
				</h2>
				<form className='flex'>
					<input
						type='text'
						className='h-10 rounded w-1/2 px-2 text-sm font-Roboto focus:outline-none focus:ring-2 focus:ring-blue-500'
						placeholder='Enter Search Term (e.g iPhone x, 128GB or A1)'
					/>
					<button type='submit' className='bg-searchbuttton-bg hover:bg-searchbutton-border flex items-center space-x-1 font-Bebas+Neue focus:outline-none text-header-text tracking-wide px-4 py-2 rounded ml-3'>
						<span>Search</span>
						<ArrowNarrowRightIcon className='h-5 w-5 text-header-text' />
					</button>
				</form>
			</div>
			<div></div>
		</section>
	)
}

export default Header
