import React, {useState} from "react";

function NewTransaction({submittedData, transactions}){
    const [newTransaction, setNewTransaction] = useState({date:"", description:"", category:"", amount:""})
    
    function handleOnChange(e){
        e.preventDefault()
        // const{date, description, category, amount} = e.target
        setNewTransaction({...newTransaction, [e.target.name]:e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch("http://localhost:3000/transactions", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(newTransaction),
        })
            .then((r) => r.json())
            .then((data) => submittedData(data))
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



export default NewTransaction;