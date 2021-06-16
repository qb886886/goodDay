import Vue from 'vue'
import MainComponent from './main.vue'

const Toast = (options = {}) => {
  options = {
    visible: false,
    type: 'info',
    deration: 1000,
    ...options
  }
  const ToastConstructor = Vue.extend(MainComponent)
  const ToastInstant = new ToastConstructor({
    el: document.createElement('div'),
    data: {
      ...options
    }
  })

  document.body.appendChild(ToastInstant.$el)
  ToastInstant.visible = options.visible

  const timeFn = setTimeout(() => {
    clearTimeout(timeFn)
    ToastInstant.visible = false
  }, options.duration)
}

const _toastHandler = (options) => {
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }
  return Toast(options)
}

Toast.show = (options = {}) => {
  options.visible = true
  return _toastHandler(options)
}
Toast.hide = (options = {}) => {
  options.visible = false
  return _toastHandler(options)
}

export default Toast
