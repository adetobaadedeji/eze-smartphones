import React from 'react'
import Nav from './Nav'
import NavItem from './NavItem'

const categories = [
	{ href: '/all', value: 'All' },
	{ href: '/iphone', value: 'iPhone' },
	{ href: '/samsung', value: 'Samsung' },
	{ href: '/ipad', value: 'Ipad' },
	{ href: '/macbook', value: 'MacBook' },
	{ href: '/airpods', value: 'AirPods' },
]

const Categories = () => {
	return (
		<div>
			<h3>Categories</h3>
			<Nav>
				{categories.map((category) => (
					<NavItem key={category.value} href={category.href} >
						{category.value}
					</NavItem>
				))}
			</Nav>
		</div>
	)
}

export default Categories
