import PropTypes from 'prop-types';
import React from 'react';

const Languages = ({ language, onLanguageChange }) => {
  return (
    <div>
      <label>Select Language</label>
      <div className='opts'>
        {LANGUAGES.map(({ label, value }) => {
          return (
            <div
              key={label}
              className={`opt ${language === value ? 'selected' : ''}`}
              onChange={() => onLanguageChange(value)}
              value={value}
            >
              {label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const LANGUAGES = [
  { label: 'Afrikaans', value: 'af' },
  { label: 'Arabic', value: 'ar' },
  { label: 'French', value: 'fr' },
  { label: 'Hindi', value: 'hi' },
  { label: 'Japanese', value: 'ja' },
  { label: 'Portuguese', value: 'pt' },
  { label: 'Russian', value: 'ru' },
  { label: 'Simplified Chinese', value: 'zh-CN' },
  { label: 'Spanish', value: 'es' },
  { label: 'Swahili', value: 'sw' },
  { label: 'Thai', value: 'th' },
];

Languages.propTypes = {
  language: PropTypes.string.isRequired,
  onLanguageChange: PropTypes.func.isRequired,
};

export default Languages;
