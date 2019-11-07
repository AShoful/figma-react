import React from 'react'
import {connect} from 'react-redux'
import propOr from '@tinkoff/utils/object/propOr';

import styles from './ContactPage.module.css'

const mapStateToProps = ({ application }) => ({
           langMap: application.langMap
    })

const ContactPage = (props) =>{ 
        const contact = propOr('contact', {}, props.langMap);
        return <div className={styles.contact}>
            {contact.title}
        </div>
    }

export default connect(mapStateToProps)(ContactPage)
