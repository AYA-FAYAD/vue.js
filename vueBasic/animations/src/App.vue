<template>
  <button type="button" @click="flage = !flage">Toggle</button>
  <!-- <transition name="fade" mode="out-in">
    <h2 v-if="flage" key="main">Hello world</h2>
    <h2 v-else key="scondery">Another Hello!!</h2>
  </transition> -->
  <!-- <Transition name="zoom" type="animation">
    <h2 v-if="flage">Hello</h2>
  </Transition> -->

  <!-- <Transition
    @before-enter="beforEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforLeave"
    @leave="leave"
    @after-leave="afterLeave"
    :css="true"
    name="fade"
  >
    <h2 v-if="flage">Hey</h2>
  </Transition> -->
  <button @click="addNum">Add</button>
  <ul>
    <TransitionGroup
      name="fade"
      enter-active-class="animate_animated animate_flipInx"
      leave-active-class="animate_animated animate_flipOutX"
    >
      <li
        v-for="(numbr, index) in numbrs"
        :key="numbr"
        @click="removeNum(index)"
      >
        {{ numbr }}
      </li>
    </TransitionGroup>
  </ul>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      flage: false,
      numbrs: [1, 2, 3, 4, 5, 6],
    };
  },
  methods: {
    addNum() {
      const num = Math.floor(Math.random() * 100 + 1);
      const index = Math.floor(Math.random() * this.numbrs.length);
      this.numbrs.splice(index, 0, num);
    },

    removeNum(index) {
      this.numbrs.splice(index, 1);
    },

    beforEnter(el) {
      console.log("before-enter event fired", el);
    },
    enter(el) {
      console.log("enter event fired", el);
      // const animation = el.animate([{ transform: "scale3d(0,0,0)" }, {}], {
      //   duration: 1000,
      // });
      // animation.onfinish = () => {
      //   done();
      // };
    },
    afterEnter(el) {
      console.log("after-enter event fired", el);
    },
    beforLeave(el) {},
    leave(el) {
      console.log("leave event fired", el);
      // const animation = el.animate([, {}, { transform: "scale3d(0,0,0)" }], {
      //   duration: 1000,
      // });
      // animation.onfinish = () => {
      //   done();
      // };
    },
    afterLeave(el) {
      console.log("after-leave event fired", el);
    },
  },
};
</script>

<style>
.animate_flipOutxcv {
  position: absolute;
}

.animate_animated {
  animation-duration: 1.5s;
}
li {
  font-size: 22px;
  cursor: pointer;
}
h2 {
  width: 400px;
  padding: 20px;
  margin: 20px;
}
.fade-enter-from {
  opacity: 0;
}
.fade-leave-active {
  transition: all 1s linear;
}

.fade-leave-to {
  transition: all 1s linear;
  opacity: 0;
}

.fade-move {
  transition: all 1s linear;
}

.fade-leave-active {
  position: absolute;
}

.zoom-enter-active {
  animation: zoom-in 1s linear forwards;
}

.zoom-leave-active {
  animation: zoom-out 1s linear forwards;
}

.zoom-enter-from {
  opacity: 0;
}

.zoom-leave-to {
  opacity: 0;
}

@keyframes zoom-in {
  from {
    transform: scale(0, 0);
  }
  to {
    transform: scale(1, 1);
  }
}
@keyframes zoom-out {
  from {
    transform: scale(1, 1);
  }
  to {
    transform: scale(0, 0);
  }
}
</style>
