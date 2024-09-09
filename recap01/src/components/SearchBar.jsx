import {useState} from 'react'

export default function SearchBar(props) {

	const {searchText, setSearchText} = props
	
	const [input, setInput] = useState('')

	const hdlSearch = e => {
		e.preventDefault()
		setSearchText(input)
	}

	return (
		<div>
			<form onSubmit={hdlSearch}>
				<input type="text" placeholder="Search here"
					className="input input-bordered w-full max-w-xs my-2 ms-3"
					value={searchText}
					onChange={e=>setSearchText(e.target.value)}
				/>
				<button className='btn btn-info btn-outline'>Search</button>
			</form>
		</div>
	)
	// return (
	// 	<div>
	// 		<form onSubmit={hdlSearch}>
	// 			<input type="text" placeholder="Search here"
	// 				className="input input-bordered w-full max-w-xs my-2 ms-3"
	// 				value={input}
	// 				onChange={e=>setInput(e.target.value)}
	// 			/>
	// 			<button className='btn btn-info btn-outline'>Search</button>
	// 		</form>
	// 	</div>
	// )
}
