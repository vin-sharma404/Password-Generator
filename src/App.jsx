import React, { useEffect, useState } from 'react'

const App = () => {
  const[length,setLength]=useState(8)
  let bigStr=""

  const[password,setPassword]=useState("")
  const[allowNum,setAllowNum]=useState(false)
  const[allowSym,setAllowSym]=useState(false)
  const[copied,setCopied]=useState(false)


  let pass=()=>{
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  if(allowNum){
    str+="1234567890"
  }
  if(allowSym){
    str+="!@#$%^&*()+=-"
  }
  for(let i=0;i<length;i++){
    bigStr+=str.charAt(Math.floor(Math.random()*str.length+1))
  }
  console.log(bigStr);
  setPassword(bigStr)
  }

  useEffect(()=>{
    pass()
  },[length,allowNum,allowSym])

  const copyPassword = () => {
    navigator.clipboard.writeText(password)
    .then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500) // 1.5 sec baad hide
    })
}
  return (
    <div>
      <h1>Password Generator</h1>
      <input type="text" value={password} style={{fontSize:"40px"}}></input> 
      <button onClick ={copyPassword} style={{height:"40px" , marginLeft:"10px"}}>Copy Password</button>
      <div>
      <input 
      type="range"
      min={6} 
      max={25} 
      defaultValue={8}
      onChange={(e)=>setLength(e.target.value)}
      ></input>
      
      <label htmlFor="length"> Length:{length}</label>
      <br></br>
      <input type="checkbox" onClick={()=>setAllowNum(!allowNum)}></input>
      <label htmlFor="number">Allow Num</label>
      <br></br>
      <input type="checkbox" onClick={()=>setAllowSym(!allowSym)}></input>
      <label htmlFor="symbol">Allow Symbol</label>
      </div>

    </div>
  )
}

export default App
