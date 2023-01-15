import React from "react";

function Statement({transactions}){
    const dayTransaction = transactions.map((transaction) => {
        return (
            <tr>
                <td>{transaction.date}</td>
                <td>{transaction.credit}</td>
                <td>{transaction.debit}</td>
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
                    <th>Credit</th>
                    <th>Debit</th>
                  </tr>
                  {dayTransaction}
            </table>
        </div>
    )
}

export default Statement;