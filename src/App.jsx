import React from 'react'
import Header from './components/header/Header.jsx'
import Sidebar from './components/sidebar/Sidebar.jsx'

const App = () => {
	return (
		<main className='w-full h-screen bg-body-bg'>
			<Header />
			<div className="w-full">
				<Sidebar />
			</div>
		</main>
	)
}

export default App
