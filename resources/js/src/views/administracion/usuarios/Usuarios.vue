<template>
    <div>
      <b-form @submit.prevent="submitForm">
        <b-form-group id="nombreGroup"
                      label="Nombre"
                      label-for="nombreInput"
                      :invalid-feedback="nombreFeedback"
                      :state="nombreState">
          <b-form-input id="nombreInput"
                        v-model="nombre"
                        :state="nombreState"
                        required></b-form-input>
        </b-form-group>

        <b-form-group id="correoGroup"
                      label="Correo electrónico"
                      label-for="correoInput"
                      :invalid-feedback="correoFeedback"
                      :state="correoState">
          <b-form-input id="correoInput"
                        v-model="correo"
                        type="email"
                        :state="correoState"
                        required></b-form-input>
        </b-form-group>

        <b-form-group id="telefonoGroup"
                      label="Teléfono"
                      label-for="telefonoInput"
                      :invalid-feedback="telefonoFeedback"
                      :state="telefonoState">
          <b-form-input id="telefonoInput"
                        v-model="telefono"
                        type="tel"
                        :state="telefonoState"
                        required></b-form-input>
        </b-form-group>

        <b-form-group id="switchGroup"
                      label="Activo"
                      label-for="switchInput"
                      :state="switchState">
          <b-form-checkbox id="switchInput"
                           v-model="activo"
                           :state="switchState"></b-form-checkbox>
        </b-form-group>

        <b-button type="submit"
                  variant="primary"
                  :disabled="!formIsValid">Enviar</b-button>
      </b-form>
    </div>
  </template>

<script>
import { BForm, BFormGroup, BFormInput, BFormCheckbox, BButton } from 'bootstrap-vue'

export default {
  components: {
    BForm,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    BButton,
  },
    data() {
      return {
        nombre: '',
        nombreState: null,
        nombreFeedback: 'Ingrese su nombre',
        correo: '',
        correoState: null,
        correoFeedback: 'Ingrese un correo electrónico válido',
        telefono: '',
        telefonoState: null,
        telefonoFeedback: 'Ingrese un número de teléfono válido',
        activo: false,
      }
    },
    computed: {
      formIsValid() {
        return this.nombre && this.correo && this.telefono
      },
      switchState() {
        return this.activo ? 'success' : 'danger'
      },
    },
    methods: {
      submitForm() {
        if (this.formIsValid) {
          // envía el formulario
        } else {
          if (!this.nombre) {
            this.nombreState = false
          }
          if (!this.correo) {
            this.correoState = false
          }
          if (!this.telefono) {
            this.telefonoState = false
          }
        }
      },
    },
  }
  </script>
