import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles( theme => ({
    breadcrumb: {
        gridRow: '1/2',
        gridColumn: '1/12',
        textAlign: 'right',
        backgroundColor: 'gray',
    },
}) );

const Breadcrumb = () => {
    const classes = useStyle()
    return (
        <div className={classes.breadcrumb}>
            <div className={classes.text}>
                {' books < home'}
            </div>
        </div>
    )
}

export default Breadcrumb
