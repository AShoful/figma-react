import React from 'react'
import {connect} from 'react-redux'
import propOr from '@tinkoff/utils/object/propOr';

import styles from './AboutPage.module.css'

const mapStateToProps = ({ application }) => ({
           langMap: application.langMap
    })

const AboutPage = (props) =>{ 
        const about = propOr('about', {}, props.langMap);
        return <div className={styles.about}>
            {about.title}
        </div>
    }

export default connect(mapStateToProps)(AboutPage)