import React from 'react'
import MainSlider from '../MainSlider/'
import MainAboutCompany from '../MainAboutCompany/'
import MainGoods from '../MainGoods'
import classes from './Main.module.css'
import MainDistributors from '../MainDistributors'
import MainNews from '../MainNews'

const Main = props => 
    <main className = {classes.Main}>
        <MainSlider />
        <MainAboutCompany />
        <MainGoods />
        <MainDistributors />
        <MainNews />
    </main>

export default Main    