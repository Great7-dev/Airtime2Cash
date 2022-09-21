import React from 'react'
import {Landingpagestyle} from './Landingpagestyle'
import Navbar from '../components/navbar/Navbar'
import Started from '../components/started/started'
import Card from '../components/card/card'
import Signup from '../components/signup/Signup'
import Text from '../components/text/text'
import Slide from '../components/slide/slide'
import Footer from '../components/footer/footer'

const Landingpage = () => {
    return (
        <Landingpagestyle>
            <Navbar />
            <Started/>
            <Card/>
            <Signup/>
            <Text/>
            <Slide/>
            <Footer/>
        </Landingpagestyle>
    )
}


export default Landingpage