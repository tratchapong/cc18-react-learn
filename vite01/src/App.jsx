import { useState } from 'react'
import reactLogo from './assets/react.svg'


export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Codecamp 18</h1>
     <button onClick={()=>setCount(count+1)}>+</button>
     <img src={reactLogo} />
     <h2>{count}</h2>
    </>
  )
}

// export default App
