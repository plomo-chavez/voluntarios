<template>
        <FormFactory
            :schema="formSchema"
            @formExport="formOkay"
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
                type        : 'input-select',
                name        : 'persona',
                value       : 'persona',
                label       : 'Persona',
                catalogo    : [],
            },
            {
                type        : 'input-select',
                name        : 'tipo de usuario',
                value       : 'tipoUsuario',
                label       : 'Tipo de usuario',
                // rules       : 'required',
                catalogo    : [],
            },
            {
                type        : 'text',
                name        : 'usuario',
                value       : 'usuario',
                label       : 'Usuario',
                placeholder : 'Introduce un usuario',
                rules       : 'required',
                prefixIcon  : 'UserIcon',
            },
            {
                type        : 'password',
                name        : 'contraseña',
                value       : 'contraseña',
                label       : 'Contraseña',
                placeholder : 'Introduce una contraseña',
                rules       : 'required',
                // rules       : 'required|min:6|max:12',
                prefixIcon  : 'LockIcon',
            },
            {
                type        : 'email',
                name        : 'correo',
                value       : 'correo',
                prefixIcon  : 'MailIcon',
                rules       : 'required|email',
                label       : 'Correo electronico',
                placeholder : 'Introduce un correo electronico',
            },
            {
                type        : 'input-phone',
                name        : 'telefono',
                value       : 'telefono',
                label       : 'Telefono',
                rules       : 'required',
                placeholder: 'Introduce un telefono celular',
            },
            {
                type        : 'input-switch',
                name        : 'accesoMovil',
                value       : 'accesoMovil',
                label       : 'Acceso a la plataforma movil',
                rules       : 'required',
                labels      : {
                                'on' : "Si",
                                'off': "No"
                            },
            },
            {
                type        : 'input-switch',
                name        : 'accesoWeb',
                value       : 'accesoWeb',
                label       : 'Acceso a la plataforma web',
                rules       : 'required',
                labels      : {
                                'on' : "Si",
                                'off': "No"
                            },
            },
            {
                type        : 'input-switch',
                name        : 'bloqueado',
                value       : 'bloqueado',
                label       : '¿Esta bloqueado?',
                rules       : 'required',
                labels      : {
                                'on' : "Si",
                                'off': "No"
                            },
            },
        ],
      }
    },
    methods: {
        formOkay (form) {
            console.log('form: ',form)
        }
    },
  }
  </script>
>
