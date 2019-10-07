import React from 'react'
import classes from './Footer.module.css' 
import FooterMenu from '../FooterMenu'


const Footer = (props) => 
    <footer className = {classes.Footer}>
        <div className = {classes.wrap}>
            <FooterMenu />
            <div className = {classes.search}>
                <input type = 'text' placeholder = "Поиск"/>
                <h2>© Matratex™ </h2>
                <h2>2019 </h2>
                <p>Developed by </p> 
                <p>Stubbs</p>
            </div>    
            <div className = {classes.contact}>
                <h2>Контакты</h2>
                <p>Пн-Сб 10:00 - 18:00 </p> 
                <p>+38(050)-123-45-67</p>
                <p>example@mail.com</p> 
                <div className = {classes.wrapper}>
                    <div/><div/><div/>
                </div>    
            </div>
        </div>   
    </footer>

export default Footer    