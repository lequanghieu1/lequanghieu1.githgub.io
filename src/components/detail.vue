<template>
  <div class="hello">
    <router-link to="/user">Quay lại(dùng filter)</router-link>
    <p>Họ Tên : {{ data.fullname | showInfo }}</p>
    <p>Ngày Sinh(vue moment) : {{ data.birthday | moment("dddd, MMMM Do YYYY") }}</p>
    <p>Email : {{ data.email | showInfo }}</p>
    <p>Quyền : {{ data.role | showInfo }}</p>
  </div>
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
