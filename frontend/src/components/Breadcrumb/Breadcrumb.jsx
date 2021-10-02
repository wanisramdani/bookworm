import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles( theme => ({
    breadcrumb: {
        height: '20px',
        gridRow: '1/2',
        gridColumn: '1/12',
        textAlign: 'right',
        backgroundColor: '#d8d4d4',
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
