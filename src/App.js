import './App.css';
import { Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';

const options = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Español' },
];

function App() {
  const { t, i18n } = useTranslation();
  const [messages, setMessages] = useState(0);

  return (
    <div className="App">
      <Select
        options={options}
        defaultValue={options[0]}
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
