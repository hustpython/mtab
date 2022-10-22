import {App} from 'vue'

import Contextmenu from './contextmenu'

export default {
    install(app: App) {
        app.directive('contextmenu', Contextmenu)
    }
}