import React from 'react';

const CustomLeftArrow = ({ onClick, ...rest }) => {
  // Destructure properties from rest.
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;

  // Example of custom styling.
  const customStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#000',
    color: '#fff',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    textAlign: 'center',
    cursor: 'pointer',
    position: 'absolute', // Adjust based on your layout
    left: '15px', // Adjust based on your layout
    zIndex: 2, // Ensure it's above other elements
  };

  return (
    <button
      onClick={() => onClick()}
      aria-label="Previous slide"
      // Add more attributes or styles as needed.
    >
      {/* You can use an SVG icon or an icon from a library like Font Awesome here. */}
      {/* Example using a Unicode arrow: */}
      &#x27F5;
    </button>
  );
};

export { CustomLeftArrow };
