<script lang="ts">
import { ref } from "vue";
import useQuery from "../../hooks/useQuery";

interface UserInfo {
  name: string;
}
export default {
  name: "UseQuery",
  setup() {
    const state = ref(1);
    const state1 = ref(1);
    const getData = async () => {
      const res = await fetch("/a");
      return res.json();
    };
    const { data, loading, error } = useQuery<UserInfo>({
      queryKey: [state, state1],
      queryFn: () => getData(),
      delay: 1000,
    });
    return { data, loading, error, state, state1 };
  },
};
</script>

<template>
  <div>
    <p v-if="loading">{{ data.name }}</p>
    <p v-else>loading</p>
    <p>error:{{ error }}</p>
    <p>state:{{ state }}</p>
    <p>state1:{{ state1 }}</p>
    <button @click="state++">fresh</button>
    <button @click="state1++">fresh1</button>
  </div>
</template>

<style>
</style>
