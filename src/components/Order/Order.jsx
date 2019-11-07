import React, { Component } from 'react';
import PropTypes from 'prop-types';
import propOr from '@tinkoff/utils/object/propOr';

import { connect } from 'react-redux';

import styles from './Order.module.css';

const mapStateToProps = ({ application }) => {
    return {
        langMap:application.langMap
    };
};

class Order extends Component {
    static propTypes={
        langMap: PropTypes.object.isRequired
    };

    render () {
        const { langMap } = this.props;
        const order = propOr('order', {}, langMap)
        
        return <div className={styles.order}>
            <div className={styles.wrap}>
                <div className={styles.leftBox}>
                    <div className={styles.boxImage}></div>
                    <div className={styles.boxContent}>
                        <div className={styles.boxContentTop}>
                            <span className={styles.price}> {order.price[0]} </span>
                            {order.descriptionPrice}
                        </div>
                        <div className={styles.boxContentBottom}>
                            {order.descriptionLeft}
                        </div>
                    </div>
                </div>
                <button className={styles.boxBotton}>
                    {order.descriptionButton}
                </button>
                <div className={styles.rightBox}>
                    <div className={styles.boxImage}></div>
                    <div className={styles.boxContent}>
                        <div className={styles.boxContentTop}>
                            <span className={styles.price}> {order.price[1]} </span>
                            {order.descriptionPrice}
                        </div>
                        <div className={styles.boxContentBottom}>
                            {order.descriptionRight}
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default connect(mapStateToProps)(Order);
