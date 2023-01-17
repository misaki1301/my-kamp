<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "skill-card",
  props: {
    skillId: { type: number, required: true },
  },
  data() {
    return {
      name: "",
      color: "",
    };
  },
  methods: {
    getSkillById() {
      switch (skillId) {
        case 1:
          this.name = "";
      }
    },
  },
});
</script>

<template>
  <div class="rounded bg-purple-900 h-32">
    <p class="text-2xl text-white text-center">{{ name }}</p>
  </div>
</template>

<style scoped></style>
