import React from 'react'
import {connect} from 'react-redux'
import propOr from '@tinkoff/utils/object/propOr';

import styles from './ProductsPage.module.css'

const mapStateToProps = ({ application }) => ({
           langMap: application.langMap
    })

const ProductsPage = (props) =>{ 
        const products = propOr('products', {}, props.langMap);
        return <div className={styles.products}>
            {products.title}
        </div>
    }

export default connect(mapStateToProps)(ProductsPage)