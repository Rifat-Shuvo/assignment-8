import React from 'react';

const Singdoncard = ({donatecard}) => {
    //console.log(donatecard);
    const {id, photo, title,description} = donatecard

    const handleAddtoDonate = ()=>{
        //console.log(donatecard);
        const addedDonatesArray = []
        
        const donatedItems = JSON.parse(localStorage.getItem('donated'))

        if (!donatedItems) {
            addedDonatesArray.push(donatecard)
            localStorage.setItem('donated',JSON.stringify(addedDonatesArray))
            alert('already added')
        } else {

            const isExist = donatedItems.find(donatecard=>donatecard.id == id)
            if (!isExist) {
                addedDonatesArray.push(...donatedItems,donatecard)
                localStorage.setItem('donated',JSON.stringify(addedDonatesArray))
                alert('already added')} 
            // } else {
            //    alert('Error') 
            // }

            
        }
    }

    return (
        <div className='px-5'>
            <div className='my-6 py-5'>
                <img src={photo} alt="" className='w-full h-[60vh] rounded-none' />
                <button onClick={handleAddtoDonate} className='-mt-12 btn'>Donate Now</button>
            </div>
            <div>
                <h1 className='text-5xl font-bold'>{title}</h1>
                <p className='my-5'>{description}</p>
            </div>
        </div>
    );
};

export default Singdoncard;