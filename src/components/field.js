import PropTypes from 'prop-types';
import React from 'react';
import Flower from './svg/flower';

const Field = ({ value, onChange }) => {
  return (
    <div className='field'>
      <Flower className='flower-right' fill='rgb(110, 146, 119)' />
      <Flower className='flower-left' fill='rgb(249, 148, 59)' />
      <h1>Language Translate App</h1>
      <label htmlFor='input'>Enter English</label>
      <input
        type='text'
        id='input'
        className='input'
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

Field.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Field;
