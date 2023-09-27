import React, { useEffect, useState } from 'react';
import Piecharts from './Piecharts';

const Statistics = () => {
    const [nothing, setNothing]=useState(true)
    useEffect(()=>{
        const donatedItems = JSON.parse(localStorage.getItem('donated'))
        //let total = donatedItems.length 
        //console.log(total);
        if (donatedItems == null) {
            setNothing('Nothing to show in statistics')
        }
        else{
            setNothing(false)
        }
    },[])
    return (
        <div>
            {nothing? <p className='h-[80vh] flex justify-center items-center text-4xl font-medium'>{nothing}</p>: <Piecharts></Piecharts>

            }
        </div>
    );
};

export default Statistics;