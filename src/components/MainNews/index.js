import React from 'react'
import classes from './MainNews.module.css'

const MainNews = props => 
    <section className = {classes.MainNews}>
        
        <h1>Последние статьи</h1>
        <div className = {classes.newsWrap}>
            {Array(3).fill('').map(_ => 
            <div className = {classes.news}>
                <div ></div>
                <a href = '#1' >Topic </a>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere efficitur libero eget semper. Cras vitae volutpat elit. Proin dapibus mollis risus.</p>    
            </div>)}
        </div>
    </section>

export default MainNews    