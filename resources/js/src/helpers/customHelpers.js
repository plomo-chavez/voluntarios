
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import '@resources/scss/vue/libs/vue-sweetalert.scss';

export default {
  methods: {
    loading(tipo = true){
      document.getElementById("loading-bg").style.display = tipo?"block":"none";
    },
    messageToast ({message='',color='success',title='Notificación de sistema',icon='MessageCircleIcon',time=''}) {

      this.$toast({
        component: ToastificationContent,
        position: 'top-right',
        props: {
          title   : title,
          icon    : icon,
          variant : color,
          text    : message,
        },
      })
    },
    messageSweet ({
        message='',
        color='success',
        title='Notificación de sistema',
        icon='success',
        time=3000
    }) {
        // icon = success / error / info / warning
        this.$swal({
          title: title,
          text: message,
          icon: icon,
          timer: time,
          customClass: {
            confirmButton: 'btn btn-primary',
          },
          buttonsStyling: false,
        })
    },
    copyObject (data) {
        return JSON.parse(JSON.stringify(data))
    },
    messageConfirm({
        message='Esta acción ya no se va a poder deshacer',
        title='¿Desea eliminar este registro?',
        icon='warning',
        showCancelButton= true,
        confirmButtonText= 'Si, eliminar',
        cancelButtonText= 'No, cancelar',
        cancelFunction = null,
        confirmFunction = null
    }){

        console.log(message)
        this.$swal({
            title: title,
            text: message,
            icon: icon,
            showCancelButton: showCancelButton,
            confirmButtonText:confirmButtonText,
            cancelButtonText:cancelButtonText,
            customClass: {
              confirmButton: 'btn btn-primary',
              cancelButton: 'btn btn-outline-danger ml-1',
            },
            buttonsStyling: false,
          }).then(result => {
            if (result.value) {
                if (typeof confirmFunction == 'function'){
                    confirmFunction()
                } else {
                    console.log('Falta funcion de confirmación')
                }
            } else if (result.dismiss === 'cancel') {
                if (typeof cancelFunction == 'function'){
                    cancelFunction()
                } else {
                    this.$swal({
                        title: 'Proceso cancelado',
                        text: 'Cancelo correctamente el proceso',
                        icon: 'error',
                        timer: 3000,
                        customClass: {
                          confirmButton: 'btn btn-success',
                        },
                    })
                }
            }
          })
    }
  }
}


// export const customHelpers = {
//   methods: {
//     message ({message='',color='success',title='Notificación de sistema',icon='MessageCircleIcon',time=''}) {

//       this.$toast({
//         component: ToastificationContent,
//         position: 'top-right',
//         props: {
//           title   : title,
//           icon    : icon,
//           variant : color,
//           text    : message,
//         },
//       })
//     }
//   },
// }

// // Ignore below for now. We will remove it when we add more transition in future.
// export const _ = null
