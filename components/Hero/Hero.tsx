'use client'
import { useState, useEffect } from 'react';
import { slides } from '../../Common/Slides';
import Image from 'next/image';
import Link from 'next/link';

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    // Function to automatically change the slide
    const autoChangeSlide = () => {
      const nextIndex = (currentIndex + 1) % slides.length;
      setCurrentIndex(nextIndex);
    };

    // Set an interval to change the slide every 1.5 seconds
    const intervalId = setInterval(autoChangeSlide, 2000);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <div className="max-w-[700px]  lg:max-w-[1200px] md:max-w-[900px] mx-auto relative mb-10">
      <div className="overflow-hidden relative m-5">
        <div
          className="flex transition-transform ease-in-out duration-700 transform"
          style={{
            width: `${slides.length * 100}%`,
            transform: `translateX(-${(currentIndex / slides.length) * 100}%)`,
          }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="w-[25%] md:w-[25%] lg:w-[25%] h-[190px] lg:h-[320px] md:h-[280px] flex-shrink-0 relative"
            >
              <Link href={slide.link}>
              <Image src={slide.image} alt={`Slide ${slide.id}`} fill className="rounded-lg" />

              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
       
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`w-2 h-2 rounded-full mx-1 cursor-pointer focus:outline-none ${
              currentIndex === index ? 'bg-blue-400' : 'bg-gray-300'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
