const infiniteScroll = {
  bind(el, binding, vnode) {
    const scrollHandler = function () {
      if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
        binding.value();
      }
    };
    el.addEventListener("scroll", scrollHandler);
    vnode.context.$on("hook:beforeDestroy", function () {
      el.removeEventListener("scroll", scrollHandler);
    });
  },
};

export default infiniteScroll;
