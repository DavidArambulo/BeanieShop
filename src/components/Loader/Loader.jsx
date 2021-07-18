import React from 'react'
import beanie from '../../img/beanie.svg'

const Loader = () => {
    return (
        <div className='loader-container'>
            <div className='loader'>
                <img src={beanie} alt='loader' />
            </div>
        </div>
        
    )
}

export default Loader
