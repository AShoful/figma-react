import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import propOr from '@tinkoff/utils/object/propOr';

import { connect } from 'react-redux';

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
                    <div
                        className={classNames(styles.advantage, { [styles.active]: keyActiveClass === i })}
                        key={i}
                        onMouseEnter = {() => this.handleOnMouseEnter(i)}
                        onMouseLeave = {this.handleOnMouseLeave}>
                        <img src= {item.imageSrc} alt={`img ${i}`} className={styles.advantageImg}/>
                        <h3 className={styles.advantageTitle}>{item.texts.title}</h3>
                        <div className={styles.advantageDescription}>{item.texts.description}</div>
                    </div>)}
            </div>
        </div>;
    }
}

export default connect(mapStateToProps)(Advantages);
