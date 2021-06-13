<template>
  <v-app>
    <v-content>
      <div class="top vee"></div>
      <div class="main">
        <v-content>
          <v-card width="500" class="mx-auto mt-9">
            <v-card-title>Form đăng nhập (vee_validate)</v-card-title>
            <v-card-text>
              <validation-observer ref="observer">
                <form @submit.prevent="submit">
                  <validation-provider
                    v-slot="{ errors }"
                    name="email"
                    rules="required|email"
                    data-vv-delay="1000"
                  >
                    <v-text-field
                      v-model="name"
                      :error-messages="errors"
                      label="Email"
                      required
                    ></v-text-field>
                  </validation-provider>
                  <validation-provider
                    v-slot="{ errors }"
                    name="pass"
                    rules="required|min:3"
                  >
                    <v-text-field
                      data-vv-delay="1000"
                      v-model="pass"
                      :error-messages="errors"
                      label="password"
                      required
                    ></v-text-field>
                  </validation-provider>
                </form>
              </validation-observer>
            </v-card-text>
            <v-card-actions>
              <v-btn color="success">Register</v-btn>
              <v-btn color="info" @click="submit">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-content>
        <spinner v-if="this.$store.state.users.is_login" />
      </div>
      <div class="bot vee"></div>
    </v-content>
  </v-app>
</template>

<script>
import spinner from "./spinner";
import { required, email, min } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";
setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("min", {
  ...min,
  message: "{_field_} may not be little than {length} characters",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});

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
    ValidationObserver,
    spinner,
  },
};
</script>

<style lang='scss' src='../style.scss' scoped/>
