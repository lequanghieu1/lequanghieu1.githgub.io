<template>
  <v-app>
    <v-app-bar app dark color="blue">
      <v-toolbar-title @click="homepage()" style="cursor: pointer">
        APP DEMO</v-toolbar-title
      >
      <v-spacer />
      <v-btn text rounded @click="login()">Login</v-btn>
      <v-btn text rounded @click="profile()">Profile</v-btn>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
    <template>
      <v-footer dark padless>
        <v-card class="flex" flat tile>
          <v-card-text class="py-2 white--text text-center">
            {{ new Date().getFullYear() }} — <strong> App demo</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </template>
  </v-app>
</template>

<script>
export default {
  methods: {
    profile() {
      this.$router.push("/user/info");
    },
    homepage() {
      this.$router.push("/user");
    },
    login() {
      this.$router.push("/");
    },
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
