<template>
  <div>
    <div class="top vee"></div>
    <div class="main">
      Form đăng nhập (vee_validate)
      <ValidationProvider name="email" rules="required|email">
        <div slot-scope="{ errors }">
          <input v-model="name" placeholder="Email" />
          <div class="validate">
            <p class="error">{{ errors[0] }}</p>
          </div>
        </div>
      </ValidationProvider>
      <ValidationProvider name="pass" rules="required">
        <div slot-scope="{ errors }">
          <input v-model="pass" placeholder="Mật Khẩu" type="password" />
          <div class="validate">
            <p class="error">{{ errors[0] }}</p>
          </div>
        </div>
      </ValidationProvider>
      <spinner class="spinner" v-if="this.$store.state.users.is_login" />
      <button
        class="submit vee"
        @click="submit()"
        v-if="!this.$store.state.users.is_login"
      >
        Đăng Nhập
      </button>
    </div>
    <div class="bot vee"></div>
  </div>
</template>

<script>
import spinner from "./spinner";
import { ValidationProvider } from "vee-validate";
export default {
  methods: {
    submit() {
      this.$store.dispatch("usernameLogin", {
        email: this.name,
        pass: this.pass,
      });
      if (this.$store.state.users.is_login === true) {
        setTimeout(() => {
          this.$router.push("/user");
        }, 1000);
      }
    },
  },
  data() {
    return {
      name: "",
      pass: "",
    };
  },
  components: {
    ValidationProvider,
    spinner,
  },
};
</script>

<style lang='scss' src='../style.scss' scoped/>
