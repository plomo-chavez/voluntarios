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
            // {
            //     type: 'text',
            //     name: 'nameValue',
            //     value: 'nameValue',
            //     label: 'Name',
            //     placeholder: 'Enter your name',
            //     rules: 'required',
            //     prefixText: '@',
            //     suffixText: '.com',
            //     prefixIcon: 'UserIcon',
            //     suffixIcon: 'MailIcon'
            // },
            // {
            //     type: 'password',
            //     name: 'password',
            //     value: 'passwordValue',
            //     label: 'Password',
            //     placeholder: 'Enter your password',
            //     rules: 'required|min:6|max:12',
            //     prefixIcon: 'LockIcon',
            //     suffixIcon: 'EyeIcon',
            // },
            // {
            //     type: 'email',
            //     name: 'email',
            //     value: 'emailValue',
            //     label: 'Email',
            //     placeholder: 'Enter your email',
            //     rules: 'required|email',
            //     prefixIcon: 'MailIcon',
            //     disabled: false
            // },
            // {
            //     type: 'input-phone',
            //     name: 'phone',
            //     value: 'phoneValue',
            //     label: 'Telefono',
            //     placeholder: 'Introduce un telefono celular',
            //     rules: 'required',
            //     disabled: false
            // },
            // {
            //     type: 'input-select',
            //     name: 'select',
            //     value: 'selectValue',
            //     label: 'Telefono',
            //     placeholder: 'Introduce un telefono celular',
            //     rules: 'required',
            //     catalogo: [
            //         {
            //             label : 'Opción 1',
            //             value : 'opt1',
            //         },
            //         {
            //             label : 'Opción 2',
            //             value : 'opt2',
            //         },
            //         {
            //             label : 'Opción 3',
            //             value : 'opt3',
            //         },
            //     ],
            //     disabled: false
            // },
            // {
            //     type: 'input-money',
            //     name: 'money',
            //     value: 'moneyValue',
            //     label: 'Telefono',
            //     placeholder: 'Introduce un telefono celular',
            //     rules: 'required',
            //     catalogo: [],
            //     disabled: false
            // },
            {
                type        : 'input-switch',
                name        : 'switch',
                value       : 'switchValue',
                label       : 'Switch',
                placeholder : 'Introduce un telefono celular',
                rules       : 'required',
                size        : 'lg',
                disabled    : false,
                vertical    : true,
                catalogo: [
                    { text: 'Red', value: 'red' },
                    { text: 'Green', value: 'green' },
                    { text: 'Yellow (disabled)', value: 'yellow', disabled: true },
                    { text: 'Blue', value: 'blue' },
                ],
            }
        ],
      }
    },
    methods: {},
  }
  </script>
>
