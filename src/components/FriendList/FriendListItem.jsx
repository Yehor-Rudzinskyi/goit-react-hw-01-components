import React from 'react';
import { createUseStyles } from 'react-jss'
import PropTypes from 'prop-types'; 

const useStyles = createUseStyles({
    friendList: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        marginBottom: 50,
    },
    item: {
        display: 'flex',
        alignItems: 'center',

        width: 370,
        padding: 10,
       

        backgroundColor: "#fff",
        boxShadow: '0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)',
        borderRadius: "0px 0px 4px 4px",

        '&:not(:last-child)': {
            marginBottom: 10,
        }
    },
    avatar: {
        backgroundColor: '#aaaaaa',
        marginRight: 10,
    },

    status: {
        height: 20,
        width: 20,
        marginRight: 5,
        borderRadius: '50%',
        border: '1px solid #aaaaaa',
    
    },
    name: {
        fontWeight: 'bold',
        fontFamily: 'serif'
    }

})

const FriendListItem = ({ friends }) => {
   
    const classes = useStyles()
    return (
        <ul className={classes.friendList}>
            {friends && friends.map(({ id, isOnline, avatar, name }) => (<li key={id} className={classes.item}>
                <span className={classes.status} style={{ backgroundColor: isOnline ? 'green' : 'red' }}>{isOnline}</span>
                <img className={classes.avatar} src={avatar} alt="Avatar" width="48" />
                <p className={classes.name}>{name}</p>
            </li>))}
        </ul>
    )
};

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })).isRequired
} 

export default FriendListItem;