import { useState, useEffect } from "react"
import UserList from "./UserList"

export default function App() {
  console.log('App run..')
  const [count, setCount] = useState(0)
  const [fiveNum, setFiveNum] = useState(0)
  const [open, setOpen] = useState(false)

  useEffect( ()=>{
    console.log('useEffect01 App run..')
  }, [] )

  useEffect( ()=>{
    console.log('useEffect02 App run..')
  })

  useEffect( ()=>{
    console.log('useEffect03 App run..')
  }, [fiveNum])

  const hdlClick = () => {
    if( (count+1) % 5 === 0) {
      setFiveNum(prv=>prv+1)
    }
    setCount(prv=>prv+1)
  }

  return (
    <div className="p-4 flex flex-col gap-4 text-center">
      {console.log('App jsx..')}

      <h1 className="text-3xl font-bold ">
        Count = {count}, FiveNum = {fiveNum}
      </h1>
      <button className="p-2 bg-pink-300"
        onClick={hdlClick}>Add 1</button>
      <hr />
      <button onClick={()=>setOpen(prv=>!prv)}>Toggle User List</button>
      {open && <UserList count={count}/>}
    </div>
  )
}
