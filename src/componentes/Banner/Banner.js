import React from 'react';
import PropTypes from 'prop-types';
import './Banner.css'; // Importando o CSS para o banner

const Banner = ({ image, title, description }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      <div className="banner-content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

Banner.defaultProps = {
  description: '',
};

export default Banner;