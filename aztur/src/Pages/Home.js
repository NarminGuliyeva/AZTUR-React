import React from 'react'
import '../css/home.css'
import Tours from '../Components/Tours'
import Whyus from '../Components/Whyus'
import Direction from '../Components/Direction'
import Special_offer from '../Components/Special_offer'
import Video from '../Components/Video'
import Hotels from '../Components/Hotels'
import Layout from './Layout'

function Home() {
    return (
        <>
            <Layout>
                <Tours />
                <Whyus />
                <Direction />
                <Special_offer />
                <Video />
                <Hotels />
            </Layout>
        </>
    )
}

export default Home