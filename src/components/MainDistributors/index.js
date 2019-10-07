import React from 'react'
import classes from './MainDistributors.module.css'

const MainDistributors = props => 
    <section className = {classes.MainDistributors}>
        
            <h1>Официальные дистрибьюторы </h1>
            <div className = {classes.logoWrap}>
                <div className = {classes.logo}></div>
            </div>
            <div className = {classes.about}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere efficitur libero eget semper</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        
    </section>

export default MainDistributors    