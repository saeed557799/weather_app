import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../styles.css';

const CityInput = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    onSearch(city);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <input
        type='text'
        placeholder='        Search for places ...'
        value={city}
        className='input'
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      {!city && (
        <div className='search-icon'>
          <FontAwesomeIcon icon={faSearch} />
        </div>
      )}
    </div>
  );
};

export default CityInput;
