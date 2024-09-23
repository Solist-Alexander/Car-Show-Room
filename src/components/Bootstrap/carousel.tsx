import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

interface ICarouselProps {
    images: string[];
}

const CarouselForCar: React.FC<ICarouselProps> = ({ images}) => {
    return (
        <div>
            <Carousel style={{ height: '400px', width: '400px' }}>
                {images.map((image, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={image}
                            alt={`Slide ${index + 1}`}
                            style={{
                                objectFit: 'contain',
                                height: '400px',
                                width: '400px'
                            }}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default CarouselForCar;