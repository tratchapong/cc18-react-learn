import {useState} from 'react'
import InfoBox from "./InfoBox";
import UserList from "./UserList";

export default function App() {

  const [open, setOpen] = useState(false)
  const [selectUser, setSelectUser] = useState(0)


  return (
    <div className="flex flex-col gap-4 max-w-screen-lg mx-auto bg-blue-200">
      <UserList setSelectUser={setSelectUser}/>
      <hr/>
      <button className='btn btn-outline btn-primary'
        onClick={()=>setOpen(prv=>!prv)} >Info Box</button>
      { open && <InfoBox selectUser={selectUser}/>}
    </div>
  )
}
