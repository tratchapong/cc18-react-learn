const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',  
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];

function App() {
	const [scientist, setScientist] = React.useState(people)
	const [filterText, setFilterText] = React.useState('')
	// const finalList = scientist.filter( el => el.profession==='chemist')
	// console.log(finalList)
	// const professionList =  Array.from(new Set(scientist.map(el => el.profession)))
	// const professionList =  Array.from(new Set(scientist.map(el => el.profession)))
	// const professionList = [ ...(new Set( scientist.map(el => el.profession)) ) ]
	// const professionList = [ ...(new Set( scientist.map(el => el.profession)) ) ]
	const professionList =  Array.from( new Set( scientist.map(el => el.profession) ) )
	console.log(professionList)

	const hdlClick = el => {
		console.log(el)
		setFilterText(el)
	}
		return (
		<div className='app'>
		{ professionList.map( el => (
			<button key={el} onClick={()=>hdlClick(el)}>{el}</button>
		))}
			<button onClick={()=>setFilterText('')}>All</button>
  	<ul>
			{/* { finalList.map( el => (
				<PersonCard key={el.id} person={el}/>
			))} */}

			{ scientist.filter( el=>  filterText ? el.profession === filterText : true)
				.map( el=> (
					<PersonCard key={el.id} person={el}/>
				))
			}
		</ul>
		</div>
	)
}

function PersonCard(props) {
	const {person : {name : sname, profession}} = props
	const name = 'CC18'
	// console.log(props)

	return (
		<li>{sname} , {profession}</li>
	)
}

ReactDOM.createRoot(document.querySelector('#root'))
	.render(<App />)
