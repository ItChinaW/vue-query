<script lang="ts">
import { ref } from "vue";
import { getA } from "../../api/index";

export default {
  name: "UseQuery",
  setup() {
    const state = ref(1);
    const state1 = ref(1);
    const { data, loading, error, execute } = getA();
    return { data, loading, error, state, state1, execute };
  },
};
</script>

<template>
  <div>
    <p v-if="!loading">{{ data.name }}</p>
    <p v-else>loading</p>
    <p>error:{{ error }}</p>
    <p>state:{{ state }}</p>
    <p>state1:{{ state1 }}</p>
    <button @click="execute(1000, 0, { id: ++state })">fresh</button>
    <button @click="state1++">fresh1</button>
  </div>
</template>

<style>
</style>
