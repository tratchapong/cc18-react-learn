import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

export default function Home() {
	const navigate = useNavigate()
	const [productId, setProductId] = useState('')
	const hdlSubmit = e => {
		e.preventDefault()
		navigate(`/product/${productId}`)
	}
	return (
		<div className='mt-4'>
			<form onSubmit={hdlSubmit}>
				<label> Product id : 
					<input className='border' 
						value={productId}
						onChange={e=>setProductId(e.target.value)}
					/>
				</label>
				<button className='bg-lime-200 p-2'>Search</button>
			</form>
		</div>
	)
}
