import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../styles.css';
import img3 from '../assests/weather_icons/02n.png';
import img4 from '../assests/weather_icons/01n.png';

const Slider = ({ weatherData }) => {
  const temperature = Math.floor(weatherData?.main?.temp_max - 273.15);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
  };
  const cards = [
    {
      time: '1:46 AM',
      icon: img3,
      description: `few clouds`,
      temperature: `${temperature}°`,
    },
    {
      time: '1:46 AM',
      icon: img3,
      description: `few clouds`,
      temperature: `${temperature}°`,
    },
    {
      time: '1:46 AM',
      icon: img3,
      description: `few clouds`,
      temperature: `${temperature}°`,
    },
    {
      time: '1:46 AM',
      icon: img4,
      description: `clear sky`,
      temperature: `${temperature}°`,
    },
  ];

  return (
    <div className='parent'>
      <Carousel
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        dotListClass='custom-dot-list-style'
      >
        {cards.map((card, index) => {
          return (
            <div className='row mx-1'>
              <div className='slider' key={index}>
                <div key={index} className=''>
                  <div className='today-card'>
                    <p className='w-sunday'>
                      Sunday, <span className='w-time-color'>{card.time}</span>
                    </p>
                    <img src={card.icon} alt='img icon' width={60} />
                    <p className='few-clouds'>{card.description}</p>
                    <p className='week-card-30 '>
                      {card.temperature === 'NaN°' ? '0°' : card.temperature}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;
