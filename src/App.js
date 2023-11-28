import './App.css';
import { Suspense, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';
import { getLanguage } from './utils';

function App() {
  const { t, i18n } = useTranslation();
  const [messages, setMessages] = useState(0);
  const [languageOptions, setLanguageOptions] = useState([]);

  useEffect(() => {
    setLanguageOptions(
      i18n.languages.map((lang) => ({ value: lang, label: getLanguage(lang) }))
    );
  }, [i18n]);

  return (
    <div className="App">
      <Select
        options={languageOptions}
        defaultValue={{ value: 'en', label: getLanguage('en') }}
        onChange={(opt) => i18n.changeLanguage(opt.value)}
      />
      <h1>{t('main.header')}</h1>
      <button onClick={() => setMessages(messages + 1)}>+1 message</button>
      <p>{t('main.new_messages', { count: messages })}</p>
      <p>{t('main.current_date', { date: new Date() })}</p>
      <p>
        {t('main.incoming_message', { from: 'Ann' })}
        <br />
        {t('main.message_contents', {
          body: 'How are you doing?',
          context: 'female',
        })}
      </p>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  );
}
