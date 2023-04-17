<template>
    <div>
        <div>
            <!-- <pre>{{ data[0].tipo_usuario }}</pre> -->
            <VistaUno
                :data="data"
                :columnas="columnas"
                @mdoEditar="editar"
            />
        </div>
        <div v-if="showForm">
            <FormFactory
                class="col-10 mx-auto"
                withCard
                :schema="formSchema"
                @formExport="formOkay"
            />
        </div>
    </div>
  </template>
  <script>
    import FormFactory from '@currentComponents/FormFactory.vue'
    import VistaUno from '@currentComponents/VistaUno.vue'
    import peticiones from '@/apis/usePeticiones'
    import customHelpers  from '@helpers/customHelpers'

  export default {
    components: {
        FormFactory,
        VistaUno
    },
    data() {
      return {
        showForm : false,
        data:[],
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
        columnas : [
            {
                type    : 'text',
                key     : 'usuario',
                label   : 'Usuario',
                sortable: true
            },
            {
                key     : 'tipo_usuario.nombre',
                label   : 'Tipo de usuario',
                sortable: true
            },
            {
                type    : 'text',
                key     : 'email',
                label   : 'Correo',
                sortable: true
            },
            {
                type    : 'text',
                key     : 'telefono',
                label   : 'Telefono',
                sortable: true
            },
            {
                type    : 'text',
                key     : 'persona',
                label   : 'Persona',
                sortable: true
            },
            {
                type    : 'switch',
                key     : 'accesoMovil',
                label   : 'Acceso movil',
                sortable: true
            },
            {
                type    : 'switch',
                key     : 'accesoWeb',
                label   : 'Acceso Web',
                sortable: true
            },
            {
                type    : 'text',
                key     : 'estatus',
                label   : 'Estatus',
                sortable: true
            },
            {
                type    : 'text',
                type    : 'switch',
                key     : 'bloqueado',
                label   : 'Bloqueado',
                sortable: true
            },
            {
                type    : 'switch',
                key     : 'validado',
                label   : 'Validado',
                sortable: true
            },
        ]
      }
    },
    mixins : [customHelpers],
    beforeMount() {
        this.inicializar()
    },
    methods: {
        inicializar(){
            peticiones
                .usuarios({})
                .then(response => {
                    this.data = response.data.data
                    console.log(this.data)
                })
                .catch(error   => { console.log(error); })
        },
        formOkay (form) {
            console.log('form: ',form)
        },
        editar (data) {
            let tmp = this.copyObject(data)

            console.log('Editar -> ',data)
        },
    },
  }
  </script>
