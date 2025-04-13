import { useState } from 'react';

const Carousel = () => {
  const images = [
    '../public/carousel4.png',
    '../public/carousel3.jpg',
    '../public/carousel1.jpg',
  ];

  const content = [
    {
      title: 'Precision Engineered Endmills for Superior Performance',
      description: 'Advancing Manufacturing Through Innovation',
      buttonText: 'Explore our product',
    },
    {
      title: 'Innovative Manufacturing Solutions',
      description: 'Crafting the Future of Precision Tools',
      buttonText: 'Discover More',
    },
    {
      title: 'Exceptional Quality and Durability',
      description: 'Build with Confidence Using Our Endmills',
      buttonText: 'See the Range',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full mx-auto" style={{ maxHeight: '500px' }}>
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <img
                src={img}
                alt={`carousel-${index}`}
                className="w-full h-[60vh] md:h-[70vh] object-cover" // Adjust height for different screens
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div> {/* Dark overlay */}

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center px-4 py-2 bg-opacity-50 rounded-lg">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{content[index].title}</h1>
                <p className="text-lg md:text-xl mb-8">{content[index].description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Left and Right Arrow Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white p-2 rounded-full shadow-lg"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white p-2 rounded-full shadow-lg"
        >
          &#10095;
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer p-2 rounded-full transition-colors duration-300 ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
