import React from 'react'
import {Landingpagestyle} from './Landingpagestyle'
import Started from '../components/started/started'
import Card from '../components/card/card'
import Section2 from '../components/Section-2/Section-2'
import Text from '../components/text/text'
import Slide from '../components/slide/slide'
import Footer from '../components/footer/footer'
import Navbar from "../components/NavBar/Navbar"
// localStorage.setItem('userName', 'Michael')

const Landingpage = () => {
    const handleIMGcLICK = (e) => {
        e.preventDefault()
        console.log('clicked')
    }

// const userName = localStorage.getItem('userName')

    return (
        <Landingpagestyle>
            <Navbar link={'https://i.pinimg.com/564x/e9/39/f7/e939f772951d80f1811a5b6c2b16089c.jpg'} clickEvent={handleIMGcLICK}/>
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