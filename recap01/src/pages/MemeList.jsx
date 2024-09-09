import axios from 'axios'
import { useEffect, useState } from 'react'
import MemeCard from '../components/MemeCard'
import SearchBar from '../components/SearchBar'

export default function MemeList() {

	const [memes, setMemes] = useState([])
	const [searchText, setSearchText] = useState('')
	// const [showMemes, setShowMemes] = useState(memes)

	const fetchMemes = async () => {
		const result = await axios.get('http://localhost:8000/memes')
		console.log(result)
		setMemes(result.data)
	}

	useEffect(() => {
		fetchMemes()
	}, [])

	return (
		<div>
			<SearchBar 
				searchText={searchText}
				setSearchText={setSearchText}
			/>
			<div className='p-4 flex flex-wrap gap-2'>
				{memes.filter( el=> el.name.toLowerCase().includes(searchText.toLowerCase())).map(el => (
					<MemeCard key={el.id} meme={el} />
				))}
				{/* <pre>{JSON.stringify(memes, null, 2)}</pre> */}
			</div>
		</div>
	)
}
