
import './App.css'
import { useEffect, useState } from 'react'
function App() {
  const [mostrar, setMostrar] = useState(false)
  const [contador,setContador] = useState(0)
  useEffect(()=>{console.log("useEffect")},[contador,mostrar])
  function sumarContador(){
    setContador (contador+1)
  }

  return (
    <><h1>hola mundo</h1>
    <p>{mostrar && "texto mostrado"}</p>
      <button onClick={() => setMostrar(!mostrar)}>Mostrar texto</button>
      <button onClick={sumarContador}>Sumar Contador</button>
      <p>{contador}</p>
      </>
  )
}

export default App
