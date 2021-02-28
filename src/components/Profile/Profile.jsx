import React from 'react';
import user from '../../data/user.json';
import Description from './Description';
import Stats from './Stats';
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    profile: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        marginTop : 20,
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: 50,

        
        width: 370,

        backgroundColor: "#fff",
        boxShadow: '0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)',
        borderRadius: "0px 0px 4px 4px"
    }
});

const Profile = () => {
  const classes = useStyles()
    return (
        <div className={classes.profile}>
            <Description
                name={user.name}
                tag={user.tag}
                avatar={user.avatar}
                location={user.location} />
            <Stats
                followers={user.stats.followers}
                views={user.stats.views}
                likes={user.stats.likes} />

        </div>
    )
};

export default Profile;