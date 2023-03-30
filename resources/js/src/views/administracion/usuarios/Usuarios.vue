<<template>
    <b-card-code title="Simple Form Validation">
      <validation-observer ref="simpleRules">
        <b-form>
          <b-row v-for="(field, index) in formSchema" :key="index">
            <b-col md="6">
              <b-form-group>
                <validation-provider
                  :name="field.name"
                  :rules="field.rules"
                  #default="{ errors }"
                >
                  <b-form-input
                    :type="field.type"
                    :v-model="formData[field.name]"
                    :state="errors.length > 0 ? false : null"
                    :placeholder="field.placeholder"
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
  import { ValidationProvider, ValidationObserver } from 'vee-validate'
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
    },
    data() {
      return {
        formSchema: [
            {
            name: 'namee',
            type:'text',
            label: 'First Name',
            placeholder: 'First Name',
            rules: 'required',
            },
            {
                name: 'email',
            type:'email',
                label: 'Email',
                placeholder: 'Email',
                rules: 'required|email',
            },
  {
    name: 'phone',
            type:'text',
    label: 'Teléfono',
    placeholder: 'Escribe tu número de teléfono',
    rules: 'required|phone'
  }
        ],
        formData: {
          name: '',
        },
      }
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
