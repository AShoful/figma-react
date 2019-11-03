import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './Slider.module.css';

const SLIDER = ['./img/slide1.jpg', './img/slide2.png', './img/slide3.png', './img/slide4.png'];

class Slider extends Component {
    constructor (props) {
        super(props);

        this.state = {
            sliderIndex: 1,
            sliderWidth: document.documentElement.clientWidth
        };
    }

    componentDidMount () {
        this.setState({
            sliderWidth: document.documentElement.clientWidth
        });
    }

    componentWillUpdate () {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount () {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        this.setState({
            sliderWidth: document.documentElement.clientWidth
        });
    }

    handleClickRadio = (index) => {
        this.setState({
            sliderIndex: index
        });
    }

    handleOnclickToggle = (i) => {
        this.setState(
            {sliderIndex: (this.state.sliderIndex + i) % SLIDER.length}, 
            () => { if(this.state.sliderIndex < 0) this.setState({sliderIndex: SLIDER.length-1})}
        )}

    render () {
        const { sliderIndex, sliderWidth } = this.state;
        
        return <div className={styles.slider} >
            <div className={styles.sliderTrack} style = {{ left: `${-sliderIndex * sliderWidth}px` }}>
                { SLIDER.map((slide, i) => <div key={i}
                    className={styles.image}
                    style={{
                        backgroundImage: `url(${require(`${slide}`)})`,
                        width: `${sliderWidth}px` }}
                />
                )}
            </div>
            <div className={styles.toggle}>
                <button
                    className={styles.left}
                    // disabled = {sliderIndex === 0}
                    onClick={() => this.handleOnclickToggle(-1)}
                />
                <button
                    className={styles.rigth}
                    onClick={() => this.handleOnclickToggle(1)}
                />
            </div>
            <div className={styles.radio}>
                {SLIDER.map((item, i) =>
                    <div
                        key = {i}
                        className={classNames(styles.radioButton, { [styles.active]: i === sliderIndex })}
                        onClick={() => this.handleClickRadio(i)}/>)}
            </div>
        </div>;
    }
}

export default Slider;
