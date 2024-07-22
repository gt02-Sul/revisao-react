import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function ProductCarousel() {
  const carouselStyle = {
    width: '800px',
    height: '400px',
    margin: 'auto',
  };
  const imgStyle = {
    width: '800px',
    height: '400px',
    objectFit: 'cover',
  };

  return (
    <div style={carouselStyle}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="First slide"
            style={imgStyle}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/637076/pexels-photo-637076.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Second slide"
            style={imgStyle}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Third slide"
            style={imgStyle}
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
