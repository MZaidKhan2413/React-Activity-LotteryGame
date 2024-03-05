import { useState } from "react";
import Ticket from "./Ticket";
import Button from "./Button";
import { generateRandomNum, sumArr } from "./helper";

export default function Lottery({ticketNum, winCondition}) {
    const [ticket, setTicket] = useState(generateRandomNum(ticketNum));
    
    let generateNewTicket = ()=>{
        setTicket(generateRandomNum(ticketNum))
    }

    let isWin = winCondition(ticket)

    return(
        <>
            <Ticket tickets={ticket}/>
            <Button action={generateNewTicket}/>

            {isWin && <h3>You won</h3>}
        </>
    )
}