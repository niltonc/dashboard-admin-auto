import React from 'react'

import '../buttons.scss'

import HomeIcon from '../../../assets/images/slider/home'

function ButtonRoom ({onClick, title}){
    return(

        <button className='buttonRoom' onClick={onClick}title={title}>
            <div className='buttonIcon'>
            <HomeIcon/>
            </div>
            <div className='buttonTitle'>
            <p>{title}</p>
            </div>
        </button>
)}

export default ButtonRoom;