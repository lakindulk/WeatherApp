import React from 'react'

import WeatherCard from './WeatherCard';
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Home = () => {
    const { data, isLoading, errorMessage } = useOpenWeather({
        key: '7ad07aac9b0943040a4abdd2c23dfc4e',
        lat: '6.9271',
        lon: '79.8612',
        lang: 'en',
        unit: 'metric',
    });
    return (
        <div>
            <section id="home">
                <div >
                    <div  style={{paddingTop:' 3vh',paddingBottom:'4vh'}}>
                    <div  style={{paddingBottom:'2vh'}}>
                    <h4>Weather Application</h4>
                    </div>

                        <Row>
                            <Col>
                            <div  >
                            <ReactWeather
                                    isLoading={isLoading}
                                    errorMessage={errorMessage}
                                    data={data}
                                    lang="en"
                                    locationLabel="Colombo, LK"
                                    unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
                                    showForecast
                                />
                            </div>
                               
                            </Col>
                            <Col>
                            <div >
                                <WeatherCard />
                            </div>
                            </Col>
                        </Row>


                    </div>
                </div>
            </section>

        </div>
    );
}

export default Home;