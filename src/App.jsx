import './App.css'
import Lottery from './Lottery'
import Ticket from './Ticket'
import { sumArr } from './helper';

function App() {

  let winCondition = (ticket)=>{
    return (sumArr(ticket) === 15);
  }
  
  return (
    <>
      <Lottery ticketNum={3} winCondition={winCondition}/>
    </>
  )
}

export default App
