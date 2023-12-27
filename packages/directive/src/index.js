import debounce from './debounce.js'
import copy from './copy.js'
import LazyLoad from './LazyLoad.js'
import waterMarker from './waterMarker.js'
import draggable from './draggable.js'
import emoji from './emoji.js'
import focus from './focus.js'
import clickOutside from './focus.js'
import disableClick from './disableClick.js'
import infiniteScroll from './infiniteScroll.js'

const directives = {
    debounce,
    copy,
    LazyLoad,
    waterMarker,
    draggable,
    emoji,
    focus,
    clickOutside,
    disableClick,
    infiniteScroll
}

export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key]);
    });
  },
};
