import React from 'react'
import {connect} from 'react-redux'
import propOr from '@tinkoff/utils/object/propOr';

import styles from './AdvantagesPage.module.css'

const mapStateToProps = ({ application }) => ({
           langMap: application.langMap
    })

const AdvantagesPage = (props) =>{ 
        const advantagesPage = propOr('advantagesPage', {}, props.langMap);
        return <div className={styles.advantages}>
            {advantagesPage.title}
        </div>
    }

export default connect(mapStateToProps)(AdvantagesPage)