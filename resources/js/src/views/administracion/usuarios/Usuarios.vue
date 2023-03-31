<template>
        <FormFactory
            :formSchema="formSchema"
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
            name: 'name',
            value: 'nameValue',
            label: 'Name',
            placeholder: 'Enter your name',
            rules: 'required|min:2|max:20',
            classContainer: 'mb-3',
            classLabel: 'mb-1',
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
            classContainer: 'mb-3',
            classLabel: 'mb-1',
            prefixIcon: 'LockIcon',
            suffixIcon: 'EyeIcon',
            disabled: true
            },
            {
            type: 'email',
            name: 'email',
            value: 'emailValue',
            label: 'Email',
            placeholder: 'Enter your email',
            rules: 'required|email',
            classContainer: 'mb-3',
            classLabel: 'mb-1',
            prefixIcon: 'MailIcon',
            disabled: false
            }
        ],
        form: {
            nameValue: '',
            passwordValue: '',
            emailValue: ''
        },
        formDisabled: false
      }
    },
    methods: {},
  }
  </script>
>
