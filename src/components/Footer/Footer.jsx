import React, { Component } from 'react';
import classNames from 'classnames'

import styles from './Footer.module.css';

class Footer extends Component {
    render () {
        return <footer className={styles.footer}>
            <div className={styles.wrap}>
                <div className={styles.social}>
                    <div className={classNames(styles.twiter, styles.icon)}></div>
                    <div className={classNames(styles.facebook, styles.icon)}></div>
                </div>
                <div className={styles.contact}>© Pelletex™<br/>2019</div>
                <div className={styles.stubbs}><span className={styles.hidden}>Developed</span> by<br/>Shoful</div>
            </div>
        </footer>;
    }
}

export default Footer;
