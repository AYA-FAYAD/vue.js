<template>
  <h1>Home page</h1>
</template>

<script>
export default {
  unmounted() {
    console.log("Home componenet unmounted");
  },
  activated() {
    console.log("HOME ACTIVE");
  },
  deactivated() {
    console.log("HOME INACTIVE");
  },
};
</script>
