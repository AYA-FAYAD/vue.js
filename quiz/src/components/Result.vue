<template>
  <div class="result">
    <div class="title">{{ results[resultIndex].title }}</div>
    <div class="desc">{{ results[resultIndex].desc }}</div>
  </div>
</template>

<script>
export default {
  props: ["results", "totalcorrect"],

  computed: {
    resultIndex() {
      let index = 0;

      this.results.forEach((e, i) => {
        if (e.min <= this.totalcorrect && e.max >= this.totalcorrect) {
          index = i;
        }
      });

      return index;
    },
  },
};
</script>
