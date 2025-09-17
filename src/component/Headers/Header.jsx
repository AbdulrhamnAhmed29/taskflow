import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='  header flex flex-row justify-center items-center' id='home'>

            <div className='text-center'>
                <h2 className='text-white m-5 text-5xl font-bold'>Task <span>Flow</span></h2>
                <h2 className='text-white text-3xl p-3 '>Complete your <span>tasks</span> in no time</h2>
                <a href="#pricing">                <button className='text-white text-2xl btn-st '>Start Now</button>
                </a>
            </div>
        </div>
    )
}

export default Header
