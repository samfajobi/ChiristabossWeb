import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './Slider.css'







function Slider() {
    return (
        <div>
             <Carousel className="imgSlider">
            <Carousel.Item interval={2000} className='imgslide'>
                <img
                className="d-block w-100"
                src="../images/buildingMat1.png"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide labelfgfdgdfhdgdhdghdghdhdgh</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src="../images/homeImage.jpg"
                alt="Second slide"
                />
                <Carousel.Caption>
               
               
               
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src="../images/SliderImg.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
                        
        </div>
    )
}

export default Slider
