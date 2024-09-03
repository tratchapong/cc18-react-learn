function App() {
	const users = [
		{ name: 'andy', age: 25, role: 'admin' },
		{ name: 'bobby', age: 25, role: 'user' },
		{ name: 'candy', age: 25, role: 'user' },
	]
	return (
		<div className='app'>
			{/* <UserInfoBox name='Son H.Min' age={25} isAdmin={true} obj={ {a:5, b:9} } arr={[1,5,7,9]}/> */}
			<Header />
			<UserInfoContainer users={users}/>
		</div>
	)
}

function UserInfoContainer(props) {
	console.log('*****',props)
	const {users} = props
	return (
		<div className="user-container" style={{display: 'flex', gap: '8px'}}>
			{/* <UserInfoBox name={users[0].name} age={users[0].age} role={users[0].role} />
			<UserInfoBox name={users[1].name} age={users[1].age} role={users[1].role} />
			<UserInfoBox name={users[2].name} age={users[2].age} role={users[2].role} /> */}
			
			{ users.map( el => (
					<UserInfoBox name={el.name} age={el.age} role={el.role}/>
			))			
			}

			{ users.map( el => (
				<UserInfoBox2 item={el}/>
			))
			}

		</div>
	)
}

function UserInfoBox2(props) {
	const { item  } = props
	console.log(props.item)
	return (
		<div className="card">
			<img src="https://www.svgrepo.com/show/530412/user.svg" alt="John" style={{ width: "100%" }} />
			<h1>{props.item.name}, {props.item.age}</h1>
			<p className="title">{props.item.role}</p>
			<p>Harvard University</p>
			<p>
				<button>Contact</button>
			</p>
		</div>
	)
}

function UserInfoBox(props) {
	const { name, age, role } = props
	console.log(props)
	return (
		<div className="card">
			<img src="https://www.svgrepo.com/show/530412/user.svg" alt="John" style={{ width: "100%" }} />
			<h1>{name}, {age}</h1>
			<p className="title">{role}</p>
			<p>Harvard University</p>
			<p>
				<button>Contact</button>
			</p>
		</div>
	)
}

function Header() {
	return (
		<header style={{ backgroundColor: 'gold' }}>
			<h2>logo</h2>
			<nav>
				<a href="#">Home</a>
				<a href="#">About</a>
				<a href="#">Contact</a>
			</nav>
		</header>
	)
}

ReactDOM.createRoot(document.querySelector('#root'))
	.render(<App />)
