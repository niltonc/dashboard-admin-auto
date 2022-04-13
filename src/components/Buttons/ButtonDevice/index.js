import React from 'react'

import '../buttons.scss'

import HomeIcon from '../../../assets/images/slider/home'

function ButtonDevice ({onClick, title, subtitle}){
    return(

        <button className='buttonDevice' onClick={onClick} title={title} subtitle={subtitle}>
            
            <div className='iconDevice'>
            <HomeIcon/>
            </div>

            <div className='viewTitleDevice'>
            
            <p className='titleDevice'>
            {title}
            </p>

            <p className='subtitleDevice'>
            {subtitle}
            </p>
            
            </div>

        </button>
)}

export default ButtonDevice;