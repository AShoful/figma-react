import React from 'react';

import styles from './Welcome.module.css';

const Welcome = props =>
    <div  className = {styles.Welcome} >
        <div className = {styles.title}>Завітайте до нас!</div>
        <div className = {styles.wrap}>
            <div className = {styles.address}>
                <button >
                     Прокласти<br/>маршрут
                </button>
                <div> с. Погреби, вул.<br/>Промислова, 12<br/>Київська обл.,<br/>Броварський р-н.</div>
            </div>
            <div className = {styles.map}></div>
        </div>
    </div>;

export default Welcome;
