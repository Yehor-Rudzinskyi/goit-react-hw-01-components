import React from 'react'
import { createUseStyles } from 'react-jss'
import color from './rundomeColor'
import PropTypes from 'prop-types';

const useStyles = createUseStyles({
    statList: {
        display: 'flex',
            
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px 20px',
        border: '1px solid #aaaaaa',
        color: '#fff'
    }

});


const StateItems = ({ data }) => {
    const classes = useStyles()
    return (
        <ul className={classes.statList}>
            {data && data.map(item => (
                <li key={item.id} style={{ backgroundColor: color() }} className={classes.item}>
                    <span >{item.label}</span>
                    <span >{item.percentage}%</span>
                </li>))
            }
        </ul>
    )
};

StateItems.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })).isRequired
} 

export default StateItems;