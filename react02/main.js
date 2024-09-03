

function App() {
	const genRandom = () => Math.floor(Math.random() * 100)
	const st1 = { color: 'red', backgroundColor: 'lime' }
	return (
		<div style={{
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'baseline'
		}}>
			<h1 style={st1} >Codecamp 18 : {new Date().toTimeString().split(' ')[0]}</h1>
			<h3 style={{ color: 'deeppink', backgroundColor: 'gold' }}>Lucky number = {genRandom()}</h3>
			<p className='underline'>Lorem ipsum dolor sit amet.</p>
		</div>
	)
}


ReactDOM.createRoot(document.querySelector('#root'))
	.render(<App />)


// console.log(React)
// console.log(ReactDOM)


// const root = ReactDOM.createRoot(document.querySelector('#root'))
// root.render(<h1>Codecamp 18 : {new Date().toTimeString()}</h1>)
