import { useState } from 'react'

import './styles.css'

export function Calculadora() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [result, setResult] = useState(0)
  
  const calcular = (peso: string, altura: string) => {
    const pesoCorporal = Number(peso)
    const alturaCorporal = Number(altura)
    
    const resultadoDoCalculo = pesoCorporal / (alturaCorporal * alturaCorporal)
    const calc = Number(resultadoDoCalculo.toString().slice(0, 5))

    setResult(calc)
  }

  return (
    <>
      <div id="calculadora">
        <br></br>
        <label id="peso">Peso em kg</label>
        <input type="text" placeholder="peso" onChange={e => setPeso(e.target.value)} />
        <label id="altura">Altura</label>
        <input type="text" placeholder="altura" onChange={e => setAltura(e.target.value)} />
        <button id="resultado" onClick={() => calcular(peso, altura)}>Calcular</button>
        <br></br>
        <div id="result">Resultado é: {result ? result : 0}</div>
        <br></br>
      </div>
    </>
  )
}