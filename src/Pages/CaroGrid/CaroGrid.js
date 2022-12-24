import React, { useState } from 'react';
import './Grid.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imgGirl from '../../assets/defaultImage.jpg';
import { dataDigitalBestSeller } from './data';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} mb-32`}
            style={{  display: "block", background: "red", marginBottom: "200px", padding: "15px"  }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}

const CaroGrid = () => {
    const [defaultImage, setDefaultImage] = useState({});

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    return (
        <div className='px-52'>
            <Slider {...settings}>
                {dataDigitalBestSeller.map((item) => (
                    <div className="card">
                        <div className="card-top">
                            <img
                                src='https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                                alt=''
                            />
                            <h1>Corpkit is a global management </h1>
                        </div>
                        <div className="card-bottom">
                            <h3>Corpkit is a global management </h3>
                            <span className="category">global management </span>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CaroGrid;