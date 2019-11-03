import React from 'react'
import styles from './Footer.module.css' 

class Footer extends React.Component { 
    constructor(props){
        super(props)

        this.state = { width : document.documentElement.clientWidth }
    }
     componentDidMount(){
        this.setState({
             width: document.documentElement.clientWidth
         })
     }

     componentWillUpdate(){
         window.addEventListener('resize', this.handleResize)
     }

     componentWillUnmount(){
         window.removeEventListener('resize', this.handleResize)
     }

     handleResize = () => {
         this.setState({
             width: document.documentElement.clientWidth
         })
     }

    render(){
       
        return <footer className = {styles.Footer}>
        
        <div className = {styles.wrap}>
            <div className = {styles.social}>
                <a href="#1" className ={styles.link}> 
                    <div className = {styles.twiter}></div>
                </a>  
                <a href="#1" className ={styles.link}>   
                    <div className = {styles.facebook}></div>
                </a>
            </div> 
            <a href="#1" className ={styles.link}>   
                <div className = {styles.contact}> © Pelletex™ <br/> 2019 </div>
            </a>
            <a href="#1" className ={styles.link}> 
                <div className = {styles.stubbs}> Developed by <br/>  Stubbs</div> 
            </a>    
        </div>   
    </footer>
    }
}
export default Footer    