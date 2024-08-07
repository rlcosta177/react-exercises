import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class carouselapp extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="https://imgb.ifunny.co/images/59339ec63b3f151e62008b6b862f84e7e8a9b5efb027913eedf082dd26e7721c_1.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://external-preview.redd.it/skibidi-gyatt-ohio-rizzler-fanum-tax-v0-M3NhYXk0cGV2YzdjMbG8tBu7DkfNZFCfRsxbIKrLXiiLaLuoDqmbTSfNyngr.png?format=pjpg&auto=webp&s=7e25dd19ebd2fd9fd3eb3724ff1f9a015be257d7" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://i.pinimg.com/originals/3a/ba/b9/3abab9a2e8d1e2ae23e6d98d248be8da.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

export default carouselapp;
