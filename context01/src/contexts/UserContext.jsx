import {createContext, useState, useEffect} from 'react'

const UserContext = createContext()

function UserContextProvider(props) {
	const [user, setUser] = useState({})

	useEffect( ()=>{
    const fetchUser = async () => {
      const resp = await fetch('http://dummyjson.com/users/1')
      const result = await resp.json()
      setUser(result)
    }
    fetchUser()
  },[] )

	return (
		<UserContext.Provider value={ {user , setUser} }>
			{props.children}
		</UserContext.Provider>
	)
}

export {UserContextProvider}
export default UserContext

