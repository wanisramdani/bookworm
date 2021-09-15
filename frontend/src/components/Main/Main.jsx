import React from 'react'

import { Todaydate } from '..'
import useStyles from './Styles';

const Main = () => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.siteName}> صفحة الصحيحين البخاري و مسلم </div>
            <div className={classes.sns}>safhatalssahihin</div>
            <Todaydate />
        </>
    )
}

export default Main
