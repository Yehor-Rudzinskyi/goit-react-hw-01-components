import React from 'react';
import PropTypes from 'prop-types';

const TransItems = ({ items }) => {
    return (
        <tbody>
            {items && items.map(({ id, type, amount, currency }) => (<tr key={id}>
                <td style={{fontWeight:'bold'}}>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>))}
        </tbody>
    )
}

TransItems.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    })).isRequired
} 

export default TransItems;