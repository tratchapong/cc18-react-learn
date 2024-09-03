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
	// const [inputName, setInputName] = React.useState('ABC')
	// const [inputEmail, setInputEmail ] = React.useState('')
	// const [inputRole, setInputRole ] = React.useState('')

	const [input, setInput] = React.useState({
		name : '',
		email : '',
		role : '',
		age: '',
		employed : false 
	})

	const hdlChange = e => {
		console.log(e.target.name, e.target.value)
		setInput(prv => ({...prv, [e.target.name] : e.target.value}))
	}

	const hdlSubmit = e => {
		e.preventDefault()
		console.log(input)
		setAllInput(JSON.stringify(input))
	}

	return(
		<form onSubmit={hdlSubmit}>
			<label>Name :
				<input name='name' value={input.name} onChange={hdlChange} />
			</label>
			<label>E-mail :
				<input name='email' value={input.email} onChange={hdlChange} />
			</label>
			<br />
			<br />
			<select name='role' onChange={hdlChange} defaultValue=''>
				<option value="" disabled={true} >Please select..</option>
				<option value={1}>Admin</option>
				<option value={2}>User</option>
				<option value={3}>Guest</option>
			</select>
			<label>Age :
				<input name='age' value={input.age} onChange={hdlChange} />
			</label>
			<label>
				<input 
					type="checkbox"
					name="employed" 
					checked={input.employed} 
					onChange={ e=> setInput(prv=> ({...prv, employed : !prv.employed})) }
				/> Employed 
			</label>
			<br />
			<br />
			<button>Submit</button>
		</form>
	)
}

ReactDOM.createRoot(document.querySelector('#root'))
	.render(<App />)