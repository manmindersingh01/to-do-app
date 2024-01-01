import { useState , useCallback,useRef  } from 'react'

function App() {

  const [length , setLength] = useState(8)
  const [upeercaseAllowed , setUpercase] = useState(false)
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")


  const passwordref = useRef(null)

  const copyToClip = ()=>{
    passwordref.current?.select()
    passwordref.current?.setSelectionRange(0,50)
    navigator.clipboard.writeText(password)
  }

  const passwordGenterator = ()=>{
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyz"
    if(upeercaseAllowed) str+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numberAllowed) str+="0123456789"
    if (charAllowed) str+="~!@#$%^&*;?"

    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
      console.log(str.length);
    }
    setPassword(pass)
    console.log(pass);

  }

  return (
    <> 
    <div className=' p-10  w-full text-center'>
 <h1 className='font-bold text-4xl p-5' > Passward Generator</h1>
 <div>
  <input 
  placeholder='Passward' 
  readOnly
  value={password}
   size={50} 
   ref={passwordref}
   className='p-2 outline-none  rounded-l text-black font-bold my-2' type="text" />
  <button className='font-bold bg-green-500 p-2 rounded-r hover:bg-blue-600' onClick={copyToClip}>Copy</button>
 </div>
   <div className='mt-4 flex justify-center gap-5 align-middle' >

  <div className='font-bold'>
   <input 
   className='align-middle'
    type="range" 
   min={8}
    max={50} 
   value={length}
   onChange={(e)=>{setLength(e.target.value)}}
   /> <label> Length : {length}</label>
   </div >

   <div className='font-bold'>
    <input type="checkbox"
    defaultChecked={upeercaseAllowed}
    onChange={()=>{setUpercase((prev)=>!prev)}}    
    />
    <label htmlFor=""> Uppercase</label>
   </div>


   <div className='font-bold'>
    <input type="checkbox" 
       defaultChecked={numberAllowed}
       onChange={()=>{setNumberAllowed((prev)=>!prev)}} 
       />
    <label htmlFor=""> Number</label>
   </div>

   <div className='font-bold'>
    <input type="checkbox"
       defaultChecked={charAllowed}
       onChange={()=>{setCharAllowed((prev)=>!prev)}}  
    />
    <label htmlFor=""> Character</label>
   </div>
 </div>
 <button onClick={passwordGenterator} className='bg-green-600 p-2 rounded font-bold m-4 hover:bg-yellow-300 hover:text-black'>Generate</button>
 </div>
    </>
  )
}

export default App
