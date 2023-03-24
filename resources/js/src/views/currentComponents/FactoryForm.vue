<template>
    <form @submit.prevent="handleSubmit">
      <slot />
      <button type="submit" :disabled="!isFormValid">Submit</button>
    </form>
  </template>

  <script>
  import { ValidationProvider, ValidationObserver } from "vee-validate";

  export default {
    components: { ValidationProvider, ValidationObserver },
    data() {
      return {
        isFormValid: true,
      };
    },
    methods: {
      handleSubmit() {
        this.$emit("submit");
      },
    },
  };
  </script>
