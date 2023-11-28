export const getLanguage = (code) => {
  const lang = new Intl.DisplayNames(['en'], { type: 'language' });
  return lang.of(code);
};
