
import './App.css';
import React, {useState, useEffect} from "react"
import Details from './components/Details';
import Statement from './components/Statement';
import NewTransaction from './components/NewTransaction';

function App() {
  const [transactions, setTransactions] = useState([])

  
  useEffect(() => {
    fetch("http://localhost:3000/transactions")
    .then((res) => res.json())
    .then((data) => setTransactions(() => data))
  }, [])

  function handleAddToStatement(newTransaction){
    setTransactions([...transactions, newTransaction])
  }
  
  return (
    <div className="App">
      <div className="header">
        <h1>Bank of Flatiron</h1>
      </div>
      <Details />
      <NewTransaction transactions={transactions} submittedData={handleAddToStatement} />
      <Statement transactions={transactions}
      />
    </div>
  );  
}

export default App;
