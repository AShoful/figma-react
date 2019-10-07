import React from 'react'
import classes from './MainAboutCompany.module.css'

const MainAboutCompany = props => 
    <section className = {classes.MainAboutCompany}>
        <div className = {classes.about}>
            <h1>О Компании</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere efficitur libero eget semper. Cras vitae volutpat elit. Proin dapibus mollis risus, eget commodo justo maximus non. Suspendisse sed tellus mi. Donec sem nulla, tristique ut libero eu, lacinia viverra orci. Vivamus ac porta arcu. Vestibulum a volutpat ex, ac molestie purus. Donec consectetur tortor nec molestie tempor. Aenean tristique velit ligula, eget egestas tortor maximus in.Vestibulum a volutpat ex, ac molestie purus. Donec consectetur tortor nec molestie tempor. Aenean tristique velit ligula, eget egestas tortor maximus in.</p>
        </div>
        <div className = {classes.logoWrap}>
            <div className = {classes.logo}></div>
        </div>
    </section>

export default MainAboutCompany    