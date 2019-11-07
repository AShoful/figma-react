import React from 'react'
import {connect} from 'react-redux'
import propOr from '@tinkoff/utils/object/propOr';

import styles from './AdvantagesPage.module.css'

const mapStateToProps = ({ application }) => ({
           langMap: application.langMap
    })

const AdvantagesPage = (props) =>{ 
        const advantages = propOr('advantages', {}, props.langMap);
        return <div className={styles.advantages}>
            {advantages.title}
        </div>
    }

export default connect(mapStateToProps)(AdvantagesPage)