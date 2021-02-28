import React from 'react';
import data from '../../data/statistical-data.json'
import Header from './Header'
import StatItems from './StatItems'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  statistics: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    marginBottom: 50,
  }

})

const Statistics = () => {
    const classes = useStyles()
  return (
    <section className={classes.statistics}>
      <Header title='Upload stats' />
      <StatItems data={data} />
    </section>
  )
};

export default Statistics;