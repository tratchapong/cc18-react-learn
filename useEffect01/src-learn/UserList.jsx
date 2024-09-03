import {useEffect, useState} from 'react'

export default function UserList(props) {
	const {count} = props
	
	console.log('UserList run...')
	const [data, setUser] = useState([])
	const [reload, setReload] = useState(false)
	const fetchData = async () => {
		const resp = await fetch('https://dummyjson.com/users?limit=5')
		const result = await resp.json()
		console.log(result)
		setUser(result)
	}

	// useEffect(()=>{
	// 	console.log('useEffect01 UserList run..')
	// 	if(count %2 ===0 ){
	// 		fetchData()
	// 	}
	// },[count])
	
	useEffect( ()=>{
		console.log('useEffect02 UserList run..')
		fetchData()
		return ()=> {
			console.log('return in useEffect02 UserList')
		}
	},[reload] )
	

	return (
		<div className='text-left'>
			<button className='p-3 bg-lime-300'
				onClick={()=>setReload(prv=>!prv)}>Reload : {`${reload}`}</button>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	)
}
