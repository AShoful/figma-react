import React from 'react'
import {connect} from 'react-redux'
import propOr from '@tinkoff/utils/object/propOr';

import styles from './DeliveryPage.module.css'

const mapStateToProps = ({ application }) => ({
           langMap: application.langMap
    })

const DeliveryPage = (props) =>{ 
        const delivery = propOr('delivery', {}, props.langMap);
        return <div className={styles.delivery}>
            {delivery.title}
        </div>
    }

export default connect(mapStateToProps)(DeliveryPage)