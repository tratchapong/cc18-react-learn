import { useState, useContext } from 'react'
import axios from 'axios'
import AuthContext from '../contexts/AuthContext'

export default function Login() {
	const {user, setUser} = useContext(AuthContext)
	const [input, setInput] = useState({
		username: '',
		password: ''
	})

	const hdlChange = e => {
		setInput(prv => ({ ...prv, [e.target.name]: e.target.value }))
	}

	const hdlSubmit = async e => {
		e.preventDefault()
		// alert(JSON.stringify(input))
		// const resp = await fetch('https://dummyjson.com/user/login', {
		// 	method : 'POST',
		// 	headers : { 'Content-type' : 'application/json' },
		// 	body : JSON.stringify(input)
		// })
		// const result = await resp.json()
		try {
			const resp = await axios.post('https://dummyjson.com/user/login', input)
			console.log(resp.data)
			setUser(resp.data)
		}catch(err){
			console.log(err.code)
		}
	}
	return (
		<div className='flex flex-col gap-4 border w-3/4 mx-auto p-4 mt-10'>
			<p className="text-4xl">Login Form</p>
			<form className='flex flex-col gap-4' onSubmit={hdlSubmit}>
				<input type="text" placeholder="Username" className="input input-bordered w-full max-w-xs"
					name='username'
					value={input.username}
					onChange={hdlChange}
				/>
				<input type="text" placeholder="Password" className="input input-bordered w-full max-w-xs"
					name='password'
					value={input.password}
					onChange={hdlChange}
				/>
				<button className='btn btn-primary'>Login</button>
			</form>
		</div>
	)
}
