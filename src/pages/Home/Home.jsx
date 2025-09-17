import React from 'react'
import Header from '../../component/Headers/Header'
import Features from '../../component/Features/Features'
import Pricing from '../../component/Pricing/Pricing'
import Testimonials from '../../component/Testimonial/Testimonials'
import ScrollToTop from '../../component/ScrollTop/Scroll'

function Home() {
    return (
        <div className=' home'>
            <ScrollToTop />
            <Header />
            <hr />
            <hr />

            <Features />
            <hr />
            <hr />
            <Testimonials />
            <hr />
            <hr />
            <Pricing />
        </div>
    )
}

export default Home
