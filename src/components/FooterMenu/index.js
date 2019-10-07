import React from 'react'
import classes from './FooterMenu.module.css'

const linkHeaderMenu = [
    {name: 'Наша продукция', href: '#!'}, 
    {name: 'Стытьи о товарах', href: '#!'}, 
    {name: 'Фото изделий', href: '#!'}, 
    {name: 'Где купить', href: '#!'}, 
    {name: 'Контакты', href: '#!'}, 
    {name: 'Оптовый прайс-лист', href: '#!'}]

const FooterMenu = props => 
    <nav className = {classes.FooterMenu}>
        <h1>Меню</h1>
        <ul className = {classes.linkList}>
            {linkHeaderMenu.map(item =>
            <li className = {classes.link}>
                <a href = {item.href}>{item.name}</a>
            </li> 
            )}
        </ul>
    </nav>

export default FooterMenu   