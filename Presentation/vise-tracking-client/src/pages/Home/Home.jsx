import React from 'react'
import Slider from '../../components/Slider/Slider'
import Countries from '../../components/Countries/Countries'
import Appointments from '../../components/Appointments/Appointments'

const Home = () => {
    return (
        <div className='home'>
            <Slider />
            <Countries />
            <Appointments />
        </div>
    )
}

export default Home