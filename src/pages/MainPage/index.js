import React from 'react'
import classes from './MainPage.module.css'

import Slider from '../../components/Slider/Slider'
import Advantages from '../../components/Advantages/Advantages'
// import Contact from '../Contact/Contact'
import Welcome from '../../components/Welcome/Welcome'


const MainPage = props => 
    <main className = {classes.Main}>
        <Slider />
        <Advantages />
        {/* <Contact /> */}
        <Welcome />
    </main>

export default MainPage    