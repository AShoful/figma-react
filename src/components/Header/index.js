import React from 'react'
import classes from './Header.module.css' 
import HeaderMenu from '../HeaderMenu/'

const Header = (props) => 
    <header className = {classes.Header}>
        <div className={classes.top}>
            <p className = {classes.top_adress}>
            г.Киев, Украина
            </p>
            <p className = {classes.top_language}>
                <a href = "#!" className = {classes.top_link} >RU</a>
                <span className = {classes.top_separator}>|</span>
                <a href = "#!" className = {classes.top_link} >UKR</a>
            </p>
        </div>
        <div className = {classes.bottom}>
            <div className = {classes.logo}></div>
            <HeaderMenu />
        </div>
    
       
    </header>

export default Header    