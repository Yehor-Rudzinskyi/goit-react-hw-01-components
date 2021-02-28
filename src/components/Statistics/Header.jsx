import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
    return (
        <>
            {title && <h2 style={{marginBottom: 15}}>{title}</h2>}
        </>
    )
};

Header.defaultProps = {
    title: ''
};

Header.propTypes = {
    title: PropTypes.string
};

export default Header;