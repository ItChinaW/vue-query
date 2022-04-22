<script lang="ts">
export default {
  name: "App",
};
</script>

<template>
  <div>
    <h1>
      <router-link to="/" tag="">DEMO</router-link>
    </h1>
    <ul>
      <li><router-link to="/useQuery">useQuery</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<style>
a {
  color: black;
}
li {
  list-style: none;
}
</style>
