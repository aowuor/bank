import React from "react";

function Statement({transactions}){
    const eachTransaction = transactions.map((transaction) => {
        return (
            <tr>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.category}</td>
                <td>{transaction.amount}</td>
            </tr>
        )
    })
    return(
        <div className="statement">
            <div className="statement_header">
                <h3>Bank Statement</h3>
                <select name="" id="">
                    <option>All</option>
                    <option>Less than 3</option>
                    <option>More than 3</option>
                </select>

            </div>
            
            <table id="customers">
                <tr >
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                  </tr>
                  {eachTransaction}
            </table>
        </div>
    )
}

export default Statement;