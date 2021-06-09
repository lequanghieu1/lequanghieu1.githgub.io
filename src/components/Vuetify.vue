<template>
  <div>
    <div class="top vuetify"></div>
    <div class="main">
      Form đăng nhập (vuetify_validate)
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="name"
          :counter="4"
          :rules="nameRules"
          label="Username"
          required
        ></v-text-field>

        <v-text-field
          v-model="pass"
          type="password"
          :rules="passRules"
          label="Password"
          required
        ></v-text-field>
        <b-button
          :disabled="!valid"
          variant="success"
          class="mr-4 vuetify"
          @click="validate"
          v-if="!this.$store.state.users.is_login"
        >
          Đăng nhập
        </b-button>
        <spinner class="spinner" v-if="this.$store.state.users.is_login" />
      </v-form>
    </div>

    <div class="bot vuetify"></div>
  </div>
</template>

<script>
import spinner from "./spinner";
export default {
  components: { spinner },
  methods: {
    submit() {
      this.$store.dispatch("usernameLogin", {
        name: this.name,
        pass: this.pass,
      });
      if (this.$store.state.users.is_login === true) {
        setTimeout(() => {
          this.$router.push("/user");
        }, 1000);
      }
    },
    validate() {
      var promise = new Promise((resolve) => {
        resolve();
      });
      promise.then(this.submit());
    },
  },
  data() {
    return {
      valid: true,
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length >= 4) || "username must be at least 4 characters",
      ],
      passRules: [
        (v) => !!v || "Rules is required",
        (v) => (v && v.length >= 3) || "password must be at least 3 characters",
      ],
      name: "",
      pass: "",
    };
  },
};
</script>

<style lang='scss' src='../style.scss' scoped/>
