<template>
    <div>
      <b-form-group
        label="Input Text"
        label-for="input-text"
        :state="validateState('input-text')"
      >
        <b-form-input
          id="input-text"
          v-model="value"
          :class="{ 'is-invalid': validateState('input-text') === false }"
        />
        <ValidationProvider
          v-slot="{ errors }"
          rules="required"
          vid="input-text"
          v-model="value"
        >
          <div v-if="errors.length" class="invalid-feedback">
            {{ errors[0] }}
          </div>
        </ValidationProvider>
      </b-form-group>
      <b-button variant="primary" @click="validateForm">Validate</b-button>
    </div>
  </template>

  <script>
  import { ValidationProvider } from 'vee-validate';
  import { extend } from 'vee-validate';
  import { required } from 'vee-validate/dist/rules';
  import { BFormGroup, BFormInput, BButton } from 'bootstrap-vue';

  extend('required', required);

  export default {
    components: {
      ValidationProvider,
      BFormGroup,
      BFormInput,
      BButton
    },
    data() {
      return {
        value: '',
        errors: {}
      }
    },
    methods: {
      validateState(fieldName) {
        const field = this.$validator && this.$validator.fields.find({ name: fieldName })
        return field ? field.validateState : null
      },
      validateForm() {
        console.log(this.validator)
        console.log(this)
        // this.$validator.validateAll().then((result) => {
        //   if (result) {
        //     alert('Form is valid!');
        //   } else {
        //     alert('Form is invalid.');
        //   }
        // });
      }
    }
  }
  </script>
