let vim = Vue.createApp({
  data() {
    return {
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      isResetClicked: false,
    };
  },

  computed: {
    box() {
      return {
        transform: `
            perspective(${this.perspective}px)
            rotateX(${this.rotateX}deg)
            rotateY(${this.rotateY}deg)
            rotateZ(${this.rotateZ}deg)


            `,
      };
    },
  },
  methods: {
    reset() {
      this.perspective = 100;
      this.rotateX = 0;
      this.rotateY = 0;
      this.rotateZ = 0;
      this.isResetClicked = true;
      setTimeout(() => {
        this.isResetClicked = false;
      }, 1000);
    },
    async copy() {
      let text = `transform:${this.box.transform}`;
      await navigator.clipboard.writeText(text);
      alert("Css copied to Clipborad");
    },
  },
}).mount("#app");
