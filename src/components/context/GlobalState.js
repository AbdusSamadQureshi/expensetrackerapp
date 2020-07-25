import React,{createContext,useReducer} from 'react'
import AppReducer from './AppReducer'

const initialState = {
transactions :[
{id:1,description:"Income 1",transactionamount:1000},
{id:2,description:"Expense 1",transactionamount:-100},
{id:3,description:"Income 2",transactionamount:2000},
{id:4,description:"Expense 2",transactionamount:-500}

]

}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {

    const[state, dispatch] = useReducer(AppReducer, initialState)


    //Action
    function deleteTransaction(id){

        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
     }

     function addTransaction(transaction){

        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
     }

    return (
            <GlobalContext.Provider value= {
                {
                    transactions: state.transactions,
                    deleteTransaction,
                    addTransaction
                }
                

            }>
            {children}
       </GlobalContext.Provider>




    )

}