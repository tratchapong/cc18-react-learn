import {useContext} from 'react'
import UserContext from './contexts/UserContext'

export default function Profile() {
	const {user} = useContext(UserContext)
	
	return (
		<div className='p-2 bg-lime-100'>
			<pre>{JSON.stringify(user,null,2)}</pre>
		</div>
	)
}
