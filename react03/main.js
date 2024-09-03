// console.log(React)
// กด + และ - เพื่อเพิ่มและลดทีละ 1
// ตัวเลขสุดที่ 0 และห้ามติดลบ
// กด C จะ reset เลขเป็น 0

function App() {

	const [count, setCount] = React.useState(0)
	
	const updateCounter = (n) => {
		if(count+n < 0) { return }
		// setCount(count+n)
		setCount( prv => {
			prv+=n
			return prv
		} )
	}

	console.log('App run...')
	return (
		<div>
			<button onClick={()=>updateCounter(10)}>+10</button>
			<h1>Counter App</h1>
			<Counter 
				count={count} 
				updateCounter={updateCounter} 
				className={ `big-text counter ${count>0 ? 'bg-red' : 'bg-white'}` }
				numberStyle={ {fontSize : '60px', color: 'coral'} }
			/>
		</div>
	)
}

function Counter(props) {
	const {count,updateCounter,className,numberStyle } = props
	// const [count, setCount] = React.useState(0)
	console.log('Counter run...')
	console.log(props)

	return (
		<div className={className}>
			<button onClick={()=>updateCounter(-1)}>-</button>
			<h2 style={ {...numberStyle, color: count>10 ? 'lime' : 'coral'}  }>{count}</h2>
			<button onClick={()=>updateCounter(1)}>+</button>
			<button onClick={()=>updateCounter(-count)}>C</button>
		</div>
	)
}

ReactDOM.createRoot(document.querySelector('#root'))
.render(<App />)
