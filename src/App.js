import React, { useState } from 'react';
import Field from './components/field';
import Languages from './components/languages';
import Translate from './components/translate';

const App = () => {
  const [language, setLanguage] = useState('es');
  const [text, setText] = useState('');

  return (
    <div>
      <Field value={text} onChange={setText} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate language={language} text={text} />
    </div>
  );
};

export default App;
