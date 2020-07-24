<template>
  <v-btn-toggle
    v-model="lang"
    tile
    group
  >
    <v-btn v-for="item in langList" :key="item" :value="item">
      <span v-t="`lang.${item}`" />
    </v-btn>
  </v-btn-toggle>
</template>

<script>
export default {
  data() {
    return {
      langList: ['th', 'en'],
    }
  },

  computed: {
    lang: {
      get() {
        return this.$store.state.lang
      },
      set(v) {
        this.$store.commit('setLang', v)
      },
    },
  }, // computed
}
</script>
