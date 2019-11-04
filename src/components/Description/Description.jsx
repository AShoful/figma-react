import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { connect } from 'react-redux';

import styles from './Description.module.css';

const DESCRIPTIONTEXT = {
    ua: {
        title: 'Пелети паливні',
        subtitle: '100 %  деревина',
        text: 'Діаметр 8 мм'
    },
    ru: {
        title: 'ПЕЛЛЕТЫ ТОПЛИВНЫЕ',
        subtitle: '100% древесина',
        text: 'Диаметр 8 мм'
    }
};

const mapStateToProps = ({ application }) => {
    return {
        lang: application.lang
    };
};

class Description extends Component {
    static propTypes={
        lang: PropTypes.string,
        blurComponent: PropTypes.bool
    };

    static defaultProps = {
        blurComponent: false
    };

    render () {
        const { lang, blurComponent } = this.props;

        return <div className={styles.description}>
            <div className={classNames({ [styles.blur]: blurComponent })}></div>
            <div className={styles.wrap}>
                <div className={styles.title}>{DESCRIPTIONTEXT[lang].title}</div>
                <div className={styles.subtitle}>{DESCRIPTIONTEXT[lang].subtitle}</div>
                <div className={styles.text}>{DESCRIPTIONTEXT[lang].text}</div>
            </div>
        </div>;
    }
}

export default connect(mapStateToProps)(Description);
