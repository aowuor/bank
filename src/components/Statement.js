import React, {useState} from "react";


function Statement({transactions}){
    const[search, setSearch] = useState("")
    
    function searchData(e){
        setSearch(e.target.value)
    }
   
   
    const eachTransaction = transactions.filter((transaction) => transaction.category.toLowerCase().includes(search)).map((transaction) => {
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
                    <input type="text" placeholder="Search Category" name="category" onChange={searchData} />
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