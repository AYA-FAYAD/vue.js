let vm = Vue.createApp({
  data() {
    return {
      isPurple: false,
      selectColor: "",
      size: 150,
    };
  },

  computed: {
    circle_classes() {
      return { purple1: this.isPurple };
    },
  },
}).mount("#app");
