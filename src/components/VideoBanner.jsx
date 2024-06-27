import React from 'react'
import video from '../assets/videoIntro.mp4'

export default function VideoBanner({ mobile }) {
    return (
        <section>
            <div className='hidden md:block'>
                <video width="100%" controls={false} loop autoPlay muted>
                    <source src={video} type="video/mp4"/>
                    {console.log(video)}
                </video>
            </div>
            <div className='md:hidden'>
                <img src={mobile} className='w-full h-auto' />
            </div>
        </section>
    )
}