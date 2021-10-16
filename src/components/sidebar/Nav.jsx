/* eslint-disable react/prop-types */
import React from 'react'

const Nav = ({ children }) => {
	return (
		<nav className=''>
			<ul className='flex flex-col'>{children}</ul>
		</nav>
	)
}

export default Nav
