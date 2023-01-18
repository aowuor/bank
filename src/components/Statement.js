import React, {useState} from "react";


function Statement({transactions}){
    const[search, setSearch] = useState("")
    

    function getSearchData(e){
        setSearch(e.target.value)
    }
 
    const eachTransaction = transactions.map((transaction) => {
        return (
            <thead>
            <tr key={transaction.id}>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.category}</td>
                <td>{transaction.amount}</td>
            </tr>
            </thead>
        )
    })
    return(
        <div className="statement">
            <div className="statement_header">
                <h3>Bank Statement</h3>
                <form>
                    <input type="text" placeholder="Search Category" name="category" onChange={getSearchData} />
                </form>

            </div>
            
            <table id="customers">
                <thead>
                <tr >
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                  </tr>
                  </thead>
                  {eachTransaction}
            </table>
        </div>
    )
}

export default Statement;