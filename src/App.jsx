
import React from 'react';
import Profile from './components/Profile/Profile'
import Statistics from './components/Statistics/Statistics'
import FriendList from './components/FriendList/FriendList'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'

const App = () => (
    <>
        <Profile />
        <Statistics />
        <FriendList />
        <TransactionHistory />
    </>
)
export default App;