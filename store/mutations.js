export default {
  setLang(state, lang) {
    state.lang = lang
    window.localStorage.setItem('lang', lang)
  },

  setDrawer(state, drawer) {
    state.drawer = drawer
  },
}
