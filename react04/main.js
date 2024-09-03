console.log(React)
console.log(ReactDOM)


function App() {
	return (
		<div className='app'>
			<UserInfo />
		</div>
	)
}

function UserInfo() {

	console.log('UserInfo run...')
	const [user, setUser] = React.useState({
		 name: 'andy',
		 birthYear: 2000, 
		 isLoggined: false,
		 point : 1000,
		 loginCount : 0
		})
	
	const loginState = (state) => {
		const newUser = {...user}
		newUser.isLoggined = state
		if(state === true) {
			newUser.loginCount +=1
			if( newUser.loginCount %5 === 0) {
				newUser.point += 100
			}
		}
		setUser(newUser)
	}

	const hdlLogin = () => 	{
		// setUser(prv=>({...prv, loginCount : prv.loginCount+=1 }))
		loginState(true)
	}

	const hdlLogout = () => loginState(false)

	const hdlAddpoint = () => {
		// const newUser = {...user}
		// newUser.point += 10
		// setUser(newUser)
		
		//** setUser({...user, point: user.point + 10 })

		// setUser( prv => {
		// 	console.log(prv)
		// 	const newUser = {...prv}
		// 	newUser.point +=10
		// 	return newUser
		// })

		setUser( prv => ({ ...prv, point: prv.point+10 }) )
	}

	return (
		<div>
			<p>UserInfo</p>
			<p>Name : {user.name}</p>
			<p>Age : {new Date().getFullYear() - user.birthYear}</p>
			<p>Point : {user.point}</p>
			<p>Login count : {user.loginCount}</p>
			
			{/* ถ้า login vs. ไม่ login */}
			{ user.isLoggined
				? (
				<React.Fragment>
					<button onClick={hdlLogout}>Logout</button>
					<button onClick={hdlAddpoint}>Add 10</button>
				</React.Fragment>
				)
				: <button onClick={hdlLogin}>Login</button>
			}
			{/* user.isLoggined && <button>Add 10</button> */}

			{/* สร้างปุ่ม Add Point ทีละ 10 point ปุ่มนี้แสดงเมื่อ login เท่านั้น
					เมื่อกดปุ่มจะเพิ่ม point ทีละ 10 คะแนน (update คะแนนทันที)
					challenge : 
					login ทุก 5 ครั้ง ได้เพิ่ม 100 คะแนน
			*/}
			<hr />
			
			{/* ถ้า login vs. ไม่ login */}
			{ user.isLoggined 
				? <p>Welcome, {user.name}</p>
				: <p>Please Login</p>
			}
			
			
		</div>
	)
}
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App />)