import React from 'react'
import VideoBanner from '../components/VideoBanner'
import leomourabannermobile from '../assets/leomourabannermobile.jpg'
import Accordion from '../components/Accordion'
import { accordionItems } from '../utils/utils'

const Home = () => {
    return (
        <section>
            <VideoBanner mobile={leomourabannermobile} />
            <div className='w-full px-5 flex flex-col items-center justify-center mt-10 gap-10 lg:mt-20'>
                <h1 className='text-betpink font-poppins text-lg text-center lg:text-2xl lg:tracking-widest'>Perguntas frequentes sobre a Betfive</h1>
                <Accordion items={accordionItems} />
            </div>

        </section>
    )
}

export default Home