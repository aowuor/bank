
import './App.css';
import React, {useState, useEffect} from "react"
import Details from './components/Details';
import Statement from './components/Statement';
import Transaction from './components/Transaction';

function App() {
  const [transactions, setTransactions] = useState([])

  
  useEffect(() => {
    fetch("http://localhost:3000/transactions")
    .then((res) => res.json())
    .then((data) => setTransactions(() => data))
  }, [])

  console.log(transactions)
  function handleAddToStatement(params){
    setTransactions(params)
  }


  return (
    <div className="App">
      <div className="header">
        <h1>Bank of Flatiron</h1>
      </div>
      <Details />
      <Transaction transactions={transactions} submittedData={handleAddToStatement} />
      <Statement transactions={transactions}/>
      
    </div>
  ); 
}

export default App;


  //   { 
  //     id: 1,
  //     date: "2019-12-01",
  //     description: "Paycheck from Bob's Burgers",
  //     category: "Income",
  //     amount: 1000
  //   },
  //   {
  //   id: 1,
  //   date: "2019-12-01",
  //   description: "Paycheck from Bob's Burgers",
  //   category: "Income",
  //   amount: 1000
  // }