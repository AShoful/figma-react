import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import styles from './Order.module.css';

const ORDERTEXT = {
    ua: {
        descriptionPrice: 'грн за 1 тонну\nбез пдв',
        descriptionLeft: 'бiг-бег\n800-1600 кг',
        descriptionRight: 'Мiшок 15 кг\nполiетиленовий',
        descriptionButton: 'Замовити\nпелети'
    },
    ru: {
        descriptionPrice: 'грн за 1 тонну\nбез НДС',
        descriptionLeft: 'биг-бэг\n800-1600 кг',
        descriptionRight: 'Мешок 15 кг\nполиэтиленовый',
        descriptionButton: 'Заказать\nпеллеты'
    }
};

const mapStateToProps = ({ application }) => {
    return {
        lang: application.lang
    };
};

class Order extends Component {
    static propTypes={
        lang: PropTypes.string
    };

    render () {
        const { lang } = this.props;

        return <div className={styles.order}>
            <div className={styles.wrap}>
                <div className={styles.leftBox}>
                    <div className={styles.boxImage}></div>
                    <div className={styles.boxContent}>
                        <div className={styles.boxContentTop}>
                            <span className={styles.price}> 2300 </span>
                            {ORDERTEXT[lang].descriptionPrice}
                        </div>
                        <div className={styles.boxContentBottom}>
                            {ORDERTEXT[lang].descriptionLeft}
                        </div>
                    </div>
                </div>
                <button className={styles.boxBotton}>
                    {ORDERTEXT[lang].descriptionButton}
                </button>
                <div className={styles.rightBox}>
                    <div className={styles.boxImage}></div>
                    <div className={styles.boxContent}>
                        <div className={styles.boxContentTop}>
                            <span className={styles.price}> 9300 </span>
                            {ORDERTEXT[lang].descriptionPrice}
                        </div>
                        <div className={styles.boxContentBottom}>
                            {ORDERTEXT[lang].descriptionRight}
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default connect(mapStateToProps)(Order);
