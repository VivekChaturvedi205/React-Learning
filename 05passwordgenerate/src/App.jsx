import { useState,useCallback,useEffect,useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [tickn, settickn] = useState(false)
  const [tickc, settickc] = useState(false)
  const [password,setpassword] = useState("")

  const passwordgenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (tickn) str+="0123456789"
    if (tickc) str+="!@#$%^&*()-=+@[]{}"

    for (let i = 0; i < length; i++) {
      let char= Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setpassword(pass)
  }, [length, tickc, tickn,setpassword])

useEffect(()=>{passwordgenerator()},[length, tickc, tickn,setpassword])

  // //Use Ref
  const passwordRef= useRef(null)
  const copyto= useCallback(()=>{
    passwordRef?.current.select()
    passwordRef?.current.setSelectionRange(0,4)
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className="flex-shadow rounded-lg overflow-hidden mb-4">
        <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passwordRef}/>
        <button onClick={copyto} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
          <label >Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked={tickn} id="numberinput" onChange={()=>{
            settickn((prev)=> !prev);
          }} />
          <label htmlFor="numberinput">Number</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked={tickc} id="characterinput" onChange={()=>{
            settickc((prev)=> !prev);
          }} />
          <label htmlFor="numberinput">Character</label>
        </div>

      </div>
    </div>
    </>
  )
}

export default App
