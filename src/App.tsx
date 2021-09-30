import { Table } from './components/table/index'
import { Calculadora } from './components/calculadora'

import './App.css'

const App: React.FC = () => {
  return (
    <>
      <Table />
      <br></br>
      <br></br>
      <Calculadora />
    </>
  )
}

export default App