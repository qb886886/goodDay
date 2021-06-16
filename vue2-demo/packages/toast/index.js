import Vue from 'vue'
import ToastComponent from './main.vue'

const ToastConstructor = Vue.extend(ToastComponent)

/**
 * 吐司
 * @param {Object} options
 */
const Toast = function (options = {}) {
  options = {
    type: 'success',
    duration: 1000,
    ...options
  }
  const ToastInstant = new ToastConstructor({
    el: document.createElement('div'),
    data () {
      return {
        visible: false,
        ...options
      }
    }
  })
  document.body.appendChild(ToastInstant.$el)
  ToastInstant.visible = true

  const timeFn = setTimeout(() => {
    clearTimeout(timeFn)
    ToastInstant.visible = false
  }, options.duration)
};

['success', 'warning', 'error', 'info'].forEach(type => {
  Toast[type] = (options) => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    options.type = type
    return Toast(options)
  }
})

Vue.prototype.$toast = Toast

export default Toast
