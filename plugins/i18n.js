import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from '~/lang/en'
import th from '~/lang/th'

Vue.use(VueI18n)

export default ({ app, store }, inject) => {
  app.i18n = new VueI18n({
    locale: store.state.lang,
    fallbackLocale: 'th',
    messages: { en, th },
  })
}
