import React from 'react'
import Avatar from './Avatar'

export default function Navbar() {
	return (
		<div className='w-1/2 bg-violet-300 h-full flex justify-between items-end'>
			<nav className='flex gap-3'>
				<a href="#">Login</a>
				<a href="#">Register</a>
				<a href="#">Help</a>
			</nav>
			<Avatar />
		</div>
	)
}
