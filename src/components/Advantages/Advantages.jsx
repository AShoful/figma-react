import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import propOr from '@tinkoff/utils/object/propOr';

import { connect } from 'react-redux';

import {img} from './img.js'

import styles from './Advantages.module.css';

const mapStateToProps = ({ application }) => {
    return {
        langMap: application.langMap
    };
};

class Advantages extends Component {
    static propTypes={
        langMap: PropTypes.object.isRequired
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
        const { langMap } = this.props;
        const { keyActiveClass } = this.state;
        const advantagesText = propOr('advantages', {}, langMap) 
        
        return <div className={styles.advantages}>
            <div className={classNames({ [styles.blur]: keyActiveClass !== -1 })} ></div>
            <div className={styles.wrap}>
                {advantagesText.map((item, i) =>
                    <div  key={i}
                        className={classNames(styles.advantage, { [styles.active]: keyActiveClass === i })} 
                        onMouseEnter = {() => this.handleOnMouseEnter(i)}
                        onMouseLeave = {this.handleOnMouseLeave}>
                        <img src= {img[i]} alt={`img ${i}`} className={styles.advantageImg}/>
                        <h3 className={styles.advantageTitle}>
                            {item.title}
                        </h3>
                        <div className={styles.advantageDescription}>
                            {item.description}
                        </div>
                    </div>)}
            </div>
        </div>;
    }
}

export default connect(mapStateToProps)(Advantages);
