import { useState } from "react"

export default function ProductForm() {
	const [input, setInput] = useState({
		title: '',
		description: '',
		price: '',
		category: ''
	})
	const category = [
		"electronics",
		"jewelery",
		"men's clothing",
		"women's clothing"
		]
	
	const hdlChange = e => {
		setInput( prv => ({ ...prv, [e.target.name]: e.target.value }))
	}

	const hdlSubmit = async e => {
		e.preventDefault()
		// alert(JSON.stringify(input))
		// validation
		for(let key in input) {
			if(!input[key].trim()) {
				alert('Please check input')
				return
			}
		}
		const resp = await fetch('https://fakestoreapi.com/products', {
			method : 'POST',
			body : JSON.stringify({...input, price: +input.price})
		})
		const result = await resp.json()
		console.log(result)
	}

	return (
		<>
			<p className="text-2xl border-b-2 mt-4">Product form</p>
			<form className="flex flex-col gap-3 p-8 w-3/4 border mx-auto mt-4 rounded-lg"
				onSubmit={hdlSubmit}
			>
				<label className="flex">Title :
					<input className="ms-3 border flex-grow"
						name='title'
						value={input.title}
						onChange={hdlChange}
					/>
				</label>
				<label className="flex">Description :
					<input className="ms-3 border flex-grow" 
						name='description'
						value={input.description}
						onChange={hdlChange}
					/>
				</label>
				<label className="flex">Price :
					<input className="ms-3 border flex-grow" 
						name='price'
						value={input.price}
						onChange={hdlChange}
					/>
				</label>
				<label className="flex">Category :
					<select className="ms-3 border flex-grow"
						name='category'
						value={input.category}
						onChange={hdlChange}
					>
						<option value=''>Please select..</option>
					{ category.map(el => (
						<option key={el}>{el}</option>
					)) }
					</select>
				</label>
				<button className="bg-pink-400" >Add this data</button>
			</form>
		</>
	)
}