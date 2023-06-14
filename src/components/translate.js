import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

const Translate = ({ language, text }) => {
  const [translated] = useTranslation(text, language);

  return (
    <div className='translate'>
      <label className='label'>Output</label>
      <h1 className='title'>{translated}</h1>
    </div>
  );
};

const debounce = (fn) => {
  let id = null;

  return (...args) => {
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(() => {
      fn(...args);
      id = null;
    }, 300);
  };
};

const useTranslation = (text, language) => {
  const [translated, setTranslated] = useState('');

  useEffect(() => {
    if (!text) {
      return;
    }

    doTranslation(text, language, setTranslated);
  }, [text, language]);

  return [translated];
};

const doTranslation = debounce(async (input, languageCode, callback) => {
  const encodedParams = new URLSearchParams();
  encodedParams.set('q', input);
  encodedParams.set('target', languageCode);
  encodedParams.set('source', 'en');

  const options = {
    method: 'POST',
    url: process.env.REACT_APP_RAPID_API_URL,
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST,
    },
    data: encodedParams,
  };

  try {
    const response = await axios.request(options);
    const { data } = response;
    callback(data?.data?.translations[0]?.translatedText);
  } catch (error) {
    callback('');
  }
});

Translate.propTypes = {
  language: PropTypes.string,
  text: PropTypes.string,
};

export default Translate;
