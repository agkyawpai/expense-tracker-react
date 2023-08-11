import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

function AddTransaction() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(null);
    const {addTransaction} = useContext(GlobalContext);

    const onSumit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
        setText('');
        setAmount(null)
    }
    return(
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSumit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..."></input>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br/>
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..."></input>
                </div>
                <button type="submit" className="btn">Add Transaction</button>
            </form>
        </>
    )
}
export default AddTransaction;