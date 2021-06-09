
<template>
  <div>
    <div class="top"></div>
    <div class="main">
      Form đăng nhập (vuelidate),two way binding
      <div class="form-group">
        <input
          type="text"
          placeholder="Tài Khoản"
          v-model.trim="name"
          @input="delayTouch()"
        />

        <div class="validate">
          <div
            class="error"
            v-if="!$v.name.required && !this.$store.state.vali.delay"
          >
            username is required(async validate)
          </div>
          <smallss class="small" v-if="this.$store.state.vali.delay"/>
          <div
            class="error"
            v-if="!$v.name.minLength && !this.$store.state.vali.delay"
          >
            username must have at least
            {{ $v.name.$params.minLength.min }} letters.(async validate)
          </div>
        </div>
      </div>
      <div class="form-group">
        <input
          type="password"
          placeholder="Mật Khẩu"
          v-model.trim="$v.pass.$model"
        />
        <div class="validate">
          <div class="error" v-if="!$v.pass.required">password is required</div>
          <div class="error" v-if="!$v.pass.minLength">
            password must have at least
            {{ $v.pass.$params.minLength.min }} letters.
          </div>
        </div>
      </div>

      <button class="submit" @click="submit()">Đăng Nhập</button>
      <spinner class="spinner" v-if="this.$store.state.users.is_login" />
      <div class="route">
        <router-link to="vee">Đăng nhập với vee_validate</router-link>
        <router-link to="vuetify">Đăng nhập với vuetify_validate</router-link>
      </div>
    </div>
    <div class="bot"></div>
  </div>
</template>

<script>
import spinner from "./spinner";
import smallss from "./spinsmall.vue";
import { required, minLength } from "vuelidate/lib/validators";
export default {
  components: { spinner, smallss },
  data() {
    return {
      name: "",
      pass: "",
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(4),
    },
    pass: {
      required,
      minLength: minLength(3),
    },
  },
  methods: {
    submit() {
      this.$store.dispatch("usernameLogin", {
        name: this.name,
        pass: this.pass,
      });
      if (this.$store.state.users.is_login === true) {
        setTimeout(() => {
          this.$router.push("/user");
        }, 1500);
      }
    },

    delayTouch() {
      var promise = new Promise((resolve) => {
        resolve();
      });
      promise.then(() => {
        this.$store.dispatch("startVali");
      });
    },
  },
};
</script>

<style lang='scss' src='../style.scss' scoped/>
