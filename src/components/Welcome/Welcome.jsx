import React, { Component } from 'react';
import PropTypes from 'prop-types';
import propOr from '@tinkoff/utils/object/propOr';

import { connect } from 'react-redux';

import styles from './Welcome.module.css';

import { COORDS_PELETEX } from '../../constants/constants';

const mapStateToProps = ({ application }) => {
    return {
        langMap: application.langMap
    };
};

class Welcome extends Component {
    static propTypes = {
        langMap: PropTypes.object.isRequired
    };

    componentDidMount () {
        setTimeout(()=> window.google ? this.initMap() : alert('Не удалось подключить карту'), 0);
    }

    initMap () {
        const mapOptions = {
            zoom: 10,
            center: { lat: COORDS_PELETEX[0], lng: COORDS_PELETEX[1] }
        };
        const map = new window.google.maps.Map(document.getElementById('map'), mapOptions);
        
        const marker = new window.google.maps.Marker({
            position: { lat: COORDS_PELETEX[0], lng: COORDS_PELETEX[1] },
            label: { text: 'Pelletex', color: '#463285' },
            title: 'Pelletex'
        });

        marker.setMap(map);

        document.getElementById('submit').addEventListener('click', () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    position => {
                        const { latitude, longitude } = position.coords;
                        this.calculateAndDisplayRoute(latitude, longitude, map)
                    },
                    error => {
                        window.alert(error.message + 'Ваш браузер блокирует передачу данных для построения маршрута');
                    });
            } else { alert('Ваш браузер не поддерживает сервис построения маршрута'); }
        });
    }

    calculateAndDisplayRoute = (lat, lng, map) => {
        const directionsRenderer = new window.google.maps.DirectionsRenderer();
        const directionsService = new window.google.maps.DirectionsService();
        directionsRenderer.setMap(map);
        
        directionsService.route({
            origin:  { lat, lng },
            destination: { lat: COORDS_PELETEX[0], lng: COORDS_PELETEX[1] },
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
                directionsRenderer.setDirections(response);
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    }

    render () {
        const { langMap } = this.props;
        const text = propOr('welcome', {}, langMap)
                
        return <div className={styles.welcome} >
            <div className={styles.title}>{text.title}</div>
            <div className={styles.wrap}>
                <div className={styles.address}>
                    <button className={styles.addressButton} id='submit'>
                        {text.titleButton}
                    </button>
                    <div className={styles.addressPlace}> {text.address}</div>
                </div>
            <div className={styles.map} id='map'/>
            </div>
        </div>;
    }
}

export default connect(mapStateToProps)(Welcome);
