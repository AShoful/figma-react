import React from 'react'
import classes from './MainGoods.module.css'


const MainGoods = props => 
    <section className = {classes.MainGoods}>
        <div className = {classes.title}>
            <h1>Наша продукция </h1>
        </div>
        <div className = {classes.img}>
            <div className = {classes.item1}></div>
            <div className = {classes.item2}></div>
            <div className = {classes.item3}></div>
            <div className = {classes.item4}></div>
            <div className = {classes.item5}></div> 
            {/* <img src={require('../../img/png/new1.png')} /> */}
        </div>
    </section>

export default MainGoods    