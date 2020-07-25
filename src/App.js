import React from 'react';
import './App.css';
import {Header} from './components/Header.js'
import {Balance} from './components/Balance.js'
import {AccountSummary} from './components/AccountSummary';
import {TransactionHistory} from './components/TransactionHistory';
import {AddTransaction} from './components/AddTransaction';
import {GlobalProvider} from './components/context/GlobalState'
function App(){
  return(
    <GlobalProvider>
       <Header />
       <div className="container">
        <Balance />
        <AccountSummary/>
        <TransactionHistory></TransactionHistory>
        <AddTransaction></AddTransaction>
       </div>       
    </GlobalProvider>
  
  
  );
  
  }
  
  export default App;




