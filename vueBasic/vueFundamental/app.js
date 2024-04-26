const vm = Vue.createApp({
  data() {
    return {
      firstName: "aya",
      middleName: "",
      lastName: "fayad",
      url: "https://google.com",
      raw_url: '<a href="https://google.com" target="_blank">Google</a>',
      age: 20,
    };
  },
  methods: {
    increment() {
      this.age++;
    },
    updateLastName(msg, event) {
      //   event.preventDefault();
      // console.log(msg);
      this.lastName = event.target.value;
    },
    updateMeddile(event) {
      event.preventDefault();
      this.middleName = event.target.value;
    },
  },

  computed: {
    fullname() {
      console.log("fullName method calling");
      return `${this.firstName} ${
        this.middleName
      }  ${this.lastName.toUpperCase()}`;
    },
  },

  watch: {
    age(newval, oldval) {
      setTimeout(() => {
        this.age = 20;
      }, 3000);
    },
  },
}).mount("#app");

// setTimeout(() => {
//   vm.first = "oo";
// }, 5000);
