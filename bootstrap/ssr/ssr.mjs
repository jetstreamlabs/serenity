import { useSSRContext, mergeProps, openBlock, createElementBlock, createElementVNode, computed, onMounted, onUnmounted, toRefs, watch, unref, withCtx, createVNode, renderSlot, ref, useSlots, createTextVNode, toDisplayString, createBlock, Fragment, renderList, createCommentVNode, inject, nextTick, resolveComponent, withModifiers, defineComponent, resolveDirective, withDirectives, vShow, withKeys, createSlots, createSSRApp, h as h$1 } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderTeleport, ssrRenderStyle, ssrRenderClass, ssrRenderComponent, ssrLooseContain, ssrGetDynamicModelProps, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrGetDirectiveProps } from "vue/server-renderer";
import { useForm, usePage, router, Head, Link, createInertiaApp } from "@inertiajs/vue3";
import _ from "lodash";
import route from "ziggy-js";
import dayjs from "dayjs";
import { useToast } from "@brackets/vue-toastification";
import "lodash/debounce.js";
import "lodash/pick.js";
import "lodash/pickBy.js";
import { useDark, useToggle } from "@vueuse/core";
import "laravel-vue-i18n";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import { createPinia, defineStore } from "pinia";
import mitt from "mitt";
import axios$1 from "axios";
const _sfc_main$1r = {
  __name: "DangerButton",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: props.type,
        class: "btn error"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup$1r = _sfc_main$1r.setup;
_sfc_main$1r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Shared/DangerButton.vue");
  return _sfc_setup$1r ? _sfc_setup$1r(props, ctx) : void 0;
};
const _hoisted_1$k = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$k = /* @__PURE__ */ createElementVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3Z"
}, null, -1);
const _hoisted_3$k = [
  _hoisted_2$k
];
function render$k(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$k, _hoisted_3$k);
}
const __unplugin_components_1$7 = { name: "heroicons-outline-exclamation", render: render$k };
const _sfc_main$1q = {
  __name: "Modal",
  __ssrInlineRender: true,
  props: {
    show: {
      default: false
    },
    maxWidth: {
      default: "2xl"
    },
    closeable: {
      default: true
    }
  },
  emits: ["close"],
  setup(__props, { emit }) {
    const props = __props;
    const close = () => {
      if (props.closeable) {
        emit("close");
      }
    };
    const closeOnEscape = (e2) => {
      if (e2.key === "Escape" && props.show) {
        close();
      }
    };
    const maxWidthClass = computed(() => {
      return {
        sm: "sm:max-w-sm",
        md: "sm:max-w-md",
        lg: "sm:max-w-lg",
        xl: "sm:max-w-xl",
        "2xl": "sm:max-w-2xl"
      }[props.maxWidth];
    });
    onMounted(() => document.addEventListener("keydown", closeOnEscape));
    onUnmounted(() => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = null;
    });
    const { show } = toRefs(props);
    watch(show, (value) => {
      if (value) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = null;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        _push2(`<div style="${ssrRenderStyle(unref(show) ? null : { display: "none" })}" class="fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-0" scroll-region><div style="${ssrRenderStyle(unref(show) ? null : { display: "none" })}" class="fixed inset-0 transform transition-all"><div class="absolute inset-0 bg-gray-500 opacity-75"></div></div><div style="${ssrRenderStyle(unref(show) ? null : { display: "none" })}" class="${ssrRenderClass([unref(maxWidthClass), "mb-6 transform overflow-hidden rounded-lg bg-white shadow-xl transition-all dark:bg-gray-800 dark:text-gray-100 sm:mx-auto sm:w-full"])}">`);
        if (unref(show)) {
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div>`);
      }, "#teleported", false, _parent);
    };
  }
};
const _sfc_setup$1q = _sfc_main$1q.setup;
_sfc_main$1q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Shared/Modal.vue");
  return _sfc_setup$1q ? _sfc_setup$1q(props, ctx) : void 0;
};
const _sfc_main$1p = {
  __name: "ConfirmationModal",
  __ssrInlineRender: true,
  props: {
    show: {
      default: false
    },
    maxWidth: {
      default: "2xl"
    },
    closeable: {
      default: true
    }
  },
  emits: ["close"],
  setup(__props, { emit }) {
    const props = __props;
    const { show, maxWidth, closeable } = toRefs(props);
    const close = () => {
      emit("close");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Modal = _sfc_main$1q;
      const _component_IconOutlineExclamation = __unplugin_components_1$7;
      _push(ssrRenderComponent(_component_Modal, mergeProps({
        show: unref(show),
        "max-width": unref(maxWidth),
        closeable: unref(closeable),
        onClose: close
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-white px-4 pt-5 pb-4 dark:bg-gray-800 dark:text-gray-100 sm:p-6 sm:pb-4"${_scopeId}><div class="sm:flex sm:items-start"${_scopeId}><div class="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IconOutlineExclamation, { class: "h-6 w-6 text-red-600" }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"${_scopeId}><h3 class="text-lg font-medium"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent2, _scopeId);
            _push2(`</h3><div class="mt-2"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "content", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div></div></div></div><div class="bg-gray-100 px-6 py-4 text-right dark:bg-gray-700"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "bg-white px-4 pt-5 pb-4 dark:bg-gray-800 dark:text-gray-100 sm:p-6 sm:pb-4" }, [
                createVNode("div", { class: "sm:flex sm:items-start" }, [
                  createVNode("div", { class: "mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10" }, [
                    createVNode(_component_IconOutlineExclamation, { class: "h-6 w-6 text-red-600" })
                  ]),
                  createVNode("div", { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left" }, [
                    createVNode("h3", { class: "text-lg font-medium" }, [
                      renderSlot(_ctx.$slots, "title")
                    ]),
                    createVNode("div", { class: "mt-2" }, [
                      renderSlot(_ctx.$slots, "content")
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "bg-gray-100 px-6 py-4 text-right dark:bg-gray-700" }, [
                renderSlot(_ctx.$slots, "footer")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1p = _sfc_main$1p.setup;
_sfc_main$1p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Shared/ConfirmationModal.vue");
  return _sfc_setup$1p ? _sfc_setup$1p(props, ctx) : void 0;
};
const _sfc_main$1o = {
  __name: "SecondaryButton",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  setup(__props) {
    const props = __props;
    const { type } = toRefs(props);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: unref(type),
        class: "btn default"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup$1o = _sfc_main$1o.setup;
_sfc_main$1o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Shared/SecondaryButton.vue");
  return _sfc_setup$1o ? _sfc_setup$1o(props, ctx) : void 0;
};
const _sfc_main$1n = {
  __name: "DialogModal",
  __ssrInlineRender: true,
  props: {
    show: {
      default: false
    },
    maxWidth: {
      default: "2xl"
    },
    closeable: {
      default: true
    }
  },
  emits: ["close"],
  setup(__props, { emit }) {
    const props = __props;
    const { show, maxWidth, closeable } = toRefs(props);
    const close = () => {
      emit("close");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Modal = _sfc_main$1q;
      _push(ssrRenderComponent(_component_Modal, mergeProps({
        show: unref(show),
        "max-width": unref(maxWidth),
        closeable: unref(closeable),
        onClose: close
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-6 py-4"${_scopeId}><div class="text-lg font-medium"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div><div class="mt-4 dark:text-gray-500"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "content", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div></div><div class="bg-gray-100 px-6 py-4 text-right dark:bg-gray-700"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "px-6 py-4" }, [
                createVNode("div", { class: "text-lg font-medium" }, [
                  renderSlot(_ctx.$slots, "title")
                ]),
                createVNode("div", { class: "mt-4 dark:text-gray-500" }, [
                  renderSlot(_ctx.$slots, "content")
                ])
              ]),
              createVNode("div", { class: "bg-gray-100 px-6 py-4 text-right dark:bg-gray-700" }, [
                renderSlot(_ctx.$slots, "footer")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1n = _sfc_main$1n.setup;
_sfc_main$1n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Shared/DialogModal.vue");
  return _sfc_setup$1n ? _sfc_setup$1n(props, ctx) : void 0;
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1m = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-between md:col-span-1" }, _attrs))}><div class="px-4 sm:px-0"><h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">`);
  ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
  _push(`</h3><p class="mt-1 text-sm text-gray-600 dark:text-gray-300">`);
  ssrRenderSlot(_ctx.$slots, "description", {}, null, _push, _parent);
  _push(`</p></div><div class="px-4 sm:px-0">`);
  ssrRenderSlot(_ctx.$slots, "aside", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$1m = _sfc_main$1m.setup;
_sfc_main$1m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Shared/SectionTitle.vue");
  return _sfc_setup$1m ? _sfc_setup$1m(props, ctx) : void 0;
};
const __unplugin_components_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$1m, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$1l = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  const _component_SectionTitle = __unplugin_components_0$4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:grid md:grid-cols-3 md:gap-6" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_SectionTitle, null, {
    title: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "title")
        ];
      }
    }),
    description: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "description", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "description")
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`<div class="mt-5 md:col-span-2 md:mt-0"><div class="bg-white px-4 py-5 shadow dark:bg-gray-800 dark:text-gray-100 sm:rounded-lg sm:p-6">`);
  ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup$1l = _sfc_main$1l.setup;
_sfc_main$1l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Shared/ActionSection.vue");
  return _sfc_setup$1l ? _sfc_setup$1l(props, ctx) : void 0;
};
const __unplugin_components_8$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1l, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$1k = {
  __name: "SectionBorder",
  __ssrInlineRender: true,
  props: {
    size: {
      type: String,
      required: false,
      default: "xl"
    }
  },
  setup(__props) {
    const props = __props;
    const sizes = {
      xs: "py-1",
      sm: "py-2",
      md: "py-4",
      lg: "py-6",
      xl: "py-8"
    };
    const className = sizes[props.size];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "hidden sm:block" }, _attrs))}><div class="${ssrRenderClass(unref(className))}"><div class="border-t border-gray-200 dark:border-gray-600"></div></div></div>`);
    };
  }
};
const _sfc_setup$1k = _sfc_main$1k.setup;
_sfc_main$1k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Shared/SectionBorder.vue");
  return _sfc_setup$1k ? _sfc_setup$1k(props, ctx) : void 0;
};
const _sfc_main$1j = {
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "submit"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: props.type,
        class: "btn primary"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup$1j = _sfc_main$1j.setup;
_sfc_main$1j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Shared/Button.vue");
  return _sfc_setup$1j ? _sfc_setup$1j(props, ctx) : void 0;
};
const _sfc_main$1i = {
  __name: "ActionMessage",
  __ssrInlineRender: true,
  props: ["on"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle(props.on ? null : { display: "none" })}" class="text-sm font-semibold text-emerald-600">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1i = _sfc_main$1i.setup;
_sfc_main$1i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Shared/ActionMessage.vue");
  return _sfc_setup$1i ? _sfc_setup$1i(props, ctx) : void 0;
};
const _sfc_main$1h = {
  __name: "Checkbox",
  __ssrInlineRender: true,
  props: {
    checked: {
      type: [Array, Boolean],
      default: false
    },
    value: {
      default: null
    }
  },
  emits: ["update:checked"],
  setup(__props, { emit }) {
    const props = __props;
    const proxyChecked = computed({
      get: () => {
        return props.checked;
      },
      set: (val) => {
        emit("update:checked", val);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
        type: "checkbox",
        value: props.value,
        checked: Array.isArray(unref(proxyChecked)) ? ssrLooseContain(unref(proxyChecked), props.value) : unref(proxyChecked),
        class: "border-gray-300 rounded shadow-sm text-contrast-700 focus:border-contrast-300 focus:ring focus:ring-contrast-200 focus:ring-opacity-50"
      }, _attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, unref(proxyChecked)))))}>`);
    };
  }
};
const _sfc_setup$1h = _sfc_main$1h.setup;
_sfc_main$1h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Shared/Checkbox.vue");
  return _sfc_setup$1h ? _sfc_setup$1h(props, ctx) : void 0;
};
const _sfc_main$1g = {
  __name: "InputError",
  __ssrInlineRender: true,
  props: ["message"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: props.message ? null : { display: "none" }
      }, _attrs))}><p class="text-sm font-semibold text-red-600">${ssrInterpolate(props.message)}</p></div>`);
    };
  }
};
const _sfc_setup$1g = _sfc_main$1g.setup;
_sfc_main$1g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Shared/InputError.vue");
  return _sfc_setup$1g ? _sfc_setup$1g(props, ctx) : void 0;
};
const _sfc_main$1f = {
  __name: "Input",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      required: false,
      type: String,
      default: ""
    },
    static: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit }) {
    const props = __props;
    const input = ref();
    __expose({ input });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<input${ssrRenderAttrs(mergeProps({
        class: ["form-input border-2", [props.static ? "cursor-not-allowed bg-gray-200 focus:border-gray-300 focus:ring-0 dark:bg-gray-400" : ""]],
        value: props.modelValue,
        ref_key: "input",
        ref: input,
        readonly: props.static
      }, _attrs))}>`);
    };
  }
};
const _sfc_setup$1f = _sfc_main$1f.setup;
_sfc_main$1f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Shared/Input.vue");
  return _sfc_setup$1f ? _sfc_setup$1f(props, ctx) : void 0;
};
const _sfc_main$1e = {
  __name: "Label",
  __ssrInlineRender: true,
  props: {
    value: {
      required: false
    },
    req: {
      required: false,
      type: Boolean
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({
        class: ["form-label block text-sm font-medium text-gray-700 dark:text-gray-100", [props.req ? "required" : ""]]
      }, _attrs))}>`);
      if (props.value) {
        _push(`<span>${ssrInterpolate(props.value)}</span>`);
      } else {
        _push(`<span>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</span>`);
      }
      _push(`</label>`);
    };
  }
};
const _sfc_setup$1e = _sfc_main$1e.setup;
_sfc_main$1e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Shared/Label.vue");
  return _sfc_setup$1e ? _sfc_setup$1e(props, ctx) : void 0;
};
const _sfc_main$1d = {
  __name: "FormSection",
  __ssrInlineRender: true,
  props: {
    passform: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["submitted"],
  setup(__props, { emit }) {
    const props = __props;
    const slots = useSlots();
    const hasActions = computed(() => {
      return !!slots.actions;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionTitle = __unplugin_components_0$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:grid md:grid-cols-3 md:gap-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SectionTitle, null, {
        title: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "title")
            ];
          }
        }),
        description: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "description", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "description")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<div class="mt-5 md:col-span-2 md:mt-0"><form>`);
      if (props.passform) {
        _push(`<input type="text" class="hidden" name="email" autocomplete="email"${ssrRenderAttr("value", _ctx.$page.props.user.email)}>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([unref(hasActions) ? "sm:rounded-tl-md sm:rounded-tr-md" : "sm:rounded-md", "bg-white px-4 py-5 shadow dark:bg-gray-800 dark:text-gray-100 sm:p-6"])}"><div class="grid grid-cols-6 gap-6">`);
      ssrRenderSlot(_ctx.$slots, "form", {}, null, _push, _parent);
      _push(`</div></div>`);
      if (unref(hasActions)) {
        _push(`<div class="flex items-center justify-end bg-gray-200 px-4 py-3 text-right shadow dark:bg-gray-700 sm:rounded-bl-md sm:rounded-br-md sm:px-6">`);
        ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div></div>`);
    };
  }
};
const _sfc_setup$1d = _sfc_main$1d.setup;
_sfc_main$1d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Shared/FormSection.vue");
  return _sfc_setup$1d ? _sfc_setup$1d(props, ctx) : void 0;
};
const trans$1 = (key, replace, Zora2) => {
  const locale = window.locale;
  let translation = null;
  try {
    translation = key.split(".").reduce((t4, i2) => t4[i2] || null, Zora2.translations[locale].php);
    if (translation) {
      return checkForVariables$1(translation, replace);
    }
  } catch (e2) {
  }
  try {
    translation = Zora2.translations[locale]["json"][key];
    if (translation) {
      return checkForVariables$1(translation, replace);
    }
  } catch (e2) {
  }
  return checkForVariables$1(key, replace);
};
const checkForVariables$1 = (translation, replace) => {
  let translated = null;
  if (typeof replace === "undefined") {
    return translation;
  }
  _.forEach(replace, (value, key) => {
    translated = translation.toString().replace(":" + key, value);
  });
  return translated;
};
const trans = (key, replace, Zora2) => {
  const locale = process.env.LOCALE;
  let translation = null;
  try {
    translation = key.split(".").reduce((t4, i2) => t4[i2] || null, Zora2.translations[locale].php);
    if (translation) {
      return checkForVariables(translation, replace);
    }
  } catch (e2) {
  }
  try {
    translation = Zora2.translations[locale]["json"][key];
    if (translation) {
      return checkForVariables(translation, replace);
    }
  } catch (e2) {
  }
  return checkForVariables(key, replace);
};
const checkForVariables = (translation, replace) => {
  let translated = null;
  if (typeof replace === "undefined") {
    return translation;
  }
  _.forEach(replace, (value, key) => {
    translated = translation.toString().replace(":" + key, value);
  });
  return translated;
};
const ZoraSSR = {
  install: (v2, options) => v2.mixin({
    methods: {
      __: (key, replace, config = options) => trans(key, replace, config),
      trans: (key, replace, config = options) => trans(key, replace, config)
    }
  })
};
const Zora = { translations: { "en": { "php": { "auth": { "failed": "These credentials do not match our records.", "password": "The provided password is incorrect.", "throttle": "Too many login attempts. Please try again in :seconds seconds." }, "pagination": { "previous": "&laquo; Previous", "next": "Next &raquo;" }, "passwords": { "reset": "Your password has been reset!", "sent": "We have emailed your password reset link!", "throttled": "Please wait before retrying.", "token": "This password reset token is invalid.", "user": "We can't find a user with that email address." }, "validation": { "accepted": "The :attribute must be accepted.", "accepted_if": "The :attribute must be accepted when :other is :value.", "active_url": "The :attribute is not a valid URL.", "after": "The :attribute must be a date after :date.", "after_or_equal": "The :attribute must be a date after or equal to :date.", "alpha": "The :attribute must only contain letters.", "alpha_dash": "The :attribute must only contain letters, numbers, dashes and underscores.", "alpha_num": "The :attribute must only contain letters and numbers.", "array": "The :attribute must be an array.", "before": "The :attribute must be a date before :date.", "before_or_equal": "The :attribute must be a date before or equal to :date.", "between": { "numeric": "The :attribute must be between :min and :max.", "file": "The :attribute must be between :min and :max kilobytes.", "string": "The :attribute must be between :min and :max characters.", "array": "The :attribute must have between :min and :max items." }, "boolean": "The :attribute field must be true or false.", "confirmed": "The :attribute confirmation does not match.", "current_password": "The password is incorrect.", "date": "The :attribute is not a valid date.", "date_equals": "The :attribute must be a date equal to :date.", "date_format": "The :attribute does not match the format :format.", "declined": "The :attribute must be declined.", "declined_if": "The :attribute must be declined when :other is :value.", "different": "The :attribute and :other must be different.", "digits": "The :attribute must be :digits digits.", "digits_between": "The :attribute must be between :min and :max digits.", "dimensions": "The :attribute has invalid image dimensions.", "distinct": "The :attribute field has a duplicate value.", "email": "The :attribute must be a valid email address.", "ends_with": "The :attribute must end with one of the following: :values.", "enum": "The selected :attribute is invalid.", "exists": "The selected :attribute is invalid.", "file": "The :attribute must be a file.", "filled": "The :attribute field must have a value.", "gt": { "numeric": "The :attribute must be greater than :value.", "file": "The :attribute must be greater than :value kilobytes.", "string": "The :attribute must be greater than :value characters.", "array": "The :attribute must have more than :value items." }, "gte": { "numeric": "The :attribute must be greater than or equal to :value.", "file": "The :attribute must be greater than or equal to :value kilobytes.", "string": "The :attribute must be greater than or equal to :value characters.", "array": "The :attribute must have :value items or more." }, "image": "The :attribute must be an image.", "in": "The selected :attribute is invalid.", "in_array": "The :attribute field does not exist in :other.", "integer": "The :attribute must be an integer.", "ip": "The :attribute must be a valid IP address.", "ipv4": "The :attribute must be a valid IPv4 address.", "ipv6": "The :attribute must be a valid IPv6 address.", "mac_address": "The :attribute must be a valid MAC address.", "json": "The :attribute must be a valid JSON string.", "lt": { "numeric": "The :attribute must be less than :value.", "file": "The :attribute must be less than :value kilobytes.", "string": "The :attribute must be less than :value characters.", "array": "The :attribute must have less than :value items." }, "lte": { "numeric": "The :attribute must be less than or equal to :value.", "file": "The :attribute must be less than or equal to :value kilobytes.", "string": "The :attribute must be less than or equal to :value characters.", "array": "The :attribute must not have more than :value items." }, "max": { "numeric": "The :attribute must not be greater than :max.", "file": "The :attribute must not be greater than :max kilobytes.", "string": "The :attribute must not be greater than :max characters.", "array": "The :attribute must not have more than :max items." }, "mimes": "The :attribute must be a file of type: :values.", "mimetypes": "The :attribute must be a file of type: :values.", "min": { "numeric": "The :attribute must be at least :min.", "file": "The :attribute must be at least :min kilobytes.", "string": "The :attribute must be at least :min characters.", "array": "The :attribute must have at least :min items." }, "multiple_of": "The :attribute must be a multiple of :value.", "not_in": "The selected :attribute is invalid.", "not_regex": "The :attribute format is invalid.", "numeric": "The :attribute must be a number.", "password": "The password is incorrect.", "present": "The :attribute field must be present.", "prohibited": "The :attribute field is prohibited.", "prohibited_if": "The :attribute field is prohibited when :other is :value.", "prohibited_unless": "The :attribute field is prohibited unless :other is in :values.", "prohibits": "The :attribute field prohibits :other from being present.", "regex": "The :attribute format is invalid.", "required": "The :attribute field is required.", "required_if": "The :attribute field is required when :other is :value.", "required_unless": "The :attribute field is required unless :other is in :values.", "required_with": "The :attribute field is required when :values is present.", "required_with_all": "The :attribute field is required when :values are present.", "required_without": "The :attribute field is required when :values is not present.", "required_without_all": "The :attribute field is required when none of :values are present.", "same": "The :attribute and :other must match.", "size": { "numeric": "The :attribute must be :size.", "file": "The :attribute must be :size kilobytes.", "string": "The :attribute must be :size characters.", "array": "The :attribute must contain :size items." }, "starts_with": "The :attribute must start with one of the following: :values.", "string": "The :attribute must be a string.", "timezone": "The :attribute must be a valid timezone.", "unique": "The :attribute has already been taken.", "uploaded": "The :attribute failed to upload.", "url": "The :attribute must be a valid URL.", "uuid": "The :attribute must be a valid UUID.", "custom": { "attribute-name": { "rule-name": "custom-message" } }, "attributes": [] } }, "json": { "The :attribute must contain at least one letter.": "The :attribute must contain at least one letter.", "The :attribute must contain at least one number.": "The :attribute must contain at least one number.", "The :attribute must contain at least one symbol.": "The :attribute must contain at least one symbol.", "The :attribute must contain at least one uppercase and one lowercase letter.": "The :attribute must contain at least one uppercase and one lowercase letter.", "The given :attribute has appeared in a data leak. Please choose a different :attribute.": "The given :attribute has appeared in a data leak. Please choose a different :attribute." } } } };
if (typeof window !== "undefined" && typeof window.Zora !== "undefined") {
  Object.assign(Zora.routes, window.Zora.routes);
}
function useTrans(key, replace) {
  return trans$1(key, replace, Zora);
}
const Ziggy$1 = { "url": "https://serenity.test", "port": null, "defaults": {}, "routes": { "sanctum.csrf-cookie": { "uri": "sanctum/csrf-cookie", "methods": ["GET", "HEAD"] }, "login": { "uri": "login", "methods": ["GET", "HEAD"] }, "login.store": { "uri": "login", "methods": ["POST"] }, "logout": { "uri": "logout", "methods": ["POST"] }, "password.request": { "uri": "forgot-password", "methods": ["GET", "HEAD"] }, "password.reset": { "uri": "reset-password/{token}", "methods": ["GET", "HEAD"] }, "password.email": { "uri": "forgot-password", "methods": ["POST"] }, "password.update": { "uri": "reset-password", "methods": ["POST"] }, "register": { "uri": "register", "methods": ["GET", "HEAD"] }, "register.store": { "uri": "register", "methods": ["POST"] }, "verification.notice": { "uri": "email/verify/prompt", "methods": ["GET", "HEAD"] }, "verification.verify": { "uri": "email/verify/{id}/{hash}", "methods": ["GET", "HEAD"] }, "verification.send": { "uri": "email/verify/store", "methods": ["POST"] }, "user-profile-information.update": { "uri": "user/profile/update", "methods": ["PUT"] }, "user-password.update": { "uri": "user/password", "methods": ["PUT"] }, "password.create": { "uri": "user/password/confirm", "methods": ["GET", "HEAD"] }, "password.confirmation": { "uri": "user/password/status", "methods": ["GET", "HEAD"] }, "password.confirm": { "uri": "user/password/confirm", "methods": ["POST"] }, "two-factor.login": { "uri": "two-factor-challenge", "methods": ["GET", "HEAD"] }, "two-factor.challenge": { "uri": "two-factor-challenge", "methods": ["POST"] }, "two-factor.enable": { "uri": "user/two-factor-authentication", "methods": ["POST"] }, "two-factor.confirm": { "uri": "user/confirmed-two-factor-authentication", "methods": ["POST"] }, "two-factor.disable": { "uri": "user/two-factor-authentication", "methods": ["DELETE"] }, "two-factor.qr-code": { "uri": "user/two-factor-qr-code", "methods": ["GET", "HEAD"] }, "two-factor.secret-key": { "uri": "user/two-factor-secret-key", "methods": ["GET", "HEAD"] }, "two-factor.recovery-codes": { "uri": "user/two-factor-recovery-codes", "methods": ["GET", "HEAD"] }, "two-factor.store": { "uri": "user/two-factor-recovery-codes", "methods": ["POST"] }, "terms.show": { "uri": "terms-of-service", "methods": ["GET", "HEAD"] }, "policy.show": { "uri": "privacy-policy", "methods": ["GET", "HEAD"] }, "profile.show": { "uri": "user/profile", "methods": ["GET", "HEAD"] }, "settings.show": { "uri": "user/settings", "methods": ["GET", "HEAD"] }, "other-browser-sessions.destroy": { "uri": "user/browsers/delete", "methods": ["DELETE"] }, "current-user-photo.destroy": { "uri": "user/profile-photo", "methods": ["DELETE"] }, "current-user.destroy": { "uri": "user", "methods": ["DELETE"] }, "api-tokens.index": { "uri": "user/api-tokens", "methods": ["GET", "HEAD"] }, "api-tokens.store": { "uri": "user/api-tokens", "methods": ["POST"] }, "api-tokens.update": { "uri": "user/api-tokens/{token}", "methods": ["PUT"] }, "api-tokens.destroy": { "uri": "user/api-tokens/{token}", "methods": ["DELETE"] }, "teams.create": { "uri": "teams/create", "methods": ["GET", "HEAD"] }, "teams.store": { "uri": "teams", "methods": ["POST"] }, "teams.show": { "uri": "teams/{team}", "methods": ["GET", "HEAD"] }, "teams.update": { "uri": "teams/{team}", "methods": ["PUT"] }, "teams.destroy": { "uri": "teams/{team}", "methods": ["DELETE"] }, "current-team.update": { "uri": "current-team", "methods": ["PUT"] }, "team-members.store": { "uri": "teams/{team}/members", "methods": ["POST"] }, "team-members.update": { "uri": "teams/{team}/members/{user}", "methods": ["PUT"] }, "team-members.destroy": { "uri": "teams/{team}/members/{user}", "methods": ["DELETE"] }, "team-invitations.accept": { "uri": "teams/invitations/{invitation}", "methods": ["GET", "HEAD"] }, "team-invitations.destroy": { "uri": "teams/invitations/{invitation}", "methods": ["DELETE"] }, "docs.home": { "uri": "docs", "methods": ["GET", "HEAD"] }, "docs.show": { "uri": "docs/{version}/{page?}", "methods": ["GET", "HEAD"], "wheres": { "page": "(.*)" } }, "ignition.healthCheck": { "uri": "_ignition/health-check", "methods": ["GET", "HEAD"] }, "ignition.executeSolution": { "uri": "_ignition/execute-solution", "methods": ["POST"] }, "ignition.updateConfig": { "uri": "_ignition/update-config", "methods": ["POST"] }, "home": { "uri": "/", "methods": ["GET", "HEAD"] }, "dashboard": { "uri": "dashboard", "methods": ["GET", "HEAD"] }, "admin.unassigned-media.upload": { "uri": "admin/unassigned-media/upload", "methods": ["GET", "HEAD"] }, "admin.unassigned-media": { "uri": "admin/unassigned-media", "methods": ["GET", "HEAD"] }, "admin.unassigned-media.authorize": { "uri": "admin/unassigned-media/authorize", "methods": ["GET", "HEAD"] }, "admin.unassigned-media.authorize-for-user": { "uri": "admin/unassigned-media/authorize-for-user", "methods": ["GET", "HEAD"] }, "admin.unassigned-media.authorize-resource": { "uri": "admin/unassigned-media/authorize-resource", "methods": ["GET", "HEAD"] }, "admin.unassigned-media.dispatch-sync": { "uri": "admin/unassigned-media/dispatch-sync", "methods": ["GET", "HEAD"] }, "admin.unassigned-media.validate-with": { "uri": "admin/unassigned-media/validate-with", "methods": ["GET", "HEAD"] }, "admin.unassigned-media.validate": { "uri": "admin/unassigned-media/validate", "methods": ["GET", "HEAD"] }, "admin.unassigned-media.validate-with-bag": { "uri": "admin/unassigned-media/validate-with-bag", "methods": ["GET", "HEAD"] }, "admin.dashboard": { "uri": "admin/dashboard", "methods": ["GET", "HEAD"] }, "admin.file-upload.upload": { "uri": "admin/file-upload/upload", "methods": ["GET", "HEAD"] }, "admin.file-upload.authorize": { "uri": "admin/file-upload/authorize", "methods": ["GET", "HEAD"] }, "admin.file-upload.authorize-for-user": { "uri": "admin/file-upload/authorize-for-user", "methods": ["GET", "HEAD"] }, "admin.file-upload.authorize-resource": { "uri": "admin/file-upload/authorize-resource", "methods": ["GET", "HEAD"] }, "admin.file-upload.dispatch-sync": { "uri": "admin/file-upload/dispatch-sync", "methods": ["GET", "HEAD"] }, "admin.file-upload.validate-with": { "uri": "admin/file-upload/validate-with", "methods": ["GET", "HEAD"] }, "admin.file-upload.validate": { "uri": "admin/file-upload/validate", "methods": ["GET", "HEAD"] }, "admin.file-upload.validate-with-bag": { "uri": "admin/file-upload/validate-with-bag", "methods": ["GET", "HEAD"] }, "admin.tags": { "uri": "admin/tags", "methods": ["GET", "HEAD"] }, "admin.settings.settings": { "uri": "admin/settings/settings", "methods": ["GET", "HEAD"] }, "admin.roles.role": { "uri": "admin/roles/role/{role}", "methods": ["GET", "HEAD"], "bindings": { "role": "id" } }, "admin.roles.role.edit": { "uri": "admin/roles/role/edit/{role}", "methods": ["GET", "HEAD"], "bindings": { "role": "id" } }, "admin.user.user-profile.edit": { "uri": "admin/user/user-profile/edit", "methods": ["GET", "HEAD"] }, "admin.user.user-profile": { "uri": "admin/user/user-profile", "methods": ["GET", "HEAD"] }, "admin.user.user": { "uri": "admin/user/user/{user}", "methods": ["GET", "HEAD"], "bindings": { "user": "id" } }, "admin.user.user.create": { "uri": "admin/user/user/create", "methods": ["GET", "HEAD"] }, "admin.user.user.edit": { "uri": "admin/user/user/edit", "methods": ["GET", "HEAD"] }, "admin.user.user.resend-email-verification-notification": { "uri": "admin/user/user/resend-email-verification-notification", "methods": ["GET", "HEAD"] }, "admin.user.user.bulk-destroy": { "uri": "admin/user/user/bulk-destroy", "methods": ["GET", "HEAD"] }, "admin.user.user.bulk-deactivate": { "uri": "admin/user/user/bulk-deactivate", "methods": ["GET", "HEAD"] }, "admin.user.user.bulk-activate": { "uri": "admin/user/user/bulk-activate", "methods": ["GET", "HEAD"] }, "admin.user.user.impersonal-login": { "uri": "admin/user/user/impersonal-login", "methods": ["GET", "HEAD"] }, "admin.user.user-password.edit": { "uri": "admin/user/user-password/edit", "methods": ["GET", "HEAD"] }, "admin.user.user-password": { "uri": "admin/user/user-password", "methods": ["GET", "HEAD"] }, "admin.user.user-invitation.invite-user": { "uri": "admin/user/user-invitation/invite-user", "methods": ["GET", "HEAD"] }, "admin.user.user-invitation.create-invite-acceptation-user": { "uri": "admin/user/user-invitation/create-invite-acceptation-user", "methods": ["GET", "HEAD"] }, "admin.user.user-invitation.store-invite-acceptation-user": { "uri": "admin/user/user-invitation/store-invite-acceptation-user", "methods": ["GET", "HEAD"] }, "admin.user.user-invitation.send-invitation": { "uri": "admin/user/user-invitation/send-invitation", "methods": ["GET", "HEAD"] }, "admin.permissions.permission": { "uri": "admin/permissions/permission", "methods": ["GET", "HEAD"] }, "admin.translations.translations": { "uri": "admin/translations/translations/{translation}", "methods": ["GET", "HEAD"], "bindings": { "translation": "id" } }, "admin.translations.translations.rescan": { "uri": "admin/translations/translations/rescan", "methods": ["GET", "HEAD"] }, "admin.translations.translations.publish": { "uri": "admin/translations/translations/publish", "methods": ["GET", "HEAD"] }, "admin.translations.translations.export": { "uri": "admin/translations/translations/export", "methods": ["GET", "HEAD"] }, "admin.translations.translations.import": { "uri": "admin/translations/translations/import", "methods": ["GET", "HEAD"] }, "admin.translations.translations.import-resolved-conflicts": { "uri": "admin/translations/translations/import-resolved-conflicts", "methods": ["GET", "HEAD"] }, "admin.media.media": { "uri": "admin/media/media", "methods": ["GET", "HEAD"] }, "admin.media.media.images": { "uri": "admin/media/media/images", "methods": ["GET", "HEAD"] }, "admin.media.media.files": { "uri": "admin/media/media/files", "methods": ["GET", "HEAD"] }, "admin.media.media.update-media": { "uri": "admin/media/media/update-media/{media}", "methods": ["GET", "HEAD"], "bindings": { "media": "id" } } } };
if (typeof window !== "undefined" && typeof window.Ziggy !== "undefined") {
  Object.assign(Ziggy$1.routes, window.Ziggy.routes);
}
function useRoutes(name, params) {
  return route(name, params, false, Ziggy$1);
}
function useDayjs() {
  return dayjs();
}
function useClientOnly() {
  const isClient = ref(false);
  onMounted(() => {
    if (typeof window !== "undefined") {
      isClient.value = true;
    }
  });
  return {
    isClient
  };
}
const _sfc_main$1c = {
  __name: "ApiTokenManager",
  __ssrInlineRender: true,
  props: ["tokens", "availablePermissions", "defaultPermissions"],
  setup(__props) {
    const props = __props;
    const displayingToken = ref(false);
    const managingPermissionsFor = ref(null);
    const apiTokenBeingDeleted = ref(null);
    const { tokens, availablePermissions } = toRefs(props);
    const createApiTokenForm = useForm({
      name: "",
      permissions: props.defaultPermissions
    });
    const updateApiTokenForm = useForm({
      permissions: []
    });
    const deleteApiTokenForm = useForm({});
    const createApiToken = () => {
      createApiTokenForm.post(useRoutes("api-tokens.store"), {
        preserveScroll: true,
        onSuccess: () => {
          displayingToken.value = true;
          createApiTokenForm.reset();
        }
      });
    };
    const manageApiTokenPermissions = (token) => {
      updateApiTokenForm.permissions = token.abilities;
      managingPermissionsFor.value = token;
    };
    const updateApiToken = () => {
      updateApiTokenForm.put(useRoutes("api-tokens.update", { token: managingPermissionsFor.value.id }), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => managingPermissionsFor.value = null
      });
    };
    const confirmApiTokenDeletion = (token) => {
      apiTokenBeingDeleted.value = token;
    };
    const deleteApiToken = () => {
      deleteApiTokenForm.delete(useRoutes("api-tokens.destroy", { token: apiTokenBeingDeleted.value.id }), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => apiTokenBeingDeleted.value = null
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormSection = _sfc_main$1d;
      const _component_Label = _sfc_main$1e;
      const _component_Input = _sfc_main$1f;
      const _component_InputError = _sfc_main$1g;
      const _component_Checkbox = _sfc_main$1h;
      const _component_ActionMessage = _sfc_main$1i;
      const _component_Button = _sfc_main$1j;
      const _component_SectionBorder = _sfc_main$1k;
      const _component_ActionSection = __unplugin_components_8$1;
      const _component_DialogModal = _sfc_main$1n;
      const _component_SecondaryButton = _sfc_main$1o;
      const _component_ConfirmationModal = _sfc_main$1p;
      const _component_DangerButton = _sfc_main$1r;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_FormSection, { onSubmitted: createApiToken }, {
        title: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.__("Create API Token"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.__("Create API Token")), 1)
            ];
          }
        }),
        description: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.__("API tokens allow third-party services to authenticate with our application on your behalf."))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.__("API tokens allow third-party services to authenticate with our application on your behalf.")), 1)
            ];
          }
        }),
        form: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Label, {
              for: "name",
              value: _ctx.__("Name")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Input, {
              id: "name",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(createApiTokenForm).name,
              "onUpdate:modelValue": ($event) => unref(createApiTokenForm).name = $event,
              autofocus: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputError, {
              message: unref(createApiTokenForm).errors.name,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            if (unref(availablePermissions).length > 0) {
              _push2(`<div class="col-span-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Label, {
                for: "permissions",
                value: _ctx.__("Permissions")
              }, null, _parent2, _scopeId));
              _push2(`<div class="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2"${_scopeId}><!--[-->`);
              ssrRenderList(unref(availablePermissions), (permission) => {
                _push2(`<div${_scopeId}><label class="flex items-center"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Checkbox, {
                  value: permission,
                  checked: unref(createApiTokenForm).permissions,
                  "onUpdate:checked": ($event) => unref(createApiTokenForm).permissions = $event
                }, null, _parent2, _scopeId));
                _push2(`<span class="ml-2 text-sm text-gray-700 dark:text-gray-500"${_scopeId}>${ssrInterpolate(permission)}</span></label></div>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode(_component_Label, {
                  for: "name",
                  value: _ctx.__("Name")
                }, null, 8, ["value"]),
                createVNode(_component_Input, {
                  id: "name",
                  type: "text",
                  class: "mt-1 block w-full",
                  modelValue: unref(createApiTokenForm).name,
                  "onUpdate:modelValue": ($event) => unref(createApiTokenForm).name = $event,
                  autofocus: ""
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_InputError, {
                  message: unref(createApiTokenForm).errors.name,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              unref(availablePermissions).length > 0 ? (openBlock(), createBlock("div", {
                key: 0,
                class: "col-span-6"
              }, [
                createVNode(_component_Label, {
                  for: "permissions",
                  value: _ctx.__("Permissions")
                }, null, 8, ["value"]),
                createVNode("div", { class: "mt-2 grid grid-cols-1 gap-4 md:grid-cols-2" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(availablePermissions), (permission) => {
                    return openBlock(), createBlock("div", { key: permission }, [
                      createVNode("label", { class: "flex items-center" }, [
                        createVNode(_component_Checkbox, {
                          value: permission,
                          checked: unref(createApiTokenForm).permissions,
                          "onUpdate:checked": ($event) => unref(createApiTokenForm).permissions = $event
                        }, null, 8, ["value", "checked", "onUpdate:checked"]),
                        createVNode("span", { class: "ml-2 text-sm text-gray-700 dark:text-gray-500" }, toDisplayString(permission), 1)
                      ])
                    ]);
                  }), 128))
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        actions: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ActionMessage, {
              on: unref(createApiTokenForm).recentlySuccessful,
              class: "mr-3"
            }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.__("Created."))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.__("Created.")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              class: { "opacity-25": unref(createApiTokenForm).processing },
              disabled: unref(createApiTokenForm).processing
            }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.__("Create"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.__("Create")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ActionMessage, {
                on: unref(createApiTokenForm).recentlySuccessful,
                class: "mr-3"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.__("Created.")), 1)
                ]),
                _: 1
              }, 8, ["on"]),
              createVNode(_component_Button, {
                class: { "opacity-25": unref(createApiTokenForm).processing },
                disabled: unref(createApiTokenForm).processing
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.__("Create")), 1)
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(tokens).length > 0) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_SectionBorder, null, null, _parent));
        _push(`<div class="mt-10 sm:mt-0">`);
        _push(ssrRenderComponent(_component_ActionSection, null, {
          title: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.__("Manage API Tokens"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.__("Manage API Tokens")), 1)
              ];
            }
          }),
          description: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.__("You may delete any of your existing tokens if they are no longer needed."))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.__("You may delete any of your existing tokens if they are no longer needed.")), 1)
              ];
            }
          }),
          content: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="space-y-6"${_scopeId}><!--[-->`);
              ssrRenderList(unref(tokens), (token) => {
                _push2(`<div class="flex items-center justify-between"${_scopeId}><div${_scopeId}>${ssrInterpolate(token.name)}</div><div class="flex items-center"${_scopeId}>`);
                if (token.last_used_ago) {
                  _push2(`<div class="text-sm text-gray-400"${_scopeId}>${ssrInterpolate(_ctx.__("Last used"))} ${ssrInterpolate(token.last_used_ago)}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (unref(availablePermissions).length > 0) {
                  _push2(`<button class="ml-6 cursor-pointer text-sm text-gray-400 underline"${_scopeId}>${ssrInterpolate(_ctx.__("Permissions"))}</button>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<button class="ml-6 cursor-pointer text-sm text-red-500"${_scopeId}>${ssrInterpolate(_ctx.__("Delete"))}</button></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "space-y-6" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(tokens), (token) => {
                    return openBlock(), createBlock("div", {
                      class: "flex items-center justify-between",
                      key: token.id
                    }, [
                      createVNode("div", null, toDisplayString(token.name), 1),
                      createVNode("div", { class: "flex items-center" }, [
                        token.last_used_ago ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-sm text-gray-400"
                        }, toDisplayString(_ctx.__("Last used")) + " " + toDisplayString(token.last_used_ago), 1)) : createCommentVNode("", true),
                        unref(availablePermissions).length > 0 ? (openBlock(), createBlock("button", {
                          key: 1,
                          class: "ml-6 cursor-pointer text-sm text-gray-400 underline",
                          onClick: ($event) => manageApiTokenPermissions(token)
                        }, toDisplayString(_ctx.__("Permissions")), 9, ["onClick"])) : createCommentVNode("", true),
                        createVNode("button", {
                          class: "ml-6 cursor-pointer text-sm text-red-500",
                          onClick: ($event) => confirmApiTokenDeletion(token)
                        }, toDisplayString(_ctx.__("Delete")), 9, ["onClick"])
                      ])
                    ]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_DialogModal, {
        show: unref(displayingToken),
        onClose: ($event) => displayingToken.value = false
      }, {
        title: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.__("API Token"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.__("API Token")), 1)
            ];
          }
        }),
        content: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="dark:text-gray-500"${_scopeId}>${ssrInterpolate(_ctx.__("Please copy your new API token. For your security, it won't be shown again."))}</div>`);
            if (_ctx.$page.props.serenity.flash.token) {
              _push2(`<div class="mt-4 rounded bg-gray-100 px-4 py-2 font-mono text-sm text-gray-500 dark:bg-gray-600 dark:text-gray-100"${_scopeId}>${ssrInterpolate(_ctx.$page.props.serenity.flash.token)}</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "dark:text-gray-500" }, toDisplayString(_ctx.__("Please copy your new API token. For your security, it won't be shown again.")), 1),
              _ctx.$page.props.serenity.flash.token ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mt-4 rounded bg-gray-100 px-4 py-2 font-mono text-sm text-gray-500 dark:bg-gray-600 dark:text-gray-100"
              }, toDisplayString(_ctx.$page.props.serenity.flash.token), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        footer: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SecondaryButton, {
              onClick: ($event) => displayingToken.value = false
            }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.__("Close"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.__("Close")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SecondaryButton, {
                onClick: ($event) => displayingToken.value = false
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.__("Close")), 1)
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_DialogModal, {
        show: unref(managingPermissionsFor),
        onClose: ($event) => managingPermissionsFor.value = null
      }, {
        title: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.__("API Token Permissions"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.__("API Token Permissions")), 1)
            ];
          }
        }),
        content: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 gap-4 md:grid-cols-2"${_scopeId}><!--[-->`);
            ssrRenderList(unref(availablePermissions), (permission) => {
              _push2(`<div${_scopeId}><label class="flex items-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Checkbox, {
                value: permission,
                checked: unref(updateApiTokenForm).permissions,
                "onUpdate:checked": ($event) => unref(updateApiTokenForm).permissions = $event
              }, null, _parent2, _scopeId));
              _push2(`<span class="ml-2 text-sm text-gray-700 dark:text-gray-500"${_scopeId}>${ssrInterpolate(permission)}</span></label></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 gap-4 md:grid-cols-2" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(availablePermissions), (permission) => {
                  return openBlock(), createBlock("div", { key: permission }, [
                    createVNode("label", { class: "flex items-center" }, [
                      createVNode(_component_Checkbox, {
                        value: permission,
                        checked: unref(updateApiTokenForm).permissions,
                        "onUpdate:checked": ($event) => unref(updateApiTokenForm).permissions = $event
                      }, null, 8, ["value", "checked", "onUpdate:checked"]),
                      createVNode("span", { class: "ml-2 text-sm text-gray-700 dark:text-gray-500" }, toDisplayString(permission), 1)
                    ])
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        footer: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SecondaryButton, {
              onClick: ($event) => managingPermissionsFor.value = null
            }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.__("Cancel"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.__("Cancel")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              class: ["ml-2", { "opacity-25": unref(updateApiTokenForm).processing }],
              onClick: updateApiToken,
              disabled: unref(updateApiTokenForm).processing
            }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.__("Save"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.__("Save")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SecondaryButton, {
                onClick: ($event) => managingPermissionsFor.value = null
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.__("Cancel")), 1)
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_component_Button, {
                class: ["ml-2", { "opacity-25": unref(updateApiTokenForm).processing }],
                onClick: updateApiToken,
                disabled: unref(updateApiTokenForm).processing
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.__("Save")), 1)
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ConfirmationModal, {
        show: unref(apiTokenBeingDeleted),
        onClose: ($event) => apiTokenBeingDeleted.value = null
      }, {
        title: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.__("Delete API Token"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.__("Delete API Token")), 1)
            ];
          }
        }),
        content: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="dark:text-gray-500"${_scopeId}>${ssrInterpolate(_ctx.__("Are you sure you would like to delete this API token?"))}</span>`);
          } else {
            return [
              createVNode("span", { class: "dark:text-gray-500" }, toDisplayString(_ctx.__("Are you sure you would like to delete this API token?")), 1)
            ];
          }
        }),
        footer: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SecondaryButton, {
              onClick: ($event) => apiTokenBeingDeleted.value = null
            }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.__("Cancel"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.__("Cancel")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_DangerButton, {
              class: ["ml-2", { "opacity-25": unref(deleteApiTokenForm).processing }],
              onClick: deleteApiToken,
              disabled: unref(deleteApiTokenForm).processing
            }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.__("Delete"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.__("Delete")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SecondaryButton, {
                onClick: ($event) => apiTokenBeingDeleted.value = null
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.__("Cancel")), 1)
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_component_DangerButton, {
                class: ["ml-2", { "opacity-25": unref(deleteApiTokenForm).processing }],
                onClick: deleteApiToken,
                disabled: unref(deleteApiTokenForm).processing
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.__("Delete")), 1)
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1c = _sfc_main$1c.setup;
_sfc_main$1c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Partials/Api/ApiTokenManager.vue");
  return _sfc_setup$1c ? _sfc_setup$1c(props, ctx) : void 0;
};
const _hoisted_1$j = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$j = /* @__PURE__ */ createElementVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "m4.5 19.5l15-15m-15 0l15 15"
}, null, -1);
const _hoisted_3$j = [
  _hoisted_2$j
];
function render$j(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$j, _hoisted_3$j);
}
const __unplugin_components_1$6 = { name: "heroicons-outline-x-mark", render: render$j };
const _hoisted_1$i = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$i = /* @__PURE__ */ createElementVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "m10 20l4-16m4 4l4 4l-4 4M6 16l-4-4l4-4"
}, null, -1);
const _hoisted_3$i = [
  _hoisted_2$i
];
function render$i(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$i, _hoisted_3$i);
}
const __unplugin_components_0$3 = { name: "heroicons-outline-code", render: render$i };
const _sfc_main$1b = {
  __name: "NotifyStatus",
  __ssrInlineRender: true,
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  emits: ["close"],
  setup(__props, { emit }) {
    const isObject = inject("isObject");
    const heading = ref("");
    const message = ref("");
    if (isObject(usePage().props.flash.status)) {
      heading.value = usePage().props.flash.status.title;
      message.value = usePage().props.flash.status.message;
    } else {
      message.value = usePage().props.flash.status;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconOutlineCode = __unplugin_components_0$3;
      const _component_IconOutlineXMark = __unplugin_components_1$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5" }, _attrs))}><div class="bg-violet-400 p-4 dark:bg-violet-500"><div class="flex items-start"><div class="flex-shrink-0">`);
      _push(ssrRenderComponent(_component_IconOutlineCode, {
        class: "h-6 w-6 text-violet-900",
        "aria-hidden": "true"
      }, null, _parent));
      _push(`</div><div class="-pt-2 ml-3 w-0 flex-1"><p class="text-base font-medium text-violet-900">${ssrInterpolate(unref(heading))}</p><p class="mt-1 text-sm text-violet-800">${ssrInterpolate(unref(message))}</p></div><div class="ml-4 flex flex-shrink-0"><button type="button" class="inline-flex text-violet-900 hover:text-violet-700 focus:outline-none"><span class="sr-only">${ssrInterpolate(_ctx.__("Close"))}</span>`);
      _push(ssrRenderComponent(_component_IconOutlineXMark, {
        class: "h-4 w-4",
        "aria-hidden": "true"
      }, null, _parent));
      _push(`</button></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1b = _sfc_main$1b.setup;
_sfc_main$1b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Notifications/NotifyStatus.vue");
  return _sfc_setup$1b ? _sfc_setup$1b(props, ctx) : void 0;
};
const _hoisted_1$h = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$h = /* @__PURE__ */ createElementVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z"
}, null, -1);
const _hoisted_3$h = [
  _hoisted_2$h
];
function render$h(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$h, _hoisted_3$h);
}
const __unplugin_components_0$2 = { name: "heroicons-outline-information-circle", render: render$h };
const _sfc_main$1a = {
  __name: "NotifyInfo",
  __ssrInlineRender: true,
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  emits: ["close"],
  setup(__props, { emit }) {
    const isObject = inject("isObject");
    const heading = ref("");
    const message = ref("");
    if (isObject(usePage().props.flash.info)) {
      heading.value = usePage().props.flash.info.title;
      message.value = usePage().props.flash.info.message;
    } else {
      message.value = usePage().props.flash.info;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconOutlineInformationCircle = __unplugin_components_0$2;
      const _component_IconOutlineXMark = __unplugin_components_1$6;
      if (__props.show) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5" }, _attrs))}><div class="bg-blue-400 p-4 dark:bg-blue-500"><div class="flex items-start"><div class="flex-shrink-0">`);
        _push(ssrRenderComponent(_component_IconOutlineInformationCircle, {
          class: "h-6 w-6 text-blue-900",
          "aria-hidden": "true"
        }, null, _parent));
        _push(`</div><div class="-pt-2 ml-3 w-0 flex-1"><p class="text-base font-medium text-blue-900">${ssrInterpolate(unref(heading))}</p><p class="mt-1 text-sm text-blue-800">${ssrInterpolate(unref(message))}</p></div><div class="ml-4 flex flex-shrink-0"><button type="button" class="inline-flex text-blue-900 hover:text-blue-700 focus:outline-none"><span class="sr-only">${ssrInterpolate(_ctx.__("Close"))}</span>`);
        _push(ssrRenderComponent(_component_IconOutlineXMark, {
          class: "h-4 w-4",
          "aria-hidden": "true"
        }, null, _parent));
        _push(`</button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1a = _sfc_main$1a.setup;
_sfc_main$1a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Notifications/NotifyInfo.vue");
  return _sfc_setup$1a ? _sfc_setup$1a(props, ctx) : void 0;
};
const _hoisted_1$g = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$g = /* @__PURE__ */ createElementVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M12 8v4m0 4h.01M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z"
}, null, -1);
const _hoisted_3$g = [
  _hoisted_2$g
];
function render$g(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$g, _hoisted_3$g);
}
const __unplugin_components_0$1 = { name: "heroicons-outline-exclamation-circle", render: render$g };
const _sfc_main$19 = {
  __name: "NotifyWarning",
  __ssrInlineRender: true,
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  emits: ["close"],
  setup(__props, { emit }) {
    const isObject = inject("isObject");
    const heading = ref("");
    const message = ref("");
    if (isObject(usePage().props.flash.warning)) {
      heading.value = usePage().props.flash.warning.title;
      message.value = usePage().props.flash.warning.message;
    } else {
      message.value = usePage().props.flash.warning;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconOutlineExclamationCircle = __unplugin_components_0$1;
      const _component_IconOutlineXMark = __unplugin_components_1$6;
      if (__props.show) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5" }, _attrs))}><div class="bg-yellow-400 p-4 dark:bg-yellow-500"><div class="flex items-start"><div class="flex-shrink-0">`);
        _push(ssrRenderComponent(_component_IconOutlineExclamationCircle, {
          class: "h-6 w-6 text-yellow-900",
          "aria-hidden": "true"
        }, null, _parent));
        _push(`</div><div class="-pt-2 ml-3 w-0 flex-1"><p class="text-base font-medium text-yellow-900">${ssrInterpolate(unref(heading))}</p><p class="mt-1 text-sm text-yellow-800">${ssrInterpolate(unref(message))}</p></div><div class="ml-4 flex flex-shrink-0"><button type="button" class="inline-flex text-yellow-900 hover:text-yellow-700 focus:outline-none"><span class="sr-only">${ssrInterpolate(_ctx.__("Close"))}</span>`);
        _push(ssrRenderComponent(_component_IconOutlineXMark, {
          class: "h-4 w-4",
          "aria-hidden": "true"
        }, null, _parent));
        _push(`</button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$19 = _sfc_main$19.setup;
_sfc_main$19.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Notifications/NotifyWarning.vue");
  return _sfc_setup$19 ? _sfc_setup$19(props, ctx) : void 0;
};
const _sfc_main$18 = {
  __name: "NotifyError",
  __ssrInlineRender: true,
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  emits: ["close"],
  setup(__props, { emit }) {
    const isObject = inject("isObject");
    const heading = ref("");
    const message = ref("");
    if (isObject(usePage().props.flash.error)) {
      heading.value = usePage().props.flash.error.title;
      message.value = usePage().props.flash.error.message;
    } else {
      message.value = usePage().props.flash.error;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconOutlineExclamation = __unplugin_components_1$7;
      const _component_IconOutlineXMark = __unplugin_components_1$6;
      if (__props.show) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5" }, _attrs))}><div class="bg-red-400 p-4 dark:bg-red-500"><div class="flex items-start"><div class="flex-shrink-0">`);
        _push(ssrRenderComponent(_component_IconOutlineExclamation, {
          class: "h-6 w-6 text-red-900",
          "aria-hidden": "true"
        }, null, _parent));
        _push(`</div><div class="-pt-2 ml-3 w-0 flex-1"><p class="text-base font-medium text-red-900">${ssrInterpolate(unref(heading))}</p><p class="mt-1 text-sm text-red-800">${ssrInterpolate(unref(message))}</p></div><div class="ml-4 flex flex-shrink-0"><button type="button" class="inline-flex text-red-900 hover:text-red-700 focus:outline-none"><span class="sr-only">${ssrInterpolate(_ctx.__("Close"))}</span>`);
        _push(ssrRenderComponent(_component_IconOutlineXMark, {
          class: "h-4 w-4",
          "aria-hidden": "true"
        }, null, _parent));
        _push(`</button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$18 = _sfc_main$18.setup;
_sfc_main$18.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Notifications/NotifyError.vue");
  return _sfc_setup$18 ? _sfc_setup$18(props, ctx) : void 0;
};
const _hoisted_1$f = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$f = /* @__PURE__ */ createElementVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "m9 12l2 2l4-4m6 2a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z"
}, null, -1);
const _hoisted_3$f = [
  _hoisted_2$f
];
function render$f(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$f, _hoisted_3$f);
}
const __unplugin_components_5$2 = { name: "heroicons-outline-check-circle", render: render$f };
const _sfc_main$17 = {
  __name: "NotifySuccess",
  __ssrInlineRender: true,
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  emits: ["close"],
  setup(__props, { emit }) {
    const isObject = inject("isObject");
    const heading = ref("");
    const message = ref("");
    if (isObject(usePage().props.flash.success)) {
      heading.value = usePage().props.flash.success.title;
      message.value = usePage().props.flash.success.message;
    } else {
      message.value = usePage().props.flash.success;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconOutlineCheckCircle = __unplugin_components_5$2;
      const _component_IconOutlineXMark = __unplugin_components_1$6;
      if (__props.show) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5" }, _attrs))}><div class="bg-emerald-400 p-4 dark:bg-emerald-500"><div class="flex items-start"><div class="flex-shrink-0">`);
        _push(ssrRenderComponent(_component_IconOutlineCheckCircle, {
          class: "h-6 w-6 text-emerald-900",
          "aria-hidden": "true"
        }, null, _parent));
        _push(`</div><div class="-pt-2 ml-3 w-0 flex-1"><p class="text-base font-medium text-emerald-900">${ssrInterpolate(unref(heading))}</p><p class="mt-1 text-sm text-emerald-800">${ssrInterpolate(unref(message))}</p></div><div class="ml-4 flex flex-shrink-0"><button type="button" class="inline-flex text-emerald-900 hover:text-emerald-700 focus:outline-none"><span class="sr-only">${ssrInterpolate(_ctx.__("Close"))}</span>`);
        _push(ssrRenderComponent(_component_IconOutlineXMark, {
          class: "h-4 w-4",
          "aria-hidden": "true"
        }, null, _parent));
        _push(`</button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$17 = _sfc_main$17.setup;
_sfc_main$17.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Notifications/NotifySuccess.vue");
  return _sfc_setup$17 ? _sfc_setup$17(props, ctx) : void 0;
};
const _sfc_main$16 = {
  data() {
    return {
      minimum: 4e3,
      maximum: 1e4,
      show: false,
      type: "",
      message: "",
      messageLength: 0
    };
  },
  computed: {
    flashMessages() {
      return this.$page.props.flash;
    },
    showing() {
      return this.show;
    }
  },
  watch: {
    flashMessages: {
      handler(flashes) {
        for (let [key, value] of Object.entries(flashes)) {
          if (value !== null) {
            this.type = key;
            this.show = true;
            if (this.isObject(value)) {
              this.message = value.message;
              this.messageLength = value.message.length;
            } else {
              this.message = value;
              this.messageLength = value.length;
            }
          }
        }
      },
      deep: true,
      immediate: true
    },
    showing: {
      handler() {
        if (this.show) {
          let time = Math.min(
            Math.max(this.messageLength * 50, this.minimum),
            this.maximum
          );
          setTimeout(() => {
            this.dismiss();
          }, time);
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    dismiss() {
      this.show = false;
      this.messageLength = 0;
      this.type = "";
      this.message = "";
    },
    isObject(obj) {
      return obj === Object(obj);
    }
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NotifySuccess = _sfc_main$17;
  const _component_NotifyError = _sfc_main$18;
  const _component_NotifyWarning = _sfc_main$19;
  const _component_NotifyInfo = _sfc_main$1a;
  const _component_NotifyStatus = _sfc_main$1b;
  _push(`<div${ssrRenderAttrs(mergeProps({
    "aria-live": "assertive",
    class: "pointer-events-none fixed inset-0 z-50 flex items-end px-4 py-6 sm:items-start sm:p-6"
  }, _attrs))}><div class="flex w-full flex-col items-center space-y-4 sm:items-end">`);
  if ($data.type == "success") {
    _push(ssrRenderComponent(_component_NotifySuccess, {
      show: "",
      onClose: $options.dismiss
    }, null, _parent));
  } else if ($data.type == "error") {
    _push(ssrRenderComponent(_component_NotifyError, {
      show: "",
      onClose: $options.dismiss
    }, null, _parent));
  } else if ($data.type == "warning") {
    _push(ssrRenderComponent(_component_NotifyWarning, {
      show: "",
      onClose: $options.dismiss
    }, null, _parent));
  } else if ($data.type == "info") {
    _push(ssrRenderComponent(_component_NotifyInfo, {
      show: "",
      onClose: $options.dismiss
    }, null, _parent));
  } else if ($data.type == "status") {
    _push(ssrRenderComponent(_component_NotifyStatus, {
      show: "",
      onClose: $options.dismiss
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup$16 = _sfc_main$16.setup;
_sfc_main$16.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Shared/Notification.vue");
  return _sfc_setup$16 ? _sfc_setup$16(props, ctx) : void 0;
};
const __unplugin_components_3$2 = /* @__PURE__ */ _export_sfc(_sfc_main$16, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$15 = {
  __name: "MainFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const copyright = useDayjs().format("YYYY");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "mt-6 flex flex-row items-center justify-center py-12" }, _attrs))}><p class="text-sm text-gray-400">© ${ssrInterpolate(unref(copyright))}. Jetstream Labs, LLC.</p></footer>`);
    };
  }
};
const _sfc_setup$15 = _sfc_main$15.setup;
_sfc_main$15.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Partials/Main/MainFooter.vue");
  return _sfc_setup$15 ? _sfc_setup$15(props, ctx) : void 0;
};
const _hoisted_1$e = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$e = /* @__PURE__ */ createElementVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "m21 21l-6-6m2-5a7 7 0 1 1-14 0a7 7 0 0 1 14 0Z"
}, null, -1);
const _hoisted_3$e = [
  _hoisted_2$e
];
function render$e(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$e, _hoisted_3$e);
}
const __unplugin_components_2$3 = { name: "heroicons-outline-search", render: render$e };
const _sfc_main$14 = {
  __name: "SearchModal",
  __ssrInlineRender: true,
  props: ["id", "searchId", "modalOpen"],
  emits: ["open-modal", "close-modal"],
  setup(__props, { emit }) {
    const props = __props;
    const modalContent = ref(null);
    const searchInput = ref(null);
    const clickHandler = ({ target }) => {
      if (!props.modalOpen || modalContent.value.contains(target))
        return;
      emit("close-modal");
    };
    const keyHandler = (event) => {
      if (props.modalOpen && event.key === "Escape")
        emit("close-modal");
      if (!props.modalOpen && event.metaKey && event.key == "k") {
        event.preventDefault();
        emit("open-modal");
      }
    };
    onMounted(() => {
      document.addEventListener("click", clickHandler);
      document.addEventListener("keydown", keyHandler);
    });
    onUnmounted(() => {
      document.removeEventListener("click", clickHandler);
      document.removeEventListener("keydown", keyHandler);
    });
    watch(
      () => props.modalOpen,
      (open) => {
        open && nextTick(() => searchInput.value.focus());
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconOutlineSearch = __unplugin_components_2$3;
      const _component_Link = resolveComponent("Link");
      _push(`<!--[--><div style="${ssrRenderStyle(__props.modalOpen ? null : { display: "none" })}" class="fixed inset-0 z-50 bg-gray-900 bg-opacity-20 transition-opacity" aria-hidden="true"></div><div style="${ssrRenderStyle(__props.modalOpen ? null : { display: "none" })}"${ssrRenderAttr("id", __props.id)} class="fixed inset-0 top-20 z-50 mb-4 flex items-start justify-center overflow-hidden px-4 sm:px-6 md:top-28" role="dialog" aria-modal="true"><div class="max-h-full w-full max-w-2xl overflow-auto rounded bg-white shadow-lg dark:bg-gray-800"><form class="border-b border-gray-200 dark:border-gray-700"><div class="flex items-center"><label${ssrRenderAttr("for", __props.searchId)}><span class="sr-only">Search</span>`);
      _push(ssrRenderComponent(_component_IconOutlineSearch, { class: "ml-4 h-4 w-4 shrink-0 fill-gray-500 dark:fill-gray-400" }, null, _parent));
      _push(`</label><input${ssrRenderAttr("id", __props.searchId)} class="w-full appearance-none border-0 bg-white py-3 pl-2 pr-4 text-sm placeholder-gray-400 focus:ring-transparent dark:bg-gray-800 dark:placeholder:text-gray-500" type="search" placeholder="Search ..."></div></form><div class="space-y-4 px-2 py-4"><div><div class="mb-2 px-2 text-sm font-medium text-gray-500 dark:text-gray-400"> Popular </div><ul><li>`);
      _push(ssrRenderComponent(_component_Link, {
        class: "flex items-center rounded px-2 py-1 text-sm leading-6 text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700",
        href: "#0",
        onClick: ($event) => _ctx.$emit("close-modal")
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="mr-3 h-3 w-3 shrink-0 fill-gray-400 dark:fill-gray-500" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z"${_scopeId}></path></svg><span${_scopeId}>Alternative Schemas</span>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "mr-3 h-3 w-3 shrink-0 fill-gray-400 dark:fill-gray-500",
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", { d: "M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" })
              ])),
              createVNode("span", null, "Alternative Schemas")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_Link, {
        class: "flex items-center rounded px-2 py-1 text-sm leading-6 text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700",
        href: "#0",
        onClick: ($event) => _ctx.$emit("close-modal")
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="mr-3 h-3 w-3 shrink-0 fill-gray-400 dark:fill-gray-500" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z"${_scopeId}></path></svg><span${_scopeId}>Query string parameters</span>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "mr-3 h-3 w-3 shrink-0 fill-gray-400 dark:fill-gray-500",
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", { d: "M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" })
              ])),
              createVNode("span", null, "Query string parameters")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_Link, {
        class: "flex items-center rounded px-2 py-1 text-sm leading-6 text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700",
        href: "#0",
        onClick: ($event) => _ctx.$emit("close-modal")
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="mr-3 h-3 w-3 shrink-0 fill-gray-400 dark:fill-gray-500" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z"${_scopeId}></path></svg><span${_scopeId}>Integrations</span>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "mr-3 h-3 w-3 shrink-0 fill-gray-400 dark:fill-gray-500",
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", { d: "M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" })
              ])),
              createVNode("span", null, "Integrations")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_Link, {
        class: "flex items-center rounded px-2 py-1 text-sm leading-6 text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700",
        href: "#0",
        onClick: ($event) => _ctx.$emit("close-modal")
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="mr-3 h-3 w-3 shrink-0 fill-gray-400 dark:fill-gray-500" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z"${_scopeId}></path></svg><span${_scopeId}>Organize Contacts with Tags</span>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "mr-3 h-3 w-3 shrink-0 fill-gray-400 dark:fill-gray-500",
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", { d: "M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" })
              ])),
              createVNode("span", null, "Organize Contacts with Tags")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div><div class="mb-2 px-2 text-sm font-medium text-gray-500"> Actions </div><ul><li>`);
      _push(ssrRenderComponent(_component_Link, {
        class: "flex items-center rounded px-2 py-1 text-sm leading-6 text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700",
        href: "#0",
        onClick: ($event) => _ctx.$emit("close-modal")
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="mr-3 h-3 w-3 shrink-0 fill-blue-600" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M11.854.146a.5.5 0 0 0-.525-.116l-11 4a.5.5 0 0 0-.015.934l4.8 1.921 1.921 4.8A.5.5 0 0 0 7.5 12h.008a.5.5 0 0 0 .462-.329l4-11a.5.5 0 0 0-.116-.525Z"${_scopeId}></path></svg><span class="font-medium"${_scopeId}>Contact support</span>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "mr-3 h-3 w-3 shrink-0 fill-blue-600",
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", { d: "M11.854.146a.5.5 0 0 0-.525-.116l-11 4a.5.5 0 0 0-.015.934l4.8 1.921 1.921 4.8A.5.5 0 0 0 7.5 12h.008a.5.5 0 0 0 .462-.329l4-11a.5.5 0 0 0-.116-.525Z" })
              ])),
              createVNode("span", { class: "font-medium" }, "Contact support")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_Link, {
        class: "flex items-center rounded px-2 py-1 text-sm leading-6 text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700",
        href: "#0",
        onClick: ($event) => _ctx.$emit("close-modal")
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="mr-3 h-3 w-3 shrink-0 fill-purple-500" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M6 0C2.691 0 0 2.362 0 5.267c0 2.905 2.691 5.266 6 5.266a6.8 6.8 0 0 0 1.036-.079l2.725 1.485a.5.5 0 0 0 .739-.439V8.711A4.893 4.893 0 0 0 12 5.267C12 2.362 9.309 0 6 0Z"${_scopeId}></path></svg><span class="font-medium"${_scopeId}>Submit feedback</span>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "mr-3 h-3 w-3 shrink-0 fill-purple-500",
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", { d: "M6 0C2.691 0 0 2.362 0 5.267c0 2.905 2.691 5.266 6 5.266a6.8 6.8 0 0 0 1.036-.079l2.725 1.485a.5.5 0 0 0 .739-.439V8.711A4.893 4.893 0 0 0 12 5.267C12 2.362 9.309 0 6 0Z" })
              ])),
              createVNode("span", { class: "font-medium" }, "Submit feedback")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$14 = _sfc_main$14.setup;
_sfc_main$14.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Partials/Docs/SearchModal.vue");
  return _sfc_setup$14 ? _sfc_setup$14(props, ctx) : void 0;
};
const _sfc_main$13 = {
  __name: "Breadcrumbs",
  __ssrInlineRender: true,
  setup(__props) {
    const { isClient } = useClientOnly();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      if (unref(isClient)) {
        _push(`<nav${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><ol class="breadcrumbs flex"><!--[-->`);
        ssrRenderList(_ctx.$page.props.breadcrumbs, (breadcrumb, index) => {
          _push(`<li>`);
          if (breadcrumb.route === "last") {
            _push(`<li class="last">${ssrInterpolate(breadcrumb.text)}</li>`);
          } else {
            _push(ssrRenderComponent(_component_Link, {
              href: breadcrumb.route
            }, {
              default: withCtx((_2, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(breadcrumb.text)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(breadcrumb.text), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          }
          _push(`</li>`);
        });
        _push(`<!--]--></ol></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$13 = _sfc_main$13.setup;
_sfc_main$13.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Partials/Breadcrumbs.vue");
  return _sfc_setup$13 ? _sfc_setup$13(props, ctx) : void 0;
};
const _sfc_main$12 = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  const _component_Breadcrumbs = _sfc_main$13;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "transparent hidden border-t border-gray-100 text-gray-800 dark:border-gray-900 dark:text-gray-100 lg:block" }, _attrs))}><div class="mx-auto w-full px-4 py-6 lg:px-8">`);
  _push(ssrRenderComponent(_component_Breadcrumbs, null, null, _parent));
  _push(`</div></header>`);
}
const _sfc_setup$12 = _sfc_main$12.setup;
_sfc_main$12.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Partials/Main/MainHeaderbar.vue");
  return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
const __unplugin_components_9 = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["ssrRender", _sfc_ssrRender$8]]);
const _hoisted_1$d = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$d = /* @__PURE__ */ createElementVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "m9 12l2 2l4-4M7.835 4.697a3.42 3.42 0 0 0 1.946-.806a3.42 3.42 0 0 1 4.438 0a3.42 3.42 0 0 0 1.946.806a3.42 3.42 0 0 1 3.138 3.138a3.42 3.42 0 0 0 .806 1.946a3.42 3.42 0 0 1 0 4.438a3.42 3.42 0 0 0-.806 1.946a3.42 3.42 0 0 1-3.138 3.138a3.42 3.42 0 0 0-1.946.806a3.42 3.42 0 0 1-4.438 0a3.42 3.42 0 0 0-1.946-.806a3.42 3.42 0 0 1-3.138-3.138a3.42 3.42 0 0 0-.806-1.946a3.42 3.42 0 0 1 0-4.438a3.42 3.42 0 0 0 .806-1.946a3.42 3.42 0 0 1 3.138-3.138Z"
}, null, -1);
const _hoisted_3$d = [
  _hoisted_2$d
];
function render$d(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$d, _hoisted_3$d);
}
const __unplugin_components_3$1 = { name: "heroicons-outline-badge-check", render: render$d };
const _sfc_main$11 = {
  __name: "DropdownLink",
  __ssrInlineRender: true,
  props: ["href", "as"],
  setup(__props) {
    const props = __props;
    const { href, as } = toRefs(props);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(as) == "button") {
        _push(`<button type="submit" class="block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:bg-gray-900">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</button>`);
      } else if (unref(as) == "a") {
        _push(`<a${ssrRenderAttr("href", unref(href))} class="block px-4 py-2 text-sm leading-5 text-gray-700 transition hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:bg-gray-900">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</a>`);
      } else {
        _push(ssrRenderComponent(_component_Link, {
          href: unref(href),
          class: "block px-4 py-2 text-sm leading-5 text-gray-700 transition hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:bg-gray-900"
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default")
              ];
            }
          }),
          _: 3
        }, _parent));
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$11 = _sfc_main$11.setup;
_sfc_main$11.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Shared/DropdownLink.vue");
  return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
const _hoisted_1$c = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$c = /* @__PURE__ */ createElementVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "m8 9l4-4l4 4m0 6l-4 4l-4-4"
}, null, -1);
const _hoisted_3$c = [
  _hoisted_2$c
];
function render$c(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$c, _hoisted_3$c);
}
const __unplugin_components_1$5 = { name: "heroicons-outline-selector", render: render$c };
const _sfc_main$10 = {
  __name: "Dropdown",
  __ssrInlineRender: true,
  props: {
    align: {
      default: "right"
    },
    width: {
      default: "64"
    },
    contentClasses: {
      default: () => ["py-1", "bg-white", "dark:bg-gray-700"]
    }
  },
  setup(__props) {
    const props = __props;
    let open = ref(false);
    const closeOnEscape = (e2) => {
      if (open.value && e2.key === "Escape") {
        open.value = false;
      }
    };
    onMounted(() => document.addEventListener("keydown", closeOnEscape));
    onUnmounted(() => document.removeEventListener("keydown", closeOnEscape));
    computed(() => {
      return {
        20: "w-5",
        24: "w-6",
        28: "w-7",
        32: "w-8",
        36: "w-9",
        40: "w-10",
        44: "w-11",
        48: "w-12",
        56: "w-14",
        64: "w-16",
        80: "w-20",
        96: "w-24",
        112: "w-28",
        128: "w-32",
        144: "w-36",
        160: "w-40",
        176: "w-44",
        192: "w-48",
        208: "w-52",
        224: "w-56",
        240: "w-60",
        256: "w-64",
        288: "w-72",
        320: "w-80",
        384: "w-96"
      }[props.width.toString()];
    });
    const widthClass = computed(() => {
      return {
        20: "w-20",
        32: "w-32",
        36: "w-9",
        48: "w-48",
        64: "w-64",
        96: "w-96"
      }[props.width.toString()];
    });
    const alignmentClasses = computed(() => {
      if (props.align === "left") {
        return "origin-top-left left-0";
      } else if (props.align === "right") {
        return "origin-top-right right-0";
      } else {
        return "origin-top";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div>`);
      ssrRenderSlot(_ctx.$slots, "trigger", {}, null, _push, _parent);
      _push(`</div><div style="${ssrRenderStyle(unref(open) ? null : { display: "none" })}" class="fixed inset-0 z-40"></div><div style="${ssrRenderStyle([
        unref(open) ? null : { display: "none" },
        { "display": "none" }
      ])}" class="${ssrRenderClass([[unref(widthClass), unref(alignmentClasses)], "absolute z-50 mt-2 rounded-md shadow-lg"])}"><div class="${ssrRenderClass([__props.contentClasses, "mt-2 w-full rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800 dark:ring-gray-700"])}">`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$10 = _sfc_main$10.setup;
_sfc_main$10.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Shared/Dropdown.vue");
  return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
const _sfc_main$$ = {
  __name: "VersionMenu",
  __ssrInlineRender: true,
  props: ["sticky"],
  setup(__props) {
    const page = usePage().props.currentSection;
    const switchVersion = (version) => {
      router.get(useRoutes("docs.show", { version, page }));
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Dropdown = _sfc_main$10;
      const _component_IconOutlineSelector = __unplugin_components_1$5;
      const _component_DropdownLink = _sfc_main$11;
      const _component_IconOutlineBadgeCheck = __unplugin_components_3$1;
      if (_ctx.$page.props.versions) {
        _push(ssrRenderComponent(_component_Dropdown, mergeProps({
          align: "right",
          width: "20"
        }, _attrs), {
          trigger: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="inline-flex rounded-md"${_scopeId}><button type="button" class="${ssrRenderClass([[
                __props.sticky ? "bg-transparent hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-200" : "bg-white hover:bg-gray-50 focus:bg-gray-50 active:bg-gray-50"
              ], "inline-flex items-center rounded-md border border-transparent px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition hover:text-gray-700 focus:outline-none dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-900 dark:hover:text-gray-100 dark:focus:bg-gray-900 dark:active:bg-gray-900"])}"${_scopeId}> v${ssrInterpolate(_ctx.$page.props.currentVersion)} `);
              _push2(ssrRenderComponent(_component_IconOutlineSelector, { class: "-mr-0.5 ml-2 h-4 w-4" }, null, _parent2, _scopeId));
              _push2(`</button></span>`);
            } else {
              return [
                createVNode("span", { class: "inline-flex rounded-md" }, [
                  createVNode("button", {
                    type: "button",
                    class: ["inline-flex items-center rounded-md border border-transparent px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition hover:text-gray-700 focus:outline-none dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-900 dark:hover:text-gray-100 dark:focus:bg-gray-900 dark:active:bg-gray-900", [
                      __props.sticky ? "bg-transparent hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-200" : "bg-white hover:bg-gray-50 focus:bg-gray-50 active:bg-gray-50"
                    ]]
                  }, [
                    createTextVNode(" v" + toDisplayString(_ctx.$page.props.currentVersion) + " ", 1),
                    createVNode(_component_IconOutlineSelector, { class: "-mr-0.5 ml-2 h-4 w-4" })
                  ], 2)
                ])
              ];
            }
          }),
          content: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (_ctx.$page.props.versions) {
                _push2(`<div class="w-20"${_scopeId}><!--[-->`);
                ssrRenderList(_ctx.$page.props.versions, (version, i2) => {
                  _push2(`<form${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_DropdownLink, { as: "button" }, {
                    default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div class="flex items-center"${_scopeId2}><div${_scopeId2}>${ssrInterpolate(version)}</div>`);
                        if (version == _ctx.$page.props.currentVersion) {
                          _push3(ssrRenderComponent(_component_IconOutlineBadgeCheck, { class: "ml-2 h-5 w-5 text-green-400" }, null, _parent3, _scopeId2));
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode("div", null, toDisplayString(version), 1),
                            version == _ctx.$page.props.currentVersion ? (openBlock(), createBlock(_component_IconOutlineBadgeCheck, {
                              key: 0,
                              class: "ml-2 h-5 w-5 text-green-400"
                            })) : createCommentVNode("", true)
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</form>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                _ctx.$page.props.versions ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "w-20"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$page.props.versions, (version, i2) => {
                    return openBlock(), createBlock("form", {
                      key: i2,
                      onSubmit: withModifiers(($event) => switchVersion(version), ["prevent"])
                    }, [
                      createVNode(_component_DropdownLink, { as: "button" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode("div", null, toDisplayString(version), 1),
                            version == _ctx.$page.props.currentVersion ? (openBlock(), createBlock(_component_IconOutlineBadgeCheck, {
                              key: 0,
                              class: "ml-2 h-5 w-5 text-green-400"
                            })) : createCommentVNode("", true)
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ], 40, ["onSubmit"]);
                  }), 128))
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$$ = _sfc_main$$.setup;
_sfc_main$$.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Partials/Docs/VersionMenu.vue");
  return _sfc_setup$$ ? _sfc_setup$$(props, ctx) : void 0;
};
const _sfc_main$_ = {
  __name: "DocHeaderbar",
  __ssrInlineRender: true,
  setup(__props) {
    const stickyHeader = ref(false);
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        stickyHeader.value = true;
      } else {
        stickyHeader.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Breadcrumbs = _sfc_main$13;
      const _component_VersionMenu = _sfc_main$$;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "transparent hidden border-t border-gray-100 text-gray-800 dark:border-gray-900 dark:text-gray-100 md:flex md:items-center md:justify-between" }, _attrs))}><div class="mx-auto w-full px-4 py-6 sm:px-6 lg:px-8">`);
      _push(ssrRenderComponent(_component_Breadcrumbs, null, null, _parent));
      _push(`</div><div class="flex items-center px-4 py-6 sm:px-6 lg:px-8"><div class="relative ml-3">`);
      _push(ssrRenderComponent(_component_VersionMenu, { sticky: unref(stickyHeader) }, null, _parent));
      _push(`</div><a${ssrRenderAttr("href", `https://github.com/${_ctx.$page.props.github}`)} target="_blank" class="ml-4 flex h-10 w-10 items-center justify-center text-gray-600 hover:text-gray-800 focus:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-600 dark:focus:text-gray-600" aria-label="Github Link"><svg class="h-5 w-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>${ssrInterpolate(_ctx.__("GitHub"))}</title><path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"></path></svg></a><a${ssrRenderAttr("href", `https://twitter.com/${_ctx.$page.props.twitter}`)} target="_blank" class="ml-3 flex h-10 w-10 items-center justify-center text-gray-600 hover:text-gray-800 focus:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-600 dark:focus:text-gray-600" aria-label="Github Link"><svg class="h-5 w-auto fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>${ssrInterpolate(_ctx.__("Twitter"))}</title><path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"></path></svg></a></div></header>`);
    };
  }
};
const _sfc_setup$_ = _sfc_main$_.setup;
_sfc_main$_.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Partials/Docs/DocHeaderbar.vue");
  return _sfc_setup$_ ? _sfc_setup$_(props, ctx) : void 0;
};
const _sfc_main$Z = {
  __name: "ResponsiveNavLink",
  __ssrInlineRender: true,
  props: {
    active: Boolean,
    href: String,
    as: String
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => {
      return props.active === true ? "block pl-3 pr-4 py-2 border-l-4 border-orange-500 text-sm font-normal text-gray-900 dark:text-gray-100 focus:outline-none focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-100 dark:focus:bg-gray-600 focus:border-gray-700 dark:focus:border-red-500 transition" : "block pl-3 pr-4 py-2 border-l-4 border-transparent text-sm font-normal text-gray-900 dark:text-gray-100 hover:text-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-blue-500 focus:outline-none focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-600 focus:border-gray-300 dark:focus:border-red-500 transition";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.as == "button") {
        _push(`<button class="${ssrRenderClass([unref(classes), "w-full text-left"])}">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</button>`);
      } else {
        _push(ssrRenderComponent(_component_Link, {
          href: __props.href,
          class: unref(classes)
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default")
              ];
            }
          }),
          _: 3
        }, _parent));
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$Z = _sfc_main$Z.setup;
_sfc_main$Z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Shared/ResponsiveNavLink.vue");
  return _sfc_setup$Z ? _sfc_setup$Z(props, ctx) : void 0;
};
const _sfc_main$Y = {
  __name: "ResponsiveNavMenu",
  __ssrInlineRender: true,
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ResponsiveNavLink = _sfc_main$Z;
      const _component_IconOutlineBadgeCheck = __unplugin_components_3$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [{ block: __props.show, hidden: !__props.show }, "lg:hidden"]
      }, _attrs))}><div class="pt-2 pb-3 pl-6 pr-4 space-y-1">`);
      _push(ssrRenderComponent(_component_ResponsiveNavLink, {
        href: _ctx.route("dashboard"),
        active: _ctx.route().current("dashboard")
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.__("Dashboard"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.__("Dashboard")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="pt-2 pb-3 pl-6 pr-4 space-y-1">`);
      _push(ssrRenderComponent(_component_ResponsiveNavLink, {
        href: _ctx.route("docs.home"),
        active: _ctx.route().current("docs.home")
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.__("Documentation"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.__("Documentation")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600"><div class="flex items-center px-4">`);
      if (_ctx.$page.props.serenity.managesProfilePhotos) {
        _push(`<div class="mr-3 shrink-0"><img class="object-cover w-10 h-10 rounded-full"${ssrRenderAttr("src", _ctx.$page.props.user.profile_photo_url)}${ssrRenderAttr("alt", _ctx.$page.props.user.name)}></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><div class="text-base font-medium text-gray-800">${ssrInterpolate(_ctx.$page.props.user.username)}</div><div class="text-sm font-medium text-gray-500">${ssrInterpolate(_ctx.$page.props.user.email)}</div></div></div><div class="pl-6 pr-4 mt-3 space-y-2">`);
      _push(ssrRenderComponent(_component_ResponsiveNavLink, {
        href: _ctx.route("profile.show"),
        active: _ctx.route().current("profile.show")
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.__("Profile"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.__("Profile")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (_ctx.$page.props.serenity.hasApiFeatures) {
        _push(ssrRenderComponent(_component_ResponsiveNavLink, {
          href: _ctx.route("api-tokens.index"),
          active: _ctx.route().current("api-tokens.index")
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.__("API Tokens"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.__("API Tokens")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<form method="POST">`);
      _push(ssrRenderComponent(_component_ResponsiveNavLink, { as: "button" }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.__("Logout"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.__("Logout")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form>`);
      if (_ctx.$page.props.serenity.hasTeamFeatures) {
        _push(`<!--[--><div class="border-t border-gray-200 dark:border-gray-600"></div><div class="block py-2 pr-4 text-xs text-gray-400">${ssrInterpolate(_ctx.__("Manage Teams"))}</div>`);
        _push(ssrRenderComponent(_component_ResponsiveNavLink, {
          href: _ctx.route("teams.show", _ctx.$page.props.user.current_team),
          active: _ctx.route().current("teams.show")
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.__("Team Settings"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.__("Team Settings")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        if (_ctx.$page.props.serenity.canCreateTeams) {
          _push(ssrRenderComponent(_component_ResponsiveNavLink, {
            href: _ctx.route("teams.create"),
            active: _ctx.route().current("teams.create")
          }, {
            default: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.__("Create New Team"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.__("Create New Team")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="border-t border-gray-200 dark:border-gray-600"></div><div class="block py-2 pr-4 text-xs text-gray-400">${ssrInterpolate(_ctx.__("Switch Teams"))}</div><!--[-->`);
        ssrRenderList(_ctx.$page.props.user.all_teams, (team) => {
          _push(`<form>`);
          _push(ssrRenderComponent(_component_ResponsiveNavLink, { as: "button" }, {
            default: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex items-center"${_scopeId}>`);
                if (team.id == _ctx.$page.props.user.current_team_id) {
                  _push2(ssrRenderComponent(_component_IconOutlineBadgeCheck, { class: "w-5 h-5 mr-2 text-green-400" }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div${_scopeId}>${ssrInterpolate(team.name)}</div></div>`);
              } else {
                return [
                  createVNode("div", { class: "flex items-center" }, [
                    team.id == _ctx.$page.props.user.current_team_id ? (openBlock(), createBlock(_component_IconOutlineBadgeCheck, {
                      key: 0,
                      class: "w-5 h-5 mr-2 text-green-400"
                    })) : createCommentVNode("", true),
                    createVNode("div", null, toDisplayString(team.name), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</form>`);
        });
        _push(`<!--]--><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$Y = _sfc_main$Y.setup;
_sfc_main$Y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Partials/Main/ResponsiveNavMenu.vue");
  return _sfc_setup$Y ? _sfc_setup$Y(props, ctx) : void 0;
};
const _hoisted_1$b = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$b = /* @__PURE__ */ createElementVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1);
const _hoisted_3$b = [
  _hoisted_2$b
];
function render$b(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$b, _hoisted_3$b);
}
const __unplugin_components_5$1 = { name: "heroicons-outline-x", render: render$b };
const _hoisted_1$a = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$a = /* @__PURE__ */ createElementVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M4 6h16M4 12h16M4 18h16"
}, null, -1);
const _hoisted_3$a = [
  _hoisted_2$a
];
function render$a(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$a, _hoisted_3$a);
}
const __unplugin_components_4$2 = { name: "heroicons-outline-menu", render: render$a };
const _sfc_main$X = {
  __name: "ThemeSwitcher",
  __ssrInlineRender: true,
  setup(__props) {
    const isDark = useDark();
    useToggle(isDark);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: "rounded-lg p-2.5 text-sm text-gray-500 hover:text-orange-500 focus:outline-none focus:ring-0 dark:text-gray-400 dark:hover:text-orange-500",
        "aria-label": _ctx.__("Theme Switcher")
      }, _attrs))}>`);
      if (unref(isDark)) {
        _push(`<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`);
      } else {
        _push(`<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>`);
      }
      _push(`</button>`);
    };
  }
};
const _sfc_setup$X = _sfc_main$X.setup;
_sfc_main$X.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Shared/ThemeSwitcher.vue");
  return _sfc_setup$X ? _sfc_setup$X(props, ctx) : void 0;
};
const _hoisted_1$9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$9 = /* @__PURE__ */ createElementVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "m19 9l-7 7l-7-7"
}, null, -1);
const _hoisted_3$9 = [
  _hoisted_2$9
];
function render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, _hoisted_3$9);
}
const __unplugin_components_1$4 = { name: "heroicons-outline-chevron-down", render: render$9 };
const _sfc_main$W = {
  __name: "AccountManagerMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const logout = () => {
      router.post(useRoutes("logout"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Dropdown = _sfc_main$10;
      const _component_IconOutlineChevronDown = __unplugin_components_1$4;
      const _component_DropdownLink = _sfc_main$11;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative ml-3" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Dropdown, {
        align: "right",
        width: "48"
      }, {
        trigger: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.$page.props.serenity.managesProfilePhotos) {
              _push2(`<button class="focus:border-contrast-500 flex rounded-full border-2 border-transparent text-sm transition focus:outline-none"${_scopeId}><img class="h-8 w-8 rounded-full object-cover"${ssrRenderAttr("src", _ctx.$page.props.user.profile_photo_url)}${ssrRenderAttr("alt", _ctx.$page.props.user.name)}${_scopeId}></button>`);
            } else {
              _push2(`<span class="inline-flex rounded-md"${_scopeId}><button type="button" class="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition hover:text-gray-700 focus:outline-none"${_scopeId}>${ssrInterpolate(_ctx.$page.props.user.name)} `);
              _push2(ssrRenderComponent(_component_IconOutlineChevronDown, { class: "-mr-0.5 ml-2 h-4 w-4" }, null, _parent2, _scopeId));
              _push2(`</button></span>`);
            }
          } else {
            return [
              _ctx.$page.props.serenity.managesProfilePhotos ? (openBlock(), createBlock("button", {
                key: 0,
                class: "focus:border-contrast-500 flex rounded-full border-2 border-transparent text-sm transition focus:outline-none"
              }, [
                createVNode("img", {
                  class: "h-8 w-8 rounded-full object-cover",
                  src: _ctx.$page.props.user.profile_photo_url,
                  alt: _ctx.$page.props.user.name
                }, null, 8, ["src", "alt"])
              ])) : (openBlock(), createBlock("span", {
                key: 1,
                class: "inline-flex rounded-md"
              }, [
                createVNode("button", {
                  type: "button",
                  class: "inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition hover:text-gray-700 focus:outline-none"
                }, [
                  createTextVNode(toDisplayString(_ctx.$page.props.user.name) + " ", 1),
                  createVNode(_component_IconOutlineChevronDown, { class: "-mr-0.5 ml-2 h-4 w-4" })
                ])
              ]))
            ];
          }
        }),
        content: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="block px-4 py-2 text-xs text-gray-400"${_scopeId}>${ssrInterpolate(_ctx.__("Manage Account"))}</div>`);
            _push2(ssrRenderComponent(_component_DropdownLink, {
              href: _ctx.route("settings.show")
            }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.__("Account"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.__("Account")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (_ctx.$page.props.serenity.canUpdateProfileInformation) {
              _push2(ssrRenderComponent(_component_DropdownLink, {
                href: _ctx.route("profile.show")
              }, {
                default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.__("Profile"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.__("Profile")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.$page.props.serenity.hasApiFeatures) {
              _push2(ssrRenderComponent(_component_DropdownLink, {
                href: _ctx.route("api-tokens.index")
              }, {
                default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.__("API Tokens"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.__("API Tokens")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="border-t border-gray-200 dark:border-gray-600"${_scopeId}></div><form${_scopeId}>`);
            _push2(ssrRenderComponent(_component_DropdownLink, { as: "button" }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.__("Logout"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.__("Logout")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form>`);
          } else {
            return [
              createVNode("div", { class: "block px-4 py-2 text-xs text-gray-400" }, toDisplayString(_ctx.__("Manage Account")), 1),
              createVNode(_component_DropdownLink, {
                href: _ctx.route("settings.show")
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.__("Account")), 1)
                ]),
                _: 1
              }, 8, ["href"]),
              _ctx.$page.props.serenity.canUpdateProfileInformation ? (openBlock(), createBlock(_component_DropdownLink, {
                key: 0,
                href: _ctx.route("profile.show")
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.__("Profile")), 1)
                ]),
                _: 1
              }, 8, ["href"])) : createCommentVNode("", true),
              _ctx.$page.props.serenity.hasApiFeatures ? (openBlock(), createBlock(_component_DropdownLink, {
                key: 1,
                href: _ctx.route("api-tokens.index")
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.__("API Tokens")), 1)
                ]),
                _: 1
              }, 8, ["href"])) : createCommentVNode("", true),
              createVNode("div", { class: "border-t border-gray-200 dark:border-gray-600" }),
              createVNode("form", {
                onSubmit: withModifiers(logout, ["prevent"])
              }, [
                createVNode(_component_DropdownLink, { as: "button" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.__("Logout")), 1)
                  ]),
                  _: 1
                })
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$W = _sfc_main$W.setup;
_sfc_main$W.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Partials/Account/AccountManagerMenu.vue");
  return _sfc_setup$W ? _sfc_setup$W(props, ctx) : void 0;
};
const _sfc_main$V = {
  __name: "TeamManagerMenu",
  __ssrInlineRender: true,
  props: {
    sticky: {
      type: Boolean,
      required: true
    }
  },
  setup(__props) {
    const switchToTeam = (team) => {
      router.put(
        useRoutes("current-team.update"),
        { team_id: team.id },
        { preserveState: false }
      );
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Dropdown = _sfc_main$10;
      const _component_IconOutlineSelector = __unplugin_components_1$5;
      const _component_DropdownLink = _sfc_main$11;
      const _component_IconOutlineBadgeCheck = __unplugin_components_3$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative ml-3" }, _attrs))}>`);
      if (_ctx.$page.props.serenity.hasTeamFeatures) {
        _push(ssrRenderComponent(_component_Dropdown, {
          align: "right",
          width: "60"
        }, {
          trigger: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="inline-flex rounded-md"${_scopeId}><button type="button" class="${ssrRenderClass([[
                __props.sticky ? "bg-transparent hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-200" : "bg-white hover:bg-gray-50 focus:bg-gray-50 active:bg-gray-50"
              ], "inline-flex items-center rounded-md border border-transparent px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition hover:text-gray-700 focus:outline-none dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-900 dark:hover:text-gray-100 dark:focus:bg-gray-900 dark:active:bg-gray-900"])}"${_scopeId}>${ssrInterpolate(_ctx.$page.props.user.current_team.name)} `);
              _push2(ssrRenderComponent(_component_IconOutlineSelector, { class: "-mr-0.5 ml-2 h-4 w-4" }, null, _parent2, _scopeId));
              _push2(`</button></span>`);
            } else {
              return [
                createVNode("span", { class: "inline-flex rounded-md" }, [
                  createVNode("button", {
                    type: "button",
                    class: ["inline-flex items-center rounded-md border border-transparent px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition hover:text-gray-700 focus:outline-none dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-900 dark:hover:text-gray-100 dark:focus:bg-gray-900 dark:active:bg-gray-900", [
                      __props.sticky ? "bg-transparent hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-200" : "bg-white hover:bg-gray-50 focus:bg-gray-50 active:bg-gray-50"
                    ]]
                  }, [
                    createTextVNode(toDisplayString(_ctx.$page.props.user.current_team.name) + " ", 1),
                    createVNode(_component_IconOutlineSelector, { class: "-mr-0.5 ml-2 h-4 w-4" })
                  ], 2)
                ])
              ];
            }
          }),
          content: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="w-60"${_scopeId}>`);
              if (_ctx.$page.props.serenity.hasTeamFeatures) {
                _push2(`<!--[--><div class="block px-4 py-2 text-xs text-gray-400 dark:font-semibold dark:text-gray-500"${_scopeId}>${ssrInterpolate(_ctx.__("Manage Team"))}</div>`);
                _push2(ssrRenderComponent(_component_DropdownLink, {
                  href: _ctx.route("teams.show", _ctx.$page.props.user.current_team)
                }, {
                  default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.__("Team Settings"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.__("Team Settings")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                if (_ctx.$page.props.serenity.canCreateTeams) {
                  _push2(ssrRenderComponent(_component_DropdownLink, {
                    href: _ctx.route("teams.create")
                  }, {
                    default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(_ctx.__("Create New Team"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.__("Create New Team")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div class="border-t border-gray-100 dark:border-gray-600"${_scopeId}></div><div class="block px-4 py-2 text-xs text-gray-400 dark:font-semibold dark:text-gray-500"${_scopeId}>${ssrInterpolate(_ctx.__("Switch Teams"))}</div><!--[-->`);
                ssrRenderList(_ctx.$page.props.user.all_teams, (team) => {
                  _push2(`<form${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_DropdownLink, { as: "button" }, {
                    default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div class="flex items-center"${_scopeId2}>`);
                        if (team.id == _ctx.$page.props.user.current_team_id) {
                          _push3(ssrRenderComponent(_component_IconOutlineBadgeCheck, { class: "mr-2 h-5 w-5 text-green-400" }, null, _parent3, _scopeId2));
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`<div${_scopeId2}>${ssrInterpolate(team.name)}</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center" }, [
                            team.id == _ctx.$page.props.user.current_team_id ? (openBlock(), createBlock(_component_IconOutlineBadgeCheck, {
                              key: 0,
                              class: "mr-2 h-5 w-5 text-green-400"
                            })) : createCommentVNode("", true),
                            createVNode("div", null, toDisplayString(team.name), 1)
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</form>`);
                });
                _push2(`<!--]--><!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "w-60" }, [
                  _ctx.$page.props.serenity.hasTeamFeatures ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    createVNode("div", { class: "block px-4 py-2 text-xs text-gray-400 dark:font-semibold dark:text-gray-500" }, toDisplayString(_ctx.__("Manage Team")), 1),
                    createVNode(_component_DropdownLink, {
                      href: _ctx.route("teams.show", _ctx.$page.props.user.current_team)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.__("Team Settings")), 1)
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    _ctx.$page.props.serenity.canCreateTeams ? (openBlock(), createBlock(_component_DropdownLink, {
                      key: 0,
                      href: _ctx.route("teams.create")
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.__("Create New Team")), 1)
                      ]),
                      _: 1
                    }, 8, ["href"])) : createCommentVNode("", true),
                    createVNode("div", { class: "border-t border-gray-100 dark:border-gray-600" }),
                    createVNode("div", { class: "block px-4 py-2 text-xs text-gray-400 dark:font-semibold dark:text-gray-500" }, toDisplayString(_ctx.__("Switch Teams")), 1),
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$page.props.user.all_teams, (team) => {
                      return openBlock(), createBlock("form", {
                        key: team.id,
                        onSubmit: withModifiers(($event) => switchToTeam(team), ["prevent"])
                      }, [
                        createVNode(_component_DropdownLink, { as: "button" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center" }, [
                              team.id == _ctx.$page.props.user.current_team_id ? (openBlock(), createBlock(_component_IconOutlineBadgeCheck, {
                                key: 0,
                                class: "mr-2 h-5 w-5 text-green-400"
                              })) : createCommentVNode("", true),
                              createVNode("div", null, toDisplayString(team.name), 1)
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ], 40, ["onSubmit"]);
                    }), 128))
                  ], 64)) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$V = _sfc_main$V.setup;
_sfc_main$V.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Partials/Teams/TeamManagerMenu.vue");
  return _sfc_setup$V ? _sfc_setup$V(props, ctx) : void 0;
};
const _sfc_main$U = {
  __name: "NavLink",
  __ssrInlineRender: true,
  props: ["href", "active"],
  setup(__props) {
    const props = __props;
    const { href, active } = toRefs(props);
    const classes = computed(() => {
      return active.value === true ? "inline-flex items-center h-[66px] px-1 pt-1 border-b-2 border-blue-500 text-sm font-normal leading-5 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-contrast-700 transition" : "inline-flex items-center h-[66px] px-1 pt-1 border-b-2 border-transparent text-sm font-normal leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-700 focus:outline-none focus:text-gray-700 dark:focus:text-gray-300 focus:border-gray-300 dark:focus:border-gray-700 transition";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(ssrRenderComponent(_component_Link, mergeProps({
        href: unref(href),
        class: unref(classes)
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$U = _sfc_main$U.setup;
_sfc_main$U.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Shared/NavLink.vue");
  return _sfc_setup$U ? _sfc_setup$U(props, ctx) : void 0;
};
const _sfc_main$T = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({ xmlns: "http://www.w3.org/2000/svg" }, _ctx.$attrs, {
    "xml:space": "preserve",
    "fill-rule": "evenodd",
    "stroke-linejoin": "round",
    "stroke-miterlimit": "2",
    "clip-rule": "evenodd",
    viewBox: "0 0 909 749"
  }, _attrs))}><path fill="url(#a)" fill-rule="nonzero" d="M328.6 641.9c-2.4-.8-4.6-1.9-7-2.8l-7-3-7.2-3.5-3.6-1.8-3.6-2a11375.7 11375.7 0 0 0-10.7-6.6 1196.4 1196.4 0 0 1-7.1-5l-3.5-2.6-6.9-5.8c-9-8-17.7-17-25.3-27.2a227.6 227.6 0 0 1-20.7-33.2 380 380 0 0 1-27.5-77c-3.5-13.4-6.6-27-9.7-40.6-1.6-6.8-3.1-13.6-4.8-20.3l-2-7.9c-.8-3.5-1.7-7-2.7-10.4l-3.1-10.6-3.6-11-9.4-29 24.6 8c8.3 2.7 16.4 5.5 24.2 7.8 4 1 7.8 2.2 11.7 3.1l8.7 2.2 11.3 2.8c15.1 3.6 30.3 7 45.2 11 15 3.8 29.6 8 43.6 13 7 2.5 14 5.2 20.6 8.1l5.6 2.5 8.3 3.9a383 383 0 0 1 8 3.9l4 2 2 1c.6.3 1.4.5 1.8 1-1.7 7.3-3.6 14.7-5 21.5l-1.4 7.2a203.4 203.4 0 0 0-.8 68 246.7 246.7 0 0 0 20.2 65c8 17.5 15.7 30.9 21 39.9l3.7 6 2.7 4.2 2.2 3.5-2.8-3-3.5-3.7-4.7-5.2a288.7 288.7 0 0 1-44.4-65.4c-5.2-11-10.2-23.2-14.2-36.9a196 196 0 0 1-7.2-76.2l.3-3.2v-4.5c-.2-.2-.7-.2-1-.3l-1.2-.3-1-.2h-.3l-.3-.2-1.1-.4-2.3-.8c-6.2-2.1-12.6-4.1-19.2-6a613 613 0 0 0-41.6-9.8c-14.6-3-29.7-5.8-45.4-9l-11.8-2.6-3-.7c.1 0 0 0 0 0v.4l.6 2.5a916 916 0 0 1 4.6 21c2.8 14 5.5 27.4 8.3 40.4 5.6 26 12.2 50 21.2 71.7a186.7 186.7 0 0 0 34.8 55.2c14 14.8 30 26.1 46.2 34.4a263 263 0 0 0 45.9 18.4 352.4 352.4 0 0 0 50.7 11.6c4 .6 7.5 1 10.2 1.5l8.5 1-8.6.6-10.3.4h-14.2c-10.7-.2-23.8-1-39-3.2s-32.4-5.9-51-12.7Zm58.8-196.3a185.5 185.5 0 0 1 6-34.5 385.7 385.7 0 0 1 25.3-68 447.4 447.4 0 0 1 18.1-33.8c1.6-2.8 3.4-5.6 5.2-8.3l5.2-8.3a1469.9 1469.9 0 0 0 16.1-25.4l4-6.5 5.7-10c3.7-6.6 7.3-13.8 10.9-20.8l10.6-20.6 11.6 23.1c3.9 7.8 7.6 15.2 11.5 22.2l3 5.2 2.8 4.8 3 5 5.9 10c8 13.4 16 26.5 23.6 39.5a504 504 0 0 1 20.4 38.8 316 316 0 0 1 8.2 19.2l2 4.9a7830.3 7830.3 0 0 1 5.3 14.9l1.2 3.6.6 1.8.4.9c0 .3.2.6.1.8l-12.2 7.3c-2 1.3-3.9 2.4-5.7 3.7l-3.6 2.2a222.4 222.4 0 0 0-34 27.4 215.8 215.8 0 0 0-28.8 36.4 270.8 270.8 0 0 0-18.2 33.4l-1.2 2.5.7-2.7c.4-1.7 1-4.3 2-7.7 2-6.7 5-16.7 10.3-29a203 203 0 0 1 44.8-65.2c3.9-3.8 8-7.6 12.5-11.2l3.2-2.6 1.1-1.1 2.2-2c.1 0 0 0 0-.2v-.2l-.3-.4-.5-.8a33 33 0 0 0-1.7-2.9l-2-4c-3-5.6-6-11.3-9.4-17a622.5 622.5 0 0 0-22.3-35.3c-8.1-12.1-16.9-24.6-25.7-37.8l-6.6-10-3.3-5.2-.2-.3-.2-.1c-.2-.2-.4-.1-.4 0v.4l-.1.2-.4.7-1.5 2.5a612.8 612.8 0 0 1-16.9 26.4 7969 7969 0 0 0-5 7.7l-5 7.7a538.5 538.5 0 0 0-17.7 31 437.5 437.5 0 0 0-27 61.4 196.4 196.4 0 0 0-7.4 29.3 167.1 167.1 0 0 0-2 21.4l-.1 7 .3 6.7.2 3.4c0 1.1.1 2.3.3 3.4l1 6.6c0 1 .2 2.2.4 3.2l.6 3.2 1.3 6.4c.4 2.1 1 4.1 1.5 6.2l1.6 6 2 5.9c5 15.4 11.2 29 17.3 40.7a359 359 0 0 0 24.3 39.7l5.3 7.5 4.5 6.1-5.6-5.1-6.7-6.4a302.9 302.9 0 0 1-31-36 241 241 0 0 1-24-40.2l-3-6-2.5-6.4-2.5-6.5-2.2-6.9-1.1-3.5-1-3.6-1.8-7.3a3707.3 3707.3 0 0 1-1.4-7.6c-.4-2.7-1-5.2-1.2-7.9l-.7-8a177.4 177.4 0 0 1 0-25Zm310.3-69c13.3-3.4 26.8-6.4 40.2-9.5 6.7-1.5 13.4-3 20-4.7l8.5-2.1 10.3-2.8c3.5-1 7-2 10.5-3.2l10.9-3.5 27.4-9-7.8 24.1c-2.7 8-5.4 16-7.6 23.7l-3.2 11.4-2.2 9-2.7 11c-3.6 14.8-7 29.6-10.7 44.2a527.3 527.3 0 0 1-12.6 42.7A344 344 0 0 1 771 528l-2.5 5.8-3.7 8.1a436 436 0 0 1-3.8 8c-1.2 2.6-2.4 5.3-3.7 7.7-7.4-1.8-14.8-3.7-21.7-5.1a10364.7 10364.7 0 0 1-12.8-2.5 196 196 0 0 0-62.4-.4 246 246 0 0 0-65.3 19.5c-17.6 7.9-31 15.4-40.1 20.8l-6 3.5-4.3 2.7-3.5 2.2 3-2.8 3.7-3.5 5.3-4.6a293 293 0 0 1 65.9-43.7 251 251 0 0 1 37-14 202.2 202.2 0 0 1 79.4-6.1h1l.5.1h2.7c.2-.2.3-.8.4-1l.2-1.2.2-1v-.3l.4-1 .8-2.3c2-6.2 4-12.4 5.7-19 3.5-12.9 6.6-26.5 9.5-40.7 3-14.3 5.7-29 8.9-44.4l2.5-11.6.6-2.4-.1-.1h-.7l-1.3.4-20.9 4.6c-13.7 2.8-27 5.4-39.8 8.2a421.4 421.4 0 0 0-71.2 20.6 193.8 193.8 0 0 0-55.4 33.6 173.4 173.4 0 0 0-34.9 45 262.6 262.6 0 0 0-19 45 346.2 346.2 0 0 0-12 50l-1.6 10.1-1.2 8.4-.5-8.5-.2-10.2v-6.6c0-2.3 0-4.8.2-7.4a300 300 0 0 1 3.7-38.5c2.4-15 6.3-32 13.4-50.3a182.6 182.6 0 0 1 33.8-55.4 204 204 0 0 1 60.4-44.3c23.5-11.8 49.5-20 76.1-26.9Zm-348 305a231.9 231.9 0 0 1-83.5-35.2 200.1 200.1 0 0 1-40.8-37.3l-2.7-3.2a2136.5 2136.5 0 0 0-5.1-6.3l-.2-.2-.3.2-.6.3-1.2.6a65.1 65.1 0 0 0-6.7 3.5c-5.7 2.9-11.4 6-17 9.3a570 570 0 0 0-35.2 22.4c-12 8.2-24.4 17-37.6 26a9462 9462 0 0 1-5 3.5l-2.5 1.7-1.2.8-.3.3a1275 1275 0 0 0-6.2 4.9c2.9 1 5.2 2 7.1 2.8l.7.3 3.6 2.1 7.6 4.5 15.2 9.2a726.5 726.5 0 0 0 61.6 34.9c10.6 5 21.5 9.6 32.5 13.3l8.3 2.6 8.4 2.3 8.4 1.8 4.2.7 4.3.7a150.6 150.6 0 0 0 68.2-6 247 247 0 0 0 54.6-26.3c17.5-11 34.4-23.3 51.3-35.8l12.7-9.4 12.9-9.3c4.2-3.1 8.6-6.1 12.9-9.1l13-8.8c17.3-11.5 35-22.1 52.8-31.5 17.9-9.3 36-17.4 54.2-23.8a309.3 309.3 0 0 1 54.5-14 267.7 267.7 0 0 1 100.5 3.1c30 6.8 55.3 18.5 75.8 30.5 10.3 6 19.5 12 27.8 17.8l4.4 3.1a385.2 385.2 0 1 0-741.4-4.2c7.3-4.3 14.6-8.6 21.8-12.6 13-7.4 26-14.3 38.7-20.2a343 343 0 0 1 19.1-8.2c4.7-2 9.1-3.5 13.5-5.1a335 335 0 0 1 6.5-2.3l3.2-1 1.6-.6.8-.3h.7l7.8 13 3.8 6 3.1 4.6a211.6 211.6 0 0 0 34 38.4c15.6 13.7 31.3 23 44.5 30a298 298 0 0 0 31.3 13.8l8.4 3 3 1-3-.5-8.9-1.8Z" transform="translate(-36.4 -136.4)"></path><path fill="#00b4e2" fill-rule="nonzero" d="M887.9 631.4a867.4 867.4 0 0 0-40.5-32.8 520.3 520.3 0 0 0-28.5-16.4c-7-3.6-14.3-7.3-22-10.6-3.9-1.8-8-3.3-12-5l-6.2-2.3a245.6 245.6 0 0 0-62.5-14c-20-1.8-41.3-1.4-62.9 1.8l-8.1 1.4c-2.7.4-5.4 1-8.2 1.6-2.7.5-5.4 1.3-8.1 1.9-2.8.7-5.5 1.2-8.2 2l-8.3 2.4c-2.7.7-5.4 1.7-8.2 2.6-5.5 1.6-11 3.7-16.4 5.7-11 4.3-21.7 8.7-32 13.7-5.3 2.4-10.3 5-15.4 7.5-5 2.7-10 5.2-15 8a920.3 920.3 0 0 0-55.6 33.5c-17.5 11.2-34 22.5-50.1 32.4-16 10-31.6 18.6-46.3 25.4a252.7 252.7 0 0 1-41 15c-6.3 1.4-12 2.9-17.5 3.6l-4 .6-2 .3-1.8.2-7.1.6-3.3.3H288c-3.4.2-6.3-.1-8.7-.3l-7-.5 7-.5c2.4-.2 5.2-.3 8.6-.9l5.4-.7 3-.5 3.2-.6 6.8-1.5 1.8-.4 1.8-.5 3.8-1.1c5.1-1.3 10.5-3.4 16.4-5.4a269.9 269.9 0 0 0 37.7-18.5 506.6 506.6 0 0 0 42.7-28.3c15-10.8 30.6-23.1 47.8-35.6 17.1-12.4 35.6-25 55.7-36.7 5-3 10.2-5.8 15.4-8.7 5.2-2.8 10.5-5.7 16-8.3a393.1 393.1 0 0 1 33.8-14.7 315 315 0 0 1 71-18 272 272 0 0 1 70.2 0c10.8 1.6 21 1.6 30.6 3.7 8.2 1.9 19.4 3.3 37 8.6 20.7 6.3 41 16.6 45.9 19a330.8 330.8 0 0 1 32.4 19.4l11 7.2-9.8-8.8c-6.5-5.7-16-14.2-28.7-24.8-5.3-4.4-11.1-9-17.5-14l-12.9-7.7c-8.5-5-18-10.2-28.2-15.2a290 290 0 0 0-33.6-14A248.8 248.8 0 0 0 617 494a286 286 0 0 0-48.6 14.1 409 409 0 0 0-49.2 23c-16.4 8.8-32.8 19-49.3 30l-12.3 8.3-12.5 8.7-12.5 9-12.7 9.2a711.2 711.2 0 0 1-55 37 277.7 277.7 0 0 1-65.7 29 196 196 0 0 1-44.5 7.3c-15.2.4-30-1-44.3-3.8l-5.3-1.1c-1.8-.4-3.6-.7-5.3-1.3l-10.4-2.8-10-3.4c-3.4-1.2-6.6-2.6-9.8-3.8a312 312 0 0 1-36.4-18 662.2 662.2 0 0 1-62.3-42L56.8 583l-7-5-3.6-2.7-6.5-4.5a299 299 0 0 0-13.2-8.6l-13.7-8.1L0 546.6c8.9 5.2 69.1 56.5 73.9 60 19 14 38.8 30.3 59 47.2 12.2 10.1 123.2 114 228.1 91.7C443.3 728 472 672 584.6 617.8c26-12.5 45.4-22.7 77.3-27.2l35.6-4.8c24.3-3.1 45.3-1 52.3-1 21.3.2 64.5 11.8 73 14.8a202.4 202.4 0 0 1 35.7 17.2c10.8 6.4 19.7 12.7 27.1 17.6l23 15.3s-7.3-6.6-20.7-18.3Z"></path><defs><linearGradient id="a" x1="0" x2="1" y1="0" y2="0" gradientTransform="matrix(227 368 -292 181 262.4 229)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#c53030"></stop><stop offset=".4" stop-color="#d14b32"></stop><stop offset="1" stop-color="#ed8936"></stop></linearGradient></defs></svg>`);
}
const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Shared/ApplicationMark.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};
const __unplugin_components_4$1 = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$S = {
  __name: "MainNavigation",
  __ssrInlineRender: true,
  setup(__props) {
    const showingNavigationDropdown = ref(false);
    const searchModalOpen = ref(false);
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    const stickyHeader = ref(false);
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        stickyHeader.value = true;
      } else {
        stickyHeader.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      const _component_ApplicationMark = __unplugin_components_4$1;
      const _component_NavLink = _sfc_main$U;
      const _component_TeamManagerMenu = _sfc_main$V;
      const _component_AccountManagerMenu = _sfc_main$W;
      const _component_ThemeSwitcher = _sfc_main$X;
      const _component_IconOutlineMenu = __unplugin_components_4$2;
      const _component_IconOutlineX = __unplugin_components_5$1;
      const _component_ResponsiveNavMenu = _sfc_main$Y;
      const _component_DocHeaderbar = _sfc_main$_;
      const _component_MainHeaderbar = __unplugin_components_9;
      const _component_SearchModal = _sfc_main$14;
      _push(`<!--[--><nav class="${ssrRenderClass([{ stickyHeader: unref(stickyHeader) }, "sticky top-0 z-50 bg-white dark:bg-gray-800"])}"><div class="px-6"><div class="flex h-16 justify-between"><div class="flex w-full items-center"><div class="flex shrink-0 items-center">`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("dashboard"),
        "aria-name": "Dashboard"
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ApplicationMark, { class: "block h-9 w-auto" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ApplicationMark, { class: "block h-9 w-auto" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hidden space-x-8 lg:-my-px lg:ml-10 lg:flex">`);
      _push(ssrRenderComponent(_component_NavLink, {
        href: _ctx.route("dashboard"),
        active: _ctx.route().current("dashboard")
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.__("Dashboard"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.__("Dashboard")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NavLink, {
        href: _ctx.route("docs.home"),
        active: _ctx.route().current("docs.home")
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.__("Documentation"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.__("Documentation")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex w-full justify-center px-4 lg:px-0"><button class="${ssrRenderClass([{ "bg-gray-200": unref(searchModalOpen) }, "m-auto inline-flex w-full items-center justify-between whitespace-nowrap rounded border border-gray-200 bg-white py-[7px] pl-3 pr-2 text-[15px] leading-5 text-gray-400 shadow-sm hover:border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-500 dark:hover:border-gray-600 lg:w-[380px]"])}" aria-controls="search-modal"><div class="flex items-center justify-center"><svg class="mr-3 h-4 w-4 shrink-0 fill-gray-500 dark:fill-gray-400" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m14.707 13.293-1.414 1.414-2.4-2.4 1.414-1.414 2.4 2.4ZM6.8 12.6A5.8 5.8 0 1 1 6.8 1a5.8 5.8 0 0 1 0 11.6Zm0-2a3.8 3.8 0 1 0 0-7.6 3.8 3.8 0 0 0 0 7.6Z"></path></svg><span>Search ...</span></div><div class="ml-3 flex h-5 w-5 items-center justify-center font-medium text-gray-500 dark:text-gray-400"><kbd class="text-[length:1.2em]">⌘</kbd><kbd class="ml-[2px] text-[length:0.9em]">K</kbd></div></button></div></div><div class="ml-6 hidden md:ml-0 md:flex md:shrink-0 md:items-center">`);
      _push(ssrRenderComponent(_component_TeamManagerMenu, { sticky: unref(stickyHeader) }, null, _parent));
      _push(ssrRenderComponent(_component_AccountManagerMenu, null, null, _parent));
      _push(`<div class="ml-3">`);
      _push(ssrRenderComponent(_component_ThemeSwitcher, null, null, _parent));
      _push(`</div></div><div class="-mr-2 flex items-center lg:hidden"><button class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none dark:hover:bg-gray-700 dark:hover:text-gray-200 dark:focus:bg-gray-700 dark:focus:text-gray-200">`);
      _push(ssrRenderComponent(_component_IconOutlineMenu, {
        class: ["h-6 w-6", {
          hidden: unref(showingNavigationDropdown),
          "inline-flex": !unref(showingNavigationDropdown)
        }]
      }, null, _parent));
      _push(ssrRenderComponent(_component_IconOutlineX, {
        class: ["h-6 w-6", {
          hidden: !unref(showingNavigationDropdown),
          "inline-flex": unref(showingNavigationDropdown)
        }]
      }, null, _parent));
      _push(`</button></div></div></div>`);
      _push(ssrRenderComponent(_component_ResponsiveNavMenu, { show: unref(showingNavigationDropdown) }, null, _parent));
      if (_ctx.$page.url.startsWith("/docs")) {
        _push(ssrRenderComponent(_component_DocHeaderbar, null, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_MainHeaderbar, null, null, _parent));
      }
      _push(`</nav>`);
      ssrRenderTeleport(_push, (_push2) => {
        _push2(ssrRenderComponent(_component_SearchModal, {
          id: "search-modal",
          searchId: "search",
          modalOpen: unref(searchModalOpen),
          onOpenModal: ($event) => searchModalOpen.value = true,
          onCloseModal: ($event) => searchModalOpen.value = false
        }, null, _parent));
      }, "#teleported", false, _parent);
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Partials/Main/MainNavigation.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
const _sfc_main$R = {
  __name: "Banner",
  __ssrInlineRender: true,
  setup(__props) {
    const show = ref(true);
    const style = computed(() => {
      var _a;
      return ((_a = usePage().props.serenity.flash) == null ? void 0 : _a.bannerStyle) || "success";
    });
    const message = computed(() => {
      var _a;
      return ((_a = usePage().props.serenity.flash) == null ? void 0 : _a.banner) || "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconOutlineCheckCircle = __unplugin_components_5$2;
      const _component_IconOutlineExclamation = __unplugin_components_1$7;
      const _component_IconOutlineX = __unplugin_components_5$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(show) && unref(message)) {
        _push(`<div class="${ssrRenderClass({ "bg-emerald-500": unref(style) == "success", "bg-red-700": unref(style) == "danger" })}"><div class="max-w-screen-xl px-3 py-2 mx-auto sm:px-6 lg:px-8"><div class="flex flex-wrap items-center justify-between"><div class="flex items-center flex-1 w-0 min-w-0"><span class="${ssrRenderClass([{ "bg-emerald-700": unref(style) == "success", "bg-red-600": unref(style) == "danger" }, "flex p-2 rounded-lg"])}">`);
        if (unref(style) == "success") {
          _push(ssrRenderComponent(_component_IconOutlineCheckCircle, { class: "w-5 h-5 text-white" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(style) == "danger") {
          _push(ssrRenderComponent(_component_IconOutlineExclamation, { class: "w-5 h-5 text-white" }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</span><p class="ml-3 text-sm font-medium text-white truncate">${ssrInterpolate(unref(message))}</p></div><div class="shrink-0 sm:ml-3"><button type="button" class="${ssrRenderClass([{
          "hover:bg-green-600 focus:bg-green-600": unref(style) == "success",
          "hover:bg-red-600 focus:bg-red-600": unref(style) == "danger"
        }, "flex p-2 -mr-1 transition rounded-full focus:outline-none sm:-mr-2"])}" aria-label="Dismiss">`);
        _push(ssrRenderComponent(_component_IconOutlineX, { class: "w-5 h-5 text-white" }, null, _parent));
        _push(`</button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Shared/Banner.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
const _sfc_main$Q = {
  __name: "MainLayout",
  __ssrInlineRender: true,
  props: { title: String },
  setup(__props) {
    const props = __props;
    const title2 = props.title || useTrans(__("Dashboard"));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      const _component_Banner = _sfc_main$R;
      const _component_MainNavigation = _sfc_main$S;
      const _component_MainFooter = _sfc_main$15;
      const _component_Notification = __unplugin_components_3$2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, { title: unref(title2) }, null, _parent));
      _push(ssrRenderComponent(_component_Banner, null, null, _parent));
      _push(`<div class="beams min-h-screen bg-gray-100 dark:bg-gray-900">`);
      _push(ssrRenderComponent(_component_MainNavigation, null, null, _parent));
      _push(`<main class="mx-auto w-full px-4 pt-12 sm:px-6 lg:px-8">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_MainFooter, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Notification, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Layouts/MainLayout.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
const _sfc_main$P = {
  __name: "Index",
  __ssrInlineRender: true,
  props: [
    "tokens",
    "availablePermissions",
    "defaultPermissions"
  ],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MainLayout = _sfc_main$Q;
      const _component_ApiTokenManager = _sfc_main$1c;
      _push(ssrRenderComponent(_component_MainLayout, mergeProps({
        title: _ctx.__("API Tokens")
      }, _attrs), {
        header: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl font-semibold leading-tight"${_scopeId}>${ssrInterpolate(_ctx.__("API Tokens"))}</h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-xl font-semibold leading-tight" }, toDisplayString(_ctx.__("API Tokens")), 1)
            ];
          }
        }),
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="py-10 mx-auto max-w-7xl sm:px-6 lg:px-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ApiTokenManager, {
              tokens: props.tokens,
              "available-permissions": props.availablePermissions,
              "default-permissions": props.defaultPermissions
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "py-10 mx-auto max-w-7xl sm:px-6 lg:px-8" }, [
                  createVNode(_component_ApiTokenManager, {
                    tokens: props.tokens,
                    "available-permissions": props.availablePermissions,
                    "default-permissions": props.defaultPermissions
                  }, null, 8, ["tokens", "available-permissions", "default-permissions"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/API/Index.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$P
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$O = {
  __name: "ValidationErrors",
  __ssrInlineRender: true,
  setup(__props) {
    const errors = computed(() => {
      return usePage().props.errors;
    });
    const hasErrors = computed(() => {
      return Object.keys(errors.value).length > 0;
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(hasErrors)) {
        _push(`<div${ssrRenderAttrs(_attrs)}><div class="font-medium text-red-600">${ssrInterpolate(_ctx.__("Whoops! Something went wrong."))}</div><ul class="mt-3 text-sm text-red-600 list-disc list-inside"><!--[-->`);
        ssrRenderList(unref(errors), (error, key) => {
          _push(`<li>${ssrInterpolate(error)}</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Shared/ValidationErrors.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
const _sfc_main$N = {
  __name: "AuthenticationCard",
  __ssrInlineRender: true,
  props: {
    maxWidth: {
      required: false,
      type: String,
      default: "sm:max-w-md"
    }
  },
  setup(__props) {
    const props = __props;
    const maxWidthClass = computed(() => {
      return {
        sm: "sm:max-w-sm",
        md: "sm:max-w-md",
        lg: "sm:max-w-lg",
        xl: "sm:max-w-xl",
        fit: "sm:max-w-fit",
        "2xl": "sm:max-w-2xl"
      }[props.maxWidth];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-20 flex flex-col items-center pt-6 sm:justify-center sm:pt-0" }, _attrs))}><div>`);
      ssrRenderSlot(_ctx.$slots, "logo", { cls: "w-24" }, null, _push, _parent);
      _push(`</div><div class="${ssrRenderClass([unref(maxWidthClass), "mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md dark:bg-gray-800 sm:rounded"])}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Shared/AuthenticationCard.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
const _sfc_main$M = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  const _component_Link = resolveComponent("Link");
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center bg-transparent px-6 py-12 text-sm sm:flex-row sm:justify-between sm:space-y-0" }, _attrs))}><div class="space-x-4 text-gray-400 dark:text-gray-300">`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("terms.show"),
    class: "hover:text-gray-600 dark:hover:text-gray-100"
  }, {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.__("Terms of Service"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.__("Terms of Service")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("policy.show"),
    class: "hover:text-gray-600 dark:hover:text-gray-100"
  }, {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.__("Privacy Policy"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.__("Privacy Policy")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="space-x-4 text-gray-400 dark:text-gray-300"><span>${_ctx.$page.props.copyright}</span><span> Serenity v${ssrInterpolate(_ctx.$page.props.serenityVersion)} (PHP v${ssrInterpolate(_ctx.$page.props.phpVersion)}) </span></div></footer>`);
}
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Partials/Guest/GuestFooter.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
const __unplugin_components_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$L = {
  __name: "GuestResponsiveNavMenu",
  __ssrInlineRender: true,
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ResponsiveNavLink = _sfc_main$Z;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [{ block: __props.show, hidden: !__props.show }, "sm:hidden"]
      }, _attrs))}><div class="space-y-1 pb-3 pl-6 pr-4 pt-2">`);
      if (_ctx.$page.props.user) {
        _push(ssrRenderComponent(_component_ResponsiveNavLink, {
          href: _ctx.route("dashboard"),
          active: _ctx.route().current("dashboard")
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.__("Dashboard"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.__("Dashboard")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_ResponsiveNavLink, {
        href: _ctx.route("docs.home"),
        active: _ctx.route().current("docs.home")
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.__("Documentation"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.__("Documentation")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (!_ctx.$page.props.user) {
        _push(`<div class="border-t border-gray-200 pb-1 pt-4 dark:border-gray-600">`);
        if (_ctx.$page.props.canLogin) {
          _push(`<div class="px-6 py-4 sm:flex sm:items-center sm:justify-end">`);
          _push(ssrRenderComponent(_component_ResponsiveNavLink, {
            href: _ctx.route("login"),
            class: "cursor-pointer text-sm text-gray-600 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:text-white"
          }, {
            default: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.__("Login"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.__("Login")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          if (_ctx.$page.props.canRegister) {
            _push(ssrRenderComponent(_component_ResponsiveNavLink, {
              href: _ctx.route("register"),
              class: "cursor-pointer text-sm text-gray-600 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:text-white"
            }, {
              default: withCtx((_2, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(_ctx.__("Register"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.__("Register")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Partials/Guest/GuestResponsiveNavMenu.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const _sfc_main$K = {
  __name: "GuestHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const showingNavigationDropdown = ref(false);
    const stickyHeader = ref(false);
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        stickyHeader.value = true;
      } else {
        stickyHeader.value = false;
      }
    };
    const isDocs = computed(() => useRoutes().current().startsWith("/docs"));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      const _component_ApplicationMark = __unplugin_components_4$1;
      const _component_NavLink = _sfc_main$U;
      const _component_TeamManagerMenu = _sfc_main$V;
      const _component_AccountManagerMenu = _sfc_main$W;
      const _component_ThemeSwitcher = _sfc_main$X;
      const _component_IconOutlineMenu = __unplugin_components_4$2;
      const _component_IconOutlineX = __unplugin_components_5$1;
      const _component_GuestResponsiveNavMenu = _sfc_main$L;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: ["sticky top-0 z-50 min-w-full border-b border-gray-100 bg-white bg-opacity-5 backdrop-blur-lg backdrop-filter dark:border-gray-900 dark:bg-gray-800 dark:bg-opacity-5 dark:backdrop-blur-lg dark:backdrop-filter", { stickyGuestHeader: unref(stickyHeader) }]
      }, _attrs))}><div class="px-6"><div class="flex h-16 justify-between"><div class="flex"><div class="flex shrink-0 items-center">`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("home"),
        "aria-label": _ctx.__("Home")
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ApplicationMark, { class: "block h-9 w-auto" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ApplicationMark, { class: "block h-9 w-auto" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">`);
      if (_ctx.$page.props.user) {
        _push(ssrRenderComponent(_component_NavLink, {
          href: _ctx.route("dashboard"),
          active: _ctx.route().current("dashboard"),
          "aria-label": _ctx.__("Dashboard")
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.__("Dashboard"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.__("Dashboard")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_NavLink, {
        href: _ctx.route("docs.home"),
        active: unref(isDocs),
        "aria-label": _ctx.__("Documentation")
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.__("Documentation"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.__("Documentation")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="hidden sm:ml-6 sm:flex sm:items-center">`);
      if (_ctx.$page.props.canLogin) {
        _push(`<div class="hidden px-6 py-4 sm:flex sm:items-center sm:justify-end">`);
        if (!_ctx.$page.props.user) {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(_component_NavLink, {
            href: _ctx.route("login"),
            active: _ctx.route().current("login")
          }, {
            default: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.__("Login"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.__("Login")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_Link, {
            href: _ctx.route("register"),
            class: "border-orange bg-orange ml-4 inline-flex w-full items-center justify-center rounded-full border-2 px-4 py-1.5 text-center text-sm font-medium text-white duration-200 hover:bg-transparent hover:text-orange-600 focus:outline-none focus-visible:outline-white focus-visible:ring-white dark:border-white dark:bg-white dark:text-gray-700 dark:hover:bg-transparent dark:hover:text-white lg:w-auto"
          }, {
            default: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.__("Register"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.__("Register")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`<!--]-->`);
        } else {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(_component_TeamManagerMenu, { sticky: unref(stickyHeader) }, null, _parent));
          _push(ssrRenderComponent(_component_AccountManagerMenu, null, null, _parent));
          _push(`<!--]-->`);
        }
        _push(ssrRenderComponent(_component_ThemeSwitcher, { class: "ml-3" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="-mr-2 flex items-center sm:hidden"><button class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none dark:hover:bg-gray-700 dark:hover:text-gray-200 dark:focus:bg-gray-700 dark:focus:text-gray-200">`);
      _push(ssrRenderComponent(_component_IconOutlineMenu, {
        class: ["h-6 w-6", {
          hidden: unref(showingNavigationDropdown),
          "inline-flex": !unref(showingNavigationDropdown)
        }]
      }, null, _parent));
      _push(ssrRenderComponent(_component_IconOutlineX, {
        class: ["h-6 w-6", {
          hidden: !unref(showingNavigationDropdown),
          "inline-flex": unref(showingNavigationDropdown)
        }]
      }, null, _parent));
      _push(`</button></div></div></div>`);
      _push(ssrRenderComponent(_component_GuestResponsiveNavMenu, { show: unref(showingNavigationDropdown) }, null, _parent));
      _push(`</nav>`);
    };
  }
};
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Partials/Guest/GuestHeader.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const _sfc_main$J = {
  __name: "GuestLayout",
  __ssrInlineRender: true,
  props: { title: String },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      const _component_GuestHeader = _sfc_main$K;
      const _component_GuestFooter = __unplugin_components_1$3;
      const _component_Notification = __unplugin_components_3$2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, { title: __props.title }, null, _parent));
      _push(`<div class="beams min-h-screen bg-gray-200 dark:bg-gray-900 dark:text-gray-100">`);
      _push(ssrRenderComponent(_component_GuestHeader, null, null, _parent));
      _push(`<main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_GuestFooter, null, null, _parent));
      _push(ssrRenderComponent(_component_Notification, null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Layouts/GuestLayout.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const _sfc_main$I = {
  __name: "ConfirmPassword",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      password: ""
    });
    const submit = () => {
      form.post(useRoutes("password.confirm"), {
        onStart: () => form.clearErrors(),
        onSuccess: () => form.reset("password")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GuestLayout = _sfc_main$J;
      const _component_AuthenticationCard = _sfc_main$N;
      const _component_ValidationErrors = _sfc_main$O;
      const _component_Label = _sfc_main$1e;
      const _component_Input = _sfc_main$1f;
      const _component_Button = _sfc_main$1j;
      _push(ssrRenderComponent(_component_GuestLayout, mergeProps({
        title: _ctx.__("Secure Area")
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AuthenticationCard, { "max-width": "md" }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="mb-4 text-sm text-gray-600"${_scopeId2}>${ssrInterpolate(_ctx.__("This is a secure area of the application. Please confirm your password before continuing."))}</div>`);
                  _push3(ssrRenderComponent(_component_ValidationErrors, { class: "mb-4" }, null, _parent3, _scopeId2));
                  _push3(`<form${_scopeId2}><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, {
                    for: "password",
                    value: "Password"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    id: "password",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    required: "",
                    autocomplete: "current-password",
                    autofocus: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="mt-4 flex justify-end"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Button, {
                    class: ["ml-4", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing
                  }, {
                    default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.__("Confirm"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.__("Confirm")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></form>`);
                } else {
                  return [
                    createVNode("div", { class: "mb-4 text-sm text-gray-600" }, toDisplayString(_ctx.__("This is a secure area of the application. Please confirm your password before continuing.")), 1),
                    createVNode(_component_ValidationErrors, { class: "mb-4" }),
                    createVNode("form", {
                      onSubmit: withModifiers(submit, ["prevent"])
                    }, [
                      createVNode("div", null, [
                        createVNode(_component_Label, {
                          for: "password",
                          value: "Password"
                        }),
                        createVNode(_component_Input, {
                          id: "password",
                          type: "password",
                          class: "mt-1 block w-full",
                          modelValue: unref(form).password,
                          "onUpdate:modelValue": ($event) => unref(form).password = $event,
                          required: "",
                          autocomplete: "current-password",
                          autofocus: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "mt-4 flex justify-end" }, [
                        createVNode(_component_Button, {
                          class: ["ml-4", { "opacity-25": unref(form).processing }],
                          disabled: unref(form).processing
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.__("Confirm")), 1)
                          ]),
                          _: 1
                        }, 8, ["class", "disabled"])
                      ])
                    ], 40, ["onSubmit"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_AuthenticationCard, { "max-width": "md" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "mb-4 text-sm text-gray-600" }, toDisplayString(_ctx.__("This is a secure area of the application. Please confirm your password before continuing.")), 1),
                  createVNode(_component_ValidationErrors, { class: "mb-4" }),
                  createVNode("form", {
                    onSubmit: withModifiers(submit, ["prevent"])
                  }, [
                    createVNode("div", null, [
                      createVNode(_component_Label, {
                        for: "password",
                        value: "Password"
                      }),
                      createVNode(_component_Input, {
                        id: "password",
                        type: "password",
                        class: "mt-1 block w-full",
                        modelValue: unref(form).password,
                        "onUpdate:modelValue": ($event) => unref(form).password = $event,
                        required: "",
                        autocomplete: "current-password",
                        autofocus: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "mt-4 flex justify-end" }, [
                      createVNode(_component_Button, {
                        class: ["ml-4", { "opacity-25": unref(form).processing }],
                        disabled: unref(form).processing
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("Confirm")), 1)
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])
                    ])
                  ], 40, ["onSubmit"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Auth/ConfirmPassword.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$I
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$H = {
  __name: "ForgotPassword",
  __ssrInlineRender: true,
  props: {
    status: String
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      email: ""
    });
    const submit = () => {
      form.post(useRoutes("password.email"), {
        onStart: () => form.clearErrors(),
        onSuccess: () => form.reset("email")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GuestLayout = _sfc_main$J;
      const _component_AuthenticationCard = _sfc_main$N;
      const _component_ValidationErrors = _sfc_main$O;
      const _component_Label = _sfc_main$1e;
      const _component_Input = _sfc_main$1f;
      const _component_Button = _sfc_main$1j;
      _push(ssrRenderComponent(_component_GuestLayout, mergeProps({
        title: _ctx.__("Forgot Password")
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AuthenticationCard, { "max-width": "sm" }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="mb-4 text-sm text-gray-600 dark:text-gray-500"${_scopeId2}>${ssrInterpolate(_ctx.__(
                    "Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."
                  ))}</div>`);
                  if (props.status) {
                    _push3(`<div class="mb-4 text-sm font-medium text-green-600"${_scopeId2}>${ssrInterpolate(props.status)}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_ValidationErrors, { class: "mb-4" }, null, _parent3, _scopeId2));
                  _push3(`<form${_scopeId2}><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, {
                    for: "email",
                    value: _ctx.__("Email")
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    id: "email",
                    type: "email",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    required: "",
                    autofocus: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="mt-4 flex items-center justify-end"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Button, {
                    class: { "opacity-25": unref(form).processing },
                    disabled: unref(form).processing
                  }, {
                    default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.__("Email Password Reset Link"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.__("Email Password Reset Link")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></form>`);
                } else {
                  return [
                    createVNode("div", { class: "mb-4 text-sm text-gray-600 dark:text-gray-500" }, toDisplayString(_ctx.__(
                      "Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."
                    )), 1),
                    props.status ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mb-4 text-sm font-medium text-green-600"
                    }, toDisplayString(props.status), 1)) : createCommentVNode("", true),
                    createVNode(_component_ValidationErrors, { class: "mb-4" }),
                    createVNode("form", {
                      onSubmit: withModifiers(submit, ["prevent"])
                    }, [
                      createVNode("div", null, [
                        createVNode(_component_Label, {
                          for: "email",
                          value: _ctx.__("Email")
                        }, null, 8, ["value"]),
                        createVNode(_component_Input, {
                          id: "email",
                          type: "email",
                          class: "mt-1 block w-full",
                          modelValue: unref(form).email,
                          "onUpdate:modelValue": ($event) => unref(form).email = $event,
                          required: "",
                          autofocus: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "mt-4 flex items-center justify-end" }, [
                        createVNode(_component_Button, {
                          class: { "opacity-25": unref(form).processing },
                          disabled: unref(form).processing
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.__("Email Password Reset Link")), 1)
                          ]),
                          _: 1
                        }, 8, ["class", "disabled"])
                      ])
                    ], 40, ["onSubmit"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_AuthenticationCard, { "max-width": "sm" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "mb-4 text-sm text-gray-600 dark:text-gray-500" }, toDisplayString(_ctx.__(
                    "Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."
                  )), 1),
                  props.status ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "mb-4 text-sm font-medium text-green-600"
                  }, toDisplayString(props.status), 1)) : createCommentVNode("", true),
                  createVNode(_component_ValidationErrors, { class: "mb-4" }),
                  createVNode("form", {
                    onSubmit: withModifiers(submit, ["prevent"])
                  }, [
                    createVNode("div", null, [
                      createVNode(_component_Label, {
                        for: "email",
                        value: _ctx.__("Email")
                      }, null, 8, ["value"]),
                      createVNode(_component_Input, {
                        id: "email",
                        type: "email",
                        class: "mt-1 block w-full",
                        modelValue: unref(form).email,
                        "onUpdate:modelValue": ($event) => unref(form).email = $event,
                        required: "",
                        autofocus: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "mt-4 flex items-center justify-end" }, [
                      createVNode(_component_Button, {
                        class: { "opacity-25": unref(form).processing },
                        disabled: unref(form).processing
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("Email Password Reset Link")), 1)
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])
                    ])
                  ], 40, ["onSubmit"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Auth/ForgotPassword.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$H
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$G = /* @__PURE__ */ defineComponent({
  __name: "InviteUser",
  __ssrInlineRender: true,
  props: {
    locales: { default: () => ["en"] },
    defaultLocale: { default: "en" },
    email: {}
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      email: props.email,
      first_name: "",
      last_name: "",
      password: "",
      password_confirmation: "",
      locale: ""
    });
    useToast();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      const _component_TextInput = resolveComponent("TextInput");
      const _component_Multiselect = resolveComponent("Multiselect");
      const _component_Button = _sfc_main$1j;
      const _directive_auto_animate = resolveDirective("auto-animate");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, {
        title: _ctx.$t("builder", "Register")
      }, null, _parent));
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-3 bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10" }, ssrGetDirectiveProps(_ctx, _directive_auto_animate)))}><form class="space-y-6">`);
      _push(ssrRenderComponent(_component_TextInput, {
        modelValue: unref(form).first_name,
        "onUpdate:modelValue": ($event) => unref(form).first_name = $event,
        name: "first_name",
        label: _ctx.$t("builder", "First name"),
        class: "col-span-6 sm:col-span-3",
        required: true
      }, null, _parent));
      _push(ssrRenderComponent(_component_TextInput, {
        modelValue: unref(form).last_name,
        "onUpdate:modelValue": ($event) => unref(form).last_name = $event,
        name: "last_name",
        label: _ctx.$t("builder", "Last name"),
        class: "col-span-6 sm:col-span-3",
        required: true
      }, null, _parent));
      _push(ssrRenderComponent(_component_TextInput, {
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        name: "email",
        label: _ctx.$t("builder", "E-mail"),
        type: "email",
        class: "col-span-6 sm:col-span-3",
        disabled: true
      }, null, _parent));
      _push(ssrRenderComponent(_component_TextInput, {
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        name: "password",
        label: _ctx.$t("builder", "Password"),
        type: "password",
        autocomplete: "new-password",
        class: "col-span-6 sm:col-span-3 sm:col-start-1",
        required: true
      }, null, _parent));
      _push(ssrRenderComponent(_component_TextInput, {
        modelValue: unref(form).password_confirmation,
        "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
        name: "password_confirmation",
        label: _ctx.$t("builder", "Password confirmation"),
        type: "password",
        autocomplete: "new-password",
        class: "col-span-6 sm:col-span-3 sm:col-start-1",
        required: true
      }, null, _parent));
      _push(ssrRenderComponent(_component_Multiselect, {
        modelValue: unref(form).locale,
        "onUpdate:modelValue": ($event) => unref(form).locale = $event,
        name: "locale",
        label: _ctx.$t("builder", "Locale"),
        mode: "single",
        options: _ctx.locales,
        "options-value-prop": "key",
        "options-label": "value",
        class: "col-span-6 sm:col-span-3 sm:col-start-1",
        canDeselect: false,
        required: true
      }, null, _parent));
      _push(ssrRenderComponent(_component_Button, {
        class: "w-full",
        type: "submit",
        disabled: unref(form).processing
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("builder", "Save"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("builder", "Save")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div></div>`);
    };
  }
});
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Auth/InviteUser.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$G
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$F = {
  __name: "Login",
  __ssrInlineRender: true,
  props: {
    canResetPassword: Boolean,
    status: String
  },
  setup(__props) {
    const form = useForm({
      login: "",
      password: "",
      remember: false
    });
    const submit = () => {
      form.transform((data) => ({
        ...data,
        remember: form.remember ? "on" : ""
      })).post(useRoutes("login"), {
        onFinish: () => form.reset("password")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GuestLayout = _sfc_main$J;
      const _component_AuthenticationCard = _sfc_main$N;
      const _component_ValidationErrors = _sfc_main$O;
      const _component_Label = _sfc_main$1e;
      const _component_Input = _sfc_main$1f;
      const _component_Checkbox = _sfc_main$1h;
      const _component_Link = resolveComponent("Link");
      const _component_Button = _sfc_main$1j;
      _push(ssrRenderComponent(_component_GuestLayout, mergeProps({
        title: _ctx.__("Login")
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AuthenticationCard, { "max-width": "sm" }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ValidationErrors, { class: "mb-4" }, null, _parent3, _scopeId2));
                  if (__props.status) {
                    _push3(`<div class="mb-4 text-sm font-medium text-green-600"${_scopeId2}>${ssrInterpolate(__props.status)}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<form${_scopeId2}><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, {
                    for: "login",
                    value: _ctx.__("Username or Email Address"),
                    req: ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    id: "login",
                    type: "text",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).login,
                    "onUpdate:modelValue": ($event) => unref(form).login = $event,
                    autocomplete: "login",
                    required: "",
                    autofocus: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="mt-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, {
                    for: "password",
                    value: _ctx.__("Password"),
                    req: ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    id: "password",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    required: "",
                    autocomplete: "current-password"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="mt-4 block"${_scopeId2}><label class="flex items-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Checkbox, {
                    name: "remember",
                    checked: unref(form).remember,
                    "onUpdate:checked": ($event) => unref(form).remember = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="ml-2 text-sm text-gray-600 dark:text-gray-400"${_scopeId2}>${ssrInterpolate(_ctx.__("Remember me"))}</span></label></div><div class="mt-4 flex items-center justify-end"${_scopeId2}>`);
                  if (__props.canResetPassword) {
                    _push3(ssrRenderComponent(_component_Link, {
                      href: _ctx.route("password.request"),
                      class: "text-sm text-gray-600 underline hover:text-gray-900 dark:text-gray-400"
                    }, {
                      default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.__("Forgot your password?"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.__("Forgot your password?")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_Button, {
                    class: ["ml-4", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing
                  }, {
                    default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.__("Login"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.__("Login")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></form>`);
                } else {
                  return [
                    createVNode(_component_ValidationErrors, { class: "mb-4" }),
                    __props.status ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mb-4 text-sm font-medium text-green-600"
                    }, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
                    createVNode("form", {
                      onSubmit: withModifiers(submit, ["prevent"])
                    }, [
                      createVNode("div", null, [
                        createVNode(_component_Label, {
                          for: "login",
                          value: _ctx.__("Username or Email Address"),
                          req: ""
                        }, null, 8, ["value"]),
                        createVNode(_component_Input, {
                          id: "login",
                          type: "text",
                          class: "mt-1 block w-full",
                          modelValue: unref(form).login,
                          "onUpdate:modelValue": ($event) => unref(form).login = $event,
                          autocomplete: "login",
                          required: "",
                          autofocus: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "mt-4" }, [
                        createVNode(_component_Label, {
                          for: "password",
                          value: _ctx.__("Password"),
                          req: ""
                        }, null, 8, ["value"]),
                        createVNode(_component_Input, {
                          id: "password",
                          type: "password",
                          class: "mt-1 block w-full",
                          modelValue: unref(form).password,
                          "onUpdate:modelValue": ($event) => unref(form).password = $event,
                          required: "",
                          autocomplete: "current-password"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "mt-4 block" }, [
                        createVNode("label", { class: "flex items-center" }, [
                          createVNode(_component_Checkbox, {
                            name: "remember",
                            checked: unref(form).remember,
                            "onUpdate:checked": ($event) => unref(form).remember = $event
                          }, null, 8, ["checked", "onUpdate:checked"]),
                          createVNode("span", { class: "ml-2 text-sm text-gray-600 dark:text-gray-400" }, toDisplayString(_ctx.__("Remember me")), 1)
                        ])
                      ]),
                      createVNode("div", { class: "mt-4 flex items-center justify-end" }, [
                        __props.canResetPassword ? (openBlock(), createBlock(_component_Link, {
                          key: 0,
                          href: _ctx.route("password.request"),
                          class: "text-sm text-gray-600 underline hover:text-gray-900 dark:text-gray-400"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.__("Forgot your password?")), 1)
                          ]),
                          _: 1
                        }, 8, ["href"])) : createCommentVNode("", true),
                        createVNode(_component_Button, {
                          class: ["ml-4", { "opacity-25": unref(form).processing }],
                          disabled: unref(form).processing
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.__("Login")), 1)
                          ]),
                          _: 1
                        }, 8, ["class", "disabled"])
                      ])
                    ], 40, ["onSubmit"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_AuthenticationCard, { "max-width": "sm" }, {
                default: withCtx(() => [
                  createVNode(_component_ValidationErrors, { class: "mb-4" }),
                  __props.status ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "mb-4 text-sm font-medium text-green-600"
                  }, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
                  createVNode("form", {
                    onSubmit: withModifiers(submit, ["prevent"])
                  }, [
                    createVNode("div", null, [
                      createVNode(_component_Label, {
                        for: "login",
                        value: _ctx.__("Username or Email Address"),
                        req: ""
                      }, null, 8, ["value"]),
                      createVNode(_component_Input, {
                        id: "login",
                        type: "text",
                        class: "mt-1 block w-full",
                        modelValue: unref(form).login,
                        "onUpdate:modelValue": ($event) => unref(form).login = $event,
                        autocomplete: "login",
                        required: "",
                        autofocus: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "mt-4" }, [
                      createVNode(_component_Label, {
                        for: "password",
                        value: _ctx.__("Password"),
                        req: ""
                      }, null, 8, ["value"]),
                      createVNode(_component_Input, {
                        id: "password",
                        type: "password",
                        class: "mt-1 block w-full",
                        modelValue: unref(form).password,
                        "onUpdate:modelValue": ($event) => unref(form).password = $event,
                        required: "",
                        autocomplete: "current-password"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "mt-4 block" }, [
                      createVNode("label", { class: "flex items-center" }, [
                        createVNode(_component_Checkbox, {
                          name: "remember",
                          checked: unref(form).remember,
                          "onUpdate:checked": ($event) => unref(form).remember = $event
                        }, null, 8, ["checked", "onUpdate:checked"]),
                        createVNode("span", { class: "ml-2 text-sm text-gray-600 dark:text-gray-400" }, toDisplayString(_ctx.__("Remember me")), 1)
                      ])
                    ]),
                    createVNode("div", { class: "mt-4 flex items-center justify-end" }, [
                      __props.canResetPassword ? (openBlock(), createBlock(_component_Link, {
                        key: 0,
                        href: _ctx.route("password.request"),
                        class: "text-sm text-gray-600 underline hover:text-gray-900 dark:text-gray-400"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("Forgot your password?")), 1)
                        ]),
                        _: 1
                      }, 8, ["href"])) : createCommentVNode("", true),
                      createVNode(_component_Button, {
                        class: ["ml-4", { "opacity-25": unref(form).processing }],
                        disabled: unref(form).processing
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("Login")), 1)
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])
                    ])
                  ], 40, ["onSubmit"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Auth/Login.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$F
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$E = {
  __name: "Register",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      username: "",
      fname: "",
      lname: "",
      email: "",
      password: "",
      password_confirmation: "",
      terms: false
    });
    const submit = () => {
      form.post(useRoutes("register"), {
        onStart: () => form.clearErrors(),
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GuestLayout = _sfc_main$J;
      const _component_AuthenticationCard = _sfc_main$N;
      const _component_ValidationErrors = _sfc_main$O;
      const _component_Label = _sfc_main$1e;
      const _component_Input = _sfc_main$1f;
      const _component_Checkbox = _sfc_main$1h;
      const _component_Link = resolveComponent("Link");
      const _component_Button = _sfc_main$1j;
      _push(ssrRenderComponent(_component_GuestLayout, mergeProps({
        title: _ctx.__("Register")
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AuthenticationCard, { "max-width": "fit" }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ValidationErrors, { class: "mb-4" }, null, _parent3, _scopeId2));
                  _push3(`<form${_scopeId2}><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, {
                    for: "username",
                    value: _ctx.__("Username"),
                    req: ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    id: "username",
                    type: "text",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).username,
                    "onUpdate:modelValue": ($event) => unref(form).username = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "username"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="mt-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, {
                    for: "email",
                    value: _ctx.__("Email"),
                    req: ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    id: "email",
                    type: "email",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    required: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="mt-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, {
                    for: "password",
                    value: _ctx.__("Password"),
                    req: ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    id: "password",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    required: "",
                    autocomplete: "new-password"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="mt-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, {
                    for: "password_confirmation",
                    value: _ctx.__("Confirm Password"),
                    req: ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    id: "password_confirmation",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password_confirmation,
                    "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                    required: "",
                    autocomplete: "new-password"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (_ctx.$page.props.serenity.hasTermsAndPrivacyPolicyFeature) {
                    _push3(`<div class="mt-4"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Label, { for: "terms" }, {
                      default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex items-center"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_Checkbox, {
                            name: "terms",
                            id: "terms",
                            checked: unref(form).terms,
                            "onUpdate:checked": ($event) => unref(form).terms = $event
                          }, null, _parent4, _scopeId3));
                          _push4(`<div class="ml-2"${_scopeId3}> I agree to the `);
                          _push4(ssrRenderComponent(_component_Link, {
                            href: _ctx.route("terms.show"),
                            class: "text-sm text-gray-700 underline hover:text-gray-900 dark:text-gray-500"
                          }, {
                            default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(_ctx.__("Terms of Service"))}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(_ctx.__("Terms of Service")), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(` and `);
                          _push4(ssrRenderComponent(_component_Link, {
                            href: _ctx.route("policy.show"),
                            class: "text-sm text-gray-700 underline hover:text-gray-900 dark:text-gray-500"
                          }, {
                            default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(_ctx.__("Privacy Policy"))}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(_ctx.__("Privacy Policy")), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode(_component_Checkbox, {
                                name: "terms",
                                id: "terms",
                                checked: unref(form).terms,
                                "onUpdate:checked": ($event) => unref(form).terms = $event
                              }, null, 8, ["checked", "onUpdate:checked"]),
                              createVNode("div", { class: "ml-2" }, [
                                createTextVNode(" I agree to the "),
                                createVNode(_component_Link, {
                                  href: _ctx.route("terms.show"),
                                  class: "text-sm text-gray-700 underline hover:text-gray-900 dark:text-gray-500"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.__("Terms of Service")), 1)
                                  ]),
                                  _: 1
                                }, 8, ["href"]),
                                createTextVNode(" and "),
                                createVNode(_component_Link, {
                                  href: _ctx.route("policy.show"),
                                  class: "text-sm text-gray-700 underline hover:text-gray-900 dark:text-gray-500"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.__("Privacy Policy")), 1)
                                  ]),
                                  _: 1
                                }, 8, ["href"])
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="mt-4 flex items-center justify-end"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Link, {
                    href: _ctx.route("login"),
                    class: "text-sm text-gray-700 underline hover:text-gray-900 dark:text-gray-500"
                  }, {
                    default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.__("Already registered?"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.__("Already registered?")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Button, {
                    class: ["ml-4", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing
                  }, {
                    default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.__("Register"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.__("Register")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></form>`);
                } else {
                  return [
                    createVNode(_component_ValidationErrors, { class: "mb-4" }),
                    createVNode("form", {
                      onSubmit: withModifiers(submit, ["prevent"])
                    }, [
                      createVNode("div", null, [
                        createVNode(_component_Label, {
                          for: "username",
                          value: _ctx.__("Username"),
                          req: ""
                        }, null, 8, ["value"]),
                        createVNode(_component_Input, {
                          id: "username",
                          type: "text",
                          class: "mt-1 block w-full",
                          modelValue: unref(form).username,
                          "onUpdate:modelValue": ($event) => unref(form).username = $event,
                          required: "",
                          autofocus: "",
                          autocomplete: "username"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "mt-4" }, [
                        createVNode(_component_Label, {
                          for: "email",
                          value: _ctx.__("Email"),
                          req: ""
                        }, null, 8, ["value"]),
                        createVNode(_component_Input, {
                          id: "email",
                          type: "email",
                          class: "mt-1 block w-full",
                          modelValue: unref(form).email,
                          "onUpdate:modelValue": ($event) => unref(form).email = $event,
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "mt-4" }, [
                        createVNode(_component_Label, {
                          for: "password",
                          value: _ctx.__("Password"),
                          req: ""
                        }, null, 8, ["value"]),
                        createVNode(_component_Input, {
                          id: "password",
                          type: "password",
                          class: "mt-1 block w-full",
                          modelValue: unref(form).password,
                          "onUpdate:modelValue": ($event) => unref(form).password = $event,
                          required: "",
                          autocomplete: "new-password"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "mt-4" }, [
                        createVNode(_component_Label, {
                          for: "password_confirmation",
                          value: _ctx.__("Confirm Password"),
                          req: ""
                        }, null, 8, ["value"]),
                        createVNode(_component_Input, {
                          id: "password_confirmation",
                          type: "password",
                          class: "mt-1 block w-full",
                          modelValue: unref(form).password_confirmation,
                          "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                          required: "",
                          autocomplete: "new-password"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _ctx.$page.props.serenity.hasTermsAndPrivacyPolicyFeature ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "mt-4"
                      }, [
                        createVNode(_component_Label, { for: "terms" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode(_component_Checkbox, {
                                name: "terms",
                                id: "terms",
                                checked: unref(form).terms,
                                "onUpdate:checked": ($event) => unref(form).terms = $event
                              }, null, 8, ["checked", "onUpdate:checked"]),
                              createVNode("div", { class: "ml-2" }, [
                                createTextVNode(" I agree to the "),
                                createVNode(_component_Link, {
                                  href: _ctx.route("terms.show"),
                                  class: "text-sm text-gray-700 underline hover:text-gray-900 dark:text-gray-500"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.__("Terms of Service")), 1)
                                  ]),
                                  _: 1
                                }, 8, ["href"]),
                                createTextVNode(" and "),
                                createVNode(_component_Link, {
                                  href: _ctx.route("policy.show"),
                                  class: "text-sm text-gray-700 underline hover:text-gray-900 dark:text-gray-500"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.__("Privacy Policy")), 1)
                                  ]),
                                  _: 1
                                }, 8, ["href"])
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ])) : createCommentVNode("", true),
                      createVNode("div", { class: "mt-4 flex items-center justify-end" }, [
                        createVNode(_component_Link, {
                          href: _ctx.route("login"),
                          class: "text-sm text-gray-700 underline hover:text-gray-900 dark:text-gray-500"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.__("Already registered?")), 1)
                          ]),
                          _: 1
                        }, 8, ["href"]),
                        createVNode(_component_Button, {
                          class: ["ml-4", { "opacity-25": unref(form).processing }],
                          disabled: unref(form).processing
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.__("Register")), 1)
                          ]),
                          _: 1
                        }, 8, ["class", "disabled"])
                      ])
                    ], 40, ["onSubmit"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_AuthenticationCard, { "max-width": "fit" }, {
                default: withCtx(() => [
                  createVNode(_component_ValidationErrors, { class: "mb-4" }),
                  createVNode("form", {
                    onSubmit: withModifiers(submit, ["prevent"])
                  }, [
                    createVNode("div", null, [
                      createVNode(_component_Label, {
                        for: "username",
                        value: _ctx.__("Username"),
                        req: ""
                      }, null, 8, ["value"]),
                      createVNode(_component_Input, {
                        id: "username",
                        type: "text",
                        class: "mt-1 block w-full",
                        modelValue: unref(form).username,
                        "onUpdate:modelValue": ($event) => unref(form).username = $event,
                        required: "",
                        autofocus: "",
                        autocomplete: "username"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "mt-4" }, [
                      createVNode(_component_Label, {
                        for: "email",
                        value: _ctx.__("Email"),
                        req: ""
                      }, null, 8, ["value"]),
                      createVNode(_component_Input, {
                        id: "email",
                        type: "email",
                        class: "mt-1 block w-full",
                        modelValue: unref(form).email,
                        "onUpdate:modelValue": ($event) => unref(form).email = $event,
                        required: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "mt-4" }, [
                      createVNode(_component_Label, {
                        for: "password",
                        value: _ctx.__("Password"),
                        req: ""
                      }, null, 8, ["value"]),
                      createVNode(_component_Input, {
                        id: "password",
                        type: "password",
                        class: "mt-1 block w-full",
                        modelValue: unref(form).password,
                        "onUpdate:modelValue": ($event) => unref(form).password = $event,
                        required: "",
                        autocomplete: "new-password"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "mt-4" }, [
                      createVNode(_component_Label, {
                        for: "password_confirmation",
                        value: _ctx.__("Confirm Password"),
                        req: ""
                      }, null, 8, ["value"]),
                      createVNode(_component_Input, {
                        id: "password_confirmation",
                        type: "password",
                        class: "mt-1 block w-full",
                        modelValue: unref(form).password_confirmation,
                        "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                        required: "",
                        autocomplete: "new-password"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _ctx.$page.props.serenity.hasTermsAndPrivacyPolicyFeature ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mt-4"
                    }, [
                      createVNode(_component_Label, { for: "terms" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode(_component_Checkbox, {
                              name: "terms",
                              id: "terms",
                              checked: unref(form).terms,
                              "onUpdate:checked": ($event) => unref(form).terms = $event
                            }, null, 8, ["checked", "onUpdate:checked"]),
                            createVNode("div", { class: "ml-2" }, [
                              createTextVNode(" I agree to the "),
                              createVNode(_component_Link, {
                                href: _ctx.route("terms.show"),
                                class: "text-sm text-gray-700 underline hover:text-gray-900 dark:text-gray-500"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.__("Terms of Service")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              createTextVNode(" and "),
                              createVNode(_component_Link, {
                                href: _ctx.route("policy.show"),
                                class: "text-sm text-gray-700 underline hover:text-gray-900 dark:text-gray-500"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.__("Privacy Policy")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"])
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "mt-4 flex items-center justify-end" }, [
                      createVNode(_component_Link, {
                        href: _ctx.route("login"),
                        class: "text-sm text-gray-700 underline hover:text-gray-900 dark:text-gray-500"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("Already registered?")), 1)
                        ]),
                        _: 1
                      }, 8, ["href"]),
                      createVNode(_component_Button, {
                        class: ["ml-4", { "opacity-25": unref(form).processing }],
                        disabled: unref(form).processing
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("Register")), 1)
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])
                    ])
                  ], 40, ["onSubmit"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Auth/Register.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$E
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$D = {
  __name: "ResetPassword",
  __ssrInlineRender: true,
  props: {
    email: String,
    token: String
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      token: props.token,
      email: props.email,
      password: "",
      password_confirmation: ""
    });
    const submit = () => {
      form.post(useRoutes("password.update"), {
        onStart: () => form.clearErrors(),
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GuestLayout = _sfc_main$J;
      const _component_AuthenticationCard = _sfc_main$N;
      const _component_ValidationErrors = _sfc_main$O;
      const _component_Label = _sfc_main$1e;
      const _component_Input = _sfc_main$1f;
      const _component_Button = _sfc_main$1j;
      _push(ssrRenderComponent(_component_GuestLayout, mergeProps({
        title: _ctx.__("Reset Password")
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AuthenticationCard, { "max-width": "sm" }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ValidationErrors, { class: "mb-4" }, null, _parent3, _scopeId2));
                  _push3(`<form${_scopeId2}><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, {
                    for: "email",
                    value: _ctx.__("Email"),
                    req: ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    id: "email",
                    type: "email",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    required: "",
                    autofocus: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="mt-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, {
                    for: "password",
                    value: _ctx.__("Password"),
                    req: ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    id: "password",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    required: "",
                    autocomplete: "new-password"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="mt-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, {
                    for: "password_confirmation",
                    value: _ctx.__("Confirm Password"),
                    req: ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    id: "password_confirmation",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password_confirmation,
                    "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                    required: "",
                    autocomplete: "new-password"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="mt-4 flex items-center justify-end"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Button, {
                    class: { "opacity-25": unref(form).processing },
                    disabled: unref(form).processing
                  }, {
                    default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.__("Reset Password"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.__("Reset Password")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></form>`);
                } else {
                  return [
                    createVNode(_component_ValidationErrors, { class: "mb-4" }),
                    createVNode("form", {
                      onSubmit: withModifiers(submit, ["prevent"])
                    }, [
                      createVNode("div", null, [
                        createVNode(_component_Label, {
                          for: "email",
                          value: _ctx.__("Email"),
                          req: ""
                        }, null, 8, ["value"]),
                        createVNode(_component_Input, {
                          id: "email",
                          type: "email",
                          class: "mt-1 block w-full",
                          modelValue: unref(form).email,
                          "onUpdate:modelValue": ($event) => unref(form).email = $event,
                          required: "",
                          autofocus: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "mt-4" }, [
                        createVNode(_component_Label, {
                          for: "password",
                          value: _ctx.__("Password"),
                          req: ""
                        }, null, 8, ["value"]),
                        createVNode(_component_Input, {
                          id: "password",
                          type: "password",
                          class: "mt-1 block w-full",
                          modelValue: unref(form).password,
                          "onUpdate:modelValue": ($event) => unref(form).password = $event,
                          required: "",
                          autocomplete: "new-password"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "mt-4" }, [
                        createVNode(_component_Label, {
                          for: "password_confirmation",
                          value: _ctx.__("Confirm Password"),
                          req: ""
                        }, null, 8, ["value"]),
                        createVNode(_component_Input, {
                          id: "password_confirmation",
                          type: "password",
                          class: "mt-1 block w-full",
                          modelValue: unref(form).password_confirmation,
                          "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                          required: "",
                          autocomplete: "new-password"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "mt-4 flex items-center justify-end" }, [
                        createVNode(_component_Button, {
                          class: { "opacity-25": unref(form).processing },
                          disabled: unref(form).processing
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.__("Reset Password")), 1)
                          ]),
                          _: 1
                        }, 8, ["class", "disabled"])
                      ])
                    ], 40, ["onSubmit"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_AuthenticationCard, { "max-width": "sm" }, {
                default: withCtx(() => [
                  createVNode(_component_ValidationErrors, { class: "mb-4" }),
                  createVNode("form", {
                    onSubmit: withModifiers(submit, ["prevent"])
                  }, [
                    createVNode("div", null, [
                      createVNode(_component_Label, {
                        for: "email",
                        value: _ctx.__("Email"),
                        req: ""
                      }, null, 8, ["value"]),
                      createVNode(_component_Input, {
                        id: "email",
                        type: "email",
                        class: "mt-1 block w-full",
                        modelValue: unref(form).email,
                        "onUpdate:modelValue": ($event) => unref(form).email = $event,
                        required: "",
                        autofocus: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "mt-4" }, [
                      createVNode(_component_Label, {
                        for: "password",
                        value: _ctx.__("Password"),
                        req: ""
                      }, null, 8, ["value"]),
                      createVNode(_component_Input, {
                        id: "password",
                        type: "password",
                        class: "mt-1 block w-full",
                        modelValue: unref(form).password,
                        "onUpdate:modelValue": ($event) => unref(form).password = $event,
                        required: "",
                        autocomplete: "new-password"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "mt-4" }, [
                      createVNode(_component_Label, {
                        for: "password_confirmation",
                        value: _ctx.__("Confirm Password"),
                        req: ""
                      }, null, 8, ["value"]),
                      createVNode(_component_Input, {
                        id: "password_confirmation",
                        type: "password",
                        class: "mt-1 block w-full",
                        modelValue: unref(form).password_confirmation,
                        "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                        required: "",
                        autocomplete: "new-password"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "mt-4 flex items-center justify-end" }, [
                      createVNode(_component_Button, {
                        class: { "opacity-25": unref(form).processing },
                        disabled: unref(form).processing
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("Reset Password")), 1)
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])
                    ])
                  ], 40, ["onSubmit"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Auth/ResetPassword.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$D
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$C = {
  __name: "TwoFactorChallenge",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const recovery = ref(false);
    const recovery_code = ref();
    const code = ref();
    const form = useForm({
      code: "",
      recovery_code: ""
    });
    const toggleRecovery = () => {
      recovery.value ^= true;
      nextTick(() => {
        if (recovery.value) {
          recovery_code.value.input.focus();
          form.code = "";
        } else {
          code.value.input.focus();
          form.recovery_code = "";
        }
      });
    };
    const submit = () => {
      form.post(useRoutes("two-factor.login"));
    };
    __expose({ code, recovery_code });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GuestLayout = _sfc_main$J;
      const _component_AuthenticationCard = _sfc_main$N;
      const _component_ValidationErrors = _sfc_main$O;
      const _component_Label = _sfc_main$1e;
      const _component_Input = _sfc_main$1f;
      const _component_Button = _sfc_main$1j;
      _push(ssrRenderComponent(_component_GuestLayout, mergeProps({
        title: _ctx.__("Two-factor Confirmation")
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AuthenticationCard, { "max-width": "md" }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="mb-4 text-sm text-gray-600"${_scopeId2}>`);
                  if (!unref(recovery)) {
                    _push3(`<!--[-->${ssrInterpolate(_ctx.__(
                      "Please confirm access to your account by entering the authentication code provided by your authenticator application."
                    ))}<!--]-->`);
                  } else {
                    _push3(`<!--[-->${ssrInterpolate(_ctx.__("Please confirm access to your account by entering one of your emergency recovery codes."))}<!--]-->`);
                  }
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_ValidationErrors, { class: "mb-4" }, null, _parent3, _scopeId2));
                  _push3(`<form${_scopeId2}>`);
                  if (!unref(recovery)) {
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Label, {
                      for: "code",
                      value: _ctx.__("Code")
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_Input, {
                      ref_key: "code",
                      ref: code,
                      id: "code",
                      type: "text",
                      inputmode: "numeric",
                      class: "block w-full mt-1",
                      modelValue: unref(form).code,
                      "onUpdate:modelValue": ($event) => unref(form).code = $event,
                      autofocus: "",
                      autocomplete: "one-time-code"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Label, {
                      for: "recovery_code",
                      value: _ctx.__("Recovery Code")
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_Input, {
                      ref_key: "recovery_code",
                      ref: recovery_code,
                      id: "recovery_code",
                      type: "text",
                      class: "block w-full mt-1",
                      modelValue: unref(form).recovery_code,
                      "onUpdate:modelValue": ($event) => unref(form).recovery_code = $event,
                      autocomplete: "one-time-code"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  }
                  _push3(`<div class="flex items-center justify-end mt-4"${_scopeId2}><button type="button" class="text-sm text-gray-600 underline cursor-pointer hover:text-gray-900"${_scopeId2}>`);
                  if (!unref(recovery)) {
                    _push3(`<!--[-->${ssrInterpolate(_ctx.__("Use a recovery code"))}<!--]-->`);
                  } else {
                    _push3(`<!--[-->${ssrInterpolate(_ctx.__("Use an authentication code"))}<!--]-->`);
                  }
                  _push3(`</button>`);
                  _push3(ssrRenderComponent(_component_Button, {
                    class: ["ml-4", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing
                  }, {
                    default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.__("Login"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.__("Login")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></form>`);
                } else {
                  return [
                    createVNode("div", { class: "mb-4 text-sm text-gray-600" }, [
                      !unref(recovery) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        createTextVNode(toDisplayString(_ctx.__(
                          "Please confirm access to your account by entering the authentication code provided by your authenticator application."
                        )), 1)
                      ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                        createTextVNode(toDisplayString(_ctx.__("Please confirm access to your account by entering one of your emergency recovery codes.")), 1)
                      ], 64))
                    ]),
                    createVNode(_component_ValidationErrors, { class: "mb-4" }),
                    createVNode("form", {
                      onSubmit: withModifiers(submit, ["prevent"])
                    }, [
                      !unref(recovery) ? (openBlock(), createBlock("div", { key: 0 }, [
                        createVNode(_component_Label, {
                          for: "code",
                          value: _ctx.__("Code")
                        }, null, 8, ["value"]),
                        createVNode(_component_Input, {
                          ref_key: "code",
                          ref: code,
                          id: "code",
                          type: "text",
                          inputmode: "numeric",
                          class: "block w-full mt-1",
                          modelValue: unref(form).code,
                          "onUpdate:modelValue": ($event) => unref(form).code = $event,
                          autofocus: "",
                          autocomplete: "one-time-code"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])) : (openBlock(), createBlock("div", { key: 1 }, [
                        createVNode(_component_Label, {
                          for: "recovery_code",
                          value: _ctx.__("Recovery Code")
                        }, null, 8, ["value"]),
                        createVNode(_component_Input, {
                          ref_key: "recovery_code",
                          ref: recovery_code,
                          id: "recovery_code",
                          type: "text",
                          class: "block w-full mt-1",
                          modelValue: unref(form).recovery_code,
                          "onUpdate:modelValue": ($event) => unref(form).recovery_code = $event,
                          autocomplete: "one-time-code"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])),
                      createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                        createVNode("button", {
                          type: "button",
                          class: "text-sm text-gray-600 underline cursor-pointer hover:text-gray-900",
                          onClick: withModifiers(toggleRecovery, ["prevent"])
                        }, [
                          !unref(recovery) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            createTextVNode(toDisplayString(_ctx.__("Use a recovery code")), 1)
                          ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                            createTextVNode(toDisplayString(_ctx.__("Use an authentication code")), 1)
                          ], 64))
                        ], 8, ["onClick"]),
                        createVNode(_component_Button, {
                          class: ["ml-4", { "opacity-25": unref(form).processing }],
                          disabled: unref(form).processing
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.__("Login")), 1)
                          ]),
                          _: 1
                        }, 8, ["class", "disabled"])
                      ])
                    ], 40, ["onSubmit"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_AuthenticationCard, { "max-width": "md" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "mb-4 text-sm text-gray-600" }, [
                    !unref(recovery) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createTextVNode(toDisplayString(_ctx.__(
                        "Please confirm access to your account by entering the authentication code provided by your authenticator application."
                      )), 1)
                    ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                      createTextVNode(toDisplayString(_ctx.__("Please confirm access to your account by entering one of your emergency recovery codes.")), 1)
                    ], 64))
                  ]),
                  createVNode(_component_ValidationErrors, { class: "mb-4" }),
                  createVNode("form", {
                    onSubmit: withModifiers(submit, ["prevent"])
                  }, [
                    !unref(recovery) ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode(_component_Label, {
                        for: "code",
                        value: _ctx.__("Code")
                      }, null, 8, ["value"]),
                      createVNode(_component_Input, {
                        ref_key: "code",
                        ref: code,
                        id: "code",
                        type: "text",
                        inputmode: "numeric",
                        class: "block w-full mt-1",
                        modelValue: unref(form).code,
                        "onUpdate:modelValue": ($event) => unref(form).code = $event,
                        autofocus: "",
                        autocomplete: "one-time-code"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])) : (openBlock(), createBlock("div", { key: 1 }, [
                      createVNode(_component_Label, {
                        for: "recovery_code",
                        value: _ctx.__("Recovery Code")
                      }, null, 8, ["value"]),
                      createVNode(_component_Input, {
                        ref_key: "recovery_code",
                        ref: recovery_code,
                        id: "recovery_code",
                        type: "text",
                        class: "block w-full mt-1",
                        modelValue: unref(form).recovery_code,
                        "onUpdate:modelValue": ($event) => unref(form).recovery_code = $event,
                        autocomplete: "one-time-code"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])),
                    createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                      createVNode("button", {
                        type: "button",
                        class: "text-sm text-gray-600 underline cursor-pointer hover:text-gray-900",
                        onClick: withModifiers(toggleRecovery, ["prevent"])
                      }, [
                        !unref(recovery) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          createTextVNode(toDisplayString(_ctx.__("Use a recovery code")), 1)
                        ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                          createTextVNode(toDisplayString(_ctx.__("Use an authentication code")), 1)
                        ], 64))
                      ], 8, ["onClick"]),
                      createVNode(_component_Button, {
                        class: ["ml-4", { "opacity-25": unref(form).processing }],
                        disabled: unref(form).processing
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("Login")), 1)
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])
                    ])
                  ], 40, ["onSubmit"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Auth/TwoFactorChallenge.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$C
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$B = {
  __name: "VerifyEmail",
  __ssrInlineRender: true,
  props: { status: String },
  setup(__props) {
    const props = __props;
    const form = useForm();
    const submit = () => {
      form.post(useRoutes("verification.send"));
    };
    const verificationLinkSent = computed(() => {
      return props.status === "verification-link-sent";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GuestLayout = _sfc_main$J;
      const _component_AuthenticationCard = _sfc_main$N;
      const _component_Button = _sfc_main$1j;
      const _component_Link = resolveComponent("Link");
      _push(ssrRenderComponent(_component_GuestLayout, mergeProps({
        title: _ctx.__("Email Verification")
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AuthenticationCard, { "max-width": "md" }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="mb-4 text-sm text-gray-600"${_scopeId2}>${ssrInterpolate(_ctx.__(
                    "Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."
                  ))}</div>`);
                  if (unref(verificationLinkSent)) {
                    _push3(`<div class="mb-4 text-sm font-medium text-green-600"${_scopeId2}>${ssrInterpolate(_ctx.__("A new verification link has been sent to the email address you provided during registration."))}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<form${_scopeId2}><div class="mt-4 flex items-center justify-between"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Button, {
                    class: { "opacity-25": unref(form).processing },
                    disabled: unref(form).processing
                  }, {
                    default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.__("Resend Verification Email"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.__("Resend Verification Email")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Link, {
                    href: _ctx.route("logout"),
                    method: "post",
                    as: "button",
                    class: "text-sm text-gray-600 underline hover:text-gray-900"
                  }, {
                    default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.__("Log Out"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.__("Log Out")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></form>`);
                } else {
                  return [
                    createVNode("div", { class: "mb-4 text-sm text-gray-600" }, toDisplayString(_ctx.__(
                      "Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."
                    )), 1),
                    unref(verificationLinkSent) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mb-4 text-sm font-medium text-green-600"
                    }, toDisplayString(_ctx.__("A new verification link has been sent to the email address you provided during registration.")), 1)) : createCommentVNode("", true),
                    createVNode("form", {
                      onSubmit: withModifiers(submit, ["prevent"])
                    }, [
                      createVNode("div", { class: "mt-4 flex items-center justify-between" }, [
                        createVNode(_component_Button, {
                          class: { "opacity-25": unref(form).processing },
                          disabled: unref(form).processing
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.__("Resend Verification Email")), 1)
                          ]),
                          _: 1
                        }, 8, ["class", "disabled"]),
                        createVNode(_component_Link, {
                          href: _ctx.route("logout"),
                          method: "post",
                          as: "button",
                          class: "text-sm text-gray-600 underline hover:text-gray-900"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.__("Log Out")), 1)
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ])
                    ], 40, ["onSubmit"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_AuthenticationCard, { "max-width": "md" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "mb-4 text-sm text-gray-600" }, toDisplayString(_ctx.__(
                    "Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."
                  )), 1),
                  unref(verificationLinkSent) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "mb-4 text-sm font-medium text-green-600"
                  }, toDisplayString(_ctx.__("A new verification link has been sent to the email address you provided during registration.")), 1)) : createCommentVNode("", true),
                  createVNode("form", {
                    onSubmit: withModifiers(submit, ["prevent"])
                  }, [
                    createVNode("div", { class: "mt-4 flex items-center justify-between" }, [
                      createVNode(_component_Button, {
                        class: { "opacity-25": unref(form).processing },
                        disabled: unref(form).processing
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("Resend Verification Email")), 1)
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"]),
                      createVNode(_component_Link, {
                        href: _ctx.route("logout"),
                        method: "post",
                        as: "button",
                        class: "text-sm text-gray-600 underline hover:text-gray-900"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.__("Log Out")), 1)
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ])
                  ], 40, ["onSubmit"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Auth/VerifyEmail.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$B
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$8 = /* @__PURE__ */ createElementVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75Zm12 1.5c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25Zm-10.5 7.5c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"
}, null, -1);
const _hoisted_3$8 = [
  _hoisted_2$8
];
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$8, _hoisted_3$8);
}
const __unplugin_components_6 = { name: "heroicons-outline-rectangle-group", render: render$8 };
const _hoisted_1$7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$7 = /* @__PURE__ */ createElementVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  d: "M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
}, null, -1);
const _hoisted_3$7 = [
  _hoisted_2$7
];
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_3$7);
}
const __unplugin_components_5 = { name: "heroicons-outline-arrows-right-left", render: render$7 };
const _hoisted_1$6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$6 = /* @__PURE__ */ createElementVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "m13 5l7 7l-7 7M5 5l7 7l-7 7"
}, null, -1);
const _hoisted_3$6 = [
  _hoisted_2$6
];
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_3$6);
}
const __unplugin_components_4 = { name: "heroicons-outline-chevron-double-right", render: render$6 };
const _hoisted_1$5 = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$5 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  "fill-rule": "evenodd",
  d: "M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414Z",
  "clip-rule": "evenodd"
}, null, -1);
const _hoisted_3$5 = [
  _hoisted_2$5
];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_3$5);
}
const __unplugin_components_3 = { name: "heroicons-solid-arrow-right", render: render$5 };
const _hoisted_1$4 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$4 = /* @__PURE__ */ createElementVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
}, null, -1);
const _hoisted_3$4 = [
  _hoisted_2$4
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_3$4);
}
const __unplugin_components_2$2 = { name: "heroicons-outline-book-open", render: render$4 };
const _sfc_main$A = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor"
  }, _ctx.$attrs, {
    "xml:space": "preserve",
    "fill-rule": "evenodd",
    "stroke-linejoin": "round",
    "stroke-miterlimit": "2",
    "clip-rule": "evenodd",
    viewBox: "0 0 499 221"
  }, _attrs))}><g fill-rule="nonzero"><path d="M278.1 21.4v-1.7l-.3-.9V18c-.6-2.3-1.6-4.6-2.8-6.6A26.8 26.8 0 0 0 251.6 0a56.7 56.7 0 0 0-18.2 4.2c-2 .7-3.7 1.5-5.6 2.3L225 7.8l-2.7 1.5-.7.3-.6.4-1.4.7-2.6 1.6a115.7 115.7 0 0 0-18.8 15.2A88.2 88.2 0 0 0 184 47.1a43.7 43.7 0 0 0-4.8 18.2 28.3 28.3 0 0 0 3 12.5 27.3 27.3 0 0 0 8.6 9.5 57.4 57.4 0 0 0 9.5 5.1l1.4.6 2.9 1.1 1.4.5.7.2.7.3c7.5 2.6 15 4.4 22.3 7.1l2.7 1 1.3.6 1.3.6a36.5 36.5 0 0 1 9.4 5.8c1.4 1.2 2.6 2.5 3.7 4a19.2 19.2 0 0 1 3.7 10 31 31 0 0 1-.9 10.8 48.9 48.9 0 0 1-3 8l-.6 1.2-.3.7-.4.6a50 50 0 0 1-10.4 13.6 33.1 33.1 0 0 1-9 6.6c-1 .4-1.7.8-2.6 1a12.4 12.4 0 0 1-5.3 1.1c-1 .2-1.8 0-2.7 0l-1.3-.2-.6-.1-.7-.2-2.4-1a11.2 11.2 0 0 1-3.9-3.5c-.5-.7-1-1.5-1.3-2.3l-.2-.7-.2-.3-.1-.3-.2-.6-.1-.7-.5-2.7v-2.7c0-.5 0-1 .2-1.4a19.8 19.8 0 0 1 1-4c1.2-3.7 3.2-7 5.5-10 .4-.5.3-1.2-.2-1.6-.4-.4-1.1-.3-1.5.2l-1.8 2.4-1.6 2.6a25.6 25.6 0 0 0-3.6 8.5l-.3 1.5-.2 1.6v3c0 1 .2 2.2.4 3.2l.2.8.2.7s0 .3.2.4v.4l.4.7a15.1 15.1 0 0 0 3.6 5.3l2.6 1.9a38.9 38.9 0 0 0 3.7 1.5l.8.2 1.6.3c1 0 2 .2 3.2 0a16.3 16.3 0 0 0 6-1.1l3-1.2a44.2 44.2 0 0 0 14.1-11.3c2.7-3 5-6.3 7-9.9l.4-.7.4-.6.3-.7.4-.7 1.3-2.7a56.7 56.7 0 0 0 3.2-11.9 32.1 32.1 0 0 0-1.3-12.4c-.7-2-1.7-3.9-3-5.7a31.4 31.4 0 0 0-9.2-8.4l-5.3-2.9-1.4-.6-1.4-.6-2.8-1.2c-7.4-2.9-15-4.9-22.3-7.5l-.6-.2-.7-.3-1.4-.5-2.6-1-1.3-.6-1.3-.6-2.6-1.3a31.2 31.2 0 0 1-8.7-6.4 17.1 17.1 0 0 1-2.9-4.3 23 23 0 0 1-2.3-10.1 33 33 0 0 1 4.4-15.6 91.6 91.6 0 0 1 41.6-37.1c1.8-.9 3.6-1.6 5.3-2.3l5.4-1.7c3.5-1 7-1.7 10.6-1.7a22.4 22.4 0 0 1 14.1 4.7c1.2 1 2.2 2.2 3 3.6.8 1.3 1.4 2.7 1.7 4.2l.1.3v.3l.1.6.1 1.1v2.4c-.5 3.2-1.7 6.5-3.6 9.3l-.7 1.1-.8 1-1.7 2a54.6 54.6 0 0 1-3.4 3.5c-.3-.4-.7-.7-1.3-1a4 4 0 0 0-5.2 2l-.7 1.6-.6 1.9-.2 1.4V48c.1.5.3 1.2.8 2 .3.4.7.8 1.2 1 .2.3.4.4.6.5l.7.2h.6c.2.2.3.2.5.2h.4l.4-.1.6-.1h.2l.3-.1.3-.1.4-.2 1-.5.8-.5 1.5-1.1 2.4-2.1c1.6-1.4 3-3 4.4-4.5l2-2.4 1-1.3 1-1.4a27.7 27.7 0 0 0 4.3-12.7l.1-.9v-2.6Zm-21.7 22.9.1-.1h-.1Z"></path><path d="M295.5 92.1c-.3-.2-.8 0-.9.3a31.9 31.9 0 0 1-4.7 6.3l-2.8 2.8-3 2.4c-1 .8-2.2 1.4-3.3 2a9 9 0 0 1-3.4 1.1l-.2.1H274l-1.7-.5-1.4-.7a7.5 7.5 0 0 1-3.3-3.6l-.6-1.5c-.4-1.5-.5-3.1-.3-4.7.3.2.7.4 1.1.4.5.1 1 0 1.4-.1l.3-.1.3-.1.7-.4 1-1 .4-1.3c.2-.4.2-.9.2-1.4 0-.4 0-1-.3-1.5 0-.3-.3-.5-.5-.8l-.7-.6a4 4 0 0 0-1.7-.5c-.6-.1-1 0-1.6.1l-.8.3-.4.2-.3.2-1 1a9 9 0 0 0-1.4 2.3 14 14 0 0 0-1 4.5l.1 2.4.1.6.1.6.3 1.1a14.7 14.7 0 0 0 2.3 4.2c1.1 1.2 2.3 2.3 3.7 3l2.3 1c.7.1 1.5.3 2.3.3l2.3.1h1.1c.2-.2.3-.2.5-.2h.6c1.6-.5 3-1 4.2-1.8 1.3-.7 2.4-1.6 3.5-2.5a36.6 36.6 0 0 0 8.2-9.4l2-3.7c.1-.3 0-.7-.4-.9Zm-27.9.7.3-.4.1-.1v-.1l.2-.1.4-.1h.3l.1.1.3.4v1.3c0 .2 0 .4-.3.6l-.2.2-.2.1-.7.1a.8.8 0 0 1-.4-.2l-.5-.7.6-1.1Z"></path><path d="M321.9 93.3c-.1-.3-.4-.5-.8-.4-.6.1-1.3.1-2-.1l-2.2-.8-4.6-2c-.5-.1-.9-.3-1.4-.3l-1.2-.2H307l-1.4.5-1.3.7a25.8 25.8 0 0 0-6.1 9.6l.3-4.9 1-8.3.2-2 .3-2.1.4-2.2.3-.5.4-.8v-1.3c0-.1 0-.3-.2-.5 0-.2 0-.4-.2-.6 0-.2-.3-.3-.4-.5l-.4-.4-.4-.3-1.2-.5c-1.5-.3-2.9.7-3.4 2.2-.4 1.6-.6 3.2-.7 4.7l-.2 2.2v2c-.3 3-.4 5.8-.5 8.7l.1 8.6.2 2.2.1 2.2c.2 1.5.5 3.1 1.2 4.7v.1c.1.3.3.6.6.8a2 2 0 0 0 2.7-.4c.4-.6.7-1.2.8-1.8l.3-1.5.2-1.2.2-1.2a40.5 40.5 0 0 1 2.3-9.3l.5-1 .3-.6.2-.5.6-1 .6-1c1-1.2 2-2.2 3.1-2.5a7 7 0 0 1 2.1-.1l1.2.1 1 .1c1.5.4 3 1.1 4.6 1.7l2.5.7a5 5 0 0 0 2.7-.2c.3-.1.5-.4.4-.8Zm35.8-1.2c-.3-.2-.8 0-1 .3a31.9 31.9 0 0 1-4.6 6.3l-2.8 2.8c-1 .8-2 1.7-3.1 2.4-1 .8-2.1 1.4-3.2 2a9 9 0 0 1-3.4 1.1l-.2.1h-1.7c-.5.1-1.1 0-1.6 0l-1.7-.5-1.4-.7a7.5 7.5 0 0 1-3.3-3.6l-.6-1.5c-.4-1.5-.5-3.1-.3-4.7.3.2.7.4 1 .4.6.1 1 0 1.5-.1l.3-.1.3-.1.7-.4.9-1 .5-1.3c.2-.4.2-.9.2-1.4l-.3-1.5-.5-.8-.7-.6a4 4 0 0 0-1.7-.5c-.6-.1-1.1 0-1.6.1l-.8.3-.4.2-.3.2-1.1 1a9 9 0 0 0-1.3 2.3 14 14 0 0 0-1 4.5v2.4l.2.6v.6l.4 1.1a14.7 14.7 0 0 0 2.3 4.2 12 12 0 0 0 3.7 3l2.3 1c.7.1 1.5.3 2.3.3l2.3.1h1l.6-.2h.6c1.6-.5 2.9-1 4.2-1.8 1.3-.7 2.4-1.6 3.5-2.5a36.6 36.6 0 0 0 10-13.1c.3-.3 0-.7-.2-.9Zm-28 .7.4-.4v-.2l.3-.1.4-.1h.3v.1l.4.4v1.3l-.3.6-.2.2-.2.1-.7.1a.8.8 0 0 1-.4-.2l-.5-.7.6-1.1Z"></path><path d="M405.3 92.4a1 1 0 0 0-1.3.4l-1.5 2.3-1.5 2.2a47.9 47.9 0 0 1-7.2 7.8 7 7 0 0 1-4.4 1.5c-1.5 0-2.8-1-4-2.2a35.2 35.2 0 0 1-3-4.2l-3-4.7a13 13 0 0 0-1.9-2.3 9.2 9.2 0 0 0-2.6-2.1c-.5-.2-1-.5-1.7-.5l-1.8-.1c-1.2.2-2.3.7-3.2 1.3-1 .7-1.7 1.4-2.4 2.2l-1.8 2.4-3 4.7-.3.5v-1.2a47.1 47.1 0 0 1 1-10.5v-.3h.2l.5-.7.2-.5.4-.8.4-1.7.2-1-.1-1.1-.2-.8-.6-1a3 3 0 0 0-1.2-1c-.5-.2-1.1-.4-1.6-.4h-.2a3.1 3.1 0 0 0-3 2.6l-.2 1.4-.2 1.5-.4 2.9a56.4 56.4 0 0 0-.1 11.6c0 1 0 2 .3 3v1.1l.2.5c0 .4.2.8.5 1.2 0 .2.3.5.5.7l.8.7 1 .4h1.3a3.5 3.5 0 0 0 2.2-1.7l.5-.6 1.5-2.6 2.6-4.8c.8-1.5 1.8-2.9 3-3.8.5-.4 1.1-.7 1.7-.8l.9-.1.8.3c.6.2 1.2.7 1.7 1.2l1.7 2 3.1 4.4a26 26 0 0 0 3.7 4.5c.7.7 1.5 1.3 2.4 1.8 1 .5 2 .8 3.1 1 1.1 0 2.1-.3 3.1-.7a19 19 0 0 0 6.7-5.4c2.5-2.8 4.5-6 6.5-9.1.3-.5.2-1.1-.3-1.4Zm-46.2 11.4s0 .1 0 0Z"></path><path d="M411.4 109.2c-.2-.4-.5-.6-.9-.5-.3.1-.6.2-.8.1-.2 0-.4 0-.6-.3-.4-.3-.7-.9-.9-1.5-.5-1.3-.8-2.7-.9-4.2-.2-1.4-.2-2.9-.2-4.3v-3.4l.1-1v-.3a2 2 0 0 0-2-1.8c-1.2.1-2 1-1.9 2v.1l.1 1.1.1 1.2.3 2.3 1 4.6c.1.8.3 1.5.6 2.3l1 2.2.7 1.1 1 1c.5.2 1 .4 1.5.4s1 0 1.4-.3c.3-.2.5-.5.4-.8ZM404.8 88c.2.3.4.7.7.9.4.2.8.3 1.2.1.4-.1.7-.3 1-.7.1-.2.2-.5.1-.8l.2-.6c0-.4-.2-.8-.5-1.1-.3-.2-.7-.4-1-.4-.5 0-.9 0-1.2.4 0 .2-.2.3-.3.5l-.2.5v1.1Z"></path><path d="M477.2 40.5a767.4 767.4 0 0 0-53-4h-1c.2-4 .5-8 1-12l.4-7 .5-.7v-.4s0-.2.2-.3v-.5l.2-1 .2-2v-3l-.1-.8-.1-.5h-.1l-.1-.3-.4-.5-.4-.3c-.9-.3-1.8 0-2.2.8v.3a55.6 55.6 0 0 0-3.5 15.7l-.9 12.2a347.2 347.2 0 0 0-33.8.7l-6.6.9h-.5l-.4.2c-.3 0-.6 0-.9.2A7 7 0 0 0 372 40c-.1 0-.2 0-.2.2l-.3.3-.3.5-.3.6-.2.7h-.1a2 2 0 0 0 1.4 2.3c1 .2 2-.4 2.3-1.4v-.1c0-.2.1-.3.3-.5l.8-.6 1.3-.4.7-.2h.3l.4-.1 6.5-1 13.1-1h20.1v.4l-.8 15.7c-.3 5.2-.4 10.5-.6 15.7l-.2 7.9c0 2.6 0 5.2-.2 7.8v15.9c.1 5.1.4 10.4 1.2 15.7.5 2.7 1.1 5.3 2.1 8 .5 1.2 1.1 2.5 2 3.6.7 1.2 1.6 2.3 2.8 3.3.4.4 1 .3 1.6 0 .4-.6.4-1.3 0-1.7h-.1a22 22 0 0 1-2.2-2.9c-.6-1-1-2.2-1.4-3.4a65 65 0 0 1-2-15 99 99 0 0 1 0-7.7l.5-15.7.3-7.8.4-7.8.8-15.6 1-15.6v-.7h1.2a756.1 756.1 0 0 1 52.8 3.2c.7 0 1.2-.3 1.3-1 .1-.6-.4-1.1-1-1.2Z"></path><path d="M498 92.3a1 1 0 0 0-1.4-.1l-14.9 13.6-1.2-3.8-.6-1.4-.2-.7-.3-.7-.6-1.3-.7-1.4c-1-1.7-2.2-3.5-3.8-4.9-.8-.8-1.8-1.4-2.8-1.9l-1.6-.5a9.3 9.3 0 0 0-5 0l-3 1.1a39.5 39.5 0 0 0-9 7.4 57.6 57.6 0 0 1-8.5 7l-2.3 1.5-1.1.7-1.1.6c-.7.3-1.4.5-2 .5h-.6a1 1 0 0 1-.7-.4c-.4-.2-.7-.7-1.1-1.3a10.2 10.2 0 0 1-1-3.2l-.1-.6v-.3l-.1-.3-.1-2.6a40 40 0 0 1 0-4.9l.5-.5.2-.6c0-.1 0-.3.2-.4v-.8c.2-.4.3-.9.3-1.4v-1.5l-.1-.9-.3-.8-.3-.3-.2-.2-.3-.2-.8-.2h-.6c-.4.3-.8.6-1 1v.2l-.6 1.4-.5 1.4-.7 2.9c-.3 1.9-.5 3.9-.5 6v1.4c0 .5 0 1 .2 1.5v.7c0 .3 0 .6.2.8 0 .6.2 1.1.4 1.6.3 1.1.7 2.1 1.4 3.1l1 1.5c.5.5 1 1 1.7 1.2.6.4 1.2.6 1.9.8h2c.7 0 1.4-.2 1.9-.4l1.5-.8 1.3-.9 1.2-.8 2.2-1.8c3-2.4 5.8-5 8.5-7.7a137 137 0 0 1 4-3.7l2.2-1.6 2.2-1.3a8.4 8.4 0 0 1 5.7-.6l1 .4c.6.4 1.2.8 1.8 1.4 1 1.1 1.9 2.5 2.7 4.1l.5 1.2.5 1.2.2.6.2.7.4 1.2a72 72 0 0 1 1.5 6.3l-1.8 1.7-2 2-2 2.1c-2.4 2.8-5 5.6-7.3 8.5l-7 9-3.2 4.6-3.1 4.8c-4 6.3-7.6 13-10.8 20a126.5 126.5 0 0 0-9.8 32.7 50 50 0 0 0-.3 11.6l.2 1.5.3 1.5c.2 1 .4 2 .8 3s.8 2 1.4 3a11 11 0 0 0 5.5 4.4 11 11 0 0 0 6.9-.5 22 22 0 0 0 5.4-3.1l2.3-1.9a70.7 70.7 0 0 0 16.6-23.5 122.2 122.2 0 0 0 11.2-32.2 140.5 140.5 0 0 0 3-34l-.4-5.8-.1-1.5-.1-1.4-.4-2.8-.7-4.4c5-5.2 10.3-10.2 15.5-15.4a1 1 0 0 0 0-1.2Zm-18.8 43.6a134.2 134.2 0 0 1-18.8 62.7 61 61 0 0 1-6.4 8.7l-3.7 3.8-2.1 1.7c-.6.6-1.3 1-2 1.5-1.4.8-3 1.5-4.3 1.6a5 5 0 0 1-3.6-1 7 7 0 0 1-2.4-3.8l-.7-2.3-.2-1.3-.2-1.3c-.4-3.5-.3-7.1.2-10.7a132 132 0 0 1 9.1-31.7 166.6 166.6 0 0 1 23-37.8 193 193 0 0 1 7.3-8.6l3.9-4.3.1.8.5 5.5a94.8 94.8 0 0 1 .3 16.5Zm3.1-67.7v-8.3h-3v-1.7h8V60h-3v8.3h-2Zm6.2 0v-10h3l1.8 6.8 1.8-6.8h3v10h-1.8v-7.8l-2 7.8h-2l-1.9-7.8v7.8h-1.9Z"></path></g><path fill="url(#a)" fill-rule="nonzero" d="M328.6 641.9c-2.4-.8-4.6-1.9-7-2.8l-7-3-7.2-3.5-3.6-1.8-3.6-2a11375.7 11375.7 0 0 0-10.7-6.6 1196.4 1196.4 0 0 1-7.1-5l-3.5-2.6-6.9-5.8c-9-8-17.7-17-25.3-27.2a227.6 227.6 0 0 1-20.7-33.2 380 380 0 0 1-27.5-77c-3.5-13.4-6.6-27-9.7-40.6-1.6-6.8-3.1-13.6-4.8-20.3l-2-7.9c-.8-3.5-1.7-7-2.7-10.4l-3.1-10.6-3.6-11-9.4-29 24.6 8c8.3 2.7 16.4 5.5 24.2 7.8 4 1 7.8 2.2 11.7 3.1l8.7 2.2 11.3 2.8c15.1 3.6 30.3 7 45.2 11 15 3.8 29.6 8 43.6 13 7 2.5 14 5.2 20.6 8.1l5.6 2.5 8.3 3.9a383 383 0 0 1 8 3.9l4 2 2 1c.6.3 1.4.5 1.8 1-1.7 7.3-3.6 14.7-5 21.5l-1.4 7.2a203.4 203.4 0 0 0-.8 68 246.7 246.7 0 0 0 20.2 65c8 17.5 15.7 30.9 21 39.9l3.7 6 2.7 4.2 2.2 3.5-2.8-3-3.5-3.7-4.7-5.2a288.7 288.7 0 0 1-44.4-65.4c-5.2-11-10.2-23.2-14.2-36.9a196 196 0 0 1-7.2-76.2l.3-3.2v-4.5c-.2-.2-.7-.2-1-.3l-1.2-.3-1-.2h-.3l-.3-.2-1.1-.4-2.3-.8c-6.2-2.1-12.6-4.1-19.2-6a613 613 0 0 0-41.6-9.8c-14.6-3-29.7-5.8-45.4-9l-11.8-2.6-3-.7c.1 0 0 0 0 0v.4l.6 2.5a916 916 0 0 1 4.6 21c2.8 14 5.5 27.4 8.3 40.4 5.6 26 12.2 50 21.2 71.7a186.7 186.7 0 0 0 34.8 55.2c14 14.8 30 26.1 46.2 34.4a263 263 0 0 0 45.9 18.4 352.4 352.4 0 0 0 50.7 11.6c4 .6 7.5 1 10.2 1.5l8.5 1-8.6.6-10.3.4h-14.2c-10.7-.2-23.8-1-39-3.2s-32.4-5.9-51-12.7Zm58.8-196.3a185.5 185.5 0 0 1 6-34.5 385.7 385.7 0 0 1 25.3-68 447.4 447.4 0 0 1 18.1-33.8c1.6-2.8 3.4-5.6 5.2-8.3l5.2-8.3a1469.9 1469.9 0 0 0 16.1-25.4l4-6.5 5.7-10c3.7-6.6 7.3-13.8 10.9-20.8l10.6-20.6 11.6 23.1c3.9 7.8 7.6 15.2 11.5 22.2l3 5.2 2.8 4.8 3 5 5.9 10c8 13.4 16 26.5 23.6 39.5a504 504 0 0 1 20.4 38.8 316 316 0 0 1 8.2 19.2l2 4.9a7830.3 7830.3 0 0 1 5.3 14.9l1.2 3.6.6 1.8.4.9c0 .3.2.6.1.8l-12.2 7.3c-2 1.3-3.9 2.4-5.7 3.7l-3.6 2.2a222.4 222.4 0 0 0-34 27.4 215.8 215.8 0 0 0-28.8 36.4 270.8 270.8 0 0 0-18.2 33.4l-1.2 2.5.7-2.7c.4-1.7 1-4.3 2-7.7 2-6.7 5-16.7 10.3-29a203 203 0 0 1 44.8-65.2c3.9-3.8 8-7.6 12.5-11.2l3.2-2.6 1.1-1.1 2.2-2c.1 0 0 0 0-.2v-.2l-.3-.4-.5-.8a33 33 0 0 0-1.7-2.9l-2-4c-3-5.6-6-11.3-9.4-17a622.5 622.5 0 0 0-22.3-35.3c-8.1-12.1-16.9-24.6-25.7-37.8l-6.6-10-3.3-5.2-.2-.3-.2-.1c-.2-.2-.4-.1-.4 0v.4l-.1.2-.4.7-1.5 2.5a612.8 612.8 0 0 1-16.9 26.4 7969 7969 0 0 0-5 7.7l-5 7.7a538.5 538.5 0 0 0-17.7 31 437.5 437.5 0 0 0-27 61.4 196.4 196.4 0 0 0-7.4 29.3 167.1 167.1 0 0 0-2 21.4l-.1 7 .3 6.7.2 3.4c0 1.1.1 2.3.3 3.4l1 6.6c0 1 .2 2.2.4 3.2l.6 3.2 1.3 6.4c.4 2.1 1 4.1 1.5 6.2l1.6 6 2 5.9c5 15.4 11.2 29 17.3 40.7a359 359 0 0 0 24.3 39.7l5.3 7.5 4.5 6.1-5.6-5.1-6.7-6.4a302.9 302.9 0 0 1-31-36 241 241 0 0 1-24-40.2l-3-6-2.5-6.4-2.5-6.5-2.2-6.9-1.1-3.5-1-3.6-1.8-7.3a3707.3 3707.3 0 0 1-1.4-7.6c-.4-2.7-1-5.2-1.2-7.9l-.7-8a177.4 177.4 0 0 1 0-25Zm310.3-69c13.3-3.4 26.8-6.4 40.2-9.5 6.7-1.5 13.4-3 20-4.7l8.5-2.1 10.3-2.8c3.5-1 7-2 10.5-3.2l10.9-3.5 27.4-9-7.8 24.1c-2.7 8-5.4 16-7.6 23.7l-3.2 11.4-2.2 9-2.7 11c-3.6 14.8-7 29.6-10.7 44.2a527.3 527.3 0 0 1-12.6 42.7A344 344 0 0 1 771 528l-2.5 5.8-3.7 8.1a436 436 0 0 1-3.8 8c-1.2 2.6-2.4 5.3-3.7 7.7-7.4-1.8-14.8-3.7-21.7-5.1a10364.7 10364.7 0 0 1-12.8-2.5 196 196 0 0 0-62.4-.4 246 246 0 0 0-65.3 19.5c-17.6 7.9-31 15.4-40.1 20.8l-6 3.5-4.3 2.7-3.5 2.2 3-2.8 3.7-3.5 5.3-4.6a293 293 0 0 1 65.9-43.7 251 251 0 0 1 37-14 202.2 202.2 0 0 1 79.4-6.1h1l.5.1h2.7c.2-.2.3-.8.4-1l.2-1.2.2-1v-.3l.4-1 .8-2.3c2-6.2 4-12.4 5.7-19 3.5-12.9 6.6-26.5 9.5-40.7 3-14.3 5.7-29 8.9-44.4l2.5-11.6.6-2.4-.1-.1h-.7l-1.3.4-20.9 4.6c-13.7 2.8-27 5.4-39.8 8.2a421.4 421.4 0 0 0-71.2 20.6 193.8 193.8 0 0 0-55.4 33.6 173.4 173.4 0 0 0-34.9 45 262.6 262.6 0 0 0-19 45 346.2 346.2 0 0 0-12 50l-1.6 10.1-1.2 8.4-.5-8.5-.2-10.2v-6.6c0-2.3 0-4.8.2-7.4a300 300 0 0 1 3.7-38.5c2.4-15 6.3-32 13.4-50.3a182.6 182.6 0 0 1 33.8-55.4 204 204 0 0 1 60.4-44.3c23.5-11.8 49.5-20 76.1-26.9Zm-348 305a231.9 231.9 0 0 1-83.5-35.2 200.1 200.1 0 0 1-40.8-37.3l-2.7-3.2a2136.5 2136.5 0 0 0-5.1-6.3l-.2-.2-.3.2-.6.3-1.2.6a65.1 65.1 0 0 0-6.7 3.5c-5.7 2.9-11.4 6-17 9.3a570 570 0 0 0-35.2 22.4c-12 8.2-24.4 17-37.6 26a9462 9462 0 0 1-5 3.5l-2.5 1.7-1.2.8-.3.3a1275 1275 0 0 0-6.2 4.9c2.9 1 5.2 2 7.1 2.8l.7.3 3.6 2.1 7.6 4.5 15.2 9.2a726.5 726.5 0 0 0 61.6 34.9c10.6 5 21.5 9.6 32.5 13.3l8.3 2.6 8.4 2.3 8.4 1.8 4.2.7 4.3.7a150.6 150.6 0 0 0 68.2-6 247 247 0 0 0 54.6-26.3c17.5-11 34.4-23.3 51.3-35.8l12.7-9.4 12.9-9.3c4.2-3.1 8.6-6.1 12.9-9.1l13-8.8c17.3-11.5 35-22.1 52.8-31.5 17.9-9.3 36-17.4 54.2-23.8a309.3 309.3 0 0 1 54.5-14 267.7 267.7 0 0 1 100.5 3.1c30 6.8 55.3 18.5 75.8 30.5 10.3 6 19.5 12 27.8 17.8l4.4 3.1a385.2 385.2 0 1 0-741.4-4.2c7.3-4.3 14.6-8.6 21.8-12.6 13-7.4 26-14.3 38.7-20.2a343 343 0 0 1 19.1-8.2c4.7-2 9.1-3.5 13.5-5.1a335 335 0 0 1 6.5-2.3l3.2-1 1.6-.6.8-.3h.7l7.8 13 3.8 6 3.1 4.6a211.6 211.6 0 0 0 34 38.4c15.6 13.7 31.3 23 44.5 30a298 298 0 0 0 31.3 13.8l8.4 3 3 1-3-.5-8.9-1.8Z" transform="matrix(.181 0 0 .181 -6.6 -17.6)"></path><path fill="#00b4e2" fill-rule="nonzero" d="M160.7 121.4a157 157 0 0 0-7.3-6 94.2 94.2 0 0 0-9.2-4.8l-2.1-1c-.4 0-.8-.2-1.1-.3a44.5 44.5 0 0 0-22.7-2.2l-1.5.2-1.5.3-1.5.3-1.5.4-1.4.4-1.5.5-3 1c-2 .8-4 1.6-5.8 2.5l-2.8 1.4-2.7 1.4c-3.5 2-6.9 4-10 6l-9.1 6c-3 1.7-5.7 3.3-8.4 4.5a45.7 45.7 0 0 1-7.4 2.8l-3.2.6-.7.1h-.4l-.3.1-1.3.1h-5l1.3-.2 1.5-.1 1-.2h.5l.6-.2 1.2-.2.4-.1h.3c.2-.2.4-.2.7-.3 1-.2 1.9-.6 3-1a59 59 0 0 0 14.5-8.4l8.7-6.5c3-2.2 6.4-4.5 10-6.6l2.8-1.6 3-1.5c1.9-1 4-1.8 6-2.7a55.8 55.8 0 0 1 25.6-3.2c2 .3 3.8.3 5.5.7 1.5.3 3.6.5 6.7 1.5 3.8 1.1 7.5 3 8.3 3.5 2.8 1.4 4.6 2.6 6 3.5l2 1.3-1.9-1.6-5.2-4.5-3.1-2.6a132.9 132.9 0 0 0-7.5-4.1 52.8 52.8 0 0 0-13.1-4.3 45 45 0 0 0-25.2 2.8 116.6 116.6 0 0 0-17.8 9.6l-2.3 1.5-2.2 1.6-2.3 1.6L76 115c-3.1 2.2-6.4 4.5-10 6.7-3.6 2-7.5 4-11.8 5.2a35.5 35.5 0 0 1-16.1.6l-1-.2-1-.2-1.8-.5-1.8-.6-1.8-.7c-2.3-1-4.5-2-6.6-3.3-4.1-2.4-7.8-5-11.3-7.6l-2.5-1.9-1.3-.9-.6-.5-1.2-.8-2.4-1.5-2.5-1.5L0 106c1.6.9 12.5 10.2 13.4 10.8 3.4 2.6 7 5.5 10.7 8.6 2.2 1.8 22.3 20.6 41.2 16.6 15-3.2 20.1-13.3 40.5-23.2 4.7-2.2 8.2-4 14-4.9l6.5-.9c4.3-.5 8.1-.1 9.4-.1a62 62 0 0 1 13.2 2.6c2.5 1 4.5 2 6.5 3.2 2 1.1 3.6 2.3 4.9 3.2l4.2 2.7-3.8-3.3Z"></path><defs><linearGradient id="a" x1="0" x2="1" y1="0" y2="0" gradientTransform="matrix(227.497 368.152 -292.233 180.584 262.4 229)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#c53030"></stop><stop offset=".4" stop-color="#d14b32"></stop><stop offset="1" stop-color="#ed8936"></stop></linearGradient></defs></svg>`);
}
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Shared/ApplicationLogo.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const __unplugin_components_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$z = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_MainLayout = _sfc_main$Q;
  const _component_ApplicationLogo = __unplugin_components_1$2;
  const _component_IconOutlineBookOpen = __unplugin_components_2$2;
  const _component_Link = resolveComponent("Link");
  const _component_IconSolidArrowRight = __unplugin_components_3;
  const _component_IconOutlineChevronDoubleRight = __unplugin_components_4;
  const _component_IconOutlineArrowsRightLeft = __unplugin_components_5;
  const _component_IconOutlineRectangleGroup = __unplugin_components_6;
  _push(ssrRenderComponent(_component_MainLayout, mergeProps({
    title: _ctx.__("Dashboard")
  }, _attrs), {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="mt-5 rounded-lg shadow md:mt-0"${_scopeId}><div class="flex items-start justify-between rounded-lg border border-gray-100 bg-white bg-opacity-60 p-6 backdrop-blur-lg backdrop-filter dark:border-gray-700 dark:bg-gray-800 dark:bg-opacity-60 dark:backdrop-blur-lg dark:backdrop-filter lg:p-8"${_scopeId}><div class="w-3/5"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_ApplicationLogo, { class: "h-40 fill-gray-700 dark:fill-white" }, null, _parent2, _scopeId));
        _push2(`<h1 class="mt-8 text-2xl font-medium text-gray-900 dark:text-white"${_scopeId}> Welcome to Developer Zen </h1><p class="mt-4 pr-10 text-gray-900 dark:text-gray-400"${_scopeId}> We&#39;ve taken great care to craft an application framework that combines the simplicity of working with Laravel, with a more strict domain driven approach that helps ease the developer decision tree, but still provides a fast, simple approach to rapidly build applications. </p></div><div class="w-2/5 rounded border border-gray-200 bg-white/40 p-4 dark:border-gray-600 dark:bg-gray-700/60 dark:text-gray-400"${_scopeId}><h2 class="font-medium uppercase"${_scopeId}>Built in Features</h2><ul class="list-inside list-disc pl-2 pt-2"${_scopeId}><li${_scopeId}>Built on the VITAL Stack</li><li${_scopeId}>Snowflake Primary Database IDs</li><li${_scopeId}>Built in Documentation Platform</li><li${_scopeId}>Built in Design System</li><li${_scopeId}>Consistant Namespacing</li><li${_scopeId}>Customizable Auto Routing</li><li${_scopeId}>Teams, API, Two Factor by default</li><li${_scopeId}>Generators Galore</li><li${_scopeId}>NativePHP for PHP Desktop Applications</li><li${_scopeId}>Docker and Kubernetes Ready</li><li${_scopeId}>Super Powered with Laravel Octane</li><li${_scopeId}>SaaS Ready with Stripe Integration</li></ul></div></div></div><div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8"${_scopeId}><div class="rounded-lg border border-gray-200 bg-gray-100 p-6 shadow dark:border-gray-700 dark:bg-gray-800 dark:bg-gradient-to-bl dark:from-gray-700/50 dark:via-transparent"${_scopeId}><div class="flex items-center"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_IconOutlineBookOpen, { class: "h-6 w-6 text-gray-400" }, null, _parent2, _scopeId));
        _push2(`<h2 class="ml-3 text-xl font-semibold text-gray-900 dark:text-white"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          href: _ctx.route("docs.home")
        }, {
          default: withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(_ctx.__("Documentation"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.__("Documentation")), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</h2></div><p class="mt-4 line-clamp-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400"${_scopeId}> Serenity has wonderful documentation covering every aspect of the framework. Whether you&#39;re new to the framework or have previous experience, we recommend reading all of the documentation from beginning to end. </p><p class="mt-4 text-sm"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          href: _ctx.route("docs.home"),
          class: "inline-flex items-center font-normal text-blue-500 dark:text-blue-300"
        }, {
          default: withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Explore the documentation `);
              _push3(ssrRenderComponent(_component_IconSolidArrowRight, { class: "ml-1 h-3 w-3 fill-blue-500 dark:fill-blue-200" }, null, _parent3, _scopeId2));
            } else {
              return [
                createTextVNode(" Explore the documentation "),
                createVNode(_component_IconSolidArrowRight, { class: "ml-1 h-3 w-3 fill-blue-500 dark:fill-blue-200" })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</p></div><div class="rounded-lg border border-gray-200 bg-gray-100 p-6 shadow dark:border-gray-700 dark:bg-gray-800 dark:bg-gradient-to-bl dark:from-gray-700/50 dark:via-transparent"${_scopeId}><div class="flex items-center"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_IconOutlineChevronDoubleRight, { class: "h-6 w-6 text-gray-400" }, null, _parent2, _scopeId));
        _push2(`<h2 class="ml-3 text-xl font-semibold text-gray-900 dark:text-white"${_scopeId}> Modern ADR Monolith </h2></div><p class="mt-4 line-clamp-5 text-sm leading-relaxed text-gray-500 dark:text-gray-400"${_scopeId}> Describe Jetstream and Inertia </p></div><div class="rounded-lg border border-gray-200 bg-gray-100 p-6 shadow dark:border-gray-700 dark:bg-gray-800 dark:bg-gradient-to-bl dark:from-gray-700/50 dark:via-transparent"${_scopeId}><div class="flex items-center"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_IconOutlineArrowsRightLeft, { class: "h-6 w-6 text-gray-400" }, null, _parent2, _scopeId));
        _push2(`<h2 class="ml-3 text-xl font-semibold text-gray-900 dark:text-white"${_scopeId}> Automatic Routing </h2></div><p class="mt-4 line-clamp-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400"${_scopeId}> Auto routing description </p></div><div class="rounded-lg border border-gray-200 bg-gray-100 p-6 shadow dark:border-gray-700 dark:bg-gray-800 dark:bg-gradient-to-bl dark:from-gray-700/50 dark:via-transparent"${_scopeId}><div class="flex items-center"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_IconOutlineRectangleGroup, { class: "h-6 w-6 text-gray-400" }, null, _parent2, _scopeId));
        _push2(`<h2 class="ml-3 text-xl font-semibold text-gray-900 dark:text-white"${_scopeId}><a href="https://design-system.serenityphp.com/"${_scopeId}>Serenity Design System</a></h2></div><p class="mt-4 line-clamp-5 text-sm leading-relaxed text-gray-500 dark:text-gray-400"${_scopeId}> Serenity is built with Tailwind, an amazing utility first CSS framework that doesn&#39;t get in your way. You&#39;ll be amazed how easily you can build and maintain fresh, modern designs with this wonderful framework at your fingertips. </p></div></div>`);
      } else {
        return [
          createVNode("div", { class: "mt-5 rounded-lg shadow md:mt-0" }, [
            createVNode("div", { class: "flex items-start justify-between rounded-lg border border-gray-100 bg-white bg-opacity-60 p-6 backdrop-blur-lg backdrop-filter dark:border-gray-700 dark:bg-gray-800 dark:bg-opacity-60 dark:backdrop-blur-lg dark:backdrop-filter lg:p-8" }, [
              createVNode("div", { class: "w-3/5" }, [
                createVNode(_component_ApplicationLogo, { class: "h-40 fill-gray-700 dark:fill-white" }),
                createVNode("h1", { class: "mt-8 text-2xl font-medium text-gray-900 dark:text-white" }, " Welcome to Developer Zen "),
                createVNode("p", { class: "mt-4 pr-10 text-gray-900 dark:text-gray-400" }, " We've taken great care to craft an application framework that combines the simplicity of working with Laravel, with a more strict domain driven approach that helps ease the developer decision tree, but still provides a fast, simple approach to rapidly build applications. ")
              ]),
              createVNode("div", { class: "w-2/5 rounded border border-gray-200 bg-white/40 p-4 dark:border-gray-600 dark:bg-gray-700/60 dark:text-gray-400" }, [
                createVNode("h2", { class: "font-medium uppercase" }, "Built in Features"),
                createVNode("ul", { class: "list-inside list-disc pl-2 pt-2" }, [
                  createVNode("li", null, "Built on the VITAL Stack"),
                  createVNode("li", null, "Snowflake Primary Database IDs"),
                  createVNode("li", null, "Built in Documentation Platform"),
                  createVNode("li", null, "Built in Design System"),
                  createVNode("li", null, "Consistant Namespacing"),
                  createVNode("li", null, "Customizable Auto Routing"),
                  createVNode("li", null, "Teams, API, Two Factor by default"),
                  createVNode("li", null, "Generators Galore"),
                  createVNode("li", null, "NativePHP for PHP Desktop Applications"),
                  createVNode("li", null, "Docker and Kubernetes Ready"),
                  createVNode("li", null, "Super Powered with Laravel Octane"),
                  createVNode("li", null, "SaaS Ready with Stripe Integration")
                ])
              ])
            ])
          ]),
          createVNode("div", { class: "mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8" }, [
            createVNode("div", { class: "rounded-lg border border-gray-200 bg-gray-100 p-6 shadow dark:border-gray-700 dark:bg-gray-800 dark:bg-gradient-to-bl dark:from-gray-700/50 dark:via-transparent" }, [
              createVNode("div", { class: "flex items-center" }, [
                createVNode(_component_IconOutlineBookOpen, { class: "h-6 w-6 text-gray-400" }),
                createVNode("h2", { class: "ml-3 text-xl font-semibold text-gray-900 dark:text-white" }, [
                  createVNode(_component_Link, {
                    href: _ctx.route("docs.home")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.__("Documentation")), 1)
                    ]),
                    _: 1
                  }, 8, ["href"])
                ])
              ]),
              createVNode("p", { class: "mt-4 line-clamp-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400" }, " Serenity has wonderful documentation covering every aspect of the framework. Whether you're new to the framework or have previous experience, we recommend reading all of the documentation from beginning to end. "),
              createVNode("p", { class: "mt-4 text-sm" }, [
                createVNode(_component_Link, {
                  href: _ctx.route("docs.home"),
                  class: "inline-flex items-center font-normal text-blue-500 dark:text-blue-300"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Explore the documentation "),
                    createVNode(_component_IconSolidArrowRight, { class: "ml-1 h-3 w-3 fill-blue-500 dark:fill-blue-200" })
                  ]),
                  _: 1
                }, 8, ["href"])
              ])
            ]),
            createVNode("div", { class: "rounded-lg border border-gray-200 bg-gray-100 p-6 shadow dark:border-gray-700 dark:bg-gray-800 dark:bg-gradient-to-bl dark:from-gray-700/50 dark:via-transparent" }, [
              createVNode("div", { class: "flex items-center" }, [
                createVNode(_component_IconOutlineChevronDoubleRight, { class: "h-6 w-6 text-gray-400" }),
                createVNode("h2", { class: "ml-3 text-xl font-semibold text-gray-900 dark:text-white" }, " Modern ADR Monolith ")
              ]),
              createVNode("p", { class: "mt-4 line-clamp-5 text-sm leading-relaxed text-gray-500 dark:text-gray-400" }, " Describe Jetstream and Inertia ")
            ]),
            createVNode("div", { class: "rounded-lg border border-gray-200 bg-gray-100 p-6 shadow dark:border-gray-700 dark:bg-gray-800 dark:bg-gradient-to-bl dark:from-gray-700/50 dark:via-transparent" }, [
              createVNode("div", { class: "flex items-center" }, [
                createVNode(_component_IconOutlineArrowsRightLeft, { class: "h-6 w-6 text-gray-400" }),
                createVNode("h2", { class: "ml-3 text-xl font-semibold text-gray-900 dark:text-white" }, " Automatic Routing ")
              ]),
              createVNode("p", { class: "mt-4 line-clamp-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400" }, " Auto routing description ")
            ]),
            createVNode("div", { class: "rounded-lg border border-gray-200 bg-gray-100 p-6 shadow dark:border-gray-700 dark:bg-gray-800 dark:bg-gradient-to-bl dark:from-gray-700/50 dark:via-transparent" }, [
              createVNode("div", { class: "flex items-center" }, [
                createVNode(_component_IconOutlineRectangleGroup, { class: "h-6 w-6 text-gray-400" }),
                createVNode("h2", { class: "ml-3 text-xl font-semibold text-gray-900 dark:text-white" }, [
                  createVNode("a", { href: "https://design-system.serenityphp.com/" }, "Serenity Design System")
                ])
              ]),
              createVNode("p", { class: "mt-4 line-clamp-5 text-sm leading-relaxed text-gray-500 dark:text-gray-400" }, " Serenity is built with Tailwind, an amazing utility first CSS framework that doesn't get in your way. You'll be amazed how easily you can build and maintain fresh, modern designs with this wonderful framework at your fingertips. ")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Dashboard.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const Dashboard = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["ssrRender", _sfc_ssrRender$4]]);
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dashboard
}, Symbol.toStringTag, { value: "Module" }));
const title$2 = "Action Domain Responder";
const description$2 = "Quasi sapiente voluptates aut minima non doloribus similique quisquam. In quo expedita ipsum nostrum corrupti incidunt. Et aut eligendi ea perferendis.";
const tags$2 = ["core", "concepts", "action-domain-responder", "adr"];
const _sfc_main$y = {
  __name: "action-domain-responder",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "Action Domain Responder", "description": "Quasi sapiente voluptates aut minima non doloribus similique quisquam. In quo expedita ipsum nostrum corrupti incidunt. Et aut eligendi ea perferendis.", "tags": ["core", "concepts", "action-domain-responder", "adr"] };
    __expose({ frontmatter });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><ul class="lg:hidden toc"><ul><li><a href="#quis-vel-iste-dicta">Quis vel iste dicta</a><ul><li><a href="#et-pariatur-ab-quas">Et pariatur ab quas</a></li><li><a href="#natus-aspernatur-iste">Natus aspernatur iste</a></li></ul></li><li><a href="#quos-porro-ut-molestiae">Quos porro ut molestiae</a><ul><li><a href="#voluptatem-quas-possimus">Voluptatem quas possimus</a></li><li><a href="#id-vitae-minima">Id vitae minima</a></li></ul></li><li><a href="#vitae-laborum-maiores">Vitae laborum maiores</a><ul><li><a href="#corporis-exercitationem">Corporis exercitationem</a></li><li><a href="#reprehenderit-magni">Reprehenderit magni</a></li></ul></li></ul></ul><h2 class="doc-heading" id="quis-vel-iste-dicta" tabindex="-1"><a class="header-anchor" href="#quis-vel-iste-dicta" aria-hidden="true">#</a> Quis vel iste dicta</h2><p>Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur.</p><h3 class="doc-heading" id="et-pariatur-ab-quas" tabindex="-1"><a class="header-anchor" href="#et-pariatur-ab-quas" aria-hidden="true">#</a> Et pariatur ab quas</h3><p>Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur quaerat exercitationem. Consequatur et cum atque mollitia qui quia necessitatibus.</p><pre class="shiki css-variables" style="${ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}" tabindex="0"><code class="language-js"><span class="line"><span style="${ssrRenderStyle({ "color": "var(--shiki-token-comment)" })}">/** </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">@type</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-comment)" })}"> </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-function)" })}">{import(&#39;@tailwindlabs/lorem&#39;).ipsum}</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-comment)" })}"> */</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">export</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">default</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">  lorem</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">:</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}">&#39;ipsum&#39;</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-punctuation)" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">  dolor</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">:</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> [</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}">&#39;sit&#39;</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-punctuation)" })}">,</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}">&#39;amet&#39;</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-punctuation)" })}">,</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-string-expression)" })}">&#39;consectetur&#39;</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">]</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-punctuation)" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">  adipiscing</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">:</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">    elit</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">:</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}">true</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">  }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">}</span></span>
<span class="line"></span></code></pre><p>Possimus saepe veritatis sint nobis et quam eos. Architecto consequatur odit perferendis fuga eveniet possimus rerum cumque. Ea deleniti voluptatum deserunt voluptatibus ut non iste. Provident nam asperiores vel laboriosam omnis ducimus enim nesciunt quaerat. Minus tempora cupiditate est quod.</p><h3 class="doc-heading" id="natus-aspernatur-iste" tabindex="-1"><a class="header-anchor" href="#natus-aspernatur-iste" aria-hidden="true">#</a> Natus aspernatur iste</h3><p>Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur quaerat exercitationem. Consequatur et cum atque mollitia qui quia necessitatibus.</p><p>Voluptas beatae omnis omnis voluptas. Cum architecto ab sit ad eaque quas quia distinctio. Molestiae aperiam qui quis deleniti soluta quia qui. Dolores nostrum blanditiis libero optio id. Mollitia ad et asperiores quas saepe alias.</p><hr><h2 class="doc-heading" id="quos-porro-ut-molestiae" tabindex="-1"><a class="header-anchor" href="#quos-porro-ut-molestiae" aria-hidden="true">#</a> Quos porro ut molestiae</h2><p>Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur.</p><h3 class="doc-heading" id="voluptatem-quas-possimus" tabindex="-1"><a class="header-anchor" href="#voluptatem-quas-possimus" aria-hidden="true">#</a> Voluptatem quas possimus</h3><p>Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur quaerat exercitationem. Consequatur et cum atque mollitia qui quia necessitatibus.</p><p>Possimus saepe veritatis sint nobis et quam eos. Architecto consequatur odit perferendis fuga eveniet possimus rerum cumque. Ea deleniti voluptatum deserunt voluptatibus ut non iste. Provident nam asperiores vel laboriosam omnis ducimus enim nesciunt quaerat. Minus tempora cupiditate est quod.</p><h3 class="doc-heading" id="id-vitae-minima" tabindex="-1"><a class="header-anchor" href="#id-vitae-minima" aria-hidden="true">#</a> Id vitae minima</h3><p>Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur quaerat exercitationem. Consequatur et cum atque mollitia qui quia necessitatibus.</p><p>Voluptas beatae omnis omnis voluptas. Cum architecto ab sit ad eaque quas quia distinctio. Molestiae aperiam qui quis deleniti soluta quia qui. Dolores nostrum blanditiis libero optio id. Mollitia ad et asperiores quas saepe alias.</p><hr><h2 class="doc-heading" id="vitae-laborum-maiores" tabindex="-1"><a class="header-anchor" href="#vitae-laborum-maiores" aria-hidden="true">#</a> Vitae laborum maiores</h2><p>Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur.</p><h3 class="doc-heading" id="corporis-exercitationem" tabindex="-1"><a class="header-anchor" href="#corporis-exercitationem" aria-hidden="true">#</a> Corporis exercitationem</h3><p>Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur quaerat exercitationem. Consequatur et cum atque mollitia qui quia necessitatibus.</p><div class="custom-block note"><h4>ARCHITECTO</h4><p>Possimus saepe veritatis sint nobis et quam eos. Architecto consequatur odit perferendis fuga eveniet possimus rerum cumque. Ea deleniti voluptatum deserunt voluptatibus ut non iste. Provident nam asperiores vel laboriosam omnis ducimus enim nesciunt quaerat. Minus tempora cupiditate est quod.</p></div><h3 class="doc-heading" id="reprehenderit-magni" tabindex="-1"><a class="header-anchor" href="#reprehenderit-magni" aria-hidden="true">#</a> Reprehenderit magni</h3><p>Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur quaerat exercitationem. Consequatur et cum atque mollitia qui quia necessitatibus.</p><p>Voluptas beatae omnis omnis voluptas. Cum architecto ab sit ad eaque quas quia distinctio. Molestiae aperiam qui quis deleniti soluta quia qui. Dolores nostrum blanditiis libero optio id. Mollitia ad et asperiores quas saepe alias.</p></div>`);
    };
  }
};
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Docs/2.0/action-domain-responder.md");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$y,
  description: description$2,
  tags: tags$2,
  title: title$2
}, Symbol.toStringTag, { value: "Module" }));
const title$1 = "Getting Started";
const description$1 = "Thanks for your interest in Serenity, we think you'll be pleasantly surprised by how easy it can be to build Enterprise level applications for the web and desktop with the Serenity framework.";
const tags$1 = ["introduction", "getting started"];
const _sfc_main$x = {
  __name: "getting-started",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "Getting Started", "description": "Thanks for your interest in Serenity, we think you'll be pleasantly surprised by how easy it can be to build Enterprise level applications for the web and desktop with the Serenity framework.", "tags": ["introduction", "getting started"] };
    __expose({ frontmatter });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><ul class="lg:hidden toc"><ul><li><a href="#introduction">Introduction</a></li><li><a href="#benefits">Benefits</a></li><li><a href="#acknowledgments">Acknowledgments</a></li></ul></ul><h2 class="doc-heading" id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Thanks for your interest in Serenity, we think you’ll be pleasantly surprised by how easy it can be to build Enterprise level applications for the web and desktop, with the Serenity framework.</p><p>We’ve taken great care to craft an application framework that combines the simplicity of working with Laravel, with a more strict domain driven approach that helps ease the developer decision tree, but still provides a fast, simple approach to rapidly build applications.</p><h2 class="doc-heading" id="benefits" tabindex="-1"><a class="header-anchor" href="#benefits" aria-hidden="true">#</a> Benefits</h2><p>The benefits of Serenity are far-reaching and you can read more about them in Core Concepts and under the Usage page for individual features.</p><ul><li>Built on the VITAL Stack (Vue, Inertia, Tailwind, ADR, Laravel)</li><li>Snowflake Primary Database IDs</li><li>Built in Documentation Platform</li><li>Built in Design System</li><li>Consistant Namespacing</li><li>Customizable Auto Routing</li><li>Teams, API, Two Factor Authorization by default</li><li>Generators Galore</li><li>NativePHP for PHP Desktop Applications</li><li>Docker and Kubernetes Ready</li><li>Super Powered with Laravel Octane</li><li>SaaS Ready with Stripe Integration</li></ul><p>Before we get going, we need to acknowledge those deveopers and companies whose Open Source contributions have made Serenity possible, and without whom it simply wouldn’t exist.</p><h2 class="doc-heading" id="acknowledgments" tabindex="-1"><a class="header-anchor" href="#acknowledgments" aria-hidden="true">#</a> Acknowledgments</h2><ul><li>Taylor Otwell and the Laravel Team</li><li>Jonathan Reinink (InertiaJS)</li><li>Adam Wathan (TailwindCSS)</li><li>The entire team at Spatie</li><li>Graham Chapman (Laravel Markdown)</li><li>Marcel Pociot (NativePHP)</li><li>Aaron Francis</li><li>Jeffrey Way</li></ul></div>`);
    };
  }
};
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Docs/2.0/getting-started.md");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$x,
  description: description$1,
  tags: tags$1,
  title: title$1
}, Symbol.toStringTag, { value: "Module" }));
const title = "Installation";
const description = "Quasi sapiente voluptates aut minima non doloribus similique quisquam. In quo expedita ipsum nostrum corrupti incidunt. Et aut eligendi ea perferendis.";
const tags = ["introduction", "installation"];
const _sfc_main$w = {
  __name: "installation",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "Installation", "description": "Quasi sapiente voluptates aut minima non doloribus similique quisquam. In quo expedita ipsum nostrum corrupti incidunt. Et aut eligendi ea perferendis.", "tags": ["introduction", "installation"] };
    __expose({ frontmatter });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><ul class="lg:hidden toc"><ul><li><a href="#prerequisites">Prerequisites</a></li><li><a href="#installation">Installation</a></li></ul></ul><h2 class="doc-heading" id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h2><p>Serenity is not for beginners, and as such, we won’t be explaining how to install or configure dependencies or set up your development environment.</p><p>Serenity requires the following:</p><ul><li>Composer</li><li>Node/NPM</li><li>MySQL or PostGres Database</li><li>PHP &gt; 8.1 Webserver</li></ul><p>Serenity is built and tested on MacOS Ventura 13.3.1 running Laravel Valet 3.3.2</p><h2 class="doc-heading" id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><p>The most direct way to install Serenity is to install the Serenity installer to your system globally via composer.</p><pre class="shiki css-variables" style="${ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}" tabindex="0"><code class="language-bash"><span class="line"><span style="${ssrRenderStyle({ "color": "var(--shiki-token-function)" })}">$</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-string)" })}">composer</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-string)" })}">require</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-string)" })}">--global</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-string)" })}">serenity/installer</span></span>
<span class="line"></span></code></pre><p>Once you have the installer, you can create a new installation of the framework by calling the installer and specifying a directory name:</p><pre class="shiki css-variables" style="${ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}" tabindex="0"><code class="language-bash"><span class="line"><span style="${ssrRenderStyle({ "color": "var(--shiki-token-function)" })}">$</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-string)" })}">serenity</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-string)" })}">new</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> [myapp, </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-string)" })}">blog,</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-string)" })}">etc]</span></span>
<span class="line"></span></code></pre><p>This will install Serenity, all of it’s dependencies, and compile all the initial assets for you.</p><p>You may also install Serenity using the composer <code>create-project</code> command and specifying a directory name like so:</p><pre class="shiki css-variables" style="${ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}" tabindex="0"><code class="language-bash"><span class="line"><span style="${ssrRenderStyle({ "color": "var(--shiki-token-function)" })}">$</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-string)" })}">composer</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-string)" })}">create-project</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-string)" })}">serenity/serenity</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> [myapp, </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-string)" })}">blog,</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-string)" })}">etc]</span></span>
<span class="line"></span></code></pre></div>`);
    };
  }
};
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Docs/2.0/installation.md");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$w,
  description,
  tags,
  title
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$v = {
  __name: "404",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = {};
    __expose({ frontmatter });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><p>&lt;script setup&gt; import ApplicationMark from ‘@/components/Shared/ApplicationMark.vue’ &lt;/script&gt;</p><h1>Whoops!</h1><p>&lt;ApplicationMark class=“h-auto w-44” /&gt;</p><p>Sorry, that page doesn’t seem to exist yet.</p></div>`);
    };
  }
};
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Docs/404.md");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$v
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$u = {
  __name: "Policy",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = {};
    __expose({ frontmatter });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1>Privacy Policy</h1><p>Edit this file to define the privacy policy for your application.</p><p>Let’s see if we can get some shiki going on.</p><pre class="shiki css-variables" style="${ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}" tabindex="0"><code class="language-php"><span class="line"><span style="${ssrRenderStyle({ "color": "var(--shiki-token-comment)" })}">/**</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "var(--shiki-token-comment)" })}"> * Redirect response for Vue components.</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "var(--shiki-token-comment)" })}"> *</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "var(--shiki-token-comment)" })}"> * </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">@return</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-comment)" })}"> </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-punctuation)" })}">\\</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}">Illuminate</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-punctuation)" })}">\\</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}">Http</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-punctuation)" })}">\\</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}">Response</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "var(--shiki-token-comment)" })}"> */</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">public</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">function</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-function)" })}">replace</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">()</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">  </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">if</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> (</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}">$this</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">-&gt;</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">payload</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">-&gt;</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-function)" })}">expectsMessage</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-punctuation)" })}">()</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">    </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">return</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}">$this</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">-&gt;</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-function)" })}">toResponse</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-punctuation)" })}">(</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}">$this</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">-&gt;</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">route</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-punctuation)" })}">,</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}">true</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-punctuation)" })}">)</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">  }</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">  </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">return</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}">$this</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">-&gt;</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-function)" })}">toResponse</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-punctuation)" })}">(</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}">$this</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">-&gt;</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">route</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-punctuation)" })}">)</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">}</span></span>
<span class="line"></span></code></pre></div>`);
    };
  }
};
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Markdown/Policy.md");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$u
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$t = {
  __name: "Terms",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = {};
    __expose({ frontmatter });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1>Terms of Service</h1><p>Edit this file to define the terms of service for your application.</p></div>`);
    };
  }
};
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Markdown/Terms.md");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const __vite_glob_0_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$t
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$s = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_Link = resolveComponent("Link");
  _push(ssrRenderComponent(_component_Link, mergeProps({
    href: _ctx.route("home")
  }, _attrs), {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg${ssrRenderAttrs(mergeProps({ xmlns: "http://www.w3.org/2000/svg" }, _ctx.$attrs, {
          "xml:space": "preserve",
          "fill-rule": "evenodd",
          "stroke-linejoin": "round",
          "stroke-miterlimit": "2",
          "clip-rule": "evenodd",
          viewBox: "0 0 909 749"
        }))}${_scopeId}><path fill="url(#a)" fill-rule="nonzero" d="M328.6 641.9c-2.4-.8-4.6-1.9-7-2.8l-7-3-7.2-3.5-3.6-1.8-3.6-2a11375.7 11375.7 0 0 0-10.7-6.6 1196.4 1196.4 0 0 1-7.1-5l-3.5-2.6-6.9-5.8c-9-8-17.7-17-25.3-27.2a227.6 227.6 0 0 1-20.7-33.2 380 380 0 0 1-27.5-77c-3.5-13.4-6.6-27-9.7-40.6-1.6-6.8-3.1-13.6-4.8-20.3l-2-7.9c-.8-3.5-1.7-7-2.7-10.4l-3.1-10.6-3.6-11-9.4-29 24.6 8c8.3 2.7 16.4 5.5 24.2 7.8 4 1 7.8 2.2 11.7 3.1l8.7 2.2 11.3 2.8c15.1 3.6 30.3 7 45.2 11 15 3.8 29.6 8 43.6 13 7 2.5 14 5.2 20.6 8.1l5.6 2.5 8.3 3.9a383 383 0 0 1 8 3.9l4 2 2 1c.6.3 1.4.5 1.8 1-1.7 7.3-3.6 14.7-5 21.5l-1.4 7.2a203.4 203.4 0 0 0-.8 68 246.7 246.7 0 0 0 20.2 65c8 17.5 15.7 30.9 21 39.9l3.7 6 2.7 4.2 2.2 3.5-2.8-3-3.5-3.7-4.7-5.2a288.7 288.7 0 0 1-44.4-65.4c-5.2-11-10.2-23.2-14.2-36.9a196 196 0 0 1-7.2-76.2l.3-3.2v-4.5c-.2-.2-.7-.2-1-.3l-1.2-.3-1-.2h-.3l-.3-.2-1.1-.4-2.3-.8c-6.2-2.1-12.6-4.1-19.2-6a613 613 0 0 0-41.6-9.8c-14.6-3-29.7-5.8-45.4-9l-11.8-2.6-3-.7c.1 0 0 0 0 0v.4l.6 2.5a916 916 0 0 1 4.6 21c2.8 14 5.5 27.4 8.3 40.4 5.6 26 12.2 50 21.2 71.7a186.7 186.7 0 0 0 34.8 55.2c14 14.8 30 26.1 46.2 34.4a263 263 0 0 0 45.9 18.4 352.4 352.4 0 0 0 50.7 11.6c4 .6 7.5 1 10.2 1.5l8.5 1-8.6.6-10.3.4h-14.2c-10.7-.2-23.8-1-39-3.2s-32.4-5.9-51-12.7Zm58.8-196.3a185.5 185.5 0 0 1 6-34.5 385.7 385.7 0 0 1 25.3-68 447.4 447.4 0 0 1 18.1-33.8c1.6-2.8 3.4-5.6 5.2-8.3l5.2-8.3a1469.9 1469.9 0 0 0 16.1-25.4l4-6.5 5.7-10c3.7-6.6 7.3-13.8 10.9-20.8l10.6-20.6 11.6 23.1c3.9 7.8 7.6 15.2 11.5 22.2l3 5.2 2.8 4.8 3 5 5.9 10c8 13.4 16 26.5 23.6 39.5a504 504 0 0 1 20.4 38.8 316 316 0 0 1 8.2 19.2l2 4.9a7830.3 7830.3 0 0 1 5.3 14.9l1.2 3.6.6 1.8.4.9c0 .3.2.6.1.8l-12.2 7.3c-2 1.3-3.9 2.4-5.7 3.7l-3.6 2.2a222.4 222.4 0 0 0-34 27.4 215.8 215.8 0 0 0-28.8 36.4 270.8 270.8 0 0 0-18.2 33.4l-1.2 2.5.7-2.7c.4-1.7 1-4.3 2-7.7 2-6.7 5-16.7 10.3-29a203 203 0 0 1 44.8-65.2c3.9-3.8 8-7.6 12.5-11.2l3.2-2.6 1.1-1.1 2.2-2c.1 0 0 0 0-.2v-.2l-.3-.4-.5-.8a33 33 0 0 0-1.7-2.9l-2-4c-3-5.6-6-11.3-9.4-17a622.5 622.5 0 0 0-22.3-35.3c-8.1-12.1-16.9-24.6-25.7-37.8l-6.6-10-3.3-5.2-.2-.3-.2-.1c-.2-.2-.4-.1-.4 0v.4l-.1.2-.4.7-1.5 2.5a612.8 612.8 0 0 1-16.9 26.4 7969 7969 0 0 0-5 7.7l-5 7.7a538.5 538.5 0 0 0-17.7 31 437.5 437.5 0 0 0-27 61.4 196.4 196.4 0 0 0-7.4 29.3 167.1 167.1 0 0 0-2 21.4l-.1 7 .3 6.7.2 3.4c0 1.1.1 2.3.3 3.4l1 6.6c0 1 .2 2.2.4 3.2l.6 3.2 1.3 6.4c.4 2.1 1 4.1 1.5 6.2l1.6 6 2 5.9c5 15.4 11.2 29 17.3 40.7a359 359 0 0 0 24.3 39.7l5.3 7.5 4.5 6.1-5.6-5.1-6.7-6.4a302.9 302.9 0 0 1-31-36 241 241 0 0 1-24-40.2l-3-6-2.5-6.4-2.5-6.5-2.2-6.9-1.1-3.5-1-3.6-1.8-7.3a3707.3 3707.3 0 0 1-1.4-7.6c-.4-2.7-1-5.2-1.2-7.9l-.7-8a177.4 177.4 0 0 1 0-25Zm310.3-69c13.3-3.4 26.8-6.4 40.2-9.5 6.7-1.5 13.4-3 20-4.7l8.5-2.1 10.3-2.8c3.5-1 7-2 10.5-3.2l10.9-3.5 27.4-9-7.8 24.1c-2.7 8-5.4 16-7.6 23.7l-3.2 11.4-2.2 9-2.7 11c-3.6 14.8-7 29.6-10.7 44.2a527.3 527.3 0 0 1-12.6 42.7A344 344 0 0 1 771 528l-2.5 5.8-3.7 8.1a436 436 0 0 1-3.8 8c-1.2 2.6-2.4 5.3-3.7 7.7-7.4-1.8-14.8-3.7-21.7-5.1a10364.7 10364.7 0 0 1-12.8-2.5 196 196 0 0 0-62.4-.4 246 246 0 0 0-65.3 19.5c-17.6 7.9-31 15.4-40.1 20.8l-6 3.5-4.3 2.7-3.5 2.2 3-2.8 3.7-3.5 5.3-4.6a293 293 0 0 1 65.9-43.7 251 251 0 0 1 37-14 202.2 202.2 0 0 1 79.4-6.1h1l.5.1h2.7c.2-.2.3-.8.4-1l.2-1.2.2-1v-.3l.4-1 .8-2.3c2-6.2 4-12.4 5.7-19 3.5-12.9 6.6-26.5 9.5-40.7 3-14.3 5.7-29 8.9-44.4l2.5-11.6.6-2.4-.1-.1h-.7l-1.3.4-20.9 4.6c-13.7 2.8-27 5.4-39.8 8.2a421.4 421.4 0 0 0-71.2 20.6 193.8 193.8 0 0 0-55.4 33.6 173.4 173.4 0 0 0-34.9 45 262.6 262.6 0 0 0-19 45 346.2 346.2 0 0 0-12 50l-1.6 10.1-1.2 8.4-.5-8.5-.2-10.2v-6.6c0-2.3 0-4.8.2-7.4a300 300 0 0 1 3.7-38.5c2.4-15 6.3-32 13.4-50.3a182.6 182.6 0 0 1 33.8-55.4 204 204 0 0 1 60.4-44.3c23.5-11.8 49.5-20 76.1-26.9Zm-348 305a231.9 231.9 0 0 1-83.5-35.2 200.1 200.1 0 0 1-40.8-37.3l-2.7-3.2a2136.5 2136.5 0 0 0-5.1-6.3l-.2-.2-.3.2-.6.3-1.2.6a65.1 65.1 0 0 0-6.7 3.5c-5.7 2.9-11.4 6-17 9.3a570 570 0 0 0-35.2 22.4c-12 8.2-24.4 17-37.6 26a9462 9462 0 0 1-5 3.5l-2.5 1.7-1.2.8-.3.3a1275 1275 0 0 0-6.2 4.9c2.9 1 5.2 2 7.1 2.8l.7.3 3.6 2.1 7.6 4.5 15.2 9.2a726.5 726.5 0 0 0 61.6 34.9c10.6 5 21.5 9.6 32.5 13.3l8.3 2.6 8.4 2.3 8.4 1.8 4.2.7 4.3.7a150.6 150.6 0 0 0 68.2-6 247 247 0 0 0 54.6-26.3c17.5-11 34.4-23.3 51.3-35.8l12.7-9.4 12.9-9.3c4.2-3.1 8.6-6.1 12.9-9.1l13-8.8c17.3-11.5 35-22.1 52.8-31.5 17.9-9.3 36-17.4 54.2-23.8a309.3 309.3 0 0 1 54.5-14 267.7 267.7 0 0 1 100.5 3.1c30 6.8 55.3 18.5 75.8 30.5 10.3 6 19.5 12 27.8 17.8l4.4 3.1a385.2 385.2 0 1 0-741.4-4.2c7.3-4.3 14.6-8.6 21.8-12.6 13-7.4 26-14.3 38.7-20.2a343 343 0 0 1 19.1-8.2c4.7-2 9.1-3.5 13.5-5.1a335 335 0 0 1 6.5-2.3l3.2-1 1.6-.6.8-.3h.7l7.8 13 3.8 6 3.1 4.6a211.6 211.6 0 0 0 34 38.4c15.6 13.7 31.3 23 44.5 30a298 298 0 0 0 31.3 13.8l8.4 3 3 1-3-.5-8.9-1.8Z" transform="translate(-36.4 -136.4)"${_scopeId}></path><path fill="#00b4e2" fill-rule="nonzero" d="M887.9 631.4a867.4 867.4 0 0 0-40.5-32.8 520.3 520.3 0 0 0-28.5-16.4c-7-3.6-14.3-7.3-22-10.6-3.9-1.8-8-3.3-12-5l-6.2-2.3a245.6 245.6 0 0 0-62.5-14c-20-1.8-41.3-1.4-62.9 1.8l-8.1 1.4c-2.7.4-5.4 1-8.2 1.6-2.7.5-5.4 1.3-8.1 1.9-2.8.7-5.5 1.2-8.2 2l-8.3 2.4c-2.7.7-5.4 1.7-8.2 2.6-5.5 1.6-11 3.7-16.4 5.7-11 4.3-21.7 8.7-32 13.7-5.3 2.4-10.3 5-15.4 7.5-5 2.7-10 5.2-15 8a920.3 920.3 0 0 0-55.6 33.5c-17.5 11.2-34 22.5-50.1 32.4-16 10-31.6 18.6-46.3 25.4a252.7 252.7 0 0 1-41 15c-6.3 1.4-12 2.9-17.5 3.6l-4 .6-2 .3-1.8.2-7.1.6-3.3.3H288c-3.4.2-6.3-.1-8.7-.3l-7-.5 7-.5c2.4-.2 5.2-.3 8.6-.9l5.4-.7 3-.5 3.2-.6 6.8-1.5 1.8-.4 1.8-.5 3.8-1.1c5.1-1.3 10.5-3.4 16.4-5.4a269.9 269.9 0 0 0 37.7-18.5 506.6 506.6 0 0 0 42.7-28.3c15-10.8 30.6-23.1 47.8-35.6 17.1-12.4 35.6-25 55.7-36.7 5-3 10.2-5.8 15.4-8.7 5.2-2.8 10.5-5.7 16-8.3a393.1 393.1 0 0 1 33.8-14.7 315 315 0 0 1 71-18 272 272 0 0 1 70.2 0c10.8 1.6 21 1.6 30.6 3.7 8.2 1.9 19.4 3.3 37 8.6 20.7 6.3 41 16.6 45.9 19a330.8 330.8 0 0 1 32.4 19.4l11 7.2-9.8-8.8c-6.5-5.7-16-14.2-28.7-24.8-5.3-4.4-11.1-9-17.5-14l-12.9-7.7c-8.5-5-18-10.2-28.2-15.2a290 290 0 0 0-33.6-14A248.8 248.8 0 0 0 617 494a286 286 0 0 0-48.6 14.1 409 409 0 0 0-49.2 23c-16.4 8.8-32.8 19-49.3 30l-12.3 8.3-12.5 8.7-12.5 9-12.7 9.2a711.2 711.2 0 0 1-55 37 277.7 277.7 0 0 1-65.7 29 196 196 0 0 1-44.5 7.3c-15.2.4-30-1-44.3-3.8l-5.3-1.1c-1.8-.4-3.6-.7-5.3-1.3l-10.4-2.8-10-3.4c-3.4-1.2-6.6-2.6-9.8-3.8a312 312 0 0 1-36.4-18 662.2 662.2 0 0 1-62.3-42L56.8 583l-7-5-3.6-2.7-6.5-4.5a299 299 0 0 0-13.2-8.6l-13.7-8.1L0 546.6c8.9 5.2 69.1 56.5 73.9 60 19 14 38.8 30.3 59 47.2 12.2 10.1 123.2 114 228.1 91.7C443.3 728 472 672 584.6 617.8c26-12.5 45.4-22.7 77.3-27.2l35.6-4.8c24.3-3.1 45.3-1 52.3-1 21.3.2 64.5 11.8 73 14.8a202.4 202.4 0 0 1 35.7 17.2c10.8 6.4 19.7 12.7 27.1 17.6l23 15.3s-7.3-6.6-20.7-18.3Z"${_scopeId}></path><defs${_scopeId}><linearGradient id="a" x1="0" x2="1" y1="0" y2="0" gradientTransform="matrix(227 368 -292 181 262.4 229)" gradientUnits="userSpaceOnUse"${_scopeId}><stop offset="0" stop-color="#c53030"${_scopeId}></stop><stop offset=".4" stop-color="#d14b32"${_scopeId}></stop><stop offset="1" stop-color="#ed8936"${_scopeId}></stop></linearGradient></defs></svg>`);
      } else {
        return [
          (openBlock(), createBlock("svg", mergeProps({ xmlns: "http://www.w3.org/2000/svg" }, _ctx.$attrs, {
            "xml:space": "preserve",
            "fill-rule": "evenodd",
            "stroke-linejoin": "round",
            "stroke-miterlimit": "2",
            "clip-rule": "evenodd",
            viewBox: "0 0 909 749"
          }), [
            createVNode("path", {
              fill: "url(#a)",
              "fill-rule": "nonzero",
              d: "M328.6 641.9c-2.4-.8-4.6-1.9-7-2.8l-7-3-7.2-3.5-3.6-1.8-3.6-2a11375.7 11375.7 0 0 0-10.7-6.6 1196.4 1196.4 0 0 1-7.1-5l-3.5-2.6-6.9-5.8c-9-8-17.7-17-25.3-27.2a227.6 227.6 0 0 1-20.7-33.2 380 380 0 0 1-27.5-77c-3.5-13.4-6.6-27-9.7-40.6-1.6-6.8-3.1-13.6-4.8-20.3l-2-7.9c-.8-3.5-1.7-7-2.7-10.4l-3.1-10.6-3.6-11-9.4-29 24.6 8c8.3 2.7 16.4 5.5 24.2 7.8 4 1 7.8 2.2 11.7 3.1l8.7 2.2 11.3 2.8c15.1 3.6 30.3 7 45.2 11 15 3.8 29.6 8 43.6 13 7 2.5 14 5.2 20.6 8.1l5.6 2.5 8.3 3.9a383 383 0 0 1 8 3.9l4 2 2 1c.6.3 1.4.5 1.8 1-1.7 7.3-3.6 14.7-5 21.5l-1.4 7.2a203.4 203.4 0 0 0-.8 68 246.7 246.7 0 0 0 20.2 65c8 17.5 15.7 30.9 21 39.9l3.7 6 2.7 4.2 2.2 3.5-2.8-3-3.5-3.7-4.7-5.2a288.7 288.7 0 0 1-44.4-65.4c-5.2-11-10.2-23.2-14.2-36.9a196 196 0 0 1-7.2-76.2l.3-3.2v-4.5c-.2-.2-.7-.2-1-.3l-1.2-.3-1-.2h-.3l-.3-.2-1.1-.4-2.3-.8c-6.2-2.1-12.6-4.1-19.2-6a613 613 0 0 0-41.6-9.8c-14.6-3-29.7-5.8-45.4-9l-11.8-2.6-3-.7c.1 0 0 0 0 0v.4l.6 2.5a916 916 0 0 1 4.6 21c2.8 14 5.5 27.4 8.3 40.4 5.6 26 12.2 50 21.2 71.7a186.7 186.7 0 0 0 34.8 55.2c14 14.8 30 26.1 46.2 34.4a263 263 0 0 0 45.9 18.4 352.4 352.4 0 0 0 50.7 11.6c4 .6 7.5 1 10.2 1.5l8.5 1-8.6.6-10.3.4h-14.2c-10.7-.2-23.8-1-39-3.2s-32.4-5.9-51-12.7Zm58.8-196.3a185.5 185.5 0 0 1 6-34.5 385.7 385.7 0 0 1 25.3-68 447.4 447.4 0 0 1 18.1-33.8c1.6-2.8 3.4-5.6 5.2-8.3l5.2-8.3a1469.9 1469.9 0 0 0 16.1-25.4l4-6.5 5.7-10c3.7-6.6 7.3-13.8 10.9-20.8l10.6-20.6 11.6 23.1c3.9 7.8 7.6 15.2 11.5 22.2l3 5.2 2.8 4.8 3 5 5.9 10c8 13.4 16 26.5 23.6 39.5a504 504 0 0 1 20.4 38.8 316 316 0 0 1 8.2 19.2l2 4.9a7830.3 7830.3 0 0 1 5.3 14.9l1.2 3.6.6 1.8.4.9c0 .3.2.6.1.8l-12.2 7.3c-2 1.3-3.9 2.4-5.7 3.7l-3.6 2.2a222.4 222.4 0 0 0-34 27.4 215.8 215.8 0 0 0-28.8 36.4 270.8 270.8 0 0 0-18.2 33.4l-1.2 2.5.7-2.7c.4-1.7 1-4.3 2-7.7 2-6.7 5-16.7 10.3-29a203 203 0 0 1 44.8-65.2c3.9-3.8 8-7.6 12.5-11.2l3.2-2.6 1.1-1.1 2.2-2c.1 0 0 0 0-.2v-.2l-.3-.4-.5-.8a33 33 0 0 0-1.7-2.9l-2-4c-3-5.6-6-11.3-9.4-17a622.5 622.5 0 0 0-22.3-35.3c-8.1-12.1-16.9-24.6-25.7-37.8l-6.6-10-3.3-5.2-.2-.3-.2-.1c-.2-.2-.4-.1-.4 0v.4l-.1.2-.4.7-1.5 2.5a612.8 612.8 0 0 1-16.9 26.4 7969 7969 0 0 0-5 7.7l-5 7.7a538.5 538.5 0 0 0-17.7 31 437.5 437.5 0 0 0-27 61.4 196.4 196.4 0 0 0-7.4 29.3 167.1 167.1 0 0 0-2 21.4l-.1 7 .3 6.7.2 3.4c0 1.1.1 2.3.3 3.4l1 6.6c0 1 .2 2.2.4 3.2l.6 3.2 1.3 6.4c.4 2.1 1 4.1 1.5 6.2l1.6 6 2 5.9c5 15.4 11.2 29 17.3 40.7a359 359 0 0 0 24.3 39.7l5.3 7.5 4.5 6.1-5.6-5.1-6.7-6.4a302.9 302.9 0 0 1-31-36 241 241 0 0 1-24-40.2l-3-6-2.5-6.4-2.5-6.5-2.2-6.9-1.1-3.5-1-3.6-1.8-7.3a3707.3 3707.3 0 0 1-1.4-7.6c-.4-2.7-1-5.2-1.2-7.9l-.7-8a177.4 177.4 0 0 1 0-25Zm310.3-69c13.3-3.4 26.8-6.4 40.2-9.5 6.7-1.5 13.4-3 20-4.7l8.5-2.1 10.3-2.8c3.5-1 7-2 10.5-3.2l10.9-3.5 27.4-9-7.8 24.1c-2.7 8-5.4 16-7.6 23.7l-3.2 11.4-2.2 9-2.7 11c-3.6 14.8-7 29.6-10.7 44.2a527.3 527.3 0 0 1-12.6 42.7A344 344 0 0 1 771 528l-2.5 5.8-3.7 8.1a436 436 0 0 1-3.8 8c-1.2 2.6-2.4 5.3-3.7 7.7-7.4-1.8-14.8-3.7-21.7-5.1a10364.7 10364.7 0 0 1-12.8-2.5 196 196 0 0 0-62.4-.4 246 246 0 0 0-65.3 19.5c-17.6 7.9-31 15.4-40.1 20.8l-6 3.5-4.3 2.7-3.5 2.2 3-2.8 3.7-3.5 5.3-4.6a293 293 0 0 1 65.9-43.7 251 251 0 0 1 37-14 202.2 202.2 0 0 1 79.4-6.1h1l.5.1h2.7c.2-.2.3-.8.4-1l.2-1.2.2-1v-.3l.4-1 .8-2.3c2-6.2 4-12.4 5.7-19 3.5-12.9 6.6-26.5 9.5-40.7 3-14.3 5.7-29 8.9-44.4l2.5-11.6.6-2.4-.1-.1h-.7l-1.3.4-20.9 4.6c-13.7 2.8-27 5.4-39.8 8.2a421.4 421.4 0 0 0-71.2 20.6 193.8 193.8 0 0 0-55.4 33.6 173.4 173.4 0 0 0-34.9 45 262.6 262.6 0 0 0-19 45 346.2 346.2 0 0 0-12 50l-1.6 10.1-1.2 8.4-.5-8.5-.2-10.2v-6.6c0-2.3 0-4.8.2-7.4a300 300 0 0 1 3.7-38.5c2.4-15 6.3-32 13.4-50.3a182.6 182.6 0 0 1 33.8-55.4 204 204 0 0 1 60.4-44.3c23.5-11.8 49.5-20 76.1-26.9Zm-348 305a231.9 231.9 0 0 1-83.5-35.2 200.1 200.1 0 0 1-40.8-37.3l-2.7-3.2a2136.5 2136.5 0 0 0-5.1-6.3l-.2-.2-.3.2-.6.3-1.2.6a65.1 65.1 0 0 0-6.7 3.5c-5.7 2.9-11.4 6-17 9.3a570 570 0 0 0-35.2 22.4c-12 8.2-24.4 17-37.6 26a9462 9462 0 0 1-5 3.5l-2.5 1.7-1.2.8-.3.3a1275 1275 0 0 0-6.2 4.9c2.9 1 5.2 2 7.1 2.8l.7.3 3.6 2.1 7.6 4.5 15.2 9.2a726.5 726.5 0 0 0 61.6 34.9c10.6 5 21.5 9.6 32.5 13.3l8.3 2.6 8.4 2.3 8.4 1.8 4.2.7 4.3.7a150.6 150.6 0 0 0 68.2-6 247 247 0 0 0 54.6-26.3c17.5-11 34.4-23.3 51.3-35.8l12.7-9.4 12.9-9.3c4.2-3.1 8.6-6.1 12.9-9.1l13-8.8c17.3-11.5 35-22.1 52.8-31.5 17.9-9.3 36-17.4 54.2-23.8a309.3 309.3 0 0 1 54.5-14 267.7 267.7 0 0 1 100.5 3.1c30 6.8 55.3 18.5 75.8 30.5 10.3 6 19.5 12 27.8 17.8l4.4 3.1a385.2 385.2 0 1 0-741.4-4.2c7.3-4.3 14.6-8.6 21.8-12.6 13-7.4 26-14.3 38.7-20.2a343 343 0 0 1 19.1-8.2c4.7-2 9.1-3.5 13.5-5.1a335 335 0 0 1 6.5-2.3l3.2-1 1.6-.6.8-.3h.7l7.8 13 3.8 6 3.1 4.6a211.6 211.6 0 0 0 34 38.4c15.6 13.7 31.3 23 44.5 30a298 298 0 0 0 31.3 13.8l8.4 3 3 1-3-.5-8.9-1.8Z",
              transform: "translate(-36.4 -136.4)"
            }),
            createVNode("path", {
              fill: "#00b4e2",
              "fill-rule": "nonzero",
              d: "M887.9 631.4a867.4 867.4 0 0 0-40.5-32.8 520.3 520.3 0 0 0-28.5-16.4c-7-3.6-14.3-7.3-22-10.6-3.9-1.8-8-3.3-12-5l-6.2-2.3a245.6 245.6 0 0 0-62.5-14c-20-1.8-41.3-1.4-62.9 1.8l-8.1 1.4c-2.7.4-5.4 1-8.2 1.6-2.7.5-5.4 1.3-8.1 1.9-2.8.7-5.5 1.2-8.2 2l-8.3 2.4c-2.7.7-5.4 1.7-8.2 2.6-5.5 1.6-11 3.7-16.4 5.7-11 4.3-21.7 8.7-32 13.7-5.3 2.4-10.3 5-15.4 7.5-5 2.7-10 5.2-15 8a920.3 920.3 0 0 0-55.6 33.5c-17.5 11.2-34 22.5-50.1 32.4-16 10-31.6 18.6-46.3 25.4a252.7 252.7 0 0 1-41 15c-6.3 1.4-12 2.9-17.5 3.6l-4 .6-2 .3-1.8.2-7.1.6-3.3.3H288c-3.4.2-6.3-.1-8.7-.3l-7-.5 7-.5c2.4-.2 5.2-.3 8.6-.9l5.4-.7 3-.5 3.2-.6 6.8-1.5 1.8-.4 1.8-.5 3.8-1.1c5.1-1.3 10.5-3.4 16.4-5.4a269.9 269.9 0 0 0 37.7-18.5 506.6 506.6 0 0 0 42.7-28.3c15-10.8 30.6-23.1 47.8-35.6 17.1-12.4 35.6-25 55.7-36.7 5-3 10.2-5.8 15.4-8.7 5.2-2.8 10.5-5.7 16-8.3a393.1 393.1 0 0 1 33.8-14.7 315 315 0 0 1 71-18 272 272 0 0 1 70.2 0c10.8 1.6 21 1.6 30.6 3.7 8.2 1.9 19.4 3.3 37 8.6 20.7 6.3 41 16.6 45.9 19a330.8 330.8 0 0 1 32.4 19.4l11 7.2-9.8-8.8c-6.5-5.7-16-14.2-28.7-24.8-5.3-4.4-11.1-9-17.5-14l-12.9-7.7c-8.5-5-18-10.2-28.2-15.2a290 290 0 0 0-33.6-14A248.8 248.8 0 0 0 617 494a286 286 0 0 0-48.6 14.1 409 409 0 0 0-49.2 23c-16.4 8.8-32.8 19-49.3 30l-12.3 8.3-12.5 8.7-12.5 9-12.7 9.2a711.2 711.2 0 0 1-55 37 277.7 277.7 0 0 1-65.7 29 196 196 0 0 1-44.5 7.3c-15.2.4-30-1-44.3-3.8l-5.3-1.1c-1.8-.4-3.6-.7-5.3-1.3l-10.4-2.8-10-3.4c-3.4-1.2-6.6-2.6-9.8-3.8a312 312 0 0 1-36.4-18 662.2 662.2 0 0 1-62.3-42L56.8 583l-7-5-3.6-2.7-6.5-4.5a299 299 0 0 0-13.2-8.6l-13.7-8.1L0 546.6c8.9 5.2 69.1 56.5 73.9 60 19 14 38.8 30.3 59 47.2 12.2 10.1 123.2 114 228.1 91.7C443.3 728 472 672 584.6 617.8c26-12.5 45.4-22.7 77.3-27.2l35.6-4.8c24.3-3.1 45.3-1 52.3-1 21.3.2 64.5 11.8 73 14.8a202.4 202.4 0 0 1 35.7 17.2c10.8 6.4 19.7 12.7 27.1 17.6l23 15.3s-7.3-6.6-20.7-18.3Z"
            }),
            createVNode("defs", null, [
              createVNode("linearGradient", {
                id: "a",
                x1: "0",
                x2: "1",
                y1: "0",
                y2: "0",
                gradientTransform: "matrix(227 368 -292 181 262.4 229)",
                gradientUnits: "userSpaceOnUse"
              }, [
                createVNode("stop", {
                  offset: "0",
                  "stop-color": "#c53030"
                }),
                createVNode("stop", {
                  offset: ".4",
                  "stop-color": "#d14b32"
                }),
                createVNode("stop", {
                  offset: "1",
                  "stop-color": "#ed8936"
                })
              ])
            ])
          ], 16))
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Shared/AuthenticationCardLogo.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const __unplugin_components_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$r = {
  __name: "PrivacyPolicy",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GuestLayout = _sfc_main$J;
      const _component_Head = resolveComponent("Head");
      const _component_AuthenticationCardLogo = __unplugin_components_1$1;
      _push(ssrRenderComponent(_component_GuestLayout, _attrs, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Head, {
              title: _ctx.__("Privacy Policy")
            }, null, _parent2, _scopeId));
            _push2(`<div class="font-sans antialiased"${_scopeId}><div class="pt-4"${_scopeId}><div class="flex min-h-screen flex-col items-center pt-6 sm:pt-0"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AuthenticationCardLogo, { class: "h-auto w-24" }, null, _parent2, _scopeId));
            _push2(`</div><div class="docs docs-slate dark:docs-invert docs-headings:font-normal mt-6 w-full overflow-hidden bg-white p-6 shadow-md dark:bg-gray-800 sm:max-w-2xl sm:rounded-lg"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$u), null, null, _parent2, _scopeId));
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode(_component_Head, {
                title: _ctx.__("Privacy Policy")
              }, null, 8, ["title"]),
              createVNode("div", { class: "font-sans antialiased" }, [
                createVNode("div", { class: "pt-4" }, [
                  createVNode("div", { class: "flex min-h-screen flex-col items-center pt-6 sm:pt-0" }, [
                    createVNode("div", null, [
                      createVNode(_component_AuthenticationCardLogo, { class: "h-auto w-24" })
                    ]),
                    createVNode("div", { class: "docs docs-slate dark:docs-invert docs-headings:font-normal mt-6 w-full overflow-hidden bg-white p-6 shadow-md dark:bg-gray-800 sm:max-w-2xl sm:rounded-lg" }, [
                      createVNode(unref(_sfc_main$u))
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/PrivacyPolicy.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const __vite_glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$r
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$q = {
  __name: "UpdateProfileInformationForm",
  __ssrInlineRender: true,
  props: ["user"],
  setup(__props, { expose: __expose }) {
    const props = __props;
    const photo = ref(null);
    const form = useForm({
      _method: "PUT",
      name: props.user.name,
      email: props.user.email,
      photo: null
    });
    const photoPreview = ref(null);
    const updateProfileInformation = () => {
      if (photo.value) {
        form.photo = photo.value.files[0];
      }
      form.post(useRoutes("user-profile-information.update"), {
        errorBag: "updateProfileInformation",
        preserveScroll: true,
        onSuccess: () => clearPhotoFileInput()
      });
    };
    const selectNewPhoto = () => {
      photo.value.click();
    };
    const updatePhotoPreview = () => {
      const image = photo.value.files[0];
      if (!image)
        return;
      const reader = new FileReader();
      reader.onload = (e2) => {
        photoPreview.value = e2.target.result;
      };
      reader.readAsDataURL(image);
    };
    const deletePhoto = () => {
      router.delete(useRoutes("current-user-photo.destroy"), {
        preserveScroll: true,
        onSuccess: () => {
          photoPreview.value = null;
          clearPhotoFileInput();
        }
      });
    };
    const clearPhotoFileInput = () => {
      if (photo == null ? void 0 : photo.value) {
        photo.value = null;
      }
    };
    __expose({ photo, photoPreview });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormSection = _sfc_main$1d;
      const _component_Label = _sfc_main$1e;
      const _component_SecondaryButton = _sfc_main$1o;
      const _component_InputError = _sfc_main$1g;
      const _component_Input = _sfc_main$1f;
      const _component_ActionMessage = _sfc_main$1i;
      const _component_Button = _sfc_main$1j;
      _push(ssrRenderComponent(_component_FormSection, mergeProps({ onSubmitted: updateProfileInformation }, _attrs), {
        title: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.__("Profile Information"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.__("Profile Information")), 1)
            ];
          }
        }),
        description: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.__("Update your account's profile information and email address."))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.__("Update your account's profile information and email address.")), 1)
            ];
          }
        }),
        form: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.$page.props.serenity.managesProfilePhotos) {
              _push2(`<div class="col-span-6 sm:col-span-4"${_scopeId}><input type="file" class="hidden"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Label, {
                for: "photo",
                value: _ctx.__("Photo")
              }, null, _parent2, _scopeId));
              _push2(`<div class="mt-2" style="${ssrRenderStyle(!unref(photoPreview) ? null : { display: "none" })}"${_scopeId}><img${ssrRenderAttr("src", props.user.profile_photo_url)}${ssrRenderAttr("alt", __props.user.name)} class="object-cover w-20 h-20 rounded-full"${_scopeId}></div><div class="mt-2" style="${ssrRenderStyle(unref(photoPreview) ? null : { display: "none" })}"${_scopeId}><span class="block w-20 h-20 bg-center bg-no-repeat bg-cover rounded-full" style="${ssrRenderStyle("background-image: url('" + unref(photoPreview) + "');")}"${_scopeId}></span></div>`);
              _push2(ssrRenderComponent(_component_SecondaryButton, {
                class: "mt-2 mr-2",
                type: "button",
                onClick: selectNewPhoto
              }, {
                default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.__("Select A New Photo"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.__("Select A New Photo")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              if (props.user.profile_photo_path) {
                _push2(ssrRenderComponent(_component_SecondaryButton, {
                  type: "button",
                  class: "mt-2",
                  onClick: deletePhoto
                }, {
                  default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(_ctx.__("Remove Photo"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(_ctx.__("Remove Photo")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_component_InputError, {
                message: unref(form).errors.photo,
                class: "mt-2"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Label, {
              for: "name",
              value: _ctx.__("Name"),
              req: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Input, {
              id: "name",
              type: "text",
              class: "block w-full mt-1",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              autocomplete: "name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputError, {
              message: unref(form).errors.name,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Label, {
              for: "email",
              value: _ctx.__("Email"),
              req: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Input, {
              id: "email",
              type: "email",
              class: "block w-full mt-1",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputError, {
              message: unref(form).errors.email,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              _ctx.$page.props.serenity.managesProfilePhotos ? (openBlock(), createBlock("div", {
                key: 0,
                class: "col-span-6 sm:col-span-4"
              }, [
                createVNode("input", {
                  type: "file",
                  class: "hidden",
                  ref_key: "photo",
                  ref: photo,
                  onChange: updatePhotoPreview
                }, null, 544),
                createVNode(_component_Label, {
                  for: "photo",
                  value: _ctx.__("Photo")
                }, null, 8, ["value"]),
                withDirectives(createVNode("div", { class: "mt-2" }, [
                  createVNode("img", {
                    src: props.user.profile_photo_url,
                    alt: __props.user.name,
                    class: "object-cover w-20 h-20 rounded-full"
                  }, null, 8, ["src", "alt"])
                ], 512), [
                  [vShow, !unref(photoPreview)]
                ]),
                withDirectives(createVNode("div", { class: "mt-2" }, [
                  createVNode("span", {
                    class: "block w-20 h-20 bg-center bg-no-repeat bg-cover rounded-full",
                    style: "background-image: url('" + unref(photoPreview) + "');"
                  }, null, 4)
                ], 512), [
                  [vShow, unref(photoPreview)]
                ]),
                createVNode(_component_SecondaryButton, {
                  class: "mt-2 mr-2",
                  type: "button",
                  onClick: withModifiers(selectNewPhoto, ["prevent"])
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.__("Select A New Photo")), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                props.user.profile_photo_path ? (openBlock(), createBlock(_component_SecondaryButton, {
                  key: 0,
                  type: "button",
                  class: "mt-2",
                  onClick: withModifiers(deletePhoto, ["prevent"])
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.__("Remove Photo")), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])) : createCommentVNode("", true),
                createVNode(_component_InputError, {
                  message: unref(form).errors.photo,
                  class: "mt-2"
                }, null, 8, ["message"])
              ])) : createCommentVNode("", true),
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode(_component_Label, {
                  for: "name",
                  value: _ctx.__("Name"),
                  req: ""
                }, null, 8, ["value"]),
                createVNode(_component_Input, {
                  id: "name",
                  type: "text",
                  class: "block w-full mt-1",
                  modelValue: unref(form).name,
                  "onUpdate:modelValue": ($event) => unref(form).name = $event,
                  autocomplete: "name"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_InputError, {
                  message: unref(form).errors.name,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode(_component_Label, {
                  for: "email",
                  value: _ctx.__("Email"),
                  req: ""
                }, null, 8, ["value"]),
                createVNode(_component_Input, {
                  id: "email",
                  type: "email",
                  class: "block w-full mt-1",
                  modelValue: unref(form).email,
                  "onUpdate:modelValue": ($event) => unref(form).email = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_InputError, {
                  message: unref(form).errors.email,
                  class: "mt-2"
                }, null, 8, ["message"])
              ])
            ];
          }
        }),
        actions: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ActionMessage, {
              on: unref(form).recentlySuccessful,
              class: "mr-3"
            }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.__("Success"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.__("Success")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.__("Save"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.__("Save")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ActionMessage, {
                on: unref(form).recentlySuccessful,
                class: "mr-3"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.__("Success")), 1)
                ]),
                _: 1
              }, 8, ["on"]),
              createVNode(_component_Button, {
                class: { "opacity-25": unref(form).processing },
                disabled: unref(form).processing
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.__("Save")), 1)
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Partials/Profile/UpdateProfileInformationForm.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const _sfc_main$p = {
  __name: "Show",
  __ssrInlineRender: true,
  props: ["sessions"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MainLayout = _sfc_main$Q;
      const _component_UpdateProfileInformationForm = _sfc_main$q;
      _push(ssrRenderComponent(_component_MainLayout, mergeProps({
        title: _ctx.__("Profile")
      }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-10 mx-auto max-w-7xl sm:px-6 lg:px-8"${_scopeId}>`);
            if (_ctx.$page.props.serenity.canUpdateProfileInformation) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UpdateProfileInformationForm, {
                user: _ctx.$page.props.user
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "py-10 mx-auto max-w-7xl sm:px-6 lg:px-8" }, [
                _ctx.$page.props.serenity.canUpdateProfileInformation ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode(_component_UpdateProfileInformationForm, {
                    user: _ctx.$page.props.user
                  }, null, 8, ["user"])
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Profile/Show.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const __vite_glob_0_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$p
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$o = {
  __name: "DeleteUserForm",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const confirmingUserDeletion = ref(false);
    const password = ref();
    const form = useForm({
      password: ""
    });
    const confirmUserDeletion = () => {
      confirmingUserDeletion.value = true;
      setTimeout(() => password.value.input.focus(), 250);
    };
    const deleteUser = () => {
      form.delete(useRoutes("current-user.destroy"), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => password.value.input.focus(),
        onFinish: () => form.reset()
      });
    };
    const closeModal = () => {
      confirmingUserDeletion.value = false;
      form.reset();
    };
    __expose({ password });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ActionSection = __unplugin_components_8$1;
      const _component_DangerButton = _sfc_main$1r;
      const _component_DialogModal = _sfc_main$1n;
      const _component_Input = _sfc_main$1f;
      const _component_InputError = _sfc_main$1g;
      const _component_SecondaryButton = _sfc_main$1o;
      _push(ssrRenderComponent(_component_ActionSection, _attrs, {
        title: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.__("Delete Account"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.__("Delete Account")), 1)
            ];
          }
        }),
        description: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.__("Permanently delete your account."))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.__("Permanently delete your account.")), 1)
            ];
          }
        }),
        content: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-xl text-sm text-gray-600"${_scopeId}>${ssrInterpolate(_ctx.__(
              "Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."
            ))}</div><div class="mt-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_DangerButton, { onClick: confirmUserDeletion }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.__("Delete Account"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.__("Delete Account")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_DialogModal, {
              show: unref(confirmingUserDeletion),
              onClose: closeModal
            }, {
              title: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.__("Delete Account"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.__("Delete Account")), 1)
                  ];
                }
              }),
              content: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.__(
                    "Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."
                  ))} <div class="mt-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Input, {
                    type: "password",
                    class: "mt-1 block w-3/4",
                    placeholder: _ctx.__("Password"),
                    ref_key: "password",
                    ref: password,
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    onKeyup: deleteUser
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_InputError, {
                    message: unref(form).errors.password,
                    class: "mt-2"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.__(
                      "Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."
                    )) + " ", 1),
                    createVNode("div", { class: "mt-4" }, [
                      createVNode(_component_Input, {
                        type: "password",
                        class: "mt-1 block w-3/4",
                        placeholder: _ctx.__("Password"),
                        ref_key: "password",
                        ref: password,
                        modelValue: unref(form).password,
                        "onUpdate:modelValue": ($event) => unref(form).password = $event,
                        onKeyup: withKeys(deleteUser, ["enter"])
                      }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "onKeyup"]),
                      createVNode(_component_InputError, {
                        message: unref(form).errors.password,
                        class: "mt-2"
                      }, null, 8, ["message"])
                    ])
                  ];
                }
              }),
              footer: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SecondaryButton, { onClick: closeModal }, {
                    default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.__("Cancel"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.__("Cancel")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_DangerButton, {
                    class: ["ml-2", { "opacity-25": unref(form).processing }],
                    onClick: deleteUser,
                    disabled: unref(form).processing
                  }, {
                    default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.__("Delete Account"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.__("Delete Account")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SecondaryButton, { onClick: closeModal }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.__("Cancel")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_DangerButton, {
                      class: ["ml-2", { "opacity-25": unref(form).processing }],
                      onClick: deleteUser,
                      disabled: unref(form).processing
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.__("Delete Account")), 1)
                      ]),
                      _: 1
                    }, 8, ["class", "disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "max-w-xl text-sm text-gray-600" }, toDisplayString(_ctx.__(
                "Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."
              )), 1),
              createVNode("div", { class: "mt-5" }, [
                createVNode(_component_DangerButton, { onClick: confirmUserDeletion }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.__("Delete Account")), 1)
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_DialogModal, {
                show: unref(confirmingUserDeletion),
                onClose: closeModal
              }, {
                title: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.__("Delete Account")), 1)
                ]),
                content: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.__(
                    "Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."
                  )) + " ", 1),
                  createVNode("div", { class: "mt-4" }, [
                    createVNode(_component_Input, {
                      type: "password",
                      class: "mt-1 block w-3/4",
                      placeholder: _ctx.__("Password"),
                      ref_key: "password",
                      ref: password,
                      modelValue: unref(form).password,
                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                      onKeyup: withKeys(deleteUser, ["enter"])
                    }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "onKeyup"]),
                    createVNode(_component_InputError, {
                      message: unref(form).errors.password,
                      class: "mt-2"
                    }, null, 8, ["message"])
                  ])
                ]),
                footer: withCtx(() => [
                  createVNode(_component_SecondaryButton, { onClick: closeModal }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.__("Cancel")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_DangerButton, {
                    class: ["ml-2", { "opacity-25": unref(form).processing }],
                    onClick: deleteUser,
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.__("Delete Account")), 1)
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ]),
                _: 1
              }, 8, ["show"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Partials/Account/DeleteUserForm.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const _hoisted_1$3 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M12 18h.01M8 21h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$3);
}
const __unplugin_components_2$1 = { name: "heroicons-outline-device-mobile", render: render$3 };
const _hoisted_1$2 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M9.75 17L9 20l-1 1h8l-1-1l-.75-3M3 13h18M5 17h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$2);
}
const __unplugin_components_1 = { name: "heroicons-outline-desktop-computer", render: render$2 };
const _sfc_main$n = {
  __name: "LogoutOtherBrowserSessionsForm",
  __ssrInlineRender: true,
  props: ["sessions"],
  setup(__props, { expose: __expose }) {
    const props = __props;
    const confirmingLogout = ref(false);
    const password = ref();
    const form = useForm({
      password: ""
    });
    const confirmLogout = () => {
      confirmingLogout.value = true;
      setTimeout(() => password.value.input.focus(), 250);
    };
    const logoutOtherBrowserSessions = () => {
      form.delete(useRoutes("other-browser-sessions.destroy"), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => password.value.input.focus(),
        onFinish: () => form.reset()
      });
    };
    const closeModal = () => {
      confirmingLogout.value = false;
      form.reset();
    };
    __expose({ password });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ActionSection = __unplugin_components_8$1;
      const _component_IconOutlineDesktopComputer = __unplugin_components_1;
      const _component_IconOutlineDeviceMobile = __unplugin_components_2$1;
      const _component_Button = _sfc_main$1j;
      const _component_ActionMessage = _sfc_main$1i;
      const _component_DialogModal = _sfc_main$1n;
      const _component_Input = _sfc_main$1f;
      const _component_InputError = _sfc_main$1g;
      const _component_SecondaryButton = _sfc_main$1o;
      _push(ssrRenderComponent(_component_ActionSection, _attrs, {
        title: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.__("Browser Sessions"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.__("Browser Sessions")), 1)
            ];
          }
        }),
        description: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.__("Manage and log out your active sessions on other browsers and devices."))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.__("Manage and log out your active sessions on other browsers and devices.")), 1)
            ];
          }
        }),
        content: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-xl text-sm text-gray-600"${_scopeId}>${ssrInterpolate(_ctx.__(
              "If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password."
            ))}</div>`);
            if (props.sessions.length > 0) {
              _push2(`<div class="mt-5 space-y-6"${_scopeId}><!--[-->`);
              ssrRenderList(props.sessions, (session, i2) => {
                _push2(`<div class="flex items-center"${_scopeId}><div${_scopeId}>`);
                if (session.agent.is_desktop) {
                  _push2(ssrRenderComponent(_component_IconOutlineDesktopComputer, { class: "h-8 w-8 text-gray-500" }, null, _parent2, _scopeId));
                } else {
                  _push2(ssrRenderComponent(_component_IconOutlineDeviceMobile, { class: "h-8 w-8 text-gray-500" }, null, _parent2, _scopeId));
                }
                _push2(`</div><div class="ml-3"${_scopeId}><div class="text-sm text-gray-600"${_scopeId}>${ssrInterpolate(session.agent.platform)} - ${ssrInterpolate(session.agent.browser)}</div><div${_scopeId}><div class="text-xs text-gray-500"${_scopeId}>${ssrInterpolate(session.ip_address)}, `);
                if (session.is_current_device) {
                  _push2(`<span class="font-semibold text-green-500"${_scopeId}>${ssrInterpolate(_ctx.__("This device"))}</span>`);
                } else {
                  _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.__("Last active"))} ${ssrInterpolate(session.last_active)}</span>`);
                }
                _push2(`</div></div></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="mt-5 flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Button, { onClick: confirmLogout }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.__("Log Out Other Browser Sessions"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.__("Log Out Other Browser Sessions")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ActionMessage, {
              on: unref(form).recentlySuccessful,
              class: "ml-3"
            }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.__("Done."))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.__("Done.")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_DialogModal, {
              show: unref(confirmingLogout),
              onClose: closeModal
            }, {
              title: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.__("Log Out Other Browser Sessions"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.__("Log Out Other Browser Sessions")), 1)
                  ];
                }
              }),
              content: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.__(
                    "Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices."
                  ))} <div class="mt-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Input, {
                    type: "password",
                    class: "mt-1 block w-3/4",
                    placeholder: "Password",
                    ref_key: "password",
                    ref: password,
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    onKeyup: logoutOtherBrowserSessions
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_InputError, {
                    message: unref(form).errors.password,
                    class: "mt-2"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.__(
                      "Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices."
                    )) + " ", 1),
                    createVNode("div", { class: "mt-4" }, [
                      createVNode(_component_Input, {
                        type: "password",
                        class: "mt-1 block w-3/4",
                        placeholder: "Password",
                        ref_key: "password",
                        ref: password,
                        modelValue: unref(form).password,
                        "onUpdate:modelValue": ($event) => unref(form).password = $event,
                        onKeyup: withKeys(logoutOtherBrowserSessions, ["enter"])
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"]),
                      createVNode(_component_InputError, {
                        message: unref(form).errors.password,
                        class: "mt-2"
                      }, null, 8, ["message"])
                    ])
                  ];
                }
              }),
              footer: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SecondaryButton, { onClick: closeModal }, {
                    default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.__("Cancel"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.__("Cancel")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Button, {
                    class: ["ml-2", { "opacity-25": unref(form).processing }],
                    onClick: logoutOtherBrowserSessions,
                    disabled: unref(form).processing
                  }, {
                    default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.__("Log Out Other Browser Sessions"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.__("Log Out Other Browser Sessions")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SecondaryButton, { onClick: closeModal }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.__("Cancel")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Button, {
                      class: ["ml-2", { "opacity-25": unref(form).processing }],
                      onClick: logoutOtherBrowserSessions,
                      disabled: unref(form).processing
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.__("Log Out Other Browser Sessions")), 1)
                      ]),
                      _: 1
                    }, 8, ["class", "disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "max-w-xl text-sm text-gray-600" }, toDisplayString(_ctx.__(
                "If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password."
              )), 1),
              props.sessions.length > 0 ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mt-5 space-y-6"
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(props.sessions, (session, i2) => {
                  return openBlock(), createBlock("div", {
                    class: "flex items-center",
                    key: i2
                  }, [
                    createVNode("div", null, [
                      session.agent.is_desktop ? (openBlock(), createBlock(_component_IconOutlineDesktopComputer, {
                        key: 0,
                        class: "h-8 w-8 text-gray-500"
                      })) : (openBlock(), createBlock(_component_IconOutlineDeviceMobile, {
                        key: 1,
                        class: "h-8 w-8 text-gray-500"
                      }))
                    ]),
                    createVNode("div", { class: "ml-3" }, [
                      createVNode("div", { class: "text-sm text-gray-600" }, toDisplayString(session.agent.platform) + " - " + toDisplayString(session.agent.browser), 1),
                      createVNode("div", null, [
                        createVNode("div", { class: "text-xs text-gray-500" }, [
                          createTextVNode(toDisplayString(session.ip_address) + ", ", 1),
                          session.is_current_device ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "font-semibold text-green-500"
                          }, toDisplayString(_ctx.__("This device")), 1)) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(_ctx.__("Last active")) + " " + toDisplayString(session.last_active), 1))
                        ])
                      ])
                    ])
                  ]);
                }), 128))
              ])) : createCommentVNode("", true),
              createVNode("div", { class: "mt-5 flex items-center" }, [
                createVNode(_component_Button, { onClick: confirmLogout }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.__("Log Out Other Browser Sessions")), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_ActionMessage, {
                  on: unref(form).recentlySuccessful,
                  class: "ml-3"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.__("Done.")), 1)
                  ]),
                  _: 1
                }, 8, ["on"])
              ]),
              createVNode(_component_DialogModal, {
                show: unref(confirmingLogout),
                onClose: closeModal
              }, {
                title: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.__("Log Out Other Browser Sessions")), 1)
                ]),
                content: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.__(
                    "Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices."
                  )) + " ", 1),
                  createVNode("div", { class: "mt-4" }, [
                    createVNode(_component_Input, {
                      type: "password",
                      class: "mt-1 block w-3/4",
                      placeholder: "Password",
                      ref_key: "password",
                      ref: password,
                      modelValue: unref(form).password,
                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                      onKeyup: withKeys(logoutOtherBrowserSessions, ["enter"])
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"]),
                    createVNode(_component_InputError, {
                      message: unref(form).errors.password,
                      class: "mt-2"
                    }, null, 8, ["message"])
                  ])
                ]),
                footer: withCtx(() => [
                  createVNode(_component_SecondaryButton, { onClick: closeModal }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.__("Cancel")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Button, {
                    class: ["ml-2", { "opacity-25": unref(form).processing }],
                    onClick: logoutOtherBrowserSessions,
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.__("Log Out Other Browser Sessions")), 1)
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ]),
                _: 1
              }, 8, ["show"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Partials/Account/LogoutOtherBrowserSessionsForm.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const _sfc_main$m = {
  __name: "ConfirmsPassword",
  __ssrInlineRender: true,
  props: {
    title: {
      default: "Confirm Password"
    },
    content: {
      default: "For your security, please confirm your password to continue."
    },
    button: {
      default: "Confirm"
    }
  },
  emits: ["confirmed"],
  setup(__props, { expose: __expose, emit }) {
    const props = __props;
    const confirmingPassword = ref(false);
    const password = ref();
    const { title: title2, content, button } = toRefs(props);
    const form = useForm({
      password: "",
      error: ""
    });
    const confirmPassword = () => {
      form.processing = true;
      axios.post(useRoutes("password.confirm"), {
        password: form.password
      }).then(() => {
        form.processing = false;
        closeModal();
        nextTick(() => emit("confirmed"));
      }).catch((error) => {
        form.processing = false;
        form.error = error.response.data.errors.password[0];
        password.value.input.focus();
      });
    };
    const closeModal = () => {
      confirmingPassword.value = false;
      form.password = "";
      form.error = "";
    };
    __expose({ password });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogModal = _sfc_main$1n;
      const _component_Input = _sfc_main$1f;
      const _component_InputError = _sfc_main$1g;
      const _component_SecondaryButton = _sfc_main$1o;
      const _component_Button = _sfc_main$1j;
      _push(`<span${ssrRenderAttrs(_attrs)}><span>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span>`);
      _push(ssrRenderComponent(_component_DialogModal, {
        show: unref(confirmingPassword),
        onClose: closeModal
      }, {
        title: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(title2))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(title2)), 1)
            ];
          }
        }),
        content: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(content))} <div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Input, {
              type: "password",
              class: "mt-1 block w-3/4",
              placeholder: "Password",
              ref_key: "password",
              ref: password,
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              onKeyup: confirmPassword
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputError, {
              message: unref(form).error,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(content)) + " ", 1),
              createVNode("div", { class: "mt-4" }, [
                createVNode(_component_Input, {
                  type: "password",
                  class: "mt-1 block w-3/4",
                  placeholder: "Password",
                  ref_key: "password",
                  ref: password,
                  modelValue: unref(form).password,
                  "onUpdate:modelValue": ($event) => unref(form).password = $event,
                  onKeyup: withKeys(confirmPassword, ["enter"])
                }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"]),
                createVNode(_component_InputError, {
                  message: unref(form).error,
                  class: "mt-2"
                }, null, 8, ["message"])
              ])
            ];
          }
        }),
        footer: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SecondaryButton, { onClick: closeModal }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.__("Cancel"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.__("Cancel")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              class: ["ml-2", { "opacity-25": unref(form).processing }],
              onClick: confirmPassword,
              disabled: unref(form).processing
            }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(button))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(button)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SecondaryButton, { onClick: closeModal }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.__("Cancel")), 1)
                ]),
                _: 1
              }),
              createVNode(_component_Button, {
                class: ["ml-2", { "opacity-25": unref(form).processing }],
                onClick: confirmPassword,
                disabled: unref(form).processing
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(button)), 1)
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span>`);
    };
  }
};
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Shared/ConfirmsPassword.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const _sfc_main$l = {
  __name: "TwoFactorAuthenticationForm",
  __ssrInlineRender: true,
  props: {
    requiresConfirmation: Boolean
  },
  setup(__props) {
    const props = __props;
    const enabling = ref(false);
    const confirming = ref(false);
    const disabling = ref(false);
    const qrCode = ref(null);
    const setupKey = ref(null);
    const recoveryCodes = ref([]);
    const confirmationForm = useForm({
      code: ""
    });
    const twoFactorEnabled = computed(() => {
      var _a;
      return !enabling.value && ((_a = usePage().props.user) == null ? void 0 : _a.two_factor_enabled);
    });
    watch(twoFactorEnabled, () => {
      if (!twoFactorEnabled.value) {
        confirmationForm.reset();
        confirmationForm.clearErrors();
      }
    });
    const enableTwoFactorAuthentication = () => {
      enabling.value = true;
      router.post(
        useRoutes("two-factor.enable"),
        {},
        {
          preserveScroll: true,
          onSuccess: () => Promise.all([showQrCode(), showSetupKey(), showRecoveryCodes()]),
          onFinish: () => {
            enabling.value = false;
            confirming.value = props.requiresConfirmation;
          }
        }
      );
    };
    const showQrCode = () => {
      return axios.get(useRoutes("two-factor.qr-code")).then((response) => {
        qrCode.value = response.data.svg;
      });
    };
    const showSetupKey = () => {
      return axios.get(useRoutes("two-factor.secret-key")).then((response) => {
        setupKey.value = response.data.secretKey;
      });
    };
    const showRecoveryCodes = () => {
      return axios.get(useRoutes("two-factor.recovery-codes")).then((response) => {
        recoveryCodes.value = response.data;
      });
    };
    const confirmTwoFactorAuthentication = () => {
      confirmationForm.post(useRoutes("two-factor.confirm"), {
        errorBag: "confirmTwoFactorAuthentication",
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => {
          confirming.value = false;
          qrCode.value = null;
          setupKey.value = null;
        }
      });
    };
    const regenerateRecoveryCodes = () => {
      axios.post(useRoutes("two-factor.recovery-codes")).then(() => showRecoveryCodes());
    };
    const disableTwoFactorAuthentication = () => {
      disabling.value = true;
      router.delete(useRoutes("two-factor.disable"), {
        preserveScroll: true,
        onSuccess: () => {
          disabling.value = false;
          confirming.value = false;
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ActionSection = __unplugin_components_8$1;
      const _component_Label = _sfc_main$1e;
      const _component_Input = _sfc_main$1f;
      const _component_InputError = _sfc_main$1g;
      const _component_ConfirmsPassword = _sfc_main$m;
      const _component_Button = _sfc_main$1j;
      const _component_SecondaryButton = _sfc_main$1o;
      const _component_DangerButton = _sfc_main$1r;
      _push(ssrRenderComponent(_component_ActionSection, _attrs, {
        title: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Two Factor Authentication `);
          } else {
            return [
              createTextVNode(" Two Factor Authentication ")
            ];
          }
        }),
        description: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Add additional security to your account using two factor authentication. `);
          } else {
            return [
              createTextVNode(" Add additional security to your account using two factor authentication. ")
            ];
          }
        }),
        content: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(twoFactorEnabled) && !unref(confirming)) {
              _push2(`<h3 class="text-lg font-medium text-gray-900 dark:text-gray-100"${_scopeId}> You have enabled two factor authentication. </h3>`);
            } else if (unref(twoFactorEnabled) && unref(confirming)) {
              _push2(`<h3 class="text-lg font-medium text-gray-900 dark:text-gray-100"${_scopeId}> Finish enabling two factor authentication. </h3>`);
            } else {
              _push2(`<h3 class="text-lg font-medium text-gray-900 dark:text-gray-100"${_scopeId}> You have not enabled two factor authentication. </h3>`);
            }
            _push2(`<div class="max-w-xl mt-3 text-sm text-gray-600 dark:text-gray-400"${_scopeId}><p${_scopeId}> When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone&#39;s Google Authenticator application. </p></div>`);
            if (unref(twoFactorEnabled)) {
              _push2(`<div${_scopeId}>`);
              if (unref(qrCode)) {
                _push2(`<div${_scopeId}><div class="max-w-xl mt-4 text-sm text-gray-600 dark:text-gray-400"${_scopeId}>`);
                if (unref(confirming)) {
                  _push2(`<p class="font-semibold"${_scopeId}> To finish enabling two factor authentication, scan the following QR code using your phone&#39;s authenticator application or enter the setup key and provide the generated OTP code. </p>`);
                } else {
                  _push2(`<p${_scopeId}> Two factor authentication is now enabled. Scan the following QR code using your phone&#39;s authenticator application or enter the setup key. </p>`);
                }
                _push2(`</div><div class="mt-4"${_scopeId}>${unref(qrCode)}</div>`);
                if (unref(setupKey)) {
                  _push2(`<div class="max-w-xl mt-4 text-sm text-gray-600 dark:text-gray-400"${_scopeId}><p class="font-semibold"${_scopeId}>Setup Key: <span${_scopeId}>${unref(setupKey)}</span></p></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (unref(confirming)) {
                  _push2(`<div class="mt-4"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_Label, {
                    for: "code",
                    value: "Code"
                  }, null, _parent2, _scopeId));
                  _push2(ssrRenderComponent(_component_Input, {
                    id: "code",
                    modelValue: unref(confirmationForm).code,
                    "onUpdate:modelValue": ($event) => unref(confirmationForm).code = $event,
                    type: "text",
                    name: "code",
                    class: "block w-1/2 mt-1",
                    inputmode: "numeric",
                    autofocus: "",
                    autocomplete: "one-time-code",
                    onKeyup: confirmTwoFactorAuthentication
                  }, null, _parent2, _scopeId));
                  _push2(ssrRenderComponent(_component_InputError, {
                    message: unref(confirmationForm).errors.code,
                    class: "mt-2"
                  }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(recoveryCodes).length > 0 && !unref(confirming)) {
                _push2(`<div${_scopeId}><div class="max-w-xl mt-4 text-sm text-gray-600 dark:text-gray-400"${_scopeId}><p class="font-semibold"${_scopeId}> Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost. </p></div><div class="grid max-w-xl gap-1 px-4 py-4 mt-4 font-mono text-sm bg-gray-100 rounded-lg dark:bg-gray-900"${_scopeId}><!--[-->`);
                ssrRenderList(unref(recoveryCodes), (code) => {
                  _push2(`<div${_scopeId}>${ssrInterpolate(code)}</div>`);
                });
                _push2(`<!--]--></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="mt-5"${_scopeId}>`);
            if (!unref(twoFactorEnabled)) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_ConfirmsPassword, { onConfirmed: enableTwoFactorAuthentication }, {
                default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Button, {
                      type: "button",
                      class: { "opacity-25": unref(enabling) },
                      disabled: unref(enabling)
                    }, {
                      default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Enable `);
                        } else {
                          return [
                            createTextVNode(" Enable ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Button, {
                        type: "button",
                        class: { "opacity-25": unref(enabling) },
                        disabled: unref(enabling)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Enable ")
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_ConfirmsPassword, { onConfirmed: confirmTwoFactorAuthentication }, {
                default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (unref(confirming)) {
                      _push3(ssrRenderComponent(_component_Button, {
                        type: "button",
                        class: ["mr-3", { "opacity-25": unref(enabling) }],
                        disabled: unref(enabling)
                      }, {
                        default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` Confirm `);
                          } else {
                            return [
                              createTextVNode(" Confirm ")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      unref(confirming) ? (openBlock(), createBlock(_component_Button, {
                        key: 0,
                        type: "button",
                        class: ["mr-3", { "opacity-25": unref(enabling) }],
                        disabled: unref(enabling)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Confirm ")
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_ConfirmsPassword, { onConfirmed: regenerateRecoveryCodes }, {
                default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (unref(recoveryCodes).length > 0 && !unref(confirming)) {
                      _push3(ssrRenderComponent(_component_SecondaryButton, { class: "mr-3" }, {
                        default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` Regenerate Recovery Codes `);
                          } else {
                            return [
                              createTextVNode(" Regenerate Recovery Codes ")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      unref(recoveryCodes).length > 0 && !unref(confirming) ? (openBlock(), createBlock(_component_SecondaryButton, {
                        key: 0,
                        class: "mr-3"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Regenerate Recovery Codes ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_ConfirmsPassword, { onConfirmed: showRecoveryCodes }, {
                default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (unref(recoveryCodes).length === 0 && !unref(confirming)) {
                      _push3(ssrRenderComponent(_component_SecondaryButton, { class: "mr-3" }, {
                        default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` Show Recovery Codes `);
                          } else {
                            return [
                              createTextVNode(" Show Recovery Codes ")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      unref(recoveryCodes).length === 0 && !unref(confirming) ? (openBlock(), createBlock(_component_SecondaryButton, {
                        key: 0,
                        class: "mr-3"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Show Recovery Codes ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_ConfirmsPassword, { onConfirmed: disableTwoFactorAuthentication }, {
                default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (unref(confirming)) {
                      _push3(ssrRenderComponent(_component_SecondaryButton, {
                        class: { "opacity-25": unref(disabling) },
                        disabled: unref(disabling)
                      }, {
                        default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` Cancel `);
                          } else {
                            return [
                              createTextVNode(" Cancel ")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      unref(confirming) ? (openBlock(), createBlock(_component_SecondaryButton, {
                        key: 0,
                        class: { "opacity-25": unref(disabling) },
                        disabled: unref(disabling)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Cancel ")
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_ConfirmsPassword, { onConfirmed: disableTwoFactorAuthentication }, {
                default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (!unref(confirming)) {
                      _push3(ssrRenderComponent(_component_DangerButton, {
                        class: { "opacity-25": unref(disabling) },
                        disabled: unref(disabling)
                      }, {
                        default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` Disable `);
                          } else {
                            return [
                              createTextVNode(" Disable ")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      !unref(confirming) ? (openBlock(), createBlock(_component_DangerButton, {
                        key: 0,
                        class: { "opacity-25": unref(disabling) },
                        disabled: unref(disabling)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Disable ")
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              unref(twoFactorEnabled) && !unref(confirming) ? (openBlock(), createBlock("h3", {
                key: 0,
                class: "text-lg font-medium text-gray-900 dark:text-gray-100"
              }, " You have enabled two factor authentication. ")) : unref(twoFactorEnabled) && unref(confirming) ? (openBlock(), createBlock("h3", {
                key: 1,
                class: "text-lg font-medium text-gray-900 dark:text-gray-100"
              }, " Finish enabling two factor authentication. ")) : (openBlock(), createBlock("h3", {
                key: 2,
                class: "text-lg font-medium text-gray-900 dark:text-gray-100"
              }, " You have not enabled two factor authentication. ")),
              createVNode("div", { class: "max-w-xl mt-3 text-sm text-gray-600 dark:text-gray-400" }, [
                createVNode("p", null, " When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application. ")
              ]),
              unref(twoFactorEnabled) ? (openBlock(), createBlock("div", { key: 3 }, [
                unref(qrCode) ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode("div", { class: "max-w-xl mt-4 text-sm text-gray-600 dark:text-gray-400" }, [
                    unref(confirming) ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "font-semibold"
                    }, " To finish enabling two factor authentication, scan the following QR code using your phone's authenticator application or enter the setup key and provide the generated OTP code. ")) : (openBlock(), createBlock("p", { key: 1 }, " Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application or enter the setup key. "))
                  ]),
                  createVNode("div", {
                    class: "mt-4",
                    innerHTML: unref(qrCode)
                  }, null, 8, ["innerHTML"]),
                  unref(setupKey) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "max-w-xl mt-4 text-sm text-gray-600 dark:text-gray-400"
                  }, [
                    createVNode("p", { class: "font-semibold" }, [
                      createTextVNode("Setup Key: "),
                      createVNode("span", { innerHTML: unref(setupKey) }, null, 8, ["innerHTML"])
                    ])
                  ])) : createCommentVNode("", true),
                  unref(confirming) ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "mt-4"
                  }, [
                    createVNode(_component_Label, {
                      for: "code",
                      value: "Code"
                    }),
                    createVNode(_component_Input, {
                      id: "code",
                      modelValue: unref(confirmationForm).code,
                      "onUpdate:modelValue": ($event) => unref(confirmationForm).code = $event,
                      type: "text",
                      name: "code",
                      class: "block w-1/2 mt-1",
                      inputmode: "numeric",
                      autofocus: "",
                      autocomplete: "one-time-code",
                      onKeyup: withKeys(confirmTwoFactorAuthentication, ["enter"])
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"]),
                    createVNode(_component_InputError, {
                      message: unref(confirmationForm).errors.code,
                      class: "mt-2"
                    }, null, 8, ["message"])
                  ])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true),
                unref(recoveryCodes).length > 0 && !unref(confirming) ? (openBlock(), createBlock("div", { key: 1 }, [
                  createVNode("div", { class: "max-w-xl mt-4 text-sm text-gray-600 dark:text-gray-400" }, [
                    createVNode("p", { class: "font-semibold" }, " Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost. ")
                  ]),
                  createVNode("div", { class: "grid max-w-xl gap-1 px-4 py-4 mt-4 font-mono text-sm bg-gray-100 rounded-lg dark:bg-gray-900" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(recoveryCodes), (code) => {
                      return openBlock(), createBlock("div", { key: code }, toDisplayString(code), 1);
                    }), 128))
                  ])
                ])) : createCommentVNode("", true)
              ])) : createCommentVNode("", true),
              createVNode("div", { class: "mt-5" }, [
                !unref(twoFactorEnabled) ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode(_component_ConfirmsPassword, { onConfirmed: enableTwoFactorAuthentication }, {
                    default: withCtx(() => [
                      createVNode(_component_Button, {
                        type: "button",
                        class: { "opacity-25": unref(enabling) },
                        disabled: unref(enabling)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Enable ")
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])
                    ]),
                    _: 1
                  })
                ])) : (openBlock(), createBlock("div", { key: 1 }, [
                  createVNode(_component_ConfirmsPassword, { onConfirmed: confirmTwoFactorAuthentication }, {
                    default: withCtx(() => [
                      unref(confirming) ? (openBlock(), createBlock(_component_Button, {
                        key: 0,
                        type: "button",
                        class: ["mr-3", { "opacity-25": unref(enabling) }],
                        disabled: unref(enabling)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Confirm ")
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ConfirmsPassword, { onConfirmed: regenerateRecoveryCodes }, {
                    default: withCtx(() => [
                      unref(recoveryCodes).length > 0 && !unref(confirming) ? (openBlock(), createBlock(_component_SecondaryButton, {
                        key: 0,
                        class: "mr-3"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Regenerate Recovery Codes ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ConfirmsPassword, { onConfirmed: showRecoveryCodes }, {
                    default: withCtx(() => [
                      unref(recoveryCodes).length === 0 && !unref(confirming) ? (openBlock(), createBlock(_component_SecondaryButton, {
                        key: 0,
                        class: "mr-3"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Show Recovery Codes ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ConfirmsPassword, { onConfirmed: disableTwoFactorAuthentication }, {
                    default: withCtx(() => [
                      unref(confirming) ? (openBlock(), createBlock(_component_SecondaryButton, {
                        key: 0,
                        class: { "opacity-25": unref(disabling) },
                        disabled: unref(disabling)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Cancel ")
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ConfirmsPassword, { onConfirmed: disableTwoFactorAuthentication }, {
                    default: withCtx(() => [
                      !unref(confirming) ? (openBlock(), createBlock(_component_DangerButton, {
                        key: 0,
                        class: { "opacity-25": unref(disabling) },
                        disabled: unref(disabling)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Disable ")
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Partials/Account/TwoFactorAuthenticationForm.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _sfc_main$k = {
  __name: "UpdatePasswordForm",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const current_password = ref();
    const password = ref();
    const form = useForm({
      current_password: "",
      password: "",
      password_confirmation: ""
    });
    const updatePassword = () => {
      form.put(useRoutes("user-password.update"), {
        errorBag: "updatePassword",
        preserveScroll: true,
        onSuccess: () => form.reset(),
        onError: () => {
          if (form.errors.password) {
            form.reset("password", "password_confirmation");
            password.value.input.focus();
          }
          if (form.errors.current_password) {
            form.reset("current_password");
            current_password.value.input.focus();
          }
        }
      });
    };
    __expose({ password, current_password });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormSection = _sfc_main$1d;
      const _component_Label = _sfc_main$1e;
      const _component_Input = _sfc_main$1f;
      const _component_InputError = _sfc_main$1g;
      const _component_ActionMessage = _sfc_main$1i;
      const _component_Button = _sfc_main$1j;
      _push(ssrRenderComponent(_component_FormSection, mergeProps({
        onSubmitted: updatePassword,
        passform: ""
      }, _attrs), {
        title: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.__("Update Password"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.__("Update Password")), 1)
            ];
          }
        }),
        description: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="dark:text-gray-500"${_scopeId}>${ssrInterpolate(_ctx.__("Ensure your account is using a long, random password to stay secure."))}</span>`);
          } else {
            return [
              createVNode("span", { class: "dark:text-gray-500" }, toDisplayString(_ctx.__("Ensure your account is using a long, random password to stay secure.")), 1)
            ];
          }
        }),
        form: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Label, {
              for: "current_password",
              value: _ctx.__("Current Password"),
              req: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Input, {
              id: "current_password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).current_password,
              "onUpdate:modelValue": ($event) => unref(form).current_password = $event,
              ref_key: "current_password",
              ref: current_password,
              autocomplete: "current-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputError, {
              message: unref(form).errors.current_password,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Label, {
              for: "password",
              value: _ctx.__("New Password"),
              req: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Input, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              ref_key: "password",
              ref: password,
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputError, {
              message: unref(form).errors.password,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Label, {
              for: "password_confirmation",
              value: _ctx.__("Confirm Password"),
              req: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Input, {
              id: "password_confirmation",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputError, {
              message: unref(form).errors.password_confirmation,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode(_component_Label, {
                  for: "current_password",
                  value: _ctx.__("Current Password"),
                  req: ""
                }, null, 8, ["value"]),
                createVNode(_component_Input, {
                  id: "current_password",
                  type: "password",
                  class: "mt-1 block w-full",
                  modelValue: unref(form).current_password,
                  "onUpdate:modelValue": ($event) => unref(form).current_password = $event,
                  ref_key: "current_password",
                  ref: current_password,
                  autocomplete: "current-password"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_InputError, {
                  message: unref(form).errors.current_password,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode(_component_Label, {
                  for: "password",
                  value: _ctx.__("New Password"),
                  req: ""
                }, null, 8, ["value"]),
                createVNode(_component_Input, {
                  id: "password",
                  type: "password",
                  class: "mt-1 block w-full",
                  modelValue: unref(form).password,
                  "onUpdate:modelValue": ($event) => unref(form).password = $event,
                  ref_key: "password",
                  ref: password,
                  autocomplete: "new-password"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_InputError, {
                  message: unref(form).errors.password,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode(_component_Label, {
                  for: "password_confirmation",
                  value: _ctx.__("Confirm Password"),
                  req: ""
                }, null, 8, ["value"]),
                createVNode(_component_Input, {
                  id: "password_confirmation",
                  type: "password",
                  class: "mt-1 block w-full",
                  modelValue: unref(form).password_confirmation,
                  "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                  autocomplete: "new-password"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_InputError, {
                  message: unref(form).errors.password_confirmation,
                  class: "mt-2"
                }, null, 8, ["message"])
              ])
            ];
          }
        }),
        actions: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ActionMessage, {
              on: unref(form).recentlySuccessful,
              class: "mr-3"
            }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.__("Saved."))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.__("Saved.")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.__("Save"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.__("Save")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ActionMessage, {
                on: unref(form).recentlySuccessful,
                class: "mr-3"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.__("Saved.")), 1)
                ]),
                _: 1
              }, 8, ["on"]),
              createVNode(_component_Button, {
                class: { "opacity-25": unref(form).processing },
                disabled: unref(form).processing
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.__("Save")), 1)
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Partials/Account/UpdatePasswordForm.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const _sfc_main$j = {
  __name: "Show",
  __ssrInlineRender: true,
  props: ["sessions"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MainLayout = _sfc_main$Q;
      const _component_UpdatePasswordForm = _sfc_main$k;
      const _component_SectionBorder = _sfc_main$1k;
      const _component_TwoFactorAuthenticationForm = _sfc_main$l;
      const _component_LogoutOtherBrowserSessionsForm = _sfc_main$n;
      const _component_DeleteUserForm = _sfc_main$o;
      _push(ssrRenderComponent(_component_MainLayout, mergeProps({
        title: _ctx.__("Settings")
      }, _attrs), {
        header: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl font-semibold leading-tight"${_scopeId}>${ssrInterpolate(_ctx.__("Settings"))}</h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-xl font-semibold leading-tight" }, toDisplayString(_ctx.__("Settings")), 1)
            ];
          }
        }),
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-10 mx-auto max-w-7xl sm:px-6 lg:px-8"${_scopeId}>`);
            if (_ctx.$page.props.serenity.canUpdatePassword) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UpdatePasswordForm, { class: "mt-10 sm:mt-0" }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_SectionBorder, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.$page.props.serenity.canManageTwoFactorAuthentication) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_TwoFactorAuthenticationForm, { class: "mt-10 sm:mt-0" }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_SectionBorder, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_LogoutOtherBrowserSessionsForm, {
              sessions: props.sessions,
              class: "mt-10 sm:mt-0"
            }, null, _parent2, _scopeId));
            if (_ctx.$page.props.serenity.hasAccountDeletionFeatures) {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(_component_SectionBorder, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_DeleteUserForm, { class: "mt-10 sm:mt-0" }, null, _parent2, _scopeId));
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "py-10 mx-auto max-w-7xl sm:px-6 lg:px-8" }, [
                _ctx.$page.props.serenity.canUpdatePassword ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode(_component_UpdatePasswordForm, { class: "mt-10 sm:mt-0" }),
                  createVNode(_component_SectionBorder)
                ])) : createCommentVNode("", true),
                _ctx.$page.props.serenity.canManageTwoFactorAuthentication ? (openBlock(), createBlock("div", { key: 1 }, [
                  createVNode(_component_TwoFactorAuthenticationForm, { class: "mt-10 sm:mt-0" }),
                  createVNode(_component_SectionBorder)
                ])) : createCommentVNode("", true),
                createVNode(_component_LogoutOtherBrowserSessionsForm, {
                  sessions: props.sessions,
                  class: "mt-10 sm:mt-0"
                }, null, 8, ["sessions"]),
                _ctx.$page.props.serenity.hasAccountDeletionFeatures ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                  createVNode(_component_SectionBorder),
                  createVNode(_component_DeleteUserForm, { class: "mt-10 sm:mt-0" })
                ], 64)) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Settings/Show.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const __vite_glob_0_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$j
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$i = {
  __name: "CreateTeamForm",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      name: ""
    });
    const createTeam = () => {
      form.post(useRoutes("teams.store"), {
        errorBag: "createTeam",
        preserveScroll: true
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormSection = _sfc_main$1d;
      const _component_Label = _sfc_main$1e;
      const _component_Input = _sfc_main$1f;
      const _component_InputError = _sfc_main$1g;
      const _component_Button = _sfc_main$1j;
      _push(ssrRenderComponent(_component_FormSection, mergeProps({ onSubmitted: createTeam }, _attrs), {
        title: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.__("Team Details"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.__("Team Details")), 1)
            ];
          }
        }),
        description: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.__("Create a new team to collaborate with others on projects."))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.__("Create a new team to collaborate with others on projects.")), 1)
            ];
          }
        }),
        form: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="col-span-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Label, { value: "Team Owner" }, null, _parent2, _scopeId));
            _push2(`<div class="mt-2 flex items-center"${_scopeId}><img class="h-12 w-12 rounded-full object-cover"${ssrRenderAttr("src", _ctx.$page.props.user.profile_photo_url)}${ssrRenderAttr("alt", _ctx.$page.props.user.name)}${_scopeId}><div class="ml-4 leading-tight"${_scopeId}><div${_scopeId}>${ssrInterpolate(_ctx.$page.props.user.name)}</div><div class="text-sm text-gray-700"${_scopeId}>${ssrInterpolate(_ctx.$page.props.user.email)}</div></div></div></div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Label, {
              for: "name",
              value: "Team Name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Input, {
              id: "name",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              autofocus: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputError, {
              message: unref(form).errors.name,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "col-span-6" }, [
                createVNode(_component_Label, { value: "Team Owner" }),
                createVNode("div", { class: "mt-2 flex items-center" }, [
                  createVNode("img", {
                    class: "h-12 w-12 rounded-full object-cover",
                    src: _ctx.$page.props.user.profile_photo_url,
                    alt: _ctx.$page.props.user.name
                  }, null, 8, ["src", "alt"]),
                  createVNode("div", { class: "ml-4 leading-tight" }, [
                    createVNode("div", null, toDisplayString(_ctx.$page.props.user.name), 1),
                    createVNode("div", { class: "text-sm text-gray-700" }, toDisplayString(_ctx.$page.props.user.email), 1)
                  ])
                ])
              ]),
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode(_component_Label, {
                  for: "name",
                  value: "Team Name"
                }),
                createVNode(_component_Input, {
                  id: "name",
                  type: "text",
                  class: "mt-1 block w-full",
                  modelValue: unref(form).name,
                  "onUpdate:modelValue": ($event) => unref(form).name = $event,
                  autofocus: ""
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_InputError, {
                  message: unref(form).errors.name,
                  class: "mt-2"
                }, null, 8, ["message"])
              ])
            ];
          }
        }),
        actions: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Button, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.__("Create"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.__("Create")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Button, {
                class: { "opacity-25": unref(form).processing },
                disabled: unref(form).processing
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.__("Create")), 1)
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Partials/Teams/CreateTeamForm.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_MainLayout = _sfc_main$Q;
  const _component_create_team_form = _sfc_main$i;
  _push(ssrRenderComponent(_component_MainLayout, mergeProps({
    title: _ctx.__("Create Team")
  }, _attrs), {
    header: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="text-xl font-semibold leading-tight"${_scopeId}>${ssrInterpolate(_ctx.__("Create Team"))}</h2>`);
      } else {
        return [
          createVNode("h2", { class: "text-xl font-semibold leading-tight" }, toDisplayString(_ctx.__("Create Team")), 1)
        ];
      }
    }),
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}><div class="py-10 mx-auto max-w-7xl sm:px-6 lg:px-8"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_create_team_form, null, null, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("div", { class: "py-10 mx-auto max-w-7xl sm:px-6 lg:px-8" }, [
              createVNode(_component_create_team_form)
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Teams/Create.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const Create = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$2]]);
const __vite_glob_0_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$g = {
  __name: "DeleteTeamForm",
  __ssrInlineRender: true,
  props: ["team"],
  setup(__props) {
    const props = __props;
    const confirmingTeamDeletion = ref(false);
    const form = useForm();
    const confirmTeamDeletion = () => {
      confirmingTeamDeletion.value = true;
    };
    const deleteTeam = () => {
      form.delete(useRoutes("teams.destroy", { team: props.team.id }), {
        errorBag: "deleteTeam"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ActionSection = __unplugin_components_8$1;
      const _component_DangerButton = _sfc_main$1r;
      const _component_ConfirmationModal = _sfc_main$1p;
      const _component_SecondaryButton = _sfc_main$1o;
      _push(ssrRenderComponent(_component_ActionSection, _attrs, {
        title: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.__("Delete Team"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.__("Delete Team")), 1)
            ];
          }
        }),
        description: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.__("Permanently delete this team."))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.__("Permanently delete this team.")), 1)
            ];
          }
        }),
        content: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-xl text-sm text-gray-700 dark:text-gray-500"${_scopeId}>${ssrInterpolate(_ctx.__(
              "Once a team is deleted, all of its resources and data will be permanently deleted. Before deleting this team, please download any data or information regarding this team that you wish to retain."
            ))}</div><div class="mt-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_DangerButton, { onClick: confirmTeamDeletion }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.__("Delete Team"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.__("Delete Team")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_ConfirmationModal, {
              show: unref(confirmingTeamDeletion),
              onClose: ($event) => confirmingTeamDeletion.value = false
            }, {
              title: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.__("Delete Team"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.__("Delete Team")), 1)
                  ];
                }
              }),
              content: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="dark:text-gray-500"${_scopeId2}>${ssrInterpolate(_ctx.__(
                    "Are you sure you want to delete this team? Once a team is deleted, all of its resources and data will be permanently deleted."
                  ))}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "dark:text-gray-500" }, toDisplayString(_ctx.__(
                      "Are you sure you want to delete this team? Once a team is deleted, all of its resources and data will be permanently deleted."
                    )), 1)
                  ];
                }
              }),
              footer: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SecondaryButton, {
                    onClick: ($event) => confirmingTeamDeletion.value = false
                  }, {
                    default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.__("Cancel"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.__("Cancel")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_DangerButton, {
                    class: ["ml-2", { "opacity-25": unref(form).processing }],
                    onClick: deleteTeam,
                    disabled: unref(form).processing
                  }, {
                    default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.__("Delete Team"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.__("Delete Team")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SecondaryButton, {
                      onClick: ($event) => confirmingTeamDeletion.value = false
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.__("Cancel")), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_DangerButton, {
                      class: ["ml-2", { "opacity-25": unref(form).processing }],
                      onClick: deleteTeam,
                      disabled: unref(form).processing
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.__("Delete Team")), 1)
                      ]),
                      _: 1
                    }, 8, ["class", "disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "max-w-xl text-sm text-gray-700 dark:text-gray-500" }, toDisplayString(_ctx.__(
                "Once a team is deleted, all of its resources and data will be permanently deleted. Before deleting this team, please download any data or information regarding this team that you wish to retain."
              )), 1),
              createVNode("div", { class: "mt-5" }, [
                createVNode(_component_DangerButton, { onClick: confirmTeamDeletion }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.__("Delete Team")), 1)
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_ConfirmationModal, {
                show: unref(confirmingTeamDeletion),
                onClose: ($event) => confirmingTeamDeletion.value = false
              }, {
                title: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.__("Delete Team")), 1)
                ]),
                content: withCtx(() => [
                  createVNode("span", { class: "dark:text-gray-500" }, toDisplayString(_ctx.__(
                    "Are you sure you want to delete this team? Once a team is deleted, all of its resources and data will be permanently deleted."
                  )), 1)
                ]),
                footer: withCtx(() => [
                  createVNode(_component_SecondaryButton, {
                    onClick: ($event) => confirmingTeamDeletion.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.__("Cancel")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_DangerButton, {
                    class: ["ml-2", { "opacity-25": unref(form).processing }],
                    onClick: deleteTeam,
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.__("Delete Team")), 1)
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ]),
                _: 1
              }, 8, ["show", "onClose"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Partials/Teams/DeleteTeamForm.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = {
  __name: "TeamMemberManager",
  __ssrInlineRender: true,
  props: ["team", "availableRoles", "userPermissions"],
  setup(__props) {
    const props = __props;
    const { team, availableRoles, userPermissions } = toRefs(props);
    const currentlyManagingRole = ref(false);
    const managingRoleFor = ref(null);
    const confirmingLeavingTeam = ref(false);
    const teamMemberBeingRemoved = ref(null);
    const addTeamMemberForm = useForm({
      email: "",
      role: null
    });
    const updateRoleForm = useForm({
      role: null
    });
    const leaveTeamForm = useForm({});
    const removeTeamMemberForm = useForm({});
    const addTeamMember = () => {
      addTeamMemberForm.post(useRoutes("team-members.store", props.team), {
        errorBag: "addTeamMember",
        preserveScroll: true,
        onSuccess: () => addTeamMemberForm.reset()
      });
    };
    const cancelTeamInvitation = (invitation) => {
      router.delete(useRoutes("team-invitations.destroy", invitation), {
        preserveScroll: true
      });
    };
    const manageRole = (teamMember) => {
      managingRoleFor.value = teamMember;
      updateRoleForm.role = teamMember.membership.role;
      currentlyManagingRole.value = true;
    };
    const updateRole = () => {
      updateRoleForm.put(
        useRoutes("team-members.update", [props.team.id, managingRoleFor.value]),
        {
          preserveScroll: true,
          onSuccess: () => currentlyManagingRole.value = false
        }
      );
    };
    const confirmLeavingTeam = () => {
      confirmingLeavingTeam.value = true;
    };
    const leaveTeam = () => {
      leaveTeamForm.delete(
        useRoutes("team-members.destroy", [
          props.team.id,
          usePage().props.value.user
        ])
      );
    };
    const confirmTeamMemberRemoval = (teamMember) => {
      teamMemberBeingRemoved.value = teamMember;
    };
    const removeTeamMember = () => {
      removeTeamMemberForm.delete(
        useRoutes("team-members.destroy", [
          props.team.id,
          teamMemberBeingRemoved.value
        ]),
        {
          errorBag: "removeTeamMember",
          preserveScroll: true,
          preserveState: true,
          onSuccess: () => teamMemberBeingRemoved.value = null
        }
      );
    };
    const displayableRole = (role) => {
      return availableRoles.value.find((r2) => r2.key === role).name;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionBorder = _sfc_main$1k;
      const _component_FormSection = _sfc_main$1d;
      const _component_Label = _sfc_main$1e;
      const _component_Input = _sfc_main$1f;
      const _component_InputError = _sfc_main$1g;
      const _component_IconOutlineCheckCircle = __unplugin_components_5$2;
      const _component_ActionMessage = _sfc_main$1i;
      const _component_Button = _sfc_main$1j;
      const _component_ActionSection = __unplugin_components_8$1;
      const _component_DialogModal = _sfc_main$1n;
      const _component_SecondaryButton = _sfc_main$1o;
      const _component_ConfirmationModal = _sfc_main$1p;
      const _component_DangerButton = _sfc_main$1r;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(userPermissions).canAddTeamMembers) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_SectionBorder, null, null, _parent));
        _push(ssrRenderComponent(_component_FormSection, { onSubmitted: addTeamMember }, {
          title: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.__("Add Team Member"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.__("Add Team Member")), 1)
              ];
            }
          }),
          description: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.__(
                "Add a new team member to your team, allowing them to collaborate with you."
              ))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.__(
                  "Add a new team member to your team, allowing them to collaborate with you."
                )), 1)
              ];
            }
          }),
          form: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="col-span-6"${_scopeId}><div class="max-w-xl text-sm text-gray-700 dark:text-gray-500"${_scopeId}>${ssrInterpolate(_ctx.__(
                "Please provide the email address of the person you would like to add to this team."
              ))}</div></div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Label, {
                for: "email",
                value: "Email"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Input, {
                id: "email",
                type: "email",
                class: "mt-1 block w-full",
                modelValue: unref(addTeamMemberForm).email,
                "onUpdate:modelValue": ($event) => unref(addTeamMemberForm).email = $event
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_InputError, {
                message: unref(addTeamMemberForm).errors.email,
                class: "mt-2"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
              if (unref(availableRoles).length > 0) {
                _push2(`<div class="col-span-6 lg:col-span-4"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Label, {
                  for: "roles",
                  value: "Role"
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_InputError, {
                  message: unref(addTeamMemberForm).errors.role,
                  class: "mt-2"
                }, null, _parent2, _scopeId));
                _push2(`<div class="relative z-0 mt-1 cursor-pointer rounded-lg border-2 border-gray-200 dark:border-gray-600"${_scopeId}><!--[-->`);
                ssrRenderList(unref(availableRoles), (role, i2) => {
                  _push2(`<button type="button" class="${ssrRenderClass([{
                    "rounded-t-none border-t-2 border-gray-200 dark:border-gray-600": i2 > 0,
                    "rounded-b-none": i2 != Object.keys(unref(availableRoles)).length - 1
                  }, "focus:border-contrast-300 focus:ring-contrast-200 relative inline-flex w-full rounded-lg px-4 py-3 focus:z-10 focus:outline-none focus:ring"])}"${_scopeId}><div class="${ssrRenderClass({
                    "opacity-50": unref(addTeamMemberForm).role && unref(addTeamMemberForm).role != role.key
                  })}"${_scopeId}><div class="flex items-center"${_scopeId}><div class="${ssrRenderClass([{
                    "font-semibold": unref(addTeamMemberForm).role == role.key
                  }, "text-sm text-gray-700 dark:text-gray-500"])}"${_scopeId}>${ssrInterpolate(role.name)}</div>`);
                  if (unref(addTeamMemberForm).role == role.key) {
                    _push2(ssrRenderComponent(_component_IconOutlineCheckCircle, { class: "ml-2 h-5 w-5 text-green-400" }, null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div><div class="mt-2 text-left text-xs text-gray-700 dark:text-gray-500"${_scopeId}>${ssrInterpolate(role.description)}</div></div></button>`);
                });
                _push2(`<!--]--></div></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode("div", { class: "col-span-6" }, [
                  createVNode("div", { class: "max-w-xl text-sm text-gray-700 dark:text-gray-500" }, toDisplayString(_ctx.__(
                    "Please provide the email address of the person you would like to add to this team."
                  )), 1)
                ]),
                createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                  createVNode(_component_Label, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_component_Input, {
                    id: "email",
                    type: "email",
                    class: "mt-1 block w-full",
                    modelValue: unref(addTeamMemberForm).email,
                    "onUpdate:modelValue": ($event) => unref(addTeamMemberForm).email = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_InputError, {
                    message: unref(addTeamMemberForm).errors.email,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                unref(availableRoles).length > 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "col-span-6 lg:col-span-4"
                }, [
                  createVNode(_component_Label, {
                    for: "roles",
                    value: "Role"
                  }),
                  createVNode(_component_InputError, {
                    message: unref(addTeamMemberForm).errors.role,
                    class: "mt-2"
                  }, null, 8, ["message"]),
                  createVNode("div", { class: "relative z-0 mt-1 cursor-pointer rounded-lg border-2 border-gray-200 dark:border-gray-600" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(availableRoles), (role, i2) => {
                      return openBlock(), createBlock("button", {
                        type: "button",
                        class: ["focus:border-contrast-300 focus:ring-contrast-200 relative inline-flex w-full rounded-lg px-4 py-3 focus:z-10 focus:outline-none focus:ring", {
                          "rounded-t-none border-t-2 border-gray-200 dark:border-gray-600": i2 > 0,
                          "rounded-b-none": i2 != Object.keys(unref(availableRoles)).length - 1
                        }],
                        onClick: ($event) => unref(addTeamMemberForm).role = role.key,
                        key: role.key
                      }, [
                        createVNode("div", {
                          class: {
                            "opacity-50": unref(addTeamMemberForm).role && unref(addTeamMemberForm).role != role.key
                          }
                        }, [
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode("div", {
                              class: ["text-sm text-gray-700 dark:text-gray-500", {
                                "font-semibold": unref(addTeamMemberForm).role == role.key
                              }]
                            }, toDisplayString(role.name), 3),
                            unref(addTeamMemberForm).role == role.key ? (openBlock(), createBlock(_component_IconOutlineCheckCircle, {
                              key: 0,
                              class: "ml-2 h-5 w-5 text-green-400"
                            })) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "mt-2 text-left text-xs text-gray-700 dark:text-gray-500" }, toDisplayString(role.description), 1)
                        ], 2)
                      ], 10, ["onClick"]);
                    }), 128))
                  ])
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          actions: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_ActionMessage, {
                on: unref(addTeamMemberForm).recentlySuccessful,
                class: "mr-3"
              }, {
                default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.__("Added"))}. `);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.__("Added")) + ". ", 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Button, {
                class: { "opacity-25": unref(addTeamMemberForm).processing },
                disabled: unref(addTeamMemberForm).processing
              }, {
                default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.__("Add"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.__("Add")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_ActionMessage, {
                  on: unref(addTeamMemberForm).recentlySuccessful,
                  class: "mr-3"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.__("Added")) + ". ", 1)
                  ]),
                  _: 1
                }, 8, ["on"]),
                createVNode(_component_Button, {
                  class: { "opacity-25": unref(addTeamMemberForm).processing },
                  disabled: unref(addTeamMemberForm).processing
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.__("Add")), 1)
                  ]),
                  _: 1
                }, 8, ["class", "disabled"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(team).team_invitations.length > 0 && unref(userPermissions).canAddTeamMembers) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_SectionBorder, null, null, _parent));
        _push(ssrRenderComponent(_component_ActionSection, { class: "mt-10 sm:mt-0" }, {
          title: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.__("Pending Team Invitations"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.__("Pending Team Invitations")), 1)
              ];
            }
          }),
          description: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.__(
                "These people have been invited to your team and have been sent an invitation email. They may join the team by accepting the email invitation."
              ))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.__(
                  "These people have been invited to your team and have been sent an invitation email. They may join the team by accepting the email invitation."
                )), 1)
              ];
            }
          }),
          content: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="space-y-6"${_scopeId}><!--[-->`);
              ssrRenderList(unref(team).team_invitations, (invitation) => {
                _push2(`<div class="flex items-center justify-between"${_scopeId}><div class="text-gray-700 dark:text-gray-500"${_scopeId}>${ssrInterpolate(invitation.email)}</div><div class="flex items-center"${_scopeId}>`);
                if (unref(userPermissions).canRemoveTeamMembers) {
                  _push2(`<button class="ml-6 cursor-pointer font-medium text-red-500 focus:outline-none"${_scopeId}>${ssrInterpolate(_ctx.__("Cancel"))}</button>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "space-y-6" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(team).team_invitations, (invitation) => {
                    return openBlock(), createBlock("div", {
                      class: "flex items-center justify-between",
                      key: invitation.id
                    }, [
                      createVNode("div", { class: "text-gray-700 dark:text-gray-500" }, toDisplayString(invitation.email), 1),
                      createVNode("div", { class: "flex items-center" }, [
                        unref(userPermissions).canRemoveTeamMembers ? (openBlock(), createBlock("button", {
                          key: 0,
                          class: "ml-6 cursor-pointer font-medium text-red-500 focus:outline-none",
                          onClick: ($event) => cancelTeamInvitation(invitation)
                        }, toDisplayString(_ctx.__("Cancel")), 9, ["onClick"])) : createCommentVNode("", true)
                      ])
                    ]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(team).users.length > 0) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_SectionBorder, null, null, _parent));
        _push(ssrRenderComponent(_component_ActionSection, { class: "mt-10 sm:mt-0" }, {
          title: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.__("Team Members"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.__("Team Members")), 1)
              ];
            }
          }),
          description: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.__("All of the people that are part of this team."))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.__("All of the people that are part of this team.")), 1)
              ];
            }
          }),
          content: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="space-y-6"${_scopeId}><!--[-->`);
              ssrRenderList(unref(team).users, (user) => {
                _push2(`<div class="flex items-center justify-between"${_scopeId}><div class="flex items-center"${_scopeId}><img class="h-8 w-8 rounded-full"${ssrRenderAttr("src", user.profile_photo_url)}${ssrRenderAttr("alt", user.name)}${_scopeId}><div class="ml-4"${_scopeId}>${ssrInterpolate(user.name)}</div></div><div class="flex items-center"${_scopeId}>`);
                if (unref(userPermissions).canAddTeamMembers && unref(availableRoles).length) {
                  _push2(`<button class="ml-2 text-sm text-gray-400 underline"${_scopeId}>${ssrInterpolate(displayableRole(user.membership.role))}</button>`);
                } else if (unref(availableRoles).length) {
                  _push2(`<div class="ml-2 text-sm text-gray-400"${_scopeId}>${ssrInterpolate(displayableRole(user.membership.role))}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (_ctx.$page.props.user.id === user.id) {
                  _push2(`<button class="ml-6 cursor-pointer text-sm text-red-500"${_scopeId}>${ssrInterpolate(_ctx.__("Leave"))}</button>`);
                } else {
                  _push2(`<!---->`);
                }
                if (unref(userPermissions).canRemoveTeamMembers) {
                  _push2(`<button class="ml-6 cursor-pointer text-sm text-red-500"${_scopeId}>${ssrInterpolate(_ctx.__("Remove"))}</button>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "space-y-6" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(team).users, (user) => {
                    return openBlock(), createBlock("div", {
                      class: "flex items-center justify-between",
                      key: user.id
                    }, [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("img", {
                          class: "h-8 w-8 rounded-full",
                          src: user.profile_photo_url,
                          alt: user.name
                        }, null, 8, ["src", "alt"]),
                        createVNode("div", { class: "ml-4" }, toDisplayString(user.name), 1)
                      ]),
                      createVNode("div", { class: "flex items-center" }, [
                        unref(userPermissions).canAddTeamMembers && unref(availableRoles).length ? (openBlock(), createBlock("button", {
                          key: 0,
                          class: "ml-2 text-sm text-gray-400 underline",
                          onClick: ($event) => manageRole(user)
                        }, toDisplayString(displayableRole(user.membership.role)), 9, ["onClick"])) : unref(availableRoles).length ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "ml-2 text-sm text-gray-400"
                        }, toDisplayString(displayableRole(user.membership.role)), 1)) : createCommentVNode("", true),
                        _ctx.$page.props.user.id === user.id ? (openBlock(), createBlock("button", {
                          key: 2,
                          class: "ml-6 cursor-pointer text-sm text-red-500",
                          onClick: confirmLeavingTeam
                        }, toDisplayString(_ctx.__("Leave")), 1)) : createCommentVNode("", true),
                        unref(userPermissions).canRemoveTeamMembers ? (openBlock(), createBlock("button", {
                          key: 3,
                          class: "ml-6 cursor-pointer text-sm text-red-500",
                          onClick: ($event) => confirmTeamMemberRemoval(user)
                        }, toDisplayString(_ctx.__("Remove")), 9, ["onClick"])) : createCommentVNode("", true)
                      ])
                    ]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_DialogModal, {
        show: unref(currentlyManagingRole),
        onClose: ($event) => currentlyManagingRole.value = false
      }, {
        title: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.__("Manage Role"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.__("Manage Role")), 1)
            ];
          }
        }),
        content: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(managingRoleFor)) {
              _push2(`<div${_scopeId}><div class="relative z-0 mt-1 cursor-pointer rounded-lg border border-gray-200 dark:border-gray-600"${_scopeId}><!--[-->`);
              ssrRenderList(unref(availableRoles), (role, i2) => {
                _push2(`<button type="button" class="${ssrRenderClass([{
                  "rounded-t-none border-t border-gray-200 dark:border-gray-600": i2 > 0,
                  "rounded-b-none": i2 !== Object.keys(unref(availableRoles)).length - 1
                }, "relative inline-flex w-full rounded-lg px-4 py-3 focus:z-10 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200"])}"${_scopeId}><div class="${ssrRenderClass({
                  "opacity-50": unref(updateRoleForm).role && unref(updateRoleForm).role !== role.key
                })}"${_scopeId}><div class="flex items-center"${_scopeId}><div class="${ssrRenderClass([{
                  "font-semibold": unref(updateRoleForm).role === role.key
                }, "text-sm text-gray-700 dark:text-gray-500"])}"${_scopeId}>${ssrInterpolate(role.name)}</div>`);
                if (unref(updateRoleForm).role === role.key) {
                  _push2(ssrRenderComponent(_component_IconOutlineCheckCircle, { class: "ml-2 h-5 w-5 text-green-400" }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="mt-2 text-xs text-gray-700 dark:text-gray-500"${_scopeId}>${ssrInterpolate(role.description)}</div></div></button>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(managingRoleFor) ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode("div", { class: "relative z-0 mt-1 cursor-pointer rounded-lg border border-gray-200 dark:border-gray-600" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(availableRoles), (role, i2) => {
                    return openBlock(), createBlock("button", {
                      type: "button",
                      class: ["relative inline-flex w-full rounded-lg px-4 py-3 focus:z-10 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200", {
                        "rounded-t-none border-t border-gray-200 dark:border-gray-600": i2 > 0,
                        "rounded-b-none": i2 !== Object.keys(unref(availableRoles)).length - 1
                      }],
                      onClick: ($event) => unref(updateRoleForm).role = role.key,
                      key: role.key
                    }, [
                      createVNode("div", {
                        class: {
                          "opacity-50": unref(updateRoleForm).role && unref(updateRoleForm).role !== role.key
                        }
                      }, [
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode("div", {
                            class: ["text-sm text-gray-700 dark:text-gray-500", {
                              "font-semibold": unref(updateRoleForm).role === role.key
                            }]
                          }, toDisplayString(role.name), 3),
                          unref(updateRoleForm).role === role.key ? (openBlock(), createBlock(_component_IconOutlineCheckCircle, {
                            key: 0,
                            class: "ml-2 h-5 w-5 text-green-400"
                          })) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "mt-2 text-xs text-gray-700 dark:text-gray-500" }, toDisplayString(role.description), 1)
                      ], 2)
                    ], 10, ["onClick"]);
                  }), 128))
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        footer: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SecondaryButton, {
              onClick: ($event) => currentlyManagingRole.value = false
            }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.__("Cancel"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.__("Cancel")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              class: ["ml-2", { "opacity-25": unref(updateRoleForm).processing }],
              onClick: updateRole,
              disabled: unref(updateRoleForm).processing
            }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.__("Save"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.__("Save")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SecondaryButton, {
                onClick: ($event) => currentlyManagingRole.value = false
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.__("Cancel")), 1)
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_component_Button, {
                class: ["ml-2", { "opacity-25": unref(updateRoleForm).processing }],
                onClick: updateRole,
                disabled: unref(updateRoleForm).processing
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.__("Save")), 1)
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ConfirmationModal, {
        show: unref(confirmingLeavingTeam),
        onClose: ($event) => confirmingLeavingTeam.value = false
      }, {
        title: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.__("Leave Team"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.__("Leave Team")), 1)
            ];
          }
        }),
        content: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="dark:text-gray-500"${_scopeId}>${ssrInterpolate(_ctx.__("Are you sure you would like to leave this team?"))}</span>`);
          } else {
            return [
              createVNode("span", { class: "dark:text-gray-500" }, toDisplayString(_ctx.__("Are you sure you would like to leave this team?")), 1)
            ];
          }
        }),
        footer: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SecondaryButton, {
              onClick: ($event) => confirmingLeavingTeam.value = false
            }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.__("Cancel"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.__("Cancel")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_DangerButton, {
              class: ["ml-2", { "opacity-25": unref(leaveTeamForm).processing }],
              onClick: leaveTeam,
              disabled: unref(leaveTeamForm).processing
            }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.__("Leave"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.__("Leave")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SecondaryButton, {
                onClick: ($event) => confirmingLeavingTeam.value = false
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.__("Cancel")), 1)
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_component_DangerButton, {
                class: ["ml-2", { "opacity-25": unref(leaveTeamForm).processing }],
                onClick: leaveTeam,
                disabled: unref(leaveTeamForm).processing
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.__("Leave")), 1)
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ConfirmationModal, {
        show: unref(teamMemberBeingRemoved),
        onClose: ($event) => teamMemberBeingRemoved.value = null
      }, {
        title: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.__("Remove Team Member"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.__("Remove Team Member")), 1)
            ];
          }
        }),
        content: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.__("Are you sure you would like to remove this person from the team?"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.__("Are you sure you would like to remove this person from the team?")), 1)
            ];
          }
        }),
        footer: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SecondaryButton, {
              onClick: ($event) => teamMemberBeingRemoved.value = null
            }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.__("Cancel"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.__("Cancel")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_DangerButton, {
              class: ["ml-2", { "opacity-25": unref(removeTeamMemberForm).processing }],
              onClick: removeTeamMember,
              disabled: unref(removeTeamMemberForm).processing
            }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.__("Remove"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.__("Remove")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SecondaryButton, {
                onClick: ($event) => teamMemberBeingRemoved.value = null
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.__("Cancel")), 1)
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_component_DangerButton, {
                class: ["ml-2", { "opacity-25": unref(removeTeamMemberForm).processing }],
                onClick: removeTeamMember,
                disabled: unref(removeTeamMemberForm).processing
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.__("Remove")), 1)
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Partials/Teams/TeamMemberManager.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = {
  __name: "UpdateTeamNameForm",
  __ssrInlineRender: true,
  props: ["team", "permissions"],
  setup(__props) {
    const props = __props;
    const { team, permissions } = toRefs(props);
    const form = useForm({
      name: props.team.name
    });
    const updateTeamName = () => {
      form.put(useRoutes("teams.update", { team: props.team.id }), {
        errorBag: "updateTeamName",
        preserveScroll: true
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormSection = _sfc_main$1d;
      const _component_Label = _sfc_main$1e;
      const _component_Input = _sfc_main$1f;
      const _component_InputError = _sfc_main$1g;
      const _component_ActionMessage = _sfc_main$1i;
      const _component_Button = _sfc_main$1j;
      _push(ssrRenderComponent(_component_FormSection, mergeProps({ onSubmitted: updateTeamName }, _attrs), createSlots({
        title: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.__("Team Name"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.__("Team Name")), 1)
            ];
          }
        }),
        description: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.__("The team's name and owner information."))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.__("The team's name and owner information.")), 1)
            ];
          }
        }),
        form: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="col-span-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Label, {
              value: _ctx.__("Team Owner")
            }, null, _parent2, _scopeId));
            _push2(`<div class="mt-2 flex items-center"${_scopeId}><img class="h-12 w-12 rounded-full object-cover"${ssrRenderAttr("src", unref(team).owner.profile_photo_url)}${ssrRenderAttr("alt", unref(team).owner.name)}${_scopeId}><div class="ml-4 leading-tight"${_scopeId}><div${_scopeId}>${ssrInterpolate(unref(team).owner.name)}</div><div class="text-sm text-gray-700 dark:text-gray-500"${_scopeId}>${ssrInterpolate(unref(team).owner.email)}</div></div></div></div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Label, {
              for: "name",
              value: _ctx.__("Team Name")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Input, {
              id: "name",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              disabled: !unref(permissions).canUpdateTeam
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputError, {
              message: unref(form).errors.name,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "col-span-6" }, [
                createVNode(_component_Label, {
                  value: _ctx.__("Team Owner")
                }, null, 8, ["value"]),
                createVNode("div", { class: "mt-2 flex items-center" }, [
                  createVNode("img", {
                    class: "h-12 w-12 rounded-full object-cover",
                    src: unref(team).owner.profile_photo_url,
                    alt: unref(team).owner.name
                  }, null, 8, ["src", "alt"]),
                  createVNode("div", { class: "ml-4 leading-tight" }, [
                    createVNode("div", null, toDisplayString(unref(team).owner.name), 1),
                    createVNode("div", { class: "text-sm text-gray-700 dark:text-gray-500" }, toDisplayString(unref(team).owner.email), 1)
                  ])
                ])
              ]),
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode(_component_Label, {
                  for: "name",
                  value: _ctx.__("Team Name")
                }, null, 8, ["value"]),
                createVNode(_component_Input, {
                  id: "name",
                  type: "text",
                  class: "mt-1 block w-full",
                  modelValue: unref(form).name,
                  "onUpdate:modelValue": ($event) => unref(form).name = $event,
                  disabled: !unref(permissions).canUpdateTeam
                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                createVNode(_component_InputError, {
                  message: unref(form).errors.name,
                  class: "mt-2"
                }, null, 8, ["message"])
              ])
            ];
          }
        }),
        _: 2
      }, [
        unref(permissions).canUpdateTeam ? {
          name: "actions",
          fn: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_ActionMessage, {
                on: unref(form).recentlySuccessful,
                class: "mr-3 text-green-500"
              }, {
                default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.__("Saved."))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.__("Saved.")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Button, {
                class: { "opacity-25": unref(form).processing },
                disabled: unref(form).processing
              }, {
                default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.__("Save"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.__("Save")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_ActionMessage, {
                  on: unref(form).recentlySuccessful,
                  class: "mr-3 text-green-500"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.__("Saved.")), 1)
                  ]),
                  _: 1
                }, 8, ["on"]),
                createVNode(_component_Button, {
                  class: { "opacity-25": unref(form).processing },
                  disabled: unref(form).processing
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.__("Save")), 1)
                  ]),
                  _: 1
                }, 8, ["class", "disabled"])
              ];
            }
          }),
          key: "0"
        } : void 0
      ]), _parent));
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Partials/Teams/UpdateTeamNameForm.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = {
  __name: "Show",
  __ssrInlineRender: true,
  props: ["team", "availableRoles", "permissions"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MainLayout = _sfc_main$Q;
      const _component_UpdateTeamNameForm = _sfc_main$e;
      const _component_TeamMemberManager = _sfc_main$f;
      const _component_SectionBorder = _sfc_main$1k;
      const _component_DeleteTeamForm = _sfc_main$g;
      _push(ssrRenderComponent(_component_MainLayout, mergeProps({
        title: _ctx.__("Team Settings")
      }, _attrs), {
        header: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl font-semibold leading-tight"${_scopeId}>${ssrInterpolate(_ctx.__("Team Settings"))}</h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-xl font-semibold leading-tight" }, toDisplayString(_ctx.__("Team Settings")), 1)
            ];
          }
        }),
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="mx-auto max-w-7xl py-10 sm:px-6 lg:px-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UpdateTeamNameForm, {
              team: __props.team,
              permissions: __props.permissions
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TeamMemberManager, {
              class: "mt-10 sm:mt-0",
              team: __props.team,
              "available-roles": __props.availableRoles,
              "user-permissions": __props.permissions
            }, null, _parent2, _scopeId));
            if (__props.permissions.canDeleteTeam && !__props.team.personal_team) {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(_component_SectionBorder, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_DeleteTeamForm, {
                class: "mt-10 sm:mt-0",
                team: __props.team
              }, null, _parent2, _scopeId));
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "mx-auto max-w-7xl py-10 sm:px-6 lg:px-8" }, [
                  createVNode(_component_UpdateTeamNameForm, {
                    team: __props.team,
                    permissions: __props.permissions
                  }, null, 8, ["team", "permissions"]),
                  createVNode(_component_TeamMemberManager, {
                    class: "mt-10 sm:mt-0",
                    team: __props.team,
                    "available-roles": __props.availableRoles,
                    "user-permissions": __props.permissions
                  }, null, 8, ["team", "available-roles", "user-permissions"]),
                  __props.permissions.canDeleteTeam && !__props.team.personal_team ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    createVNode(_component_SectionBorder),
                    createVNode(_component_DeleteTeamForm, {
                      class: "mt-10 sm:mt-0",
                      team: __props.team
                    }, null, 8, ["team"])
                  ], 64)) : createCommentVNode("", true)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Teams/Show.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __vite_glob_0_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$d
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$c = {
  __name: "TermsOfService",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GuestLayout = _sfc_main$J;
      const _component_Head = resolveComponent("Head");
      const _component_AuthenticationCardLogo = __unplugin_components_1$1;
      _push(ssrRenderComponent(_component_GuestLayout, _attrs, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Head, {
              title: _ctx.__("Terms of Service")
            }, null, _parent2, _scopeId));
            _push2(`<div class="font-sans antialiased"${_scopeId}><div class="pt-4"${_scopeId}><div class="flex min-h-screen flex-col items-center pt-6 sm:pt-0"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AuthenticationCardLogo, { class: "h-auto w-24" }, null, _parent2, _scopeId));
            _push2(`</div><div class="docs docs-slate dark:docs-invert docs-headings:font-normal mt-6 w-full overflow-hidden bg-white p-6 shadow-md dark:bg-gray-800 sm:max-w-2xl sm:rounded-lg"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(_sfc_main$t), null, null, _parent2, _scopeId));
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode(_component_Head, {
                title: _ctx.__("Terms of Service")
              }, null, 8, ["title"]),
              createVNode("div", { class: "font-sans antialiased" }, [
                createVNode("div", { class: "pt-4" }, [
                  createVNode("div", { class: "flex min-h-screen flex-col items-center pt-6 sm:pt-0" }, [
                    createVNode("div", null, [
                      createVNode(_component_AuthenticationCardLogo, { class: "h-auto w-24" })
                    ]),
                    createVNode("div", { class: "docs docs-slate dark:docs-invert docs-headings:font-normal mt-6 w-full overflow-hidden bg-white p-6 shadow-md dark:bg-gray-800 sm:max-w-2xl sm:rounded-lg" }, [
                      createVNode(unref(_sfc_main$t))
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/TermsOfService.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __vite_glob_0_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$c
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "m5 13l4 4L19 7"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
const __unplugin_components_2 = { name: "heroicons-outline-check", render: render$1 };
const _sfc_main$b = {
  __name: "HomeCode",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = {};
    __expose({ frontmatter });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><pre class="shiki css-variables" style="${ssrRenderStyle({ "background-color": "var(--shiki-color-background)" })}" tabindex="0"><code class="language-php"><span class="line"><span style="${ssrRenderStyle({ "color": "var(--shiki-token-comment)" })}">/**</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "var(--shiki-token-comment)" })}"> * Create a new registered user.</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "var(--shiki-token-comment)" })}"> *</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "var(--shiki-token-comment)" })}"> * </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">@param</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-comment)" })}">  </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-punctuation)" })}">\\</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}">Illuminate</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-punctuation)" })}">\\</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}">Http</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-punctuation)" })}">\\</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}">Request</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-comment)" })}">  $request</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "var(--shiki-token-comment)" })}"> * </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">@param</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-comment)" })}">  </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-punctuation)" })}">\\</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}">Serenity</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-punctuation)" })}">\\</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}">Contracts</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-punctuation)" })}">\\</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}">CreatesNewUsers</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-comment)" })}">  $creator</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "var(--shiki-token-comment)" })}"> * </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">@return</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-comment)" })}"> </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-punctuation)" })}">\\</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}">Serenity</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-punctuation)" })}">\\</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}">Contracts</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-punctuation)" })}">\\</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}">Register</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "var(--shiki-token-comment)" })}"> */</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">public</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">function</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-function)" })}">__invoke</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">(</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}">Request</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> $request</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-punctuation)" })}">,</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}">CreatesNewUsers</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> $creator)</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">:</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}">Register</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">  </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-function)" })}">event</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-punctuation)" })}">(</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">new</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"> </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}">Registered</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-function)" })}">($user </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">=</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-function)" })}"> $creator</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">-&gt;</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-function)" })}">create</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-punctuation)" })}">(</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-function)" })}">$request</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">-&gt;</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-function)" })}">all</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-punctuation)" })}">())</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-function)" })}">)</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-punctuation)" })}">)</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">  </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}">$this</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">-&gt;</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">guard</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">-&gt;</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-function)" })}">login</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-punctuation)" })}">(</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">$user</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-punctuation)" })}">)</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">  </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">return</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}"> </span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-function)" })}">app</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-punctuation)" })}">(</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-constant)" })}">Register</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-keyword)" })}">::class</span><span style="${ssrRenderStyle({ "color": "var(--shiki-token-punctuation)" })}">)</span><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "var(--shiki-color-text)" })}">}</span></span>
<span class="line"></span></code></pre></div>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Shared/HomeCode.md");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {
  __name: "Welcome",
  __ssrInlineRender: true,
  setup(__props) {
    const features = [
      {
        name: "VITAL Stack",
        description: "Vue, Inertia, Tailwind, ADR and Laravel. Build a Domain Driven, lightning fast, Modern Monolith application quickly and efficiently. "
      },
      {
        name: "Snowflake DB IDs",
        description: "Incrementing Ids that can be guessed by hackers are not acceptable. Snowflake provides network generated unique ID numbers at high scale with simple guarantees."
      },
      {
        name: "Method Namespacing",
        description: "Consistently namespaced actions provide guarantees of location for incoming requests and decrease the developer decision tree in class naming."
      },
      {
        name: "Auto Routing",
        description: "Sick of writing hundreds of routes for your app by hand? Us too, so we fixed that. Routes are loaded and resolved automatically removing the burden of maintaining a huge routes file."
      },
      {
        name: "Generators Galore",
        description: "Building files and classes is a breeze since everything can be built with a generator. And wait till you try the Scaffold command, build out an entire namespace with a single command."
      },
      {
        name: "Native Documentation",
        description: "Serenity ships with it's own docs for convenience, but also provides you with a built in platform. Just swap out your docs for ours and you're ready to go."
      },
      {
        name: "Built on Octane",
        description: "Built on Laravel Octane, Serenity makes the monolith even faster by loading all the backend code once, making your application extremely lean and fast."
      },
      {
        name: "Kubernetes Ready",
        description: "Docker and other container technology is by far the best choice for Enterprise applications. Serenity ships with Docker and Kubernetes support baked in."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      const _component_GuestHeader = _sfc_main$K;
      const _component_ApplicationLogo = __unplugin_components_1$2;
      const _component_Link = resolveComponent("Link");
      const _component_IconOutlineCheck = __unplugin_components_2;
      const _component_Notification = __unplugin_components_3$2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, {
        title: _ctx.__("Welcome")
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<meta head-key="description" name="description"${ssrRenderAttr(
              "content",
              _ctx.__(
                "Is your application ready to move to the Enterprise level? If so, you need separation, speed and Domain Driven Design. Meet Serenity, your new coding Zen!"
              )
            )}${_scopeId}>`);
          } else {
            return [
              createVNode("meta", {
                "head-key": "description",
                name: "description",
                content: _ctx.__(
                  "Is your application ready to move to the Enterprise level? If so, you need separation, speed and Domain Driven Design. Meet Serenity, your new coding Zen!"
                )
              }, null, 8, ["content"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_GuestHeader, null, null, _parent));
      _push(`<div class="-mt-[65px] bg-white dark:bg-gray-800"><div class="relative isolate overflow-hidden bg-gradient-to-b from-blue-50/20"><div class="mx-auto max-w-7xl pb-12 pt-4 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pb-20 lg:pt-32"><div class="px-6 lg:px-0 lg:pt-4"><div class="mx-auto max-w-2xl pt-[90px] lg:pt-0"><div class="max-w-lg">`);
      _push(ssrRenderComponent(_component_ApplicationLogo, { class: "h-40 fill-gray-700 dark:fill-gray-100 sm:h-48" }, null, _parent));
      _push(`<h1 class="mt-10 text-4xl font-semibold tracking-tight text-gray-800 dark:text-gray-200 sm:text-5xl">${ssrInterpolate(_ctx.__("Build for Enterprise"))}</h1><p class="mt-6 text-lg text-gray-600 dark:text-gray-400">${ssrInterpolate(_ctx.__(
        "Is your application ready to move to the Enterprise level? If so, you need separation, speed and Domain Driven Design. Meet Serenity, your new coding Zen!"
      ))}</p><div class="mt-10 flex items-center gap-x-6">`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("docs.home"),
        class: "rounded-full bg-blue-500 px-6 py-4 text-lg font-semibold text-white shadow-sm transition-all hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.__("Documentation"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.__("Documentation")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="https://github.com/jetstreamlabs/serenity" class="text-xl font-semibold leading-6 text-gray-900 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-500" target="_blank">${ssrInterpolate(_ctx.__("View on GitHub"))} <span aria-hidden="true">→</span></a></div></div></div></div><div class="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen"><div class="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-blue-600/10 ring-1 ring-blue-50 dark:bg-gray-800 dark:ring-gray-500 md:-mr-20 lg:-mr-36" aria-hidden="true"></div><div class="shadow-lg md:rounded-3xl"><div class="bg-blue-500 [clip-path:inset(0)] dark:bg-blue-500/50 md:[clip-path:inset(0_round_theme(borderRadius.3xl))]"><div class="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-blue-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36" aria-hidden="true"></div><div class="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0"><div class="mx-auto max-w-2xl md:mx-0 md:max-w-none"><div class="w-screen overflow-hidden rounded-tl-xl bg-gray-900"><div class="flex bg-gray-800/40 ring-1 ring-white/5"><div class="-mb-px flex text-sm font-medium leading-6 text-gray-400"><div class="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white"> createSerenityApp.js </div><div class="border-r border-gray-600/10 px-4 py-2 text-gray-400"> StoreAction.php </div></div></div><div class="bg-[#222436] p-4 dark:bg-[#020617]">`);
      _push(ssrRenderComponent(unref(_sfc_main$b), null, null, _parent));
      _push(`</div></div></div><div class="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl" aria-hidden="true"></div></div></div></div></div></div><div class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white dark:from-gray-800 sm:h-32"></div></div></div><div class="bg-blue-50/10 dark:bg-blue-500/50"><div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-16"><div class="mx-auto max-w-3xl text-center"><h2 class="text-3xl font-bold leading-8 tracking-tight text-blue-800 dark:text-white sm:text-4xl">${ssrInterpolate(_ctx.__("Laravel"))} <span class="uppercase text-orange-500">${ssrInterpolate(_ctx.__("Transformed!"))}</span></h2><p class="mx-auto mt-4 max-w-xl text-lg text-blue-800 dark:text-gray-200">${ssrInterpolate(_ctx.__(
        "The same Laravel base framework you know and love, but re-imagined and more opinionated for building in the Enterprise."
      ))}</p></div><dl class="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8"><!--[-->`);
      ssrRenderList(features, (feature) => {
        _push(`<div class="relative"><dt>`);
        _push(ssrRenderComponent(_component_IconOutlineCheck, {
          class: "absolute mt-1 h-6 w-6 text-blue-500 dark:text-blue-900",
          "aria-hidden": "true"
        }, null, _parent));
        _push(`<p class="ml-10 text-lg font-semibold text-blue-900 dark:text-gray-200">${ssrInterpolate(feature.name)}</p></dt><dd class="ml-10 mt-2 line-clamp-4 text-sm text-blue-800 dark:text-gray-300">${ssrInterpolate(feature.description)}</dd></div>`);
      });
      _push(`<!--]--></dl></div></div><footer class="flex flex-col items-center justify-center border-t border-gray-200 bg-gray-100 px-6 py-12 text-sm dark:border-gray-900 dark:bg-gray-800 sm:flex-row sm:justify-between sm:space-y-0"><div class="space-x-4 text-gray-400 dark:text-gray-300">`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("terms.show"),
        class: "hover:text-gray-600 dark:hover:text-gray-100"
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.__("Terms of Service"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.__("Terms of Service")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("policy.show"),
        class: "hover:text-gray-600 dark:hover:text-gray-100"
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.__("Privacy Policy"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.__("Privacy Policy")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-x-4 text-gray-400 dark:text-gray-300"><span>${_ctx.$page.props.copyright}</span><span> Serenity v${ssrInterpolate(_ctx.$page.props.serenityVersion)} (PHP v${ssrInterpolate(_ctx.$page.props.phpVersion)}) </span></div></footer>`);
      _push(ssrRenderComponent(_component_Notification, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Welcome.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __vite_glob_0_22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$a
}, Symbol.toStringTag, { value: "Module" }));
async function resolvePageComponent(path, pages2) {
  const page = pages2[path];
  if (typeof page === "undefined") {
    throw new Error(`Page not found: ${path}`);
  }
  return typeof page === "function" ? page() : page;
}
function t() {
  return t = Object.assign ? Object.assign.bind() : function(t4) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var r2 = arguments[e2];
      for (var n2 in r2)
        Object.prototype.hasOwnProperty.call(r2, n2) && (t4[n2] = r2[n2]);
    }
    return t4;
  }, t.apply(this, arguments);
}
var e = String.prototype.replace, r = /%20/g, n = { default: "RFC3986", formatters: { RFC1738: function(t4) {
  return e.call(t4, r, "+");
}, RFC3986: function(t4) {
  return String(t4);
} }, RFC1738: "RFC1738", RFC3986: "RFC3986" }, o = Object.prototype.hasOwnProperty, i = Array.isArray, u = function() {
  for (var t4 = [], e2 = 0; e2 < 256; ++e2)
    t4.push("%" + ((e2 < 16 ? "0" : "") + e2.toString(16)).toUpperCase());
  return t4;
}(), s = function(t4, e2) {
  for (var r2 = e2 && e2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, n2 = 0; n2 < t4.length; ++n2)
    void 0 !== t4[n2] && (r2[n2] = t4[n2]);
  return r2;
}, a = { arrayToObject: s, assign: function(t4, e2) {
  return Object.keys(e2).reduce(function(t5, r2) {
    return t5[r2] = e2[r2], t5;
  }, t4);
}, combine: function(t4, e2) {
  return [].concat(t4, e2);
}, compact: function(t4) {
  for (var e2 = [{ obj: { o: t4 }, prop: "o" }], r2 = [], n2 = 0; n2 < e2.length; ++n2)
    for (var o2 = e2[n2], u2 = o2.obj[o2.prop], s2 = Object.keys(u2), a2 = 0; a2 < s2.length; ++a2) {
      var f2 = s2[a2], c2 = u2[f2];
      "object" == typeof c2 && null !== c2 && -1 === r2.indexOf(c2) && (e2.push({ obj: u2, prop: f2 }), r2.push(c2));
    }
  return function(t5) {
    for (; t5.length > 1; ) {
      var e3 = t5.pop(), r3 = e3.obj[e3.prop];
      if (i(r3)) {
        for (var n3 = [], o3 = 0; o3 < r3.length; ++o3)
          void 0 !== r3[o3] && n3.push(r3[o3]);
        e3.obj[e3.prop] = n3;
      }
    }
  }(e2), t4;
}, decode: function(t4, e2, r2) {
  var n2 = t4.replace(/\+/g, " ");
  if ("iso-8859-1" === r2)
    return n2.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n2);
  } catch (t5) {
    return n2;
  }
}, encode: function(t4, e2, r2, o2, i2) {
  if (0 === t4.length)
    return t4;
  var s2 = t4;
  if ("symbol" == typeof t4 ? s2 = Symbol.prototype.toString.call(t4) : "string" != typeof t4 && (s2 = String(t4)), "iso-8859-1" === r2)
    return escape(s2).replace(/%u[0-9a-f]{4}/gi, function(t5) {
      return "%26%23" + parseInt(t5.slice(2), 16) + "%3B";
    });
  for (var a2 = "", f2 = 0; f2 < s2.length; ++f2) {
    var c2 = s2.charCodeAt(f2);
    45 === c2 || 46 === c2 || 95 === c2 || 126 === c2 || c2 >= 48 && c2 <= 57 || c2 >= 65 && c2 <= 90 || c2 >= 97 && c2 <= 122 || i2 === n.RFC1738 && (40 === c2 || 41 === c2) ? a2 += s2.charAt(f2) : c2 < 128 ? a2 += u[c2] : c2 < 2048 ? a2 += u[192 | c2 >> 6] + u[128 | 63 & c2] : c2 < 55296 || c2 >= 57344 ? a2 += u[224 | c2 >> 12] + u[128 | c2 >> 6 & 63] + u[128 | 63 & c2] : (c2 = 65536 + ((1023 & c2) << 10 | 1023 & s2.charCodeAt(f2 += 1)), a2 += u[240 | c2 >> 18] + u[128 | c2 >> 12 & 63] + u[128 | c2 >> 6 & 63] + u[128 | 63 & c2]);
  }
  return a2;
}, isBuffer: function(t4) {
  return !(!t4 || "object" != typeof t4 || !(t4.constructor && t4.constructor.isBuffer && t4.constructor.isBuffer(t4)));
}, isRegExp: function(t4) {
  return "[object RegExp]" === Object.prototype.toString.call(t4);
}, maybeMap: function(t4, e2) {
  if (i(t4)) {
    for (var r2 = [], n2 = 0; n2 < t4.length; n2 += 1)
      r2.push(e2(t4[n2]));
    return r2;
  }
  return e2(t4);
}, merge: function t2(e2, r2, n2) {
  if (!r2)
    return e2;
  if ("object" != typeof r2) {
    if (i(e2))
      e2.push(r2);
    else {
      if (!e2 || "object" != typeof e2)
        return [e2, r2];
      (n2 && (n2.plainObjects || n2.allowPrototypes) || !o.call(Object.prototype, r2)) && (e2[r2] = true);
    }
    return e2;
  }
  if (!e2 || "object" != typeof e2)
    return [e2].concat(r2);
  var u2 = e2;
  return i(e2) && !i(r2) && (u2 = s(e2, n2)), i(e2) && i(r2) ? (r2.forEach(function(r3, i2) {
    if (o.call(e2, i2)) {
      var u3 = e2[i2];
      u3 && "object" == typeof u3 && r3 && "object" == typeof r3 ? e2[i2] = t2(u3, r3, n2) : e2.push(r3);
    } else
      e2[i2] = r3;
  }), e2) : Object.keys(r2).reduce(function(e3, i2) {
    var u3 = r2[i2];
    return e3[i2] = o.call(e3, i2) ? t2(e3[i2], u3, n2) : u3, e3;
  }, u2);
} }, f = Object.prototype.hasOwnProperty, c = { brackets: function(t4) {
  return t4 + "[]";
}, comma: "comma", indices: function(t4, e2) {
  return t4 + "[" + e2 + "]";
}, repeat: function(t4) {
  return t4;
} }, l = Array.isArray, p = String.prototype.split, h = Array.prototype.push, y = function(t4, e2) {
  h.apply(t4, l(e2) ? e2 : [e2]);
}, d = Date.prototype.toISOString, b = n.default, m = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: a.encode, encodeValuesOnly: false, format: b, formatter: n.formatters[b], indices: false, serializeDate: function(t4) {
  return d.call(t4);
}, skipNulls: false, strictNullHandling: false }, v = function t3(e2, r2, n2, o2, i2, u2, s2, f2, c2, h2, d2, b2, v2, g2) {
  var j2, w2 = e2;
  if ("function" == typeof s2 ? w2 = s2(r2, w2) : w2 instanceof Date ? w2 = h2(w2) : "comma" === n2 && l(w2) && (w2 = a.maybeMap(w2, function(t4) {
    return t4 instanceof Date ? h2(t4) : t4;
  })), null === w2) {
    if (o2)
      return u2 && !v2 ? u2(r2, m.encoder, g2, "key", d2) : r2;
    w2 = "";
  }
  if ("string" == typeof (j2 = w2) || "number" == typeof j2 || "boolean" == typeof j2 || "symbol" == typeof j2 || "bigint" == typeof j2 || a.isBuffer(w2)) {
    if (u2) {
      var O2 = v2 ? r2 : u2(r2, m.encoder, g2, "key", d2);
      if ("comma" === n2 && v2) {
        for (var $2 = p.call(String(w2), ","), E2 = "", S2 = 0; S2 < $2.length; ++S2)
          E2 += (0 === S2 ? "" : ",") + b2(u2($2[S2], m.encoder, g2, "value", d2));
        return [b2(O2) + "=" + E2];
      }
      return [b2(O2) + "=" + b2(u2(w2, m.encoder, g2, "value", d2))];
    }
    return [b2(r2) + "=" + b2(String(w2))];
  }
  var R2, C2 = [];
  if (void 0 === w2)
    return C2;
  if ("comma" === n2 && l(w2))
    R2 = [{ value: w2.length > 0 ? w2.join(",") || null : void 0 }];
  else if (l(s2))
    R2 = s2;
  else {
    var x2 = Object.keys(w2);
    R2 = f2 ? x2.sort(f2) : x2;
  }
  for (var N = 0; N < R2.length; ++N) {
    var k = R2[N], T = "object" == typeof k && void 0 !== k.value ? k.value : w2[k];
    if (!i2 || null !== T) {
      var _2 = l(w2) ? "function" == typeof n2 ? n2(r2, k) : r2 : r2 + (c2 ? "." + k : "[" + k + "]");
      y(C2, t3(T, _2, n2, o2, i2, u2, s2, f2, c2, h2, d2, b2, v2, g2));
    }
  }
  return C2;
}, g = Object.prototype.hasOwnProperty, j = Array.isArray, w = { allowDots: false, allowPrototypes: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: a.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, O = function(t4) {
  return t4.replace(/&#(\d+);/g, function(t5, e2) {
    return String.fromCharCode(parseInt(e2, 10));
  });
}, $ = function(t4, e2) {
  return t4 && "string" == typeof t4 && e2.comma && t4.indexOf(",") > -1 ? t4.split(",") : t4;
}, E = function(t4, e2, r2, n2) {
  if (t4) {
    var o2 = r2.allowDots ? t4.replace(/\.([^.[]+)/g, "[$1]") : t4, i2 = /(\[[^[\]]*])/g, u2 = r2.depth > 0 && /(\[[^[\]]*])/.exec(o2), s2 = u2 ? o2.slice(0, u2.index) : o2, a2 = [];
    if (s2) {
      if (!r2.plainObjects && g.call(Object.prototype, s2) && !r2.allowPrototypes)
        return;
      a2.push(s2);
    }
    for (var f2 = 0; r2.depth > 0 && null !== (u2 = i2.exec(o2)) && f2 < r2.depth; ) {
      if (f2 += 1, !r2.plainObjects && g.call(Object.prototype, u2[1].slice(1, -1)) && !r2.allowPrototypes)
        return;
      a2.push(u2[1]);
    }
    return u2 && a2.push("[" + o2.slice(u2.index) + "]"), function(t5, e3, r3, n3) {
      for (var o3 = n3 ? e3 : $(e3, r3), i3 = t5.length - 1; i3 >= 0; --i3) {
        var u3, s3 = t5[i3];
        if ("[]" === s3 && r3.parseArrays)
          u3 = [].concat(o3);
        else {
          u3 = r3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var a3 = "[" === s3.charAt(0) && "]" === s3.charAt(s3.length - 1) ? s3.slice(1, -1) : s3, f3 = parseInt(a3, 10);
          r3.parseArrays || "" !== a3 ? !isNaN(f3) && s3 !== a3 && String(f3) === a3 && f3 >= 0 && r3.parseArrays && f3 <= r3.arrayLimit ? (u3 = [])[f3] = o3 : "__proto__" !== a3 && (u3[a3] = o3) : u3 = { 0: o3 };
        }
        o3 = u3;
      }
      return o3;
    }(a2, e2, r2, n2);
  }
}, S = function(t4, e2) {
  var r2 = function(t5) {
    if (!t5)
      return w;
    if (null != t5.decoder && "function" != typeof t5.decoder)
      throw new TypeError("Decoder has to be a function.");
    if (void 0 !== t5.charset && "utf-8" !== t5.charset && "iso-8859-1" !== t5.charset)
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    return { allowDots: void 0 === t5.allowDots ? w.allowDots : !!t5.allowDots, allowPrototypes: "boolean" == typeof t5.allowPrototypes ? t5.allowPrototypes : w.allowPrototypes, arrayLimit: "number" == typeof t5.arrayLimit ? t5.arrayLimit : w.arrayLimit, charset: void 0 === t5.charset ? w.charset : t5.charset, charsetSentinel: "boolean" == typeof t5.charsetSentinel ? t5.charsetSentinel : w.charsetSentinel, comma: "boolean" == typeof t5.comma ? t5.comma : w.comma, decoder: "function" == typeof t5.decoder ? t5.decoder : w.decoder, delimiter: "string" == typeof t5.delimiter || a.isRegExp(t5.delimiter) ? t5.delimiter : w.delimiter, depth: "number" == typeof t5.depth || false === t5.depth ? +t5.depth : w.depth, ignoreQueryPrefix: true === t5.ignoreQueryPrefix, interpretNumericEntities: "boolean" == typeof t5.interpretNumericEntities ? t5.interpretNumericEntities : w.interpretNumericEntities, parameterLimit: "number" == typeof t5.parameterLimit ? t5.parameterLimit : w.parameterLimit, parseArrays: false !== t5.parseArrays, plainObjects: "boolean" == typeof t5.plainObjects ? t5.plainObjects : w.plainObjects, strictNullHandling: "boolean" == typeof t5.strictNullHandling ? t5.strictNullHandling : w.strictNullHandling };
  }(e2);
  if ("" === t4 || null == t4)
    return r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n2 = "string" == typeof t4 ? function(t5, e3) {
    var r3, n3 = {}, o3 = (e3.ignoreQueryPrefix ? t5.replace(/^\?/, "") : t5).split(e3.delimiter, Infinity === e3.parameterLimit ? void 0 : e3.parameterLimit), i3 = -1, u3 = e3.charset;
    if (e3.charsetSentinel)
      for (r3 = 0; r3 < o3.length; ++r3)
        0 === o3[r3].indexOf("utf8=") && ("utf8=%E2%9C%93" === o3[r3] ? u3 = "utf-8" : "utf8=%26%2310003%3B" === o3[r3] && (u3 = "iso-8859-1"), i3 = r3, r3 = o3.length);
    for (r3 = 0; r3 < o3.length; ++r3)
      if (r3 !== i3) {
        var s3, f3, c2 = o3[r3], l2 = c2.indexOf("]="), p2 = -1 === l2 ? c2.indexOf("=") : l2 + 1;
        -1 === p2 ? (s3 = e3.decoder(c2, w.decoder, u3, "key"), f3 = e3.strictNullHandling ? null : "") : (s3 = e3.decoder(c2.slice(0, p2), w.decoder, u3, "key"), f3 = a.maybeMap($(c2.slice(p2 + 1), e3), function(t6) {
          return e3.decoder(t6, w.decoder, u3, "value");
        })), f3 && e3.interpretNumericEntities && "iso-8859-1" === u3 && (f3 = O(f3)), c2.indexOf("[]=") > -1 && (f3 = j(f3) ? [f3] : f3), n3[s3] = g.call(n3, s3) ? a.combine(n3[s3], f3) : f3;
      }
    return n3;
  }(t4, r2) : t4, o2 = r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i2 = Object.keys(n2), u2 = 0; u2 < i2.length; ++u2) {
    var s2 = i2[u2], f2 = E(s2, n2[s2], r2, "string" == typeof t4);
    o2 = a.merge(o2, f2, r2);
  }
  return a.compact(o2);
};
class R {
  constructor(t4, e2, r2) {
    var n2, o2;
    this.name = t4, this.definition = e2, this.bindings = null != (n2 = e2.bindings) ? n2 : {}, this.wheres = null != (o2 = e2.wheres) ? o2 : {}, this.config = r2;
  }
  get template() {
    return `${this.origin}/${this.definition.uri}`.replace(/\/+$/, "");
  }
  get origin() {
    return this.config.absolute ? this.definition.domain ? `${this.config.url.match(/^\w+:\/\//)[0]}${this.definition.domain}${this.config.port ? `:${this.config.port}` : ""}` : this.config.url : "";
  }
  get parameterSegments() {
    var t4, e2;
    return null != (t4 = null == (e2 = this.template.match(/{[^}?]+\??}/g)) ? void 0 : e2.map((t5) => ({ name: t5.replace(/{|\??}/g, ""), required: !/\?}$/.test(t5) }))) ? t4 : [];
  }
  matchesUrl(t4) {
    if (!this.definition.methods.includes("GET"))
      return false;
    const e2 = this.template.replace(/(\/?){([^}?]*)(\??)}/g, (t5, e3, r3, n3) => {
      var o3;
      const i2 = `(?<${r3}>${(null == (o3 = this.wheres[r3]) ? void 0 : o3.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+"})`;
      return n3 ? `(${e3}${i2})?` : `${e3}${i2}`;
    }).replace(/^\w+:\/\//, ""), [r2, n2] = t4.replace(/^\w+:\/\//, "").split("?"), o2 = new RegExp(`^${e2}/?$`).exec(r2);
    if (o2) {
      for (const t5 in o2.groups)
        o2.groups[t5] = "string" == typeof o2.groups[t5] ? decodeURIComponent(o2.groups[t5]) : o2.groups[t5];
      return { params: o2.groups, query: S(n2) };
    }
    return false;
  }
  compile(t4) {
    const e2 = this.parameterSegments;
    return e2.length ? this.template.replace(/{([^}?]+)(\??)}/g, (r2, n2, o2) => {
      var i2, u2, s2;
      if (!o2 && [null, void 0].includes(t4[n2]))
        throw new Error(`Ziggy error: '${n2}' parameter is required for route '${this.name}'.`);
      if (e2[e2.length - 1].name === n2 && ".*" === this.wheres[n2])
        return encodeURIComponent(null != (s2 = t4[n2]) ? s2 : "").replace(/%2F/g, "/");
      if (this.wheres[n2] && !new RegExp(`^${o2 ? `(${this.wheres[n2]})?` : this.wheres[n2]}$`).test(null != (i2 = t4[n2]) ? i2 : ""))
        throw new Error(`Ziggy error: '${n2}' parameter does not match required format '${this.wheres[n2]}' for route '${this.name}'.`);
      return encodeURIComponent(null != (u2 = t4[n2]) ? u2 : "");
    }).replace(`${this.origin}//`, `${this.origin}/`).replace(/\/+$/, "") : this.template;
  }
}
class C extends String {
  constructor(e2, r2, n2 = true, o2) {
    if (super(), this.t = null != o2 ? o2 : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, this.t = t({}, this.t, { absolute: n2 }), e2) {
      if (!this.t.routes[e2])
        throw new Error(`Ziggy error: route '${e2}' is not in the route list.`);
      this.i = new R(e2, this.t.routes[e2], this.t), this.u = this.l(r2);
    }
  }
  toString() {
    const e2 = Object.keys(this.u).filter((t4) => !this.i.parameterSegments.some(({ name: e3 }) => e3 === t4)).filter((t4) => "_query" !== t4).reduce((e3, r2) => t({}, e3, { [r2]: this.u[r2] }), {});
    return this.i.compile(this.u) + function(t4, e3) {
      var r2, o2 = t4, i2 = function(t5) {
        if (!t5)
          return m;
        if (null != t5.encoder && "function" != typeof t5.encoder)
          throw new TypeError("Encoder has to be a function.");
        var e4 = t5.charset || m.charset;
        if (void 0 !== t5.charset && "utf-8" !== t5.charset && "iso-8859-1" !== t5.charset)
          throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var r3 = n.default;
        if (void 0 !== t5.format) {
          if (!f.call(n.formatters, t5.format))
            throw new TypeError("Unknown format option provided.");
          r3 = t5.format;
        }
        var o3 = n.formatters[r3], i3 = m.filter;
        return ("function" == typeof t5.filter || l(t5.filter)) && (i3 = t5.filter), { addQueryPrefix: "boolean" == typeof t5.addQueryPrefix ? t5.addQueryPrefix : m.addQueryPrefix, allowDots: void 0 === t5.allowDots ? m.allowDots : !!t5.allowDots, charset: e4, charsetSentinel: "boolean" == typeof t5.charsetSentinel ? t5.charsetSentinel : m.charsetSentinel, delimiter: void 0 === t5.delimiter ? m.delimiter : t5.delimiter, encode: "boolean" == typeof t5.encode ? t5.encode : m.encode, encoder: "function" == typeof t5.encoder ? t5.encoder : m.encoder, encodeValuesOnly: "boolean" == typeof t5.encodeValuesOnly ? t5.encodeValuesOnly : m.encodeValuesOnly, filter: i3, format: r3, formatter: o3, serializeDate: "function" == typeof t5.serializeDate ? t5.serializeDate : m.serializeDate, skipNulls: "boolean" == typeof t5.skipNulls ? t5.skipNulls : m.skipNulls, sort: "function" == typeof t5.sort ? t5.sort : null, strictNullHandling: "boolean" == typeof t5.strictNullHandling ? t5.strictNullHandling : m.strictNullHandling };
      }(e3);
      "function" == typeof i2.filter ? o2 = (0, i2.filter)("", o2) : l(i2.filter) && (r2 = i2.filter);
      var u2 = [];
      if ("object" != typeof o2 || null === o2)
        return "";
      var s2 = c[e3 && e3.arrayFormat in c ? e3.arrayFormat : e3 && "indices" in e3 ? e3.indices ? "indices" : "repeat" : "indices"];
      r2 || (r2 = Object.keys(o2)), i2.sort && r2.sort(i2.sort);
      for (var a2 = 0; a2 < r2.length; ++a2) {
        var p2 = r2[a2];
        i2.skipNulls && null === o2[p2] || y(u2, v(o2[p2], p2, s2, i2.strictNullHandling, i2.skipNulls, i2.encode ? i2.encoder : null, i2.filter, i2.sort, i2.allowDots, i2.serializeDate, i2.format, i2.formatter, i2.encodeValuesOnly, i2.charset));
      }
      var h2 = u2.join(i2.delimiter), d2 = true === i2.addQueryPrefix ? "?" : "";
      return i2.charsetSentinel && (d2 += "iso-8859-1" === i2.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), h2.length > 0 ? d2 + h2 : "";
    }(t({}, e2, this.u._query), { addQueryPrefix: true, arrayFormat: "indices", encodeValuesOnly: true, skipNulls: true, encoder: (t4, e3) => "boolean" == typeof t4 ? Number(t4) : e3(t4) });
  }
  p(e2) {
    e2 ? this.t.absolute && e2.startsWith("/") && (e2 = this.h().host + e2) : e2 = this.m();
    let r2 = {};
    const [n2, o2] = Object.entries(this.t.routes).find(([t4, n3]) => r2 = new R(t4, n3, this.t).matchesUrl(e2)) || [void 0, void 0];
    return t({ name: n2 }, r2, { route: o2 });
  }
  m() {
    const { host: t4, pathname: e2, search: r2 } = this.h();
    return (this.t.absolute ? t4 + e2 : e2.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + r2;
  }
  current(e2, r2) {
    const { name: n2, params: o2, query: i2, route: u2 } = this.p();
    if (!e2)
      return n2;
    const s2 = new RegExp(`^${e2.replace(/\./g, "\\.").replace(/\*/g, ".*")}$`).test(n2);
    if ([null, void 0].includes(r2) || !s2)
      return s2;
    const a2 = new R(n2, u2, this.t);
    r2 = this.l(r2, a2);
    const f2 = t({}, o2, i2);
    return !(!Object.values(r2).every((t4) => !t4) || Object.values(f2).some((t4) => void 0 !== t4)) || Object.entries(r2).every(([t4, e3]) => f2[t4] == e3);
  }
  h() {
    var t4, e2, r2, n2, o2, i2;
    const { host: u2 = "", pathname: s2 = "", search: a2 = "" } = "undefined" != typeof window ? window.location : {};
    return { host: null != (t4 = null == (e2 = this.t.location) ? void 0 : e2.host) ? t4 : u2, pathname: null != (r2 = null == (n2 = this.t.location) ? void 0 : n2.pathname) ? r2 : s2, search: null != (o2 = null == (i2 = this.t.location) ? void 0 : i2.search) ? o2 : a2 };
  }
  get params() {
    const { params: e2, query: r2 } = this.p();
    return t({}, e2, r2);
  }
  has(t4) {
    return Object.keys(this.t.routes).includes(t4);
  }
  l(e2 = {}, r2 = this.i) {
    null != e2 || (e2 = {}), e2 = ["string", "number"].includes(typeof e2) ? [e2] : e2;
    const n2 = r2.parameterSegments.filter(({ name: t4 }) => !this.t.defaults[t4]);
    return Array.isArray(e2) ? e2 = e2.reduce((e3, r3, o2) => t({}, e3, n2[o2] ? { [n2[o2].name]: r3 } : "object" == typeof r3 ? r3 : { [r3]: "" }), {}) : 1 !== n2.length || e2[n2[0].name] || !e2.hasOwnProperty(Object.values(r2.bindings)[0]) && !e2.hasOwnProperty("id") || (e2 = { [n2[0].name]: e2 }), t({}, this.v(r2), this.g(e2, r2));
  }
  v(e2) {
    return e2.parameterSegments.filter(({ name: t4 }) => this.t.defaults[t4]).reduce((e3, { name: r2 }, n2) => t({}, e3, { [r2]: this.t.defaults[r2] }), {});
  }
  g(e2, { bindings: r2, parameterSegments: n2 }) {
    return Object.entries(e2).reduce((e3, [o2, i2]) => {
      if (!i2 || "object" != typeof i2 || Array.isArray(i2) || !n2.some(({ name: t4 }) => t4 === o2))
        return t({}, e3, { [o2]: i2 });
      if (!i2.hasOwnProperty(r2[o2])) {
        if (!i2.hasOwnProperty("id"))
          throw new Error(`Ziggy error: object passed as '${o2}' parameter is missing route model binding key '${r2[o2]}'.`);
        r2[o2] = "id";
      }
      return t({}, e3, { [o2]: i2[r2[o2]] });
    }, {});
  }
  valueOf() {
    return this.toString();
  }
  check(t4) {
    return this.has(t4);
  }
}
const x = { install: (t4, e2) => {
  const r2 = (t5, r3, n2, o2 = e2) => function(t6, e3, r4, n3) {
    const o3 = new C(t6, e3, r4, n3);
    return t6 ? o3.toString() : o3;
  }(t5, r3, n2, o2);
  t4.mixin({ methods: { route: r2 } }), parseInt(t4.version) > 2 && t4.provide("route", r2);
} };
const ssrPlugin = {
  install(app) {
    axios$1.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
    axios$1.defaults.withCredentials = true;
    const pinia = createPinia();
    const is_null = (obj) => {
      return !obj && typeof obj === "object";
    };
    const isObject = (obj) => {
      return obj === Object(obj);
    };
    app.provide("emitter", mitt());
    app.provide("dayjs", dayjs);
    app.provide("axios", axios$1);
    app.provide("isObject", isObject);
    app.provide("is_null", is_null);
    app.use(pinia);
    app.component("Head", Head);
    app.component("Link", Link);
  }
};
const _hoisted_1 = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  "fill-rule": "evenodd",
  d: "M14.707 12.707a1 1 0 0 1-1.414 0L10 9.414l-3.293 3.293a1 1 0 0 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414Z",
  "clip-rule": "evenodd"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
const __unplugin_components_0 = { name: "heroicons-solid-chevron-up", render };
const ScrollTop_vue_vue_type_style_index_0_scoped_dbd85cd6_lang = "";
const _sfc_main$9 = {
  __name: "ScrollTop",
  __ssrInlineRender: true,
  setup(__props) {
    const isVisible = ref(false);
    const watchDisplay = () => {
      isVisible.value = window.pageYOffset > 600;
    };
    onMounted(() => {
      document.addEventListener("scroll", watchDisplay, { passive: true });
    });
    onUnmounted(() => {
      document.removeEventListener("scroll", watchDisplay);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconSolidChevronUp = __unplugin_components_0;
      _push(`<button${ssrRenderAttrs(mergeProps({
        style: unref(isVisible) ? null : { display: "none" },
        type: "button",
        class: "fixed bottom-0 right-0 mb-10 mr-10 flex h-10 w-10 items-center rounded-full bg-blue-500 text-white shadow-xl focus:bg-blue-600 focus:outline-none"
      }, _attrs))} data-v-dbd85cd6>`);
      _push(ssrRenderComponent(_component_IconSolidChevronUp, { class: "mx-auto h-6 w-6" }, null, _parent));
      _push(`</button>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Shared/ScrollTop.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __unplugin_components_10 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-dbd85cd6"]]);
const _sfc_main$8 = {
  __name: "Toc",
  __ssrInlineRender: true,
  setup(__props) {
    const { isClient } = useClientOnly();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(isClient)) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          id: "toc",
          class: "rounded bg-white px-4 pt-4 shadow dark:bg-gray-800 dark:text-gray-100"
        }, _attrs))}><h2 class="mb-3 text-sm font-semibold uppercase text-gray-600 dark:text-gray-400">${ssrInterpolate(_ctx.__("On This Page"))}</h2>`);
        if (_ctx.$page.props.toc && _ctx.$page.props.toc.length > 0) {
          _push(`<ul class="divide-y divide-dashed divide-gray-200 dark:divide-gray-600"><!--[-->`);
          ssrRenderList(_ctx.$page.props.toc, (link, i2) => {
            _push(`<li class="py-3"><a${ssrRenderAttr("href", link.href)} class="ml-1 text-sm text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100">${ssrInterpolate(link.text)}</a></li>`);
          });
          _push(`<!--]--></ul>`);
        } else {
          _push(`<ul><li class="py-3 text-sm text-gray-600 dark:text-gray-300">${ssrInterpolate(_ctx.__("Nothing Yet ..."))}</li></ul>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Partials/Docs/Toc.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "mt-8 border-t border-gray-200 pt-8 dark:border-gray-600" }, _attrs))}><div class="flex flex-col items-center justify-center md:flex-row md:justify-between"><div class="mb-4 md:mb-0"><div class="flex shrink-0 flex-col items-center md:flex-row"><div class="ml-4 text-sm text-gray-500">${_ctx.$page.props.copyright}</div></div></div></div></footer>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Partials/Docs/PageFooter.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __unplugin_components_8 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$6 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "items-center justify-between space-y-6 pt-8 sm:flex sm:space-x-4 sm:space-y-0" }, _attrs))}>`);
  if (_ctx.$page.props.prevPage) {
    _push(`<div class="flex-col items-start sm:flex sm:w-1/2"><div><div class="mb-1 pl-4 text-xs font-[650] uppercase text-blue-600"> Previous </div><div>`);
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.$page.props.prevPage.link,
      class: "flex items-center font-medium text-gray-800 dark:text-gray-200"
    }, {
      default: withCtx((_2, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<svg class="mr-2 shrink-0 rotate-180 fill-gray-400 dark:fill-gray-500" width="8" height="10" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M1 2 2.414.586 6.828 5 2.414 9.414 1 8l3-3z"${_scopeId}></path></svg><span${_scopeId}>${ssrInterpolate(_ctx.$page.props.prevPage.title)}</span>`);
        } else {
          return [
            (openBlock(), createBlock("svg", {
              class: "mr-2 shrink-0 rotate-180 fill-gray-400 dark:fill-gray-500",
              width: "8",
              height: "10",
              xmlns: "http://www.w3.org/2000/svg"
            }, [
              createVNode("path", { d: "M1 2 2.414.586 6.828 5 2.414 9.414 1 8l3-3z" })
            ])),
            createVNode("span", null, toDisplayString(_ctx.$page.props.prevPage.title), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.$page.props.nextPage) {
    _push(`<div class="ml-auto flex-col items-end sm:flex sm:w-1/2"><div><div class="mb-1 pr-4 text-right text-xs font-[650] uppercase text-blue-600"> Next </div>`);
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.$page.props.nextPage.link,
      class: "flex items-center font-medium text-gray-800 dark:text-gray-200"
    }, {
      default: withCtx((_2, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$page.props.nextPage.title)}</span><svg class="ml-2 shrink-0 fill-gray-400 dark:fill-gray-500" width="8" height="10" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M1 2 2.414.586 6.828 5 2.414 9.414 1 8l3-3z"${_scopeId}></path></svg>`);
        } else {
          return [
            createVNode("span", null, toDisplayString(_ctx.$page.props.nextPage.title), 1),
            (openBlock(), createBlock("svg", {
              class: "ml-2 shrink-0 fill-gray-400 dark:fill-gray-500",
              width: "8",
              height: "10",
              xmlns: "http://www.w3.org/2000/svg"
            }, [
              createVNode("path", { d: "M1 2 2.414.586 6.828 5 2.414 9.414 1 8l3-3z" })
            ]))
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Partials/Docs/PageNavigation.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __unplugin_components_7 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender]]);
const useCoreStore = defineStore({
  id: "core",
  state: () => ({
    sidebarOpen: false
  }),
  actions: {
    toggleSidebar(toggle) {
      this.sidebarOpen = toggle;
    },
    fetchSomething() {
    }
  },
  getters: {
    getSidebarOpen: (state) => {
      return state.sidebarOpen;
    }
  }
});
defineStore({
  id: "docs",
  state: () => ({
    current: "",
    versions: [],
    navigation: []
  }),
  actions: {
    fetchNavigation() {
      axios.get(useRoutes("api.menu.fetch")).then((response) => {
        this.current = response.data.versions.current;
        this.versions = response.data.versions.all;
        this.navigation = response.data.navigation;
        return Promise.resolve(response.data);
      });
    }
  },
  getters: {
    getCurrentVersion: (state) => {
      return state.current;
    },
    getVersions: (state) => {
      return state.versions;
    },
    getNavigation: (state) => {
      return state.navigation;
    }
  }
});
const _sfc_main$5 = {
  __name: "MenuButton",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useCoreStore();
    const sidebarOpen = computed(() => store.getSidebarOpen);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: "hamburger",
        "aria-controls": "sidebar",
        "aria-expanded": unref(sidebarOpen)
      }, _attrs))}><span class="sr-only">Menu</span><svg class="h-6 w-6 fill-gray-600 dark:fill-gray-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="5" width="16" height="2"></rect><rect x="4" y="11" width="16" height="2"></rect><rect x="4" y="17" width="16" height="2"></rect></svg></button>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Partials/Docs/MenuButton.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "MobileNavTrigger",
  __ssrInlineRender: true,
  setup(__props) {
    const sidebarOpen = ref(false);
    const emitter = inject("emitter");
    const toggleSidebar = () => {
      sidebarOpen.value = !sidebarOpen.value;
      emitter.emit("toggle-sidebar", sidebarOpen.value);
    };
    const { isClient } = useClientOnly();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MenuButton = _sfc_main$5;
      const _component_Link = resolveComponent("Link");
      if (unref(isClient)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-8 mt-6 flex items-center dark:text-gray-100 sm:mt-0 lg:mb-0 lg:hidden" }, _attrs))}>`);
        _push(ssrRenderComponent(_component_MenuButton, {
          sidebarOpen: unref(sidebarOpen),
          onToggleSidebar: toggleSidebar
        }, null, _parent));
        _push(`<ol class="breadcrumbs ml-2 flex"><!--[-->`);
        ssrRenderList(_ctx.$page.props.breadcrumbs, (breadcrumb, index) => {
          _push(`<li>`);
          if (breadcrumb.route === "last") {
            _push(`<li class="last">${ssrInterpolate(breadcrumb.text)}</li>`);
          } else {
            _push(ssrRenderComponent(_component_Link, {
              href: breadcrumb.route
            }, {
              default: withCtx((_2, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(breadcrumb.text)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(breadcrumb.text), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          }
          _push(`</li>`);
        });
        _push(`<!--]--></ol></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Partials/Docs/MobileNavTrigger.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "MobileCanvas",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    const store = useCoreStore();
    const sidebarOpen = computed(() => store.getSidebarOpen);
    const navigation = usePage().props.sidebar;
    const clickHandler = ({ target }) => {
      if (!sidebarOpen.value)
        return;
      store.toggleSidebar(!sidebarOpen.value);
    };
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen.value || keyCode !== 27)
        return;
      store.toggleSidebar(!sidebarOpen.value);
    };
    onMounted(() => {
      document.addEventListener("click", clickHandler);
      document.addEventListener("keydown", keyHandler);
    });
    onUnmounted(() => {
      document.removeEventListener("click", clickHandler);
      document.removeEventListener("keydown", keyHandler);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: unref(sidebarOpen) ? null : { display: "none" },
        class: "fixed top-[169px] z-40 flex"
      }, _attrs))}><div style="${ssrRenderStyle(unref(sidebarOpen) ? null : { display: "none" })}" class="relative flex min-h-max w-full min-w-[300px] max-w-max flex-1 flex-col rounded bg-gray-200 pb-4 pr-2 pt-5 dark:bg-gray-700"><div class="mt-1 h-0 flex-1 overflow-y-auto"><nav class="w-full pr-6 text-sm"><ul class="space-y-9"><!--[-->`);
      ssrRenderList(unref(navigation), (categories, c2) => {
        _push(`<li class="pl-3"><h2 class="font-medium text-gray-900 dark:text-white">${ssrInterpolate(c2)}</h2><ul class="mt-2 space-y-2 border-l-2 border-gray-300 dark:border-gray-800 lg:mt-4 lg:space-y-4 lg:border-gray-200"><!--[-->`);
        ssrRenderList(categories, (link, i2) => {
          _push(`<li class="relative">`);
          _push(ssrRenderComponent(_component_Link, {
            href: _ctx.route("docs.show", {
              version: link.version,
              page: link.uri
            }),
            class: ["block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full", [
              _ctx.route().current("docs.show", {
                version: link.version,
                page: link.uri
              }) ? "font-semibold text-blue-500 before:bg-blue-500" : "text-gray-500 before:hidden before:bg-gray-300 hover:text-gray-600 hover:before:block dark:text-gray-400 dark:before:bg-gray-800 dark:hover:text-gray-300"
            ]]
          }, {
            default: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(link.title)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(link.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></li>`);
      });
      _push(`<!--]--></ul></nav></div></div><div class="w-14 flex-shrink-0"></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Partials/Docs/MobileCanvas.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "DocSidebar",
  __ssrInlineRender: true,
  setup(__props) {
    const navigation = usePage().props.sidebar;
    const currentPage = computed(() => usePage().props.currentSection);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "h-screen text-sm" }, _attrs))}><ul class="space-y-9"><!--[-->`);
      ssrRenderList(unref(navigation), (categories, c2) => {
        _push(`<li class="pl-3"><h2 class="font-medium uppercase text-gray-900 dark:text-white">${ssrInterpolate(c2)}</h2><ul class="mt-2 space-y-2 border-l-2 border-gray-200 dark:border-gray-800 lg:mt-4 lg:space-y-4 lg:border-gray-200"><!--[-->`);
        ssrRenderList(categories, (link, i2) => {
          _push(`<li class="relative">`);
          _push(ssrRenderComponent(_component_Link, {
            href: _ctx.route("docs.show", {
              version: link.version,
              page: link.uri
            }),
            class: ["block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full", [
              link.uri === unref(currentPage) ? "font-semibold text-blue-500 before:bg-blue-500" : "text-gray-500 before:hidden before:bg-gray-300 hover:text-gray-600 hover:before:block dark:text-gray-400 dark:before:bg-gray-700 dark:hover:text-gray-300"
            ]]
          }, {
            default: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(link.title)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(link.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></li>`);
      });
      _push(`<!--]--></ul></nav>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Partials/Docs/DocSidebar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "DocNavigation",
  __ssrInlineRender: true,
  setup(__props) {
    const showingNavigationDropdown = ref(false);
    const searchModalOpen = ref(false);
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    const stickyHeader = ref(false);
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        stickyHeader.value = true;
      } else {
        stickyHeader.value = false;
      }
    };
    const isDocs = computed(() => useRoutes().current().startsWith("docs"));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      const _component_ApplicationMark = __unplugin_components_4$1;
      const _component_NavLink = _sfc_main$U;
      const _component_IconOutlineSearch = __unplugin_components_2$3;
      const _component_ThemeSwitcher = _sfc_main$X;
      const _component_IconOutlineMenu = __unplugin_components_4$2;
      const _component_IconOutlineX = __unplugin_components_5$1;
      const _component_GuestResponsiveNavMenu = _sfc_main$L;
      const _component_DocHeaderbar = _sfc_main$_;
      const _component_SearchModal = _sfc_main$14;
      _push(`<!--[--><nav class="${ssrRenderClass([{ stickyHeader: unref(stickyHeader) }, "sticky top-0 z-50 bg-white dark:bg-gray-800"])}"><div class="px-6"><div class="flex h-16 justify-center md:justify-between"><div class="flex w-full items-center"><div class="flex shrink-0 items-center">`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("home"),
        "aria-name": "Home"
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ApplicationMark, { class: "block h-9 w-auto" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ApplicationMark, { class: "block h-9 w-auto" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hidden space-x-8 sm:flex lg:-my-px lg:ml-10">`);
      if (_ctx.$page.props.user) {
        _push(ssrRenderComponent(_component_NavLink, {
          href: _ctx.route("dashboard"),
          active: _ctx.route().current("dashboard")
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.__("Dashboard"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.__("Dashboard")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_NavLink, {
        href: _ctx.route("docs.home"),
        class: "my-px",
        active: unref(isDocs)
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.__("Documentation"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.__("Documentation")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex w-full justify-center px-4 lg:px-0"><button class="${ssrRenderClass([{ "bg-gray-200": unref(searchModalOpen) }, "m-auto inline-flex w-full items-center justify-between whitespace-nowrap rounded border border-gray-200 bg-white py-[7px] pl-3 pr-2 text-[15px] leading-5 text-gray-400 shadow-sm hover:border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-500 dark:hover:border-gray-600 sm:w-[380px]"])}" aria-controls="search-modal"><div class="flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_IconOutlineSearch, { class: "mr-3 h-4 w-4 shrink-0 fill-gray-500 dark:fill-gray-400" }, null, _parent));
      _push(`<span>Search ... </span></div><div class="ml-3 flex h-5 w-5 items-center justify-center font-medium text-gray-500 dark:text-gray-400"><kbd class="text-[length:1.2em]">⌘</kbd><kbd class="ml-[2px] text-[length:0.9em]">K</kbd></div></button></div><div class="hidden sm:ml-6 sm:flex sm:items-center">`);
      if (_ctx.$page.props.canLogin) {
        _push(`<div class="hidden px-6 py-4 lg:flex lg:items-center lg:justify-end">`);
        if (!_ctx.$page.props.user) {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(_component_NavLink, {
            href: _ctx.route("login"),
            active: _ctx.route().current("login")
          }, {
            default: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.__("Login"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.__("Login")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_Link, {
            href: _ctx.route("register"),
            class: "border-orange bg-orange ml-4 inline-flex w-full items-center justify-center rounded-full border-2 px-4 py-1.5 text-center text-sm font-medium text-white duration-200 hover:bg-transparent hover:text-orange-600 focus:outline-none focus-visible:outline-white focus-visible:ring-white dark:border-white dark:bg-white dark:text-gray-700 dark:hover:bg-transparent dark:hover:text-white lg:w-auto"
          }, {
            default: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.__("Register"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.__("Register")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_ThemeSwitcher, { class: "ml-3" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="-mr-2 flex items-center sm:hidden"><button class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none dark:hover:bg-gray-700 dark:hover:text-gray-200 dark:focus:bg-gray-700 dark:focus:text-gray-200">`);
      _push(ssrRenderComponent(_component_IconOutlineMenu, {
        class: ["h-6 w-6", {
          hidden: unref(showingNavigationDropdown),
          "inline-flex": !unref(showingNavigationDropdown)
        }]
      }, null, _parent));
      _push(ssrRenderComponent(_component_IconOutlineX, {
        class: ["h-6 w-6", {
          hidden: !unref(showingNavigationDropdown),
          "inline-flex": unref(showingNavigationDropdown)
        }]
      }, null, _parent));
      _push(`</button></div></div></div>`);
      _push(ssrRenderComponent(_component_GuestResponsiveNavMenu, { show: unref(showingNavigationDropdown) }, null, _parent));
      _push(ssrRenderComponent(_component_DocHeaderbar, { stickyHeader: unref(stickyHeader) }, null, _parent));
      _push(`</nav>`);
      ssrRenderTeleport(_push, (_push2) => {
        _push2(ssrRenderComponent(_component_SearchModal, {
          id: "search-modal",
          searchId: "search",
          modalOpen: unref(searchModalOpen),
          onOpenModal: ($event) => searchModalOpen.value = true,
          onCloseModal: ($event) => searchModalOpen.value = false
        }, null, _parent));
      }, "#teleported", false, _parent);
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Partials/Docs/DocNavigation.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "DocLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const status = ref(0);
    status.value = usePage().props.title == "Page Not Found" ? 404 : 200;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      const _component_MainNavigation = _sfc_main$S;
      const _component_DocNavigation = _sfc_main$1;
      const _component_DocSidebar = _sfc_main$2;
      const _component_MobileCanvas = _sfc_main$3;
      const _component_ApplicationMark = __unplugin_components_4$1;
      const _component_SectionBorder = _sfc_main$1k;
      const _component_MobileNavTrigger = _sfc_main$4;
      const _component_PageNavigation = __unplugin_components_7;
      const _component_PageFooter = __unplugin_components_8;
      const _component_Toc = _sfc_main$8;
      const _component_ScrollTop = __unplugin_components_10;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, {
        title: _ctx.$page.props.title
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<meta head-key="description"${ssrRenderAttr("content", _ctx.$page.props.description)}${_scopeId}><meta head-key="keywords"${ssrRenderAttr("content", _ctx.$page.props.keywords)}${_scopeId}>`);
          } else {
            return [
              createVNode("meta", {
                "head-key": "description",
                content: _ctx.$page.props.description
              }, null, 8, ["content"]),
              createVNode("meta", {
                "head-key": "keywords",
                content: _ctx.$page.props.keywords
              }, null, 8, ["content"])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (_ctx.$page.props.user) {
        _push(ssrRenderComponent(_component_MainNavigation, null, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_DocNavigation, null, null, _parent));
      }
      _push(`<main class="mt-4 grid grid-cols-12 gap-4 px-4 pb-8"><aside class="sticky top-0 col-span-2 hidden min-h-screen bg-gray-100 dark:bg-gray-900 lg:block">`);
      _push(ssrRenderComponent(_component_DocSidebar, null, null, _parent));
      _push(`</aside>`);
      _push(ssrRenderComponent(_component_MobileCanvas, null, null, _parent));
      _push(`<div class="col-span-12 rounded bg-white px-4 py-6 shadow dark:bg-gray-800 lg:col-span-7"><div class="flex items-center">`);
      _push(ssrRenderComponent(_component_ApplicationMark, { class: "block h-10 w-auto" }, null, _parent));
      _push(`<h1 class="ml-4 text-4xl font-normal text-gray-800 dark:text-gray-200">${ssrInterpolate(_ctx.$page.props.title)}</h1></div>`);
      _push(ssrRenderComponent(_component_SectionBorder, null, null, _parent));
      _push(ssrRenderComponent(_component_MobileNavTrigger, null, null, _parent));
      _push(`<div class="docs docs-slate dark:docs-invert docs-headings:font-normal">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      if (unref(status) !== 404) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_SectionBorder, {
          size: "sm",
          class: "mt-6"
        }, null, _parent));
        _push(ssrRenderComponent(_component_PageNavigation, null, null, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_PageFooter, null, null, _parent));
      _push(`</div><div class="col-span-3 hidden lg:block">`);
      _push(ssrRenderComponent(_component_Toc, null, null, _parent));
      _push(`</div></main>`);
      _push(ssrRenderComponent(_component_ScrollTop, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Layouts/DocLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pages = /* @__PURE__ */ Object.assign({ "./pages/API/Index.vue": __vite_glob_0_0, "./pages/Auth/ConfirmPassword.vue": __vite_glob_0_1, "./pages/Auth/ForgotPassword.vue": __vite_glob_0_2, "./pages/Auth/InviteUser.vue": __vite_glob_0_3, "./pages/Auth/Login.vue": __vite_glob_0_4, "./pages/Auth/Register.vue": __vite_glob_0_5, "./pages/Auth/ResetPassword.vue": __vite_glob_0_6, "./pages/Auth/TwoFactorChallenge.vue": __vite_glob_0_7, "./pages/Auth/VerifyEmail.vue": __vite_glob_0_8, "./pages/Dashboard.vue": __vite_glob_0_9, "./pages/Docs/2.0/action-domain-responder.md": __vite_glob_0_10, "./pages/Docs/2.0/getting-started.md": __vite_glob_0_11, "./pages/Docs/2.0/installation.md": __vite_glob_0_12, "./pages/Docs/404.md": __vite_glob_0_13, "./pages/Markdown/Policy.md": __vite_glob_0_14, "./pages/Markdown/Terms.md": __vite_glob_0_15, "./pages/PrivacyPolicy.vue": __vite_glob_0_16, "./pages/Profile/Show.vue": __vite_glob_0_17, "./pages/Settings/Show.vue": __vite_glob_0_18, "./pages/Teams/Create.vue": __vite_glob_0_19, "./pages/Teams/Show.vue": __vite_glob_0_20, "./pages/TermsOfService.vue": __vite_glob_0_21, "./pages/Welcome.vue": __vite_glob_0_22 });
const appName = "Serenity";
createServer(
  (page) => createInertiaApp({
    title: (title2) => `${title2} - ${appName}`,
    page,
    render: renderToString,
    resolve: async (name) => {
      let component;
      try {
        component = await resolvePageComponent(`./pages/${name}.vue`, pages);
      } catch (e2) {
        component = await resolvePageComponent(`./pages/${name}.md`, pages);
        component.default.layout = _sfc_main;
      }
      return component;
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h$1(App, props)
      }).use(plugin).use(ssrPlugin).use(ZoraSSR, Zora).use(x, Ziggy$1);
    }
  }),
  "13520"
);
