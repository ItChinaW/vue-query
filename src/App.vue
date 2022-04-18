<script lang="ts">
export default {
  name: "App",
};
</script>

<template>
  <div>
    <h1>DEMO</h1>
    <ul>
      <li><router-link to="/useQuery">useQuery</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<style>
</style>
