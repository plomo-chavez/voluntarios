<template>
        <FormFactory
            :schema="formSchema"
        />
  </template>
  <script>
  import FormFactory from './FormFactory.vue'
  export default {
    components: {
        FormFactory
    },
    data() {
      return {
        formSchema: [
            {
                type: 'text',
                name: 'nameValue',
                value: 'nameValue',
                label: 'Name',
                placeholder: 'Enter your name',
                rules: 'required',
                prefixText: '@',
                suffixText: '.com',
                prefixIcon: 'UserIcon',
                suffixIcon: 'MailIcon'
            },
            {
                type: 'password',
                name: 'password',
                value: 'passwordValue',
                label: 'Password',
                placeholder: 'Enter your password',
                rules: 'required|min:6|max:12',
                prefixIcon: 'LockIcon',
                suffixIcon: 'EyeIcon',
            },
            {
                type: 'email',
                name: 'email',
                value: 'emailValue',
                label: 'Email',
                placeholder: 'Enter your email',
                rules: 'required|email',
                prefixIcon: 'MailIcon',
                disabled: false
            },
            {
                type: 'input-phone',
                name: 'phone',
                value: 'phoneValue',
                label: 'Telefono',
                placeholder: 'Introduce un telefono celular',
                rules: 'required',
                disabled: false
            }
        ],
      }
    },
    methods: {},
  }
  </script>
>
