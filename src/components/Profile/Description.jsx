
import React from 'react';
import { createUseStyles } from 'react-jss'
import PropTypes from 'prop-types';

const useStyles = createUseStyles({
    description: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '30px 0px',
    },
    avatar: {
        width: 150,
        borderRadius: '50%',
        backgroundColor: '#d3dfe5',
        marginBottom: 15
    },
    name: {
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'serif'
    },
    text: {
        color:  '#aaaaaa'
    }
})

const Description = ({ name, tag, location, avatar }) => {
    const classes = useStyles()
    return (
        <div className={classes.description}>
            <img
                src={avatar}
                alt="Аватар пользователя"
                className={classes.avatar}
            />
            <p className={classes.name}>{name}</p>
            <p className= {classes.text}>{tag}</p>
            <p className= {classes.text}>{location}</p>
        </div>
    )
};

Description.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
};

export default Description;