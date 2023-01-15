
import './App.css';
import Details from './components/Details';
import Statement from './components/Statement';
import Transaction from './components/Transaction';

function App() {
  const customer = {
    AcName: "John Doe", 
    AcNumber: 100000454749, 
    transactions:[
      {date: "01/01/2000", debit: 20000, credit: 5000},
      {date: "01/03/2000", debit: 200000, credit: 50000},
      {date: "01/06/2000", debit: 3000, credit: 7000},
    ],
  }
  return (
    <div className="App">
      <div class="header">
        <h1>Bank of Flatiron</h1>
      </div>
      <Details name={customer.AcName} number={customer.AcNumber}/>
      <Transaction />
      <Statement transactions={customer.transactions}/>
    </div>
  );
}

export default App;
