import React from 'react'
import Navbar from './Navbar'

export default function Header() {
	return (
		<div className='bg-pink-400 h-20 flex justify-between items-end'>
			<p>logo</p>
			<Navbar/>
		</div>
	)
}
