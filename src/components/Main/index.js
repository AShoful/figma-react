import React from 'react'
// import MainSlider from '../MainSlider/'
// import MainAboutCompany from '../MainAboutCompany/'
// import MainGoods from '../MainGoods'
import classes from './Main.module.css'
// import MainDistributors from '../MainDistributors'
// import MainNews from '../MainNews'
import Slider from '../Slider/Slider'
import Advantages from '../Advantages/Advantages'
import Contact from '../Contact/Contact'
import Welcome from '../Welcome/Welcome'

const Main = props => 
    <main className = {classes.Main}>
        <Slider />
        <Advantages />
        <Contact />
        <Welcome />
    </main>

export default Main    