<template>
    <b-card-code title="Simple Form Validation">
      <validation-observer ref="simpleRules">
        <b-form>
          <b-row v-for="(field, index) in formSchema" :key="index">
            <b-col v-if="field.type == 'phone'" md="6">
              <b-form-group>
                <validation-provider
                  #default="{ errors }"
                  :name="field.name"
                  :rules="field.rules"
                >
                  <VuePhoneNumberInput
                    v-model="formData[field.name]"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col v-else md="6">
              <b-form-group>
                <validation-provider
                  #default="{ errors }"
                  :name="field.name"
                  :rules="field.rules"
                >
                  <b-form-input
                    v-model="formData[field.name]"
                    :type="field.type"
                    :state="errors.length > 0 ? false:null"
                    placeholder="First Name"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
          </b-row>
          <b-col cols="12">
            <b-button
              variant="primary"
              type="submit"
              @click.prevent="validationForm"
            >
              Submit
            </b-button>
          </b-col>
        </b-form>
      </validation-observer>
    </b-card-code>
  </template>
  <script>
  import BCardCode from '@core/components/b-card-code'
  import { ValidationProvider, ValidationObserver, localize  } from 'vee-validate'
  import {
    BFormInput,
    BFormGroup,
    BForm,
    BRow,
    BCol,
    BButton,
    BCardText,
  } from 'bootstrap-vue'
  import { required, email } from '@validations'
  import VuePhoneNumberInput from 'vue-phone-number-input';
    import 'vue-phone-number-input/dist/vue-phone-number-input.css';

    import es from "vee-validate/dist/locale/es.json";
  export default {
    components: {
      BCardCode,
      ValidationProvider,
      ValidationObserver,
      BCardText,
      BFormInput,
      BFormGroup,
      BForm,
      BRow,
      BCol,
      BButton,
      VuePhoneNumberInput,
    },
    data() {
      return {
      locale: 'ar',
        formData: {},
      }
    },


    beforeCreate() {},
    beforeMount() {
        this.formSchema.map((field)=>{
            this.formData[field.name] = null
        })
    },
    mounted() {
        localize(this.locale)
    },
    props :{
        formSchema: {
            required: true,
            type: Array,
            default: [],
        },
    },
    methods: {
      validationForm() {
        this.$refs.simpleRules.validate().then((success) => {
          if (success) {
            alert('form submitted!')
          }
        })
      },
    },
  }
  </script>
>
