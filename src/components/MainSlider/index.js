import React from 'react'
import classes from './MainSlider.module.css'

const MainSlider = props => 
    <section className = {classes.MainSlider}>
        <div className = {classes.title}>
            <h1>Lorem ipsum</h1>
            <h2>Duis posuere efficitur libero eget semper.</h2>
        </div>
        <div className = {classes.toggle}>
            <span>&#60;</span>
            <span>&#62;</span>
        </div>
        <div className = {classes.details}>
            <button>Подробнее</button>
        </div>
        <div className = {classes.radio}>
            <input type = "radio" />
            <input type = "radio" />
            <input type = "radio" />
        </div>
    </section>

export default MainSlider    