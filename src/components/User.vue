<template>
  <div class="hello">
    <b-tabs content-class="mt-3">
      <b-tab title="First" active
        ><p v-highlight="'red'">Axios gọi API(Vuex) và Directive</p>
        <b-table
          striped
          hover
          :items="this.$store.state.users.users"
          :fields="fields"
        ></b-table
      ></b-tab>
      <b-tab title="Second">
        <router-link to="user/info">Thông tin cá nhân</router-link></b-tab
      >
      <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
    </b-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: ["name", "username", "email", "phone", "website"],
      errors: [],
    };
  },
  created() {
    this.$store.dispatch("loadUsers");
    this.$store.dispatch("resetState");
  },
};
</script>

<style lang='scss' src='../style.scss' scoped>
</style> 
