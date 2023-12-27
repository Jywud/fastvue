/* 用于判断点击事件是否发生在指定的元素外部，如果是则触发一个回调函数 */
const clickOutsise = {
  bind: function (el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      if (!(el === event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener("click", el.clickOutsideEvent);
  },
  unbind: function (el) {
    document.body.removeEventListener("click", el.clickOutsideEvent);
  },
};

export default clickOutsise