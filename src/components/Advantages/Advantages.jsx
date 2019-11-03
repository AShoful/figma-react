import React from 'react';
import classNames from 'classnames';

import styles from './Advantages.module.css';

const advantages = [
    {   title: 'Власне виробництво \n повного циклу', 
        description: `- 3 стадії подрібнення \n - Сушка \n - Гранулювання \n - Охолодження \n - Просіювання \n - Фасування \n - Зберігання`, 
        imageSrc: "./img/manufacturing.png" 
    },
    {   title: 'Стабільність споживчих \n характеристик', 
        description: 'Пропонуємо пелети тільки власного \n виробництва! 8 років нашого досвіду \n підтверджують \n незмінні показники якості, для того \n щоб Ваш котел працював стабільно \n без надокучливих \n переналаштувань.', 
        imageSrc: "./img/medal.png" 
    },
    {   title: ' Запас пелет поруч \n з Вами', 
        description: 'Нас легко побачити на власні очі, \n взяти зразок і перевірити якість. Ми \n тут постійно. Нас не \n треба буде завтра шукати:) На наших \n власних складах завжди готова \n продукція для Вас.', 
        imageSrc: "./img/warehouse.png" 
    },
    {   title: 'Гарантуємо поставки на весь \n опалювальний сезон', 
        description: 'Гарантія поставок відповідно до \n домовленостей \n Ми приймаємо тільки ті замовлення,\n які нам під силу! Впевнитись легко:)', 
        imageSrc: "./img/warranty.png" 
    },
    {   title: 'Зручна та швидка \n доставка', 
        description: 'Доставимо пелети в межах Києва і \n області партіями від 15 кг до 22 т. Лише \n відповідальні і \n ввічливі водії:)', 
        imageSrc: "./img/Vector (5).png" 
    }
]

const Advantages = props =>
    <div  className = {styles.Advantages} >
        <div className = {styles.wrap}>
            {advantages.map((item, i) => 
                <div className = {classNames(styles.advantage, {[styles.active]:true})} key = {i}>
                    <img src={require(`${item.imageSrc}`)} alt ={`рисунок ${i}`}/>
                    <h3>{item.title}</h3>
                    <div>{item.description} </div>
                </div>)}
        </div>
    </div>;

export default Advantages;
 