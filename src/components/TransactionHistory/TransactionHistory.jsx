import React from 'react';
import { createUseStyles } from 'react-jss'
import transactions from '../../data/transactions.json';
import TransItems from './TransItems';
import TabHead from './TabHead'
import './table.css'

const useStyles = createUseStyles({
    transactionHistory: {
        width: 600,
        marginRight: 'auto',
        marginLeft: 'auto'
   }
})

const TransactionHistory = () => {
    const classes = useStyles()
    return (
        <table className={classes.transactionHistory}>
            <TabHead />
            <TransItems items={transactions} />
        </table>
    )
};

export default TransactionHistory;  