import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  ImageContainer: {
    top: '1442px',
    left: '63px',
    width: '306px',
    height: '402px',
    borderRadius: '24px',
    backgroundImage: 'url(./image.jpeg)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
};

const CourseCardImage = (props) => {

  let styleProp = props.styleOverride ? props.styleOverride : styles.ImageContainer;

  return (
    <div style={{
      ...styleProp,
      backgroundImage: `url(${props.image})`,
    }} />
  );
};

CourseCardImage.propTypes = {
  image: PropTypes.string.isRequired,
  styleOverride: PropTypes.object
}

export default CourseCardImage;


