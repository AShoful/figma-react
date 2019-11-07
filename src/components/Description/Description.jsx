import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import propOr from '@tinkoff/utils/object/propOr';

import { connect } from 'react-redux';

import styles from './Description.module.css';

const mapStateToProps = ({ application }) => {
    return {
        langMap: application.langMap
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
        const { langMap, blurComponent } = this.props;
        const description =  propOr('description', {}, langMap);
        
        return <div className={styles.description}>
            <div className={classNames({ [styles.blur]: blurComponent })}></div>
            <div className={styles.wrap}>
                <div className={styles.title}>{description.title}</div>
                <div className={styles.subtitle}>{description.subtitle}</div>
                <div className={styles.text}>{description.text}</div>
            </div>
        </div>;
    }
}

export default connect(mapStateToProps)(Description);
