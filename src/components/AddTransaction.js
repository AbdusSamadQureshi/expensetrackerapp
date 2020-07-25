import React, {useState , useContext} from 'react'
import {GlobalContext} from './context/GlobalState';

export const AddTransaction = () => {

        const [description,setDescription] =  useState('');
        const [transactionamount, setTransactionamount] = useState(0);

   

        const {addTransaction} = useContext(GlobalContext);

        const onSubmit = e =>{

            e.preventDefault();


           
            const newTransaction = {

                id : Math.floor(Math.random()* 100000000),
                description,
                transactionamount: +transactionamount

            }
           
            addTransaction(newTransaction);
        }

        


    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control"> 
                <label htmlFor="description">
                    Description
                </label>
                <input type="text"               
                placeholder="Details of Transaction"  
                value = {description}
                onChange={(e) => setDescription(e.target.value)}
            >
                </input>
                </div>
                <div className="form-control">
                        <label htmlFor="transactionamount">
                            Transaction Amount
                        </label>
                        <input type="number"                      
                        placeholder="Enter transaction Amount"    
                        value = {transactionamount}
                        onChange={(e) => setTransactionamount(e.target.value)}>

                        </input>
                 </div>
                 <button className ="btn">Add Transaction</button>
            </form>            
        </div>
    )
}
