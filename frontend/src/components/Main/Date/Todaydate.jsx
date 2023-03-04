import React from 'react'
import { useState, useEffect } from 'react';
import useStyles from './Styles';

const Todaydate = () => {
    const classes = useStyles()
    const [dateState, setDateState] = useState(new Date())
    const hijriDate = new Intl.DateTimeFormat('ar-SE-u-ca-islamic', {day: 'numeric', month: 'long',weekday: 'long',year : 'numeric'}).format(Date.now());
    /* We are using 'new Date' in 'simplifyDate' to avoid rerending date component */
    const simplifyDate = dateState.toISOString().split('T')[0].replaceAll('-', '/') /* change me to Local */
    const displayDate = hijriDate +' ، الموافق لـ '+ simplifyDate
    const currentTime = dateState.toLocaleTimeString('ar-SE',{
        /* http://www.healthstream.com/hlchelp/Administrator/Classes/HLC_Time_Zone_Abbreviations.htm */
        timeZone: 'Asia/Kuwait',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric', 
        hour12: true,
    })
    const displayTime = currentTime +  ' بتوقيت مكة المكرمة  ' 

    useEffect(() => {
        setInterval(() => setDateState(new Date()), 1000);
    }, [])

    return (
        <>
            <div className={classes.date}>
                <div className={classes.todayDate}> 
                        {displayDate}
                </div>
                <div className={classes.timezone}>
                    {displayTime}                    
                </div>
            </div> 
        </>
    )
}

export default Todaydate
