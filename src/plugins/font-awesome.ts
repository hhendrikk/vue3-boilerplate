import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { App } from 'vue'

export default (app: App<Element>) => {
  library.add(faPhone)
  app.component('fa', FontAwesomeIcon)
}
