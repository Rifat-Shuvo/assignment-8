import React, { useEffect, useState } from 'react';
import Donate from './Donate';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    // const [donations, setDonations] = useState([])

    // useEffect(()=>{
    //     fetch('donation.json')
    //     .then(res=> res.json())
    //     .then(data => setDonations(data))
    // })
const alldonation = useLoaderData()
//console.log(alldonation);
    return (
        <>

        <div>
            <Donate donate={alldonation}></Donate>
        </div>
        </>
    );
};

export default Home;