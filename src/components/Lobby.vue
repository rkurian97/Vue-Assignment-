

<template>
  <div id="lobby">
      <img alt="Vue logo" src="../assets/logo.png">
      <Banner/>
  </div>
</template>
<script>
import Banner from '../components/Banner.vue'

export default {
  name: "Lobby",
  components: {
      Banner
  }
};
</script>