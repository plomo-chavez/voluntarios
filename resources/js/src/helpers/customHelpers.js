
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
export default {
  methods: {
    loading(tipo = true){
      document.getElementById("loading-bg").style.display = tipo?"block":"none";
    },
    message ({message='',color='success',title='Notificación de sistema',icon='MessageCircleIcon',time=''}) {

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
    copyObject (data) {
        return JSON.parse(JSON.stringify(data))
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
