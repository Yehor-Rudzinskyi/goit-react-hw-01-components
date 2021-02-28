import React from 'react';
import { createUseStyles } from 'react-jss'
import PropTypes from 'prop-types';

const useStyles = createUseStyles({
    stats: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-evenly'
      
    },
    items: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#e8e8ea',
        border: '1px solid #aaaaaa',
        padding: '10px 37px'
    },
    quantity: {
     fontWeight: 'bold'   
    },
    label: {
        color: '#aaaaaa'
    }
})

const Stats = ({ followers, views, likes }) => {
    const classes = useStyles()
    return (
        <ul className={classes.stats}>
            <li className= {classes.items}>
                <span className={classes.label}>Followers</span>
                <span className={classes.quantity}>{followers}</span>
            </li>
            <li className= {classes.items}>
                <span className={classes.label}>Views</span>
                <span className={classes.quantity}>{views}</span>
            </li>
            <li className= {classes.items}>
                <span className={classes.label}>Likes</span>
                <span className={classes.quantity}>{likes}</span>
            </li>
        </ul>
    )
}

Stats.propTypes = {
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
};

export default Stats;