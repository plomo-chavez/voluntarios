<template>
    <div>
      <validation-observer ref="simpleRules">
        <b-row>
            <pre>{{ form }}</pre>
          <b-col
            v-for="(input,indxInput) in schema"
            :key="'input-'+indxInput"
            :class="(typeof input.classContainer != 'undefined'?input.classContainer:'') + ' col-12 mb-1' "
          >
        <!-- input text -->
            <div v-if="input.type === 'text'">
              <validation-provider
                #default="{ errors }"
                :name=" (typeof input.name  != 'undefined'?input.name:'')"
                :rules="(typeof input.rules != 'undefined'?input.rules:'')"
              >
              <p
                :for="input.name"
                :class="(typeof input.classLabel != 'undefined'?input.classLabel + ' m-0 p-0 ':'') + ' font-weight-bold p-0 m-0' "
              >{{(typeof input.label != 'undefined'?input.label:'')}}</p>
                <b-form-group
                  class=" p-0 m-0"
                >
                  <b-input-group
                    :prepend="(typeof input.prefixText != 'undefined'?input.prefixText:'')"
                    :append=" (typeof input.sufijoText != 'undefined'?input.sufijoText:'')"
                    class="input-group-merge"
                  >
                    <b-input-group-prepend v-if="(typeof input.prefixIcon != 'undefined')" is-text>
                      <feather-icon :icon="input.prefixIcon" />
                    </b-input-group-prepend>
                    <b-form-input
                      :id="   input.name"
                      :ref="  input.name"
                      :name=" input.name"
                      :value="form[input.value]"
                      @input="changeData(input.value,$event)"
                      :disabled=" formDisabled?true:(typeof input.disabled != 'undefined'?input.disabled:false)"
                      :placeholder="(typeof input.placeholder != 'undefined'?input.placeholder:'Introduce un dato valido')"
                      class="bg-white col-12"
                    />
                    <b-input-group-append v-if="(typeof input.sufijoIcon != 'undefined')" is-text>
                      <feather-icon :icon="input.sufijoIcon" />
                    </b-input-group-append>
                  </b-input-group>
                </b-form-group>
                <p class="m-0 p-0" v-if="errors[0]"><small class=" m-0 p-0 font-weight-bold text-danger">{{ errors[0] }}</small></p>
              </validation-provider>
            </div>
        <!-- input password -->
            <div v-if="input.type === 'password'">
              <validation-provider
                #default="{ errors }"
                :name=" (typeof input.name  != 'undefined'?input.name:'')"
                :rules="(typeof input.rules != 'undefined'?input.rules:'')"
              >
              <p
                :for="input.name"
                :class="(typeof input.classLabel != 'undefined'?input.classLabel + ' m-0 p-0 ':'') + ' font-weight-bold p-0 m-0' "
              >{{(typeof input.label != 'undefined'?input.label:'')}}</p>
                <b-form-group
                  class=" p-0 m-0"
                >
                  <b-input-group
                    :prepend="(typeof input.prefixText != 'undefined'?input.prefixText:'')"
                    :append=" (typeof input.sufijoText != 'undefined'?input.sufijoText:'')"
                    class="input-group-merge"
                  >
                    <b-input-group-prepend v-if="(typeof input.prefixIcon != 'undefined')" is-text>
                      <feather-icon :icon="input.prefixIcon" />
                    </b-input-group-prepend>
                    <b-form-input
                      :id="   input.name"
                      :type="input.type"
                      :ref="  input.name"
                      :name=" input.name"
                      :value="form[input.value]"
                      @input="form[input.value] = $event"
                      :disabled=" formDisabled?true:(typeof input.disabled != 'undefined'?input.disabled:false)"
                      :placeholder="(typeof input.placeholder != 'undefined'?input.placeholder:'Introduce un dato valido')"
                      class="bg-white col-12"
                    />
                    <b-input-group-append v-if="(typeof input.sufijoIcon != 'undefined')" is-text>
                      <feather-icon :icon="input.sufijoIcon" />
                    </b-input-group-append>
                  </b-input-group>
                </b-form-group>
                <p class="m-0 p-0" v-if="errors[0]"><small class=" m-0 p-0 font-weight-bold text-danger">{{ errors[0] }}</small></p>
              </validation-provider>
            </div>
        <!-- input email -->
            <div v-if="input.type === 'email'">
              <validation-provider
                #default="{ errors }"
                :name=" (typeof input.name  != 'undefined'?input.name:'')"
                :rules="(typeof input.rules != 'undefined'?input.rules:'')"
              >
              <p
                :for="input.name"
                :class="(typeof input.classLabel != 'undefined'?input.classLabel + ' m-0 p-0 ':'') + ' font-weight-bold p-0 m-0' "
              >{{(typeof input.label != 'undefined'?input.label:'')}}</p>
                <b-form-group
                  class=" p-0 m-0"
                >
                  <b-input-group
                    :prepend="(typeof input.prefixText != 'undefined'?input.prefixText:'')"
                    :append=" (typeof input.sufijoText != 'undefined'?input.sufijoText:'')"
                    class="input-group-merge"
                  >
                    <b-input-group-prepend v-if="(typeof input.prefixIcon != 'undefined')" is-text>
                      <feather-icon :icon="input.prefixIcon" />
                    </b-input-group-prepend>
                    <b-form-input
                      :id="   input.name"
                      :type="input.type"
                      :ref="  input.name"
                      :name=" input.name"
                      :value="form[input.value]"
                      @input="form[input.value] = $event"
                      :disabled=" formDisabled?true:(typeof input.disabled != 'undefined'?input.disabled:false)"
                      :placeholder="(typeof input.placeholder != 'undefined'?input.placeholder:'Introduce un dato valido')"
                      class="bg-white col-12"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    />
                    <b-input-group-append v-if="(typeof input.sufijoIcon != 'undefined')" is-text>
                      <feather-icon :icon="input.sufijoIcon" />
                    </b-input-group-append>
                  </b-input-group>
                </b-form-group>
                <p class="m-0 p-0" v-if="errors[0]"><small class=" m-0 p-0 font-weight-bold text-danger">{{ errors[0] }}</small></p>
              </validation-provider>
            </div>
        <!-- input text-area -->
            <div v-if="input.type === 'text-area'">
              <!-- Provider de validación -->
              <validation-provider
                #default="{ errors }"
                :name=" (typeof input.name  != 'undefined'?input.name:'')"
                :rules="(typeof input.rules != 'undefined'?input.rules:'')"
              >
              <!-- Label -->
              <p
                :for="input.name"
                :class="(typeof input.classLabel != 'undefined'?input.classLabel + ' m-0 p-0 ':'') + ' font-weight-bold p-0 m-0' "
              >{{(typeof input.label != 'undefined'?input.label:'')}}</p>
              <!-- Input -->
              <b-form-textarea
                :id="   input.name"
                :ref="  input.name"
                :name=" input.name"
                :value="form[input.value]"
                @input="form[input.value] = $event"
                class="col-12 char-textarea"
                :disabled=" formDisabled?true:(typeof input.disabled != 'undefined'?input.disabled:false)"
                :placeholder="(typeof input.placeholder != 'undefined'?input.placeholder:'')"
                rows="3"
                :class="typeof input.counterChar == 'undefined'?'': ( !input.counterChar ? '' : (typeof input.maxChar == 'undefined'?'':((form[input.value] == null? 0 : form[input.value].length) <= input.maxChar)?'':' text-danger '))"
              />
              <!-- Contador de caracteres -->
              <small
                v-if=" form[input.value] != null && (typeof input.counterChar != 'undefined'?input.counterChar:false) "
                class="textarea-counter-value float-right"
              ><span class="char-count">{{   form[input.value].length }}</span></small>
              <!-- Errores de validación -->
              <p class="m-0 p-0" v-if="errors[0]"><small class=" m-0 p-0 font-weight-bold text-danger">{{ errors[0] }}</small></p>
              </validation-provider>
            </div>
        <!-- input flat-pickr -->
            <div v-if="input.type === 'flat-pickr'">
              <!-- Provider de validación -->
              <validation-provider
                #default="{ errors }"
                :name=" (typeof input.name  != 'undefined'?input.name:'')"
                :rules="(typeof input.rules != 'undefined'?input.rules:'')"
              >
              <!-- Label -->
              <p
                :for="input.name"
                :class="(typeof input.classLabel != 'undefined'?input.classLabel + ' m-0 p-0 ':'') + ' font-weight-bold p-0 m-0' "
              >{{(typeof input.label != 'undefined'?input.label:'')}}</p>
              <!-- input -->
              <b-input-group class="mb-3 bg-white ">
                <b-input-group-prepend>
                  <b-form-datepicker
                  style="z-index: 0;"
                    :id="   input.name"
                    :ref="  input.name"
                    :name=" input.name"
                    button-only
                    :value="form[input.value]"
                    :min="(typeof input.minDate != 'undefined'?input.minDate:'')"
                    :max="(typeof input.maxDate != 'undefined'?input.maxDate:'')"
                    @input="form[input.value] = $event"
                    :disabled=" formDisabled?true:(typeof input.disabled != 'undefined'?input.disabled:false) "
                    :placeholder=" (typeof input.placeholder != 'undefined'?input.placeholder:'Introduce una fecha valida') "
                    :show-decade-nav="true"
                    :hide-header="true"
                    size="sm"
                    locale="es"
                  />
                </b-input-group-prepend>
                <b-form-input
                  :value="form[input.value]"
                  type="text"
                  disabled
                  :placeholder="(typeof input.placeholder != 'undefined'?input.placeholder:'Introduce una fecha valida')"
                  autocomplete="off"
                />
              </b-input-group>
              <!-- Errores de validación -->
              <p class="m-0 p-0" v-if="errors[0]"><small class=" m-0 p-0 font-weight-bold text-danger">{{ errors[0] }}</small></p>
              </validation-provider>
            </div>
        <!-- input input-phone -->
            <div v-if="input.type === 'input-phone'">
              <!-- Provider de validación -->
              <validation-provider
                #default="{ errors }"
                :name=" (typeof input.name  != 'undefined'?input.name:'')"
                :rules="(typeof input.rules != 'undefined'?  input.rules + '' : '' )"
                >
                <!-- Label -->
              <p
                :for="input.name"
                :class="(typeof input.classLabel != 'undefined'?input.classLabel + ' m-0 p-0 ':'') + ' font-weight-bold p-0 m-0' "
              >{{(typeof input.label != 'undefined'?input.label:'')}}</p>
              <!-- input -->
              <VuePhoneNumberInput
                :id="   input.name"
                :ref="  input.name"
                :name=" input.name"
                :value="form[input.value]"
                @input="changeData(input.value,$event)"
                class="bg-white w-100 char-textarea"
                :disabled=" formDisabled?true:(typeof input.disabled != 'undefined'?input.disabled:false)"
                :placeholder="(typeof input.placeholder != 'undefined'?input.placeholder:'')"
                :default-country-code="'MX'"
                :countries-height="50"
                :preferred-countries="['MX','US']"
                :translations="{
                  countrySelectorLabel: 'Codigo',
                  countrySelectorError: 'Selecciona un país',
                  phoneNumberLabel    : null,
                  example             : 'Ejemplo :'
                }"
              />
              <!-- Errores de validación -->
              <p class="m-0 p-0" v-if="errors[0]"><small class=" m-0 p-0 font-weight-bold text-danger col-12">{{ errors[0] }}</small></p>
              <p class="m-0 p-0"><small v-if="errorsPersonalizados[input.name]" class="m-0 p-0 font-weight-bold text-danger col-12">{{ errorsPersonalizados[input.name] }}</small></p>
              </validation-provider>
            </div>
        <!-- input input-money -->
            <div v-if="input.type === 'input-money'">
                <!-- Provider de validación -->
                <validation-provider
                    #default="{ errors }"
                    :name=" (typeof input.name  != 'undefined'?input.name:'')"
                    :rules="(typeof input.rules != 'undefined'?  input.rules + '' : '' )"
                >                <!-- Label -->
                    <p
                        :for="input.name"
                        :class="(typeof input.classLabel != 'undefined'?input.classLabel + ' m-0 p-0 ':'') + ' font-weight-bold p-0 m-0' "
                    >{{(typeof input.label != 'undefined'?input.label:'')}}</p>
                    <!-- input -->

                    <cleave
                        :id="   input.name"
                        :ref="  input.name"
                        :name=" input.name"
                        :value="form[input.value]"
                        @input="changeData(input.value,$event)"
                        class="bg-white w-100 char-textarea form-control"
                        :disabled=" formDisabled?true:(typeof input.disabled != 'undefined'?input.disabled:false)"
                        :placeholder="(typeof input.placeholder != 'undefined'?input.placeholder:'')"
                        :raw="false"
                        :options="optionsInputMoney"
                    />
                    <!-- Errores de validación -->
                    <p class="m-0 p-0" v-if="errors[0]"><small class=" m-0 p-0 font-weight-bold text-danger col-12">{{ errors[0] }}</small></p>
                    <p class="m-0 p-0"><small v-if="errorsPersonalizados[input.name]" class="m-0 p-0 font-weight-bold text-danger col-12">{{ errorsPersonalizados[input.name] }}</small></p>
                </validation-provider>
            </div>
        <!-- input input-select -->
            <div v-if="input.type === 'input-select'">
                <!-- Provider de validación -->
                <validation-provider
                    #default="{ errors }"
                    :name=" (typeof input.name  != 'undefined'?input.name:'')"
                    :rules="(typeof input.rules != 'undefined'?  input.rules + '' : '' )"
                >
                    <!-- :rules="(typeof input.rules != 'undefined'?  input.rules + '|min:12' : 'min:10' )" -->
                    <!-- Label -->
                    <p
                        :for="input.name"
                        :class="(typeof input.classLabel != 'undefined'?input.classLabel + ' m-0 p-0 ':'') + ' font-weight-bold p-0 m-0' "
                    >{{(typeof input.label != 'undefined'?input.label:'')}}</p>
                    <!-- input -->

                    <b-form-group>
                        <v-select
                            :id="   input.name"
                            :ref="  input.name"
                            :name=" input.name"
                            :value="form[input.value]"
                            @input="changeData(input.value,$event)"
                            class="bg-white w-100 char-textarea"
                            :disabled=" formDisabled?true:(typeof input.disabled != 'undefined'?input.disabled:false)"
                            :placeholder="(typeof input.placeholder != 'undefined'?input.placeholder:'')"
                            :options="input.catalogo"
                        >
                            <span slot="no-options">No hay opciones.</span>
                        </v-select>

                    </b-form-group>
                    <!-- Errores de validación -->
                    <p class="m-0 p-0" v-if="errors[0]"><small class=" m-0 p-0 font-weight-bold text-danger col-12">{{ errors[0] }}</small></p>
                    <p class="m-0 p-0"><small v-if="errorsPersonalizados[input.name]" class="m-0 p-0 font-weight-bold text-danger col-12">{{ errorsPersonalizados[input.name] }}</small></p>
                </validation-provider>
            </div>
        <!-- input input-switch -->
            <div v-if="input.type === 'input-switch'">
                <!-- Provider de validación -->
                <validation-provider
                    #default="{ errors }"
                    :name=" (typeof input.name  != 'undefined'?input.name:'')"
                    :rules="(typeof input.rules != 'undefined'?  input.rules + '' : '' )"
                >
                    <!-- :rules="(typeof input.rules != 'undefined'?  input.rules + '|min:12' : 'min:10' )" -->
                    <!-- Label -->
                    <p
                        :for="input.name"
                        :class="(typeof input.classLabel != 'undefined'?input.classLabel + ' m-0 p-0 ':'') + ' font-weight-bold p-0 m-0' "
                    >{{(typeof input.label != 'undefined'?input.label:'')}}</p>
                    <!-- input -->
                    <div>
                        <b-form-group label="Stacked (vertical) switch style checkboxes">
                            <b-form-checkbox-group
                                :id="   input.name"
                                :ref="  input.name"
                                :name=" input.name"
                                :size="typeof input.size == 'undefined' ? 'sm' : input.size"
                                :value="form[input.value]"
                                @input="{
                                    console.log($event)
                                    changeData(input.value,$event)
                                }"
                                :options="input.catalogo"
                                >
                                <template #default="{ option, checked }">
                                    <div>
                                    <!-- <b-form-checkbox :value="option.value" :checked="checked"></b-form-checkbox> -->
                                    <span>{{ option. }}</span>
                                    </div>
                                </template>
                        </b-form-checkbox-group>
                        </b-form-group>
                    </div>
                    <!-- Errores de validación -->
                    <p class="m-0 p-0" v-if="errors[0]"><small class=" m-0 p-0 font-weight-bold text-danger col-12">{{ errors[0] }}</small></p>
                    <p class="m-0 p-0"><small v-if="errorsPersonalizados[input.name]" class="m-0 p-0 font-weight-bold text-danger col-12">{{ errorsPersonalizados[input.name] }}</small></p>
                </validation-provider>
            </div>
          </b-col>
        </b-row>
      </validation-observer>
      <!-- Botones de acción -->
      <div class="col-12 m-0 p-0 mt-4 d-flex justify-content-end">
        <b-button
          v-if="formDisabled"
          class=""
          variant="relief-warning"
          type="button"
          @click=" formDisabled = false"
        >Editar</b-button>
        <b-button
          v-if="(disabledForm) ? (!formDisabled) : btnCancelar "
          class=" mr-1"
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          variant="outline-secondary"
          type="button"
          @click="cancelar()"
        >Cancelar</b-button>
        <b-button
          v-if="!formDisabled"
          class=""
          variant="relief-primary"
          type="submit"
          @click.prevent="validationForm"
        >Guardar</b-button>
      </div>
    </div>
  </template>

  <script>
    import {
      BRow,
      BCol,
      BFormDatepicker,
      BFormGroup,
      BFormInput,
      BFormCheckbox,
      BForm,
      BButton,
      BFormTextarea,
      BInputGroup,
      BInputGroupPrepend,
      BInputGroupAppend,
      BFormCheckboxGroup
    } from 'bootstrap-vue'
    import vSelect from 'vue-select'
    import {
      ValidationProvider,
      ValidationObserver,
      localize,
      extend
    } from 'vee-validate'
    import {
      password,
      required
    } from '@validations'
    import flatPickr from 'vue-flatpickr-component'
    import Ripple from 'vue-ripple-directive'
    import customHelpers  from '@helpers/customHelpers'
    import es from "vee-validate/dist/locale/es.json";
    import VuePhoneNumberInput from 'vue-phone-number-input';
    import 'vue-phone-number-input/dist/vue-phone-number-input.css';
    import Cleave from 'vue-cleave-component'
    // eslint-disable-next-line import/no-extraneous-dependencies
    import 'cleave.js/dist/addons/cleave-phone.us'
  // eslint-disable-next-line import/no-extraneous-dependencies
  // import 'cleave.js/dist/addons/cleave-phone.us'
  // import 'cleave.js/dist/addons/cleave-phone.us'
    import apis from '@/apis/useApis'

  export default {
    directives: {
      Ripple,
    },
    components: {
      VuePhoneNumberInput,
      BFormCheckboxGroup,
      BRow,
      Cleave,
      flatPickr,
      BFormTextarea,
      BCol,
      vSelect,
      BFormDatepicker,
      BFormGroup,
      BFormInput,
      BFormCheckbox,
      BForm,
      BButton,
      BInputGroup,
      BInputGroupPrepend,
      BInputGroupAppend,
      ValidationProvider,
      ValidationObserver,
    },
    data() {
        return {
            errorsPersonalizados : {},
            form : {},
            openModal:false,
            password,
            required,
            formDisabled : false,
            optionsInputMoney : {
                numeral: true,
                prefix: '$ ',
                numeralThousandsGroupStyle: 'thousand',
            },
        }
    },
    props: {
      schema: {
        type    : Array,
        default : []
      },
      data: {
        type    : Object,
        default : null
      },
      getForm:{
        type    : Boolean,
        default : false,
      },
      disabledForm:{
        type    : Boolean,
        default : false,
      },
      btnCancelar:{
        type    : Boolean,
        default : true,
      },
    },
    mixins : [customHelpers],
    created() {},
    watch: {
      data(){
        // this.inicializar();
      },
    },
    computed: {
    },
    beforeMount() {
      this.formDisabled = this.disabledForm,
      localize('es',es);
      this.inicializar();
    },
    methods: {
      changeData(field,valor){
        this.$set(this.form,field,valor);
        this.validacionesExternas()
      },
      changeFormat(input,valor){
        this.form[input] = valor;
        console.log('input',input);
        console.log('valor',valor);
      },
      onContext(ctx) {
        // The date formatted in the locale, or the `label-no-date-selected` string
        this.formatted = ctx.selectedFormatted
        // The following will be an empty string until a valid date is entered
        this.selected = ctx.selectedYMD
      },
      cancelar(){
        if( this.disabledForm ){
          this.formDisabled = true;
        }else{
          this.$emit('cancelar');
        }
      },
      inicializar(){
        let tmp = {};
        this.schema.forEach(item => {
            if(item.type == 'input-switch'){
                let valor = this.data == null ? [] : ( this.data.hasOwnProperty(item.value) ? item.value : [] )
            }else{
                let valor = this.data == null ? null : ( this.data.hasOwnProperty(item.value) ? item.value : null )
            }
          tmp[item.value] = valor;
        })
        console.log('tmp', tmp)
        this.$set(this,'form',tmp);
      },
      validacionesExternas(){
        let hayErrores = false;
        this.schema.map((field) => {
            if (hayErrores == false) {
                if (field.type == 'input-phone') {
                    if (!this.$refs[field.name][0].isValid) {
                            this.errorsPersonalizados[field.name] = 'El ' + field.label.toLowerCase() + ' debe de ser valido.'
                            console.log(this.errorsPersonalizados)
                            hayErrores = true
                    } else {
                        delete(this.errorsPersonalizados[field.name])
                    }
                }
            }
        })
        return hayErrores;
      },
      validationForm() {
        this.$refs.simpleRules.validate().then(success => {
            let hayErrores = this.validacionesExternas();
            if (hayErrores == false) {
                console.log('Guardando')
                // this.$emit('formExport',this.form);
            }
        })
      },
    },
  }
  </script>

  <style lang="scss">
    @import '~@resources/scss/vue/libs/vue-select.scss';
    @import '~@resources/scss/vue/libs/vue-flatpicker.scss';
  </style>
