import React from 'react'
import {Landingpagestyle} from './Landingpagestyle'
import Started from '../components/started/started'
import Card from '../components/card/card'
import Section2 from '../components/Section-2/Section-2'
import Text from '../components/text/text'
import Slide from '../components/slide/slide'
import Footer from '../components/footer/footer'
import Navbar from '../components/NavBar/NavBar'
// import CardT from './updateprofile/CardT'
// localStorage.setItem('userName', 'Michael')

const Landingpage = () => {
    return (
        <Landingpagestyle>
            <Navbar/>
            <Started/>
            <Card/>
            <Section2/>
            <Text/>
            <Slide/>
            <Footer/>
        </Landingpagestyle>
    )
}


export default Landingpage