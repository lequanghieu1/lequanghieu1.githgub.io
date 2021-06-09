this page use router,scss,axios

<template>
  <div>
    <div class="top"></div>
    <div class="main">
      Form đăng nhập (vuelidate)
      <div class="form-group">
        <input
          type="text"
          placeholder="Tài Khoản"
          v-model.trim="name"
          @input="delayTouch()"
        />

        <div class="validate">
          <div class="error" v-if="!$v.name.required">
            {{ delay === false ? "username is required" : "" }}
          </div>
          <div class="error" v-if="!$v.name.minLength">
            username must have at least
            {{ $v.name.$params.minLength.min }} letters.
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
import { required, minLength } from "vuelidate/lib/validators";
let delay = false;
export default {
  components: { spinner },
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
  computed: {
    delay() {
      return delay;
    },
  },
  watch: {
    name: () => {
      this.delayTouch();
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
        resolve(delay);
      });
      promise.then(() => {
        delay = true;
        console.log(delay);
        this.delay;
        setTimeout(() => {
          delay = false;
        }, 500);
        setTimeout(() => {
          this.delay;
          console.log(delay);
        }, 1000);
      });
    },
  },
};
</script>

<style lang='scss' src='../style.scss' scoped/>
