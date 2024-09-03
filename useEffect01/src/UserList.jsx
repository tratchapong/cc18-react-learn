import {useState, useEffect} from 'react'

export default function UserList(props) {
	const {setSelectUser} = props
	const [data, setData] = useState([])


const fetchUser = async () => {
	const resp = await fetch('https://dummyjson.com/users?limit=10')
	const result = await resp.json()
	setData(result.users)
}

useEffect( ()=>{
	fetchUser()
}, [] )

const hdlUserClick = (id) => {
	setSelectUser(id)
}

	return (
		<ul className="menu bg-base-200 rounded-box w-56">
			{ data.map( el => (
				<li><a onClick={()=> hdlUserClick(el.id)}>{el.firstName}, {el.lastName}</a></li>
			))

			}
		</ul>
	)
}
