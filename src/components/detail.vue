<template>
  <v-card width="500" class="mx-auto mt-9">
    <v-card-title v-highlight="'red'">Router con(filter) </v-card-title>
    <v-card-text>
      <p>Họ Tên : {{ data.fullname | showInfo }}</p>
      <p>
        Ngày Sinh(vue moment) :
        {{ data.birthday | moment("dddd, MMMM Do YYYY") }}
      </p>
      <p>Email : {{ data.email | showInfo }}</p>
      <p>Quyền : {{ data.role | showInfo }}</p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      data: JSON.parse(localStorage.getItem("dataUser")),
    };
  },
  filters: {
    showInfo(value) {
      return value.toUpperCase();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
