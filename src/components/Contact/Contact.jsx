import React from 'react';

import styles from './Contact.module.css';


const Contact = props =>
    <div  className = {styles.Contact} >
        <div className = {styles.title}>
            Зв’язатися у зручний спосіб
        </div>
        <div className = {styles.wrap}>
            <div className = {styles.phone}>
                <div className = {styles.icons}>
                    <div className = {styles.phoneIcon}></div>
                    <div className = {styles.viberIcon}></div>
                    <div className = {styles.twiterIcon}></div> 
                </div>   
                (097) 859-02-59
            </div> 
            <div className = {styles.email}>
                <div className = {styles.icons}>
                    <div className = {styles.skypeIcon}></div>
                    <div className = {styles.skypeLogin}>skypeaddress</div>
                </div>
                <div className = {styles.gmail}>
                    <div className = {styles.gmailIcon}></div>  
                    pelleta.super@gmail.com
                </div>
            </div> 
            <div className = {styles.phone}>
                <div className = {styles.icons}>
                    <div className = {styles.whatsAppIcon}></div>
                    <div className = {styles.phoneIcon}></div>
                </div>    
                (066) 505-90-27
            </div>   
        </div>
    </div>;

export default Contact;
 