<template>
  <button @click="onClickAge">Updut Age</button>
  <button @click="ageChangeFn(4)">Updut Age CB</button>
  <p>the user is {{ age }} years old</p>
  <p>{{ ageDouble }}</p>
</template>

<script>
export default {
  name: "User",
  props: {
    age: {
      type: Number,
      //   require: true,
      //   default: 20,
      validator(value) {
        return value < 130;
      },
    },
    ageChangeFn: Function,
  },
  emits: ["age-change"],
  computed: {
    ageDouble() {
      return this.age * 2;
    },
  },
  methods: {
    onClickAge() {
      this.$emit("age-change", 3);
    },
  },
};
</script>
