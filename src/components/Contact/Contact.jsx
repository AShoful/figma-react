import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { connect } from 'react-redux';

import styles from './Contact.module.css';

const TITLE = {
    ua: 'Зв’язатися у зручний спосіб',
    ru: 'Связаться с нами сейчас!'
};

const mapStateToProps = ({ application }) => {
    return {
        lang: application.lang
    };
};

class Contact extends Component {
    static propTypes = {
        lang: PropTypes.string
    };

    render () {
        const { lang } = this.props;
        return <div className={styles.contact} >
            <div className={styles.title}>
                {TITLE[lang]}
            </div>
            <div className={styles.wrap}>
                <div className={styles.boxs}>
                    <div className={classNames(styles.box, styles.left)} >
                        <div className={classNames(styles.viberIcon, styles.icon)}></div>
                        <div className={classNames(styles.phoneIcon, styles.icon)}></div>
                        <div>(097) 123-45-67</div>
                    </div>
                    <div className={classNames(styles.box, styles.left)}>
                        <div className={classNames(styles.whatsAppIcon, styles.icon)}></div>
                        <div className={classNames(styles.phoneIcon, styles.icon)}></div>
                        <div>(066) 987-65-43</div>
                    </div>
                </div>
                <div className={styles.boxs}>
                    <div className={classNames(styles.box, styles.right)}>
                        <div className={classNames(styles.gmailIcon, styles.icon)}></div>
                        <div className={styles.skypeLogin}>pelleta.super@gmail.com</div>
                    </div>
                    <div className={classNames(styles.box, styles.right)}>
                        <div className={classNames(styles.skypeIcon, styles.icon)}></div>
                        <div className={styles.skypeLogin}>ukrpelletex</div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default connect(mapStateToProps)(Contact);
