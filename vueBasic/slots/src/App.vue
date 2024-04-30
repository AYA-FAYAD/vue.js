<template>
  <app-form>
    <template v-slot:help>
      <p>{{ help }}</p>
    </template>
    <template v-slot:fields>
      <input type="text" placeholder="email" />
      <input type="text" placeholder="email" />
      <input type="password" placeholder="password" />
    </template>
    <template v-slot:button>
      <button type="submit">submit</button>
    </template>
    <p>aya</p>
  </app-form>

  <app-form
    ><template v-slot:help>
      <p>Contact help text</p>
    </template>
    <template v-slot:fields>
      <input type="text" placeholder="name" />
      <input type="text" placeholder="message" />
    </template>
    <template v-slot:button>
      <button type="submit">submit</button>
    </template></app-form
  >
</template>

<script>
import AppForm from "@/components/Form.vue";
export default {
  name: "App",
  components: {
    AppForm,
  },
  data() {
    return {
      help: "this is some help text",
    };
  },
};
</script>
