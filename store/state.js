let lang = window.localStorage.getItem('lang', 'th')

export default () => ({
  lang,
  drawer: false,
})
