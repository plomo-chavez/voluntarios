<template>
        <FormFactory
            class="col-10 mx-auto"
            withCard
            :schema="formSchema"
            @formExport="formOkay"
        />
  </template>
  <script>
  import FormFactory from '@currentComponents/FormFactory.vue'

  export default {
    components: {
        FormFactory
    },
    data() {
      return {
        formSchema: [
            {
                classContainer:'col-lg-4 col-md-6 col-12',
                type        : 'input-select',
                name        : 'persona',
                value       : 'persona',
                label       : 'Persona'
            },
            {
                classContainer:'col-lg-4 col-md-6 col-12',
                type        : 'input-select',
                name        : 'tipo de usuario',
                value       : 'tipoUsuario',
                label       : 'Tipo de usuario',
                rules       : 'required',
                catalogo    : 'tiposUsuario',
            },
            {
                classContainer:'col-lg-4 col-md-6 col-12',
                type        : 'text',
                name        : 'usuario',
                value       : 'usuario',
                label       : 'Usuario',
                placeholder : 'Introduce un usuario',
                rules       : 'required',
                prefixIcon  : 'UserIcon',
            },
            {
                classContainer:'col-lg-4 col-md-6 col-12',
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
                classContainer:'col-lg-4 col-md-6 col-12',
                type        : 'email',
                name        : 'correo',
                value       : 'correo',
                prefixIcon  : 'MailIcon',
                rules       : 'required|email',
                label       : 'Correo electronico',
                placeholder : 'Introduce un correo electronico',
            },
            {
                classContainer:'col-lg-4 col-md-6 col-12',
                type        : 'input-phone',
                name        : 'telefono',
                value       : 'telefono',
                label       : 'Telefono',
                rules       : 'required',
                placeholder: 'Introduce un telefono celular',
            },
            {
                classContainer:' col-lg-4 col-md-4 col-sm-12 col-12',
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
                classContainer:' col-lg-4 col-md-4 col-sm-12 col-12',
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
                classContainer:' col-lg-4 col-md-4 col-sm-12 col-12',
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
