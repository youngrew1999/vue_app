<template>
  <v-card color="grey darken-4">
    <center>
      <v-icon size="120" color="white">
        assignment_ind
      </v-icon>
      <h1>Login</h1>
    </center>

    <v-card-text>
      <v-form>
        <v-text-field prepend-icon="mdi-account-circle" label="Username" />
        <v-text-field
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <nuxt-link to="/register">
        <v-btn color="success">
          <v-icon>add_box</v-icon>
          REGISTER
        </v-btn>
      </nuxt-link>
      <v-spacer />
      <v-btn color="primary">
        <v-icon>check</v-icon>
        LOGIN
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      showPassword: false,
    }
  },
}
</script>
