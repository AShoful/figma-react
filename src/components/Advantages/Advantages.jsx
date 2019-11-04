import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { connect } from 'react-redux';

import styles from './Advantages.module.css';

import manufacturing from './img/manufacturing.png';
import medal from './img/medal.png';
import warehouse from './img/warehouse.png'; 
import warranty from './img/warranty.png';
import deliveryTruck from './img/delivery-truck.png'

const ADVANTAGES = [
    {
        texts: {
            ua: { title: 'Власне виробництво\nповного циклу',
                description: `- 3 стадії подрібнення\n- Сушка\n- Гранулювання\n- Охолодження\n- Просіювання\n- Фасування\n- Зберігання` },
            ru: { title: 'Собственное производство\nполного цикла',
                description: `- 3 стадии измельчения\n- Сушка\n- Гранулирование\n- Охлаждение\n- Просеивание\n- Фасовка\n- Хранение` }
        },
        imageSrc: manufacturing
    },
    {
        texts: {
            ua: { title: 'Стабільність споживчих\nхарактеристик',
                description: `Пропонуємо пелети тільки власного\nвиробництва! 8 років нашого досвіду
                підтверджують\nнезмінні показники якості, для того,\nщоб Ваш котел працював стабільно\nбез надокучливих\nпереналаштувань.` },
            ru: { title: 'Стабильность потребительских\nхарактеристик',
                description: `Предлагаем пеллеты только собственного\nпроизводства! 8 лет нашего опыта
                подтверждают неизменные показатели качества, для того,\nчтобы Ваш котел работал стабильно\nбез навязчивых перенастроек.` }
        },
        imageSrc: medal
    },
    {
        texts: {
            ua: { title: ' Запас пелет поруч\nз Вами',
                description: `Нас легко побачити на власні очі,\nвзяти зразок і перевірити якість. Ми тут постійно. Нас не\nтреба буде завтра шукати:) На наших
                власних складах завжди готова\nпродукція для Вас.` },
            ru: { title: ' Запас пеллет рядом\nс Вами',
                description: `Нас легко увидеть воочию,\nвзять образец и проверить качество. Мы постоянно здесь, круглый год:) Завтра нас не
                надо будет искать:) На наших\nскладах всегда готовы\nпеллеты для Вас.` }
        },
        imageSrc: warehouse
    },
    {
        texts: {
            ua: { title: 'Гарантуємо поставки на весь\nопалювальний сезон',
                description: 'Гарантія поставок відповідно до\nдомовленостей.\nМи приймаємо тільки ті замовлення,\nякі нам під силу! Впевнитись легко:)' },
            ru: { title: 'Гарантируем поставки на весь\nотопительный сезон',
                description: 'Гарантия поставок в соответствии с\nдоговоренностями.\nМы принимаем только те заказы,\nкоторые нам под силу! Убедиться легко!' }
        },
        imageSrc: warranty
    },
    {
        texts: {
            ua: { title: 'Зручна та швидка\nдоставка',
                description: 'Лише зателефонуйте нам - і чемні\nта відповідальні водії доставлять\nпелети від 15 кг до 22 тонн вчасно!' },
            ru: { title: 'Простой заказ и быстрая\nдоставка',
                description: 'Всего лишь позвоните нам \n- и ответственные водители\nвовремя доставят пеллеты\nот 15 кг до 22 тонн.' }
        },
        imageSrc: deliveryTruck
    }
];

const mapStateToProps = ({ application }) => {
    return {
        lang: application.lang
    };
};

class Advantages extends Component {
    static propTypes={
        lang: PropTypes.string
    };

    constructor (props) {
        super(props);

        this.state = {
            keyActiveClass: -1
        };
    }

    handleOnMouseEnter = (i) => {
        this.setState({
            keyActiveClass: +i
        });
    }

    handleOnMouseLeave = () => {
        this.setState({
            keyActiveClass: -1
        });
    }

    render () {
        const { lang } = this.props;
        const { keyActiveClass } = this.state;

        return <div className={styles.advantages}>
            <div className={classNames({ [styles.blur]: keyActiveClass !== -1 })} ></div>
            <div className={styles.wrap}>
                {ADVANTAGES.map((item, i) =>
                    <div
                        className={classNames(styles.advantage, { [styles.active]: keyActiveClass === i })}
                        key={i}
                        onMouseEnter = {() => this.handleOnMouseEnter(i)}
                        onMouseLeave = {this.handleOnMouseLeave}>
                        <img src= {item.imageSrc} alt={`img ${i}`} className={styles.advantageImg}/>
                        <h3 className={styles.advantageTitle}>{item.texts[lang].title}</h3>
                        <div className={styles.advantageDescription}>{item.texts[lang].description}</div>
                    </div>)}
            </div>
        </div>;
    }
}

export default connect(mapStateToProps)(Advantages);
