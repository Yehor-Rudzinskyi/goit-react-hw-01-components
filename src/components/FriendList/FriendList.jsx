import React from 'react';
import friends from '../../data/friends.json'
import FriendListItem from './FriendListItem'

const FriendList = () => (
    <>
        <FriendListItem friends = {friends} />
    </>
)

export default FriendList