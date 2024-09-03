function App() {
	const [allInput, setAllInput] = React.useState('')
	return (
		<div className='app'>
      <h1>User Form</h1>
			<hr />
			<UserForm setAllInput={setAllInput} />
			<hr />
			<p>Your input = {allInput}</p>
		</div>
	)
}

function UserForm(props) {
	const {setAllInput} = props
	const [inputName, setInputName] = React.useState('ABC')
	const [inputEmail, setInputEmail ] = React.useState('')
	const [inputRole, setInputRole ] = React.useState('')

	const hdlSubmit = e => {
		e.preventDefault()
		console.log(inputName)
		console.log(inputEmail)
		setAllInput(`${inputName} , ${inputEmail} , ${inputRole}` )
		const sendData = {
			name : inputName,
			email : inputEmail,
			role: inputRole
		}
		console.log(sendData)

	}

	return(
		<form onSubmit={hdlSubmit}>
			<label>Name :
				<input value={inputName} onChange={e=>setInputName(e.target.value)} />
			</label>
			<label>E-mail :
				<input value={inputEmail} onChange={e=>setInputEmail(e.target.value)} />
			</label>
			<br />
			<br />
			<select onChange={e=>setInputRole(e.target.value)}>
				<option value="" disable='true' >Please select..</option>
				<option>Admin</option>
				<option>User</option>
				<option>Guest</option>
			</select>
			<button>Submit</button>
		</form>
	)
}

ReactDOM.createRoot(document.querySelector('#root'))
	.render(<App />)