<template>
<b-card
    class="card-browser-states"
    :title="title"
    no-body
  >
    <b-card-body>
      <div class="d-flex justify-content-between  flex-wrap">
        <div>
            <b-button
                v-if="config.btnNuevo"
                @click="() => { $emit('mtdNuevo') }"
            >Nuevo</b-button>
            <b-button
                v-if="config.btnFiltrar"
                @click="() => { $emit('mtdFiltrar') }"
            >Filtrar</b-button>
            <b-dropdown
                v-if="typeof config.btnOtros == 'array'"
                right
                text="Otras acciones"
            >
                <template v-for="(btnOtro, index) in config.btnOtros">
                    <b-dropdown-item v-if="typeof btnOtro.function == 'function'" :key="index" @click="btnOtro.function()">{{ btnOtro.label }}</b-dropdown-item>
                </template>
            </b-dropdown>

        </div>
        <!-- filter -->
        <b-form-group
        v-if="config.buscador"
        >
          <b-input-group size="sm">
            <b-form-input
              id="filterInput"
              v-model="filter"
              type="search"
              placeholder="Buscar ..."
            />
            <b-input-group-append>
              <b-button
                :disabled="!filter"
                variant="primary"
                @click="filter = ''"
              >
                <feather-icon icon="TrashIcon" />
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </div>
    </b-card-body>

    <b-table
      striped
      hover
      responsive
      class="position-relative"
      :per-page="perPage"
      :current-page="currentPage"
      :items="data"
      :fields="fields"
      :filter="filter"
      :filter-included-fields="filterOn"
      @filtered="onFiltered"
    >
    <template v-for="(field, index, item) in fields" v-slot:[`cell(${field.key})`]="data">
      <div v-if="field.type === 'switch'">
        <feather-icon v-if="data.item[field.key]"  size="21" icon="CheckIcon" class="ml-5 text-success" />
        <feather-icon v-if="!data.item[field.key]" size="21" icon="SlashIcon" class="ml-5 text-danger" />
      </div>
      <div v-else>
        <p>{{data.item[field.key]}}</p>
      </div>
    </template>
    </b-table>

    <b-card-body class="d-flex justify-content-between flex-wrap pt-0">
      <!-- PerPage Paginatio -->
      <div>
        <p>
            Mostrando {{ (currentPage - 1) * perPage + 1 }} - {{ (currentPage * perPage) > totalRows ? totalRows : (currentPage * perPage) }} de {{ totalRows }} registros.
        </p>

      </div>
      <!-- pagination -->
      <div>
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          first-number
          last-number
          prev-class="prev-item"
          next-class="next-item"
          class="mb-0"
        >
          <template #prev-text>
            <feather-icon
              icon="ChevronLeftIcon"
              size="18"
            />
          </template>
          <template #next-text>
            <feather-icon
              icon="ChevronRightIcon"
              size="18"
            />
          </template>
        </b-pagination>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
import {
    BCard,
    BTable,
    BAvatar,
    BBadge,
    BFormGroup,
    BDropdown,
    BDropdownItem,
    BDropdownDivider,
    BFormSelect,
    BPagination,
    BInputGroup,
    BFormInput,
    BInputGroupAppend,
    BButton,
    BCardBody,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import customHelpers  from '@helpers/customHelpers'
export default {
  directives: {
    Ripple,
  },
  mixins : [customHelpers],
  components: {
    BCard,
    BDropdown,
    BDropdownItem,
    BDropdownDivider,
    BTable,
    BAvatar,
    BBadge,
    BFormGroup,
    BFormSelect,
    BPagination,
    BInputGroup,
    BFormInput,
    BInputGroupAppend,
    BButton,
    BCardBody,
  },
  data() {
    return {
        perPage: 10,
        currentPage: 1,
        totalRows: 1,
        filter: null,
        filterOn: [],
        fields: [],
      /* eslint-disable global-require */

      /* eslint-disable global-require */
        status: [
            {1: 'Current', 2: 'Professional', 3: 'Rejected', 4: 'Resigned', 5: 'Applied',},
            {1: 'light-primary', 2: 'light-success', 3: 'light-danger', 4: 'light-warning', 5: 'light-info',}
        ],
    }
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => ({ text: f.label, value: f.key }))
    },
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.data.length
    let tmp = this.copyObject(this.columnas)
    tmp.unshift({key: 'index', label: 'Index',})
    this.fields =  this.copyObject(tmp)
  },
  props: {
    data: {
      type: Array,
      default : [],
    },
    columnas: {
      type: Array,
      default : [],
    },
    title: {
      type: String,
      default : 'Titulo por defecto',
    },
    config: {
      type: Object,
      default : {
        buscador : true,
        btnNuevo : true,
        btnFiltrar : true,
        btnOtros : null,
      },
    }

  },
  methods: {
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
  },
}
</script>
