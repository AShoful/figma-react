import React from 'react'
import classes from './HeaderMenu.module.css'

const linkHeaderMenu = [
    {name: '0 нас', href: '#!'}, 
    {name: 'Продукция', href: '#!'}, 
    {name: 'Новости', href: '#!'}, 
    {name: 'Где купить', href: '#!'}, 
    {name: 'Контакты', href: '#!'}, 
    {name:'Оптовый прайс-лист', href: '#!'}]
const HeaderMenu = props => 
    <nav className = {classes.HeaderMenu}>
        <ul className = {classes.linkList}>
            {linkHeaderMenu.map((item, i) =>
            <li className = {classes.link} key = {i}>
                <a href = {item.href}>{item.name}</a>
            </li> 
            )}
        </ul>
    </nav>

export default HeaderMenu    