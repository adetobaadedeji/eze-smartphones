/* eslint-disable react/prop-types */
import React from 'react'

const NavItem = ({ href, children }) => {
	return (
		<li>
			<a
				href={href}
				className="block px-4 py-1"
			>
				{children}
			</a>
		</li>
	)
}

export default NavItem
