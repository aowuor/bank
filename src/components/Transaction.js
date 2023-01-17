import React, {useState} from "react";

function Transaction({submittedData, transactions}){
    const [newTransaction, setNewTransaction] = useState([])
    
    function handleOnChange(e){
        e.preventDefault()
        setNewTransaction({...newTransaction, [e.target.name]:e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        submittedData(newTransaction)
    }

    return(
        <div className="transaction">
            <h3>New Transaction</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleOnChange} name="date" placeholder="Date"/>
                <input type="text" onChange={handleOnChange} name="description" placeholder="Description"/>
                <input type="text" onChange={handleOnChange} name="category" placeholder="Category"/>
                <input type="text" onChange={handleOnChange} name="amount" placeholder="Amount"/>
                <button type="submit">SUBMIT</button>
            </form>
        </div>  
    )
}



export default Transaction;