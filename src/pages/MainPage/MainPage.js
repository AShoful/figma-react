import React from 'react'
import classes from './MainPage.module.css'

import Slider from '../../components/Slider/Slider'
import Advantages from '../../components/Advantages/Advantages'
import Contact from '../../components/Contact/Contact'
import Welcome from '../../components/Welcome/Welcome'
import Order from '../../components/Order/Order'


const MainPage = props => 
    <main className = {classes.Main}>
        <Order />
        <Slider />
        <Advantages />
        <Contact />
        <Welcome />
    </main>

export default MainPage    