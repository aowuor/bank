import React from "react";

function Transaction(){
    return(
        <div className="transaction">
            <h3>New Transaction</h3>
            <form action="">
                <label for="">Amount</label>
                <input type="text"/>
                <button>CREDIT</button>
                <button>DEBIT</button>
            </form>
        </div>  
    )
}

export default Transaction;