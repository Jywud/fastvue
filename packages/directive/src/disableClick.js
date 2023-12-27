const disableClick = {
  bind: function (el, binding, vnode) {
    el.addEventListener("click", function (event) {
      if (binding.value) {
        event.preventDefault();
      }
    });
  },
};

export default disableClick;
